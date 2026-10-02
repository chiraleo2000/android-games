import type { GameDifficulty, Word, WordCategory } from '../../types';
import { animalsWords } from './animals';
import { fruitsWords } from './fruits';
import { vegetablesWords } from './vegetables';
import { foodWords } from './food';
import { geographyWords } from './geography';
import { vehiclesWords } from './vehicles';
import { natureWords } from './nature';
import { sportsWords } from './sports';
import { occupationsWords } from './occupations';
import { bodyWords } from './body';
import { householdWords } from './household';

export {
  animalsWords, fruitsWords, vegetablesWords, foodWords, geographyWords,
  vehiclesWords, natureWords, sportsWords, occupationsWords, bodyWords, householdWords,
};

// All words combined
export const allWords: Word[] = [
  ...animalsWords,
  ...fruitsWords,
  ...vegetablesWords,
  ...foodWords,
  ...geographyWords,
  ...vehiclesWords,
  ...natureWords,
  ...sportsWords,
  ...occupationsWords,
  ...bodyWords,
  ...householdWords,
];

export const wordsByCategory: Record<WordCategory, Word[]> = {
  animals: animalsWords,
  fruits: fruitsWords,
  vegetables: vegetablesWords,
  food: foodWords,
  geography: geographyWords,
  vehicles: vehiclesWords,
  nature: natureWords,
  sports: sportsWords,
  occupations: occupationsWords,
  body: bodyWords,
  household: householdWords,
};

// Fisher-Yates shuffle
export const shuffleWords = (words: Word[]): Word[] => {
  const shuffled = [...words];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const getWordsForCategory = (
  category: WordCategory | 'all',
  difficulty?: GameDifficulty
): Word[] => {
  const categoryWords = category === 'all' ? allWords : wordsByCategory[category] ?? allWords;
  const levelWords = difficulty
    ? categoryWords.filter((word) => word.difficulty === difficulty)
    : categoryWords;

  return shuffleWords(levelWords.length > 0 ? levelWords : categoryWords);
};
