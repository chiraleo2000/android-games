'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '@/store/useGameStore';

const FEEDBACK_DELAY_MS = 450;

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .trim();
}

export function WordCard() {
  const words = useGameStore((s) => s.words);
  const currentWordIndex = useGameStore((s) => s.currentWordIndex);
  const wordsCompleted = useGameStore((s) => s.wordsCompleted);
  const handleWordSuccess = useGameStore((s) => s.handleWordSuccess);

  const currentWord = words[currentWordIndex];

  const [inputValue, setInputValue] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setInputValue('');
    setIsCorrect(false);
    setIsWrong(false);
    const id = setTimeout(() => inputRef.current?.focus(), 50);
    return () => clearTimeout(id);
  }, [currentWordIndex]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isCorrect) return;
    const val = e.target.value;
    setInputValue(val);
    setIsWrong(false);

    const target = normalize(currentWord.word);
    const typed = normalize(val);

    if (typed === target) {
      setIsCorrect(true);
      setTimeout(() => handleWordSuccess(), FEEDBACK_DELAY_MS);
    } else if (val.length >= currentWord.word.length && typed !== target) {
      setIsWrong(true);
      setTimeout(() => setIsWrong(false), 600);
    }
  };

  if (!currentWord) return null;

  let borderClass = 'border-blue-200 focus-within:border-blue-500';
  if (isCorrect) borderClass = 'border-green-400';
  else if (isWrong) borderClass = 'border-red-400';

  let inputBorderClass = 'border-blue-200 focus:border-blue-500 bg-gray-50 text-gray-800';
  if (isCorrect) inputBorderClass = 'border-green-400 bg-green-50 text-green-700';
  else if (isWrong) inputBorderClass = 'border-red-400 bg-red-50 text-red-700';

  return (
    <motion.div
      key={currentWordIndex}
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3, type: 'spring', stiffness: 260, damping: 22 }}
      className={`bg-white rounded-3xl shadow-xl border-4 transition-colors duration-200 w-full max-w-md mx-auto overflow-hidden ${borderClass}`}
    >
      {/* Emoji visual */}
      <div className="relative w-full h-44 sm:h-56 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center overflow-hidden">
        <motion.span
          key={`emoji-${currentWordIndex}`}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, type: 'spring', stiffness: 200 }}
          className="text-8xl sm:text-9xl select-none leading-none"
          role="img"
          aria-label={currentWord.displayWord}
        >
          {currentWord.emoji}
        </motion.span>
        {/* Word counter badge */}
        <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm text-blue-700 font-bold text-xs px-2.5 py-1 rounded-full shadow">
          #{wordsCompleted + 1}
        </div>
        {/* Topic badge */}
        <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm text-indigo-700 font-semibold text-xs px-2.5 py-1 rounded-full shadow capitalize">
          {currentWord.topic === 'bodyParts' ? 'Body Parts' : currentWord.topic}
        </div>
      </div>

      {/* Clue only — never show the answer word */}
      <div className="p-5 sm:p-7 text-center">
        <p className="text-base sm:text-lg text-gray-600 mb-1 leading-snug font-medium">
          {currentWord.meaning}
        </p>
        <p className="text-xs text-gray-400 mb-4">
          {currentWord.word.length} letters
        </p>

        {/* Input — font-size ≥ 16px prevents iOS auto-zoom */}
        <motion.input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Type the word…"
          disabled={isCorrect}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="none"
          spellCheck={false}
          animate={isWrong ? { x: [0, -8, 8, -6, 6, 0] } : { x: 0 }}
          transition={{ duration: 0.4 }}
          className={`w-full px-4 py-4 text-xl sm:text-2xl text-center rounded-2xl border-4 outline-none transition-all duration-200 font-bold placeholder:font-normal placeholder:text-gray-400 ${inputBorderClass}`}
        />

        {/* Letter progress / feedback */}
        <div className="h-10 flex items-center justify-center mt-3">
          <AnimatePresence mode="wait">
            {isCorrect && (
              <motion.p
                key="correct"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="text-green-600 font-black text-xl"
              >
                🌟 Awesome! 🌟
              </motion.p>
            )}
            {!isCorrect && isWrong && (
              <motion.p
                key="wrong"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-red-500 font-bold text-sm"
              >
                Not quite — try again!
              </motion.p>
            )}
            {!isCorrect && !isWrong && (
              <motion.p
                key="hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-400 text-sm"
              >
                {inputValue.length > 0
                  ? `${inputValue.length} / ${currentWord.word.length} letters`
                  : '⌨️ Start typing…'}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
