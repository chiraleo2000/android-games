/**
 * Authentication routes
 * Implements Requirements 1.1, 1.2, 1.3, 13.4
 */

import { Router } from 'express';
import { register, login, refresh, guestLogin } from '../controllers/authController';
import { registerRateLimiter, loginRateLimiter, refreshRateLimiter } from '../middleware/rateLimiter';

const router = Router();

/**
 * POST /auth/register
 * Creates a new player account with input validation
 */
router.post('/register', registerRateLimiter, register);

/**
 * POST /auth/login
 * Authenticates a player with rate limiting and account lockout
 */
router.post('/login', loginRateLimiter, login);

/**
 * POST /auth/refresh
 * Refreshes an access token using a refresh token
 */
router.post('/refresh', refreshRateLimiter, refresh);

/**
 * POST /auth/guest
 * Instant nickname-only login (no email/password) — Kahoot-style
 */
router.post('/guest', loginRateLimiter, guestLogin);

export default router;
