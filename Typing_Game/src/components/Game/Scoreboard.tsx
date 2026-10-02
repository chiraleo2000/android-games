import React from 'react';
import { getComboMessage } from '../../utils/gameLogic';

interface ScoreboardProps {
  score: number;
  streak: number;
  multiplier: number;
  totalCorrect: number;
}

export const Scoreboard: React.FC<ScoreboardProps> = ({
  score,
  streak,
  multiplier,
  totalCorrect,
}) => {
  const comboMessage = getComboMessage(streak);
  const isStreaking = streak >= 2;

  return (
    <div className="flex items-center justify-between gap-4 w-full">
      {/* Score */}
      <div className="flex flex-col items-center">
        <span className="text-xs font-nunito font-bold text-teal-500 uppercase tracking-widest dark:text-teal-200">Score</span>
        <span
          className="font-baloo font-black text-4xl text-teal-800 tabular-nums dark:text-teal-100"
          id="score-display"
        >
          {score.toLocaleString()}
        </span>
      </div>

      {/* Multiplier + Combo */}
      <div className="flex flex-col items-center">
        {comboMessage && (
          <span className="text-xs font-baloo font-bold animate-bounce-in text-amber-600">
            {comboMessage}
          </span>
        )}
        <div
          className={`flex items-center gap-1 px-3 py-1 rounded-2xl transition-all ${
            isStreaking
              ? 'bg-gradient-to-r from-emerald-400 to-teal-400 animate-pulse-glow shadow-lg'
              : 'bg-gray-100 dark:bg-slate-800'
          }`}
        >
          <span className="text-lg">⚡</span>
          <span
            className={`font-baloo font-black text-2xl ${
              isStreaking ? 'text-white' : 'text-gray-500 dark:text-slate-300'
            }`}
          >
            {multiplier.toFixed(1)}x
          </span>
        </div>
        <span className="text-xs font-nunito text-gray-400 mt-0.5 dark:text-slate-400">multiplier</span>
      </div>

      {/* Correct Count */}
      <div className="flex flex-col items-center">
        <span className="text-xs font-nunito font-bold text-emerald-400 uppercase tracking-widest dark:text-emerald-200">Correct</span>
        <div className="flex items-center gap-1">
          <span className="text-2xl">✅</span>
          <span className="font-baloo font-black text-3xl text-emerald-600 dark:text-emerald-200">{totalCorrect}</span>
        </div>
      </div>
    </div>
  );
};
