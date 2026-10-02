# 🎮 Career Quest — Mobile Career Simulation & Personality Assessment

<p align="center">
  <img src="public/icons/icon-512x512.webp" alt="Career Quest Logo" width="128" />
</p>

<p align="center">
  <strong>A gamified career exploration app with MBTI personality assessment</strong><br/>
  Built with React 19 · Capacitor 8 · Vite 7 · Framer Motion 12
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#architecture">Architecture</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#deployment">Deployment</a> •
  <a href="#license">License</a>
</p>

---

## Overview

**Career Quest** is a cross-platform mobile application (Android & iOS) that combines interactive career simulation gameplay with a scientifically-grounded MBTI personality assessment. Users explore **64 career paths** across **9 industry categories** through scenario-based decision making, developing skills in Competence, Ethics, Leadership, and Innovation. The app also features a 100-question personality test based on Myers-Briggs Type Indicator (MBTI) methodology.

### Target Audience
- Students exploring career options (ages 16-25)
- Career changers seeking guidance
- Anyone curious about personality-career alignment

### Business Model
- **Free Tier**: 40 careers + full personality test + unlimited replays
- **Premium Tier**: 24 additional premium careers with advanced scenarios (one-time purchase)

---

## Features

### 🎯 Career Simulation Game
- **64 unique career paths** organized in 9 categories (Tech, Healthcare, Business, Creative, Education, Finance, Science, Service, Trades)
- **5,120 scenario questions** total — 80 per career, 40 randomly selected per session
- **4-dimension scoring system**: Competence, Ethics, Leadership, Innovation
- Dynamic stat changes with recovery bonuses and diminishing returns
- Performance ratings: Expert (85+), Advanced (70-84), Intermediate (50-69), Novice (<50)

### 🧠 MBTI Personality Assessment
- **100-question Likert scale test** (5-point: Strongly Disagree → Strongly Agree)
- **16 personality types** with detailed descriptions and emoji identifiers
- **4 cognitive dimensions**: Extraversion/Introversion, Intuition/Sensing, Feeling/Thinking, Perceiving/Judging
- Percentage-based dimension analysis with visual progress bars

### 💾 Resume & Auto-Save System
- Multi-layered persistence: state changes, `visibilitychange` API, `beforeunload`, `pagehide`
- Session restoration with progress preview and choice to continue or start fresh
- Dedicated `ResumeModal` component with session details

### 🌐 Multi-Language Support
- English (EN), Thai (TH), Chinese (ZH)
- Full translation coverage across all UI components

### 🎨 User Experience
- Dark/Light theme toggle with persistent preference
- Smooth Framer Motion animations (page transitions, stagger effects, hover/tap feedback)
- Background music with volume control
- Responsive design optimized for mobile viewports
- PWA-ready with offline manifest and maskable icons

### 💎 Premium & Licensing
- **License management** with validation, receipt tracking, and expiry support
- **Trial system** with configurable duration and career limit
- Client-side access control with premium career gating
- Production-ready hooks for Google Play Billing API / Apple StoreKit integration

### 📊 Data & Analytics
- **Result history** tracking across all gameplay sessions
- **Statistics dashboard**: total games, average scores, career completions, streaks
- Export results to JSON for external analysis
- Dimension trends and performance tracking over time

---

## Architecture

### Tech Stack
| Layer | Technology | Version |
|-------|-----------|---------|
| UI Framework | React | 19.1+ |
| Build Tool | Vite | 7.0+ |
| Animations | Framer Motion | 12.0+ |
| Icons | Lucide React | 500+ |
| Native Bridge | Capacitor | 6.0+ |
| Language | JavaScript (ES Modules) | ESNext |

### Application State Machine
```
HOME ─────────────────────────── PERSONALITY_TEST
  │                                      │
  ▼                                      ▼
SELECT_GROUP ──► SELECT_JOB ──► PLAYING ──► RESULT
                                         PT_RESULT
```

