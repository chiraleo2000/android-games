'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '@/store/useGameStore';

const TOTAL = 300;
const WARNING_THRESHOLD = 30;

export function Timer() {
  const timeLeft = useGameStore((s) => s.timeLeft);

  const formatted = useMemo(() => {
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }, [timeLeft]);

  const isWarning = timeLeft <= WARNING_THRESHOLD;
  const pct = (timeLeft / TOTAL) * 100;

  return (
    <div className="w-full max-w-md mb-6 px-1">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-bold uppercase tracking-widest text-gray-400">
          Time Left
        </span>
        <span
          className={`text-3xl font-mono font-black transition-colors duration-300 ${
            isWarning ? 'text-red-500' : 'text-blue-600'
          }`}
        >
          {formatted}
        </span>
      </div>

      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden border-2 border-gray-300">
        <motion.div
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1, ease: 'linear' }}
          className={`h-full rounded-full transition-colors duration-300 ${
            isWarning ? 'bg-red-500' : 'bg-blue-400'
          }`}
        />
      </div>
    </div>
  );
}
