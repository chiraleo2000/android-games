import { GameEngine } from './GameEngine';
import {
  Block,
  BlockType,
  CellType,
  ChallengeMode,
  Difficulty,
  LevelData
} from './types';

function levelFromRow(cells: CellType[], extra: Partial<LevelData> = {}): LevelData {
  return {
    levelNumber: 1,
    difficulty: Difficulty.EASY,
    grid: { cells: [cells], width: cells.length, height: 1 },
    startPosition: { x: 0, y: 0 },
    goalPosition: { x: cells.length - 1, y: 0 },
    checkpoints: [],
    powerUps: [],
    challengeMode: ChallengeMode.NORMAL,
    hint: 'test',
    ...extra
  };
}

function block(type: BlockType, extra: Partial<Block> = {}): Block {
  return { id: type, type, ...extra };
}

describe('GameEngine', () => {
  let engine: GameEngine;

  beforeEach(() => {
    engine = new GameEngine();
    engine.setAnimationDelay(0);
  });

  it('throws when no level is loaded', async () => {
    await expect(engine.executeProgram([block(BlockType.MOVE_FORWARD)])).rejects.toThrow('No level loaded');
  });

  it('wins when the robot reaches the goal and spends battery on each move', async () => {
    engine.loadLevel(levelFromRow([CellType.START, CellType.PATH, CellType.GOAL]));
    const result = await engine.executeProgram([
      block(BlockType.MOVE_FORWARD),
      block(BlockType.MOVE_FORWARD)
    ]);
    expect(result.success).toBe(true);
    expect(result.reason).toBe('Level Complete!');
    expect(result.movesUsed).toBe(2);
    expect(result.finalBattery).toBe(98);
    expect(result.stars).toBe(3);
  });

  it('loses when the robot hits a wall', async () => {
    engine.loadLevel(levelFromRow([CellType.START, CellType.WALL]));
    const result = await engine.executeProgram([block(BlockType.MOVE_FORWARD)]);
    expect(result.success).toBe(false);
    expect(result.reason).toBe('Robot hit a wall!');
    expect(result.movesUsed).toBe(0);
    expect(result.finalBattery).toBe(100);
    expect(result.stars).toBe(0);
  });

  it('loses when a turn points the robot out of the maze', async () => {
    engine.loadLevel(levelFromRow([CellType.START, CellType.GOAL]));
    const result = await engine.executeProgram([
      block(BlockType.TURN_RIGHT),
      block(BlockType.MOVE_FORWARD)
    ]);
    expect(result.success).toBe(false);
    expect(result.reason).toBe('Robot hit a wall!');
  });

  it('loses when the battery is depleted before the goal', async () => {
    const cells = [CellType.START, ...Array(100).fill(CellType.PATH)];
    engine.loadLevel(levelFromRow(cells));
    const moves = Array.from({ length: 100 }, () => block(BlockType.MOVE_FORWARD));
    const result = await engine.executeProgram(moves);
    expect(result.success).toBe(false);
    expect(result.reason).toBe('Battery depleted!');
    expect(result.finalBattery).toBe(0);
    expect(result.movesUsed).toBe(100);
  });

  it('loses when the move limit is exceeded', async () => {
    engine.loadLevel(levelFromRow(
      [CellType.START, CellType.PATH, CellType.GOAL],
      { moveLimit: 0 }
    ));
    const result = await engine.executeProgram([block(BlockType.MOVE_FORWARD)]);
    expect(result.success).toBe(false);
    expect(result.reason).toBe('Move limit exceeded!');
    expect(result.movesUsed).toBe(1);
  });

  it('loses when the time limit is already exceeded', async () => {
    engine.loadLevel(levelFromRow(
      [CellType.START, CellType.GOAL],
      { timeLimit: -1 }
    ));
    const result = await engine.executeProgram([block(BlockType.TURN_LEFT)]);
    expect(result.success).toBe(false);
    expect(result.reason).toBe('Time limit exceeded!');
  });

  it('repeats nested blocks inside a loop', async () => {
    engine.loadLevel(levelFromRow([
      CellType.START,
      CellType.PATH,
      CellType.PATH,
      CellType.PATH,
      CellType.GOAL
    ]));
    const result = await engine.executeProgram([
      block(BlockType.LOOP, {
        loopCount: 2,
        nestedBlocks: [block(BlockType.MOVE_FORWARD), block(BlockType.MOVE_FORWARD)]
      })
    ]);
    expect(result.success).toBe(true);
    expect(result.movesUsed).toBe(4);
  });

  it('runs an If Path body only when the next cell is open', async () => {
    engine.loadLevel(levelFromRow([CellType.START, CellType.PATH, CellType.GOAL]));
    const skipped = await engine.executeProgram([
      block(BlockType.IF_WALL, { nestedBlocks: [block(BlockType.MOVE_FORWARD)] })
    ]);
    expect(skipped.success).toBe(false);
    expect(skipped.movesUsed).toBe(0);

    engine.resetLevel();
    const taken = await engine.executeProgram([
      block(BlockType.IF_PATH, { nestedBlocks: [block(BlockType.MOVE_FORWARD)] }),
      block(BlockType.MOVE_FORWARD)
    ]);
    expect(taken.success).toBe(true);
    expect(taken.movesUsed).toBe(2);
  });

  it('treats the goal as an open cell for If Path', async () => {
    engine.loadLevel(levelFromRow([CellType.START, CellType.GOAL]));
    const result = await engine.executeProgram([
      block(BlockType.IF_PATH, { nestedBlocks: [block(BlockType.MOVE_FORWARD)] })
    ]);
    expect(result.success).toBe(true);
    expect(result.reason).toBe('Level Complete!');
    expect(result.movesUsed).toBe(1);
  });

  it('jumps two cells and spends 3 battery', async () => {
    engine.loadLevel(levelFromRow([CellType.START, CellType.WALL, CellType.GOAL]));
    const result = await engine.executeProgram([block(BlockType.JUMP)]);
    expect(result.success).toBe(true);
    expect(result.finalBattery).toBe(97);
    expect(result.movesUsed).toBe(1);
  });

  it('loses when the robot jumps into a wall', async () => {
    engine.loadLevel(levelFromRow([CellType.START, CellType.PATH, CellType.WALL]));
    const result = await engine.executeProgram([block(BlockType.JUMP)]);
    expect(result.success).toBe(false);
    expect(result.reason).toBe('Robot jumped into a wall!');
    expect(result.finalBattery).toBe(100);
  });

  it('loses when the robot moves onto a trap', async () => {
    engine.loadLevel(levelFromRow([CellType.START, CellType.TRAP]));
    const result = await engine.executeProgram([block(BlockType.MOVE_FORWARD)]);
    expect(result.success).toBe(false);
    expect(result.reason).toBe('Robot fell into a trap!');
  });

  it('restores battery from a power-up after the move cost', async () => {
    const cells: CellType[] = [CellType.START];
    for (let i = 0; i < 10; i++) cells.push(CellType.PATH);
    cells.push(CellType.POWER_UP);
    engine.loadLevel(levelFromRow(cells));
    const moves = Array.from({ length: 11 }, () => block(BlockType.MOVE_FORWARD));
    const result = await engine.executeProgram(moves);
    expect(result.success).toBe(false);
    expect(result.finalBattery).toBe(99);
    expect(result.movesUsed).toBe(11);
  });

  it('awards fewer stars as more battery is spent', async () => {
    const cells: CellType[] = [CellType.START];
    for (let i = 0; i < 14; i++) cells.push(CellType.PATH);
    cells.push(CellType.GOAL);
    engine.loadLevel(levelFromRow(cells));
    const result = await engine.executeProgram(
      Array.from({ length: 15 }, () => block(BlockType.MOVE_FORWARD))
    );
    expect(result.success).toBe(true);
    expect(result.finalBattery).toBe(85);
    expect(result.stars).toBe(2);
  });

  it('reports step callbacks and stops before later blocks', async () => {
    engine.loadLevel(levelFromRow([
      CellType.START,
      CellType.PATH,
      CellType.PATH,
      CellType.GOAL
    ]));
    let steps = 0;
    const result = await engine.executeProgram(
      [
        block(BlockType.MOVE_FORWARD),
        block(BlockType.MOVE_FORWARD),
        block(BlockType.MOVE_FORWARD)
      ],
      () => {
        steps += 1;
        if (steps === 1) engine.stop();
      }
    );
    expect(steps).toBe(1);
    expect(result.success).toBe(false);
    expect(result.movesUsed).toBe(1);
    expect(result.reason).toBe('Program finished without reaching goal');
  });

  it('resets the robot after a failed run', async () => {
    engine.loadLevel(levelFromRow([CellType.START, CellType.PATH, CellType.GOAL]));
    await engine.executeProgram([block(BlockType.MOVE_FORWARD)]);
    engine.resetLevel();
    const state = engine.getState().playerState;
    expect(state.position).toEqual({ x: 0, y: 0 });
    expect(state.battery).toBe(100);
    expect(state.movesCount).toBe(0);
    expect(engine.getBattery()).toBe(100);
  });
});
