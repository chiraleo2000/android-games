import React, { useEffect, useMemo, useRef, useState } from 'react';
import type { GameDifficulty, WordCategory } from '../../types';
import { useGameLoop } from '../../hooks/useGameLoop';
import { useTheme } from '../../hooks/useTheme';
import { getWordsForCategory } from '../../data/words';
import { FRESH_START_MESSAGE } from '../../utils/clearLocalData.js';
import { GAME_DURATION, validateAnswer } from '../../utils/gameLogic';
import { playFeedbackHaptic } from '../../utils/haptics';
import { Timer } from './Timer';
import { Scoreboard } from './Scoreboard';
import { WordCard } from './WordCard';
import { MenuScreen } from './MenuScreen';
import { GameOverScreen } from './GameOverScreen';
import { ThemeToggle } from './ThemeToggle';

export const GameBoard: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<WordCategory | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<GameDifficulty>('easy');
  const [gameKey, setGameKey] = useState(0); // force re-mount on new game
  const [freshNotice, setFreshNotice] = useState('');
  const [screenshotOverride, setScreenshotOverride] = useState<null | 'gameover'>(null);
  const { theme, toggleTheme, resetToDefault } = useTheme();

  // Shuffle words for selected category — re-computes when category or key changes
  const gameWords = useMemo(
    () => getWordsForCategory(selectedCategory, selectedDifficulty),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedCategory, selectedDifficulty, gameKey]
  );

  const { state, startGame, resetGame, handleCorrectAnswer, handleWrongAnswer, currentWord } =
    useGameLoop(gameWords);

  const handleFreshStart = () => {
    resetToDefault();
    setSelectedCategory('all');
    setSelectedDifficulty('easy');
    setScreenshotOverride(null);
    resetGame();
    setGameKey((key) => key + 1);
    setFreshNotice(FRESH_START_MESSAGE);
  };

  // === Screenshot helper (?screen=game|gameover) — triggers once on load ===
  const didApplyScreenParam = useRef(false);
  useEffect(() => {
    if (didApplyScreenParam.current) return;
    if (globalThis.window === undefined) return;
    const screen = new URLSearchParams(globalThis.window.location.search).get('screen');
    if (!screen) return;
    didApplyScreenParam.current = true;
    if (screen === 'game') {
      setGameKey((k) => k + 1);
      setTimeout(() => startGame(), 50);
    } else if (screen === 'gameover') {
      setScreenshotOverride('gameover');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (screenshotOverride === 'gameover') {
    return (
      <GameOverScreen
        theme={theme}
        onToggleTheme={toggleTheme}
        score={2450}
        totalCorrect={18}
        totalAttempts={22}
        onPlayAgain={() => setScreenshotOverride(null)}
        freshNotice={freshNotice}
        onFreshStart={handleFreshStart}
      />
    );
  }

  // === Phase: Menu ===
  if (!state.isStarted && !state.isGameOver) {
    return (
      <MenuScreen
        theme={theme}
        onToggleTheme={toggleTheme}
        selectedCategory={selectedCategory}
        selectedDifficulty={selectedDifficulty}
        onStart={(cat, difficulty) => {
          setFreshNotice('');
          setSelectedCategory(cat);
          setSelectedDifficulty(difficulty);
          setGameKey((k) => k + 1);
          // Give React a tick to re-shuffle, then start
          setTimeout(() => startGame(), 50);
        }}
        freshNotice={freshNotice}
        onFreshStart={handleFreshStart}
      />
    );
  }

  // === Phase: Game Over ===
  if (state.isGameOver) {
    return (
      <GameOverScreen
        theme={theme}
        onToggleTheme={toggleTheme}
        score={state.score}
        totalCorrect={state.totalCorrect}
        totalAttempts={state.totalAttempts}
        onPlayAgain={() => {
          setFreshNotice('');
          resetGame();
          setGameKey((k) => k + 1);
        }}
        freshNotice={freshNotice}
        onFreshStart={handleFreshStart}
      />
    );
  }

  // === Phase: Playing ===
  if (!currentWord) {
    return (
      <div className="relative flex min-h-screen items-center justify-center bg-[linear-gradient(135deg,#0c4a6e_0%,#0e7490_45%,#134e4a_100%)] p-6 text-white">
        <div role="alert" className="max-w-md rounded-3xl bg-white/10 p-8 text-center">
          <p className="font-baloo text-3xl font-black">No words are ready</p>
          <p className="mt-2 font-nunito text-sky-100">This topic does not have a word for the selected level.</p>
          <button
            type="button"
            className="mt-6 rounded-2xl bg-white px-6 py-3 font-baloo text-xl font-black text-teal-800"
            onClick={() => {
              resetGame();
              setGameKey((key) => key + 1);
            }}
          >
            Back to menu
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = (inputValue: string) => {
    if (!currentWord) return;
    const isCorrect = validateAnswer(currentWord.term, inputValue);
    if (isCorrect) {
      void playFeedbackHaptic('correct');
      handleCorrectAnswer();
    } else {
      const willReveal = state.currentWordMistakes + 1 >= state.maxMistakesPerWord;
      void playFeedbackHaptic(willReveal ? 'reveal' : 'wrong');
      handleWrongAnswer();
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#0c4a6e_0%,#0e7490_45%,#134e4a_100%)] text-white transition-colors duration-300 flex flex-col">
      {/* Star field — matches store feature graphic */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(rgba(255,255,255,0.9) 1.2px, transparent 1.2px), radial-gradient(rgba(255,255,255,0.55) 0.7px, transparent 0.7px)',
            backgroundSize: '100px 100px, 50px 50px',
            backgroundPosition: '0 0, 25px 40px',
          }}
        />
        <div className="absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-white/5 blur-2xl" />
        <svg aria-hidden="true" viewBox="0 0 100 200" className="absolute right-6 bottom-24 h-36 w-20 text-amber-300 opacity-15" fill="currentColor">
          <polygon points="60,0 25,110 55,110 35,200 80,80 50,80" />
        </svg>
      </div>

      {/* ===== HEADER ===== */}
      <header className="relative z-10 border-b border-white/10 bg-black/20 px-4 py-3 shadow-lg backdrop-blur-md">
        <div className="max-w-5xl mx-auto flex flex-col gap-3">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-shrink-0">
              {/* WS pill — same as MenuScreen badge */}
              <div className="flex h-9 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-orange-400 font-baloo text-sm font-black text-white shadow-lg">
                WS
              </div>
              <span className="font-baloo font-black text-white text-xl hidden sm:block">
                Word<span className="bg-gradient-to-r from-rose-400 to-orange-300 bg-clip-text text-transparent">Sprint</span>
              </span>
              <span className="hidden rounded-full bg-white/15 px-3 py-1 font-nunito text-xs font-black uppercase tracking-wide text-sky-200 md:inline-flex">
                {selectedDifficulty}
              </span>
            </div>
            <Scoreboard
              score={state.score}
              streak={state.streak}
              multiplier={state.multiplier}
              totalCorrect={state.totalCorrect}
            />
            <ThemeToggle theme={theme} onToggle={toggleTheme} className="shrink-0" />
          </div>
          <Timer timeLeft={state.timeLeft} totalTime={GAME_DURATION} />
        </div>
      </header>

      {/* ===== MAIN GAME AREA ===== */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center p-4 gap-4">
        {/* Streak Banner — rose→orange gradient like store chips */}
        {state.streak >= 2 && (
          <div className="bg-gradient-to-r from-rose-500 to-orange-400 text-white font-baloo font-black text-xl px-6 py-2 rounded-full shadow-lg animate-bounce-in ring-2 ring-white/30">
            ⚡ {state.streak} Streak! × {state.multiplier.toFixed(1)}
          </div>
        )}

        {/* Word Card */}
        <div className="w-full max-w-2xl">
          <WordCard
            word={currentWord}
            feedback={state.lastFeedback}
            currentMistakes={state.currentWordMistakes}
            maxMistakes={state.maxMistakesPerWord}
            isAnswerRevealed={state.isAnswerRevealed}
            onSubmit={handleSubmit}
          />
        </div>

        <p className="font-nunito text-sky-200/70 text-sm text-center max-w-lg px-4">
          Type · Learn · Sprint
        </p>
      </main>
    </div>
  );
};
