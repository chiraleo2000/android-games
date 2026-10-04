/**
 * Enhanced Game Engine with time challenges, advanced execution, and scoring
 */

import {
  GameState,
  PlayerState,
  Block,
  BlockType,
  Direction,
  CellType,
  ExecutionResult,
  LevelData,
  Position} from './types';

export class GameEngine {
  private readonly state: GameState;
  private stepDelayMs = 500;
  private readonly BATTERY_COSTS: Partial<Record<BlockType, number>> = {
    [BlockType.MOVE_FORWARD]: 1,
    [BlockType.JUMP]: 3,
    [BlockType.TURN_LEFT]: 0,
    [BlockType.TURN_RIGHT]: 0
  };

  constructor() {
    this.state = this.createInitialState();
  }

  /**
   * Create initial game state
   */
  private createInitialState(): GameState {
    return {
      currentLevel: 1,
      difficulty: 'easy' as any,
      levelData: null,
      playerState: {
        position: { x: 0, y: 0 },
        direction: Direction.EAST,
        battery: 100,
        movesCount: 0,
        jumpsCount: 0,
        checkpointsCollected: 0
      },
      workspace: [],
      isExecuting: false,
      isPaused: false,
      startTime: 0,
      elapsedTime: 0
    };
  }

  /**
   * Load a new level
   */
  public loadLevel(levelData: LevelData): void {
    this.state.levelData = levelData;
    this.state.currentLevel = levelData.levelNumber;
    this.state.difficulty = levelData.difficulty;
    this.resetLevel();
  }

  /**
   * Reset current level to initial state
   */
  public resetLevel(): void {
    if (!this.state.levelData) return;

    this.state.playerState = {
      position: { ...this.state.levelData.startPosition },
      direction: Direction.EAST,
      battery: 100,
      movesCount: 0,
      jumpsCount: 0,
      checkpointsCollected: 0
    };
    this.state.isExecuting = false;
    this.state.isPaused = false;
    this.state.startTime = 0;
    this.state.elapsedTime = 0;
  }

  /**
   * Execute the player's program
   */
  public async executeProgram(
    blocks: Block[],
    onStep?: (state: PlayerState) => void,
    onComplete?: (result: ExecutionResult) => void
  ): Promise<ExecutionResult> {
    if (!this.state.levelData) {
      throw new Error('No level loaded');
    }

    this.state.isExecuting = true;
    this.state.startTime = Date.now();
    this.state.workspace = blocks;

    const context = { ...this.state.playerState, position: { ...this.state.playerState.position } };
    this.state.playerState = context;

    try {
      for (const block of blocks) {
        if (!this.state.isExecuting) break;
        const result = await this.executeBlock(block, context, onStep);
        if (this.state.isExecuting) onStep?.(context);
        if (result) return this.completeExecution(result.success, result.reason, context, onComplete);
        const limited = this.limitResult(context);
        if (limited) return this.completeExecution(limited.success, limited.reason, context, onComplete);
      }
      return this.completeExecution(false, 'Program finished without reaching goal', context, onComplete);
    } finally {
      this.state.isExecuting = false;
      this.state.elapsedTime = (Date.now() - this.state.startTime) / 1000;
    }
  }

  private completeExecution(
    success: boolean,
    reason: string,
    context: PlayerState,
    onComplete?: (result: ExecutionResult) => void
  ): ExecutionResult {
    const result = this.calculateResult(success, reason, context);
    onComplete?.(result);
    return result;
  }

  private limitResult(context: PlayerState): { success: boolean; reason: string } | null {
    const level = this.state.levelData;
    if (!level) return null;
    if (typeof level.timeLimit === 'number' && (Date.now() - this.state.startTime) / 1000 > level.timeLimit) {
      return { success: false, reason: 'Time limit exceeded!' };
    }
    if (typeof level.moveLimit === 'number' && context.movesCount > level.moveLimit) {
      return { success: false, reason: 'Move limit exceeded!' };
    }
    return null;
  }

