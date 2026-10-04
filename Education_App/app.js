document.addEventListener('DOMContentLoaded', () => {
    // --- UI Elements ---
    const screens = {
        menu: document.getElementById('screen-menu'),
        game: document.getElementById('screen-game'),
        result: document.getElementById('screen-result')
    };

    // Buttons
    // const btnPlay = document.getElementById('btn-play'); // Removed
    const btnEasy = document.getElementById('btn-easy');
    const btnMedium = document.getElementById('btn-medium');
    const btnHard = document.getElementById('btn-hard');

    const btnNext = document.getElementById('btn-next-level');
    const btnRetry = document.getElementById('btn-retry');
    const btnMenuReturn = document.getElementById('btn-menu-return');
    const btnHome = document.getElementById('btn-back-menu');
    const aiBtn = document.getElementById('ai-generate-btn');

    // Game Elements
    const levelDisplay = document.getElementById('level-display');
    const batteryDisplay = document.getElementById('battery-display');
    const finalScoreDisplay = document.getElementById('final-score');
    const resultStars = document.getElementById('result-stars');
    const resultTitle = document.getElementById('result-title');

    // Dnd Elements
    const pieces = document.querySelectorAll('.puzzle-piece');
    const canvas = document.getElementById('canvas-area');
    const player = document.getElementById('player-character');
    const gameScreen = document.querySelector('.game-screen');
    const runBtn = document.getElementById('run-btn');
    const resetBtn = document.getElementById('reset-btn');
    const consoleLog = document.querySelector('.console-log');

    // --- State ---
    let gameState = {
        level: 1,
        difficulty: 'easy',
        battery: 100,
        currentStartBattery: 100,
        grid: null,
        isExecuting: false,
        currentMode: 'maze',
        score: 0,
        streak: 7
    };
    // --- Game Mode Selection System ---
    // Game Mode Elements
    const modeButtons = document.querySelectorAll('.menu-btn.game-mode');
    const gameScreens = {
        maze: document.getElementById('maze-game'),
        pattern: document.getElementById('pattern-game'),
        deduction: document.getElementById('deduction-game'),
        spatial: document.getElementById('spatial-game')
    };
    const modeDisplay = document.getElementById('mode-display');

    // --- Game Mode Selection ---
    modeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            modeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            gameState.currentMode = btn.dataset.mode;
            const modeNames = { maze: 'Maze', pattern: 'Pattern', deduction: 'Deduction', spatial: 'Spatial' };
            modeDisplay.textContent = modeNames[gameState.currentMode] || 'Maze';
            Object.entries(gameScreens).forEach(([mode, screen]) => {
                if (screen) screen.classList.toggle('active', mode === gameState.currentMode);
            });
            if (gameState.currentMode === 'pattern') initPatternGame();
            else if (gameState.currentMode === 'deduction') initDeductionGame();
            else if (gameState.currentMode === 'spatial') initSpatialGame();
        });
    });

    // --- Pattern Recognition Game ---
    const patternShapes = ['▲', '●', '■', '◆', '★', '⬟'];
    function initPatternGame() {
        const grid = document.getElementById('pattern-grid');
        const options = document.getElementById('pattern-options');
        if (!grid || !options) return;
        grid.innerHTML = ''; options.innerHTML = '';
        const missingIndex = Math.floor(Math.random() * 9);
        const baseShape = patternShapes[Math.floor(Math.random() * patternShapes.length)];
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.className = 'pattern-cell';
            if (i === missingIndex) { cell.textContent = '?'; cell.dataset.index = i; }
            else { cell.textContent = rotateShape(baseShape, i % 3); }
            grid.appendChild(cell);
        }
        const correctAnswer = rotateShape(baseShape, missingIndex % 3);
        const answers = [correctAnswer];
        while (answers.length < 4) {
            const wrong = patternShapes[Math.floor(Math.random() * patternShapes.length)];
            if (!answers.includes(wrong)) answers.push(wrong);
        }
        answers.sort(() => Math.random() - 0.5);
        answers.forEach(answer => {
            const opt = document.createElement('div');
            opt.className = 'pattern-option';
            opt.textContent = answer;
            opt.addEventListener('click', () => checkPatternAnswer(answer, correctAnswer));
            options.appendChild(opt);
        });
    }
    function rotateShape(shape, rotations) {
        const map = { '▲': ['▲', '▶', '▼', '◀'], '■': ['■'], '◆': ['◆', '▼', '◀', '▲'], '★': ['★'], '⬟': ['⬟'], '●': ['●'] };
        const shapes = map[shape] || [shape];
        return shapes[rotations % shapes.length];
    }
    function checkPatternAnswer(selected, correct) {
        if (selected === correct) {
            gameState.score += 10;
            showEducationalFeedback(true, 'Pattern Master!', 'You identified the pattern correctly!', 'Pattern recognition is a key skill in logical thinking.');
            setTimeout(() => startLevel(gameState.level + 1), 2000);
        } else {
            showEducationalFeedback(false, 'Not Quite!', 'Look closer at how the shapes rotate.', 'Tip: Notice rotation changes from left to right.');
        }
    }

    // --- Deductive Logic Game ---
    function initDeductionGame() {
        const cluesEl = document.getElementById('deduction-clues');
        const gridEl = document.getElementById('deduction-grid');
        if (!cluesEl || !gridEl) return;
        cluesEl.innerHTML = ''; gridEl.innerHTML = '';
        const clues = ['The person in the Red house has a Dog.', 'The person in the Blue house does not have a Dog.', 'The person with a Cat lives in the Blue house.'];
        clues.forEach(clue => { const c = document.createElement('div'); c.className = 'deduction-clue'; c.textContent = clue; cluesEl.appendChild(c); });
        const rows = [
            { label: 'Dog', cells: ['❌', '❌', '✓'] },
            { label: 'Cat', cells: ['❌', '✓', '❌'] },
            { label: 'Bird', cells: ['❌', '❌', '✓'] }
        ];
        rows.forEach(row => {
            const rowEl = document.createElement('div');
            rowEl.className = 'deduction-row';
            const label = document.createElement('div'); label.className = 'deduction-label'; label.textContent = row.label;
            rowEl.appendChild(label);
            row.cells.forEach((cell) => {
                const cellEl = document.createElement('div');
                cellEl.className = 'deduction-cell';
                cellEl.textContent = cell;
                if (cell === '✓') cellEl.classList.add('yes'); else cellEl.classList.add('no');
                cellEl.addEventListener('click', () => { cellEl.classList.toggle('yes'); cellEl.classList.toggle('no'); cellEl.textContent = cellEl.classList.contains('yes') ? '✓' : '❌'; });
                rowEl.appendChild(cellEl);
            });
            gridEl.appendChild(rowEl);
        });
    }

    // --- Spatial Reasoning Game ---
    function initSpatialGame() {
        const shape1 = document.getElementById('spatial-shape-1');
        const shape2 = document.getElementById('spatial-shape-2');
        const shape3 = document.getElementById('spatial-shape-3');
        const options = document.getElementById('spatial-options');
        if (!shape1 || !options) return;
        options.innerHTML = '';
        const shapes = ['▲', '■', '◆', '●'];
        const baseShape = shapes[Math.floor(Math.random() * shapes.length)];
        const rotationStep = Math.floor(Math.random() * 3) + 1;
        shape1.textContent = rotateShapeSimple(baseShape, 0);
        shape2.textContent = rotateShapeSimple(baseShape, rotationStep);
        shape3.textContent = rotateShapeSimple(baseShape, rotationStep * 2);
        const correctAnswer = rotateShapeSimple(baseShape, (rotationStep * 3) % 4);
        const answers = [correctAnswer];
        while (answers.length < 4) {
            const wrong = rotateShapeSimple(baseShape, Math.floor(Math.random() * 4));
            if (!answers.includes(wrong)) answers.push(wrong);
        }
        answers.sort(() => Math.random() - 0.5);
        answers.forEach(answer => {
            const opt = document.createElement('div');
            opt.className = 'spatial-option';
            opt.textContent = answer;
            opt.addEventListener('click', () => checkSpatialAnswer(answer, correctAnswer));
            options.appendChild(opt);
        });
    }
    function rotateShapeSimple(shape, rotations) {
        const map = { '▲': ['▲', '▶', '▼', '◀'], '■': ['■'], '◆': ['◆', '▼', '◀', '▲'], '●': ['●'] };
        const shapes = map[shape] || [shape];
        return shapes[rotations % shapes.length];
    }
    function checkSpatialAnswer(selected, correct) {
        if (selected === correct) {
            gameState.score += 10;
            showEducationalFeedback(true, 'Spatial Genius!', 'You understand spatial transformations!', 'Spatial reasoning helps in architecture and engineering.');
            setTimeout(() => startLevel(gameState.level + 1), 2000);
        } else {
            showEducationalFeedback(false, 'Keep Trying!', 'Count the 90° rotations between shapes.', 'Each arrow = 90° clockwise rotation.');
        }
    }

    // --- Educational Feedback ---
    function showEducationalFeedback(success, title, message, tip) {
        const feedbackEl = document.getElementById('educational-feedback');
        if (!feedbackEl) return;
        document.getElementById('feedback-icon').textContent = success ? '🎉' : '💪';
        document.getElementById('feedback-title').textContent = title;
        document.getElementById('feedback-message').textContent = message;
        document.getElementById('tip-content').textContent = tip;
    }

    let aiService = new window.AIService();
    let draggedItem = null;
    let isCloning = false;

    // --- Navigation ---
    function showScreen(name) {
        Object.values(screens).forEach(s => s.classList.remove('active'));
        screens[name].classList.add('active');
    }

    // Difficulty Selectors
    btnEasy.addEventListener('click', () => startGame('easy'));
    btnMedium.addEventListener('click', () => startGame('medium'));
    btnHard.addEventListener('click', () => startGame('hard'));

    function startGame(diff) {
        gameState.difficulty = diff;
        startLevel(1);
        showScreen('game');
    }

    btnHome.addEventListener('click', () => showScreen('menu'));
    btnMenuReturn.addEventListener('click', () => showScreen('menu'));

    btnRetry.addEventListener('click', () => {
        resetWorkspace();
        gameState.battery = gameState.currentStartBattery; // Reset battery
        updateUI();
        showScreen('game');
    });

    btnNext.addEventListener('click', () => {
        startLevel(gameState.level + 1);
        showScreen('game');
    });

    // --- Level Management ---
    async function startLevel(lvlNum) {
        gameState.level = lvlNum;
        gameState.battery = 100;
        gameState.currentStartBattery = 100;
        levelDisplay.textContent = `${lvlNum} (${gameState.difficulty.toUpperCase()})`;
        updateUI();

        // Load Level
        try {
            const levelData = await aiService.generateLevel(gameState.difficulty);
            loadLevel(levelData);
        } catch (e) {
            log('Error loading level');
        }
    }

    function updateUI() {
        batteryDisplay.textContent = Math.max(0, gameState.battery);
        if (gameState.battery < 30) batteryDisplay.style.color = '#ef4444';
        else batteryDisplay.style.color = '#22c55e';
    }

    function loadLevel(level) {
        gameState.grid = level;

        const existingGrid = document.querySelector('.level-grid');
        if (existingGrid) existingGrid.remove();

        const gridEl = document.createElement('div');
        gridEl.className = 'level-grid';

        // Determine grid size from data
        const rows = level.grid.length; // e.g. 5, 7, 9
        const cols = level.grid[0].length;

        // Responsive Scaling
        // We want grid to fit in ~300px-400px area.
        // 5x5 -> 50px cells (250px)
        // 9x9 -> 35px cells (315px)
        let cellSize = 50;
        if (rows > 7) cellSize = 35;
        else if (rows > 5) cellSize = 40;

        gameState.cellSize = cellSize; // Store for player rendering

        gridEl.style.display = 'grid';
        gridEl.style.gridTemplateColumns = `repeat(${cols}, ${cellSize}px)`;
        gridEl.style.gridTemplateRows = `repeat(${rows}, ${cellSize}px)`;
        gridEl.style.position = 'absolute';
        gridEl.style.top = '50%';
        gridEl.style.left = '50%';
        gridEl.style.transform = 'translate(-50%, -50%)';

        level.grid.forEach((rowStr, rowIndex) => {
            rowStr.split('').forEach((cell, colIndex) => {
                const cellEl = document.createElement('div');
                cellEl.style.width = `${cellSize}px`;
                cellEl.style.height = `${cellSize}px`;
                cellEl.style.boxSizing = 'border-box';
                cellEl.style.border = '1px solid rgba(0,0,0,0.1)';

                if (cell === '#') {
                    cellEl.style.background = '#334155';
                } else if (cell === '*') {
                    cellEl.textContent = '⭐';
                    cellEl.style.display = 'flex';
                    cellEl.style.alignItems = 'center';
                    cellEl.style.justifyContent = 'center';
                    cellEl.style.fontSize = `${cellSize / 2}px`;
                } else if (cell === 'S') {
                    setTimeout(() => resetPlayerToLikelyGrid(rowIndex, colIndex), 100);
                }

                gridEl.appendChild(cellEl);
            });
        });

        gameScreen.prepend(gridEl);
    }

    // --- Drag & Drop ---
    pieces.forEach(p => setupDragEvents(p));

    function setupDragEvents(piece) {
        piece.addEventListener('dragstart', (e) => {
            draggedItem = piece;
            isCloning = piece.parentElement.classList.contains('pieces-list');
            e.stopPropagation();
            if (isCloning) {
                e.dataTransfer.effectAllowed = 'copy';
            } else {
                e.dataTransfer.effectAllowed = 'move';
                piece.classList.add('dragging');
            }
        });

        piece.addEventListener('dragend', (e) => {
            e.stopPropagation();
            if (draggedItem) draggedItem.classList.remove('dragging');
            draggedItem = null;
            isCloning = false;
        });
    }

    function enableDropZone(element) {
        element.addEventListener('dragover', (e) => {
            e.preventDefault(); e.stopPropagation();
        });

        element.addEventListener('drop', (e) => {
            e.preventDefault(); e.stopPropagation();
            if (!draggedItem) return;

            let pieceToDrop = draggedItem;

            if (isCloning) {
                pieceToDrop = draggedItem.cloneNode(true);
                pieceToDrop.classList.remove('dragging');
                pieceToDrop.id = 'piece-' + Date.now();

                if (pieceToDrop.dataset.type === 'loop' || pieceToDrop.dataset.type.startsWith('if')) {
                    if (!pieceToDrop.querySelector('.nested-area')) {
                        pieceToDrop.classList.add('loop-container');
                        const header = document.createElement('div');
                        header.className = 'piece-header';
                        while (pieceToDrop.firstChild) header.appendChild(pieceToDrop.firstChild);
                        pieceToDrop.appendChild(header);

                        const nested = document.createElement('div');
                        nested.className = 'nested-area';
                        pieceToDrop.appendChild(nested);
                        enableDropZone(nested);
                    }
                }
                setupDragEvents(pieceToDrop);
            }

            const afterElement = getDragAfterElement(element, e.clientY);
            if (afterElement == null) element.appendChild(pieceToDrop);
            else element.insertBefore(pieceToDrop, afterElement);

            pieceToDrop.animate([{ transform: 'scale(1.05)' }, { transform: 'scale(1)' }], { duration: 200 });
        });
    }

    enableDropZone(canvas);

    function getDragAfterElement(container, y) {
        const draggableElements = [...container.children].filter(child =>
            child.classList.contains('puzzle-piece') && !child.classList.contains('dragging')
        );
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) return { offset: offset, element: child };
            else return closest;
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }

    // --- Gameplay Engine ---
    const COST_MOVE = 1;
    const COST_JUMP = 3;

    let playerState = { gridX: 0, gridY: 0, rot: 0 };

    async function executeBlock(element, context) {
        if (gameState.battery <= 0) return;

        const action = element.dataset.type;
        const visualTarget = element.querySelector('.piece-header') || element;

        visualTarget.style.borderColor = 'white';
        visualTarget.style.transform = 'scale(1.05)';

        await new Promise(r => setTimeout(r, 500));

        let stepX = 0; let stepY = 0;

        const getDir = (rot) => {
            const r = (rot % 360 + 360) % 360;
            if (r === 0) return [1, 0];
            if (r === 90) return [0, 1];
            if (r === 180) return [-1, 0];
            return [0, -1];
        };

        const [dx, dy] = getDir(context.rot);

        switch (action) {
            case 'move-forward':
                log('Step');
                gameState.battery -= COST_MOVE;
                context.gridX += dx;
                context.gridY += dy;
                break;

            case 'jump':
                log('JUMP!');
                gameState.battery -= COST_JUMP;
                context.gridX += (dx * 2);
                context.gridY += (dy * 2);
                player.animate([
                    { transform: player.style.transform + ' scale(1)' },
                    { transform: player.style.transform + ' scale(1.5)', offset: 0.5 },
                    { transform: player.style.transform + ' scale(1)' }
                ], { duration: 400 });
                break;

            case 'turn-left': context.rot -= 90; break;
            case 'turn-right': context.rot += 90; break;

            case 'loop':
                const nested = element.querySelector('.nested-area');
                if (nested) {
                    const children = Array.from(nested.children);
                    for (let i = 0; i < 3; i++) {
                        for (const child of children) {
                            if (child.classList.contains('puzzle-piece')) await executeBlock(child, context);
                            if (gameState.battery <= 0) break;
                        }
                        if (gameState.battery <= 0) break;
                    }
                }
                break;

            case 'if-wall':
            case 'if-gem':
                const isWall = action === 'if-wall';
                const targetX = context.gridX + dx;
                const targetY = context.gridY + dy;
                const cell = getCell(targetX, targetY);
                const match = isWall ? (cell === '#') : (cell === '*');
                log(`Check: ${match}`);

                if (match) {
                    const nestedIn = element.querySelector('.nested-area');
                    if (nestedIn) {
                        const children = Array.from(nestedIn.children);
                        for (const child of children) {
                            if (child.classList.contains('puzzle-piece')) await executeBlock(child, context);
                            if (gameState.battery <= 0) break;
                        }
                    }
                }
                break;
        }

        updateUI();
        updatePlayerVisual(context);
        const result = checkGameState(context);

        visualTarget.style.borderColor = '';
        visualTarget.style.transform = '';

        return result;
    }

    function getCell(x, y) {
        if (!gameState.grid) return null;
        if (!gameState.grid.grid[y]) return '#'; // Row undefined
        if (!gameState.grid.grid[y][x]) return '#'; // Col undefined
        return gameState.grid.grid[y][x];
    }

    function checkGameState(state) {
        if (gameState.battery <= 0) {
            endGame(false, "Battery Depleted!");
            return true;
        }

        const cell = getCell(state.gridX, state.gridY);

        if (cell === '#') {
            endGame(false, "Crashed into Wall!");
            return true;
        } else if (cell === '*') {
            endGame(true, "Level Complete!");
            return true;
        }
        return false;
    }

    function endGame(win, msg) {
        gameState.isExecuting = false;
        log(msg);

        if (win) {
            setTimeout(() => {
                showResult(true);
            }, 1000);
        } else {
            player.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 500 });
        }
    }

    function showResult(win) {
        resultTitle.textContent = win ? "Level Complete!" : "Try Again";
        finalScoreDisplay.textContent = gameState.battery;
        let stars = "⭐";
        if (gameState.battery > 70) stars = "⭐⭐";
        if (gameState.battery > 90) stars = "⭐⭐⭐";
        resultStars.textContent = stars;
        showScreen('result');
    }

    function resetPlayerToLikelyGrid(row, col) {
        playerState = { gridX: col, gridY: row, rot: 0 };
        updatePlayerVisual(playerState);
        player.style.opacity = 1;
    }

    function updatePlayerVisual(state) {
        const cellSize = gameState.cellSize || 50;

        // Grid centering logic based on cellSize
        // Grid width = cols * cellSize
        // Center is (cols * cellSize) / 2
        // We know top left is at -Width/2, -Height/2

        const cols = gameState.grid.grid[0].length;
        const rows = gameState.grid.grid.length;

        const startX = -(cols * cellSize) / 2;
        const startY = -(rows * cellSize) / 2;

        const x = startX + (state.gridX * cellSize) + (cellSize / 2) - 20; // -20 for center offset
        const y = startY + (state.gridY * cellSize) + (cellSize / 2) - 25;

        // Simpler: Just rely on (gridX - centerCell) * cellSize
        const centerCol = Math.floor(cols / 2);
        const centerRow = Math.floor(rows / 2);

        const px = (state.gridX - centerCol) * cellSize;
        const py = (state.gridY - centerRow) * cellSize;

        // This simple math works if grid is odd. For even 8x8, center is 4.

        player.style.transform = `translate(${px}px, ${py}px) rotate(${state.rot}deg)`;
    }

    function resetWorkspace() {
        const piecesToRemove = canvas.querySelectorAll('.puzzle-piece:not(#start-node)');
        piecesToRemove.forEach(p => p.remove());
        log('Workspace Reset');
    }

    function log(msg) {
        const p = document.createElement('p');
        p.textContent = `> ${msg}`;
        consoleLog.prepend(p);
    }

    runBtn.addEventListener('click', async () => {
        if (gameState.isExecuting) return;
        gameState.isExecuting = true;

        const level = gameState.grid;
        if (level) {
            level.grid.forEach((row, r) => {
                row.split('').forEach((c, col) => {
                    if (c === 'S') resetPlayerToLikelyGrid(r, col);
                });
            });
        }
        gameState.battery = gameState.currentStartBattery;
        updateUI();

        const topLevelPieces = Array.from(canvas.children).filter(el =>
            el.classList.contains('puzzle-piece') && el.id !== 'start-node'
        );

        if (topLevelPieces.length === 0) {
            log('No code!');
            gameState.isExecuting = false;
            return;
        }

        const context = { ...playerState };
        for (const piece of topLevelPieces) {
            if (!gameState.isExecuting) break;
            const stop = await executeBlock(piece, context);
            if (stop) break;
        }

        if (gameState.isExecuting) {
            log('Program finished.');
            gameState.isExecuting = false;
        }
    });

    resetBtn.addEventListener('click', resetWorkspace);

    aiBtn.addEventListener('click', () => startLevel(gameState.level));
});


