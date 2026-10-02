# LogicLabs - Game Design Document (GDD)

## 1. Game Overview

**LogicLabs** is a mobile-first educational puzzle game that develops problem-solving, logical thinking, and critical thinking skills through visual programming. Players program a robot to navigate procedurally generated mazes using intuitive block-based coding, learning computational thinking concepts while having fun.

### Educational Objectives

- **Problem-Solving**: Decompose complex challenges into manageable steps
- **Logical Reasoning**: Build cause-and-effect understanding through sequential programming
- **Critical Thinking**: Analyze, evaluate, and optimize solutions for efficiency
- **Pattern Recognition**: Identify repeating sequences and apply abstraction (loops)
- **Debugging Skills**: Learn from failures and iterate toward better solutions

### Target Audience

- **Primary**: Ages 8-14 (Gen Alpha learners)
- **Secondary**: Anyone interested in learning programming fundamentals
- **Accessibility**: No prior coding experience required

## 2. Core Gameplay Loop

### Complete User Journey

1. **App Launch**:
   - **Splash Screen** (2s): Animated logo with brand colors
   - **Loading Screen**: Progress bar (0-100%) with rotating educational tips
   - **First-Time Tutorial** (Optional): Interactive 3-screen walkthrough

2. **Main Menu**:
   - Player selects difficulty or continues from last level
   - Access to settings, achievements, and help

3. **Level Loading**:
   - Smooth transition animation
   - AI generates maze in background (< 500ms)
   - Brief preview of grid layout

4. **Planning Phase**:
   - Player analyzes the maze (Start → Goal)
   - Drags and connects code blocks to build solution
   - Can test partial solutions or reset workspace

5. **Execution Phase**:
   - Player taps "Play" button
   - Robot executes code step-by-step with animations
   - Real-time battery/score updates

6. **Outcome**:
   - **Success**: Animated celebration, star rating reveal, score breakdown
   - **Failure**: Friendly error message, hint system, "Try Again" option

7. **Post-Level**:
   - Options: Next Level, Retry for Better Score, Return to Menu
   - Progress auto-saved

### Cognitive Skills Development

Each phase targets specific learning outcomes:
- **Planning Phase**: Problem decomposition, algorithmic thinking
- **Execution Phase**: Debugging, cause-and-effect understanding
- **Outcome Phase**: Self-assessment, growth mindset reinforcement

### Mechanics

#### Standard Actions (Foundation Skills)

* **Move Forward**: Advances robot 1 tile in current direction
  * **Cost**: -1% Battery
  * **Learning Goal**: Sequential thinking, spatial awareness

* **Turn Left/Right**: Rotates robot 90 degrees without moving
  * **Cost**: 0% Battery (Free)
  * **Learning Goal**: Directional reasoning, planning ahead

#### Advanced Actions (Strategic Thinking)

* **Jump**: Leaps 2 tiles forward, bypassing one obstacle (wall/pit)
  * **Cost**: -3% Battery
  * **Learning Goal**: Risk-reward analysis, optimization strategies
  * **Critical Thinking**: When is jumping worth the extra cost?

#### Logic Controls (Computational Thinking)

* **Loop (Repeat X Times)**: Executes contained blocks multiple times
  * **Learning Goal**: Pattern recognition, code efficiency, abstraction
  * **Example**: `Loop 3 [Move]` = Move, Move, Move

* **If (Condition)**: Conditional execution based on sensor input
  * **Conditions**: `Wall Ahead`, `Path Ahead`, `Gem Ahead`
  * **Learning Goal**: Boolean logic, adaptive algorithms, decision-making
  * **Critical Thinking**: How to write code that works for multiple maze layouts?

## 3. Enhanced Scoring System (The "Battery" Metaphor)

* **Efficiency-based scoring**:
  * **Starting Score**: 100% Battery.
  * **Step Cost**: -1% per Move.
  * **Jump Cost**: -3% per Jump.
  * **Power-Up Bonus**: +10% Battery (capped at 100%).
  * **Trap Penalty**: Instant failure.
  * **Final Score**: `100 - (Moves * 1) - (Jumps * 3) + (PowerUps * 10)`.
  * **Stars**:
    * 3 Stars: > 90 points
    * 2 Stars: > 70 points
    * 1 Star: > 50 points

* **Time-Based Challenges**:
  * **Time Attack Mode**: Complete level within time limit (30-120 seconds based on difficulty)
  * **Time Bonus**: Extra stars for completing under par time
  * **Speed Run Leaderboards**: Track fastest completion times

* **Move Efficiency Challenges**:
  * **Minimal Moves Mode**: Complete with limited number of moves
  * **Optimal Path Bonus**: Bonus stars for finding shortest solution

## 4. Enhanced Procedural Generation

The game uses an advanced **Recursive Backtracker** algorithm with intelligent difficulty scaling:

* **Easy (5x5)**: 
  * Open layouts with multiple paths
  * 20% complexity (many loops)
  * No traps or time limits
  * Perfect for learning basics

* **Medium (7x7)**: 
  * Balanced maze structure
  * 40% complexity (some loops)
  * Introduces checkpoints and power-ups
  * Optional time challenges

