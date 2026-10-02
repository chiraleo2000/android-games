import { beforeEach, describe, expect, it, vi } from 'vitest';
import fc from 'fast-check';

const { memory } = vi.hoisted(() => ({ memory: new Map() }));

vi.mock('@capacitor/preferences', () => ({
    Preferences: {
        get: vi.fn(async ({ key }) => ({ value: memory.has(key) ? memory.get(key) : null })),
        set: vi.fn(async ({ key, value }) => {
            memory.set(key, value);
        }),
        remove: vi.fn(async ({ key }) => {
            memory.delete(key);
        }),
        clear: vi.fn(async () => {
            memory.clear();
        }),
    },
}));

import { ALL_STORAGE_KEYS, clearAllData } from '../dataExportImport.js';
import { storageService } from '../../services/StorageService.js';

const storedValue = fc.oneof(
    fc.string({ maxLength: 24, unit: 'grapheme-ascii' }),
    fc.integer(),
    fc.boolean(),
    fc.array(fc.integer({ min: 0, max: 50 }), { maxLength: 4 }),
    fc.record({
        id: fc.string({ minLength: 1, maxLength: 8, unit: 'grapheme-ascii' }),
        n: fc.integer({ min: -20, max: 20 }),
    })
);

const storedState = fc.record(
    Object.fromEntries(ALL_STORAGE_KEYS.map((key) => [key, storedValue]))
);

async function readAll() {
    const snapshot = {};
    for (const key of ALL_STORAGE_KEYS) {
        snapshot[key] = await storageService.get(key);
    }
    return snapshot;
}

describe('clearAllData', () => {
    beforeEach(() => {
        memory.clear();
        localStorage.clear();
    });

    // Feature: android-play-release-readiness, Property 1: Clear All Data ล้างทุก key ที่แอปเก็บ
    it('removes every ALL_STORAGE_KEYS value', async () => {
        await fc.assert(
            fc.asyncProperty(storedState, async (state) => {
                memory.clear();
                localStorage.clear();
                for (const key of ALL_STORAGE_KEYS) {
                    const saved = await storageService.set(key, state[key]);
                    expect(saved).toBe(true);
                    expect(await storageService.get(key)).toEqual(state[key]);
                }

                const result = await clearAllData();
                expect(result).toEqual({ success: true });

                for (const key of ALL_STORAGE_KEYS) {
                    expect(await storageService.get(key)).toBeNull();
                }
            }),
            { numRuns: 100 }
        );
    });

    // Feature: android-play-release-readiness, Property 2: Clear All Data เป็น idempotent
    it('is idempotent', async () => {
        await fc.assert(
            fc.asyncProperty(storedState, async (state) => {
                memory.clear();
                localStorage.clear();
                for (const key of ALL_STORAGE_KEYS) {
                    await storageService.set(key, state[key]);
                }

                const first = await clearAllData();
                const afterOnce = await readAll();
                const second = await clearAllData();
                const afterTwice = await readAll();

                expect(first).toEqual({ success: true });
                expect(second).toEqual({ success: true });
                expect(afterTwice).toEqual(afterOnce);
                for (const key of ALL_STORAGE_KEYS) {
                    expect(afterTwice[key]).toBeNull();
                }
            }),
            { numRuns: 100 }
        );
    });
});
