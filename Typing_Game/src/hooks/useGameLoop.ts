import { useState, useEffect, useCallback, useRef } from 'react';
import type { GameState, Word } from '../types';
import {
  ANSWER_REVEAL_DELAY_MS,
  calculateScore,
  GAME_DURATION,
  getNextMistakeState,
  MAX_MISTAKES_PER_WORD,
  STREAK_WINDOW,
  BASE_POINTS,
} from '../utils/gameLogic';

export interface UseGameLoopReturn {
  state: GameState;
  startGame: () => void;
  resetGame: () => void;
  handleCorrectAnswer: () => void;
  handleWrongAnswer: () => void;
  currentWord: Word;
}

const initialGameState: GameState = {
  score: 0,
  streak: 0,
  multiplier: 1,
  timeLeft: GAME_DURATION,
  isGameOver: false,
  isStarted: false,
  currentWordIndex: 0,
  currentWordMistakes: 0,
  maxMistakesPerWord: MAX_MISTAKES_PER_WORD,
  isAnswerRevealed: false,
  totalCorrect: 0,
  totalAttempts: 0,
  lastFeedback: 'none',
};

export const useGameLoop = (words: Word[]): UseGameLoopReturn => {
  const [state, setState] = useState<GameState>(initialGameState);
  const lastCorrectTimeRef = useRef<number>(Date.now());
  const feedbackTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const revealTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // === Timer Countdown ===
  useEffect(() => {
    if (!state.isStarted || state.isGameOver) return;

    const timer = setInterval(() => {
      setState((prev) => {
        if (prev.timeLeft <= 1) {
          return { ...prev, timeLeft: 0, isGameOver: true, isStarted: false };
        }
        return { ...prev, timeLeft: prev.timeLeft - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [state.isStarted, state.isGameOver]);

  // === Clear feedback after animation ===
  const clearFeedback = useCallback(() => {
    if (feedbackTimeoutRef.current) clearTimeout(feedbackTimeoutRef.current);
    feedbackTimeoutRef.current = setTimeout(() => {
      setState((prev) => (prev.isAnswerRevealed ? prev : { ...prev, lastFeedback: 'none' }));
    }, 600);
  }, []);

  const clearRevealTimeout = useCallback(() => {
    if (revealTimeoutRef.current) {
      clearTimeout(revealTimeoutRef.current);
      revealTimeoutRef.current = null;
    }
  }, []);

  const advanceToNextWord = useCallback(() => {
    setState((current) => {
      if (current.isGameOver) return current;

      return {
        ...current,
        currentWordIndex: (current.currentWordIndex + 1) % words.length,
        currentWordMistakes: 0,
        isAnswerRevealed: false,
        lastFeedback: 'none',
      };
    });
    revealTimeoutRef.current = null;
  }, [words.length]);

  useEffect(() => {
    if (!state.isAnswerRevealed) return;

    clearRevealTimeout();
    revealTimeoutRef.current = setTimeout(advanceToNextWord, ANSWER_REVEAL_DELAY_MS);

    return clearRevealTimeout;
  }, [advanceToNextWord, clearRevealTimeout, state.isAnswerRevealed, state.currentWordIndex]);

  useEffect(
    () => () => {
      if (feedbackTimeoutRef.current) clearTimeout(feedbackTimeoutRef.current);
      clearRevealTimeout();
    },
    [clearRevealTimeout]
  );

  // === Start Game ===
  const startGame = useCallback(() => {
    clearRevealTimeout();
    if (feedbackTimeoutRef.current) clearTimeout(feedbackTimeoutRef.current);
    lastCorrectTimeRef.current = Date.now();
    setState({ ...initialGameState, isStarted: true });
  }, [clearRevealTimeout]);

  // === Reset Game ===
  const resetGame = useCallback(() => {
    clearRevealTimeout();
    if (feedbackTimeoutRef.current) clearTimeout(feedbackTimeoutRef.current);
    lastCorrectTimeRef.current = Date.now();
    setState(initialGameState);
  }, [clearRevealTimeout]);

  // === Handle Correct Answer ===
  const handleCorrectAnswer = useCallback(() => {
    const now = Date.now();
    const diffSeconds = (now - lastCorrectTimeRef.current) / 1000;
    const isWithinWindow = diffSeconds <= STREAK_WINDOW;

    lastCorrectTimeRef.current = now;

    setState((prev) => {
      if (prev.isAnswerRevealed) return prev;

      const { pointsGained, nextMultiplier } = calculateScore(
        BASE_POINTS,
        prev.multiplier,
        isWithinWindow
      );

      return {
        ...prev,
        score: prev.score + pointsGained,
        multiplier: nextMultiplier,
        streak: isWithinWindow ? prev.streak + 1 : 1,
        currentWordIndex: (prev.currentWordIndex + 1) % words.length,
        currentWordMistakes: 0,
        isAnswerRevealed: false,
        totalCorrect: prev.totalCorrect + 1,
        totalAttempts: prev.totalAttempts + 1,
        lastFeedback: 'correct',
      };
    });

    clearFeedback();
  }, [words.length, clearFeedback]);

  // === Handle Wrong Answer ===
  const handleWrongAnswer = useCallback(() => {
    setState((prev) => {
      if (prev.isAnswerRevealed) return prev;

      const { mistakes, shouldReveal } = getNextMistakeState(
        prev.currentWordMistakes,
        prev.maxMistakesPerWord
      );

      return {
        ...prev,
        streak: 0,
        multiplier: 1,
        currentWordMistakes: mistakes,
        isAnswerRevealed: shouldReveal,
        totalAttempts: prev.totalAttempts + 1,
        lastFeedback: shouldReveal ? 'revealed' : 'wrong',
      };
    });

    // Reset streak window timer on wrong answer
    lastCorrectTimeRef.current = 0; // Force streak window to expire

    clearFeedback();
  }, [clearFeedback]);

  const currentWord = words[state.currentWordIndex] ?? words[0];

  return { state, startGame, resetGame, handleCorrectAnswer, handleWrongAnswer, currentWord };
};
