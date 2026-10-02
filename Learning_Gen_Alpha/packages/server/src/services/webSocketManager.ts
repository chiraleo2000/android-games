import { Server, Socket } from 'socket.io';
import { verifyToken } from '../utils/jwt';
import { sessionManager } from './sessionManager';
import { GameEventType } from '@game/shared';

interface ConnectedPlayer {
  socketId: string;
  playerId: string;
  sessionId: string;
  username: string;
  connectedAt: Date;
  lastHeartbeat: Date;
}

interface QueuedMessage {
  event: string;
  data: any;
  timestamp: Date;
}

const HEARTBEAT_INTERVAL = 30_000; // 30s
const HEARTBEAT_TIMEOUT = 10_000;  // 10s
const RECONNECT_GRACE_PERIOD = 60_000; // 60s

export class WebSocketManager {
  private readonly io: Server;
  private readonly connections: Map<string, ConnectedPlayer> = new Map();
  private readonly socketToPlayer: Map<string, string> = new Map();
  private readonly messageQueues: Map<string, QueuedMessage[]> = new Map();
  private readonly disconnectTimers: Map<string, NodeJS.Timeout> = new Map();
  private heartbeatInterval?: NodeJS.Timeout;

  constructor(io: Server) {
    this.io = io;
    this.setupConnectionHandler();
    this.startHeartbeat();
  }

  private setupConnectionHandler() {
    this.io.use(async (socket, next) => {
      try {
        const token = socket.handshake.auth.token || socket.handshake.query.token;
        if (!token) {
          return next(new Error('Authentication required'));
        }
        const payload = verifyToken(token as string);
        (socket as any).playerData = payload;
        next();
      } catch {
        next(new Error('Invalid authentication token'));
      }
    });

    this.io.on('connection', (socket: Socket) => {
      const playerData = (socket as any).playerData;
      this.handleConnect(socket, playerData);

      socket.on('join_session', (data: { sessionId: string }) => {
        this.handleJoinSession(socket, playerData.playerId, data.sessionId);
      });

      socket.on('leave_session', () => {
        this.handleLeaveSession(socket, playerData.playerId);
      });

      socket.on('heartbeat', () => {
        this.handleHeartbeat(playerData.playerId);
      });

      socket.on('disconnect', () => {
        this.handleDisconnect(socket, playerData.playerId);
      });
    });
  }

  private handleConnect(socket: Socket, playerData: any) {
    const playerId = playerData.playerId;

    // Cancel any pending disconnect timer
    const timer = this.disconnectTimers.get(playerId);
    if (timer) {
      clearTimeout(timer);
      this.disconnectTimers.delete(playerId);
    }

    // Check if this is a reconnection
    const existing = this.connections.get(playerId);
    if (existing) {
      // Remove old socket mapping
      this.socketToPlayer.delete(existing.socketId);
    }

    const connection: ConnectedPlayer = {
      socketId: socket.id,
      playerId,
      sessionId: '',
      username: playerData.username,
      connectedAt: new Date(),
      lastHeartbeat: new Date(),
    };

    this.connections.set(playerId, connection);
    this.socketToPlayer.set(socket.id, playerId);

    // Deliver queued messages
    this.deliverQueuedMessages(playerId, socket);

    socket.emit('connected', { playerId, message: 'Connected to game server' });
  }

  async handleJoinSession(socket: Socket, playerId: string, sessionId: string) {
    const connection = this.connections.get(playerId);
    if (!connection) return;

    connection.sessionId = sessionId;
    socket.join(`session:${sessionId}`);

    // Mark player as connected
    await sessionManager.setPlayerConnected(sessionId, playerId, true);

    // Notify others in session
    this.broadcastToSession(sessionId, 'player_reconnected', {
      playerId,
      username: connection.username,
      eventType: GameEventType.PLAYER_RECONNECTED,
    }, playerId);
  }

  private async handleLeaveSession(socket: Socket, playerId: string) {
    const connection = this.connections.get(playerId);
    if (!connection?.sessionId) return;

    const sessionId = connection.sessionId;
    socket.leave(`session:${sessionId}`);

    this.broadcastToSession(sessionId, 'player_left', {
      playerId,
      username: connection.username,
      eventType: GameEventType.PLAYER_LEFT,
    }, playerId);

    connection.sessionId = '';
  }

