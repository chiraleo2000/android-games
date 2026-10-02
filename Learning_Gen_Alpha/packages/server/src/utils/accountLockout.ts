/**
 * Account lockout tracking for failed login attempts
 * Implements Requirement 13.4: Lock account after 5 failed attempts within 15 minutes
 */

import { redisClient } from '../db/redis';

const LOCKOUT_DURATION = 15 * 60; // 15 minutes in seconds
const MAX_FAILED_ATTEMPTS = 5;
const FAILED_ATTEMPTS_WINDOW = 15 * 60; // 15 minutes in seconds

/**
 * Records a failed login attempt
 * Returns true if account should be locked
 */
export async function recordFailedAttempt(username: string): Promise<boolean> {
  const key = `failed_login:${username}`;
  
  // Get current count
  const current = await redisClient.get(key);
  const count = current ? parseInt(current, 10) : 0;
  
  const newCount = count + 1;
  
  if (newCount === 1) {
    // First failed attempt - set with expiration
    await redisClient.setEx(key, FAILED_ATTEMPTS_WINDOW, '1');
  } else {
    // Increment existing counter
    await redisClient.incr(key);
  }
  
  // Lock account if threshold reached
  if (newCount >= MAX_FAILED_ATTEMPTS) {
    await lockAccount(username);
    return true;
  }
  
  return false;
}

/**
 * Locks an account for the lockout duration
 */
export async function lockAccount(username: string): Promise<void> {
  const lockKey = `account_locked:${username}`;
  await redisClient.setEx(lockKey, LOCKOUT_DURATION, 'locked');
}

/**
 * Checks if an account is currently locked
 */
export async function isAccountLocked(username: string): Promise<boolean> {
  const lockKey = `account_locked:${username}`;
  const locked = await redisClient.get(lockKey);
  return locked !== null;
}

/**
 * Gets the remaining lockout time in seconds
 */
export async function getLockoutTimeRemaining(username: string): Promise<number> {
  const lockKey = `account_locked:${username}`;
  const ttl = await redisClient.ttl(lockKey);
  return ttl > 0 ? ttl : 0;
}

/**
 * Clears failed login attempts (called on successful login)
 */
export async function clearFailedAttempts(username: string): Promise<void> {
  const key = `failed_login:${username}`;
  await redisClient.del(key);
}

/**
 * Gets the number of failed attempts
 */
export async function getFailedAttemptCount(username: string): Promise<number> {
  const key = `failed_login:${username}`;
  const current = await redisClient.get(key);
  return current ? parseInt(current, 10) : 0;
}
