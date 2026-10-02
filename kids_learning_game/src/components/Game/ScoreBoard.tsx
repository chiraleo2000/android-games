'use client';

import { motion } from 'framer-motion';
import { useGameStore } from '@/store/useGameStore';

export function ScoreBoard() {
  const score = useGameStore((s) => s.score);

  return (
    <div className="flex flex-col items-center mb-6">
      <div className="bg-yellow-400 px-8 py-4 rounded-2xl shadow-[0_4px_0_#b45309] border-b-4 border-yellow-600 text-center">
        <span className="text-gray-800 font-bold text-sm uppercase tracking-widest block mb-1">
          Your Score
        </span>
        <motion.span
          key={score}
          initial={{ scale: 1.4, color: '#ffffff' }}
          animate={{ scale: 1, color: '#1e3a5f' }}
          transition={{ duration: 0.35 }}
          className="text-7xl font-black block"
        >
          {score.toLocaleString()}
        </motion.span>
      </div>
      <p className="mt-3 text-gray-500 italic text-sm">
        ⚡ Type fast within 10s for a 1.5× bonus!
      </p>
    </div>
  );
}