* **Hard (9x9)**: 
  * Complex paths with strategic dead ends
  * 60% complexity (few loops)
  * Traps in dead ends
  * Time limits and move limits

* **Expert (11x11)**: 
  * Large-scale strategic planning required
  * 80% complexity (minimal loops)
  * Multiple checkpoints required
  * Strict time and move limits

* **Master (13x13)**: 
  * Maximum challenge
  * 95% complexity (near-perfect maze)
  * Advanced logic blocks required
  * Extreme time pressure

### Special Cells:
* **Checkpoints (C)**: Must collect to unlock goal
* **Power-Ups (P)**: Restore 10% battery
* **Traps (T)**: Instant failure if entered
* **Goal (⭐)**: Always placed at furthest point from start

## 5. Enhanced Mobile-First UI/UX Design

### Design Principles

- **Touch-Optimized**: Minimum 48x48px tap targets (WCAG AAA), generous spacing
- **One-Handed Friendly**: Critical controls within thumb reach zone
- **Visual Clarity**: High contrast (7:1 ratio), large fonts (16px minimum), clear iconography
- **Immediate Feedback**: Haptic vibrations, sound effects, visual confirmations, micro-animations
- **Forgiving Interactions**: Undo/redo, drag-to-cancel, confirmation dialogs, auto-save
- **Performance**: 60fps animations, optimized rendering, lazy loading
- **Accessibility**: Screen reader support, colorblind modes, adjustable text size

### Screen Flow & Wireframes

#### 1. Splash Screen (2 seconds)
```
┌─────────────────────┐
│                     │
│    [Animated Logo]  │
│     LogicLabs 🧩    │
│                     │
│   [Loading Dots]    │
└─────────────────────┘
```

#### 2. Loading Screen
```
┌─────────────────────┐
│  Generating Maze... │
│  ████████░░░░ 75%   │
│                     │
│  💡 Tip: Use loops  │
│  to repeat actions! │
└─────────────────────┘
```

#### 3. First-Time Tutorial (Swipeable Cards)
```
Card 1: "Meet Your Robot 🤖"
Card 2: "Drag Blocks to Code 🧩"
Card 3: "Reach the Star! ⭐"
[Skip] [Next →]
```

#### 4. Main Menu
```
┌─────────────────────┐
│   LogicLabs 🧩🤖    │
│                     │
│  [🟢 Easy]          │
│  [🟡 Medium]        │
│  [🔴 Hard]          │
│                     │
│  [⚙️ Settings]      │
│  [📊 Progress]      │
└─────────────────────┘
```

#### 5. Gameplay Screen (Portrait)
```
┌─────────────────────┐
│ Lv.5  🔋 87%  [⏸️]  │ ← Top Bar
├─────────────────────┤
│                     │
│   [Maze Grid 7x7]   │ ← Game Area
│    S → → # → ⭐     │
│                     │
├─────────────────────┤
│ [Move][Turn][Jump]  │ ← Block Palette
│ [Loop][If]          │   (Swipe Up)
├─────────────────────┤
│ Workspace:          │ ← Code Area
│ ┌─[Move]─[Turn]─┐   │
│ └─[Loop 3]──────┘   │
├─────────────────────┤
│  [▶️ Play] [🔄 Reset]│ ← Action Bar
└─────────────────────┘
```

#### 6. Execution Phase
```
┌─────────────────────┐
│ Lv.5  🔋 84% ↓      │
│                     │
│   [Maze with Robot] │
│    🤖 → → # → ⭐    │
│    (Animated)       │
│                     │
│ Running Step 3/8... │
│ [⏸️ Pause]          │
└─────────────────────┘
```

#### 7. Success Screen
```
┌─────────────────────┐
│   Level Complete!   │
│   ⭐ ⭐ ⭐          │
│                     │
│  Battery Left: 84%  │
│  Moves Used: 16     │
│  Efficiency: Great! │
│                     │
│  [➡️ Next Level]    │
│  [🔄 Retry]         │
│  [🏠 Menu]          │
└─────────────────────┘
```

#### 8. Failure Screen
```
┌─────────────────────┐
│   Oops! Try Again   │
│        🤖💥         │
│                     │
│  Robot hit a wall!  │
│                     │
│  💡 Hint: Check the │
│  direction before   │
│  moving forward.    │
│                     │
│  [🔄 Retry]         │
│  [💡 Show Solution] │
└─────────────────────┘
```

### Enhanced Gesture Controls

| Gesture | Action | Haptic Feedback |
|---------|--------|-----------------|
| **Tap** | Select block, press button | Light pulse |
| **Long Press** | Show block info/help | Medium pulse |
| **Drag** | Move blocks to workspace | Continuous light |
| **Swipe Up** | Open block palette | Light pulse |
| **Swipe Down** | Close palette | Light pulse |
| **Pinch** | Zoom grid (accessibility) | None |
| **Two-Finger Tap** | Undo last action | Medium pulse |
| **Three-Finger Swipe Left** | Quick reset | Strong pulse |
| **Double Tap** | Quick run program | Light pulse |
| **Shake Device** | Shuffle hint | Medium pulse |

