/**
 * Game routes integration tests
 * Tests the complete gameplay access flow via HTTP endpoints:
 * register -> create session -> join -> start -> play steps -> submit -> end
 */

import request from 'supertest';
import express from 'express';
import gameRoutes from '../gameRoutes';
import authRoutes from '../authRoutes';
import { postgresClient } from '../../db/postgres';
import { redisClient } from '../../db/redis';
import { initializeKeys, generateTokenPair } from '../../utils/jwt';

// Create test app
const app = express();
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/game', gameRoutes);

// Mock database, Redis, and services that touch external state
jest.mock('../../db/postgres');
jest.mock('../../db/redis');
jest.mock('../../utils/password');
jest.mock('../../services/sessionManager');
jest.mock('../../services/contentGenerator');
jest.mock('../../services/progressTracker');

import { sessionManager } from '../../services/sessionManager';
import { contentGenerator } from '../../services/contentGenerator';
import { progressTracker } from '../../services/progressTracker';
import { SessionState, ActivityType, SkillCategory } from '@game/shared';

// Helpers
function makeToken(playerId = 'player-1', username = 'testplayer') {
  return generateTokenPair({ playerId, username }).accessToken;
}

function makeSession(overrides: Record<string, any> = {}) {
  return {
    id: 'session-1',
    joinCode: 'GAME42',
    hostPlayerId: 'player-1',
    players: [
      { playerId: 'player-1', joinedAt: new Date(), isConnected: true, currentRole: 'host', score: 0 },
    ],
    state: SessionState.WAITING,
    settings: { minPlayers: 2, maxPlayers: 5, difficulty: 1, activityTypes: [], allowHints: true },
    activityHistory: [],
    createdAt: new Date(),
    ...overrides,
  };
}

function makeActivity(overrides: Record<string, any> = {}) {
  return {
    id: 'activity-1',
    type: ActivityType.CODE_CHALLENGE,
    title: 'Code Together: Build a Calculator',
    description: 'Build it!',
    difficulty: 1,
    requiredPlayers: 2,
    roles: [
      { roleId: 'role_1', name: 'Leader', description: 'Leads', capabilities: [], restrictions: [] },
      { roleId: 'role_2', name: 'Analyst', description: 'Analyzes', capabilities: [], restrictions: [] },
    ],
    content: { scenario: 'Test', objectives: [], resources: {}, constraints: [], visualAssets: [] },
    solution: { type: 'COLLABORATIVE', expectedAnswer: {}, validationRules: [], requiresAllPlayers: false },
    hints: [{ level: 1, content: 'Hint 1', unlockAfterAttempts: 3 }],
    timeEstimate: 300,
    skillsRequired: { technicalSkills: ['coding'], softSkills: ['collab'], minimumSkillLevel: 1 },
    steps: [
      { stepNumber: 1, title: 'Understand', description: 'Read', coopRequirement: 'All', estimatedTime: 60 },
      { stepNumber: 2, title: 'Build', description: 'Code', coopRequirement: 'All', estimatedTime: 120 },
    ],
    educationalMeta: {
      skillCategories: [SkillCategory.SOFTWARE],
      learningObjectives: ['Learn coding'],
      realWorldApplication: 'Real devs do this',
      aiEraRelevance: 'AI helps',
      assessmentCriteria: ['Quality'],
    },
    createdAt: new Date(),
    ...overrides,
  };
}

