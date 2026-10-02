/**
 * Core type definitions for LogicLabs TypeScript implementation
 * Enhanced with time challenges, power-ups, and advanced features
 */

/** Cell types in the maze grid */
export enum CellType {
  WALL = '#',
  PATH = '.',
  START = 'S',
  GOAL = '*',
  CHECKPOINT = 'C',
  POWER_UP = 'P',
  TRAP = 'T'
}

/** Robot movement directions */
export enum Direction {
  NORTH = 0,
  EAST = 90,
  SOUTH = 180,
  WEST = 270
}

/** Available code block types */
export enum BlockType {
  MOVE_FORWARD = 'move-forward',
  TURN_LEFT = 'turn-left',
  TURN_RIGHT = 'turn-right',
  JUMP = 'jump',
  LOOP = 'loop',
  IF_WALL = 'if-wall',
  IF_GEM = 'if-gem',
  IF_PATH = 'if-path',
  WHILE_LOOP = 'while-loop',
  FUNCTION = 'function'
}

/** Difficulty levels with enhanced parameters */
export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
  EXPERT = 'expert',
  MASTER = 'master',
  EXTREME = 'extreme',
  NIGHTMARE = 'nightmare'
}

/** Screen types for navigation */
export enum ScreenType {
  SPLASH = 'splash',
  LOADING = 'loading',
  TUTORIAL = 'tutorial',
  MENU = 'menu',
  GAME = 'game',
  PAUSE = 'pause',
  RESULT = 'result',
  SETTINGS = 'settings',
  PROGRESS = 'progress',
  ACHIEVEMENTS = 'achievements'
}

declare global {
  interface Window {
    showGameError?: (error?: unknown) => void;
    webkitAudioContext?: typeof AudioContext;
  }
}

/** Challenge modes */
export enum ChallengeMode {
  NORMAL = 'normal',
  TIME_ATTACK = 'time-attack',
  MINIMAL_MOVES = 'minimal-moves',
  NO_LOOPS = 'no-loops',
  BLIND_MODE = 'blind-mode'
}

/** 2D grid position */
export interface Position {
  x: number;
  y: number;
}

/** Grid representation */
export interface Grid {
  cells: CellType[][];
  width: number;
  height: number;
}

/** Player/Robot state */
export interface PlayerState {
  position: Position;
  direction: Direction;
  battery: number;
  movesCount: number;
  jumpsCount: number;
  checkpointsCollected: number;
}

/** Code block in workspace */
export interface Block {
  id: string;
  type: BlockType;
  nestedBlocks?: Block[];
  loopCount?: number;
  condition?: string;
}

/** Level configuration */
export interface LevelData {
  levelNumber: number;
  difficulty: Difficulty;
  grid: Grid;
  startPosition: Position;
  goalPosition: Position;
  checkpoints: Position[];
  powerUps: Position[];
  timeLimit?: number; // seconds
  moveLimit?: number;
  challengeMode: ChallengeMode;
  hint: string;
}

/** Difficulty configuration */
export interface DifficultyConfig {
  gridSize: number;
  complexity: number; // 0-1 scale
  timeLimit?: number;
  moveLimit?: number;
  allowedBlocks: BlockType[];
  batteryMultiplier: number;
}

/** Game state */
export interface GameState {
  currentLevel: number;
  difficulty: Difficulty;
  levelData: LevelData | null;
  playerState: PlayerState;
  workspace: Block[];
  isExecuting: boolean;
  isPaused: boolean;
  startTime: number;
  elapsedTime: number;
}

/** Execution result */
export interface ExecutionResult {
  success: boolean;
  reason: string;
  finalBattery: number;
  movesUsed: number;
  timeUsed: number;
  stars: number;
  efficiency: number; // 0-100
}

/** Save data for persistence */
export interface SaveData {
  highestLevel: Record<Difficulty, number>;
  bestScores: Record<string, ExecutionResult>;
  tutorialCompleted: boolean;
  totalStars: number;
  achievements: string[];
  settings: GameSettings;
}

/** Game settings */
export interface GameSettings {
  soundEnabled: boolean;
  musicEnabled: boolean;
  hapticEnabled: boolean;
  animationSpeed: number; // 0.5 - 2.0
  colorblindMode: boolean;
  language: string;
}

/** Educational tip */
export interface EducationalTip {
  id: string;
  text: string;
  icon: string;
  category: 'loops' | 'conditionals' | 'efficiency' | 'debugging' | 'strategy';
}

/** Achievement definition */
export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  progress: number;
  target: number;
}
