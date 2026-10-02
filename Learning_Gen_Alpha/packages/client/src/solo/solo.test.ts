import { describe, expect, it } from 'vitest';
import { PUZZLES, isPuzzleCorrect } from './puzzles';
import { AUTH_TOKEN_KEY, LOG_KEY, clearSoloData, loadProgress, saveProgress } from './progress';

function memoryStore() {
  const data = new Map<string, string>();
  return {
    getItem(key: string) {
      return data.has(key) ? data.get(key)! : null;
    },
    setItem(key: string, value: string) {
      data.set(key, value);
    },
    removeItem(key: string) {
      data.delete(key);
    },
  };
}

describe('puzzle answers', () => {
  it('checks every puzzle on device and rejects a wrong answer', () => {
    expect(PUZZLES.length).toBeGreaterThanOrEqual(8);
    for (const puzzle of PUZZLES) {
      expect(puzzle.choices).toContain(puzzle.answer);
      expect(isPuzzleCorrect(puzzle, `  ${puzzle.answer.toUpperCase()}  `)).toBe(true);
      expect(isPuzzleCorrect(puzzle, 'not-the-answer')).toBe(false);
    }
  });
});

describe('clear data', () => {
  it('removes saved progress and does not restore it', () => {
    const store = memoryStore();
    saveProgress(store, { solved: ['math-multiply'], score: 100, hintsUsed: { 'math-multiply': 1 } });
    store.setItem(LOG_KEY, '[]');
    store.setItem(AUTH_TOKEN_KEY, 'session-token');
    expect(loadProgress(store)?.score).toBe(100);

    clearSoloData(store);

    expect(loadProgress(store)).toBeNull();
    expect(store.getItem(LOG_KEY)).toBeNull();
    expect(store.getItem(AUTH_TOKEN_KEY)).toBeNull();
    expect(loadProgress(store)?.solved ?? []).not.toContain('math-multiply');
  });
});
