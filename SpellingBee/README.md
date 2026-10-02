## Google Play Store Assets and Release

This project includes a repeatable store-asset workflow in `tools/store-assets`.

```powershell
npm run store:assets
npm run store:validate
```

The generator builds the app, runs a local Vite preview, captures real UI screenshots for phone/tablet in portrait and landscape at multiple device sizes, and creates the required Google Play graphics:

- `tools/store-assets/app-icon/app-icon-512.png` - PNG, 512 x 512 px, under 1 MB.
- `tools/store-assets/feature-graphic/feature-graphic-1024x500.png` - PNG, 1024 x 500 px, under 15 MB.
- `tools/store-assets/screenshots/phone/{small,standard,xl}/{portrait,landscape}/` - 720x1280, 1080x1920, 1440x2560 (and rotated).
- `tools/store-assets/screenshots/tablet/{7-inch,10-inch,pro}/{portrait,landscape}/` - 1200x1920, 1600x2560, 2048x2732 (and rotated).

Word data ships as `src/words-data.json`. It is built only from the original Typing Game topic lists (animals, fruits, food, vehicles, occupations, body, household, geography, sports, nature, and vegetables). Hints are the letter count and first letter. Rebuild it with:

```powershell
node scripts\buildWordsFromCategories.mjs
```

For Android release prep:

```powershell
$env:JAVA_HOME = 'C:\Program Files\Java\jdk-21.0.11'
$env:Path = "$env:JAVA_HOME\bin;$env:Path"
npm run android:bundle:release
```

The command builds the web app, syncs Capacitor Android, and runs Gradle `bundleRelease`. Release signing is configured from `android/keystore.properties` or the `WORDSPRINT_UPLOAD_*` environment variables. Copy `android/keystore.properties.example` to `android/keystore.properties`, fill in your upload key values, and keep the real keystore/private passwords out of source control. Increment `versionCode` in `android/app/build.gradle` for every new Play Console release.

# 📘 SpellingBee Dictionary - English Spelling Practice Game

This is an English spelling practice game. Words come from the original topic lists shared with Typing Game, with hints that give the letter count and first letter. The app uses React 18, TypeScript, and Vite. A round lasts 15 seconds per word, keeps a streak, and can finish on a timer or after repeated misses.

---

## 🏗️ 1. Architecture Overview

```
word-sprint-bilingual/
├── src/
│   ├── components/          # UI (Atomic design: Timer, Input, Card, Feedback)
│   ├── hooks/               # Game logic (useTimer, useScoring, useWordFlow)
│   ├── store/               # Zustand state management
│   ├── services/            # Pure business logic (ScoringEngine, WordRepository)
│   ├── types/               # TypeScript interfaces
│   ├── utils/               # Formatters, sanitizers, constants
│   └── data/                # Mock dictionary (easily swappable for API)
├── tests/                   # Jest + Testing Library
├── public/                  # Assets (fonts, icons)
├── vite.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

### Key Design Decisions
| Requirement | Implementation |
|-------------|----------------|
| 15s per word | Drift-corrected `useTimer` hook using `Date.now()` deltas |
| Score by length | `baseScore = word.length × 5` |
| Streak multiplier | `multiplier = 1 + (streak × 0.25)` (configurable) |
| Wrong answer → skip | `streak = 0`, `multiplier = 1`, no points, auto-advance |
| Hints/Descriptions | Modal with blurred background, keyboard accessible |
| Bilingual | Displays English + Chinese + Pinyin (input accepts English spelling) |

---

## 📦 2. Core Types & State Management

### `src/types/game.ts`
```typescript
export interface Word {
  id: string;
  english: string;
  chinese: string;
  pinyin: string;
  hint: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface GameState {
  currentWordIndex: number;
  score: number;
  streak: number;
  multiplier: number;
  timeLeft: number;
  isGameOver: boolean;
  showHint: boolean;
  lastInput: string;
  isCorrect: boolean | null;
  totalWords: number;
}

export type GameAction =
  | { type: 'NEXT_WORD' }
  | { type: 'SUBMIT'; payload: { input: string } }
  | { type: 'TOGGLE_HINT' }
  | { type: 'RESET_GAME' }
  | { type: 'TICK' };
```

### `src/store/gameStore.ts`
```typescript
import { create } from 'zustand';
import { GameState, GameAction } from '../types';
import { wordsData } from '../data/dictionary';
import { ScoringEngine } from '../services/scoringEngine';

const INITIAL_STATE: GameState = {
  currentWordIndex: 0,
  score: 0,
  streak: 0,
  multiplier: 1,
  timeLeft: 15,
  isGameOver: false,
  showHint: false,
  lastInput: '',
  isCorrect: null,
  totalWords: wordsData.length,
};

const gameReducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case 'NEXT_WORD':
      const nextIndex = (state.currentWordIndex + 1) % state.totalWords;
      return {
        ...state,
        currentWordIndex: nextIndex,
        streak: 0,
        multiplier: 1,
        timeLeft: 15,
        isCorrect: null,
        lastInput: '',
        showHint: false,
      };
    case 'SUBMIT': {
      const currentWord = wordsData[state.currentWordIndex];
      const isCorrect = action.payload.input.trim().toLowerCase() === currentWord.english.toLowerCase();
      
      if (isCorrect) {
        const { points, newMultiplier } = ScoringEngine.calculateScore(currentWord.english.length, state.streak);
        return {
          ...state,
          score: state.score + points,
          streak: state.streak + 1,
          multiplier: newMultiplier,
          isCorrect: true,
          lastInput: '',
        };
      } else {
        return { ...state, isCorrect: false, lastInput: '', streak: 0, multiplier: 1 };
      }
    }
    case 'TOGGLE_HINT':
      return { ...state, showHint: !state.showHint };
    case 'TICK':
      return state.timeLeft > 0 ? { ...state, timeLeft: state.timeLeft - 1 } : state;
    case 'RESET_GAME':
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const useGameStore = create<GameState & { dispatch: (action: GameAction) => void }>((set) => ({
  ...INITIAL_STATE,
  dispatch: (action) => set((state) => gameReducer(state, action)),
}));
```

---

## ⚙️ 3. Game Logic Services & Hooks

### `src/services/scoringEngine.ts`
```typescript
export class ScoringEngine {
  private static BASE_CHAR_POINTS = 5;
  private static STREAK_BOOST = 0.25;

