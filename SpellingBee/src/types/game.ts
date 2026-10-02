export type Difficulty = 'easy' | 'medium' | 'hard';
export type GameScreen = 'start' | 'game' | 'gameover';
export type FeedbackState = 'correct' | 'wrong' | 'timeout' | null;
export type GameOverReason = 'time' | 'misses' | 'exit' | null;

export interface WordEntry {
  english: string;
  chinese?: string;
  pinyin?: string;
  pos: string;
  hint: string;
  difficulty: Difficulty;
}

export interface GameState {
  screen: GameScreen;
  difficulty: Difficulty;
  score: number;
  streak: number;
  maxStreak: number;
  wordsSpelled: number;
  missesInRow: number;
  gameOverReason: GameOverReason;
  currentWord: WordEntry | null;
  input: string;
  timeLeft: number;
  roundTimeLeft: number;
  feedback: FeedbackState;
  pointsGained: number;
}

export type GameAction =
  | { type: 'START_GAME'; payload: { difficulty: Difficulty } }
  | { type: 'SUBMIT_ANSWER'; payload: { input: string } }
  | { type: 'ADVANCE_WORD' }
  | { type: 'END_GAME'; payload: { reason: Exclude<GameOverReason, null> } }
  | { type: 'RESET' };

export interface ScoreBreakdown {
  basePoints: number;
  multiplier: number;
  totalPoints: number;
  streak: number;
}
