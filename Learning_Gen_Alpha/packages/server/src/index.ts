import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import helmet from 'helmet';
import cors from 'cors';
import { config } from './config';
import { postgresClient } from './db/postgres';
import { redisClient } from './db/redis';
import { runMigrations } from './db/migrate';
import { initializeKeys } from './utils/jwt';
import authRoutes from './routes/authRoutes';
import gameRoutes from './routes/gameRoutes';
import chatRoutes from './routes/chatRoutes';
import progressRoutes from './routes/progressRoutes';
import { WebSocketManager } from './services/webSocketManager';
import { gameService } from './services/gameService';
import { chatService } from './services/chatService';

const ALLOWED_ORIGINS = config.nodeEnv === 'production'
  ? (process.env.ALLOWED_ORIGINS?.split(',') ?? [])
  : ['http://localhost:4013'];

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ALLOWED_ORIGINS,
    methods: ['GET', 'POST'],
    credentials: true,
  },
  pingTimeout: 10000,
  pingInterval: 30000,
});

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", 'data:', 'blob:'],
      connectSrc: ["'self'", ...ALLOWED_ORIGINS],
      fontSrc: ["'self'"],
      objectSrc: ["'none'"],
      frameAncestors: ["'none'"],
    },
  },
  crossOriginEmbedderPolicy: false,
}));
app.use(cors({
  origin: ALLOWED_ORIGINS,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.disable('x-powered-by');

// Body parsing with size limits
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// Routes
app.use('/auth', authRoutes);
app.use('/game', gameRoutes);
app.use('/chat', chatRoutes);
app.use('/progress', progressRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// WebSocket manager instance
let wsManager: WebSocketManager;

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('SIGTERM received, shutting down gracefully');
  if (wsManager) {
    wsManager.destroy();
  }
  httpServer.close(async () => {
    await redisClient.close();
    await postgresClient.close();
    process.exit(0);
  });
});

// Start server (IIFE to enable async at top level in CommonJS)
void (async () => {
  try {
    initializeKeys();
    console.log('JWT keys initialized');

    await redisClient.connect();
    console.log('Redis connected successfully');

    await postgresClient.query('SELECT NOW()');
    console.log('PostgreSQL connected successfully');

    await runMigrations();

    wsManager = new WebSocketManager(io);
    console.log('WebSocket manager initialized');

    gameService.setWebSocketManager(wsManager);
    chatService.setWebSocketManager(wsManager);

    httpServer.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
      console.log(`Environment: ${config.nodeEnv}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
})();

export { app, io };
