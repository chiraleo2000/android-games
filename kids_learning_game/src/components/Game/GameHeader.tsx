'use client';

import { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '@/store/useGameStore';

const TOTAL_SECONDS = 300;
const COMBO_WINDOW_MS = 10000;

export function GameHeader() {
  const score = useGameStore((s) => s.score);
  const timeLeft = useGameStore((s) => s.timeLeft);
  const lastSuccessTime = useGameStore((s) => s.lastSuccessTime);

  const formatted = useMemo(() => {
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }, [timeLeft]);

  // timeLeft ticks every second, so this combo check stays fresh without extra state
  const isCombo = lastSuccessTime !== null && Date.now() - lastSuccessTime <= COMBO_WINDOW_MS;
  const isWarning = timeLeft <= 30;
  const pct = (timeLeft / TOTAL_SECONDS) * 100;

  return (
    <header className="w-full mb-4 select-none">
      {/* Score + combo + timer row */}
      <div className="flex items-center justify-between gap-2 mb-3">
        {/* Score pill */}
        <div className="flex items-center gap-2 bg-yellow-400 rounded-2xl px-3 py-2 shadow-[0_3px_0_#92400e] border-b-2 border-yellow-700 min-w-0">
          <span className="text-xl leading-none">🏆</span>
          <div className="min-w-0">
            <span className="text-yellow-900 text-[10px] font-bold uppercase tracking-widest block leading-none">
              Score
            </span>
            <motion.span
              key={score}
              initial={{ scale: 1.4 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2, type: 'spring', stiffness: 300 }}
              className="text-xl sm:text-2xl font-black text-yellow-900 leading-none block"
            >
              {score.toLocaleString()}
            </motion.span>
          </div>
        </div>

        {/* Combo badge — visible only when active */}
        <AnimatePresence>
          {isCombo && (
            <motion.div
              key="combo"
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="bg-orange-500 text-white font-black text-xs sm:text-sm px-3 py-2 rounded-xl shadow-lg shrink-0"
            >
              ⚡ 1.5× COMBO!
            </motion.div>
          )}
        </AnimatePresence>

        {/* Timer pill */}
        <div
          className={`flex items-center gap-2 rounded-2xl px-3 py-2 border-b-2 shadow transition-colors duration-300 ${
            isWarning
              ? 'bg-red-100 border-red-400'
              : 'bg-blue-100 border-blue-300'
          }`}
        >
          <span className="text-xl leading-none">{isWarning ? '🔥' : '⏱'}</span>
          <div>
            <span
              className={`text-[10px] font-bold uppercase tracking-widest block leading-none ${
                isWarning ? 'text-red-500' : 'text-blue-500'
              }`}
            >
              Time
            </span>
            <span
              className={`text-xl sm:text-2xl font-black font-mono leading-none block ${
                isWarning ? 'text-red-600' : 'text-blue-700'
              }`}
            >
              {formatted}
            </span>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1, ease: 'linear' }}
          className={`h-full rounded-full transition-colors duration-500 ${
            isWarning ? 'bg-red-500' : 'bg-blue-500'
          }`}
        />
      </div>
    </header>
  );
}
