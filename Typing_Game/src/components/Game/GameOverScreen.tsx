import React from 'react';
import type { ThemeMode } from '../../hooks/useTheme';
import { getGameOverMessage, getStarRating, getAccuracy } from '../../utils/gameLogic';
import { SettingsPanel } from '../SettingsPanel.js';
import { ThemeToggle } from './ThemeToggle';

const celebrationMarks = [
  { key: 'sparkle-green', emoji: '⚡', left: '8%',  top: '12%', delay: '0s',   duration: '3s'   },
  { key: 'star',          emoji: '⭐', left: '20%', top: '45%', delay: '0.4s', duration: '3.3s' },
  { key: 'sparkle-white', emoji: '✨', left: '33%', top: '68%', delay: '0.8s', duration: '3.6s' },
  { key: 'party',         emoji: '🎉', left: '48%', top: '12%', delay: '1.2s', duration: '3.9s' },
  { key: 'confetti',      emoji: '🎊', left: '60%', top: '42%', delay: '1.6s', duration: '4.2s' },
  { key: 'trophy',        emoji: '🏆', left: '72%', top: '68%', delay: '2s',   duration: '4.5s' },
  { key: 'books',         emoji: '📖', left: '84%', top: '18%', delay: '2.4s', duration: '4.8s' },
  { key: 'bolt',          emoji: '⚡', left: '93%', top: '50%', delay: '2.8s', duration: '5.1s' },
];

interface GameOverScreenProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  score: number;
  totalCorrect: number;
  totalAttempts: number;
  onPlayAgain: () => void;
  freshNotice: string;
  onFreshStart: () => void;
}

export const GameOverScreen: React.FC<GameOverScreenProps> = ({
  theme,
  onToggleTheme,
  score,
  totalCorrect,
  totalAttempts,
  onPlayAgain,
  freshNotice,
  onFreshStart,
}) => {
  const stars = getStarRating(score);
  const accuracy = getAccuracy(totalCorrect, totalAttempts);
  const message = getGameOverMessage(score, totalCorrect);

  return (
    <div className="relative min-h-screen bg-[linear-gradient(135deg,#0c4a6e_0%,#0e7490_45%,#134e4a_100%)] flex items-center justify-center p-4 transition-colors">
      <div className="absolute right-4 top-4 z-20">
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>

      {/* Star field — matches store feature graphic */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(rgba(255,255,255,0.9) 1.2px, transparent 1.2px), radial-gradient(rgba(255,255,255,0.55) 0.7px, transparent 0.7px)',
            backgroundSize: '120px 120px, 60px 60px',
            backgroundPosition: '0 0, 30px 50px',
          }}
        />
        <div className="absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-white/5 blur-2xl" />
        <svg aria-hidden="true" viewBox="0 0 100 200" className="absolute left-6 bottom-16 h-32 w-16 text-amber-300 opacity-15" fill="currentColor">
          <polygon points="60,0 25,110 55,110 35,200 80,80 50,80" />
        </svg>
      </div>

      {/* Floating celebration emojis */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {celebrationMarks.map((mark) => (
          <span
            key={mark.key}
            className="absolute text-4xl opacity-30 animate-float"
            style={{ left: mark.left, top: mark.top, animationDelay: mark.delay, animationDuration: mark.duration }}
          >
            {mark.emoji}
          </span>
        ))}
      </div>

      <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-8 max-w-md w-full text-center flex flex-col gap-6 animate-bounce-in">
        {/* WS badge */}
        <div className="mx-auto flex h-14 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-orange-400 font-baloo text-2xl font-black text-white shadow-xl ring-2 ring-white/20">
          WS
        </div>

        {/* Title */}
        <div>
          <h1 className="font-baloo font-black text-5xl text-white mb-1">Game Over!</h1>
          <p className="font-nunito text-sky-200/80 text-base">{message}</p>
        </div>

        {/* Stars */}
        <div className="flex justify-center gap-2">
          {[1, 2, 3].map((star) => (
            <span
              key={star}
              className="text-5xl"
              style={{
                filter: star <= stars ? 'none' : 'grayscale(1) opacity(0.3)',
                animationDelay: `${star * 0.2}s`,
              }}
            >
              ⭐
            </span>
          ))}
        </div>

        {/* Score */}
        <div className="bg-white/10 border border-white/20 rounded-3xl p-5">
          <p className="font-nunito text-sky-200 text-xs font-bold uppercase tracking-widest mb-1">
            Final Score
          </p>
          <p className="font-baloo font-black text-6xl bg-gradient-to-r from-rose-400 to-orange-300 bg-clip-text text-transparent" id="final-score">
            {score.toLocaleString()}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-emerald-500/20 border border-emerald-400/30 rounded-2xl p-3">
            <p className="font-nunito text-xs text-emerald-300 font-bold uppercase tracking-wider">Words Correct</p>
            <p className="font-baloo font-black text-3xl text-white">{totalCorrect}</p>
          </div>
          <div className="bg-sky-500/20 border border-sky-400/30 rounded-2xl p-3">
            <p className="font-nunito text-xs text-sky-300 font-bold uppercase tracking-wider">Accuracy</p>
            <p className="font-baloo font-black text-3xl text-white">{accuracy}%</p>
          </div>
        </div>

        {/* Play Again */}
        <button
          id="play-again-btn"
          onClick={onPlayAgain}
          className="w-full bg-gradient-to-r from-rose-500 to-orange-400 hover:from-rose-600 hover:to-orange-500 active:scale-95 text-white font-baloo font-black text-2xl py-4 rounded-3xl shadow-xl transition-all duration-200 hover:shadow-2xl hover:-translate-y-0.5 ring-2 ring-white/20"
        >
          Play Again! ⚡
        </button>

        <SettingsPanel notice={freshNotice} onFreshStart={onFreshStart} />

        <p className="font-nunito text-xs font-bold uppercase tracking-[0.18em] text-sky-200/60">
          Type · Learn · Sprint
        </p>
      </div>
    </div>
  );
};
