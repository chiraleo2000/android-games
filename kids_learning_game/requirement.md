# Word Blitz! — Kids Typing Game

A simplified, kid-friendly typing game built with Next.js, Tailwind CSS, Zustand, and Framer Motion.

---

## 1. Simplified Gameplay

### Core Loop
1. **See** a picture + meaning clue
2. **Type** the matching word
3. **Earn** points — faster = more points!

### Scoring
| Scenario | Points |
|---|---|
| First word (no streak) | 10 base points |
| Correct within 10s of last success | `previousScore × 1.5` (combo!) |
| Correct after 10s+ gap | 10 base points again |

### Game Flow
1. **Landing Page** → Pick a language (English 🇬🇧 / Español 🇪🇸)
2. **Game Page** → 5-minute timer, type words from the picture clues
3. **Game Over** → See final score + stars ⭐⭐⭐

### What's Simplified
- **No hints button** — kids learn by typing
- **One screen** — image, clue, input (no separate score/timer panels)
- **Big inputs** — font ≥ 16px (prevents iOS zoom)
- **Case-insensitive** — "Apple" == "apple"
- **Auto-trim** — whitespace ignored

---

## 2. Technical Architecture

| Layer | Technology |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| State | Zustand |
| Data | In-memory JSON (swappable to DB later) |
| Testing | Vitest + React Testing Library |

---

## 3. Data Schema

### Types (`src/types/game.ts`)

```typescript
type Language = 'en' | 'es';

type GameStatus = 'IDLE' | 'PLAYING' | 'FINISHED';

interface WordCard {
  id: string;        // unique key like "en-1"
  word: string;      // lowercase answer ("apple")
  displayWord: string; // capitalized display ("Apple")
  meaning: string;   // clue for the kid ("A crunchy red fruit.")
  imageUrl: string;  // image URL for the word
}
```

### Game State (`src/store/useGameStore.ts`)

```typescript
interface GameState {
  score: number;           // total accumulated score
  timeLeft: number;        // seconds remaining (starts at 300)
  currentWordIndex: number; // index into the words array
  wordsCompleted: number;  // how many words typed correctly
  lastSuccessTime: number | null; // timestamp of last correct answer
  status: GameStatus;      // IDLE | PLAYING | FINISHED
  selectedLanguage: Language;
  words: WordCard[];       // current language word list
}
```

---

## 4. Folder Structure

```
src/
├── app/                      # Next.js App Router
│   ├── layout.tsx            # Root layout (font, viewport, globals)
│   ├── page.tsx              # Landing page (language picker)
│   ├── game/
│   │   └── page.tsx          # Game screen + game-over screen
│   └── globals.css           # Tailwind + custom theme
├── components/
│   └── Game/
│       ├── GameCard.tsx      # Combined: image + clue + input (simplified!)
│       └── GameHeader.tsx    # Score, combo badge, timer bar
├── store/
│   └── useGameStore.ts       # Zustand store (score, timer, words)
├── hooks/
│   └── useTimer.ts           # 1-second interval timer
├── lib/
│   ├── dictionary.ts         # Word data (en + es)
│   └── scoring.ts            # Combo scoring logic
├── types/
│   └── game.ts               # TypeScript interfaces
└── __tests__/
    ├── scoring.test.ts       # Unit tests for scoring
    └── useGameStore.test.ts  # Unit tests for store actions
public/
├── icons/                    # Simple SVG game icons
│   ├── star.svg
│   ├── trophy.svg
│   └── clock.svg
└── images/                   # Fallback placeholder images
    └── default-word.svg
```

---

## 5. Key Logic

### Scoring (`src/lib/scoring.ts`)

```typescript
// lib/scoring.ts
export const BASE_POINTS = 10;
export const COMBO_WINDOW_MS = 10000;

/**
 * Returns the POINTS to ADD on this correct answer.
 * If within combo window: adds floor(currentScore * 0.5)
 * Otherwise: adds BASE_POINTS
 */
export function calculatePoints(currentScore: number, lastSuccessTime: number | null): number {
  if (lastSuccessTime !== null && Date.now() - lastSuccessTime <= COMBO_WINDOW_MS) {
    return Math.floor(currentScore * 0.5);
  }
  return BASE_POINTS;
}
```

### Timer (`src/hooks/useTimer.ts`)

- 1-second interval while `status === 'PLAYING'`
- Decrements `timeLeft` by 1 each tick
- Sets `status = 'FINISHED'` when `timeLeft` hits 0

### Input Validation (`GameCard.tsx`)

- Case-insensitive comparison (`typed.toLowerCase() === word.toLowerCase()`)
- Auto-trims whitespace
- Shows green flash + "Awesome!" on correct
- Shows red shake on wrong (when full word typed)
- Letter count hint while typing

---

## 6. Development Notes

### Adding a New Language
1. Add a `Language` type union member in `src/types/game.ts`
2. Add a new key to `dictionary` in `src/lib/dictionary.ts`
3. Add the language to `LANGUAGES` array in `src/app/page.tsx`

### Adding More Words
Just append new entries to the appropriate language array in `src/lib/dictionary.ts`.

### Risk Mitigation
| Risk | Solution |
|---|---|
| Input lag on mobile | `font-size: 16px` on inputs prevents iOS zoom; `touch-action: manipulation` on buttons |
| Case sensitivity frustration | Case-insensitive matching + auto-trim |
| Kids overwhelmed by complex UI | Single-screen layout, big elements, minimal text |
| Combo score confusion | "1.5× COMBO!" badge shown during active streak |

---

## 7. Running the Project

```bash
# Install dependencies
npm install

# Development server (port 3200)
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Lint
npm run lint
```

---

## 8. Future Enhancements (Out of Scope)

- [ ] High score leaderboard (localStorage)
- [ ] More languages (fr, de, ja)
- [ ] Difficulty levels (easy/medium/hard)
- [ ] Sound effects for correct/wrong answers
- [ ] Database-backed dictionary (PostgreSQL/MongoDB)
- [ ] Achievement badges system
