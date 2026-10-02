/**
 * Player model and repository
 * Implements Requirements 1.1, 1.5, 13.2, 13.5
 */

import { Player, PlayerProfile } from '@game/shared';
import { postgresClient } from '../db/postgres';
import { hashPassword, verifyPassword } from '../utils/password';
import { encryptEmail, decryptEmail } from '../utils/encryption';
import {
  validateUsername,
  validateEmail,
  validatePassword,
  validateSkillLevel,
  validateDisplayName,
  sanitizeString,
  ValidationError,
} from '../utils/validation';

export interface CreatePlayerInput {
  username: string;
  email: string;
  password: string;
  displayName: string;
  avatarUrl?: string;
  technicalSkillLevel?: number;
  softSkillLevel?: number;
  businessSkillLevel?: number;
  aiLiteracyLevel?: number;
}

export interface UpdatePlayerProfileInput {
  displayName?: string;
  avatarUrl?: string;
  technicalSkillLevel?: number;
  softSkillLevel?: number;
  businessSkillLevel?: number;
  aiLiteracyLevel?: number;
  preferredRoles?: string[];
}

export class PlayerModel {
  /**
   * Creates a new player with validation and encryption
   */
  async createPlayer(input: CreatePlayerInput): Promise<Player> {
    // Validate inputs
    validateUsername(input.username);
    validateEmail(input.email);
    validatePassword(input.password);
    validateDisplayName(input.displayName);

    const technicalSkillLevel = input.technicalSkillLevel ?? 1;
    const softSkillLevel = input.softSkillLevel ?? 1;
    const businessSkillLevel = input.businessSkillLevel ?? 1;
    const aiLiteracyLevel = input.aiLiteracyLevel ?? 1;
    
    validateSkillLevel(technicalSkillLevel, 'Technical skill level');
    validateSkillLevel(softSkillLevel, 'Soft skill level');
    validateSkillLevel(businessSkillLevel, 'Business skill level');
    validateSkillLevel(aiLiteracyLevel, 'AI literacy level');

    // Sanitize string inputs
    const sanitizedUsername = sanitizeString(input.username);
    const sanitizedDisplayName = sanitizeString(input.displayName);

    // Hash password with bcrypt cost factor 12
    const passwordHash = await hashPassword(input.password);

    // Encrypt email at rest
    const encryptedEmail = encryptEmail(input.email);

    // Insert into database
    const query = `
      INSERT INTO players (
        username,
        email,
        password_hash,
        display_name,
        avatar_url,
        technical_skill_level,
        soft_skill_level,
        business_skill_level,
        ai_literacy_level
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *
    `;

    const values = [
      sanitizedUsername,
      encryptedEmail,
      passwordHash,
      sanitizedDisplayName,
      input.avatarUrl || null,
      technicalSkillLevel,
      softSkillLevel,
      businessSkillLevel,
      aiLiteracyLevel,
    ];

    try {
      const result = await postgresClient.query(query, values);
      return this.mapRowToPlayer(result.rows[0]);
    } catch (error: any) {
      // Handle unique constraint violations
      if (error.code === '23505') {
        if (error.constraint === 'players_username_key') {
          throw new ValidationError('Username already exists');
        }
        if (error.constraint === 'players_email_key') {
          throw new ValidationError('Email already exists');
        }
      }
      throw error;
    }
  }

  /**
   * Finds a player by ID
   */
  async findById(id: string): Promise<Player | null> {
    const query = 'SELECT * FROM players WHERE id = $1';
    const result = await postgresClient.query(query, [id]);

    if (result.rows.length === 0) {
      return null;
    }

    return this.mapRowToPlayer(result.rows[0]);
  }

  /**
   * Finds a player by username
   */
  async findByUsername(username: string): Promise<Player | null> {
    const query = 'SELECT * FROM players WHERE username = $1';
    const result = await postgresClient.query(query, [username]);

    if (result.rows.length === 0) {
      return null;
    }

    return this.mapRowToPlayer(result.rows[0]);
  }

