/**
 * UI Manager - Handles all DOM interactions and screen transitions
 */

import { ScreenType, PlayerState, ExecutionResult, LevelData } from './types';

export class UIManager {
  private screens: Map<ScreenType, HTMLElement>;
  private currentScreen: ScreenType = ScreenType.MENU;

  constructor() {
    this.screens = new Map();
    this.initializeScreens();
  }

  /**
   * Initialize screen references
   */
  private initializeScreens(): void {
    const screenIds: Record<ScreenType, string> = {
      [ScreenType.SPLASH]: 'screen-splash',
      [ScreenType.LOADING]: 'screen-loading',
      [ScreenType.TUTORIAL]: 'screen-tutorial',
      [ScreenType.MENU]: 'screen-menu',
      [ScreenType.GAME]: 'screen-game',
      [ScreenType.PAUSE]: 'screen-pause',
      [ScreenType.RESULT]: 'screen-result',
      [ScreenType.SETTINGS]: 'screen-settings',
      [ScreenType.PROGRESS]: 'screen-progress',
      [ScreenType.ACHIEVEMENTS]: 'screen-achievements'
    };

    for (const [type, id] of Object.entries(screenIds)) {
      const element = document.getElementById(id);
      if (element) {
        this.screens.set(type as ScreenType, element);
      }
    }
  }

  /**
   * Show a specific screen
   */
  public showScreen(screen: ScreenType): void {
    // Hide all screens
    this.screens.forEach(element => {
      element.classList.remove('active');
    });

    // Show target screen
    const targetScreen = this.screens.get(screen);
    if (targetScreen) {
      targetScreen.classList.add('active');
      this.currentScreen = screen;
    }
  }

  /**
   * Update level display
   */
  public updateLevelDisplay(levelNumber: number, difficulty: string): void {
    const levelDisplay = document.getElementById('level-display');
    if (levelDisplay) {
      levelDisplay.textContent = `${levelNumber} (${difficulty.toUpperCase()})`;
    }
  }

  /**
   * Update battery display
   */
  public updateBatteryDisplay(battery: number): void {
    const batteryDisplay = document.getElementById('battery-display');
    if (batteryDisplay) {
      batteryDisplay.textContent = Math.max(0, Math.floor(battery)).toString();
      
      // Color coding
      if (battery < 30) {
        batteryDisplay.style.color = '#ef4444';
      } else if (battery < 50) {
        batteryDisplay.style.color = '#f59e0b';
      } else {
        batteryDisplay.style.color = '#22c55e';
      }
    }
  }

  /**
   * Update timer display (for time attack mode)
   */
  public updateTimerDisplay(timeRemaining: number): void {
    const timerDisplay = document.getElementById('timer-display');
    const timerValue = document.getElementById('timer-value');
    
    if (timerDisplay && timerValue) {
      timerDisplay.style.display = 'flex';
      const minutes = Math.floor(timeRemaining / 60);
      const seconds = Math.floor(timeRemaining % 60);
      timerValue.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
      
      // Remove all classes first
      timerDisplay.classList.remove('warning', 'danger');
      
      // Color coding with classes
      if (timeRemaining < 10) {
        timerDisplay.classList.add('danger');
      } else if (timeRemaining < 30) {
        timerDisplay.classList.add('warning');
      }
    }
  }

  /**
   * Render maze grid
   */
  public renderMazeGrid(levelData: LevelData): void {
    const gameScreen = document.querySelector('.game-screen');
    if (!gameScreen) return;

    // Remove existing grid
    const existingGrid = gameScreen.querySelector('.level-grid');
    if (existingGrid) {
      existingGrid.remove();
    }

    const { grid } = levelData;
    const gridElement = document.createElement('div');
    gridElement.className = 'level-grid';

    // Calculate cell size based on grid dimensions
    let cellSize = 50;
    if (grid.height > 9) cellSize = 30;
    else if (grid.height > 7) cellSize = 35;
    else if (grid.height > 5) cellSize = 40;

    gridElement.style.display = 'grid';
    gridElement.style.gridTemplateColumns = `repeat(${grid.width}, ${cellSize}px)`;
    gridElement.style.gridTemplateRows = `repeat(${grid.height}, ${cellSize}px)`;
    gridElement.style.position = 'absolute';
    gridElement.style.top = '50%';
    gridElement.style.left = '50%';
    gridElement.style.transform = 'translate(-50%, -50%)';

    // Render cells
    for (let y = 0; y < grid.height; y++) {
      for (let x = 0; x < grid.width; x++) {
        const cell = grid.cells[y][x];
        const cellElement = document.createElement('div');
        cellElement.className = 'grid-cell';
        cellElement.style.width = `${cellSize}px`;
        cellElement.style.height = `${cellSize}px`;
        cellElement.dataset.x = x.toString();
        cellElement.dataset.y = y.toString();

        // Style based on cell type
        switch (cell) {
          case '#':
            cellElement.classList.add('wall');
            break;
          case 'S':
            cellElement.classList.add('start');
            cellElement.textContent = '🏁';
            break;
          case '*':
            cellElement.classList.add('goal');
            cellElement.textContent = '⭐';
            break;
          case 'C':
            cellElement.classList.add('checkpoint');
            cellElement.textContent = '🎯';
            break;
          case 'P':
            cellElement.classList.add('powerup');
            cellElement.textContent = '🔋';
            break;
          case 'T':
            cellElement.classList.add('trap');
            cellElement.textContent = '⚠️';
            break;
          default:
            cellElement.classList.add('path');
        }

        gridElement.appendChild(cellElement);
      }
    }

    gameScreen.appendChild(gridElement);
  }

