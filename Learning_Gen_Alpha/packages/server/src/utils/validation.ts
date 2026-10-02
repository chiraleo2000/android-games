/**
 * Validation utilities for player data
 * Implements validation rules from Requirements 1.1, 1.7, 13.2, 13.5
 */

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

/**
 * Validates username format
 * Requirements: 3-20 characters, alphanumeric with underscores
 */
export function validateUsername(username: string): void {
  if (!username) {
    throw new ValidationError('Username is required');
  }

  if (username.length < 3 || username.length > 20) {
    throw new ValidationError('Username must be between 3 and 20 characters');
  }

  const usernameRegex = /^[a-zA-Z0-9_]+$/;
  if (!usernameRegex.test(username)) {
    throw new ValidationError('Username can only contain alphanumeric characters and underscores');
  }
}

/**
 * Validates email format
 */
export function validateEmail(email: string): void {
  if (!email) {
    throw new ValidationError('Email is required');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new ValidationError('Invalid email format');
  }

  if (email.length > 255) {
    throw new ValidationError('Email must not exceed 255 characters');
  }
}

/**
 * Validates password strength
 */
export function validatePassword(password: string): void {
  if (!password) {
    throw new ValidationError('Password is required');
  }

  if (password.length < 8) {
    throw new ValidationError('Password must be at least 8 characters long');
  }

  if (password.length > 128) {
    throw new ValidationError('Password must not exceed 128 characters');
  }
}

/**
 * Validates skill level (1-10)
 */
export function validateSkillLevel(level: number, fieldName: string = 'Skill level'): void {
  if (typeof level !== 'number' || isNaN(level)) {
    throw new ValidationError(`${fieldName} must be a number`);
  }

  if (!Number.isInteger(level)) {
    throw new ValidationError(`${fieldName} must be an integer`);
  }

  if (level < 1 || level > 10) {
    throw new ValidationError(`${fieldName} must be between 1 and 10`);
  }
}

/**
 * Validates display name
 */
export function validateDisplayName(displayName: string): void {
  if (!displayName) {
    throw new ValidationError('Display name is required');
  }

  if (displayName.length < 1 || displayName.length > 30) {
    throw new ValidationError('Display name must be between 1 and 30 characters');
  }
}

/**
 * Sanitizes string input to prevent XSS
 */
export function sanitizeString(input: string): string {
  if (!input) return input;
  
  return input
    .replace(/[<>]/g, '') // Remove angle brackets
    .trim();
}
