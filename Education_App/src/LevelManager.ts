/**
 * Level configuration, maze setup, and challenge-mode limits.
 */

import { MazeGenerator } from './MazeGenerator';
import {
  BlockType,
  CellType,
  ChallengeMode,
  Difficulty,
  DifficultyConfig,
  Grid,
  LevelData,
  Position
} from './types';

const CORE_BLOCKS: BlockType[] = [
  BlockType.MOVE_FORWARD,
  BlockType.TURN_LEFT,
  BlockType.TURN_RIGHT,
  BlockType.JUMP,
  BlockType.LOOP,
  BlockType.IF_WALL,
  BlockType.IF_PATH,
  BlockType.IF_GEM
];

export class LevelManager {
  private readonly mazeGenerator = new MazeGenerator();
  private currentLevel = 1;

  private readonly difficultyConfigs: Record<Difficulty, DifficultyConfig> = {
    [Difficulty.EASY]: {
      gridSize: 5,
      complexity: 0.2,
      allowedBlocks: [...CORE_BLOCKS],
      batteryMultiplier: 1
    },
    [Difficulty.MEDIUM]: {
      gridSize: 7,
      complexity: 0.4,
      timeLimit: 90,
      allowedBlocks: [...CORE_BLOCKS],
      batteryMultiplier: 1.1
    },
    [Difficulty.HARD]: {
      gridSize: 9,
      complexity: 0.6,
      timeLimit: 120,
      allowedBlocks: [...CORE_BLOCKS],
      batteryMultiplier: 1.2
    },
    [Difficulty.EXPERT]: {
      gridSize: 11,
      complexity: 0.8,
      timeLimit: 150,
      allowedBlocks: [...CORE_BLOCKS],
      batteryMultiplier: 1.3
    },
    [Difficulty.MASTER]: {
      gridSize: 13,
      complexity: 0.95,
      timeLimit: 180,
      allowedBlocks: [...CORE_BLOCKS],
      batteryMultiplier: 1.5
    },
    [Difficulty.EXTREME]: {
      gridSize: 15,
      complexity: 0.98,
      timeLimit: 210,
      allowedBlocks: [...CORE_BLOCKS],
      batteryMultiplier: 2
    },
    [Difficulty.NIGHTMARE]: {
      gridSize: 17,
      complexity: 0.99,
      timeLimit: 240,
      allowedBlocks: [...CORE_BLOCKS],
      batteryMultiplier: 3
    }
  };

  public getCurrentLevel(): number {
    return this.currentLevel;
  }

  public setCurrentLevel(level: number): void {
    this.currentLevel = Math.max(1, level);
  }

  public getAllowedBlocks(difficulty: Difficulty, mode: ChallengeMode): BlockType[] {
    const blocks = [...this.difficultyConfigs[difficulty].allowedBlocks];
    if (mode === ChallengeMode.NO_LOOPS) {
      return blocks.filter(block => block !== BlockType.LOOP && block !== BlockType.WHILE_LOOP);
    }
    return blocks;
  }

  public generateLevel(
    levelNumber: number,
    difficulty: Difficulty,
    challengeMode: ChallengeMode
  ): LevelData {
    this.currentLevel = Math.max(1, levelNumber);
    const config = this.difficultyConfigs[difficulty];
    const grid = this.mazeGenerator.generateMaze(difficulty, challengeMode);
    const startPosition = this.findCell(grid, CellType.START) ?? { x: 0, y: 0 };
    const goalPosition = this.findCell(grid, CellType.GOAL) ?? {
      x: grid.width - 1,
      y: grid.height - 1
    };

    let timeLimit = config.timeLimit;
    if (challengeMode === ChallengeMode.TIME_ATTACK) {
      const base = config.timeLimit ?? 60;
      timeLimit = Math.max(30, Math.floor(base * 0.75));
    }

    let moveLimit: number | undefined;
    if (challengeMode === ChallengeMode.MINIMAL_MOVES) {
      moveLimit = this.estimateOptimalMoves(grid, startPosition, goalPosition);
    }

    return {
      levelNumber: this.currentLevel,
      difficulty,
      grid,
      startPosition,
      goalPosition,
      checkpoints: this.findAll(grid, CellType.CHECKPOINT),
      powerUps: this.findAll(grid, CellType.POWER_UP),
      timeLimit,
      moveLimit,
      challengeMode,
      hint: this.hintFor(difficulty, challengeMode)
    };
  }

  private hintFor(difficulty: Difficulty, mode: ChallengeMode): string {
    if (mode === ChallengeMode.TIME_ATTACK) {
      return 'The clock is running. A short path of Move and Turn blocks wins.';
    }
    if (mode === ChallengeMode.MINIMAL_MOVES) {
      return 'Stay under the move limit. Turns are free. Loops can repeat a short path.';
    }
    if (mode === ChallengeMode.NO_LOOPS) {
      return 'Loops are turned off for this challenge. Use Move, Turn, Jump, and If.';
    }
    if (difficulty === Difficulty.EASY) {
      return 'Reach the star. Tap Move and Turn, then press Run. Loops repeat the blocks inside them.';
    }
    return 'Reach the star before battery, time, or the move limit runs out.';
  }

  private estimateOptimalMoves(grid: Grid, start: Position, goal: Position): number {
    const path = this.shortestPath(grid, start, goal);
    if (path.length < 2) return grid.width * 2;
    return path.length - 1;
  }

  private shortestPath(grid: Grid, start: Position, goal: Position): Position[] {
    const visited = new Set<string>();
    const queue: Array<{ pos: Position; path: Position[] }> = [{ pos: start, path: [start] }];

    while (queue.length > 0) {
      const current = queue.shift()!;
      const key = `${current.pos.x},${current.pos.y}`;
      if (visited.has(key)) continue;
      visited.add(key);
      if (current.pos.x === goal.x && current.pos.y === goal.y) return current.path;

      const neighbors = [
        { x: current.pos.x, y: current.pos.y - 1 },
        { x: current.pos.x + 1, y: current.pos.y },
        { x: current.pos.x, y: current.pos.y + 1 },
        { x: current.pos.x - 1, y: current.pos.y }
      ];
      for (const next of neighbors) {
        if (next.x < 0 || next.y < 0 || next.x >= grid.width || next.y >= grid.height) continue;
        if (grid.cells[next.y][next.x] === CellType.WALL) continue;
        if (visited.has(`${next.x},${next.y}`)) continue;
        queue.push({ pos: next, path: [...current.path, next] });
      }
    }

    return [];
  }

  private findCell(grid: Grid, type: CellType): Position | null {
    for (let y = 0; y < grid.height; y++) {
      for (let x = 0; x < grid.width; x++) {
        if (grid.cells[y][x] === type) return { x, y };
      }
    }
    return null;
  }

  private findAll(grid: Grid, type: CellType): Position[] {
    const found: Position[] = [];
    for (let y = 0; y < grid.height; y++) {
      for (let x = 0; x < grid.width; x++) {
        if (grid.cells[y][x] === type) found.push({ x, y });
      }
    }
    return found;
  }
}
