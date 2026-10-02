# LogicLabs Developer Guide

## 🏗️ Architecture Overview

LogicLabs follows a modular architecture with clear separation of concerns:

```
┌─────────────────────────────────────────┐
│              App.ts                     │
│        (Main Controller)                │
└─────────────────────────────────────────┘
         │         │         │
         ▼         ▼         ▼
┌──────────┐ ┌──────────┐ ┌──────────┐
│  Game    │ │  Level   │ │    UI    │
│  Engine  │ │ Manager  │ │ Manager  │
└──────────┘ └──────────┘ └──────────┘
     │            │             │
     ▼            ▼             ▼
┌──────────┐ ┌──────────┐ ┌──────────┐
│  Player  │ │   Maze   │ │   Save   │
│  State   │ │Generator │ │ Manager  │
└──────────┘ └──────────┘ └──────────┘
```

## 📦 Core Modules

### types.ts
**Purpose**: Central type definitions for the entire application

**Key Types**:
- `CellType`: Enum for maze cells (WALL, PATH, START, GOAL, CHECKPOINT, POWER_UP, TRAP)
- `BlockType`: Enum for code blocks (MOVE_FORWARD, JUMP, TURN_LEFT, LOOP, IF_WALL, etc.)
- `Difficulty`: Enum for difficulty levels (EASY to MASTER)
- `GameState`: Complete game state including level, player, and execution status
- `LevelData`: Level configuration with grid, positions, and limits

**Usage**:
```typescript
import { Difficulty, CellType, BlockType } from './types';

const difficulty: Difficulty = Difficulty.HARD;
const cell: CellType = CellType.WALL;
```

### GameEngine.ts
**Purpose**: Core game logic and block execution

**Key Methods**:
- `loadLevel(levelData)`: Initialize a new level
- `executeProgram(blocks, onStep, onComplete)`: Run player's program
- `resetLevel()`: Reset to initial state
- `pause()` / `resume()`: Control execution

**Execution Flow**:
1. Player clicks "Run"
2. `executeProgram()` called with Block[]
3. Each block executed sequentially with `executeBlock()`
4. `onStep()` callback updates UI after each action
5. `onComplete()` callback shows result screen

**Battery System**:
```typescript
private readonly BATTERY_COSTS: Partial<Record<BlockType, number>> = {
  [BlockType.MOVE_FORWARD]: 1,
  [BlockType.JUMP]: 3,
  [BlockType.TURN_LEFT]: 0,
  [BlockType.TURN_RIGHT]: 0
};
```

### MazeGenerator.ts
**Purpose**: Procedural maze generation with guaranteed solvability

**Algorithm**: Recursive Backtracker (DFS-based)
1. Initialize grid with walls
2. Start at (0,0) and carve paths recursively
3. Add openings based on complexity (20% to 95%)
4. Place goal at furthest point using BFS
5. Add checkpoints, power-ups, and traps

**Difficulty Scaling**:
```typescript
Easy:   5x5,  20% complexity, no time limit
Medium: 7x7,  40% complexity, 90s time limit
Hard:   9x9,  60% complexity, 120s time limit
Expert: 11x11, 80% complexity, 150s time limit
Master: 13x13, 95% complexity, 180s time limit
```

### LevelManager.ts
**Purpose**: Level configuration and progression

**Key Features**:
- Difficulty configurations with allowed blocks
- Challenge mode adjustments (time/move limits)
- Optimal move calculation for Minimal Moves mode
- Contextual hint generation

**Usage**:
```typescript
const levelManager = new LevelManager();
const levelData = levelManager.generateLevel(1, Difficulty.MEDIUM, ChallengeMode.TIME_ATTACK);
```

### UIManager.ts
**Purpose**: All DOM interactions and screen management

**Screen Flow**:
```
Splash (2s) → Tutorial (first time) → Menu → Game → Result
                                        ↓
                                      Pause
```

**Key Methods**:
- `showScreen(screenType)`: Navigate between screens
- `renderMazeGrid(levelData)`: Create grid DOM elements
- `updateBatteryDisplay(battery)`: Update battery with color coding
- `showResultScreen(result)`: Display stars and statistics

### SaveManager.ts
**Purpose**: Progress persistence using LocalStorage

**Saved Data**:
- Highest level reached per difficulty
- Best scores per level (stars, efficiency, time)
- Total stars earned
- Unlocked achievements
- Game settings

**Usage**:
```typescript
const saveManager = new SaveManager();
saveManager.updateLevelProgress(Difficulty.HARD, 5, result);
const highestLevel = saveManager.getHighestLevel(Difficulty.EASY);
```

## 🎮 Game Flow

### 1. Initialization
```typescript
// App.ts
const app = new App();
await app.initialize();
// Shows splash → tutorial (if needed) → menu
```

### 2. Starting a Game
```typescript
// User clicks difficulty button
await app.startGame(Difficulty.MEDIUM, ChallengeMode.NORMAL);
// Generates maze → loads level → renders UI → shows game screen
```

### 3. Building Program
```typescript
// User drags blocks to workspace
// DOM elements with data-type attributes
<div class="puzzle-piece" data-type="move-forward">Move</div>
<div class="puzzle-piece loop-container" data-type="loop">
  <div class="nested-area">
    <!-- Nested blocks here -->
  </div>
</div>
```

