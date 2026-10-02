/**
 * Authentication routes integration tests
 * Tests the complete authentication flow
 */

import request from 'supertest';
import express from 'express';
import authRoutes from '../authRoutes';
import { postgresClient } from '../../db/postgres';
import { redisClient } from '../../db/redis';
import { initializeKeys } from '../../utils/jwt';

// Create test app
const app = express();
app.use(express.json());
app.use('/auth', authRoutes);

// Mock database and Redis
jest.mock('../../db/postgres');
jest.mock('../../db/redis');
jest.mock('../../utils/password');

describe('Authentication Routes Integration', () => {
  beforeAll(() => {
    initializeKeys();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('POST /auth/register', () => {
    it('should register a new user successfully', async () => {
      (postgresClient.query as jest.Mock)
        .mockResolvedValueOnce({ rows: [] }) // No existing user
        .mockResolvedValueOnce({ rows: [] }); // Insert success

      const response = await request(app)
        .post('/auth/register')
        .send({
          username: 'newuser',
          email: 'newuser@example.com',
          password: 'password123',
          displayName: 'New User',
        });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('accessToken');
      expect(response.body).toHaveProperty('refreshToken');
      expect(response.body).toHaveProperty('playerId');
      expect(response.body.username).toBe('newuser');
    });

    it('should enforce rate limiting', async () => {
      (redisClient.get as jest.Mock).mockResolvedValue('5');
      (redisClient.ttl as jest.Mock).mockResolvedValue(3000);

      const response = await request(app)
        .post('/auth/register')
        .send({
          username: 'testuser',
          email: 'test@example.com',
          password: 'password123',
        });

      expect(response.status).toBe(429);
      expect(response.body.error).toBe('Too many requests');
    });
  });

  describe('POST /auth/login', () => {
    it('should login successfully with valid credentials', async () => {
      const { verifyPassword } = require('../../utils/password');
      
      (redisClient.get as jest.Mock).mockResolvedValue(null); // Not locked
      (postgresClient.query as jest.Mock)
        .mockResolvedValueOnce({
          rows: [
            {
              id: 'player-id',
              username: 'testuser',
              password_hash: '$2b$12$hashedpassword',
            },
          ],
        })
        .mockResolvedValueOnce({ rows: [] }); // Update last login

      (verifyPassword as jest.Mock).mockResolvedValue(true);
      (redisClient.del as jest.Mock).mockResolvedValue(undefined);

      const response = await request(app)
        .post('/auth/login')
        .send({
          username: 'testuser',
          password: 'password123',
        });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('accessToken');
      expect(response.body).toHaveProperty('refreshToken');
      expect(response.body.playerId).toBe('player-id');
    });

    it('should enforce rate limiting', async () => {
      (redisClient.get as jest.Mock).mockResolvedValue('10');
      (redisClient.ttl as jest.Mock).mockResolvedValue(600);

      const response = await request(app)
        .post('/auth/login')
        .send({
          username: 'testuser',
          password: 'password123',
        });

      expect(response.status).toBe(429);
      expect(response.body.error).toBe('Too many requests');
    });
  });

  describe('POST /auth/refresh', () => {
    it('should refresh tokens successfully', async () => {
      const { generateTokenPair } = require('../../utils/jwt');
      const tokens = generateTokenPair({
        playerId: 'player-id',
        username: 'testuser',
      });

      (postgresClient.query as jest.Mock).mockResolvedValueOnce({
        rows: [{ id: 'player-id', username: 'testuser' }],
      });

      const response = await request(app)
        .post('/auth/refresh')
        .send({
          refreshToken: tokens.refreshToken,
        });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('accessToken');
      expect(response.body).toHaveProperty('refreshToken');
    });

    it('should reject invalid refresh token', async () => {
      const response = await request(app)
        .post('/auth/refresh')
        .send({
          refreshToken: 'invalid-token',
        });

      expect(response.status).toBe(401);
      expect(response.body.error).toBe('Invalid token');
    });
  });
});
