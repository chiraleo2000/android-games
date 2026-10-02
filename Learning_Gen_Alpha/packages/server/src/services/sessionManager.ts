import crypto from 'node:crypto';
import { v4 as uuidv4 } from 'uuid';
import { GameSession, SessionState, SessionPlayer, GameSettings } from '@game/shared';
import { postgresClient } from '../db/postgres';
import { redisClient } from '../db/redis';

const SESSION_CACHE_TTL = 7200; // 2 hours
const JOIN_CODE_LENGTH = 6;
const JOIN_CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // no ambiguous chars
const MAX_JOIN_CODE_RETRIES = 5;

function generateJoinCode(): string {
  const bytes = crypto.randomBytes(JOIN_CODE_LENGTH);
  let code = '';
  for (let i = 0; i < JOIN_CODE_LENGTH; i++) {
    code += JOIN_CODE_CHARS[bytes[i] % JOIN_CODE_CHARS.length];
  }
  return code;
}

function sessionCacheKey(sessionId: string): string {
  return `session:${sessionId}`;
}

function joinCodeCacheKey(joinCode: string): string {
  return `joincode:${joinCode}`;
}

export class SessionManager {
  /**
   * Create a new game session with a unique join code
   */
  async createSession(hostPlayerId: string, settings: Partial<GameSettings> = {}): Promise<GameSession> {
    const sessionId = uuidv4();
    const gameSettings: GameSettings = {
      minPlayers: settings.minPlayers ?? 2,
      maxPlayers: settings.maxPlayers ?? 5,
      difficulty: settings.difficulty ?? 1,
      activityTypes: settings.activityTypes ?? [],
      timeLimit: settings.timeLimit,
      allowHints: settings.allowHints ?? true,
    };

    // Generate unique join code with retries
    let joinCode = '';
    for (let attempt = 0; attempt < MAX_JOIN_CODE_RETRIES; attempt++) {
      const candidate = generateJoinCode();
      const exists = await this.isJoinCodeActive(candidate);
      if (!exists) {
        joinCode = candidate;
        break;
      }
    }
    if (!joinCode) {
      throw new Error('Failed to generate unique join code after maximum retries');
    }

    // Insert session into database
    await postgresClient.query(
      `INSERT INTO sessions (id, join_code, host_player_id, state, min_players, max_players, difficulty, activity_types, time_limit, allow_hints)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
      [sessionId, joinCode, hostPlayerId, SessionState.WAITING,
       gameSettings.minPlayers, gameSettings.maxPlayers, gameSettings.difficulty,
       gameSettings.activityTypes, gameSettings.timeLimit, gameSettings.allowHints]
    );

    // Add host as first player
    await postgresClient.query(
      `INSERT INTO session_players (session_id, player_id, is_connected, assigned_role, score)
       VALUES ($1, $2, true, 'host', 0)`,
      [sessionId, hostPlayerId]
    );

    const session: GameSession = {
      id: sessionId,
      joinCode,
      hostPlayerId,
      players: [{
        playerId: hostPlayerId,
        joinedAt: new Date(),
        isConnected: true,
        currentRole: 'host',
        score: 0,
      }],
      state: SessionState.WAITING,
      settings: gameSettings,
      activityHistory: [],
      createdAt: new Date(),
    };

    // Cache in Redis
    await redisClient.set(sessionCacheKey(sessionId), JSON.stringify(session), SESSION_CACHE_TTL);
    await redisClient.set(joinCodeCacheKey(joinCode), sessionId, SESSION_CACHE_TTL);

    return session;
  }

  /**
   * Add a player to a session by join code
   */
  async addPlayer(joinCode: string, playerId: string): Promise<GameSession> {
    const session = await this.getSessionByJoinCode(joinCode);
    if (!session) {
      throw new Error('Session not found with this join code');
    }
    if (session.state !== SessionState.WAITING && session.state !== SessionState.READY) {
      throw new Error('Session is not accepting new players');
    }
    if (session.players.length >= session.settings.maxPlayers) {
      throw new Error('Session is full');
    }
    if (session.players.some((p: SessionPlayer) => p.playerId === playerId)) {
      throw new Error('Player already in session');
    }

    const newPlayer: SessionPlayer = {
      playerId,
      joinedAt: new Date(),
      isConnected: true,
      currentRole: 'participant',
      score: 0,
    };

    await postgresClient.query(
      `INSERT INTO session_players (session_id, player_id, is_connected, assigned_role, score)
       VALUES ($1, $2, true, 'participant', 0)`,
      [session.id, playerId]
    );

    session.players.push(newPlayer);

    // Transition to READY if minimum players reached
    if (session.players.length >= session.settings.minPlayers && session.state === SessionState.WAITING) {
      session.state = SessionState.READY;
      await postgresClient.query(
        `UPDATE sessions SET state = $1 WHERE id = $2`,
        [SessionState.READY, session.id]
      );
    }

    await this.cacheSession(session);
    return session;
  }

  /**
   * Remove a player from a session
   */
  async removePlayer(sessionId: string, playerId: string): Promise<GameSession | null> {
    const session = await this.getSession(sessionId);
    if (!session) {
      throw new Error('Session not found');
    }

    session.players = session.players.filter((p: SessionPlayer) => p.playerId !== playerId);

    await postgresClient.query(
      `DELETE FROM session_players WHERE session_id = $1 AND player_id = $2`,
      [sessionId, playerId]
    );

    // If no players left, abandon the session
    if (session.players.length === 0) {
      session.state = SessionState.ABANDONED;
      session.endedAt = new Date();
      await postgresClient.query(
        `UPDATE sessions SET state = $1, ended_at = NOW() WHERE id = $2`,
        [SessionState.ABANDONED, sessionId]
      );
      await this.invalidateCache(session);
      return null;
    }

    // Transfer host if the host left
    if (session.hostPlayerId === playerId && session.players.length > 0) {
      session.hostPlayerId = session.players[0].playerId;
      await postgresClient.query(
        `UPDATE sessions SET host_player_id = $1 WHERE id = $2`,
        [session.hostPlayerId, sessionId]
      );
    }

    // Drop to WAITING if below minimum
    if (session.players.length < session.settings.minPlayers && session.state === SessionState.READY) {
      session.state = SessionState.WAITING;
      await postgresClient.query(
        `UPDATE sessions SET state = $1 WHERE id = $2`,
        [SessionState.WAITING, sessionId]
      );
    }

    await this.cacheSession(session);
    return session;
  }

  /**
   * Start the game in a session (only host)
   */
  async startGame(sessionId: string, playerId: string): Promise<GameSession> {
    const session = await this.getSession(sessionId);
    if (!session) {
      throw new Error('Session not found');
    }
    if (session.hostPlayerId !== playerId) {
      throw new Error('Only the host can start the game');
    }
    if (session.state !== SessionState.READY) {
      throw new Error('Session is not ready to start');
    }
    if (session.players.length < session.settings.minPlayers) {
      throw new Error('Not enough players to start');
    }

    session.state = SessionState.IN_PROGRESS;
    session.startedAt = new Date();

    await postgresClient.query(
      `UPDATE sessions SET state = $1, started_at = NOW() WHERE id = $2`,
      [SessionState.IN_PROGRESS, sessionId]
    );

    await this.cacheSession(session);
    return session;
  }

  /**
   * End a game session
   */
  async endSession(sessionId: string): Promise<GameSession> {
    const session = await this.getSession(sessionId);
    if (!session) {
      throw new Error('Session not found');
    }

    session.state = SessionState.COMPLETED;
    session.endedAt = new Date();

    await postgresClient.query(
      `UPDATE sessions SET state = $1, ended_at = NOW() WHERE id = $2`,
      [SessionState.COMPLETED, sessionId]
    );

    await this.invalidateCache(session);
    return session;
  }

  /**
   * Get session by ID (cache first, then DB)
   */
  async getSession(sessionId: string): Promise<GameSession | null> {
    // Try cache first
    const cached = await redisClient.get(sessionCacheKey(sessionId));
    if (cached) {
      return JSON.parse(cached);
    }

    // Fallback to database
    const result = await postgresClient.query(
      `SELECT s.*, 
        json_agg(json_build_object(
          'playerId', sp.player_id,
          'joinedAt', sp.joined_at,
          'isConnected', sp.is_connected,
          'currentRole', sp.assigned_role,
          'score', sp.score
        )) as players_data
       FROM sessions s
       LEFT JOIN session_players sp ON s.id = sp.session_id
       WHERE s.id = $1
       GROUP BY s.id`,
      [sessionId]
    );

    if (result.rows.length === 0) return null;

    const row = result.rows[0];
    const session = this.rowToSession(row);
    await this.cacheSession(session);
    return session;
  }

  /**
   * Get session by join code
   */
  async getSessionByJoinCode(joinCode: string): Promise<GameSession | null> {
    // Try cache for join code mapping
    const sessionId = await redisClient.get(joinCodeCacheKey(joinCode));
    if (sessionId) {
      return this.getSession(sessionId);
    }

    const result = await postgresClient.query(
      `SELECT id FROM sessions WHERE join_code = $1 AND state IN ('WAITING', 'READY')`,
      [joinCode]
    );

    if (result.rows.length === 0) return null;
    return this.getSession(result.rows[0].id);
  }

  /**
   * Update player connection status
   */
  async setPlayerConnected(sessionId: string, playerId: string, connected: boolean): Promise<void> {
    await postgresClient.query(
      `UPDATE session_players SET is_connected = $1 WHERE session_id = $2 AND player_id = $3`,
      [connected, sessionId, playerId]
    );

    const session = await this.getSession(sessionId);
    if (session) {
      const player = session.players.find((p: SessionPlayer) => p.playerId === playerId);
      if (player) {
        player.isConnected = connected;
      }
      await this.cacheSession(session);
    }
  }

  /**
   * Update current activity for the session
   */
  async setCurrentActivity(sessionId: string, activityId: string): Promise<void> {
    const session = await this.getSession(sessionId);
    if (!session) return;

    if (session.currentActivity) {
      session.activityHistory.push(session.currentActivity);
    }
    session.currentActivity = activityId;

    await postgresClient.query(
      `UPDATE sessions SET current_activity = $1, activity_history = array_append(activity_history, $2) WHERE id = $3`,
      [activityId, session.activityHistory.at(-1) ?? null, sessionId]
    );

    await this.cacheSession(session);
  }

  private async isJoinCodeActive(code: string): Promise<boolean> {
    const cached = await redisClient.exists(joinCodeCacheKey(code));
    if (cached) return true;

    const result = await postgresClient.query(
      `SELECT 1 FROM sessions WHERE join_code = $1 AND state IN ('WAITING', 'READY', 'IN_PROGRESS', 'PAUSED') LIMIT 1`,
      [code]
    );
    return result.rows.length > 0;
  }

  private async cacheSession(session: GameSession): Promise<void> {
    await redisClient.set(sessionCacheKey(session.id), JSON.stringify(session), SESSION_CACHE_TTL);
    await redisClient.set(joinCodeCacheKey(session.joinCode), session.id, SESSION_CACHE_TTL);
  }

  private async invalidateCache(session: GameSession): Promise<void> {
    await redisClient.del(sessionCacheKey(session.id));
    await redisClient.del(joinCodeCacheKey(session.joinCode));
  }

  private rowToSession(row: any): GameSession {
    return {
      id: row.id,
      joinCode: row.join_code,
      hostPlayerId: row.host_player_id,
      players: (row.players_data || []).filter((p: any) => p.playerId).map((p: any) => ({
        playerId: p.playerId,
        joinedAt: new Date(p.joinedAt),
        isConnected: p.isConnected,
        currentRole: p.currentRole || 'participant',
        score: p.score || 0,
      })),
      state: row.state as SessionState,
      settings: {
        minPlayers: row.min_players,
        maxPlayers: row.max_players,
        difficulty: row.difficulty,
        activityTypes: row.activity_types || [],
        timeLimit: row.time_limit,
        allowHints: row.allow_hints,
      },
      currentActivity: row.current_activity,
      activityHistory: row.activity_history || [],
      createdAt: new Date(row.created_at),
      startedAt: row.started_at ? new Date(row.started_at) : undefined,
      endedAt: row.ended_at ? new Date(row.ended_at) : undefined,
    };
  }
}

export const sessionManager = new SessionManager();
