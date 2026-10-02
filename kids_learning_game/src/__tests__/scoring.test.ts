import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { calculatePoints, BASE_POINTS, COMBO_WINDOW_MS } from '@/lib/scoring';

const FIXED_NOW = 1_000_000;

describe('calculatePoints', () => {
  beforeEach(() => {
    vi.spyOn(Date, 'now').mockReturnValue(FIXED_NOW);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns BASE_POINTS when lastSuccessTime is null', () => {
    expect(calculatePoints(0, null)).toBe(BASE_POINTS);
    expect(calculatePoints(100, null)).toBe(BASE_POINTS);
  });

  it('returns BASE_POINTS when last success was more than 10s ago', () => {
    const oldTime = FIXED_NOW - (COMBO_WINDOW_MS + 1);
    expect(calculatePoints(50, oldTime)).toBe(BASE_POINTS);
  });

  it('applies 1.5× multiplier (adds 50% of score) within combo window', () => {
    const recentTime = FIXED_NOW - 5_000; // 5 seconds ago
    expect(calculatePoints(50, recentTime)).toBe(25); // floor(50 * 0.5)
  });

  it('floors fractional combo points', () => {
    const recentTime = FIXED_NOW - 3_000;
    expect(calculatePoints(15, recentTime)).toBe(7); // floor(7.5) = 7
  });

  it('returns 0 bonus points when score is 0 inside combo window', () => {
    const recentTime = FIXED_NOW - 1_000;
    expect(calculatePoints(0, recentTime)).toBe(0); // floor(0 * 0.5) = 0
  });

  it('treats exactly 10 000 ms as still within the combo window', () => {
    const exactBoundary = FIXED_NOW - COMBO_WINDOW_MS;
    expect(calculatePoints(20, exactBoundary)).toBe(10); // floor(20 * 0.5)
  });

  it('treats 10 001 ms as outside the combo window', () => {
    const justOver = FIXED_NOW - (COMBO_WINDOW_MS + 1);
    expect(calculatePoints(20, justOver)).toBe(BASE_POINTS);
  });

  it('handles a large current score correctly', () => {
    const recentTime = FIXED_NOW - 2_000;
    expect(calculatePoints(1000, recentTime)).toBe(500); // floor(1000 * 0.5)
  });
});
