// Re-exports from new modular categories for backwards compatibility
export { allWords, allWords as wordsData, shuffleWords as getShuffledWords, getWordsForCategory, wordsByCategory } from './categories/index';


import type { CategoryInfo, WordCategory } from '../types';
import { allWords, wordsByCategory } from './categories/index';

export const categoryMeta: CategoryInfo[] = [
  { id: 'all', label: 'All Topics', emoji: '🌟', imageUrl: '/categories/all.png', color: 'from-violet-500 to-pink-500', bgGradient: 'from-violet-600 to-pink-600', wordCount: allWords.length },
  { id: 'animals', label: 'Animals', emoji: '🐾', imageUrl: '/categories/animals.png', color: 'from-emerald-500 to-teal-500', bgGradient: 'from-emerald-600 to-teal-600', wordCount: wordsByCategory.animals.length },
  { id: 'fruits', label: 'Fruits', emoji: '🍎', imageUrl: '/categories/fruits.png', color: 'from-orange-400 to-red-500', bgGradient: 'from-orange-500 to-red-600', wordCount: wordsByCategory.fruits.length },
  { id: 'vegetables', label: 'Vegetables', emoji: '🥕', imageUrl: '/categories/vegetables.png', color: 'from-green-500 to-lime-500', bgGradient: 'from-green-600 to-lime-600', wordCount: wordsByCategory.vegetables.length },
  { id: 'food', label: 'Food & Dishes', emoji: '🍕', imageUrl: '/categories/food.png', color: 'from-amber-400 to-orange-500', bgGradient: 'from-amber-500 to-orange-600', wordCount: wordsByCategory.food.length },
  { id: 'geography', label: 'Geography', emoji: '🌍', imageUrl: '/categories/geography.png', color: 'from-blue-500 to-cyan-500', bgGradient: 'from-blue-600 to-cyan-600', wordCount: wordsByCategory.geography.length },
  { id: 'vehicles', label: 'Vehicles', emoji: '🚗', imageUrl: '/categories/vehicles.png', color: 'from-slate-500 to-blue-500', bgGradient: 'from-slate-600 to-blue-600', wordCount: wordsByCategory.vehicles.length },
  { id: 'nature', label: 'Nature & Weather', emoji: '🌈', imageUrl: '/categories/nature.png', color: 'from-sky-400 to-indigo-500', bgGradient: 'from-sky-500 to-indigo-600', wordCount: wordsByCategory.nature.length },
  { id: 'sports', label: 'Sports', emoji: '⚽', imageUrl: '/categories/sports.png', color: 'from-rose-500 to-pink-500', bgGradient: 'from-rose-600 to-pink-600', wordCount: wordsByCategory.sports.length },
  { id: 'occupations', label: 'Occupations', emoji: '👩‍⚕️', imageUrl: '/categories/occupations.png', color: 'from-purple-500 to-indigo-500', bgGradient: 'from-purple-600 to-indigo-600', wordCount: wordsByCategory.occupations.length },
  { id: 'body', label: 'Human Body', emoji: '🫀', imageUrl: '/categories/body.png', color: 'from-red-400 to-rose-500', bgGradient: 'from-red-500 to-rose-600', wordCount: wordsByCategory.body.length },
  { id: 'household', label: 'Household', emoji: '🏠', imageUrl: '/categories/household.png', color: 'from-yellow-400 to-amber-500', bgGradient: 'from-yellow-500 to-amber-600', wordCount: wordsByCategory.household.length },
];

export const categoryColors: Record<string, { bg: string; border: string; text: string }> = {
  animals:     { bg: 'bg-emerald-50', border: 'border-emerald-300', text: 'text-emerald-700' },
  fruits:      { bg: 'bg-orange-50',  border: 'border-orange-300',  text: 'text-orange-700'  },
  vegetables:  { bg: 'bg-green-50',   border: 'border-green-300',   text: 'text-green-700'   },
  food:        { bg: 'bg-amber-50',   border: 'border-amber-300',   text: 'text-amber-700'   },
  geography:   { bg: 'bg-blue-50',    border: 'border-blue-300',    text: 'text-blue-700'    },
  vehicles:    { bg: 'bg-slate-50',   border: 'border-slate-300',   text: 'text-slate-700'   },
  nature:      { bg: 'bg-sky-50',     border: 'border-sky-300',     text: 'text-sky-700'     },
  sports:      { bg: 'bg-rose-50',    border: 'border-rose-300',    text: 'text-rose-700'    },
  occupations: { bg: 'bg-purple-50',  border: 'border-purple-300',  text: 'text-purple-700'  },
  body:        { bg: 'bg-red-50',     border: 'border-red-300',     text: 'text-red-700'     },
  household:   { bg: 'bg-yellow-50',  border: 'border-yellow-300',  text: 'text-yellow-700'  },
};

// Legacy helper to count words per category
export const getCategoryWordCount = (category: WordCategory): number =>
  wordsByCategory[category]?.length ?? 0;
