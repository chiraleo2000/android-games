/**
 * Rate limiting middleware
 * Implements Requirement 1.2: Rate limiting for authentication endpoints
 */

import { Request, Response, NextFunction } from 'express';
import { redisClient } from '../db/redis';

export interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
  keyPrefix: string;
}

/**
 * Creates a rate limiter middleware
 */
export function createRateLimiter(config: RateLimitConfig) {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // Use IP address as identifier
      const identifier = req.ip || req.socket.remoteAddress || 'unknown';
      const key = `${config.keyPrefix}:${identifier}`;

      // Get current count
      const current = await redisClient.get(key);
      const count = current ? parseInt(current, 10) : 0;

      if (count >= config.maxRequests) {
        // Get TTL to inform client when they can retry
        const ttl = await redisClient.ttl(key);
        
        res.status(429).json({
          error: 'Too many requests',
          message: 'Rate limit exceeded. Please try again later.',
          retryAfter: ttl > 0 ? ttl : Math.ceil(config.windowMs / 1000),
        });
        return;
      }

      // Increment counter
      if (count === 0) {
        // First request in window - set with expiration
        await redisClient.setEx(key, Math.ceil(config.windowMs / 1000), '1');
      } else {
        // Increment existing counter
        await redisClient.incr(key);
      }

      next();
    } catch (error) {
      console.error('Rate limiter error:', error);
      // Fail open - allow request if Redis is down
      next();
    }
  };
}

/**
 * Rate limiter for login endpoint
 * Allows 10 requests per 15 minutes per IP
 */
export const loginRateLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 10,
  keyPrefix: 'rate_limit:login',
});

/**
 * Rate limiter for registration endpoint
 * Allows 5 requests per hour per IP
 */
export const registerRateLimiter = createRateLimiter({
  windowMs: 60 * 60 * 1000, // 1 hour
  maxRequests: 5,
  keyPrefix: 'rate_limit:register',
});

/**
 * Rate limiter for token refresh endpoint
 * Allows 20 requests per hour per IP
 */
export const refreshRateLimiter = createRateLimiter({
  windowMs: 60 * 60 * 1000, // 1 hour
  maxRequests: 20,
  keyPrefix: 'rate_limit:refresh',
});