### 4. Executing Program
```typescript
// User clicks "Run"
const blocks = parseWorkspaceBlocks(); // Convert DOM to Block[]
await gameEngine.executeProgram(
  blocks,
  (state) => {
    // Update UI after each step
    uiManager.updateBatteryDisplay(state.battery);
    uiManager.updateRobotPosition(state);
  },
  (result) => {
    // Show result screen
    uiManager.showResultScreen(result);
    if (result.success) {
      saveManager.updateLevelProgress(difficulty, level, result);
    }
  }
);
```

### 5. Level Completion
```typescript
// Result screen shows:
// - Stars earned (based on battery remaining)
// - Battery remaining
// - Moves used
// - Time taken
// - Options: Next Level, Retry, Menu
```

## 🧪 Testing Strategy

### Unit Tests
```typescript
// GameEngine.test.ts
describe('GameEngine', () => {
  it('should consume battery on move', () => {
    const engine = new GameEngine();
    // Test battery consumption
  });

  it('should detect wall collision', () => {
    // Test collision detection
  });
});
```

### Property-Based Tests
```typescript
// MazeGenerator.test.ts
import * as fc from 'fast-check';

describe('MazeGenerator Properties', () => {
  it('should always generate solvable mazes', () => {
    fc.assert(
      fc.property(fc.constantFrom(...Object.values(Difficulty)), (diff) => {
        const generator = new MazeGenerator();
        const grid = generator.generateMaze(diff);
        return isPathExists(grid, start, goal);
      })
    );
  });
});
```

## 🎨 Adding New Features

### Adding a New Block Type

1. **Update types.ts**:
```typescript
export enum BlockType {
  // ... existing blocks
  NEW_BLOCK = 'new-block'
}
```

2. **Update GameEngine.ts**:
```typescript
private async executeBlock(block: Block, context: PlayerState) {
  switch (block.type) {
    // ... existing cases
    case BlockType.NEW_BLOCK:
      return this.executeNewBlock(context);
  }
}

private executeNewBlock(context: PlayerState) {
  // Implementation
}
```

3. **Add to UI** (index.html):
```html
<div class="puzzle-piece" draggable="true" data-type="new-block">
  <span class="icon">🆕</span> New Block
</div>
```

4. **Add styling** (style.css):
```css
.puzzle-piece.new-block {
  background-color: #your-color;
  box-shadow: 0 4px 0 #your-shadow-color;
}
```

### Adding a New Difficulty Level

1. **Update types.ts**:
```typescript
export enum Difficulty {
  // ... existing
  NIGHTMARE = 'nightmare'
}
```

2. **Update LevelManager.ts**:
```typescript
private readonly difficultyConfigs: Record<Difficulty, DifficultyConfig> = {
  // ... existing
  [Difficulty.NIGHTMARE]: {
    gridSize: 15,
    complexity: 0.99,
    timeLimit: 240,
    moveLimit: undefined,
    allowedBlocks: Object.values(BlockType),
    batteryMultiplier: 3.0
  }
};
```

3. **Add UI button** (index.html):
```html
<button id="btn-nightmare" class="menu-btn diff nightmare">
  Nightmare (15x15)
</button>
```

### Adding a New Challenge Mode

1. **Update types.ts**:
```typescript
export enum ChallengeMode {
  // ... existing
  SPEEDRUN = 'speedrun'
}
```

2. **Update LevelManager.ts**:
```typescript
public generateLevel(levelNumber, difficulty, challengeMode) {
  // ... existing code
  
  if (challengeMode === ChallengeMode.SPEEDRUN) {
    timeLimit = Math.floor(timeLimit * 0.5); // 50% time
    moveLimit = optimalMoves; // Exact optimal moves
  }
}
```

## 🐛 Debugging Tips

### Enable Verbose Logging
```typescript
// In GameEngine.ts
private async executeBlock(block: Block, context: PlayerState) {
  console.log('Executing:', block.type, 'at', context.position);
  // ... rest of code
}
```

### Visualize Maze Generation
```typescript
// In MazeGenerator.ts
private recursiveBacktracker(grid, x, y, size) {
  console.table(grid); // Shows grid in console
  // ... rest of code
}
```

### Test Specific Level
```typescript
// In App.ts
public async testLevel() {
  const levelData = {
    // Manually create level data
  };
  this.gameEngine.loadLevel(levelData);
}
```

## 📱 Mobile Testing Checklist

- [ ] Touch drag-and-drop works smoothly
- [ ] Buttons are at least 48x48px
- [ ] Text is readable (16px minimum)
- [ ] Grid scales properly on small screens
- [ ] Portrait and landscape modes work
- [ ] No horizontal scrolling
- [ ] Animations run at 60fps
- [ ] Battery indicator updates in real-time
- [ ] Toast notifications appear correctly

## 🚀 Performance Optimization

### Maze Generation
- Use Web Workers for large grids (11x11+)
- Cache generated mazes for retry
- Limit BFS iterations for pathfinding

### UI Rendering
- Use CSS transforms instead of position changes
- Debounce drag events
- Virtual scrolling for block palette
- RequestAnimationFrame for animations

### Memory Management
- Clear event listeners on screen change
- Remove DOM elements properly
- Limit console log history

## 📚 Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [fast-check Guide](https://github.com/dubzzz/fast-check)
- [Maze Generation Algorithms](https://en.wikipedia.org/wiki/Maze_generation_algorithm)
- [Touch Events API](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)

---

**Questions?** Check the [GameDesign.md](docs/GameDesign.md) for detailed game mechanics or [IMPLEMENTATION_STATUS.md](IMPLEMENTATION_STATUS.md) for current progress.
