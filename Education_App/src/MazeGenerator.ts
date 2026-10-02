/**
 * Enhanced Maze Generator with multiple algorithms and difficulty scaling
 * Supports procedural generation with guaranteed solvability
 */

import { CellType, Difficulty, Grid, Position, ChallengeMode } from './types';

export interface MazeConfig {
  size: number;
  complexity: number;
  addCheckpoints: boolean;
  addPowerUps: boolean;
  addTraps: boolean;
}

export class MazeGenerator {
  private readonly difficultyConfigs: Record<Difficulty, MazeConfig> = {
    [Difficulty.EASY]: { size: 5, complexity: 0.2, addCheckpoints: false, addPowerUps: false, addTraps: false },
    [Difficulty.MEDIUM]: { size: 7, complexity: 0.4, addCheckpoints: true, addPowerUps: true, addTraps: false },
    [Difficulty.HARD]: { size: 9, complexity: 0.6, addCheckpoints: true, addPowerUps: true, addTraps: true },
    [Difficulty.EXPERT]: { size: 11, complexity: 0.8, addCheckpoints: true, addPowerUps: true, addTraps: true },
    [Difficulty.MASTER]: { size: 13, complexity: 0.95, addCheckpoints: true, addPowerUps: true, addTraps: true },
    [Difficulty.EXTREME]: { size: 15, complexity: 0.98, addCheckpoints: true, addPowerUps: true, addTraps: true },
    [Difficulty.NIGHTMARE]: { size: 17, complexity: 0.99, addCheckpoints: true, addPowerUps: true, addTraps: true }
  };

  /**
   * Generate a maze based on difficulty level with enhanced randomization
   */
  public generateMaze(difficulty: Difficulty, challengeMode: ChallengeMode = ChallengeMode.NORMAL): Grid {
    const config = this.difficultyConfigs[difficulty];
    const size = config.size;

    // Initialize grid with walls
    const cells: CellType[][] = Array(size)
      .fill(null)
      .map(() => Array(size).fill(CellType.WALL));

    // Randomly choose maze generation algorithm for variety
    const useAlternateAlgorithm = Math.random() > 0.5 && size >= 9;
    
    if (useAlternateAlgorithm) {
      this.recursiveBacktrackerWithBias(cells, 0, 0, size);
    } else {
      this.recursiveBacktracker(cells, 0, 0, size);
    }

    // Higher difficulties start on a random carved edge cell so the start stays connected.
    let startX = 0, startY = 0;
    if (size >= 11) {
      const edgePaths: Position[] = [];
      const seen = new Set<string>();
      const consider = (x: number, y: number): void => {
        if (cells[y][x] !== CellType.PATH) return;
        const key = `${x},${y}`;
        if (seen.has(key)) return;
        seen.add(key);
        edgePaths.push({ x, y });
      };
      for (let i = 0; i < size; i++) {
        consider(0, i);
        consider(size - 1, i);
        consider(i, 0);
        consider(i, size - 1);
      }
      if (edgePaths.length > 0) {
        const pick = edgePaths[Math.floor(Math.random() * edgePaths.length)];
        startX = pick.x;
        startY = pick.y;
      }
    }
    cells[startY][startX] = CellType.START;

    let goalPos = this.findFurthestPoint(cells, { x: startX, y: startY }, size);
    if (goalPos.x === startX && goalPos.y === startY) {
      const alternate = this.findOtherPathCell(cells, size, startX, startY);
      if (alternate) goalPos = alternate;
    }
    cells[goalPos.y][goalPos.x] = CellType.GOAL;

    // Add openings based on difficulty (inverse complexity for harder mazes)
    this.addOpenings(cells, size, 1 - config.complexity);

    // Add special cells based on configuration
    if (config.addCheckpoints) {
      this.addCheckpoints(cells, size, { x: startX, y: startY }, goalPos);
    }

    if (config.addPowerUps) {
      this.addPowerUps(cells, size);
    }

    if (config.addTraps && challengeMode !== ChallengeMode.NORMAL) {
      this.addTraps(cells, size);
    }

    // Add dynamic obstacles for extreme difficulties
    if (size >= 15) {
      this.addDynamicObstacles(cells, size);
    }

    return {
      cells,
      width: size,
      height: size
    };
  }