### Project Structure
```
Career_Quest/
├── src/
│   ├── App.jsx                 # Main orchestrator (state machine, handlers)
│   ├── main.jsx                # React entry point
│   ├── index.css               # Global styles
│   ├── components/             # UI components
│   │   ├── HomeScreen.jsx      # Landing page with feature cards
│   │   ├── CareerSelection.jsx # Career group & job selection
│   │   ├── GameScreen.jsx      # Active gameplay (scenarios + options)
│   │   ├── ResultScreen.jsx    # Score display with stat analysis
│   │   ├── PersonalityTest.jsx # MBTI question interface
│   │   ├── PersonalityResult.jsx # MBTI result display
│   │   ├── NavBar.jsx          # Navigation + settings controls
│   │   ├── SettingsModal.jsx   # Theme, audio, language, premium
│   │   └── ResumeModal.jsx     # Session restore prompt
│   ├── data/
│   │   └── gameContent.js      # Career definitions & question loader
│   ├── questions/              # 5,120+ scenario questions
│   │   ├── index.js            # Barrel exports
│   │   ├── personality/        # MBTI test questions
│   │   ├── tech/               # Technology careers
│   │   ├── healthcare/         # Healthcare careers
│   │   ├── business/           # Business careers
│   │   ├── creative/           # Creative careers
│   │   ├── education/          # Education careers
│   │   ├── finance/            # Finance careers
│   │   ├── science/            # Science careers
│   │   ├── service/            # Service careers
│   │   └── premium/            # Premium career questions
│   └── utils/
│       ├── premiumAccess.js    # License & premium management
│       ├── licenseManager.js   # License validation & receipts
│       └── dataManager.js      # Result history & analytics
├── public/
│   ├── manifest.json           # PWA manifest
│   └── icons/                  # App icons (48-512px, webp)
├── docs/                       # Documentation (spec kit)
│   ├── SPEC_KIT.md             # Full product specification kit
│   ├── ARCHITECTURE.md         # Technical architecture
│   ├── DEPLOYMENT.md           # Store deployment & compliance guide
│   └── design_assets/          # Design resources
├── android/                    # Capacitor Android project
├── ios/                        # Capacitor iOS project
├── capacitor.config.json       # Capacitor configuration
├── vite.config.js              # Vite build configuration
├── package.json                # Dependencies & scripts
└── .gitignore                  # Git ignore rules
```

### Scoring System
Each career question presents 4 options affecting the stats differently:
- **Balanced changes**: No stat moves more than ±15 per question
- **Recovery bonuses**: Extra +2 when a low stat (<30) receives a positive action
- **Diminishing returns**: Reduced gains near ceiling (>90)
- **Score clamping**: All stats bounded to 0-100

---

## Getting Started

### Prerequisites
- **Node.js** 18+ and npm 9+
- **Android Studio** (for Android builds)
- **Xcode 15+** (for iOS builds, macOS only)

### Installation
```bash
# Clone the repository
git clone https://github.com/chiraleo2000/android-game-career-quest.git
cd android-game-career-quest

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development
```bash
npm run dev          # Start Vite dev server (http://localhost:5173)
npm run build        # Production build to dist/
npm run preview      # Preview production build
npm run lint         # ESLint check
```

### Mobile Development
```bash
npm run build:android    # Build + sync + open Android Studio
npm run build:ios        # Build + sync + open Xcode
npm run cap:sync         # Sync web assets to native projects
```

---

## Deployment

### Google Play Store (Android)
1. Generate signing keystore
2. Configure signing in `android/app/build.gradle`
3. Build AAB: `cd android && ./gradlew bundleRelease`
4. Upload to [Google Play Console](https://play.google.com/console) ($25 one-time fee)

### Apple App Store (iOS)
1. Configure signing in Xcode with Apple Developer certificate
2. Archive build: Product → Archive in Xcode
3. Upload via App Store Connect ($99/year)

### Full Deployment Guide
See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for comprehensive store deployment instructions including asset requirements, review guidelines compliance, privacy policy, and launch checklist.

---

## Documentation

| Document | Description |
|----------|-------------|
| [docs/SPEC_KIT.md](docs/SPEC_KIT.md) | Full product specification kit |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | Technical architecture deep-dive |
| [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) | Store deployment & compliance guide |

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run build:android` | Build & open in Android Studio |
| `npm run build:ios` | Build & open in Xcode |
| `npm run cap:sync` | Sync web to native projects |

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit changes: `git commit -m 'feat: add my feature'`
4. Push to branch: `git push origin feature/my-feature`
5. Open a Pull Request

### Commit Convention
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Formatting
- `refactor:` Code restructuring
- `test:` Test additions
- `chore:` Maintenance

---

## License

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.

---

<p align="center">
  Made with ❤️ by the Career Quest Team<br/>
  <em>Last Updated: February 26, 2026</em>
</p>
