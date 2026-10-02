import type { ScoreResult } from '../types';

export const GAME_DURATION = 300; // 5 minutes in seconds
export const STREAK_WINDOW = 10; // seconds to maintain streak
export const BASE_POINTS = 10;
export const STREAK_MULTIPLIER_FACTOR = 1.5;
export const MAX_MULTIPLIER = 8; // Cap the multiplier at 8x for balance
export const MAX_MISTAKES_PER_WORD = 5;
export const ANSWER_REVEAL_DELAY_MS = 1400;

export interface MistakeStateResult {
  mistakes: number;
  shouldReveal: boolean;
}

/**
 * Calculates points earned and the next multiplier value.
 * - If the answer is within the streak window, the multiplier compounds by 1.5x
 * - If the streak is broken (> 10s between correct answers), multiplier resets to 1
 */
export const calculateScore = (
  basePoints: number,
  currentMultiplier: number,
  isWithinStreakWindow: boolean
): ScoreResult => {
  if (!isWithinStreakWindow) {
    return { pointsGained: basePoints, nextMultiplier: 1 };
  }

  const newMultiplier = Math.min(currentMultiplier * STREAK_MULTIPLIER_FACTOR, MAX_MULTIPLIER);
  const pointsGained = Math.floor(basePoints * newMultiplier);

  return { pointsGained, nextMultiplier: newMultiplier };
};

/**
 * Normalizes kid-entered answers while preserving the displayed source word.
 */
export const normalizeAnswer = (value: string): string =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

export const validateAnswer = (expected: string, actual: string): boolean => {
  const normalizedExpected = normalizeAnswer(expected);
  const normalizedActual = normalizeAnswer(actual);

  if (!normalizedExpected || !normalizedActual) return false;
  if (normalizedExpected === normalizedActual) return true;

  return normalizedExpected.replace(/\s/g, '') === normalizedActual.replace(/\s/g, '');
};

export const getNextMistakeState = (
  currentMistakes: number,
  maxMistakes: number = MAX_MISTAKES_PER_WORD
): MistakeStateResult => {
  const mistakes = Math.min(currentMistakes + 1, maxMistakes);
  return { mistakes, shouldReveal: mistakes >= maxMistakes };
};

/**
 * Formats seconds into MM:SS display string
 */
export const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

/**
 * Returns a fun combo message based on streak count
 */
export const getComboMessage = (streak: number): string => {
  if (streak >= 10) return '🌟 LEGENDARY!';
  if (streak >= 7) return '🔥 ON FIRE!';
  if (streak >= 5) return '⚡ ELECTRIC!';
  if (streak >= 3) return '🎯 AWESOME!';
  if (streak >= 2) return '✨ NICE COMBO!';
  return '';
};

/**
 * Returns accuracy percentage
 */
export const getAccuracy = (correct: number, total: number): number => {
  if (total === 0) return 0;
  return Math.round((correct / total) * 100);
};

/**
 * Returns star rating (1-3) based on score
 */
export const getStarRating = (score: number): 1 | 2 | 3 => {
  if (score >= 500) return 3;
  if (score >= 200) return 2;
  return 1;
};

/**
 * Gets encouraging message for game over screen
 */
export const getGameOverMessage = (score: number, correct: number): string => {
  if (score >= 500) return "You're a Word Champion! 🏆";
  if (score >= 300) return "Amazing spelling skills! 🌟";
  if (score >= 150) return "Great job, keep practicing! 💪";
  if (correct > 0) return "Good try! You can do better! 🎯";
  return "Keep trying, you'll get it! 🌈";
};
