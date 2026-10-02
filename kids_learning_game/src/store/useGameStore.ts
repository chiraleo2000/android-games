import { create } from 'zustand';
import { GameState, Language, TopicKey, WordCard } from '@/types/game';
import { dictionary } from '@/lib/dictionary';
import { calculatePoints } from '@/lib/scoring';

interface GameActions {
  startGame: (lang: Language, topic?: TopicKey) => void;
  tick: () => void;
  handleWordSuccess: () => void;
  resetGame: () => void;
}

const GAME_DURATION = 300;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getWords(lang: Language, topic: TopicKey): WordCard[] {
  const all = dictionary[lang] ?? dictionary['en'];
  const filtered = topic === 'all' ? all : all.filter((w) => w.topic === topic);
  return shuffle(filtered.length > 0 ? filtered : all);
}

export const useGameStore = create<GameState & GameActions>((set, get) => ({
  score: 0,
  timeLeft: GAME_DURATION,
  currentWordIndex: 0,
  wordsCompleted: 0,
  lastSuccessTime: null,
  status: 'IDLE',
  selectedLanguage: 'en',
  selectedTopic: 'all',
  words: dictionary['en'],

  startGame: (lang, topic = 'all') =>
    set({
      score: 0,
      timeLeft: GAME_DURATION,
      currentWordIndex: 0,
      wordsCompleted: 0,
      lastSuccessTime: null,
      status: 'PLAYING',
      selectedLanguage: lang,
      selectedTopic: topic,
      words: getWords(lang, topic),
    }),

  tick: () =>
    set((state) => {
      if (state.timeLeft <= 1) return { status: 'FINISHED', timeLeft: 0 };
      return { timeLeft: state.timeLeft - 1 };
    }),

  handleWordSuccess: () => {
    const { score, lastSuccessTime, words, currentWordIndex, wordsCompleted } = get();
    const points = calculatePoints(score, lastSuccessTime);
    const nextIndex = currentWordIndex + 1;
    set({
      score: score + points,
      currentWordIndex: nextIndex >= words.length ? 0 : nextIndex,
      wordsCompleted: wordsCompleted + 1,
      lastSuccessTime: Date.now(),
    });
  },

  resetGame: () =>
    set({
      score: 0,
      timeLeft: GAME_DURATION,
      currentWordIndex: 0,
      wordsCompleted: 0,
      lastSuccessTime: null,
      status: 'IDLE',
      selectedTopic: 'all',
      words: dictionary['en'],
    }),
}));
