/**
 * Database migration runner
 */

import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { postgresClient } from './postgres';

export async function runMigrations(): Promise<void> {
  console.log('Running database migrations...');

  try {
    // Create migrations tracking table
    await postgresClient.query(`
      CREATE TABLE IF NOT EXISTS migrations (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE,
        executed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
      )
    `);

    // List of migrations in order
    const migrations = [
      '001_create_players_table.sql',
      '002_create_sessions_table.sql',
      '003_create_progress_activities_chat.sql',
      '004_guest_players.sql',
    ];

    for (const migrationFile of migrations) {
      // Check if migration already executed
      const checkQuery = 'SELECT * FROM migrations WHERE name = $1';
      const checkResult = await postgresClient.query(checkQuery, [migrationFile]);

      if (checkResult.rows.length > 0) {
        console.log(`Migration ${migrationFile} already executed, skipping...`);
        continue;
      }

      // Read and execute migration
      const migrationPath = join(__dirname, 'migrations', migrationFile);
      const migrationSQL = readFileSync(migrationPath, 'utf8');

      console.log(`Executing migration: ${migrationFile}`);
      await postgresClient.query(migrationSQL);

      // Record migration
      const recordQuery = 'INSERT INTO migrations (name) VALUES ($1)';
      await postgresClient.query(recordQuery, [migrationFile]);

      console.log(`Migration ${migrationFile} completed successfully`);
    }

    console.log('All migrations completed successfully');
  } catch (error) {
    console.error('Migration failed:', error);
    throw error;
  }
}