  private handleHeartbeat(playerId: string) {
    const connection = this.connections.get(playerId);
    if (connection) {
      connection.lastHeartbeat = new Date();
    }
  }

  private async handleDisconnect(socket: Socket, playerId: string) {
    const connection = this.connections.get(playerId);
    if (!connection) return;

    const sessionId = connection.sessionId;

    // Don't remove immediately — start grace period
    if (sessionId) {
      await sessionManager.setPlayerConnected(sessionId, playerId, false);

      this.broadcastToSession(sessionId, 'player_disconnected', {
        playerId,
        username: connection.username,
        gracePeriod: RECONNECT_GRACE_PERIOD,
        eventType: GameEventType.PLAYER_DISCONNECTED,
      }, playerId);
    }

    // Start disconnect timer
    const timer = setTimeout(async () => {
      this.connections.delete(playerId);
      this.socketToPlayer.delete(socket.id);
      this.disconnectTimers.delete(playerId);
      this.messageQueues.delete(playerId);

      if (sessionId) {
        // Notify session of permanent disconnect
        this.broadcastToSession(sessionId, 'player_timeout', {
          playerId,
          username: connection.username,
        });
      }
    }, RECONNECT_GRACE_PERIOD);

    this.disconnectTimers.set(playerId, timer);
  }

  /**
   * Broadcast an event to all players in a session
   */
  broadcastToSession(sessionId: string, event: string, data: any, excludePlayerId?: string) {
    if (excludePlayerId) {
      // Queue for disconnected players too
      this.connections.forEach((conn) => {
        if (conn.sessionId === sessionId && conn.playerId !== excludePlayerId) {
          const socket = this.io.sockets.sockets.get(conn.socketId);
          if (socket) {
            socket.emit(event, data);
          } else {
            this.queueMessage(conn.playerId, event, data);
          }
        }
      });
    } else {
      this.io.to(`session:${sessionId}`).emit(event, data);
    }
  }

  /**
   * Send to a specific player
   */
  sendToPlayer(playerId: string, event: string, data: any) {
    const connection = this.connections.get(playerId);
    if (!connection) {
      this.queueMessage(playerId, event, data);
      return;
    }

    const socket = this.io.sockets.sockets.get(connection.socketId);
    if (socket) {
      socket.emit(event, data);
    } else {
      this.queueMessage(playerId, event, data);
    }
  }

  /**
   * Get all connected players in a session
   */
  getSessionPlayers(sessionId: string): ConnectedPlayer[] {
    const players: ConnectedPlayer[] = [];
    this.connections.forEach((conn) => {
      if (conn.sessionId === sessionId) {
        players.push(conn);
      }
    });
    return players;
  }

  private queueMessage(playerId: string, event: string, data: any) {
    if (!this.messageQueues.has(playerId)) {
      this.messageQueues.set(playerId, []);
    }
    const queue = this.messageQueues.get(playerId);
    if (!queue) return;
    // Keep max 100 queued messages
    if (queue.length < 100) {
      queue.push({ event, data, timestamp: new Date() });
    }
  }

  private deliverQueuedMessages(playerId: string, socket: Socket) {
    const queue = this.messageQueues.get(playerId);
    if (!queue || queue.length === 0) return;

    for (const msg of queue) {
      socket.emit(msg.event, msg.data);
    }
    this.messageQueues.delete(playerId);
  }

  private startHeartbeat() {
    this.heartbeatInterval = setInterval(() => {
      const now = Date.now();
      this.connections.forEach((conn) => {
        const elapsed = now - conn.lastHeartbeat.getTime();
        if (elapsed > HEARTBEAT_INTERVAL + HEARTBEAT_TIMEOUT) {
          // Connection seems unhealthy
          const socket = this.io.sockets.sockets.get(conn.socketId);
          if (socket) {
            socket.disconnect(true);
          }
        } else {
          const socket = this.io.sockets.sockets.get(conn.socketId);
          if (socket) {
            socket.emit('heartbeat_ping');
          }
        }
      });
    }, HEARTBEAT_INTERVAL);
  }

  destroy() {
    if (this.heartbeatInterval) {
      clearInterval(this.heartbeatInterval);
    }
    this.disconnectTimers.forEach(timer => clearTimeout(timer));
  }
}
