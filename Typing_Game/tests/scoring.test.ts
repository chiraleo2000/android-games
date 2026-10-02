import {
  calculateScore,
  formatTime,
  getComboMessage,
  getAccuracy,
  getNextMistakeState,
  getStarRating,
  normalizeAnswer,
  validateAnswer,
} from '../src/utils/gameLogic';
import { getWordsForCategory } from '../src/data/words';

describe('Scoring System', () => {
  describe('calculateScore()', () => {
    test('returns base points and resets multiplier when streak is broken', () => {
      const result = calculateScore(10, 2.5, false);
      expect(result.pointsGained).toBe(10);
      expect(result.nextMultiplier).toBe(1);
    });

    test('applies 1.5x multiplier on first streak hit', () => {
      const result = calculateScore(10, 1, true);
      expect(result.nextMultiplier).toBe(1.5);
      expect(result.pointsGained).toBe(15); // floor(10 * 1.5)
    });

    test('compounds multiplier on consecutive hits (1 → 1.5 → 2.25)', () => {
      const base = 10;
      let mult = 1;

      const first = calculateScore(base, mult, true);
      mult = first.nextMultiplier; // 1.5
      expect(first.pointsGained).toBe(15);

      const second = calculateScore(base, mult, true);
      expect(second.nextMultiplier).toBeCloseTo(2.25, 5);
      expect(second.pointsGained).toBe(Math.floor(10 * 2.25)); // 22
    });

    test('caps multiplier at MAX_MULTIPLIER (8.0)', () => {
      // After many consecutive hits
      let mult = 1;
      for (let i = 0; i < 20; i++) {
        const res = calculateScore(10, mult, true);
        mult = res.nextMultiplier;
      }
      expect(mult).toBeLessThanOrEqual(8);
    });

    test('large multiplier with streak reset returns only base points', () => {
      const result = calculateScore(10, 6, false);
      expect(result.pointsGained).toBe(10);
      expect(result.nextMultiplier).toBe(1);
    });
  });

  describe('formatTime()', () => {
    test('formats 0 seconds', () => {
      expect(formatTime(0)).toBe('00:00');
    });

    test('formats 300 seconds as 05:00', () => {
      expect(formatTime(300)).toBe('05:00');
    });

    test('formats 65 seconds as 01:05', () => {
      expect(formatTime(65)).toBe('01:05');
    });

    test('formats 9 seconds as 00:09', () => {
      expect(formatTime(9)).toBe('00:09');
    });
  });

  describe('getComboMessage()', () => {
    test('returns empty string for streak 0', () => {
      expect(getComboMessage(0)).toBe('');
    });

    test('returns empty string for streak 1', () => {
      expect(getComboMessage(1)).toBe('');
    });

    test('returns combo message for streak 2+', () => {
      expect(getComboMessage(2)).toBeTruthy();
    });

    test('returns LEGENDARY for streak 10+', () => {
      expect(getComboMessage(10)).toContain('LEGENDARY');
    });
  });

  describe('getAccuracy()', () => {
    test('returns 0 when no attempts', () => {
      expect(getAccuracy(0, 0)).toBe(0);
    });

    test('returns 100 when all correct', () => {
      expect(getAccuracy(10, 10)).toBe(100);
    });

    test('returns 50 when half correct', () => {
      expect(getAccuracy(5, 10)).toBe(50);
    });

    test('rounds to nearest integer', () => {
      expect(getAccuracy(1, 3)).toBe(33);
    });
  });

  describe('getStarRating()', () => {
    test('returns 1 star for low score', () => {
      expect(getStarRating(50)).toBe(1);
    });

    test('returns 2 stars for medium score (200+)', () => {
      expect(getStarRating(200)).toBe(2);
    });

    test('returns 3 stars for high score (500+)', () => {
      expect(getStarRating(500)).toBe(3);
    });
  });

  describe('answer validation', () => {
    test('normalizes case and extra whitespace', () => {
      expect(validateAnswer('Elephant', '  elephant  ')).toBe(true);
      expect(validateAnswer('ice cream', 'Ice   Cream')).toBe(true);
    });

    test('ignores simple punctuation and accents', () => {
      expect(validateAnswer('t-shirt', 't shirt')).toBe(true);
      expect(validateAnswer('cafe', 'caf\u00e9')).toBe(true);
    });

    test('keeps numbers as exact normalized strings', () => {
      expect(validateAnswer('5', '5')).toBe(true);
      expect(validateAnswer('5', 'five')).toBe(false);
      expect(validateAnswer('room 101', 'room-101')).toBe(true);
    });

    test('returns a stable normalized value for display-independent matching', () => {
      expect(normalizeAnswer('  Hello!!! 123  ')).toBe('hello 123');
    });
  });

  describe('getNextMistakeState()', () => {
    test('does not reveal before the fifth mistake', () => {
      expect(getNextMistakeState(0, 5)).toEqual({ mistakes: 1, shouldReveal: false });
      expect(getNextMistakeState(3, 5)).toEqual({ mistakes: 4, shouldReveal: false });
    });

    test('reveals on the fifth mistake and caps the counter', () => {
      expect(getNextMistakeState(4, 5)).toEqual({ mistakes: 5, shouldReveal: true });
      expect(getNextMistakeState(5, 5)).toEqual({ mistakes: 5, shouldReveal: true });
    });
  });

  describe('difficulty filtering', () => {
    test('returns only words for the requested level', () => {
      const easyWords = getWordsForCategory('all', 'easy');
      const hardAnimalWords = getWordsForCategory('animals', 'hard');

      expect(easyWords.length).toBeGreaterThan(0);
      expect(hardAnimalWords.length).toBeGreaterThan(0);
      expect(easyWords.every((word) => word.difficulty === 'easy')).toBe(true);
      expect(hardAnimalWords.every((word) => word.category === 'animals')).toBe(true);
      expect(hardAnimalWords.every((word) => word.difficulty === 'hard')).toBe(true);
    });
  });

  describe('US-first vocabulary', () => {
    test('uses US-mainstream words for confusing common cases', () => {
      const allWords = getWordsForCategory('all');
      const terms = allWords.map((word) => word.term);

      expect(terms).toContain('football');
      expect(terms).toContain('fall');
      expect(terms).toContain('omelet');
      expect(terms).toContain('beet');
      expect(terms).toContain('ice cream');
      expect(terms).not.toContain('netball');
      expect(terms).not.toContain('autumn');
      expect(terms).not.toContain('omelette');
      expect(terms).not.toContain('beetroot');
    });
  });

  describe('original categories', () => {
    const originalCategories = [
      'animals',
      'fruits',
      'vegetables',
      'food',
      'geography',
      'vehicles',
      'nature',
      'sports',
      'occupations',
      'body',
      'household',
    ] as const;

    test('drops the dictionary category and stays under the old 11000-word list', () => {
      const all = getWordsForCategory('all');
      const categories = new Set(all.map((word) => word.category));

      expect(all.length).toBeGreaterThan(0);
      expect(all.length).toBeLessThan(11000);
      expect(categories.has('dictionary' as never)).toBe(false);
      expect([...categories].sort()).toEqual([...originalCategories].sort());
    });

    test('keeps the original topics and each word has the required shape', () => {
      const all = getWordsForCategory('all');
      const seenCategories = new Set(all.map((word) => word.category));

      expect(all.length).toBeGreaterThan(0);
      expect([...seenCategories].sort()).toEqual([...originalCategories].sort());

      for (const word of all) {
        expect(typeof word.id).toBe('string');
        expect(word.id.length).toBeGreaterThan(0);
        expect(typeof word.term).toBe('string');
        expect(word.term.length).toBeGreaterThan(0);
        expect(typeof word.meaning).toBe('string');
        expect(word.meaning.length).toBeGreaterThan(0);
        expect(typeof word.imageUrl).toBe('string');
        expect(word.imageUrl.length).toBeGreaterThan(0);
        expect(originalCategories).toContain(word.category);
        expect(['easy', 'medium', 'hard']).toContain(word.difficulty);
      }

      for (const category of originalCategories) {
        const words = getWordsForCategory(category);
        expect(words.length).toBeGreaterThan(0);
        expect(words.every((word) => word.category === category)).toBe(true);
      }
    });
  });

  describe('global word integrity', () => {

    test('no duplicate IDs across the entire word set', () => {
      const all = getWordsForCategory('all');
      const ids = new Set<string>();
      const dupes: string[] = [];
      for (const w of all) {
        if (ids.has(w.id)) dupes.push(w.id);
        ids.add(w.id);
      }
      expect(dupes).toEqual([]);
    });
  });

  describe('scoring edge cases', () => {
    test('zero base points still respects multiplier shape', () => {
      const r = calculateScore(0, 2, true);
      expect(r.pointsGained).toBe(0);
      expect(r.nextMultiplier).toBe(3);
    });

    test('negative streak start treated as a reset', () => {
      const r = calculateScore(10, 0, false);
      expect(r.pointsGained).toBe(10);
      expect(r.nextMultiplier).toBe(1);
    });

    test('accuracy rounds half to nearest', () => {
      // 2/4 = 50, 3/8 = 37.5 -> 38
      expect(getAccuracy(2, 4)).toBe(50);
      expect(getAccuracy(3, 8)).toBe(38);
    });
  });
});
