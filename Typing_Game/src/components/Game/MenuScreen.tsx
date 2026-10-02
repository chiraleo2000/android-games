import React, { useMemo, useState } from 'react';
import type { GameDifficulty, WordCategory } from '../../types';
import type { ThemeMode } from '../../hooks/useTheme';
import { allWords, categoryMeta, wordsByCategory } from '../../data/words';
import { SettingsPanel } from '../SettingsPanel.js';
import { ThemeToggle } from './ThemeToggle';

interface MenuScreenProps {
  theme: ThemeMode;
  selectedCategory: WordCategory | 'all';
  selectedDifficulty: GameDifficulty;
  onToggleTheme: () => void;
  onStart: (category: WordCategory | 'all', difficulty: GameDifficulty) => void;
  freshNotice: string;
  onFreshStart: () => void;
}

interface DifficultyOption {
  id: GameDifficulty;
  label: string;
  emoji: string;
}

const difficultyOptions: DifficultyOption[] = [
  { id: 'easy', label: 'Easy', emoji: '🌱' },
  { id: 'medium', label: 'Medium', emoji: '⭐' },
  { id: 'hard', label: 'Hard', emoji: '🔥' },
];

const getLevelButtonClass = (level: GameDifficulty, selectedLevel: GameDifficulty): string => {
  if (level === selectedLevel) {
    return 'border-teal-400 bg-teal-50 text-teal-800 ring-4 ring-teal-100 dark:border-teal-300 dark:bg-teal-950 dark:text-teal-100 dark:ring-teal-900';
  }

  return 'border-slate-100 bg-white text-slate-600 hover:border-teal-200 hover:bg-teal-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-teal-500 dark:hover:bg-slate-700';
};

const getTopicRowClass = (isSelected: boolean): string => {
  if (isSelected) {
    return 'border-emerald-400 bg-emerald-50 ring-4 ring-emerald-100 dark:border-emerald-300 dark:bg-emerald-950/70 dark:ring-emerald-900';
  }

  return 'border-slate-100 bg-white hover:border-teal-200 hover:bg-teal-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-teal-500 dark:hover:bg-slate-700';
};

