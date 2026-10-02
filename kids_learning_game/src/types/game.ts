export type Language = 'en' | 'es';
export type GameStatus = 'IDLE' | 'PLAYING' | 'FINISHED';
export type TopicKey =
  | 'all'
  | 'animals'
  | 'food'
  | 'colors'
  | 'vehicles'
  | 'sports'
  | 'bodyParts'
  | 'nature'
  | 'household'
  | 'clothing'
  | 'school';

export interface WordCard {
  id: string;
  word: string;
  displayWord: string;
  meaning: string;
  emoji: string;
  topic: TopicKey;
  imageUrl?: string;
}

export interface GameState {
  score: number;
  timeLeft: number;
  currentWordIndex: number;
  wordsCompleted: number;
  lastSuccessTime: number | null;
  status: GameStatus;
  selectedLanguage: Language;
  selectedTopic: TopicKey;
  words: WordCard[];
}