  /**
   * Finds a player by email (searches encrypted emails)
   */
  async findByEmail(email: string): Promise<Player | null> {
    // Note: This is a simplified implementation
    // In production, you might want to use a hash-based lookup for better performance
    const encryptedEmail = encryptEmail(email);
    const query = 'SELECT * FROM players WHERE email = $1';
    const result = await postgresClient.query(query, [encryptedEmail]);

    if (result.rows.length === 0) {
      return null;
    }

    return this.mapRowToPlayer(result.rows[0]);
  }

  /**
   * Verifies player credentials
   */
  async verifyCredentials(username: string, password: string): Promise<Player | null> {
    const player = await this.findByUsername(username);
    
    if (!player) {
      return null;
    }

    const isValid = await verifyPassword(password, player.passwordHash);
    
    if (!isValid) {
      return null;
    }

    return player;
  }

  /**
   * Updates player profile
   */
  async updateProfile(playerId: string, input: UpdatePlayerProfileInput): Promise<Player> {
    const updates: string[] = [];
    const values: any[] = [];
    let paramIndex = 1;

    if (input.displayName !== undefined) {
      validateDisplayName(input.displayName);
      updates.push(`display_name = $${paramIndex++}`);
      values.push(sanitizeString(input.displayName));
    }

    if (input.avatarUrl !== undefined) {
      updates.push(`avatar_url = $${paramIndex++}`);
      values.push(input.avatarUrl);
    }

    if (input.technicalSkillLevel !== undefined) {
      validateSkillLevel(input.technicalSkillLevel, 'Technical skill level');
      updates.push(`technical_skill_level = $${paramIndex++}`);
      values.push(input.technicalSkillLevel);
    }

    if (input.softSkillLevel !== undefined) {
      validateSkillLevel(input.softSkillLevel, 'Soft skill level');
      updates.push(`soft_skill_level = $${paramIndex++}`);
      values.push(input.softSkillLevel);
    }

    if (input.businessSkillLevel !== undefined) {
      validateSkillLevel(input.businessSkillLevel, 'Business skill level');
      updates.push(`business_skill_level = $${paramIndex++}`);
      values.push(input.businessSkillLevel);
    }

    if (input.aiLiteracyLevel !== undefined) {
      validateSkillLevel(input.aiLiteracyLevel, 'AI literacy level');
      updates.push(`ai_literacy_level = $${paramIndex++}`);
      values.push(input.aiLiteracyLevel);
    }

    if (input.preferredRoles !== undefined) {
      updates.push(`preferred_roles = $${paramIndex++}`);
      values.push(input.preferredRoles);
    }

    if (updates.length === 0) {
      throw new ValidationError('No valid fields to update');
    }

    values.push(playerId);

    const query = `
      UPDATE players
      SET ${updates.join(', ')}
      WHERE id = $${paramIndex}
      RETURNING *
    `;

    const result = await postgresClient.query(query, values);

    if (result.rows.length === 0) {
      throw new Error('Player not found');
    }

    return this.mapRowToPlayer(result.rows[0]);
  }

  /**
   * Updates last login timestamp
   */
  async updateLastLogin(playerId: string): Promise<void> {
    const query = 'UPDATE players SET last_login_at = NOW() WHERE id = $1';
    await postgresClient.query(query, [playerId]);
  }

  /**
   * Maps database row to Player object
   */
  private mapRowToPlayer(row: any): Player {
    const profile: PlayerProfile = {
      displayName: row.display_name,
      avatarUrl: row.avatar_url,
      technicalSkillLevel: row.technical_skill_level,
      softSkillLevel: row.soft_skill_level,
      businessSkillLevel: row.business_skill_level ?? 0,
      aiLiteracyLevel: row.ai_literacy_level ?? 0,
      preferredRoles: row.preferred_roles || [],
      achievements: row.achievements || [],
      totalGamesPlayed: row.total_games_played,
      totalGamesWon: row.total_games_won,
    };

    return {
      id: row.id,
      username: row.username,
      email: decryptEmail(row.email),
      passwordHash: row.password_hash,
      profile,
      createdAt: row.created_at,
      lastLoginAt: row.last_login_at,
    };
  }
}

export const playerModel = new PlayerModel();
