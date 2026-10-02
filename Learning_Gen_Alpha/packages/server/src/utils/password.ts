/**
 * Password hashing utilities using bcrypt
 * Implements Requirement 1.5: Hash passwords with bcrypt cost factor 12
 */

import bcrypt from 'bcrypt';

const BCRYPT_COST_FACTOR = 12;

/**
 * Hashes a password using bcrypt with cost factor 12
 */
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, BCRYPT_COST_FACTOR);
}

/**
 * Verifies a password against a hash
 */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}
