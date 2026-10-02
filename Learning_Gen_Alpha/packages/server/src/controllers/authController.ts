/**
 * Authentication controller
 * Implements Requirements 1.1, 1.2, 1.3, 1.4, 13.4
 */

import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { postgresClient } from '../db/postgres';
import { hashPassword, verifyPassword } from '../utils/password';
import { encryptEmail } from '../utils/encryption';
import { validateUsername, validateEmail, validatePassword, sanitizeString, ValidationError } from '../utils/validation';
import { generateTokenPair, verifyToken } from '../utils/jwt';
import {
  recordFailedAttempt,
  isAccountLocked,
  getLockoutTimeRemaining,
  clearFailedAttempts,
} from '../utils/accountLockout';

/**
 * POST /auth/register
 * Creates a new player account
 */
export async function register(req: Request, res: Response): Promise<void> {
  try {
    const { username, email, password, displayName } = req.body;

    // Validate inputs
    validateUsername(username);
    validateEmail(email);
    validatePassword(password);

    // Check if username or email already exists
    const existingUser = await postgresClient.query(
      'SELECT id FROM players WHERE username = $1 OR email = $2',
      [username, encryptEmail(email)]
    );

    if (existingUser.rows.length > 0) {
      res.status(400).json({
        error: 'Registration failed',
        message: 'Username or email already exists',
      });
      return;
    }

    // Hash password
    const passwordHash = await hashPassword(password);

    // Encrypt email
    const encryptedEmail = encryptEmail(email);

    // Create player
    const playerId = uuidv4();
    const finalDisplayName = displayName || username;

    await postgresClient.query(
      `INSERT INTO players (
        id, username, email, password_hash, display_name,
        technical_skill_level, soft_skill_level,
        total_games_played, total_games_won,
        created_at, last_login_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, NOW(), NOW())`,
      [playerId, username, encryptedEmail, passwordHash, finalDisplayName, 1, 1, 0, 0]
    );

    // Generate tokens
    const tokens = generateTokenPair({
      playerId,
      username,
    });

    res.status(201).json({
      message: 'Registration successful',
      playerId,
      username,
      ...tokens,
    });
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(400).json({
        error: 'Validation failed',
        message: error.message,
      });
      return;
    }

    console.error('Registration error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: 'Failed to create account',
    });
  }
}

/**
 * POST /auth/login
 * Authenticates a player and returns tokens
 */
export async function login(req: Request, res: Response): Promise<void> {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      res.status(400).json({
        error: 'Validation failed',
        message: 'Username and password are required',
      });
      return;
    }

    // Check if account is locked
    const locked = await isAccountLocked(username);
    if (locked) {
      const timeRemaining = await getLockoutTimeRemaining(username);
      res.status(423).json({
        error: 'Account locked',
        message: `Account is temporarily locked due to too many failed login attempts. Please try again in ${Math.ceil(timeRemaining / 60)} minutes.`,
        retryAfter: timeRemaining,
      });
      return;
    }

    // Get player from database
    const result = await postgresClient.query(
      'SELECT id, username, password_hash FROM players WHERE username = $1',
      [username]
    );

    if (result.rows.length === 0) {
      // Record failed attempt
      const shouldLock = await recordFailedAttempt(username);
      
      res.status(401).json({
        error: 'Authentication failed',
        message: shouldLock
          ? 'Invalid credentials. Account has been locked for 15 minutes due to too many failed attempts.'
          : 'Invalid username or password',
      });
      return;
    }

    const player = result.rows[0];

    // Verify password
    const isValid = await verifyPassword(password, player.password_hash);

    if (!isValid) {
      // Record failed attempt
      const shouldLock = await recordFailedAttempt(username);
      
      res.status(401).json({
        error: 'Authentication failed',
        message: shouldLock
          ? 'Invalid credentials. Account has been locked for 15 minutes due to too many failed attempts.'
          : 'Invalid username or password',
      });
      return;
    }

    // Clear failed attempts on successful login
    await clearFailedAttempts(username);

    // Update last login timestamp
    await postgresClient.query(
      'UPDATE players SET last_login_at = NOW() WHERE id = $1',
      [player.id]
    );

    // Generate tokens
    const tokens = generateTokenPair({
      playerId: player.id,
      username: player.username,
    });

    res.status(200).json({
      message: 'Login successful',
      playerId: player.id,
      username: player.username,
      ...tokens,
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: 'Failed to authenticate',
    });
  }
}

/**
 * POST /auth/refresh
 * Refreshes an access token using a refresh token
 */
export async function refresh(req: Request, res: Response): Promise<void> {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      res.status(400).json({
        error: 'Validation failed',
        message: 'Refresh token is required',
      });
      return;
    }

    // Verify refresh token
    let payload;
    try {
      payload = verifyToken(refreshToken);
    } catch (error) {
      res.status(401).json({
        error: 'Invalid token',
        message: error instanceof Error ? error.message : 'Token verification failed',
      });
      return;
    }

    // Verify player still exists
    const result = await postgresClient.query(
      'SELECT id, username FROM players WHERE id = $1',
      [payload.playerId]
    );

    if (result.rows.length === 0) {
      res.status(401).json({
        error: 'Invalid token',
        message: 'Player not found',
      });
      return;
    }

    // Generate new token pair
    const tokens = generateTokenPair({
      playerId: payload.playerId,
      username: payload.username,
    });

    res.status(200).json({
      message: 'Token refreshed successfully',
      ...tokens,
    });
  } catch (error) {
    console.error('Token refresh error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: 'Failed to refresh token',
    });
  }
}

/**
 * POST /auth/guest
 * Creates a temporary guest player with just a nickname — no email/password required.
 * Designed for Kahoot-style instant join.
 */
export async function guestLogin(req: Request, res: Response): Promise<void> {
  try {
    const { nickname } = req.body;

    const cleanNickname = sanitizeString(String(nickname ?? '')).trim();
    if (!cleanNickname || cleanNickname.length < 2 || cleanNickname.length > 20) {
      res.status(400).json({ error: 'Nickname must be 2–20 characters' });
      return;
    }
    if (!/^[a-zA-Z0-9_]+$/.test(cleanNickname)) {
      res.status(400).json({ error: 'Nickname may only contain letters, numbers and underscores' });
      return;
    }

    const playerId = uuidv4();
    // Build a unique DB username that fits the players.username constraint (3-20 chars, [a-zA-Z0-9_])
    const suffix = playerId.replace(/-/g, '').slice(0, 4);
    const base = cleanNickname.slice(0, 15);
    const username = `${base}_${suffix}`; // 3-20 chars guaranteed

    await postgresClient.query(
      `INSERT INTO players (
        id, username, display_name, is_guest,
        technical_skill_level, soft_skill_level, business_skill_level, ai_literacy_level,
        total_games_played, total_games_won, created_at, last_login_at
      ) VALUES ($1, $2, $3, true, 1, 1, 1, 1, 0, 0, NOW(), NOW())`,
      [playerId, username, cleanNickname],
    );

    const tokens = generateTokenPair({ playerId, username: cleanNickname });

    res.status(201).json({
      playerId,
      username: cleanNickname,
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    });
  } catch (error) {
    console.error('Guest login error:', error);
    res.status(500).json({ error: 'Failed to create guest session' });
  }
}