describe('Game Routes Integration — Gameplay Access', () => {
  let token: string;

  beforeAll(() => {
    initializeKeys();
  });

  beforeEach(() => {
    jest.clearAllMocks();
    // Rate limiter: allow requests
    (redisClient.get as jest.Mock).mockResolvedValue(null);
    (redisClient.set as jest.Mock).mockResolvedValue(undefined);
    (redisClient.setEx as jest.Mock).mockResolvedValue(undefined);
    (redisClient.incr as jest.Mock).mockResolvedValue(1);
    (redisClient.ttl as jest.Mock).mockResolvedValue(-1);

    token = makeToken();
  });

  // ---- Authentication Guard ----

  describe('Authentication required', () => {
    it('should reject all game endpoints without token', async () => {
      const endpoints = [
        { method: 'post', path: '/game/sessions' },
        { method: 'post', path: '/game/sessions/join' },
        { method: 'post', path: '/game/sessions/session-1/start' },
        { method: 'post', path: '/game/sessions/session-1/submit' },
        { method: 'post', path: '/game/sessions/session-1/step' },
        { method: 'post', path: '/game/sessions/session-1/hint' },
        { method: 'post', path: '/game/sessions/session-1/next' },
        { method: 'post', path: '/game/sessions/session-1/end' },
      ];

      for (const ep of endpoints) {
        const res = await (request(app) as any)[ep.method](ep.path).send({});
        expect(res.status).toBe(401);
      }
    });

    it('should reject with invalid token', async () => {
      const res = await request(app)
        .post('/game/sessions')
        .set('Authorization', 'Bearer invalid-token')
        .send({});

      expect(res.status).toBe(401);
    });
  });

  // ---- Session Creation ----

  describe('POST /game/sessions — Create Session', () => {
    it('should create a new game session', async () => {
      const session = makeSession();
      (sessionManager.createSession as jest.Mock).mockResolvedValue(session);

      const res = await request(app)
        .post('/game/sessions')
        .set('Authorization', `Bearer ${token}`)
        .send({ settings: { difficulty: 2 } });

      expect(res.status).toBe(201);
      expect(res.body.session).toBeDefined();
      expect(res.body.session.id).toBe('session-1');
      expect(res.body.session.joinCode).toBe('GAME42');
      expect(res.body.session.state).toBe(SessionState.WAITING);
    });

    it('should create session with default settings', async () => {
      const session = makeSession();
      (sessionManager.createSession as jest.Mock).mockResolvedValue(session);

      const res = await request(app)
        .post('/game/sessions')
        .set('Authorization', `Bearer ${token}`)
        .send({});

      expect(res.status).toBe(201);
      expect(sessionManager.createSession).toHaveBeenCalledWith('player-1', {});
    });
  });

  // ---- Session Join ----

  describe('POST /game/sessions/join — Join Session', () => {
    it('should join a session with valid join code', async () => {
      const session = makeSession({
        state: SessionState.READY,
        players: [
          { playerId: 'player-1', joinedAt: new Date(), isConnected: true, currentRole: 'host', score: 0 },
          { playerId: 'player-2', joinedAt: new Date(), isConnected: true, currentRole: 'participant', score: 0 },
        ],
      });
      (sessionManager.addPlayer as jest.Mock).mockResolvedValue(session);

      const player2Token = makeToken('player-2', 'player2');
      const res = await request(app)
        .post('/game/sessions/join')
        .set('Authorization', `Bearer ${player2Token}`)
        .send({ joinCode: 'GAME42' });

      expect(res.status).toBe(200);
      expect(res.body.session.players).toHaveLength(2);
    });

    it('should reject invalid join code format', async () => {
      const res = await request(app)
        .post('/game/sessions/join')
        .set('Authorization', `Bearer ${token}`)
        .send({ joinCode: 'AB' });

      expect(res.status).toBe(400);
      expect(res.body.error).toContain('Invalid join code');
    });

    it('should reject missing join code', async () => {
      const res = await request(app)
        .post('/game/sessions/join')
        .set('Authorization', `Bearer ${token}`)
        .send({});

      expect(res.status).toBe(400);
    });

    it('should handle lowercase join code (auto-uppercased)', async () => {
      const session = makeSession({ state: SessionState.READY });
      (sessionManager.addPlayer as jest.Mock).mockResolvedValue(session);

      const res = await request(app)
        .post('/game/sessions/join')
        .set('Authorization', `Bearer ${token}`)
        .send({ joinCode: 'game42' });

      expect(res.status).toBe(200);
      expect(sessionManager.addPlayer).toHaveBeenCalledWith('GAME42', 'player-1');
    });
  });

  // ---- Start Game ----

  describe('POST /game/sessions/:sessionId/start — Start Game', () => {
    it('should start the game and return activity', async () => {
      const session = makeSession({ state: SessionState.IN_PROGRESS });
      const activity = makeActivity();

      (sessionManager.startGame as jest.Mock).mockResolvedValue(session);
      (postgresClient.query as jest.Mock).mockResolvedValue({
        rows: [{ display_name: 'Test', technical_skill_level: 1, soft_skill_level: 1 }],
      });
      (contentGenerator.generateActivity as jest.Mock).mockReturnValue(activity);
      (sessionManager.setCurrentActivity as jest.Mock).mockResolvedValue(undefined);

      const res = await request(app)
        .post('/game/sessions/session-1/start')
        .set('Authorization', `Bearer ${token}`)
        .send({});

      expect(res.status).toBe(200);
      expect(res.body.session).toBeDefined();
      expect(res.body.activity).toBeDefined();
      expect(res.body.activity.id).toBe('activity-1');
      expect(res.body.activity.type).toBe(ActivityType.CODE_CHALLENGE);
      // Solution should NOT be sent to clients
      expect(res.body.activity.solution).toBeUndefined();
      // Hints content should be hidden initially
      expect(res.body.activity.hints).toEqual([]);
    });

    it('should reject start from non-host player', async () => {
      (sessionManager.startGame as jest.Mock).mockRejectedValue(
        new Error('Only the host can start the game'),
      );

      const res = await request(app)
        .post('/game/sessions/session-1/start')
        .set('Authorization', `Bearer ${token}`)
        .send({});

      expect(res.status).toBe(400);
      expect(res.body.error).toContain('host');
    });
  });

  // ---- Submit Solution ----

  describe('POST /game/sessions/:sessionId/submit — Submit Solution', () => {
    beforeEach(async () => {
      // Pre-start a game so the activity is active in gameService
      const session = makeSession({ state: SessionState.IN_PROGRESS, players: [
        { playerId: 'player-1', joinedAt: new Date(), isConnected: true, currentRole: 'host', score: 0 },
        { playerId: 'player-2', joinedAt: new Date(), isConnected: true, currentRole: 'participant', score: 0 },
      ]});
      const activity = makeActivity();

      (sessionManager.startGame as jest.Mock).mockResolvedValue(session);
      (postgresClient.query as jest.Mock).mockResolvedValue({
        rows: [{ display_name: 'Player', technical_skill_level: 1, soft_skill_level: 1 }],
      });
      (contentGenerator.generateActivity as jest.Mock).mockReturnValue(activity);
      (sessionManager.setCurrentActivity as jest.Mock).mockResolvedValue(undefined);

      // Call the startGame through the route to initialise internal state
      await request(app)
        .post('/game/sessions/session-1/start')
        .set('Authorization', `Bearer ${token}`)
        .send({});
    });

    it('should reject submission without activityId', async () => {
      const res = await request(app)
        .post('/game/sessions/session-1/submit')
        .set('Authorization', `Bearer ${token}`)
        .send({ answer: 'test', explanation: 'some explanation text here' });

      expect(res.status).toBe(400);
      expect(res.body.error).toContain('activityId');
    });

    it('should reject overly long explanation (>5000 chars)', async () => {
      const res = await request(app)
        .post('/game/sessions/session-1/submit')
        .set('Authorization', `Bearer ${token}`)
        .send({
          activityId: 'activity-1',
          answer: 'test',
          explanation: 'x'.repeat(5001),
        });

      expect(res.status).toBe(400);
      expect(res.body.error).toContain('maximum length');
    });
  });

  // ---- Complete Step ----

  describe('POST /game/sessions/:sessionId/step — Complete Step', () => {
    it('should reject without activityId or stepNumber', async () => {
      const res = await request(app)
        .post('/game/sessions/session-1/step')
        .set('Authorization', `Bearer ${token}`)
        .send({});

      expect(res.status).toBe(400);
      expect(res.body.error).toContain('required');
    });
  });

  // ---- Request Hint ----

  describe('POST /game/sessions/:sessionId/hint — Request Hint', () => {
    it('should return 404 when no hints available', async () => {
      // gameService.requestHint returns null when no hints unlocked
      // Since we don't pre-start a game here, the activity doesn't exist
      const res = await request(app)
        .post('/game/sessions/session-1/hint')
        .set('Authorization', `Bearer ${token}`)
        .send({ activityId: 'non-existent' });

      expect(res.status).toBe(404);
      expect(res.body.error).toContain('hints');
    });
  });

  // ---- Full Gameplay Flow ----

  describe('Full gameplay flow (end-to-end)', () => {
    it('should complete a full game cycle: create → join → start → step → submit → end', async () => {
      const hostToken = makeToken('host-1', 'hostplayer');
      const player2Token = makeToken('player-2', 'player2');

      // 1. Host creates session
      const sessionCreated = makeSession({ hostPlayerId: 'host-1' });
      (sessionManager.createSession as jest.Mock).mockResolvedValue(sessionCreated);

      const createRes = await request(app)
        .post('/game/sessions')
        .set('Authorization', `Bearer ${hostToken}`)
        .send({ settings: { difficulty: 2, maxPlayers: 4 } });

      expect(createRes.status).toBe(201);
      const joinCode = createRes.body.session.joinCode;

      // 2. Player 2 joins
      const sessionJoined = makeSession({
        hostPlayerId: 'host-1',
        state: SessionState.READY,
        players: [
          { playerId: 'host-1', joinedAt: new Date(), isConnected: true, currentRole: 'host', score: 0 },
          { playerId: 'player-2', joinedAt: new Date(), isConnected: true, currentRole: 'participant', score: 0 },
        ],
      });
      (sessionManager.addPlayer as jest.Mock).mockResolvedValue(sessionJoined);

      const joinRes = await request(app)
        .post('/game/sessions/join')
        .set('Authorization', `Bearer ${player2Token}`)
        .send({ joinCode });

      expect(joinRes.status).toBe(200);
      expect(joinRes.body.session.players).toHaveLength(2);

      // 3. Host starts game
      const sessionStarted = makeSession({
        hostPlayerId: 'host-1',
        state: SessionState.IN_PROGRESS,
        players: sessionJoined.players,
      });
      const activity = makeActivity();

      (sessionManager.startGame as jest.Mock).mockResolvedValue(sessionStarted);
      (postgresClient.query as jest.Mock).mockResolvedValue({
        rows: [{ display_name: 'Player', technical_skill_level: 2, soft_skill_level: 2 }],
      });
      (contentGenerator.generateActivity as jest.Mock).mockReturnValue(activity);
      (sessionManager.setCurrentActivity as jest.Mock).mockResolvedValue(undefined);

      const startRes = await request(app)
        .post('/game/sessions/session-1/start')
        .set('Authorization', `Bearer ${hostToken}`)
        .send({});

      expect(startRes.status).toBe(200);
      expect(startRes.body.activity.title).toContain('Calculator');

      // 4. Host submits correct solution
      (sessionManager.getSession as jest.Mock).mockResolvedValue(sessionStarted);
      (progressTracker.updateProgress as jest.Mock).mockResolvedValue({});
      (contentGenerator.adaptDifficultyUp as jest.Mock).mockReturnValue(2);

      const submitRes = await request(app)
        .post('/game/sessions/session-1/submit')
        .set('Authorization', `Bearer ${hostToken}`)
        .send({
          activityId: activity.id,
          answer: { code: 'function calc() { return 42; }' },
          explanation: 'We implemented a calculator that computes the answer to life.',
        });

      expect(submitRes.status).toBe(200);
      expect(submitRes.body.correct).toBe(true);
      expect(submitRes.body.partialCredit).toBe(100);

      // 5. Host ends the game
      const sessionEnded = makeSession({
        hostPlayerId: 'host-1',
        state: SessionState.COMPLETED,
        players: [
          { playerId: 'host-1', joinedAt: new Date(), isConnected: true, currentRole: 'host', score: 100 },
          { playerId: 'player-2', joinedAt: new Date(), isConnected: true, currentRole: 'participant', score: 100 },
        ],
        activityHistory: [activity.id],
        startedAt: new Date(Date.now() - 300000),
        endedAt: new Date(),
      });

      (sessionManager.endSession as jest.Mock).mockResolvedValue(sessionEnded);
      (progressTracker.incrementGamesPlayed as jest.Mock).mockResolvedValue(undefined);

      const endRes = await request(app)
        .post('/game/sessions/session-1/end')
        .set('Authorization', `Bearer ${hostToken}`)
        .send({});

      expect(endRes.status).toBe(200);
      expect(endRes.body.teamStats.totalScore).toBe(200);
      expect(endRes.body.teamStats.activitiesCompleted).toBe(1);
      expect(endRes.body.playerStats).toHaveLength(2);
    });
  });
});