  /**
   * Recursive Backtracker algorithm for maze generation
   * Creates a perfect maze (tree structure) with single solution path
   */
  private recursiveBacktracker(
    grid: CellType[][],
    x: number,
    y: number,
    size: number
  ): void {
    grid[y][x] = CellType.PATH;

    // Directions: North, East, South, West (2 cells away)
    const directions = [
      { dx: 0, dy: -2 },
      { dx: 2, dy: 0 },
      { dx: 0, dy: 2 },
      { dx: -2, dy: 0 }
    ];

    // Shuffle directions for randomness
    this.shuffleArray(directions);

    for (const { dx, dy } of directions) {
      const nx = x + dx;
      const ny = y + dy;

      // Check bounds and if cell is unvisited
      if (
        nx >= 0 &&
        nx < size &&
        ny >= 0 &&
        ny < size &&
        grid[ny][nx] === CellType.WALL
      ) {
        // Carve path between current and next cell
        grid[y + dy / 2][x + dx / 2] = CellType.PATH;
        this.recursiveBacktracker(grid, nx, ny, size);
      }
    }
  }

  /**
   * Add random openings to create loops and multiple paths
   * Higher complexity = more openings
   */
  private addOpenings(grid: CellType[][], size: number, complexity: number): void {
    const openingsCount = Math.floor(size * complexity * 2);
    let added = 0;
    let attempts = 0;
    const maxAttempts = size * size;

    while (added < openingsCount && attempts < maxAttempts) {
      const x = Math.floor(Math.random() * (size - 2)) + 1;
      const y = Math.floor(Math.random() * (size - 2)) + 1;

      if (grid[y][x] === CellType.WALL) {
        // Check if opening connects two paths
        let pathNeighbors = 0;
        if (grid[y - 1]?.[x] === CellType.PATH) pathNeighbors++;
        if (grid[y + 1]?.[x] === CellType.PATH) pathNeighbors++;
        if (grid[y]?.[x - 1] === CellType.PATH) pathNeighbors++;
        if (grid[y]?.[x + 1] === CellType.PATH) pathNeighbors++;

        if (pathNeighbors >= 2) {
          grid[y][x] = CellType.PATH;
          added++;
        }
      }
      attempts++;
    }
  }

  /**
   * Find the furthest reachable point from start using BFS
   */
  private findFurthestPoint(
    grid: CellType[][],
    start: Position,
    size: number
  ): Position {
    const visited = new Set<string>();
    const queue: Array<{ pos: Position; dist: number }> = [{ pos: start, dist: 0 }];
    let furthest = start;
    let maxDist = 0;

    while (queue.length > 0) {
      const { pos, dist } = queue.shift()!;
      const key = `${pos.x},${pos.y}`;

      if (visited.has(key)) continue;
      visited.add(key);

      if (dist > maxDist) {
        maxDist = dist;
        furthest = pos;
      }

      // Check all 4 directions
      const neighbors = [
        { x: pos.x, y: pos.y - 1 },
        { x: pos.x + 1, y: pos.y },
        { x: pos.x, y: pos.y + 1 },
        { x: pos.x - 1, y: pos.y }
      ];

      for (const next of neighbors) {
        if (
          next.x >= 0 &&
          next.x < size &&
          next.y >= 0 &&
          next.y < size &&
          grid[next.y][next.x] !== CellType.WALL &&
          !visited.has(`${next.x},${next.y}`)
        ) {
          queue.push({ pos: next, dist: dist + 1 });
        }
      }
    }

    return furthest;
  }

  /**
   * Add checkpoints along the optimal path
   */
  private addCheckpoints(
    grid: CellType[][],
    size: number,
    start: Position,
    goal: Position
  ): void {
    const path = this.findShortestPath(grid, start, goal, size);
    if (path.length < 5) return;

    // Add checkpoint at midpoint
    const midIndex = Math.floor(path.length / 2);
    const midPos = path[midIndex];
    if (grid[midPos.y][midPos.x] === CellType.PATH) {
      grid[midPos.y][midPos.x] = CellType.CHECKPOINT;
    }
  }

  /**
   * Add power-ups in strategic locations
   */
  private addPowerUps(grid: CellType[][], size: number): void {
    const powerUpCount = Math.floor(size / 3);
    let added = 0;
    let attempts = 0;

    while (added < powerUpCount && attempts < size * size) {
      const x = Math.floor(Math.random() * size);
      const y = Math.floor(Math.random() * size);

      if (grid[y][x] === CellType.PATH) {
        grid[y][x] = CellType.POWER_UP;
        added++;
      }
      attempts++;
    }
  }

