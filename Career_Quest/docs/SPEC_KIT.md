# Career Quest — Product Specification Kit

**Version**: 1.0.0  
**Date**: February 26, 2026  
**Status**: Production Ready  
**Platform**: Android / iOS / Web (PWA)

---

## Table of Contents

1. [Product Summary](#1-product-summary)
2. [User Personas](#2-user-personas)
3. [Feature Specifications](#3-feature-specifications)
4. [User Flows & Workflows](#4-user-flows--workflows)
5. [Content Specification](#5-content-specification)
6. [Scoring & Algorithms](#6-scoring--algorithms)
7. [Data Management](#7-data-management)
8. [Monetization & Licensing](#8-monetization--licensing)
9. [Localization](#9-localization)
10. [Accessibility & Compliance](#10-accessibility--compliance)
11. [Performance Requirements](#11-performance-requirements)
12. [Release Criteria](#12-release-criteria)

---

## 1. Product Summary

### 1.1 Vision Statement
Career Quest empowers users to explore career paths through immersive, gamified simulations while gaining insight into their personality type via a validated MBTI assessment — bridging the gap between self-awareness and career discovery.

### 1.2 Product Description
A cross-platform mobile application combining:
- **Interactive career simulation** with scenario-based decision making
- **MBTI personality assessment** with 100-question Likert scale test
- **Freemium model** with 40 free careers and 24 premium careers

### 1.3 Key Metrics (KPIs)
| Metric | Target |
|--------|--------|
| Session Duration | > 8 minutes |
| Career Completion Rate | > 60% |
| Personality Test Completion | > 45% |
| Premium Conversion Rate | > 5% |
| Day-7 Retention | > 25% |
| App Store Rating | > 4.2 stars |
| Crash-Free Rate | > 99.5% |

### 1.4 Platform Requirements
| Platform | Minimum Version |
|----------|----------------|
| Android | API 24 (Android 7.0) |
| iOS | iOS 14.0 |
| Web | Chrome 90+, Safari 15+, Firefox 90+ |

---

## 2. User Personas

### 2.1 Primary: Student Explorer
- **Age**: 16-22
- **Goal**: Discover career interests before college or major selection
- **Behavior**: Plays 2-3 career simulations per session, shares results with friends
- **Pain Point**: Overwhelmed by career options with no engaging discovery tool

### 2.2 Secondary: Career Changer
- **Age**: 25-40
- **Goal**: Validate interest in a new career field
- **Behavior**: Completes personality test first, then explores recommended careers
- **Pain Point**: No risk-free way to "experience" a new career before committing

### 2.3 Tertiary: Educator / Counselor
- **Age**: 30-55
- **Goal**: Use as a teaching tool for career guidance workshops
- **Behavior**: Has students complete personality test + 3-5 career simulations
- **Pain Point**: Existing tools are dry surveys with no engagement

---

## 3. Feature Specifications

### 3.1 Career Simulation Engine

#### 3.1.1 Career Categories
| Category | Free Careers | Premium Careers | Total |
|----------|-------------|----------------|-------|
| Technology | 5 | 3 | 8 |
| Healthcare | 5 | 3 | 8 |
| Business | 5 | 2 | 7 |
| Creative | 5 | 3 | 8 |
| Education | 5 | 3 | 8 |
| Finance | 5 | 1 | 6 |
| Science | 4 | 4 | 8 |
| Service | 6 | 2 | 8 |
| Trades | 0 | 3 | 3 |
| **Total** | **40** | **24** | **64** |

#### 3.1.2 Question System
- **Questions per career**: 80 unique scenarios
- **Questions per session**: 40 (randomly selected via Fisher-Yates shuffle)
- **Question format**: Scenario text + 4 multiple-choice options
- **Each option**: Mapped to stat changes across 4 dimensions
- **Total question pool**: 5,120 scenarios

#### 3.1.3 Stat Dimensions
| Dimension | Description | Icon |
|-----------|-------------|------|
| Competence | Technical skill and knowledge mastery | 🎯 Target |
| Ethics | Moral integrity and professional standards | ❤️ Heart |
| Leadership | Team management and decision authority | ⚡ Zap |
| Innovation | Creative problem solving and adaptability | ⭐ Star |

#### 3.1.4 Performance Ratings
| Rating | Score Range | Description |
|--------|-----------|-------------|
| Expert | 85-100 | Outstanding career performance |
| Advanced | 70-84 | Strong professional capability |
| Intermediate | 50-69 | Developing career skills |
| Novice | 0-49 | Beginning career journey |

### 3.2 MBTI Personality Assessment

#### 3.2.1 Test Structure
- **Total questions**: 100
- **Scale**: 5-point Likert (Strongly Disagree → Strongly Agree)
- **Dimensions measured**: 4 (8 poles)
- **Result types**: 16 personality types

#### 3.2.2 Dimensions
| Dimension | Pole A | Pole B |
|-----------|--------|--------|
| Energy | Extraversion (E) | Introversion (I) |
| Information | Intuition (N) | Sensing (S) |
| Decisions | Feeling (F) | Thinking (T) |
| Lifestyle | Perceiving (P) | Judging (J) |

#### 3.2.3 Scoring Method
- Each question maps to one dimension
- Likert response updates dimension score (1-5 scale)
- Final type determined by majority score per dimension
- Percentage breakdown shown for each dimension

### 3.3 Resume & Save System

#### 3.3.1 Auto-Save Triggers
| Trigger | Event | Scope |
|---------|-------|-------|
| State Change | Any game state transition | Full state |
| Visibility | `visibilitychange` → hidden | Full state |
| Page Unload | `beforeunload` event | Full state |
| Page Hide | `pagehide` event | Full state |

#### 3.3.2 Saved Data
```json
{
  "gameState": "PLAYING",
  "career": { "id": "software-engineer", "name": "Software Engineer" },
  "scenarioIndex": 12,
  "stats": { "competence": 55, "ethics": 60, "leadership": 48, "innovation": 52 },
  "questions": ["...shuffled question IDs..."],
  "timestamp": "2026-02-26T10:30:00Z"
}
```

#### 3.3.3 Resume Flow
1. App launch → Check localStorage for saved state
2. If found → Show `ResumeModal` with session preview
3. User chooses: **Continue** (restore state) or **Start Fresh** (discard)
4. Session restored at exact question index with all stats intact

### 3.4 Settings & Preferences

| Setting | Options | Storage |
|---------|---------|---------|
| Theme | Light / Dark | localStorage |
| Music | On / Off + Volume (0-100) | localStorage |
| Language | EN / TH / ZH | localStorage |
| Premium | Activated / Free | localStorage (dev) / IAP receipt (prod) |

### 3.5 Premium & Licensing System

#### 3.5.1 Free Tier
- Access to 40 career simulations (unlimited replays)
- Full 100-question MBTI personality test
- Result history and statistics
- All theme/language/audio settings

#### 3.5.2 Premium Tier
- All free features +
- 24 additional premium career simulations
- Premium careers marked with 👑 crown badge
- One-time purchase (no subscription)

#### 3.5.3 License Validation
- **Development**: localStorage-based toggle
- **Production**: Google Play Billing API / Apple StoreKit 2
- **Receipt validation**: Server-side verification recommended
- **Offline grace**: 7-day cached validation

### 3.6 Data & Analytics Manager

#### 3.6.1 Result Tracking
- Career simulation results (career, scores, rating, date)
- Personality test results (type, dimensions, date)
- Session metadata (duration, completion status)

#### 3.6.2 Statistics
- Total games played / completed
- Average scores per dimension
- Career completion map
- Current/best win streak
- Performance trends over time

#### 3.6.3 Data Export
- JSON export of all result history
- Shareable result summaries

---

## 4. User Flows & Workflows

### 4.1 Main Application Flow
```
┌──────────────────────────────────────────────┐
│                  APP LAUNCH                   │
│                                               │
│  ┌─────────┐   Has saved    ┌──────────────┐ │
│  │  Home   │───session?────►│ Resume Modal │ │
│  │ Screen  │    Yes         │  Continue /  │ │
│  │         │◄───No──────────│  Start Fresh │ │
│  └────┬────┘                └──────────────┘ │
│       │                                       │
│  ┌────┴──────────────────┐                    │
│  │                       │                    │
│  ▼                       ▼                    │
│ Career Path        Personality Test           │
│  │                       │                    │
│  ▼                       ▼                    │
│ Select Group       100 Questions              │
│  │                 (Likert Scale)              │
│  ▼                       │                    │
│ Select Career            ▼                    │
│  │                 MBTI Result                 │
│  ▼                 (16 Types)                  │
│ 40 Scenarios                                  │
│  │                                            │
│  ▼                                            │
│ Result Screen                                 │
│ (4-Dimension Score)                           │
│                                               │
└──────────────────────────────────────────────┘
```

### 4.2 Career Simulation Workflow
1. **Select Category** → 9 groups with emoji, career count, description
2. **Select Career** → Individual careers with lock/crown indicators
3. **Premium Check** → If premium career + free user → show lock alert
4. **Load Questions** → Dynamic import from question modules
5. **Shuffle & Slice** → Fisher-Yates shuffle → take first 40
6. **Play Scenarios** → Present scenario + 4 options → user selects
7. **Apply Stats** → Calculate changes with bonuses/diminishing returns
8. **Show Feedback** → Brief description of choice impact
9. **Progress** → Auto-advance or user tap → next scenario
10. **Complete** → Calculate averages → show Result Screen

### 4.3 Premium Purchase Workflow
```
Settings → Premium Section → "Upgrade" Button
    │
    ▼
[Development Mode]              [Production Mode]
    │                               │
    ▼                               ▼
Toggle localStorage          Launch IAP Flow
    │                           │         │
    ▼                           ▼         ▼
Immediate Access           Google Play  Apple StoreKit
                           Billing API  2 Purchase
                               │         │
                               ▼         ▼
                           Receipt Validation
                               │
                               ▼
                           Grant Access
```

### 4.4 Data Results Workflow
```
Game Completion → Save Result → Update Statistics
                      │
                      ▼
              Result History (localStorage)
                      │
                ┌─────┴─────┐
                ▼           ▼
           View History  Export JSON
```

---

## 5. Content Specification

### 5.1 Career Question Format
```javascript
{
  scenario: "You discover a critical security vulnerability in the production system...",
  options: [
    {
      text: "Immediately alert the security team and begin patching",
      stats: { competence: 5, ethics: 10, leadership: 3, innovation: 2 }
    },
    {
      text: "Document the vulnerability and schedule a fix for next sprint",
      stats: { competence: 3, ethics: -2, leadership: 5, innovation: 0 }
    },
    {
      text: "Write an automated scanner to find similar vulnerabilities",
      stats: { competence: 8, ethics: 2, leadership: 0, innovation: 10 }
    },
    {
      text: "Quietly fix it yourself without telling anyone",
      stats: { competence: 6, ethics: -8, leadership: -5, innovation: 3 }
    }
  ]
}
```

### 5.2 Personality Question Format
```javascript
{
  question: "I prefer working in groups rather than alone",
  dimension: "EI",  // E/I dimension
  direction: 1      // Positive = favors E
}
```

### 5.3 Content Volume
| Content Type | Count |
|-------------|-------|
| Career Categories | 9 |
| Total Careers | 64 |
| Questions per Career | 80 |
| Total Career Questions | 5,120 |
| Personality Questions | 100 |
| MBTI Type Descriptions | 16 |
| Supported Languages | 3 |

---

## 6. Scoring & Algorithms

### 6.1 Stat Update Algorithm
```
newStat = clamp(currentStat + change + recoveryBonus - diminishingPenalty, 0, 100)

where:
  recoveryBonus = +2 if (currentStat < 30 AND change > 0)
  diminishingPenalty = reduction if (currentStat > 90 AND change > 0)
  clamp(value, min, max) = max(min, min(max, value))
```

### 6.2 Final Score Calculation
```
averageScore = (competence + ethics + leadership + innovation) / 4
```

### 6.3 MBTI Type Determination
```
For each dimension (EI, NS, FT, PJ):
  if dimensionScore >= 50% → assign first letter (E, N, F, P)
  else → assign second letter (I, S, T, J)
  
Final type = concatenation of 4 letters (e.g., "ENFP")
```

---

## 7. Data Management

### 7.1 Storage Architecture
| Data | Storage | Persistence |
|------|---------|-------------|
| Game State (active) | localStorage | Session |
| User Preferences | localStorage | Permanent |
| Result History | localStorage | Permanent |
| Premium License | localStorage (dev) / Secure storage (prod) | Permanent |
| Statistics Cache | localStorage | Derived |

### 7.2 Data Schema — Result History
```json
{
  "results": [
    {
      "id": "uuid-v4",
      "type": "career",
      "careerId": "software-engineer",
      "careerName": "Software Engineer",
      "category": "tech",
      "scores": {
        "competence": 78,
        "ethics": 65,
        "leadership": 72,
        "innovation": 85
      },
      "averageScore": 75,
      "rating": "Advanced",
      "questionsAnswered": 40,
      "totalQuestions": 40,
      "completed": true,
      "duration": 480000,
      "timestamp": "2026-02-26T10:30:00Z"
    }
  ],
  "personalityResults": [
    {
      "id": "uuid-v4",
      "type": "ENFP",
      "dimensions": {
        "EI": { "E": 65, "I": 35 },
        "NS": { "N": 72, "S": 28 },
        "FT": { "F": 58, "T": 42 },
        "PJ": { "P": 61, "J": 39 }
      },
      "timestamp": "2026-02-26T11:00:00Z"
    }
  ],
  "statistics": {
    "totalGamesPlayed": 15,
    "totalGamesCompleted": 12,
    "averageScore": 68.5,
    "bestScore": 92,
    "currentStreak": 3,
    "bestStreak": 7,
    "careersCompleted": ["software-engineer", "doctor", "teacher"],
    "favoriteCategory": "tech"
  }
}
```

### 7.3 Data Retention Policy
- Result history: Unlimited (user device)
- Active game state: Until session complete or discarded
- Export: User-initiated JSON download

---

## 8. Monetization & Licensing

### 8.1 Revenue Model
| Model | Details |
|-------|---------|
| Type | Freemium (one-time purchase) |
| Free Content | 40 careers + personality test |
| Premium Price | $2.99 - $4.99 (region-adjusted) |
| Premium Content | 24 additional careers |
| Subscriptions | None (one-time unlock) |
| Ads | None |

### 8.2 License States
```
┌──────────┐     Purchase     ┌──────────┐
│   FREE   │────────────────►│ PREMIUM  │
│          │                  │          │
│ 40 jobs  │     Refund      │ 64 jobs  │
│          │◄────────────────│          │
└──────────┘                  └──────────┘
       │
       │  Trial Activation
       ▼
┌──────────┐     Expiry
│  TRIAL   │────────────────► FREE
│ 7 days   │
│ 3 premium│
└──────────┘
```

### 8.3 Production Integration Points
- **Android**: Google Play Billing Library v7+
- **iOS**: StoreKit 2 (Swift) via Capacitor plugin
- **Validation**: Server-side receipt verification (recommended)
- **Restoration**: Purchase restore on reinstall/device change

---

## 9. Localization

### 9.1 Supported Languages
| Language | Code | Coverage |
|----------|------|----------|
| English | EN | 100% (primary) |
| Thai | TH | 100% |
| Chinese (Simplified) | ZH | 100% |

### 9.2 Localized Elements
- All UI labels and buttons
- Career names and descriptions
- Scenario questions and options
- Result descriptions and ratings
- Settings labels
- Error messages

---

## 10. Accessibility & Compliance

### 10.1 Accessibility Standards
- Minimum touch target: 44×44 dp
- Color contrast ratio: ≥ 4.5:1 (WCAG AA)
- Screen reader compatibility (semantic HTML)
- Keyboard navigation support (web)
- Animation respects `prefers-reduced-motion`

### 10.2 Privacy & Compliance
- **GDPR**: No personal data collected; all data local to device
- **COPPA**: Age-appropriate content; no data collection from minors
- **Privacy Policy**: Required for both stores
- **Data Deletion**: Clear All Data option in Settings

### 10.3 Store Compliance
- **Google Play**: Content rating (IARC), target API level 34+, 64-bit support
- **Apple**: App Review Guidelines, App Privacy nutrition labels, minimum iOS 14

---

## 11. Performance Requirements

| Metric | Target | Measurement |
|--------|--------|-------------|
| Cold Start | < 2 seconds | Time to interactive |
| Screen Transition | < 300ms | Animation duration |
| Bundle Size | < 2 MB (gzipped) | Production build |
| Memory Usage | < 100 MB | Heap snapshot |
| Battery Impact | Minimal | No background processes |
| Offline Support | Full gameplay | After initial load |
| Frame Rate | 60 fps | Animation smoothness |

---

## 12. Release Criteria

### 12.1 Must-Have for v1.0
- [x] 64 career simulations functional
- [x] 100-question MBTI test complete
- [x] Resume/auto-save working
- [x] 3 languages (EN/TH/ZH)
- [x] Dark/Light theme
- [x] Premium career gating
- [x] Result history tracking
- [x] License management system
- [ ] Store assets (screenshots, descriptions)
- [ ] Privacy policy published
- [ ] Signing certificates configured

### 12.2 Post-Launch Roadmap
| Version | Features |
|---------|----------|
| v1.1 | Career recommendation based on MBTI results |
| v1.2 | Social sharing of results |
| v1.3 | Leaderboard system |
| v2.0 | AI-powered career coaching chatbot |
| v2.1 | Cloud sync across devices |

---

*Document maintained by Career Quest Team — Last updated February 26, 2026*
