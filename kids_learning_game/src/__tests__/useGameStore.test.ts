import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { useGameStore } from '@/store/useGameStore';
import { dictionary } from '@/lib/dictionary';

const FIXED_NOW = 2_000_000;

const INITIAL_STATE = {
  score: 0,
  timeLeft: 300,
  currentWordIndex: 0,
  wordsCompleted: 0,
  lastSuccessTime: null,
  status: 'IDLE' as const,
  selectedLanguage: 'en' as const,
  selectedTopic: 'all' as const,
  words: dictionary['en'],
};

beforeEach(() => {
  useGameStore.setState(INITIAL_STATE);
  vi.spyOn(Date, 'now').mockReturnValue(FIXED_NOW);
});

afterEach(() => {
  vi.restoreAllMocks();
});

// ── startGame ────────────────────────────────────────────────────────────────
describe('startGame', () => {
  it('sets status to PLAYING', () => {
    useGameStore.getState().startGame('en');
    expect(useGameStore.getState().status).toBe('PLAYING');
  });

  it('resets score and time', () => {
    useGameStore.setState({ score: 200, timeLeft: 100 });
    useGameStore.getState().startGame('en');
    const { score, timeLeft } = useGameStore.getState();
    expect(score).toBe(0);
    expect(timeLeft).toBe(300);
  });

  it('resets wordsCompleted', () => {
    useGameStore.setState({ wordsCompleted: 7 });
    useGameStore.getState().startGame('en');
    expect(useGameStore.getState().wordsCompleted).toBe(0);
  });

  it('loads English words', () => {
    useGameStore.getState().startGame('en');
    const words = useGameStore.getState().words;
    expect(words.length).toBeGreaterThan(0);
    expect(words.every((w) => w.id.startsWith('en-'))).toBe(true);
  });

  it('loads Spanish words', () => {
    useGameStore.getState().startGame('es');
    const words = useGameStore.getState().words;
    expect(words.length).toBeGreaterThan(0);
    expect(words.every((w) => w.id.startsWith('es-'))).toBe(true);
  });

  it('sets selectedLanguage', () => {
    useGameStore.getState().startGame('es');
    expect(useGameStore.getState().selectedLanguage).toBe('es');
  });

  it('filters by topic when provided', () => {
    useGameStore.getState().startGame('en', 'animals');
    const words = useGameStore.getState().words;
    expect(words.length).toBeGreaterThan(0);
    expect(words.every((w) => w.topic === 'animals')).toBe(true);
  });

  it('loads all topics when topic is "all"', () => {
    useGameStore.getState().startGame('en', 'all');
    const words = useGameStore.getState().words;
    const topics = new Set(words.map((w) => w.topic));
    expect(topics.size).toBeGreaterThan(1);
  });

  it('shuffles words on each start', () => {
    useGameStore.getState().startGame('en');
    const first = useGameStore.getState().words.map((w) => w.id).join(',');
    useGameStore.getState().startGame('en');
    const second = useGameStore.getState().words.map((w) => w.id).join(',');
    // With 500 words the chance of identical order is astronomically small
    expect(first).not.toBe(second);
  });
});

// ── tick ─────────────────────────────────────────────────────────────────────
describe('tick', () => {
  beforeEach(() => {
    useGameStore.getState().startGame('en');
  });

  it('decrements timeLeft by 1', () => {
    useGameStore.getState().tick();
    expect(useGameStore.getState().timeLeft).toBe(299);
  });

  it('sets status to FINISHED when timeLeft reaches 1', () => {
    useGameStore.setState({ timeLeft: 1, status: 'PLAYING' });
    useGameStore.getState().tick();
    expect(useGameStore.getState().status).toBe('FINISHED');
  });

  it('sets timeLeft to 0 on finishing tick', () => {
    useGameStore.setState({ timeLeft: 1, status: 'PLAYING' });
    useGameStore.getState().tick();
    expect(useGameStore.getState().timeLeft).toBe(0);
  });

  it('does not go below 0', () => {
    useGameStore.setState({ timeLeft: 1, status: 'PLAYING' });
    useGameStore.getState().tick();
    useGameStore.getState().tick();
    expect(useGameStore.getState().timeLeft).toBe(0);
  });
});

// ── handleWordSuccess ─────────────────────────────────────────────────────────
describe('handleWordSuccess', () => {
  beforeEach(() => {
    useGameStore.getState().startGame('en');
  });

  it('adds BASE_POINTS on first success (no previous time)', () => {
    useGameStore.getState().handleWordSuccess();
    expect(useGameStore.getState().score).toBe(10);
  });

  it('increments wordsCompleted', () => {
    useGameStore.getState().handleWordSuccess();
    expect(useGameStore.getState().wordsCompleted).toBe(1);
  });

  it('advances the word index', () => {
    useGameStore.getState().handleWordSuccess();
    expect(useGameStore.getState().currentWordIndex).toBe(1);
  });

  it('wraps word index at the end of the word list', () => {
    const wordCount = useGameStore.getState().words.length;
    useGameStore.setState({ currentWordIndex: wordCount - 1 });
    useGameStore.getState().handleWordSuccess();
    expect(useGameStore.getState().currentWordIndex).toBe(0);
  });

  it('records lastSuccessTime as Date.now()', () => {
    useGameStore.getState().handleWordSuccess();
    expect(useGameStore.getState().lastSuccessTime).toBe(FIXED_NOW);
  });

  it('applies 1.5× multiplier when within combo window', () => {
    useGameStore.getState().handleWordSuccess();
    useGameStore.getState().handleWordSuccess();
    // Second success adds floor(10 * 0.5) = 5  →  total 15
    expect(useGameStore.getState().score).toBe(15);
  });
});

// ── resetGame ─────────────────────────────────────────────────────────────────
describe('resetGame', () => {
  it('resets all state back to IDLE defaults', () => {
    useGameStore.setState({ score: 500, status: 'FINISHED', wordsCompleted: 20, timeLeft: 0 });
    useGameStore.getState().resetGame();
    const state = useGameStore.getState();
    expect(state.score).toBe(0);
    expect(state.status).toBe('IDLE');
    expect(state.wordsCompleted).toBe(0);
    expect(state.timeLeft).toBe(300);
    expect(state.lastSuccessTime).toBeNull();
    expect(state.selectedTopic).toBe('all');
  });
});
