# LogicLabs: Code & Escape 🧩🤖

**LogicLabs** is an innovative mobile-first educational puzzle game that transforms learning into an adventure. Designed to develop problem-solving, logical thinking, and critical thinking skills in young learners, LogicLabs uses gamification to teach computational thinking through visual programming.

Players become robot programmers, using intuitive drag-and-drop code blocks to navigate procedurally generated mazes. Each puzzle challenges players to think strategically, plan efficiently, and adapt their solutions—building essential cognitive skills for the digital age.

![LogicLabs Screenshot](https://via.placeholder.com/800x400?text=LogicLabs+Preview)

## 🚀 Features

### Educational Benefits

- **Problem-Solving Skills**: Analyze maze layouts, identify patterns, and devise optimal solutions
- **Logical Thinking**: Build sequential instructions using cause-and-effect reasoning
- **Critical Thinking**: Evaluate multiple approaches, optimize for efficiency, and debug failed attempts
- **Computational Thinking**: Learn core programming concepts (loops, conditionals, sequences) without syntax barriers
- **Spatial Reasoning**: Navigate 2D grids, understand directional movement, and visualize paths

### Core Gameplay

- **Visual Block Programming**: Intuitive drag-and-drop interface with jigsaw-style code blocks (Move, Turn, Loop, If, While)
- **Infinite Procedural Mazes**: AI-generated puzzles ensure endless unique challenges
- **Progressive Difficulty System**:
  - **Easy (5x5)**: Open layouts for learning basic sequencing and loops
  - **Medium (7x7)**: Maze corridors requiring planning and conditional logic
  - **Hard (9x9)**: Complex paths demanding optimization and advanced problem-solving
  - **Expert (11x11)**: Large-scale strategic planning with multiple checkpoints
  - **Master (13x13)**: Maximum challenge with extreme time pressure

### Enhanced Game Mechanics

- **Resource Management 🔋**: Battery system (100% starting energy) teaches efficiency—every move costs 1%, encouraging optimal solutions
- **Strategic Abilities 🦘**: Jump action (3% cost) introduces risk-reward decision-making
- **Special Cells**: Checkpoints (🎯), Power-ups (🔋), Traps (⚠️)
- **Adaptive Programming**: Sensor blocks (`If Wall Ahead`, `If Path Ahead`) enable dynamic, reusable solutions
- **Star Rating System**: Performance-based feedback (3 stars for 90%+ battery) motivates improvement and mastery

### Challenge Modes

- **Normal Mode**: Standard gameplay, perfect for learning
- **Time Attack**: Complete levels within strict time limits (60-180 seconds)
- **Minimal Moves**: Limited moves based on optimal solution + 20%
- **No Loops**: Loop blocks disabled, forces sequential thinking
- **Blind Mode**: Maze revealed gradually as robot explores

### Tech Stack

- **TypeScript 5.0+**: Type-safe development with strict mode
- **HTML5 / CSS3**: Responsive, mobile-first design with modern animations
- **Jest + fast-check**: Unit testing and property-based testing
- **ES2020 Modules**: Modern JavaScript module system
- **LocalStorage API**: Client-side progress persistence
- **Canvas-less Rendering**: DOM-based grid rendering for crisp UI on all devices

## 🛠️ Setup & Development

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd logiclabs

# Install dependencies
npm install

# Build TypeScript
npm run build

# Development mode (watch for changes)
npm run dev

# Run tests
npm test
```

### Running the Game

1. Build the project: `npm run build`
2. Open `index.html` in a modern web browser
3. **For mobile testing**: Use a local server (e.g., Live Server extension) and access from your mobile device

### Project Structure (TypeScript)

```
/
├── src/                    # TypeScript source files
│   ├── types.ts           # Core type definitions and interfaces
│   ├── GameEngine.ts      # Game logic and execution engine
│   ├── MazeGenerator.ts   # Procedural maze generation
│   ├── LevelManager.ts    # Level configuration and progression
│   ├── UIManager.ts       # DOM manipulation and screen management
│   ├── SaveManager.ts     # Progress persistence
│   └── App.ts             # Main application controller
├── dist/                   # Compiled JavaScript output
├── index.html             # Single Page Application entry
├── style.css              # Global styles and animations
├── docs/                  # Documentation
│   ├── GameDesign.md      # Complete game design document
│   └── UserGuide.md       # Player guide
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── jest.config.js         # Test configuration
```

## 🎮 Mobile UI/UX Flow

### App Launch Sequence

1. **Splash Screen** (2s): Animated LogicLabs logo with loading indicator
2. **Loading Screen**: Progress bar with educational tips ("Did you know? Loops help you write less code!")
3. **Welcome/Tutorial** (First Launch): Interactive 3-step guide introducing blocks and controls
4. **Main Menu**: Difficulty selection with visual previews

### Gameplay Flow

1. **Level Loading**: Smooth transition with maze generation animation
2. **Planning Phase**:
   - Swipe up from bottom to reveal block palette
   - Drag blocks to workspace with haptic feedback
   - Pinch-to-zoom on grid for detailed view
   - Tap blocks to edit/delete with contextual menu
3. **Execution Phase**:
   - Large "Play" button with animation
   - Step-by-step robot movement with visual trails
   - Real-time battery indicator with color transitions
4. **Results Screen**:
   - Animated star reveal based on performance
   - Score breakdown with efficiency metrics
   - "Next Level" / "Retry" / "Main Menu" options
5. **Pause Menu**: Accessible via top-right icon (Resume, Restart, Settings, Quit)

### Mobile-Optimized Interactions

- **Touch-First Design**: Large tap targets (minimum 44x44px)
- **Gesture Support**: Swipe to scroll blocks, long-press for block info
- **Responsive Layout**: Portrait and landscape modes with adaptive UI
- **Offline-First**: Full functionality without internet connection
- **Performance**: Smooth 60fps animations on mid-range devices

## 📜 License

LogicLabs is an open-source educational prototype.