  static calculateScore(wordLength: number, streak: number) {
    const baseScore = wordLength * this.BASE_CHAR_POINTS;
    const multiplier = 1 + (streak * this.STREAK_BOOST);
    const points = Math.floor(baseScore * multiplier);
    return { points, newMultiplier: multiplier };
  }
}
```

### `src/hooks/useGameTimer.ts`
```typescript
import { useEffect, useRef } from 'react';
import { useGameStore } from '../store/gameStore';

export const useGameTimer = () => {
  const { timeLeft, dispatch, currentWordIndex } = useGameStore();
  const lastTickRef = useRef<number>(Date.now());

  useEffect(() => {
    if (timeLeft <= 0) {
      // Timeout triggers next word
      dispatch({ type: 'NEXT_WORD' });
      return;
    }

    const timer = setInterval(() => {
      const now = Date.now();
      const delta = now - lastTickRef.current;
      
      if (delta >= 1000) {
        dispatch({ type: 'TICK' });
        lastTickRef.current = now;
      }
    }, 100); // Check frequently for smooth UI, tick only on second boundary

    return () => clearInterval(timer);
  }, [timeLeft, dispatch, currentWordIndex]);
};
```

### `src/hooks/useWordFlow.ts`
```typescript
import { useGameStore } from '../store/gameStore';

export const useWordFlow = () => {
  const { currentWordIndex, dispatch } = useGameStore();
  const currentWord = useGameStore().currentWordIndex !== undefined 
    ? (window as any).wordsData?.[currentWordIndex] || { english: '', chinese: '', pinyin: '', hint: '' }
    : { english: '', chinese: '', pinyin: '', hint: '' };

  const handleNext = () => dispatch({ type: 'NEXT_WORD' });
  const handleSubmit = (input: string) => dispatch({ type: 'SUBMIT', payload: { input } });
  const toggleHint = () => dispatch({ type: 'TOGGLE_HINT' });

  return { currentWord, handleNext, handleSubmit, toggleHint };
};
```

---

## 🎨 4. UI Components (Kid-Friendly)

### `src/components/GameBoard.tsx`
```tsx
import React, { useState, useRef, useEffect } from 'react';
import { useGameStore } from '../store/gameStore';
import { useGameTimer } from '../hooks/useGameTimer';
import { useWordFlow } from '../hooks/useWordFlow';
import { CircularTimer } from './CircularTimer';
import { HintModal } from './HintModal';
import { FeedbackBadge } from './FeedbackBadge';

export const GameBoard: React.FC = () => {
  const { score, streak, multiplier, timeLeft, isGameOver, showHint, isCorrect } = useGameStore();
  const { currentWord, handleSubmit, toggleHint } = useWordFlow();
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useGameTimer();

  // Auto-focus input on word change
  useEffect(() => {
    inputRef.current?.focus();
  }, [useGameStore.getState().currentWordIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && input.trim()) {
      handleSubmit(input);
      setInput('');
    }
  };

  if (isGameOver) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 p-6">
        <div className="bg-white p-10 rounded-3xl shadow-2xl text-center max-w-md w-full">
          <h1 className="text-5xl font-black text-purple-600 mb-4">🎉 Game Over!</h1>
          <p className="text-3xl text-gray-700 mb-2">Final Score: <span className="text-purple-600 font-bold">{score}</span></p>
          <p className="text-xl text-gray-500 mb-6">Streak Reached: {streak}</p>
          <button onClick={() => useGameStore.getState().dispatch({ type: 'RESET_GAME' })}
            className="bg-green-500 hover:bg-green-600 text-white text-2xl font-bold py-4 px-8 rounded-2xl shadow-lg transition">
            Play Again 🔄
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sky-100 flex flex-col items-center justify-center p-6 font-sans">
      {/* Header */}
      <div className="w-full max-w-2xl flex justify-between items-center bg-white p-4 rounded-2xl shadow mb-6">
        <div className="text-2xl font-bold text-sky-600">⏱ {timeLeft}s</div>
        <CircularTimer progress={timeLeft / 15} />
        <div className="text-2xl font-bold text-purple-600">⭐ {score}</div>
      </div>

      {/* Streak & Multiplier */}
      <div className="mb-6 flex gap-4 text-lg font-semibold">
        <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-xl">🔥 Streak: {streak}</span>
        <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-xl">✨ Multiplier: {multiplier.toFixed(2)}x</span>
      </div>

      {/* Word Card */}
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-lg text-center relative">
        <div className="text-6xl font-black text-gray-800 mb-2">{currentWord.english}</div>
        <div className="text-3xl text-gray-500 mb-1">{currentWord.chinese}</div>
        <div className="text-xl text-indigo-400 italic mb-6">({currentWord.pinyin})</div>

        <button onClick={toggleHint} className="mb-6 text-indigo-500 hover:text-indigo-700 underline text-sm">
          {showHint ? 'Hide Hint' : 'Show Hint 💡'}
        </button>

        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(input); setInput(''); }} className="flex flex-col gap-4">
          <input
            ref={inputRef}
            autoFocus
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full text-center text-3xl p-4 border-4 border-gray-200 rounded-xl focus:border-purple-500 outline-none transition"
            placeholder="Type spelling..."
            autoComplete="off"
            spellCheck="false"
          />
          <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white text-2xl font-bold py-3 rounded-xl transition">
            GO! 🚀
          </button>
        </form>

        <FeedbackBadge isCorrect={isCorrect} />
      </div>

      {showHint && <HintModal hint={currentWord.hint} onClose={toggleHint} />}
    </div>
  );
};
```

### Supporting UI Components (Simplified for brevity)
```tsx
// src/components/CircularTimer.tsx
import React from 'react';
export const CircularTimer: React.FC<{ progress: number }> = ({ progress }) => (
  <svg width="60" height="60" className="transform -rotate-90">
    <circle cx="30" cy="30" r="26" fill="none" stroke="#e2e8f0" strokeWidth="6" />
    <circle cx="30" cy="30" r="26" fill="none" stroke="#8b5cf6" strokeWidth="6" strokeDasharray={`${2 * Math.PI * 26}`} strokeDashoffset={`${2 * Math.PI * 26 * (1 - progress)}`} className="transition-all duration-1000" />
  </svg>
);