  /**
   * Execute a single block
   */
  private async executeBlock(
    block: Block,
    context: PlayerState,
    onStep?: (state: PlayerState) => void
  ): Promise<{ success: boolean; reason: string } | null> {
    await this.delay(this.stepDelayMs);
    if (!this.state.isExecuting) return null;

    switch (block.type) {
      case BlockType.MOVE_FORWARD:
        return this.executeMove(context);

      case BlockType.JUMP:
        return this.executeJump(context);

      case BlockType.TURN_LEFT:
        this.executeTurn(context, -90);
        break;

      case BlockType.TURN_RIGHT:
        this.executeTurn(context, 90);
        break;

      case BlockType.LOOP:
        return await this.executeLoop(block, context, onStep);

      case BlockType.IF_WALL:
      case BlockType.IF_GEM:
      case BlockType.IF_PATH:
        return await this.executeIf(block, context, onStep);

      case BlockType.WHILE_LOOP:
        return await this.executeWhile(block, context, onStep);
    }

    return null;
  }

  /**
   * Execute move forward
   */
  private executeMove(context: PlayerState): { success: boolean; reason: string } | null {
    const nextPos = this.getNextPosition(context.position, context.direction);
    const cell = this.getCell(nextPos);

    // Check collision
    if (cell === CellType.WALL || cell === null) {
      return { success: false, reason: 'Robot hit a wall!' };
    }

    // Check trap
    if (cell === CellType.TRAP) {
      return { success: false, reason: 'Robot fell into a trap!' };
    }

    // Update position
    context.position = nextPos;
    context.movesCount++;
    this.consumeBattery(context, BlockType.MOVE_FORWARD);

    // Check for special cells
    if (cell === CellType.CHECKPOINT) {
      context.checkpointsCollected++;
    } else if (cell === CellType.POWER_UP) {
      context.battery = Math.min(100, context.battery + 10);
    } else if (cell === CellType.GOAL) {
      return { success: true, reason: 'Level Complete!' };
    }

    // Check battery
    if (context.battery <= 0) {
      return { success: false, reason: 'Battery depleted!' };
    }

    return null;
  }

  /**
   * Execute jump (2 tiles forward)
   */
  private executeJump(context: PlayerState): { success: boolean; reason: string } | null {
    const nextPos = this.getNextPosition(context.position, context.direction, 2);
    const cell = this.getCell(nextPos);

    // Check if landing spot is valid
    if (cell === CellType.WALL || cell === null) {
      return { success: false, reason: 'Robot jumped into a wall!' };
    }

    // Update position
    context.position = nextPos;
    context.jumpsCount++;
    context.movesCount++;
    this.consumeBattery(context, BlockType.JUMP);

    // Check for special cells
    if (cell === CellType.CHECKPOINT) {
      context.checkpointsCollected++;
    } else if (cell === CellType.POWER_UP) {
      context.battery = Math.min(100, context.battery + 10);
    } else if (cell === CellType.GOAL) {
      return { success: true, reason: 'Level Complete!' };
    } else if (cell === CellType.TRAP) {
      return { success: false, reason: 'Robot jumped into a trap!' };
    }

    // Check battery
    if (context.battery <= 0) {
      return { success: false, reason: 'Battery depleted!' };
    }

    return null;
  }

  /**
   * Execute turn
   */
  private executeTurn(context: PlayerState, degrees: number): void {
    context.direction = ((context.direction + degrees + 360) % 360) as Direction;
  }

  /**
   * Execute loop block
   */
  private async executeLoop(
    block: Block,
    context: PlayerState,
    onStep?: (state: PlayerState) => void
  ): Promise<{ success: boolean; reason: string } | null> {
    const iterations = block.loopCount || 3;
    const nestedBlocks = block.nestedBlocks || [];

    for (let i = 0; i < iterations; i++) {
      const result = await this.runNested(nestedBlocks, context, onStep);
      if (result || !this.state.isExecuting) return result;
    }

    return null;
  }

  /**
   * Execute if conditional
   */
  private async executeIf(
    block: Block,
    context: PlayerState,
    onStep?: (state: PlayerState) => void
  ): Promise<{ success: boolean; reason: string } | null> {
    if (!this.evaluateCondition(block.type, context)) return null;
    return this.runNested(block.nestedBlocks || [], context, onStep);
  }

  /**
   * Execute while loop
   */
  private async executeWhile(
    block: Block,
    context: PlayerState,
    onStep?: (state: PlayerState) => void
  ): Promise<{ success: boolean; reason: string } | null> {
    const maxIterations = 100;
    let iterations = 0;

    while (this.evaluateCondition(block.type, context) && iterations < maxIterations && this.state.isExecuting) {
      const result = await this.runNested(block.nestedBlocks || [], context, onStep);
      if (result || !this.state.isExecuting) return result;
      iterations++;
    }

    return null;
  }

