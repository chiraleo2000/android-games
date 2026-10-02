import * as fc from 'fast-check';
import { MazeGenerator } from './MazeGenerator';
import { CellType, ChallengeMode, Difficulty, Grid, Position } from './types';

const SIZES: Record<Difficulty, number> = {
  [Difficulty.EASY]: 5,
  [Difficulty.MEDIUM]: 7,
  [Difficulty.HARD]: 9,
  [Difficulty.EXPERT]: 11,
  [Difficulty.MASTER]: 13,
  [Difficulty.EXTREME]: 15,
  [Difficulty.NIGHTMARE]: 17
};

function findCells(grid: Grid, type: CellType): Position[] {
  const found: Position[] = [];
  for (let y = 0; y < grid.height; y++) {
    for (let x = 0; x < grid.width; x++) {
      if (grid.cells[y][x] === type) found.push({ x, y });
    }
  }
  return found;
}

function isSolvable(grid: Grid): boolean {
  const starts = findCells(grid, CellType.START);
  const goals = findCells(grid, CellType.GOAL);
  if (starts.length !== 1 || goals.length !== 1) return false;
  const goal = goals[0];
  const visited = new Set<string>();
  const queue: Position[] = [starts[0]];
  while (queue.length > 0) {
    const pos = queue.shift()!;
    const key = `${pos.x},${pos.y}`;
    if (visited.has(key)) continue;
    visited.add(key);
    if (pos.x === goal.x && pos.y === goal.y) return true;
    const neighbors = [
      { x: pos.x, y: pos.y - 1 },
      { x: pos.x + 1, y: pos.y },
      { x: pos.x, y: pos.y + 1 },
      { x: pos.x - 1, y: pos.y }
    ];
    for (const next of neighbors) {
      if (next.x < 0 || next.y < 0 || next.x >= grid.width || next.y >= grid.height) continue;
      if (grid.cells[next.y][next.x] === CellType.WALL) continue;
      queue.push(next);
    }
  }
  return false;
}

describe('MazeGenerator', () => {
  const generator = new MazeGenerator();

  it.each(Object.values(Difficulty))('builds a square %s maze of the configured size', (difficulty) => {
    const grid = generator.generateMaze(difficulty);
    expect(grid.width).toBe(SIZES[difficulty]);
    expect(grid.height).toBe(SIZES[difficulty]);
    expect(grid.cells).toHaveLength(grid.height);
    expect(grid.cells.every((row) => row.length === grid.width)).toBe(true);
  });

  it('places exactly one start and one goal', () => {
    const grid = generator.generateMaze(Difficulty.EASY);
    expect(findCells(grid, CellType.START)).toHaveLength(1);
    expect(findCells(grid, CellType.GOAL)).toHaveLength(1);
  });

  it('uses only known cell types', () => {
    const grid = generator.generateMaze(Difficulty.MEDIUM);
    const known = new Set(Object.values(CellType));
    for (const row of grid.cells) {
      for (const cell of row) expect(known.has(cell)).toBe(true);
    }
  });

  it('does not place traps on easy normal mazes', () => {
    const grid = generator.generateMaze(Difficulty.EASY, ChallengeMode.NORMAL);
    expect(findCells(grid, CellType.TRAP)).toHaveLength(0);
    expect(findCells(grid, CellType.CHECKPOINT)).toHaveLength(0);
  });

  it('keeps a walkable path from start to goal', () => {
    for (const difficulty of [
      Difficulty.EASY,
      Difficulty.MEDIUM,
      Difficulty.HARD,
      Difficulty.EXPERT,
      Difficulty.MASTER,
      Difficulty.EXTREME,
      Difficulty.NIGHTMARE
    ]) {
      for (let i = 0; i < 3; i++) {
        const grid = generator.generateMaze(difficulty, ChallengeMode.NORMAL);
        expect(isSolvable(grid)).toBe(true);
      }
    }
  });

  it('property: easy, medium, and hard mazes stay solvable', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(Difficulty.EASY, Difficulty.MEDIUM, Difficulty.HARD),
        (difficulty) => isSolvable(generator.generateMaze(difficulty))
      ),
      { numRuns: 8 }
    );
  });
});