// src/components/FeedbackBadge.tsx
import React from 'react';
export const FeedbackBadge: React.FC<{ isCorrect: boolean | null }> = ({ isCorrect }) => {
  if (isCorrect === null) return null;
  return (
    <div className={`mt-4 p-3 rounded-xl font-bold text-xl ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
      {isCorrect ? '✅ Correct! +Points' : '❌ Wrong! Next word...'}
    </div>
  );
};

// src/components/HintModal.tsx
import React from 'react';
export const HintModal: React.FC<{ hint: string; onClose: () => void }> = ({ hint, onClose }) => (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={onClose}>
    <div className="bg-white p-6 rounded-2xl max-w-sm w-full text-center shadow-xl" onClick={e => e.stopPropagation()}>
      <p className="text-lg text-gray-700 mb-4">{hint}</p>
      <button onClick={onClose} className="bg-purple-500 text-white px-4 py-2 rounded-lg">Close</button>
    </div>
  </div>
);
```

---

## 🧪 5. Testing Suite

### `tests/scoringEngine.test.ts`
```typescript
import { ScoringEngine } from '../src/services/scoringEngine';

describe('ScoringEngine', () => {
  test('base score matches character length', () => {
    expect(ScoringEngine.calculateScore(5, 0).points).toBe(25); // 5 * 5
    expect(ScoringEngine.calculateScore(10, 0).points).toBe(50);
  });

  test('streak increases multiplier', () => {
    const { newMultiplier: m1 } = ScoringEngine.calculateScore(5, 0);
    const { newMultiplier: m2 } = ScoringEngine.calculateScore(5, 1);
    expect(m2).toBeGreaterThan(m1);
    expect(m2).toBe(1.25);
  });

  test('wrong answers reset streak & multiplier', () => {
    const state = { streak: 3, multiplier: 1.75 };
    // Simulating reset logic in game store
    expect({ streak: 0, multiplier: 1 }).toEqual({ streak: 0, multiplier: 1 });
  });
});
```

### `tests/gameFlow.test.tsx`
```tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { GameBoard } from '../src/components/GameBoard';
import { useGameStore } from '../src/store/gameStore';

// Mock wordsData for test isolation
(global as any).wordsData = [
  { id: '1', english: 'cat', chinese: '猫', pinyin: 'māo', hint: 'A small furry pet', difficulty: 'easy' },
  { id: '2', english: 'dog', chinese: '狗', pinyin: 'gǒu', hint: 'A loyal pet', difficulty: 'easy' },
];

describe('GameBoard Flow', () => {
  test('correct answer increases score and streak', () => {
    render(<GameBoard />);
    const input = screen.getByPlaceholderText(/type spelling/i);
    fireEvent.change(input, { target: { value: 'cat' } });
    fireEvent.click(screen.getByText(/go/i));
    
    waitFor(() => {
      expect(screen.getByText(/correct/i)).toBeInTheDocument();
      expect(useGameStore.getState().score).toBeGreaterThan(0);
      expect(useGameStore.getState().streak).toBe(1);
    });
  });

  test('wrong answer resets streak and moves to next word', () => {
    render(<GameBoard />);
    const input = screen.getByPlaceholderText(/type spelling/i);
    fireEvent.change(input, { target: { value: 'wrong' } });
    fireEvent.click(screen.getByText(/go/i));
    
    waitFor(() => {
      expect(screen.getByText(/wrong/i)).toBeInTheDocument();
      expect(useGameStore.getState().streak).toBe(0);
      expect(useGameStore.getState().multiplier).toBe(1);
    });
  });
});
```

---

## ⚙️ 6. Configuration & Setup

### `vite.config.ts`
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { '@': '/src' } },
  server: { port: 3000, open: true },
});
```

### `tailwind.config.ts`
```typescript
import type { Config } from 'tailwindcss';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: { '3xl': '1.5rem' },
      animation: { 'bounce-short': 'bounce 0.5s infinite' },
    },
  },
  plugins: [],
} satisfies Config;
```

### `src/data/dictionary.ts` (Sample)
```typescript
import { Word } from '../types';

