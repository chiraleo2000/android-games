import { PUZZLES, type Puzzle } from './puzzles';

export interface Walker {
  x: number;
  z: number;
}

export interface WalkInput {
  x: number;
  z: number;
}

const LIMIT = 10;
const SPEED = 6;

export function stepWalker(position: Walker, input: WalkInput, delta: number): Walker {
  const length = Math.hypot(input.x, input.z) || 1;
  const scale = Math.hypot(input.x, input.z) === 0 ? 0 : 1 / length;
  const x = clamp(position.x + input.x * scale * SPEED * delta, -LIMIT, LIMIT);
  const z = clamp(position.z + input.z * scale * SPEED * delta, -LIMIT, LIMIT);
  return { x, z };
}

export function nearestPuzzle(x: number, z: number, radius = 1.8, puzzles: Puzzle[] = PUZZLES): Puzzle | null {
  let best: Puzzle | null = null;
  let bestDistance = radius;
  for (const puzzle of puzzles) {
    const distance = Math.hypot(puzzle.x - x, puzzle.z - z);
    if (distance <= bestDistance) {
      best = puzzle;
      bestDistance = distance;
    }
  }
  return best;
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}
