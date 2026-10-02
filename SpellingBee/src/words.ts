import type { Difficulty, WordEntry } from './types/game';
import wordsData from './words-data.json';

export type { Difficulty, WordEntry } from './types/game';

interface WordsDataFile {
  source: string;
  generatedAt: string;
  counts: { easy: number; medium: number; hard: number; total: number };
  words: WordEntry[];
}

const data = wordsData as WordsDataFile;

export const WORDS: WordEntry[] = data.words;

export const WORDS_META = {
  source: data.source,
  generatedAt: data.generatedAt,
  counts: data.counts,
};

export const getRandomWord = (difficulty?: Difficulty) => {
  const pool = difficulty ? WORDS.filter(word => word.difficulty === difficulty) : WORDS;
  const safePool = pool.length > 0 ? pool : WORDS;

  return safePool[Math.floor(Math.random() * safePool.length)];
};