  private async runNested(
    blocks: Block[],
    context: PlayerState,
    onStep?: (state: PlayerState) => void
  ): Promise<{ success: boolean; reason: string } | null> {
    for (const nested of blocks) {
      if (!this.state.isExecuting) return null;
      const result = await this.executeBlock(nested, context, onStep);
      if (this.state.isExecuting || result) onStep?.(context);
      if (result) return result;
      const limited = this.limitResult(context);
      if (limited) return limited;
    }
    return null;
  }

  /**
   * Evaluate condition for if/while blocks
   */
  private evaluateCondition(blockType: BlockType, context: PlayerState): boolean {
    const nextPos = this.getNextPosition(context.position, context.direction);
    const cell = this.getCell(nextPos);

    switch (blockType) {
      case BlockType.IF_WALL:
      case BlockType.WHILE_LOOP:
        return cell === CellType.WALL || cell === null;
      case BlockType.IF_GEM:
        return cell === CellType.GOAL;
      case BlockType.IF_PATH:
        return cell === CellType.PATH
          || cell === CellType.START
          || cell === CellType.GOAL
          || cell === CellType.CHECKPOINT
          || cell === CellType.POWER_UP;
      default:
        return false;
    }
  }

  /**
   * Get next position based on direction
   */
  private getNextPosition(pos: Position, direction: Direction, distance: number = 1): Position {
    const dirMap: Record<Direction, Position> = {
      [Direction.NORTH]: { x: 0, y: -distance },
      [Direction.EAST]: { x: distance, y: 0 },
      [Direction.SOUTH]: { x: 0, y: distance },
      [Direction.WEST]: { x: -distance, y: 0 }
    };

    const delta = dirMap[direction];
    return {
      x: pos.x + delta.x,
      y: pos.y + delta.y
    };
  }

  /**
   * Get cell at position
   */
  private getCell(pos: Position): CellType | null {
    if (!this.state.levelData) return null;

    const { grid } = this.state.levelData;
    if (pos.y < 0 || pos.y >= grid.height || pos.x < 0 || pos.x >= grid.width) {
      return null;
    }

    return grid.cells[pos.y][pos.x];
  }

  /**
   * Consume battery
   */
  private consumeBattery(context: PlayerState, blockType: BlockType): void {
    const cost = this.BATTERY_COSTS[blockType] || 0;
    context.battery = Math.max(0, context.battery - cost);
  }

  /**
   * Calculate final result
   */
  private calculateResult(
    success: boolean,
    reason: string,
    context: PlayerState
  ): ExecutionResult {
    const timeUsed = (Date.now() - this.state.startTime) / 1000;
    const efficiency = context.battery;

    let stars = 0;
    if (success) {
      if (efficiency > 90) stars = 3;
      else if (efficiency > 70) stars = 2;
      else if (efficiency > 50) stars = 1;
    }

    return {
      success,
      reason,
      finalBattery: context.battery,
      movesUsed: context.movesCount,
      timeUsed,
      stars,
      efficiency
    };
  }

  /**
   * Delay helper for animations
   */
  private delay(ms: number): Promise<void> {
    const wait = Math.max(0, ms);
    if (wait === 0) return Promise.resolve();
    return new Promise(resolve => setTimeout(resolve, wait));
  }

  /**
   * Animation delay between blocks. Tests and the settings screen can set 0.
   */
  public setAnimationDelay(ms: number): void {
    this.stepDelayMs = Math.max(0, ms);
  }

  /**
   * Stop a running program. The current block finishes, then execution ends.
   */
  public stop(): void {
    this.state.isExecuting = false;
  }

  /**
   * Get current game state
   */
  public getState(): GameState {
    return { ...this.state };
  }

  /**
   * Get current battery
   */
  public getBattery(): number {
    return this.state.playerState.battery;
  }

  /**
   * Pause execution
   */
  public pause(): void {
    this.state.isPaused = true;
  }

  /**
   * Resume execution
   */
  public resume(): void {
    this.state.isPaused = false;
  }
}
