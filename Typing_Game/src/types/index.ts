// Core game types for WordSprint

export interface Word {
  id: string;
  term: string;
  meaning: string;
  imageUrl: string;
  category: WordCategory;
  difficulty: GameDifficulty;
  emoji?: string;
}

export type GameDifficulty = 'easy' | 'medium' | 'hard';

export type WordCategory = 
  | 'animals'
  | 'fruits'
  | 'vegetables'
  | 'food'
  | 'geography'
  | 'vehicles'
  | 'nature'
  | 'sports'
  | 'occupations'
  | 'body'
  | 'household';

export interface CategoryInfo {
  id: WordCategory | 'all';
  label: string;
  emoji: string;
  imageUrl: string;
  color: string;
  bgGradient: string;
  wordCount: number;
}

export interface GameState {
  score: number;
  streak: number;
  multiplier: number;
  timeLeft: number;
  isGameOver: boolean;
  isStarted: boolean;
  currentWordIndex: number;
  currentWordMistakes: number;
  maxMistakesPerWord: number;
  isAnswerRevealed: boolean;
  totalCorrect: number;
  totalAttempts: number;
  lastFeedback: 'correct' | 'wrong' | 'revealed' | 'none';
}

export type GamePhase = 'menu' | 'playing' | 'gameover';

export interface ScoreResult {
  pointsGained: number;
  nextMultiplier: number;
}

export interface StreakEffect {
  isActive: boolean;
  comboMessage: string;
}

export interface Language {
  code: string;
  name: string;
  flag: string;
  nativeName: string;
}
