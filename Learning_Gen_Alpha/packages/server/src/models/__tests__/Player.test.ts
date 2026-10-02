/**
 * Unit tests for Player model
 */

import { playerModel } from '../Player';
import { ValidationError } from '../../utils/validation';

describe('Player Model Validation', () => {
  describe('Username validation', () => {
    it('should reject username shorter than 3 characters', async () => {
      await expect(
        playerModel.createPlayer({
          username: 'ab',
          email: 'test@example.com',
          password: 'password123',
          displayName: 'Test User',
        })
      ).rejects.toThrow('Username must be between 3 and 20 characters');
    });

    it('should reject username longer than 20 characters', async () => {
      await expect(
        playerModel.createPlayer({
          username: 'a'.repeat(21),
          email: 'test@example.com',
          password: 'password123',
          displayName: 'Test User',
        })
      ).rejects.toThrow('Username must be between 3 and 20 characters');
    });

    it('should reject username with invalid characters', async () => {
      await expect(
        playerModel.createPlayer({
          username: 'user@name',
          email: 'test@example.com',
          password: 'password123',
          displayName: 'Test User',
        })
      ).rejects.toThrow('Username can only contain alphanumeric characters and underscores');
    });

    it('should accept valid username with alphanumeric and underscores', async () => {
      const username = 'valid_user_123';
      // This test would need a mock database to fully execute
      // For now, we're just testing that validation passes
      expect(() => {
        const { validateUsername } = require('../../utils/validation');
        validateUsername(username);
      }).not.toThrow();
    });
  });

  describe('Email validation', () => {
    it('should reject invalid email format', async () => {
      await expect(
        playerModel.createPlayer({
          username: 'testuser',
          email: 'invalid-email',
          password: 'password123',
          displayName: 'Test User',
        })
      ).rejects.toThrow('Invalid email format');
    });

    it('should accept valid email format', () => {
      const { validateEmail } = require('../../utils/validation');
      expect(() => validateEmail('test@example.com')).not.toThrow();
      expect(() => validateEmail('user.name+tag@example.co.uk')).not.toThrow();
    });
  });

  describe('Skill level validation', () => {
    it('should reject skill level below 1', async () => {
      await expect(
        playerModel.createPlayer({
          username: 'testuser',
          email: 'test@example.com',
          password: 'password123',
          displayName: 'Test User',
          technicalSkillLevel: 0,
        })
      ).rejects.toThrow('Technical skill level must be between 1 and 10');
    });

    it('should reject skill level above 10', async () => {
      await expect(
        playerModel.createPlayer({
          username: 'testuser',
          email: 'test@example.com',
          password: 'password123',
          displayName: 'Test User',
          softSkillLevel: 11,
        })
      ).rejects.toThrow('Soft skill level must be between 1 and 10');
    });

    it('should accept skill levels between 1 and 10', () => {
      const { validateSkillLevel } = require('../../utils/validation');
      expect(() => validateSkillLevel(1, 'Test')).not.toThrow();
      expect(() => validateSkillLevel(5, 'Test')).not.toThrow();
      expect(() => validateSkillLevel(10, 'Test')).not.toThrow();
    });
  });

  describe('Password validation', () => {
    it('should reject password shorter than 8 characters', async () => {
      await expect(
        playerModel.createPlayer({
          username: 'testuser',
          email: 'test@example.com',
          password: 'short',
          displayName: 'Test User',
        })
      ).rejects.toThrow('Password must be at least 8 characters long');
    });

    it('should accept password with 8 or more characters', () => {
      const { validatePassword } = require('../../utils/validation');
      expect(() => validatePassword('password123')).not.toThrow();
    });
  });
});

describe('Password Hashing', () => {
  it('should hash password with bcrypt', async () => {
    const { hashPassword, verifyPassword } = require('../../utils/password');
    const password = 'testPassword123';
    const hash = await hashPassword(password);

    expect(hash).not.toBe(password);
    expect(hash).toMatch(/^\$2[aby]\$/); // bcrypt hash format
    
    const isValid = await verifyPassword(password, hash);
    expect(isValid).toBe(true);
    
    const isInvalid = await verifyPassword('wrongPassword', hash);
    expect(isInvalid).toBe(false);
  });
});

describe('Email Encryption', () => {
  it('should encrypt and decrypt email correctly', () => {
    const { encryptEmail, decryptEmail } = require('../../utils/encryption');
    const email = 'test@example.com';
    
    const encrypted = encryptEmail(email);
    expect(encrypted).not.toBe(email);
    
    const decrypted = decryptEmail(encrypted);
    expect(decrypted).toBe(email);
  });

  it('should produce different encrypted values for same email', () => {
    const { encryptEmail } = require('../../utils/encryption');
    const email = 'test@example.com';
    
    const encrypted1 = encryptEmail(email);
    const encrypted2 = encryptEmail(email);
    
    // Due to random IV and salt, encrypted values should be different
    expect(encrypted1).not.toBe(encrypted2);
  });
});
