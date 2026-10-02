export class AIService {
    constructor() {
        this.apiKey = null;
    }

    async generateLevel(difficulty) {
        // Simulate "thinking" delay
        await new Promise(r => setTimeout(r, 800));

        let size = 5;
        let complexity = 'low';

        switch (difficulty) {
            case 'easy': size = 5; complexity = 'low'; break;
            case 'medium': size = 7; complexity = 'med'; break;
            case 'hard': size = 9; complexity = 'high'; break;
            default: size = 5;
        }

        const maze = this.generateMaze(size, complexity);

        return {
            grid: maze.grid,
            hint: "Guide the robot to the star!",
            generatedPrompt: `Generated ${difficulty} maze (${size}x${size})`
        };
    }

    generateMaze(size, complexity) {
        // 1. Initialize Grid with Walls '#'
        let grid = Array(size).fill().map(() => Array(size).fill('#'));

        // 2. Recursive Backtracker to carve paths '.'
        // Start at 0,0 (top-left)
        const startX = 0;
        const startY = 0;
        grid[startY][startX] = 'S';

        // Helper to get neighbors (up, right, down, left) distance 2 away
        const dirs = [[0, -2], [2, 0], [0, 2], [-2, 0]];

        function carve(x, y) {
            grid[y][x] = '.';

            // Randomize directions
            const shuffledDirs = dirs.sort(() => Math.random() - 0.5);

            for (const [dx, dy] of shuffledDirs) {
                const nx = x + dx;
                const ny = y + dy;

                // Check bounds and if unvisited (represented by '#')
                if (nx >= 0 && nx < size && ny >= 0 && ny < size && grid[ny][nx] === '#') {
                    // Carve the wall between (x,y) and (nx,ny)
                    grid[y + dy / 2][x + dx / 2] = '.';
                    carve(nx, ny);
                }
            }
        }

        // Note: For odd sized grids, (0,0) works well for backtracker on a grid of cells.
        // If grid is 5x5, cells are at 0, 2, 4. Walls at 1, 3.
        carve(0, 0);

        // Restore S after carving
        grid[0][0] = 'S';

        // 3. Place Goal '*' at the furthest point or bottom-right
        // Simple approach: Bottom-Right corner is usually far in standard DFS
        // Ensure it's a valid path spot, if not, find closest open spot
        let goalX = size - 1;
        let goalY = size - 1;

        // If bottom right is a wall (possible in some generations), search backwards
        while (grid[goalY][goalX] === '#') {
            if (goalX > 0) goalX--;
            else { goalY--; goalX = size - 1; }
        }
        grid[goalY][goalX] = '*';

        // 4. Adjust for Complexity (Density)
        // Easy levels should have more open space (loops), removing dead ends
        if (complexity === 'low') {
            this.addRandomOpenings(grid, size, Math.floor(size * 1.5));
        } else if (complexity === 'med') {
            this.addRandomOpenings(grid, size, Math.floor(size * 0.5));
        }
        // Hard keeps strict tree structure (single solution) usually, 
        // but adding 1-2 loops can make it more interesting for logic.

        return { grid: grid.map(row => row.join('')) };
    }

    addRandomOpenings(grid, size, count) {
        let added = 0;
        let attempts = 0;
        while (added < count && attempts < 50) {
            const x = Math.floor(Math.random() * (size - 2)) + 1;
            const y = Math.floor(Math.random() * (size - 2)) + 1;

            if (grid[y][x] === '#') {
                // Check if it connects two existing paths
                let neighbors = 0;
                if (grid[y - 1][x] !== '#') neighbors++;
                if (grid[y + 1][x] !== '#') neighbors++;
                if (grid[y][x - 1] !== '#') neighbors++;
                if (grid[y][x + 1] !== '#') neighbors++;

                if (neighbors >= 2) {
                    grid[y][x] = '.';
                    added++;
                }
            }
            attempts++;
        }
    }
}

window.AIService = AIService;