  /**
   * Add traps in dead ends
   */
  private addTraps(grid: CellType[][], size: number): void {
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if (grid[y][x] === CellType.PATH) {
          // Check if it's a dead end (only 1 neighbor)
          let pathNeighbors = 0;
          if (grid[y - 1]?.[x] !== CellType.WALL) pathNeighbors++;
          if (grid[y + 1]?.[x] !== CellType.WALL) pathNeighbors++;
          if (grid[y]?.[x - 1] !== CellType.WALL) pathNeighbors++;
          if (grid[y]?.[x + 1] !== CellType.WALL) pathNeighbors++;

          if (pathNeighbors === 1 && Math.random() < 0.3) {
            grid[y][x] = CellType.TRAP;
          }
        }
      }
    }
  }

  /**
   * Find shortest path using BFS (for checkpoint placement)
   */
  private findShortestPath(
    grid: CellType[][],
    start: Position,
    goal: Position,
    size: number
  ): Position[] {
    const visited = new Set<string>();
    const queue: Array<{ pos: Position; path: Position[] }> = [
      { pos: start, path: [start] }
    ];

    while (queue.length > 0) {
      const { pos, path } = queue.shift()!;
      const key = `${pos.x},${pos.y}`;

      if (pos.x === goal.x && pos.y === goal.y) {
        return path;
      }

      if (visited.has(key)) continue;
      visited.add(key);

      const neighbors = [
        { x: pos.x, y: pos.y - 1 },
        { x: pos.x + 1, y: pos.y },
        { x: pos.x, y: pos.y + 1 },
        { x: pos.x - 1, y: pos.y }
      ];

      for (const next of neighbors) {
        if (
          next.x >= 0 &&
          next.x < size &&
          next.y >= 0 &&
          next.y < size &&
          grid[next.y][next.x] !== CellType.WALL &&
          !visited.has(`${next.x},${next.y}`)
        ) {
          queue.push({ pos: next, path: [...path, next] });
        }
      }
    }

    return [];
  }

  /**
   * Fisher-Yates shuffle algorithm
   */
  private shuffleArray<T>(array: T[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  /**
   * Recursive Backtracker with directional bias for more interesting mazes
   */
  private recursiveBacktrackerWithBias(
    grid: CellType[][],
    x: number,
    y: number,
    size: number
  ): void {
    grid[y][x] = CellType.PATH;

    // Directions with bias towards goal direction
    const directions = [
      { dx: 0, dy: -2, weight: 1 },
      { dx: 2, dy: 0, weight: 2 },
      { dx: 0, dy: 2, weight: 2 },
      { dx: -2, dy: 0, weight: 1 }
    ];

    // Weighted shuffle
    const weightedDirs = [];
    for (const dir of directions) {
      for (let i = 0; i < dir.weight; i++) {
        weightedDirs.push({ dx: dir.dx, dy: dir.dy });
      }
    }
    this.shuffleArray(weightedDirs);

    for (const { dx, dy } of weightedDirs) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx >= 0 &&
        nx < size &&
        ny >= 0 &&
        ny < size &&
        grid[ny][nx] === CellType.WALL
      ) {
        grid[y + dy / 2][x + dx / 2] = CellType.PATH;
        this.recursiveBacktrackerWithBias(grid, nx, ny, size);
      }
    }
  }

  /**
   * Add dynamic obstacles (moving walls concept for future enhancement)
   */
  private addDynamicObstacles(grid: CellType[][], size: number): void {
    const snapshot = grid.map(row => row.slice());
    // For now, add extra challenging wall patterns
    const patterns = Math.floor(size / 5);
    for (let i = 0; i < patterns; i++) {
      const x = Math.floor(Math.random() * (size - 2)) + 1;
      const y = Math.floor(Math.random() * (size - 2)) + 1;
      
      if (grid[y][x] === CellType.PATH) {
        // Create small wall clusters
        const cluster = [
          { dx: 0, dy: 0 },
          { dx: 1, dy: 0 },
          { dx: 0, dy: 1 }
        ];
        
        for (const { dx, dy } of cluster) {
          const nx = x + dx;
          const ny = y + dy;
          if (nx < size && ny < size && grid[ny][nx] === CellType.PATH) {
            if (Math.random() > 0.5) {
              grid[ny][nx] = CellType.WALL;
            }
          }
        }
      }
    }

    if (!this.pathExists(grid, size)) {
      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          grid[y][x] = snapshot[y][x];
        }
      }
    }
  }

  private findOtherPathCell(
    cells: CellType[][],
    size: number,
    startX: number,
    startY: number
  ): Position | null {
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if ((x !== startX || y !== startY) && cells[y][x] === CellType.PATH) {
          return { x, y };
        }
      }
    }
    return null;
  }

  private pathExists(grid: CellType[][], size: number): boolean {
    let start: Position | null = null;
    let goal: Position | null = null;
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if (grid[y][x] === CellType.START) start = { x, y };
        if (grid[y][x] === CellType.GOAL) goal = { x, y };
      }
    }
    if (!start || !goal) return false;

    const visited = new Set<string>();
    const queue: Position[] = [start];
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
        if (next.x < 0 || next.y < 0 || next.x >= size || next.y >= size) continue;
        if (grid[next.y][next.x] === CellType.WALL) continue;
        queue.push(next);
      }
    }
    return false;
  }
}
