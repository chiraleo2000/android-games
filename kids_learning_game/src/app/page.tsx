'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '@/store/useGameStore';
import { Language, TopicKey } from '@/types/game';
import { TOPIC_META } from '@/lib/dictionary';
import { LEGAL_LINKS } from '@/lib/legal';
import { bestSavedScore } from '@/lib/savedScores';

const LANGUAGES: { code: Language; label: string; flag: string; color: string; shadow: string }[] = [
  { code: 'en', label: 'English',  flag: '🇬🇧', color: 'bg-indigo-500 hover:bg-indigo-400 border-indigo-700', shadow: 'shadow-[0_5px_0_#3730a3]' },
  { code: 'es', label: 'Español',  flag: '🇪🇸', color: 'bg-rose-500   hover:bg-rose-400   border-rose-700',   shadow: 'shadow-[0_5px_0_#9f1239]' },
];

const TOPIC_COLORS: string[] = [
  'bg-emerald-400 hover:bg-emerald-300 border-emerald-600',
  'bg-orange-400  hover:bg-orange-300  border-orange-600',
  'bg-violet-400  hover:bg-violet-300  border-violet-600',
  'bg-sky-400     hover:bg-sky-300     border-sky-600',
  'bg-pink-400    hover:bg-pink-300    border-pink-600',
  'bg-yellow-400  hover:bg-yellow-300  border-yellow-600',
  'bg-teal-400    hover:bg-teal-300    border-teal-600',
  'bg-red-400     hover:bg-red-300     border-red-600',
  'bg-indigo-400  hover:bg-indigo-300  border-indigo-600',
  'bg-lime-400    hover:bg-lime-300    border-lime-600',
  'bg-fuchsia-400 hover:bg-fuchsia-300 border-fuchsia-600',
];

const TIPS = [
  { icon: '👀', text: 'Look at the picture clue' },
  { icon: '⌨️', text: 'Type the matching word' },
  { icon: '⚡', text: '10-second streak = 1.5× score!' },
  { icon: '⏱️', text: '5 minutes on the clock' },
];

const STARS = [
  { id: 'twinkle-1', emoji: '✨' },
  { id: 'star-1',    emoji: '⭐' },
  { id: 'glow-1',    emoji: '🌟' },
  { id: 'spin-1',    emoji: '💫' },
  { id: 'twinkle-2', emoji: '✨' },
  { id: 'star-2',    emoji: '⭐' },
];
const TOPIC_KEYS = Object.keys(TOPIC_META) as TopicKey[];

