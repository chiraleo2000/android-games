/**
 * Authentication middleware
 * Validates JWT tokens and attaches player info to request
 */

import { Request, Response, NextFunction } from 'express';
import { verifyToken, extractTokenFromHeader } from '../utils/jwt';

// Extend Express Request type to include player info
declare global {
  namespace Express {
    interface Request {
      player?: {
        playerId: string;
        username: string;
        sessionId?: string;
      };
    }
  }
}

/**
 * Middleware to authenticate requests using JWT tokens
 */
export function authenticate(req: Request, res: Response, next: NextFunction): void {
  try {
    const token = extractTokenFromHeader(req.headers.authorization);

    if (!token) {
      res.status(401).json({
        error: 'Unauthorized',
        message: 'No authentication token provided',
      });
      return;
    }

    // Verify token
    const payload = verifyToken(token);

    // Attach player info to request
    req.player = {
      playerId: payload.playerId,
      username: payload.username,
      sessionId: payload.sessionId,
    };

    next();
  } catch (error) {
    res.status(401).json({
      error: 'Unauthorized',
      message: error instanceof Error ? error.message : 'Invalid authentication token',
    });
  }
}

/**
 * Optional authentication middleware
 * Attaches player info if token is present, but doesn't require it
 */
export function optionalAuthenticate(req: Request, res: Response, next: NextFunction): void {
  try {
    const token = extractTokenFromHeader(req.headers.authorization);

    if (token) {
      const payload = verifyToken(token);
      req.player = {
        playerId: payload.playerId,
        username: payload.username,
        sessionId: payload.sessionId,
      };
    }

    next();
  } catch {
    // Ignore errors for optional authentication — token absent or malformed
    next();
  }
}