### Accessibility Features

- **Colorblind Mode**: Pattern overlays on blocks
- **Text-to-Speech**: Read block names and instructions
- **Adjustable Speed**: Slow-motion execution for learning
- **High Contrast Mode**: Enhanced visibility
- **Haptic Feedback**: Optional vibration for actions

- **Font Scaling**: Adjustable text size (100% - 200%)
- **Reduced Motion**: Disable animations for motion sensitivity
- **Screen Reader**: Full ARIA labels and semantic HTML

## 6. Challenge Modes

### Normal Mode
- Standard gameplay with battery scoring
- No time limits or special restrictions
- Perfect for learning and experimentation

### Time Attack Mode
- Complete levels within strict time limits
- Time limits scale with difficulty:
  - Easy: 60 seconds
  - Medium: 90 seconds
  - Hard: 120 seconds
  - Expert: 150 seconds
  - Master: 180 seconds
- Bonus stars for beating par time
- Leaderboards for fastest completions

### Minimal Moves Mode
- Limited number of moves allowed
- Move limits based on optimal solution + 20%
- Encourages finding shortest path
- Teaches optimization strategies

### No Loops Mode
- Loop blocks disabled
- Forces sequential thinking
- Teaches when loops are truly beneficial
- Higher difficulty levels

### Blind Mode (Advanced)
- Maze revealed gradually as robot explores
- Requires adaptive programming
- Sensor blocks become essential
- Ultimate challenge for experts

## 7. Advanced Logic Blocks

### While Loop
- Executes blocks while condition is true
- Condition: "While Path Ahead"
- Teaches dynamic iteration
- Prevents infinite loops (100 iteration limit)

### Function Blocks (Coming Soon)
- Define reusable code sequences
- Call functions from main program
- Teaches code organization and reusability
- Advanced difficulty levels only

## 8. Progressive Difficulty Scaling

| Difficulty | Grid Size | Time Limit | Move Limit | Complexity | Special Features |
|------------|-----------|------------|------------|------------|------------------|
| **Easy** | 5x5 | None | None | 20% | Open paths, no traps |
| **Medium** | 7x7 | 90s | None | 40% | Checkpoints, power-ups |
| **Hard** | 9x9 | 120s | Optimal+30% | 60% | Traps, strict paths |
| **Expert** | 11x11 | 150s | Optimal+20% | 80% | Multiple checkpoints |
| **Master** | 13x13 | 180s | Optimal+10% | 95% | All features, extreme challenge |

## 9. Educational Progression System

### Skill Tree
Players unlock new blocks and features as they progress:

**Level 1-5 (Basics)**
- Move Forward, Turn Left/Right
- Simple sequential thinking

**Level 6-10 (Loops)**
- Loop block unlocked
- Pattern recognition skills

**Level 11-15 (Conditionals)**
- If Wall/Gem blocks unlocked
- Decision-making logic

**Level 16-20 (Optimization)**
- Jump block unlocked
- Risk-reward analysis

**Level 21-25 (Advanced)**
- While loops unlocked
- Dynamic programming

**Level 26+ (Mastery)**
- Function blocks unlocked
- Code organization

## 10. Performance Metrics & Analytics

### Player Statistics Tracked
- Total levels completed
- Average stars per level
- Total moves made
- Total time played
- Efficiency rating (average battery remaining)
- Fastest completion times
- Most optimized solutions

### Achievement System
- **First Steps**: Complete first level
- **Loop Master**: Use loops in 10 levels
- **Efficiency Expert**: Get 3 stars on 20 levels
- **Speed Demon**: Complete 5 levels in Time Attack mode
- **Perfectionist**: Get 3 stars on all Easy levels
- **Logic Wizard**: Complete 10 levels using only conditionals
- **Checkpoint Champion**: Collect all checkpoints in 15 levels
- **Battery Saver**: Complete level with 95%+ battery
- **Jump Master**: Use jump to save 10+ moves in a level
- **Blind Navigator**: Complete 5 Blind Mode levels

## 11. Technical Enhancements

### TypeScript Benefits
- Type-safe code blocks and game state
- Better IDE support and autocomplete
- Compile-time error detection
- Improved maintainability
- Enhanced documentation through types

### Performance Optimizations
- Lazy loading for large grids
- Virtual scrolling for block palette
- Debounced drag events
- RequestAnimationFrame for smooth animations
- Web Workers for maze generation (async)
- LocalStorage caching for save data

### Mobile-Specific Optimizations
- Touch event optimization
- Reduced DOM manipulations
- CSS transforms for animations
- Hardware acceleration
- Responsive image loading
- Service Worker for offline support

## 12. Future Enhancements

### Planned Features
- **Multiplayer Mode**: Race against friends
- **Level Editor**: Create and share custom mazes
- **Daily Challenges**: New puzzle every day
- **Seasonal Events**: Special themed levels
- **Story Mode**: Narrative-driven progression
- **Boss Levels**: Extra-large complex puzzles
- **Power-Up Shop**: Unlock special abilities
- **Customization**: Robot skins and themes