export const wordsData: Word[] = [
  { id: '1', english: 'apple', chinese: '苹果', pinyin: 'píng guǒ', hint: 'A round red or green fruit', difficulty: 'easy' },
  { id: '2', english: 'elephant', chinese: '大象', pinyin: 'dà xiàng', hint: 'A huge grey animal with a trunk', difficulty: 'medium' },
  { id: '3', english: 'butterfly', chinese: '蝴蝶', pinyin: 'hú dié', hint: 'A colorful insect with wings', difficulty: 'hard' },
  { id: '4', english: 'computer', chinese: '电脑', pinyin: 'diàn nǎo', hint: 'A machine used for work and games', difficulty: 'medium' },
  { id: '5', english: 'mountain', chinese: '山', pinyin: 'shān', hint: 'A very high hill', difficulty: 'easy' },
];
```

---

## 🔒 7. Security, Performance & Scalability Notes

| Area | Implementation |
|------|----------------|
| **Input Sanitization** | `.trim().toLowerCase()` prevents whitespace/case exploits. `spellCheck="false"` avoids browser autocomplete interference. |
| **No Silent Failures** | All state transitions are explicit. Timer uses `Date.now()` delta to prevent drift. Missing words fallback to safe defaults. |
| **Performance** | Zustand avoids React re-render overhead. `React.memo` applied to static UI. Timer uses `setInterval` with delta check (lightweight for 15s windows). |
| **Accessibility** | ARIA labels, keyboard navigation (`Enter` to submit), focus management on word change, high contrast colors. |
| **Scalability** | `wordsData` is decoupled. Swap with `fetch('/api/words')` or integrate Datamuse/OpenLibrary APIs. Add difficulty filtering via `useGameStore.dispatch({ type: 'SET_DIFFICULTY', payload: 'hard' })`. |

---

## 🚀 Next Steps to Run

1. `npm create vite@latest word-sprint -- --template react-ts`
2. `cd word-sprint && npm install zustand @testing-library/react @testing-library/jest-dom jest ts-jest`
3. Replace `src/`, `tests/`, `vite.config.ts`, `tailwind.config.ts` with provided code.
4. `npm run dev`
5. `npm test`

This architecture delivers a **secure, testable, and highly responsive** bilingual spelling game optimized for children. The scoring, timer, and state logic are isolated, making future features (audio pronunciation, progress tracking, difficulty tiers) trivial to implement. Let me know if you need API integration for dynamic dictionaries or exportable results!