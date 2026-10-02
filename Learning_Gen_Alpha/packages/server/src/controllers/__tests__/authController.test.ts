/**
 * Authentication controller tests
 * Tests Requirements 1.1, 1.2, 1.3, 1.4, 13.4
 */

import { Request, Response } from 'express';
import { register, login, refresh } from '../authController';
import { postgresClient } from '../../db/postgres';
import { hashPassword } from '../../utils/password';
import { encryptEmail } from '../../utils/encryption';
import { generateTokenPair } from '../../utils/jwt';
import * as accountLockout from '../../utils/accountLockout';

// Mock dependencies
jest.mock('../../db/postgres');
jest.mock('../../utils/password');
jest.mock('../../utils/encryption');
jest.mock('../../utils/jwt');
jest.mock('../../utils/accountLockout');

describe('AuthController', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let jsonMock: jest.Mock;
  let statusMock: jest.Mock;

  beforeEach(() => {
    jsonMock = jest.fn();
    statusMock = jest.fn().mockReturnValue({ json: jsonMock });
    
    mockRequest = {
      body: {},
    };
    
    mockResponse = {
      status: statusMock,
      json: jsonMock,
    };

    jest.clearAllMocks();
  });

  describe('register', () => {
    it('should create a new player account with valid credentials', async () => {
      mockRequest.body = {
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123',
        displayName: 'Test User',
      };

      (postgresClient.query as jest.Mock).mockResolvedValueOnce({ rows: [] }); // No existing user
      (encryptEmail as jest.Mock).mockReturnValue('encrypted_email');
      (hashPassword as jest.Mock).mockResolvedValue('hashed_password');
      (postgresClient.query as jest.Mock).mockResolvedValueOnce({ rows: [] }); // Insert success
      (generateTokenPair as jest.Mock).mockReturnValue({
        accessToken: 'access_token',
        refreshToken: 'refresh_token',
      });

      await register(mockRequest as Request, mockResponse as Response);

      expect(statusMock).toHaveBeenCalledWith(201);
      expect(jsonMock).toHaveBeenCalledWith(
        expect.objectContaining({
          message: 'Registration successful',
          username: 'testuser',
          accessToken: 'access_token',
          refreshToken: 'refresh_token',
        })
      );
    });

    it('should reject registration with existing username', async () => {
      mockRequest.body = {
        username: 'existinguser',
        email: 'test@example.com',
        password: 'password123',
      };

      (postgresClient.query as jest.Mock).mockResolvedValueOnce({
        rows: [{ id: 'existing-id' }],
      });
      (encryptEmail as jest.Mock).mockReturnValue('encrypted_email');

      await register(mockRequest as Request, mockResponse as Response);

      expect(statusMock).toHaveBeenCalledWith(400);
      expect(jsonMock).toHaveBeenCalledWith({
        error: 'Registration failed',
        message: 'Username or email already exists',
      });
    });

    it('should reject registration with invalid username', async () => {
      mockRequest.body = {
        username: 'ab', // Too short
        email: 'test@example.com',
        password: 'password123',
      };

      await register(mockRequest as Request, mockResponse as Response);

      expect(statusMock).toHaveBeenCalledWith(400);
      expect(jsonMock).toHaveBeenCalledWith({
        error: 'Validation failed',
        message: 'Username must be between 3 and 20 characters',
      });
    });

    it('should reject registration with invalid email', async () => {
      mockRequest.body = {
        username: 'testuser',
        email: 'invalid-email',
        password: 'password123',
      };

      await register(mockRequest as Request, mockResponse as Response);

      expect(statusMock).toHaveBeenCalledWith(400);
      expect(jsonMock).toHaveBeenCalledWith({
        error: 'Validation failed',
        message: 'Invalid email format',
      });
    });

    it('should reject registration with short password', async () => {
      mockRequest.body = {
        username: 'testuser',
        email: 'test@example.com',
        password: 'short',
      };

      await register(mockRequest as Request, mockResponse as Response);

      expect(statusMock).toHaveBeenCalledWith(400);
      expect(jsonMock).toHaveBeenCalledWith({
        error: 'Validation failed',
        message: 'Password must be at least 8 characters long',
      });
    });
  });

  describe('login', () => {
    it('should authenticate player with valid credentials', async () => {
      mockRequest.body = {
        username: 'testuser',
        password: 'password123',
      };

      (accountLockout.isAccountLocked as jest.Mock).mockResolvedValue(false);
      (postgresClient.query as jest.Mock)
        .mockResolvedValueOnce({
          rows: [
            {
              id: 'player-id',
              username: 'testuser',
              password_hash: 'hashed_password',
            },
          ],
        })
        .mockResolvedValueOnce({ rows: [] }); // Update last login

      const { verifyPassword } = require('../../utils/password');
      verifyPassword.mockResolvedValue(true);

      (accountLockout.clearFailedAttempts as jest.Mock).mockResolvedValue(undefined);
      (generateTokenPair as jest.Mock).mockReturnValue({
        accessToken: 'access_token',
        refreshToken: 'refresh_token',
      });

      await login(mockRequest as Request, mockResponse as Response);

      expect(statusMock).toHaveBeenCalledWith(200);
      expect(jsonMock).toHaveBeenCalledWith(
        expect.objectContaining({
          message: 'Login successful',
          playerId: 'player-id',
          username: 'testuser',
          accessToken: 'access_token',
          refreshToken: 'refresh_token',
        })
      );
    });

    it('should reject login for locked account', async () => {
      mockRequest.body = {
        username: 'testuser',
        password: 'password123',
      };

      (accountLockout.isAccountLocked as jest.Mock).mockResolvedValue(true);
      (accountLockout.getLockoutTimeRemaining as jest.Mock).mockResolvedValue(600);

      await login(mockRequest as Request, mockResponse as Response);

      expect(statusMock).toHaveBeenCalledWith(423);
      expect(jsonMock).toHaveBeenCalledWith(
        expect.objectContaining({
          error: 'Account locked',
          retryAfter: 600,
        })
      );
    });

    it('should record failed attempt for invalid password', async () => {
      mockRequest.body = {
        username: 'testuser',
        password: 'wrongpassword',
      };

      (accountLockout.isAccountLocked as jest.Mock).mockResolvedValue(false);
      (postgresClient.query as jest.Mock).mockResolvedValueOnce({
        rows: [
          {
            id: 'player-id',
            username: 'testuser',
            password_hash: 'hashed_password',
          },
        ],
      });

      const { verifyPassword } = require('../../utils/password');
      verifyPassword.mockResolvedValue(false);

      (accountLockout.recordFailedAttempt as jest.Mock).mockResolvedValue(false);

      await login(mockRequest as Request, mockResponse as Response);

      expect(accountLockout.recordFailedAttempt).toHaveBeenCalledWith('testuser');
      expect(statusMock).toHaveBeenCalledWith(401);
      expect(jsonMock).toHaveBeenCalledWith({
        error: 'Authentication failed',
        message: 'Invalid username or password',
      });
    });

    it('should lock account after 5 failed attempts', async () => {
      mockRequest.body = {
        username: 'testuser',
        password: 'wrongpassword',
      };

      (accountLockout.isAccountLocked as jest.Mock).mockResolvedValue(false);
      (postgresClient.query as jest.Mock).mockResolvedValueOnce({
        rows: [
          {
            id: 'player-id',
            username: 'testuser',
            password_hash: 'hashed_password',
          },
        ],
      });

      const { verifyPassword } = require('../../utils/password');
      verifyPassword.mockResolvedValue(false);

      (accountLockout.recordFailedAttempt as jest.Mock).mockResolvedValue(true); // Should lock

      await login(mockRequest as Request, mockResponse as Response);

      expect(statusMock).toHaveBeenCalledWith(401);
      expect(jsonMock).toHaveBeenCalledWith({
        error: 'Authentication failed',
        message: 'Invalid credentials. Account has been locked for 15 minutes due to too many failed attempts.',
      });
    });

    it('should reject login with missing credentials', async () => {
      mockRequest.body = {
        username: 'testuser',
      };

      await login(mockRequest as Request, mockResponse as Response);

      expect(statusMock).toHaveBeenCalledWith(400);
      expect(jsonMock).toHaveBeenCalledWith({
        error: 'Validation failed',
        message: 'Username and password are required',
      });
    });
  });

  describe('refresh', () => {
    it('should refresh tokens with valid refresh token', async () => {
      mockRequest.body = {
        refreshToken: 'valid_refresh_token',
      };

      const { verifyToken } = require('../../utils/jwt');
      verifyToken.mockReturnValue({
        playerId: 'player-id',
        username: 'testuser',
      });

      (postgresClient.query as jest.Mock).mockResolvedValueOnce({
        rows: [{ id: 'player-id', username: 'testuser' }],
      });

      (generateTokenPair as jest.Mock).mockReturnValue({
        accessToken: 'new_access_token',
        refreshToken: 'new_refresh_token',
      });

      await refresh(mockRequest as Request, mockResponse as Response);

      expect(statusMock).toHaveBeenCalledWith(200);
      expect(jsonMock).toHaveBeenCalledWith({
        message: 'Token refreshed successfully',
        accessToken: 'new_access_token',
        refreshToken: 'new_refresh_token',
      });
    });

    it('should reject refresh with missing token', async () => {
      mockRequest.body = {};

      await refresh(mockRequest as Request, mockResponse as Response);

      expect(statusMock).toHaveBeenCalledWith(400);
      expect(jsonMock).toHaveBeenCalledWith({
        error: 'Validation failed',
        message: 'Refresh token is required',
      });
    });

    it('should reject refresh with invalid token', async () => {
      mockRequest.body = {
        refreshToken: 'invalid_token',
      };

      const { verifyToken } = require('../../utils/jwt');
      verifyToken.mockImplementation(() => {
        throw new Error('Invalid token');
      });

      await refresh(mockRequest as Request, mockResponse as Response);

      expect(statusMock).toHaveBeenCalledWith(401);
      expect(jsonMock).toHaveBeenCalledWith({
        error: 'Invalid token',
        message: 'Invalid token',
      });
    });

    it('should reject refresh for non-existent player', async () => {
      mockRequest.body = {
        refreshToken: 'valid_refresh_token',
      };

      const { verifyToken } = require('../../utils/jwt');
      verifyToken.mockReturnValue({
        playerId: 'non-existent-id',
        username: 'testuser',
      });

      (postgresClient.query as jest.Mock).mockResolvedValueOnce({
        rows: [],
      });

      await refresh(mockRequest as Request, mockResponse as Response);

      expect(statusMock).toHaveBeenCalledWith(401);
      expect(jsonMock).toHaveBeenCalledWith({
        error: 'Invalid token',
        message: 'Player not found',
      });
    });
  });
});