export default function LandingPage() {
  const router = useRouter();
  const startGame = useGameStore((s) => s.startGame);

  const [selectedLang, setSelectedLang] = useState<Language | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<TopicKey | null>(null);
  const [bestScore, setBestScore] = useState<number | null>(null);

  useEffect(() => {
    setBestScore(bestSavedScore());
  }, []);

  const canStart = selectedLang !== null && selectedTopic !== null;

  const handleStart = () => {
    if (!canStart) return;
    startGame(selectedLang, selectedTopic);
    router.push('/game');
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-violet-500 via-blue-500 to-cyan-500 flex flex-col items-center justify-start p-5 pb-12 overflow-hidden">
      {/* Floating stars */}
      {STARS.map(({ id, emoji }, i) => (
        <motion.span
          key={id}
          className="absolute text-2xl sm:text-3xl pointer-events-none select-none"
          style={{ top: `${10 + (i * 15) % 80}%`, left: `${5 + (i * 17) % 90}%` }}
          animate={{ y: [0, -12, 0], rotate: [0, 15, -15, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
        >
          {emoji}
        </motion.span>
      ))}

      {/* Title */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 18 }}
        className="text-center mt-8 mb-6"
      >
        <motion.div
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-7xl sm:text-8xl mb-3 inline-block"
        >
          🎮
        </motion.div>
        <h1 className="text-5xl sm:text-6xl font-black text-white drop-shadow-lg leading-none mb-2">
          Word Blitz!
        </h1>
        <p className="text-lg sm:text-xl text-white/80 font-semibold">
          Type fast. Score big. Learn more!
        </p>
      </motion.div>

      {/* How to play */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white/20 backdrop-blur-sm rounded-3xl p-4 mb-6 w-full max-w-sm"
      >
        <p className="text-white font-black text-center text-base mb-2">How to play</p>
        <ul className="space-y-1.5">
          {TIPS.map(({ icon, text }) => (
            <li key={text} className="flex items-center gap-2 text-white/90 font-semibold text-sm">
              <span className="text-lg shrink-0">{icon}</span>
              {text}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Step 1 — Language */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="w-full max-w-sm mb-5"
      >
        <p className="text-white font-black text-center text-lg mb-3">
          1️⃣ Pick a language
        </p>
        <div className="flex gap-3">
          {LANGUAGES.map(({ code, label, flag, color, shadow }) => (
            <motion.button
              key={code}
              type="button"
              onClick={() => setSelectedLang(code)}
              whileTap={{ scale: 0.95, y: 3 }}
              className={`flex-1 flex items-center justify-center gap-2 ${color} ${shadow} text-white font-black text-xl py-4 rounded-2xl border-b-4 transition-all duration-100 ring-4 ${
                selectedLang === code ? 'ring-white scale-105' : 'ring-transparent'
              }`}
            >
              <span className="text-3xl">{flag}</span>
              {label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Step 2 — Topic */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="w-full max-w-sm mb-6"
      >
        <p className="text-white font-black text-center text-lg mb-3">
          2️⃣ Pick a topic
        </p>
        <div className="grid grid-cols-3 gap-2">
          {TOPIC_KEYS.map((key, i) => {
            const { label, emoji } = TOPIC_META[key];
            const colorClass = TOPIC_COLORS[i % TOPIC_COLORS.length];
            return (
              <motion.button
                key={key}
                type="button"
                onClick={() => setSelectedTopic(key)}
                whileTap={{ scale: 0.93, y: 2 }}
                className={`${colorClass} text-white font-bold py-3 px-2 rounded-2xl border-b-4 flex flex-col items-center gap-1 transition-all duration-100 ring-4 ${
                  selectedTopic === key ? 'ring-white scale-105' : 'ring-transparent'
                }`}
              >
                <span className="text-2xl leading-none">{emoji}</span>
                <span className="text-[11px] leading-tight text-center">{label}</span>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Start button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="w-full max-w-sm"
      >
        <AnimatePresence>
          {canStart && (
            <motion.button
              key="start"
              type="button"
              onClick={handleStart}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              whileTap={{ scale: 0.96, y: 4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              className="w-full bg-green-400 hover:bg-green-300 text-white font-black text-2xl py-5 rounded-2xl shadow-[0_5px_0_#15803d] border-b-4 border-green-700 active:shadow-none active:border-b-0 active:translate-y-1 transition-all duration-100"
            >
              🚀 Start Game!
            </motion.button>
          )}
        </AnimatePresence>
        {canStart ? null : (
          <p className="text-white/60 text-sm font-semibold text-center">
            {selectedLang ? 'Now pick a topic!' : 'Pick a language first'}
          </p>
        )}
      </motion.div>

      <div className="w-full max-w-sm mt-6 flex flex-col items-center gap-3 text-white">
        {bestScore !== null && (
          <p className="font-black text-lg">Best saved score: {bestScore.toLocaleString()}</p>
        )}
        <Link href="/settings" className="font-black text-lg underline underline-offset-4">
          Settings
        </Link>
        <div className="flex gap-4 text-sm font-bold">
          <Link href={LEGAL_LINKS.privacy} className="underline underline-offset-4">Privacy Policy</Link>
          <Link href={LEGAL_LINKS.terms} className="underline underline-offset-4">Terms of Service</Link>
        </div>
      </div>
    </main>
  );
}
