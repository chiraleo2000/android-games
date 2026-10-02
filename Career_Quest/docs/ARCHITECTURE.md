# Career Quest — Technical Architecture Document

**Version**: 1.0.0  
**Date**: February 26, 2026  
**Platform**: Android / iOS / Web (PWA)

---

## Table of Contents

1. [System Overview](#1-system-overview)
2. [Technology Stack](#2-technology-stack)
3. [Application Architecture](#3-application-architecture)
4. [Component Architecture](#4-component-architecture)
5. [State Management](#5-state-management)
6. [Data Layer](#6-data-layer)
7. [Native Bridge (Capacitor)](#7-native-bridge-capacitor)
8. [Build & Bundling](#8-build--bundling)
9. [Security Considerations](#9-security-considerations)
10. [Performance Optimization](#10-performance-optimization)
11. [Testing Strategy](#11-testing-strategy)
12. [Infrastructure & CI/CD](#12-infrastructure--cicd)

---

## 1. System Overview

### 1.1 High-Level Architecture
```
┌─────────────────────────────────────────────────────┐
│                    Mobile Device                     │
│                                                      │
│  ┌─────────────────────────────────────────────────┐ │
│  │             Native Shell (Capacitor)            │ │
│  │  ┌──────────────┐  ┌────────────────────────┐  │ │
│  │  │  WebView      │  │  Native Plugins        │  │ │
│  │  │  (React App)  │  │  - SplashScreen        │  │ │
│  │  │               │  │  - StatusBar           │  │ │
│  │  │  ┌──────────┐ │  │  - IAP (future)        │  │ │
│  │  │  │ UI Layer │ │  │  - Push Notif (future) │  │ │
│  │  │  ├──────────┤ │  └────────────────────────┘  │ │
│  │  │  │ Logic    │ │                               │ │
│  │  │  ├──────────┤ │                               │ │
│  │  │  │ Data     │ │                               │ │
│  │  │  └──────────┘ │                               │ │
│  │  └──────────────┘                                │ │
│  └─────────────────────────────────────────────────┘ │
│                                                      │
│  ┌─────────────────┐  ┌──────────────────────────┐  │
│  │  localStorage    │  │  Secure Storage (future) │  │
│  │  - Game state    │  │  - License receipts      │  │
│  │  - Preferences   │  │  - User credentials      │  │
│  │  - Result history│  └──────────────────────────┘  │
│  └─────────────────┘                                 │
└─────────────────────────────────────────────────────┘
```

### 1.2 Design Principles
- **Offline-First**: All content bundled in the app; no network required for gameplay
- **State Machine Pattern**: Predictable, testable UI flow via explicit state transitions
- **Component Isolation**: Each screen is a self-contained component with props-only interface
- **Progressive Enhancement**: Web-first development → native shell wrapper via Capacitor

---

## 2. Technology Stack

### 2.1 Core Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| react | 19.1+ | UI component framework |
| react-dom | 19.1+ | DOM rendering |
| framer-motion | 12.0+ | Animations & transitions |
| lucide-react | 500+ | SVG icon library |
| react-confetti | 6.1+ | Celebration effects |
| prop-types | 15.8+ | Runtime type checking |

### 2.2 Build Tooling
| Tool | Version | Purpose |
|------|---------|---------|
| vite | 7.0+ | Build tool & dev server |
| @vitejs/plugin-react | 4.5+ | React Fast Refresh |
| terser | 5.46+ | Production minification |
| eslint | 9.0+ | Code linting |

### 2.3 Native Platform
| Package | Version | Purpose |
|---------|---------|---------|
| @capacitor/core | 6.0+ | Native bridge runtime |
| @capacitor/cli | 6.0+ | Build & sync CLI |
| @capacitor/android | 6.0+ | Android platform |
| @capacitor/ios | 6.0+ | iOS platform |

### 2.4 Future Dependencies (Recommended)
| Package | Purpose |
|---------|---------|
| @capacitor/preferences | Secure key-value storage |
| @capacitor/app | App lifecycle events |
| @capacitor-community/in-app-purchases | IAP integration |
| @sentry/react | Error monitoring |
| capacitor-secure-storage-plugin | Encrypted storage |

---

## 3. Application Architecture

### 3.1 Module Structure
```
src/
├── App.jsx              ─── Orchestrator (state machine + routing)
├── main.jsx             ─── Entry point (React DOM mount)
├── index.css            ─── Global styles
│
├── components/          ─── Presentation Layer
│   ├── HomeScreen.jsx       Screen: Landing page
│   ├── CareerSelection.jsx  Screen: Category/career picker
│   ├── GameScreen.jsx       Screen: Active gameplay
│   ├── ResultScreen.jsx     Screen: Score display
│   ├── PersonalityTest.jsx  Screen: MBTI questions
│   ├── PersonalityResult.jsx Screen: MBTI results
│   ├── NavBar.jsx           Widget: Navigation bar
│   ├── SettingsModal.jsx    Modal: App settings
│   └── ResumeModal.jsx      Modal: Session resume
│
├── data/                ─── Content Layer
│   └── gameContent.js       Career definitions + question loader
│
├── questions/           ─── Question Content
│   ├── index.js             Barrel exports (all questions)
│   ├── personality/         MBTI test questions
│   ├── tech/                Technology career Q&A
│   ├── healthcare/          Healthcare career Q&A
│   ├── business/            Business career Q&A
│   ├── creative/            Creative career Q&A
│   ├── education/           Education career Q&A
│   ├── finance/             Finance career Q&A
│   ├── science/             Science career Q&A
│   ├── service/             Service career Q&A
│   └── premium/             Premium career Q&A
│
└── utils/               ─── Business Logic Layer
    ├── premiumAccess.js     Premium status management
    ├── licenseManager.js    License validation & receipts
    └── dataManager.js       Result history & statistics
```

### 3.2 Dependency Graph
```
main.jsx
  └── App.jsx
        ├── components/* (all screen components)
        ├── data/gameContent.js
        │     └── questions/index.js
        │           └── questions/**/*.js (5,120 questions)
        └── utils/
              ├── premiumAccess.js
              ├── licenseManager.js
              └── dataManager.js
```

### 3.3 Data Flow Pattern
```
[User Action] → [App.jsx Handler] → [State Update] → [React Re-render]
                       │
                       ├── Update localStorage (auto-save)
                       ├── Update dataManager (result tracking)
                       └── Update licenseManager (premium check)
```

---

## 4. Component Architecture

### 4.1 Component Hierarchy
```
<App>                         ← State machine + all handlers
  <NavBar />                  ← Navigation + quick settings
  <AnimatePresence>           ← Page transition wrapper
    <HomeScreen />            ← OR
    <CareerSelection />       ← OR
    <GameScreen />            ← OR
    <ResultScreen />          ← OR
    <PersonalityTest />       ← OR
    <PersonalityResult />     ← (one active at a time)
  </AnimatePresence>
  <SettingsModal />           ← Overlay (conditional)
  <ResumeModal />             ← Overlay (conditional)
</App>
```

### 4.2 Component Communication
All components are **controlled** — state lives in `App.jsx` and flows down as props. User actions trigger callback props that update App state.

| Component | Key Props In | Callbacks Out |
|-----------|-------------|---------------|
| HomeScreen | language, savedState | onStartCareer, onStartPersonality, onResume |
| CareerSelection | mode, groups/careers, language | onSelect |
| GameScreen | career, scenarioIndex, stats, feedback | onAnswer, onContinue, onHome |
| ResultScreen | career, stats, language | onHome, onTryAgain |
| PersonalityTest | questionIndex, question, language | onAnswer, onBack |
| PersonalityResult | mbtiType, dimensions, traits | onHome |
| NavBar | title, theme, audioEnabled | onBack, onHome, onToggleTheme, onToggleAudio, onSettings |
| SettingsModal | theme, language, isPremium | onClose, onThemeChange, onLanguageChange, onTogglePremium |
| ResumeModal | savedState | onResume, onDiscard |

### 4.3 Animation Strategy
- **Page Transitions**: `AnimatePresence` with fade + slide variants
- **Stagger Effects**: Children animate sequentially (0.05s delay each)
- **Micro-interactions**: `whileHover` scale(1.05), `whileTap` scale(0.95)
- **Progress Bars**: Spring-based width transitions
- **Confetti**: `react-confetti` on result screens (high scores)

---

## 5. State Management

### 5.1 State Categories
```javascript
// UI State
gameState: GAME_STATES.HOME        // Current screen
showSettings: false                 // Settings modal visibility
showResume: false                   // Resume modal visibility

// User Preferences
theme: 'dark'                      // 'dark' | 'light'
audioEnabled: false                 // Background music
language: 'en'                     // 'en' | 'th' | 'zh'
isPremium: false                   // Premium status

// Game Session State
selectedGroup: null                // Current career group
currentCareer: null                // Active career object
questions: []                      // Shuffled question subset (40)
scenarioIndex: 0                   // Current question index
stats: DEFAULT_STATS               // 4-dimension scores
feedback: null                     // Current answer feedback

// Personality Test State
ptQuestionIndex: 0                 // Current PT question
ptDimensions: { EI: 0, NS: 0, FT: 0, PJ: 0 }
```

### 5.2 State Transitions
```
HOME
  ├── onStartCareer() → SELECT_GROUP
  ├── onStartPersonality() → PERSONALITY_TEST
  └── onResume() → (restored state)

SELECT_GROUP
  ├── onSelect(group) → SELECT_JOB
  └── onBack() → HOME

SELECT_JOB
  ├── onSelect(career) → PLAYING (if accessible)
  └── onBack() → SELECT_GROUP

PLAYING
  ├── onAnswer(option) → (show feedback, update stats)
  ├── onContinue() → (next question or RESULT)
  └── onHome() → HOME

RESULT
  ├── onHome() → HOME
  └── onTryAgain() → PLAYING (re-shuffle)

PERSONALITY_TEST
  ├── onAnswer(value) → (next question or PT_RESULT)
  └── onBack() → (previous question or HOME)

PT_RESULT
  └── onHome() → HOME
```

### 5.3 Persistence Strategy
```javascript
// Auto-save on state change
useEffect(() => {
  if (gameState === GAME_STATES.PLAYING) {
    localStorage.setItem('careerquest_save', JSON.stringify({
      gameState, career, scenarioIndex, stats, questions, timestamp: Date.now()
    }));
  }
}, [gameState, scenarioIndex, stats]);

// Auto-save on visibility change
useEffect(() => {
  const handler = () => {
    if (document.visibilityState === 'hidden') {
      // Save current state
    }
  };
  document.addEventListener('visibilitychange', handler);
  return () => document.removeEventListener('visibilitychange', handler);
}, []);
```

---

## 6. Data Layer

### 6.1 Question Loading
Questions are statically imported via barrel file (`questions/index.js`) and mapped to career IDs at runtime via `loadCareerQuestions()` in `gameContent.js`.

```javascript
// questions/index.js
export { default as softwareEngineerQuestions } from './tech/softwareEngineer.js';
export { default as doctorQuestions } from './healthcare/doctor.js';
// ... 62 more career exports

// data/gameContent.js
export const loadCareerQuestions = (questionsFile) => {
  const questionMap = { /* careerId → imported questions */ };
  return questionMap[questionsFile] || [];
};
```

### 6.2 Data Manager (`dataManager.js`)
Centralized data persistence layer:
- **saveResult()**: Persist career/personality result
- **getResultHistory()**: Retrieve all results
- **getStatistics()**: Compute aggregate stats
- **exportData()**: Generate JSON export
- **clearAllData()**: GDPR-compliant data deletion
- **importData()**: Restore from backup

### 6.3 License Manager (`licenseManager.js`)
License validation and receipt management:
- **validateLicense()**: Check current license status
- **activateLicense()**: Process purchase/activation
- **verifyReceipt()**: Validate purchase receipt
- **getLicenseInfo()**: Get license metadata
- **checkTrialStatus()**: Trial period management

---

## 7. Native Bridge (Capacitor)

### 7.1 Configuration
```json
{
  "appId": "com.careerquest.app",
  "appName": "Career Quest",
  "webDir": "dist",
  "server": {
    "androidScheme": "https"
  },
  "plugins": {
    "SplashScreen": {
      "launchShowDuration": 2000,
      "backgroundColor": "#0a0a1f"
    },
    "StatusBar": {
      "style": "DARK",
      "backgroundColor": "#0a0a1f"
    }
  }
}
```

### 7.2 Native Plugin Usage
| Plugin | Current | Future |
|--------|---------|--------|
| SplashScreen | ✅ Configured | - |
| StatusBar | ✅ Configured | - |
| App | ❌ | App state/URL handling |
| Preferences | ❌ | Secure key-value store |
| In-App Purchases | ❌ | Premium billing |
| Push Notifications | ❌ | Engagement campaigns |
| Share | ❌ | Result sharing |

### 7.3 Web-to-Native Communication
```javascript
// Example: Future IAP integration
import { Purchases } from '@capacitor-community/in-app-purchases';

const buyPremium = async () => {
  const { products } = await Purchases.getProducts({
    productIds: ['career_quest_premium']
  });
  const result = await Purchases.purchaseProduct({
    productId: 'career_quest_premium'
  });
  if (result.success) {
    licenseManager.activateLicense(result.receipt);
  }
};
```

---

## 8. Build & Bundling

### 8.1 Vite Configuration
```javascript
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: { drop_console: true, drop_debugger: true }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          icons: ['lucide-react']
        }
      }
    }
  }
});
```

### 8.2 Chunk Strategy
| Chunk | Contents | Estimated Size |
|-------|----------|---------------|
| vendor | React, ReactDOM | ~45 KB gzipped |
| animations | Framer Motion | ~35 KB gzipped |
| icons | Lucide React | ~20 KB gzipped |
| main | App + components + utils | ~25 KB gzipped |
| questions | 5,120 question objects | ~200 KB gzipped |

### 8.3 Build Pipeline
```
npm run build
  └── vite build
        ├── TypeCheck (if TS)
        ├── ESLint
        ├── Rollup Bundle
        │     ├── Tree Shaking
        │     ├── Code Splitting (manual chunks)
        │     └── Terser Minification
        └── Output → dist/
              ├── index.html
              ├── assets/*.js
              ├── assets/*.css
              └── manifest.json
```

---

## 9. Security Considerations

### 9.1 Current Security Model
| Concern | Current Approach | Risk Level |
|---------|-----------------|------------|
| Premium Bypass | localStorage flag | ⚠️ High (client-side) |
| Data Integrity | No validation | ⚠️ Medium |
| XSS | React auto-escaping | ✅ Low |
| CSRF | No server calls | ✅ N/A |

### 9.2 Production Security Recommendations
1. **Premium Validation**: Move to server-side receipt verification
2. **Code Obfuscation**: Enable Terser mangling + ProGuard (Android)
3. **Certificate Pinning**: If adding server API
4. **Secure Storage**: Use `capacitor-secure-storage-plugin` for license data
5. **Integrity Checks**: Verify question data hasn't been tampered
6. **Root/Jailbreak Detection**: Prevent on compromised devices

### 9.3 Data Privacy
- **No network calls**: All data stays on device
- **No analytics SDK**: No tracking by default
- **No personal data**: No user accounts or PII
- **Clear data option**: Full data deletion in settings

---

## 10. Performance Optimization

### 10.1 Current Optimizations
- **Code Splitting**: Vendor, animation, icon chunks loaded separately
- **Tree Shaking**: Unused exports removed by Rollup
- **Console Stripping**: `drop_console` in production
- **Lazy Imports**: Question files statically imported (potential for dynamic import)
- **Memoization**: `useMemo` for MBTI calculations
- **Callback Stability**: `useCallback` for event handlers

### 10.2 Recommended Optimizations
1. **Dynamic Question Imports**: Load question files on-demand per career
2. **React.lazy**: Code-split screen components
3. **Image Optimization**: WebP icons already used; add lazy loading
4. **Service Worker**: Cache assets for true offline PWA support
5. **Virtualization**: If result history grows large, use `react-window`

---

## 11. Testing Strategy

### 11.1 Recommended Test Pyramid
| Level | Tool | Coverage Target |
|-------|------|-----------------|
| Unit | Vitest | Utils, scoring algorithm, data manager |
| Component | React Testing Library | All 9 components |
| Integration | Playwright | Full user flows |
| E2E (Mobile) | Appium / Detox | Native build verification |

### 11.2 Critical Test Paths
1. Career simulation: select → play 40 questions → view result
2. Personality test: complete 100 questions → view MBTI type
3. Resume: start game → close app → reopen → resume
4. Premium: toggle premium → access premium career → toggle off → verify lock
5. Settings: change theme/language/audio → verify persistence

---

## 12. Infrastructure & CI/CD

### 12.1 Recommended CI/CD Pipeline
```
Push to main
  ├── Lint (ESLint)
  ├── Test (Vitest + Playwright)
  ├── Build (Vite production)
  ├── Android Build (Gradle AAB)
  ├── iOS Build (Xcode Archive)
  └── Deploy
        ├── Google Play (Internal Track)
        └── TestFlight (iOS)
```

### 12.2 GitHub Actions Example
```yaml
name: Build & Deploy
on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run lint
      - run: npm run build
      - uses: actions/upload-artifact@v4
        with:
          name: dist
          path: dist/

  android:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-java@v4
        with:
          distribution: temurin
          java-version: 17
      - run: npm ci && npm run build
      - run: npx cap sync android
      - run: cd android && ./gradlew bundleRelease
      - uses: actions/upload-artifact@v4
        with:
          name: android-aab
          path: android/app/build/outputs/bundle/release/*.aab
```

---

*Document maintained by Career Quest Team — Last updated February 26, 2026*
