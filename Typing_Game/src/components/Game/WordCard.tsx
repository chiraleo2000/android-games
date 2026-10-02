import React, { useEffect, useRef, useState } from 'react';
import type { Word } from '../../types';
import { categoryColors } from '../../data/words';

type WordFeedback = 'correct' | 'wrong' | 'revealed' | 'none';

interface WordCardProps {
  word: Word;
  feedback: WordFeedback;
  currentMistakes: number;
  maxMistakes: number;
  isAnswerRevealed: boolean;
  onSubmit: (value: string) => void;
}

const getCardAnimationClass = (feedback: WordFeedback): string => {
  if (feedback === 'correct') return 'animate-bounce-in border-emerald-400 shadow-emerald-200';
  if (feedback === 'wrong') return 'animate-shake border-red-400 shadow-red-200';
  if (feedback === 'revealed') return 'animate-bounce-in border-amber-400 shadow-amber-200';
  return 'border-white shadow-teal-100 dark:border-slate-700 dark:shadow-slate-950';
};

const getInputClass = (feedback: WordFeedback): string => {
  if (feedback === 'correct') return 'border-emerald-400 bg-emerald-50 ring-4 ring-emerald-200';
  if (feedback === 'wrong') return 'border-red-400 bg-red-50 ring-4 ring-red-200';
  if (feedback === 'revealed') return 'border-amber-400 bg-amber-50 ring-4 ring-amber-200';

  return 'border-teal-200 bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-100 dark:border-slate-600 dark:bg-slate-950 dark:text-white dark:focus:border-teal-300 dark:focus:ring-teal-900';
};

const getOverlayClass = (feedback: WordFeedback): string => {
  if (feedback === 'correct') return 'bg-emerald-100';
  if (feedback === 'revealed') return 'bg-amber-100';
  return 'bg-red-100';
};

const getOverlayIcon = (feedback: WordFeedback): string => {
  if (feedback === 'correct') return '✅';
  if (feedback === 'revealed') return '💡';
  return '❌';
};

export const WordCard: React.FC<WordCardProps> = ({
  word,
  feedback,
  currentMistakes,
  maxMistakes,
  isAnswerRevealed,
  onSubmit,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [imgError, setImgError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const colors = categoryColors[word.category] ?? categoryColors.nature;
  const cardAnim = getCardAnimationClass(feedback);
  const inputBorderColor = getInputClass(feedback);
  const triesRemaining = Math.max(maxMistakes - currentMistakes, 0);
  const attemptNumbers = Array.from({ length: maxMistakes }, (_, index) => index + 1);

  useEffect(() => {
    setImgError(false);
    setInputValue('');
    inputRef.current?.focus();
  }, [word.id]);

  const submitAnswer = () => {
    if (inputValue.trim() === '' || isAnswerRevealed) return;

    onSubmit(inputValue.trim());
    setInputValue('');
    inputRef.current?.focus();
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    submitAnswer();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key !== 'Enter') return;

    event.preventDefault();
    submitAnswer();
  };

  return (
    <div
      className={`bg-white rounded-4xl shadow-2xl border-4 p-5 sm:p-6 flex flex-col items-center gap-5 w-full max-w-lg transition-all duration-300 dark:bg-slate-900 ${cardAnim}`}
    >
      <div className={`flex items-center gap-2 px-4 py-1 rounded-full border-2 ${colors.bg} ${colors.border}`}>
        <span className="text-lg">{word.emoji}</span>
        <span className={`font-nunito font-bold text-sm uppercase tracking-wide ${colors.text}`}>
          {word.category}
        </span>
      </div>

      <div className="relative w-full">
        {imgError ? (
          <div className="w-full h-52 rounded-3xl border-4 border-gray-100 bg-gradient-to-br from-teal-50 to-emerald-100 flex items-center justify-center dark:border-slate-700 dark:from-slate-800 dark:to-teal-950">
            <span className="text-8xl">{word.emoji}</span>
          </div>
        ) : (
          <img
            src={word.imageUrl}
            alt={word.term}
            className="w-full h-52 object-cover rounded-3xl border-4 border-gray-100 shadow-md dark:border-slate-700"
            onError={() => setImgError(true)}
          />
        )}

        {feedback !== 'none' && (
          <div
            className={`absolute inset-0 rounded-3xl flex items-center justify-center text-8xl bg-opacity-60 ${getOverlayClass(feedback)}`}
          >
            <span className="animate-star-pop">{getOverlayIcon(feedback)}</span>
          </div>
        )}
      </div>

      <div className="text-center px-2">
        <p className="font-nunito text-gray-600 text-lg leading-relaxed italic dark:text-slate-200">
          "{word.meaning}"
        </p>
      </div>

      <div className="flex w-full items-center justify-between gap-3 rounded-2xl border-2 border-slate-100 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800">
        <span className="font-nunito text-sm font-extrabold uppercase tracking-wide text-slate-500 dark:text-slate-300">
          Try {Math.min(currentMistakes + 1, maxMistakes)} of {maxMistakes}
        </span>
        <div className="flex gap-1" aria-label={`${triesRemaining} tries remaining`}>
          {attemptNumbers.map((attemptNumber) => (
            <span
              key={`attempt-${attemptNumber}`}
              className={`h-3 w-3 rounded-full transition-colors ${
                attemptNumber <= currentMistakes ? 'bg-red-400' : 'bg-emerald-300 dark:bg-emerald-500'
              }`}
            />
          ))}
        </div>
      </div>

      {isAnswerRevealed && (
        <div className="w-full rounded-3xl border-4 border-amber-200 bg-amber-50 p-4 text-center shadow-inner animate-bounce-in dark:border-amber-600 dark:bg-amber-950/70">
          <p className="font-nunito text-sm font-black uppercase tracking-wide text-amber-600 dark:text-amber-200">
            The word was
          </p>
          <p className="font-baloo text-4xl font-black text-amber-800 dark:text-amber-100">
            {word.term}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
        <input
          ref={inputRef}
          id="word-input"
          type="text"
          autoFocus
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="none"
          spellCheck="false"
          disabled={isAnswerRevealed}
          className={`w-full text-center font-baloo font-bold text-3xl p-4 rounded-2xl border-4 outline-none transition-all duration-200 ${inputBorderColor}`}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type the word..."
          aria-label="Type the answer"
        />
        <button
          id="submit-btn"
          type="submit"
          disabled={isAnswerRevealed}
          className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 active:scale-95 disabled:cursor-not-allowed disabled:from-amber-400 disabled:to-amber-500 text-white font-baloo font-black text-2xl py-3 rounded-2xl shadow-lg transition-all duration-200 hover:shadow-xl"
        >
          {isAnswerRevealed ? 'Next word...' : 'GO! 🚀'}
        </button>
      </form>
    </div>
  );
};