  /**
   * Update robot position and rotation
   */
  public updateRobotPosition(state: PlayerState, gridSize: number, cellSize: number): void {
    const robot = document.getElementById('player-character');
    if (!robot) return;

    const px = (state.position.x + 0.5 - gridSize / 2) * cellSize;
    const py = (state.position.y + 0.5 - gridSize / 2) * cellSize;
    const size = Math.max(18, Math.floor(cellSize * 0.72));

    robot.style.width = `${size}px`;
    robot.style.height = `${size}px`;
    robot.style.fontSize = `${size}px`;
    robot.style.lineHeight = `${size}px`;
    robot.style.transform = `translate(calc(-50% + ${px}px), calc(-50% + ${py}px)) rotate(${state.direction}deg)`;
    robot.style.opacity = '1';
  }

  public updateMovesDisplay(moves: number, limit?: number): void {
    const el = document.getElementById('moves-display');
    if (!el) return;
    el.textContent = typeof limit === 'number' ? `${moves}/${limit}` : String(moves);
  }

  public updatePalette(allowed: string[]): void {
    const allowedSet = new Set(allowed);
    document.querySelectorAll('#block-palette .puzzle-piece').forEach((node) => {
      const el = node as HTMLElement;
      const type = el.dataset.type || '';
      el.style.display = allowedSet.has(type) ? '' : 'none';
    });
  }

  /**
   * Show result screen
   */
  public showResultScreen(result: ExecutionResult): void {
    const resultTitle = document.getElementById('result-title');
    const resultStars = document.getElementById('result-stars');
    const finalScore = document.getElementById('final-score');
    const movesUsed = document.getElementById('moves-used');
    const timeUsed = document.getElementById('time-used');

    if (resultTitle) {
      resultTitle.textContent = result.success ? 'Level Complete! 🎉' : 'Try Again';
    }

    if (resultStars) {
      resultStars.textContent = '⭐'.repeat(result.stars);
    }

    if (finalScore) {
      finalScore.textContent = Math.floor(result.finalBattery).toString();
    }

    if (movesUsed) {
      movesUsed.textContent = result.movesUsed.toString();
    }

    if (timeUsed) {
      timeUsed.textContent = result.timeUsed.toFixed(1);
    }

    const next = document.getElementById('btn-next-level');
    if (next) next.style.display = result.success ? '' : 'none';

    const feedbackTitle = document.getElementById('feedback-title');
    const feedbackMessage = document.getElementById('feedback-message');
    if (feedbackTitle) {
      feedbackTitle.textContent = result.success ? 'Excellent Work!' : 'Not yet';
    }
    if (feedbackMessage) {
      feedbackMessage.textContent = result.reason;
    }

    this.showScreen(ScreenType.RESULT);
  }

  /**
   * Log message to console
   */
  public logMessage(message: string): void {
    const consoleLog = document.querySelector('.console-log');
    if (!consoleLog) return;

    const p = document.createElement('p');
    p.textContent = `> ${message}`;
    consoleLog.insertBefore(p, consoleLog.firstChild);

    // Keep only last 10 messages
    while (consoleLog.children.length > 10) {
      consoleLog.removeChild(consoleLog.lastChild!);
    }
  }

  /**
   * Highlight executing block
   */
  public highlightBlock(blockElement: HTMLElement): void {
    blockElement.style.borderColor = 'white';
    blockElement.style.transform = 'scale(1.05)';
  }

  /**
   * Remove block highlight
   */
  public unhighlightBlock(blockElement: HTMLElement): void {
    blockElement.style.borderColor = '';
    blockElement.style.transform = '';
  }

  /**
   * Show loading screen with progress
   */
  public showLoadingScreen(progress: number, tip?: string): void {
    this.showScreen(ScreenType.LOADING);
    
    const progressBar = document.getElementById('loading-progress');
    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }

    if (tip) {
      const tipElement = document.getElementById('loading-tip');
      if (tipElement) {
        tipElement.textContent = tip;
      }
    }
  }

  /**
   * Show toast notification
   */
  public showToast(message: string, type: 'success' | 'error' | 'info' = 'info'): void {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    // Animate in
    setTimeout(() => toast.classList.add('show'), 10);

    // Remove after 3 seconds
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  /**
   * Get current screen
   */
  public getCurrentScreen(): ScreenType {
    return this.currentScreen;
  }
}