export const MenuScreen: React.FC<MenuScreenProps> = ({
  theme,
  selectedCategory,
  selectedDifficulty,
  onToggleTheme,
  onStart,
  freshNotice,
  onFreshStart,
}) => {
  const [selected, setSelected] = useState<WordCategory | 'all'>(selectedCategory);
  const [difficulty, setDifficulty] = useState<GameDifficulty>(selectedDifficulty);
  const [isTopicTableOpen, setIsTopicTableOpen] = useState(false);

  const selectedMeta = categoryMeta.find((category) => category.id === selected) ?? categoryMeta[0];
  const selectedWords = useMemo(() => {
    const categoryWords = selected === 'all' ? allWords : wordsByCategory[selected] ?? allWords;
    return categoryWords.filter((word) => word.difficulty === difficulty);
  }, [difficulty, selected]);
  const playableCount = selectedWords.length;

  const chooseTopic = (category: WordCategory | 'all') => {
    setSelected(category);
    setIsTopicTableOpen(false);
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[linear-gradient(135deg,#0c4a6e_0%,#0e7490_45%,#134e4a_100%)] text-white transition-colors duration-300">
      {/* Star field overlay (matches store feature graphic) */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(rgba(255,255,255,0.9) 1.2px, transparent 1.2px), radial-gradient(rgba(255,255,255,0.55) 0.7px, transparent 0.7px)',
            backgroundSize: '120px 120px, 60px 60px',
            backgroundPosition: '0 0, 30px 50px',
          }}
        />
        {/* Glowing decorative circle (top-right) */}
        <div className="absolute -right-32 top-1/3 h-[28rem] w-[28rem] rounded-full bg-white/5 blur-2xl" />
        {/* Lightning bolt accent */}
        <svg
          aria-hidden="true"
          viewBox="0 0 100 200"
          className="absolute right-8 top-16 h-44 w-24 text-amber-300 opacity-20"
          fill="currentColor"
        >
          <polygon points="60,0 25,110 55,110 35,200 80,80 50,80" />
        </svg>
      </div>

      <div className="absolute right-4 top-4 z-30">
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>

      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center gap-4 px-4 py-8 sm:py-10">
        <header className="text-center">
          {/* WS monogram badge — mirrors the 512×512 launcher icon */}
          <div className="mx-auto flex h-20 w-32 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-orange-400 font-baloo text-4xl font-black text-white shadow-2xl ring-4 ring-white/20">
            WS
          </div>
          <h1 className="mt-4 font-baloo text-5xl font-black leading-none drop-shadow-lg sm:text-6xl">
            <span className="text-white">Word</span>
            <span className="bg-gradient-to-r from-rose-400 to-orange-300 bg-clip-text text-transparent">
              Sprint
            </span>
          </h1>
          <p className="mt-2 font-nunito text-sm font-bold uppercase tracking-[0.2em] text-sky-200/80">
            Type · Learn · Sprint
          </p>
        </header>

        <section className="overflow-hidden rounded-3xl border-4 border-white bg-white/92 shadow-2xl backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/92">
          <div className={`bg-gradient-to-br ${selectedMeta.bgGradient} p-4 text-white sm:p-5`}>
            <div className="flex items-center gap-4">
              <img
                src={selectedMeta.imageUrl}
                alt={selectedMeta.label}
                className="h-24 w-24 rounded-2xl border-4 border-white/60 object-cover shadow-lg sm:h-32 sm:w-32"
              />
              <div className="min-w-0 text-left">
                <p className="font-baloo text-3xl font-black leading-tight sm:text-4xl">{selectedMeta.label}</p>
                <p className="font-nunito text-base font-bold text-white/90">
                  {playableCount} {difficulty} words
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 p-4 sm:grid-cols-[1fr_auto] sm:items-center">
            <button
              type="button"
              onClick={() => setIsTopicTableOpen((isOpen) => !isOpen)}
              className="flex min-h-16 items-center justify-between rounded-2xl border-4 border-teal-100 bg-teal-50 px-4 py-3 text-left shadow-sm transition active:scale-95 dark:border-teal-800 dark:bg-teal-950/70"
            >
              <span>
                <span className="block font-nunito text-xs font-black uppercase tracking-wide text-teal-500 dark:text-teal-200">
                  Topic
                </span>
                <span className="block font-baloo text-2xl font-black text-teal-800 dark:text-teal-100">
                  {selectedMeta.label}
                </span>
              </span>
              <span className="text-3xl">{isTopicTableOpen ? '▲' : '▼'}</span>
            </button>

            <button
              type="button"
              onClick={() => onStart(selected, difficulty)}
              disabled={playableCount === 0}
              className="rounded-2xl border-b-4 border-teal-800 bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-4 font-baloo text-2xl font-black text-white shadow-xl transition-all hover:-translate-y-0.5 hover:from-emerald-600 hover:to-teal-700 active:scale-95 disabled:cursor-not-allowed disabled:from-slate-400 disabled:to-slate-500 dark:border-teal-950"
            >
              Start 🚀
            </button>
          </div>
        </section>

        {isTopicTableOpen && (
          <section className="animate-slide-up rounded-3xl border-4 border-white bg-white/95 p-4 shadow-2xl backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/95">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h2 className="font-baloo text-3xl font-black text-teal-800 dark:text-teal-100">All Topics</h2>
              <span className="rounded-full bg-amber-100 px-3 py-1 font-nunito text-xs font-black uppercase tracking-wide text-amber-700 dark:bg-amber-900/70 dark:text-amber-100">
                {categoryMeta.length} choices
              </span>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {categoryMeta.map((category) => {
                const isSelected = selected === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => chooseTopic(category.id)}
                    className={`relative grid min-h-24 grid-cols-[5rem_1fr] items-center gap-3 rounded-2xl border-4 p-2 text-left shadow-sm transition-all active:scale-95 ${getTopicRowClass(isSelected)}`}
                  >
                    <img
                      src={category.imageUrl}
                      alt={category.label}
                      className="h-20 w-20 rounded-xl object-cover shadow-md"
                    />
                    <span className="min-w-0">
                      <span className="block font-nunito text-base font-extrabold leading-tight text-slate-700 dark:text-slate-100">
                        {category.label}
                      </span>
                      <span className="block font-nunito text-xs font-bold text-slate-400 dark:text-slate-300">
                        {category.wordCount} common words
                      </span>
                    </span>
                    {isSelected && <span className="absolute right-2 top-2 rounded-full bg-white p-1 text-xl shadow-lg">✅</span>}
                  </button>
                );
              })}
            </div>
          </section>
        )}

        <section className="grid grid-cols-3 gap-2 rounded-3xl border-4 border-white bg-white/92 p-3 shadow-xl dark:border-slate-700 dark:bg-slate-900/92">
          {difficultyOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setDifficulty(option.id)}
              className={`rounded-2xl border-4 px-2 py-3 text-center transition-all active:scale-95 ${getLevelButtonClass(option.id, difficulty)}`}
            >
              <span className="block text-2xl">{option.emoji}</span>
              <span className="block font-baloo text-lg font-black leading-tight">{option.label}</span>
            </button>
          ))}
        </section>

        <SettingsPanel notice={freshNotice} onFreshStart={onFreshStart} />
      </main>
    </div>
  );
};
