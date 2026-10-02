'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useGameStore } from '@/store/useGameStore';
import { useTimer } from '@/hooks/useTimer';
import { GameHeader } from '@/components/Game/GameHeader';
import { WordCard } from '@/components/Game/WordCard';
import { ClearSavedScores } from '@/components/ClearSavedScores';
import { LEGAL_LINKS } from '@/lib/legal';
import { rememberScore } from '@/lib/savedScores';

function starRating(score: number): string {
  if (score >= 150) return '⭐⭐⭐';
  if (score >= 50) return '⭐⭐';
  return '⭐';
}

function scoreMessage(score: number): string {
  if (score >= 150) return "You're a champion! 🏆";
  if (score >= 50) return 'Great job! Keep it up! 🎉';
  return 'Nice try! Play again to improve! 💪';
}

export default function GamePage() {
  const router = useRouter();
  const status = useGameStore((s) => s.status);
  const score = useGameStore((s) => s.score);
  const wordsCompleted = useGameStore((s) => s.wordsCompleted);
  const selectedLanguage = useGameStore((s) => s.selectedLanguage);
  const selectedTopic = useGameStore((s) => s.selectedTopic);
  const resetGame = useGameStore((s) => s.resetGame);
  const savedOnce = useRef(false);

  useTimer();

  // Guard: if someone lands here without starting, send them to landing
  useEffect(() => {
    if (status === 'IDLE') router.replace('/');
  }, [status, router]);

  useEffect(() => {
    if (status !== 'FINISHED' || savedOnce.current) return;
    savedOnce.current = true;
    rememberScore({
      score,
      wordsCompleted,
      language: selectedLanguage,
      topic: selectedTopic,
      savedAt: Date.now(),
    });
  }, [status, score, wordsCompleted, selectedLanguage, selectedTopic]);

  const handlePlayAgain = () => {
    resetGame();
    router.push('/');
  };

  /* ── Game Over Screen ── */
  if (status === 'FINISHED') {
    const stars = starRating(score);
    const message = scoreMessage(score);
    const lang = selectedLanguage === 'en' ? '🇬🇧 English' : '🇪🇸 Español';

    return (
      <main className="min-h-screen bg-gradient-to-b from-violet-600 to-indigo-700 flex flex-col items-center justify-center p-6 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 220, damping: 16 }}
          className="w-full max-w-sm"
        >
          <div className="text-8xl mb-3">🏆</div>

          <h1 className="text-5xl sm:text-6xl font-black text-white drop-shadow-lg mb-1">
            Time&apos;s Up!
          </h1>
          <p className="text-xl text-violet-200 mb-5 font-semibold">{lang}</p>

          {/* Stars */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 300 }}
            className="text-4xl mb-4"
          >
            {stars}
          </motion.div>

          {/* Score card */}
          <div className="bg-white/20 backdrop-blur-sm rounded-3xl px-8 py-6 mb-4">
            <span className="text-violet-200 font-bold text-sm uppercase tracking-widest block mb-1">
              Final Score
            </span>
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 280 }}
              className="text-7xl font-black text-yellow-300 block"
            >
              {score.toLocaleString()}
            </motion.span>
            <p className="text-white/70 text-sm mt-2 font-semibold">
              {wordsCompleted} word{wordsCompleted !== 1 ? 's' : ''} completed
            </p>
          </div>

          <p className="text-white font-bold text-lg mb-6">{message}</p>

          <button
            type="button"
            onClick={handlePlayAgain}
            className="w-full bg-green-400 hover:bg-green-300 text-white font-black text-2xl py-5 rounded-2xl shadow-[0_5px_0_#15803d] border-b-4 border-green-700 active:shadow-none active:border-b-0 active:translate-y-1 transition-all duration-100"
          >
            Play Again! ↻
          </button>
          <div className="mt-4">
            <ClearSavedScores />
          </div>
          <div className="mt-4 flex justify-center gap-4 text-sm font-bold text-white">
            <Link href="/settings" className="underline underline-offset-4">Settings</Link>
            <Link href={LEGAL_LINKS.privacy} className="underline underline-offset-4">Privacy</Link>
            <Link href={LEGAL_LINKS.terms} className="underline underline-offset-4">Terms</Link>
          </div>
        </motion.div>
      </main>
    );
  }

  if (status === 'IDLE') return null;

  /* ── Active Game Screen ── */
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-50 flex flex-col items-start justify-start p-4 sm:p-6">
      <div className="w-full max-w-md mx-auto flex flex-col min-h-screen pb-6">
        <GameHeader />
        <div className="flex-1 flex items-center justify-center">
          <WordCard />
        </div>
      </div>
    </main>
  );
}
