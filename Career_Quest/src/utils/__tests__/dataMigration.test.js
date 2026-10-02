/**
 * Unit tests for Data Migration utility
 */

import { describe, it, expect } from 'vitest';
import { validateData, migrateData, createEmptyData, getCurrentVersion, needsMigration } from '../dataMigration.js';

describe('dataMigration', () => {
    describe('validateData', () => {
        it('should validate correct data structure', () => {
            const data = {
                version: '1.0.0',
                careerResults: [],
                personalityResults: [],
                preferences: {},
                progress: null
            };

            const result = validateData(data);
            expect(result.valid).toBe(true);
        });

        it('should reject data without version', () => {
            const data = {
                careerResults: [],
                personalityResults: []
            };

            const result = validateData(data);
            expect(result.valid).toBe(false);
            expect(result.error).toBe('Missing version field');
        });

        it('should reject invalid data format', () => {
            const result = validateData(null);
            expect(result.valid).toBe(false);
            expect(result.error).toBe('Invalid data format');
        });

        it('should reject unknown version', () => {
            const data = {
                version: '99.0.0',
                careerResults: []
            };

            const result = validateData(data);
            expect(result.valid).toBe(false);
            expect(result.error).toContain('Unknown version');
        });
    });

    describe('migrateData', () => {
        it('should return data as-is if already current version', () => {
            const data = {
                version: '1.0.0',
                careerResults: [{ id: 1 }],
                personalityResults: [],
                preferences: { theme: 'dark' },
                progress: null
            };

            const result = migrateData(data);
            expect(result.version).toBe('1.0.0');
            expect(result.careerResults).toEqual([{ id: 1 }]);
            expect(result.migratedFrom).toBeUndefined();
        });

        it('should migrate legacy data without version', () => {
            const data = {
                careerResults: [{ id: 1 }],
                personalityResults: []
            };

            const result = migrateData(data);
            expect(result.version).toBe('1.0.0');
            expect(result.migratedFrom).toBe('legacy');
            expect(result.migratedAt).toBeDefined();
        });

        it('should handle null data', () => {
            const result = migrateData(null);
            expect(result.version).toBe('1.0.0');
            expect(result.migratedFrom).toBe('legacy');
            expect(result.careerResults).toEqual([]);
            expect(result.personalityResults).toEqual([]);
        });
    });

    describe('createEmptyData', () => {
        it('should create empty data structure with current version', () => {
            const data = createEmptyData();
            
            expect(data.version).toBe('1.0.0');
            expect(data.careerResults).toEqual([]);
            expect(data.personalityResults).toEqual([]);
            expect(data.preferences).toEqual({
                theme: 'dark',
                language: 'en',
                musicEnabled: true,
                musicVolume: 0.5
            });
            expect(data.progress).toBeNull();
            expect(data.createdAt).toBeDefined();
        });
    });

    describe('getCurrentVersion', () => {
        it('should return current version string', () => {
            const version = getCurrentVersion();
            expect(version).toBe('1.0.0');
        });
    });

    describe('needsMigration', () => {
        it('should return false for current version', () => {
            const data = { version: '1.0.0' };
            expect(needsMigration(data)).toBe(false);
        });

        it('should return true for old version', () => {
            const data = { version: '0.9.0' };
            expect(needsMigration(data)).toBe(true);
        });

        it('should return true for data without version', () => {
            const data = { careerResults: [] };
            expect(needsMigration(data)).toBe(true);
        });

        it('should return true for null data', () => {
            expect(needsMigration(null)).toBe(true);
        });
    });
});
