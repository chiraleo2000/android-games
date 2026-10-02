/**
 * Main Application Controller
 * Coordinates all game systems and handles user interactions
 */

import { GameEngine } from './GameEngine';
import { LevelManager } from './LevelManager';
import { UIManager } from './UIManager';
import { BlockWorkspace } from './BlockWorkspace';
import { SaveManager } from './SaveManager';
import { SoundPlayer } from './Sound';
import { ACHIEVEMENTS } from './achievements';
import { LEGAL_LINKS } from './legal';
import { Block, BlockType, ChallengeMode, Difficulty, ExecutionResult, ScreenType } from './types';

const TRACKED_DIFFICULTIES: Difficulty[] = [
  Difficulty.EASY,
  Difficulty.MEDIUM,
  Difficulty.HARD,
  Difficulty.EXPERT,
  Difficulty.MASTER
];

export class App {
  private readonly gameEngine: GameEngine;
  private readonly levelManager: LevelManager;
  private readonly uiManager: UIManager;
  private blockWorkspace: BlockWorkspace | null = null;
  private readonly saveManager: SaveManager;
  private readonly sound: SoundPlayer;
  private currentDifficulty: Difficulty = Difficulty.EASY;
  private currentChallengeMode: ChallengeMode = ChallengeMode.NORMAL;
  private timerInterval: number | null = null;
  private startTime: number = 0;
  private runLock = false;
  private outcomeShown = false;

  constructor() {
    this.gameEngine = new GameEngine();
    this.levelManager = new LevelManager();
    this.uiManager = new UIManager();
    this.saveManager = new SaveManager();
    this.sound = new SoundPlayer();
  }

  public async initialize(): Promise<void> {
    const saveData = this.saveManager.loadSaveData();
    this.sound.setEnabled(saveData.settings.soundEnabled);
    this.applyLegalLinks();
    this.uiManager.showScreen(ScreenType.SPLASH);
    await this.delay(1500);

    if (!saveData.tutorialCompleted) {
      this.uiManager.showScreen(ScreenType.TUTORIAL);
    } else {
      this.showMainMenu();
    }

    this.setupEventListeners();
  }

  private showMainMenu(): void {
    this.refreshMenuSummary();
    this.uiManager.showScreen(ScreenType.MENU);
  }

  public async startGame(difficulty: Difficulty, challengeMode: ChallengeMode = ChallengeMode.NORMAL): Promise<void> {
    this.currentDifficulty = difficulty;
    this.currentChallengeMode = challengeMode;
    this.gameEngine.stop();
    this.stopTimer();
    this.runLock = false;
    this.outcomeShown = false;

    this.uiManager.showLoadingScreen(0, 'Generating maze...');
    await this.delay(40);
    this.uiManager.showLoadingScreen(25);
    await this.delay(40);
    this.uiManager.showLoadingScreen(50);
    await this.delay(40);
    this.uiManager.showLoadingScreen(75);
    await this.delay(40);
    this.uiManager.showLoadingScreen(100);
    await this.delay(40);

    const levelData = this.levelManager.generateLevel(
      this.levelManager.getCurrentLevel(),
      difficulty,
      challengeMode
    );
    this.gameEngine.loadLevel(levelData);

    const gridSize = levelData.grid.width;
    const cellSize = this.calculateCellSize(gridSize);
    this.uiManager.updateLevelDisplay(levelData.levelNumber, difficulty);
    this.uiManager.updateBatteryDisplay(100);
    this.uiManager.updateMovesDisplay(0, levelData.moveLimit);
    this.uiManager.renderMazeGrid(levelData);
    this.uiManager.updateRobotPosition(this.gameEngine.getState().playerState, gridSize, cellSize);
    this.uiManager.updatePalette(this.levelManager.getAllowedBlocks(difficulty, challengeMode));

    if (!this.blockWorkspace) {
      this.blockWorkspace = new BlockWorkspace('canvas-area');
    } else {
      this.blockWorkspace.clear();
    }

    this.uiManager.showScreen(ScreenType.GAME);
    this.uiManager.logMessage(levelData.hint);
    if (levelData.timeLimit) {
      this.uiManager.logMessage(`Time limit: ${levelData.timeLimit}s`);
      this.startTimer(levelData.timeLimit);
    }
    if (levelData.moveLimit) {
      this.uiManager.logMessage(`Move limit: ${levelData.moveLimit}`);
    }
  }

  public async executeProgram(): Promise<void> {
    if (this.runLock) return;
    if (!this.blockWorkspace) {
      this.uiManager.showToast('Workspace not initialized', 'error');
      return;
    }

    const blocks = this.blockWorkspace.parseBlocks();
    if (blocks.length === 0) {
      this.uiManager.showToast('Add Move, Turn, Jump, Loop, or If, then press Run.', 'error');
      return;
    }

    if (this.currentChallengeMode === ChallengeMode.NO_LOOPS && this.programUsesLoop(blocks)) {
      this.uiManager.showToast('This challenge does not allow loops.', 'error');
      return;
    }

    this.runLock = true;
    this.outcomeShown = false;
    this.setRunEnabled(false);
    this.sound.playRun();
    this.uiManager.logMessage('Running...');

    const levelData = this.gameEngine.getState().levelData;
    const gridSize = levelData?.grid.width || 5;
    const cellSize = this.calculateCellSize(gridSize);
    this.gameEngine.resetLevel();
    const startState = this.gameEngine.getState().playerState;
    this.uiManager.updateBatteryDisplay(startState.battery);
    this.uiManager.updateMovesDisplay(0, levelData?.moveLimit);
    this.uiManager.updateRobotPosition(startState, gridSize, cellSize);

    try {
      await this.gameEngine.executeProgram(
        blocks,
        (state) => {
          this.uiManager.updateBatteryDisplay(state.battery);
          this.uiManager.updateMovesDisplay(state.movesCount, levelData?.moveLimit);
          this.uiManager.updateRobotPosition(state, gridSize, cellSize);
        },
        (result) => {
          this.finishRun(result, blocks);
        }
      );
    } catch (error) {
      this.uiManager.showToast('Could not run the program', 'error');
      window.showGameError?.(error);
    } finally {
      this.runLock = false;
      this.setRunEnabled(true);
    }
  }

  public resetLevel(): void {
    this.gameEngine.stop();
    this.runLock = false;
    this.outcomeShown = false;
    this.setRunEnabled(true);
    this.stopTimer();
    this.gameEngine.resetLevel();
    this.uiManager.updateBatteryDisplay(100);

    const levelData = this.gameEngine.getState().levelData;
    if (levelData) {
      const gridSize = levelData.grid.width;
      const cellSize = this.calculateCellSize(gridSize);
      this.uiManager.updateRobotPosition(this.gameEngine.getState().playerState, gridSize, cellSize);
      this.uiManager.updateMovesDisplay(0, levelData.moveLimit);
      if (levelData.timeLimit) this.startTimer(levelData.timeLimit);
    }
    this.uiManager.logMessage('Robot reset. Your blocks are still here.');
  }

  public async nextLevel(): Promise<void> {
    const nextLevelNum = this.levelManager.getCurrentLevel() + 1;
    this.levelManager.setCurrentLevel(nextLevelNum);
    await this.startGame(this.currentDifficulty, this.currentChallengeMode);
  }

  private finishRun(result: ExecutionResult, blocks: Block[]): void {
    if (this.outcomeShown) return;
    this.outcomeShown = true;
    this.stopTimer();
    this.gameEngine.stop();
    this.setRunEnabled(true);
    this.uiManager.logMessage(result.reason);
    this.uiManager.showResultScreen(result);
    if (result.success) {
      this.sound.playWin();
      this.saveProgress(result, blocks);
    } else {
      this.sound.playLose();
    }
  }

  private saveProgress(result: ExecutionResult, blocks: Block[]): void {
    const currentLevel = this.levelManager.getCurrentLevel();
    this.saveManager.updateLevelProgress(this.currentDifficulty, currentLevel, result);
    this.checkAchievements(result, blocks);
    this.refreshMenuSummary();
  }

  private checkAchievements(result: ExecutionResult, blocks: Block[]): void {
    const level = this.levelManager.getCurrentLevel();
    if (level === 1 && result.success && this.saveManager.unlockAchievement('first-steps')) {
      this.uiManager.showToast('Achievement: First Steps', 'success');
    }
    if (result.finalBattery >= 95 && result.success && this.saveManager.unlockAchievement('battery-saver')) {
      this.uiManager.showToast('Achievement: Battery Saver', 'success');
    }
    if (result.stars === 3) {
      const totalStars = this.saveManager.getTotalStars();
      if (totalStars >= 60 && this.saveManager.unlockAchievement('efficiency-expert')) {
        this.uiManager.showToast('Achievement: Efficiency Expert', 'success');
      }
    }
    if (result.success && this.programUsesLoop(blocks) && this.saveManager.unlockAchievement('loop-learner')) {
      this.uiManager.showToast('Achievement: Loop Learner', 'success');
    }
    if (result.success && level >= 5 && this.saveManager.unlockAchievement('persistent')) {
      this.uiManager.showToast('Achievement: Persistent', 'success');
    }
  }

  private programUsesLoop(blocks: Block[]): boolean {
    return blocks.some((block) =>
      block.type === BlockType.LOOP ||
      block.type === BlockType.WHILE_LOOP ||
      (block.nestedBlocks ? this.programUsesLoop(block.nestedBlocks) : false)
    );
  }

  private setupEventListeners(): void {
    const start = (difficulty: Difficulty) => {
      void this.startGame(difficulty, this.currentChallengeMode).catch((error) => window.showGameError?.(error));
    };

    document.getElementById('btn-easy')?.addEventListener('click', () => start(Difficulty.EASY));
    document.getElementById('btn-medium')?.addEventListener('click', () => start(Difficulty.MEDIUM));
    document.getElementById('btn-hard')?.addEventListener('click', () => start(Difficulty.HARD));
    document.getElementById('btn-expert')?.addEventListener('click', () => start(Difficulty.EXPERT));
    document.getElementById('btn-master')?.addEventListener('click', () => start(Difficulty.MASTER));

    document.getElementById('btn-normal')?.addEventListener('click', () => {
      this.currentChallengeMode = ChallengeMode.NORMAL;
      this.updateChallengeButtonStates();
    });
    document.getElementById('btn-time-attack')?.addEventListener('click', () => {
      this.currentChallengeMode = ChallengeMode.TIME_ATTACK;
      this.updateChallengeButtonStates();
    });
    document.getElementById('btn-minimal-moves')?.addEventListener('click', () => {
      this.currentChallengeMode = ChallengeMode.MINIMAL_MOVES;
      this.updateChallengeButtonStates();
    });

    document.querySelectorAll('.menu-btn.game-mode').forEach((button) => {
      button.addEventListener('click', () => {
        const mode = (button as HTMLElement).dataset.mode;
        document.querySelectorAll('.menu-btn.game-mode').forEach((el) => el.classList.remove('active'));
        button.classList.add('active');
        if (mode && mode !== 'maze') {
          this.uiManager.showToast('Maze Coding is the playable mode. Pick a difficulty to start.', 'info');
        }
      });
    });

    document.getElementById('btn-back-menu')?.addEventListener('click', () => {
      this.gameEngine.stop();
      this.runLock = false;
      this.stopTimer();
      this.showMainMenu();
    });
    document.getElementById('btn-menu-return')?.addEventListener('click', () => {
      this.stopTimer();
      this.showMainMenu();
    });
    document.getElementById('btn-settings-back')?.addEventListener('click', () => this.showMainMenu());
    document.getElementById('btn-progress-back')?.addEventListener('click', () => this.showMainMenu());
    document.getElementById('btn-achievements-back')?.addEventListener('click', () => this.showMainMenu());

    document.getElementById('btn-progress')?.addEventListener('click', () => this.openProgress());
    document.getElementById('btn-achievements')?.addEventListener('click', () => this.openAchievements());
    document.getElementById('btn-options')?.addEventListener('click', () => this.openSettings());

    document.getElementById('run-btn')?.addEventListener('click', () => {
      void this.executeProgram();
    });
    document.getElementById('reset-btn')?.addEventListener('click', () => {
      this.resetLevel();
    });
    document.getElementById('ai-generate-btn')?.addEventListener('click', () => {
      void this.startGame(this.currentDifficulty, this.currentChallengeMode);
    });

    document.getElementById('btn-next-level')?.addEventListener('click', () => {
      void this.nextLevel();
    });
    document.getElementById('btn-retry')?.addEventListener('click', () => {
      this.resetLevel();
      this.uiManager.showScreen(ScreenType.GAME);
    });

    document.getElementById('btn-skip-tutorial')?.addEventListener('click', () => {
      this.saveManager.completeTutorial();
      this.showMainMenu();
    });
    document.getElementById('btn-complete-tutorial')?.addEventListener('click', () => {
      this.saveManager.completeTutorial();
      this.showMainMenu();
    });

    const soundBox = document.getElementById('setting-sound') as HTMLInputElement | null;
    soundBox?.addEventListener('change', () => {
      const settings = this.saveManager.loadSettings();
      settings.soundEnabled = soundBox.checked;
      this.saveManager.saveSettings(settings);
      this.sound.setEnabled(settings.soundEnabled);
      if (settings.soundEnabled) this.sound.playRun();
    });

    document.getElementById('btn-clear-data')?.addEventListener('click', () => {
      this.setHidden('clear-success', true);
      this.setHidden('clear-confirm', false);
    });
    document.getElementById('btn-clear-cancel')?.addEventListener('click', () => {
      this.setHidden('clear-confirm', true);
    });
    document.getElementById('btn-clear-confirm')?.addEventListener('click', () => {
      this.saveManager.resetAllProgress();
      this.levelManager.setCurrentLevel(1);
      this.sound.setEnabled(true);
      if (soundBox) soundBox.checked = true;
      this.setHidden('clear-confirm', true);
      this.setHidden('clear-success', false);
      this.refreshMenuSummary();
      this.uiManager.showToast('All data cleared. Nothing was restored.', 'success');
    });

    this.updateChallengeButtonStates();
  }

  private openSettings(): void {
    this.setHidden('clear-confirm', true);
    this.setHidden('clear-success', true);
    const settings = this.saveManager.loadSettings();
    const soundBox = document.getElementById('setting-sound') as HTMLInputElement | null;
    if (soundBox) soundBox.checked = settings.soundEnabled;
    this.sound.setEnabled(settings.soundEnabled);
    this.uiManager.showScreen(ScreenType.SETTINGS);
  }

  private openProgress(): void {
    const data = this.saveManager.loadSaveData();
    const body = document.getElementById('progress-body');
    if (body) {
      while (body.firstChild) body.firstChild.remove();
      body.appendChild(this.line(`Total stars: ${data.totalStars}`));
      for (const difficulty of TRACKED_DIFFICULTIES) {
        const cleared = Math.max(0, (data.highestLevel[difficulty] ?? 1) - 1);
        body.appendChild(this.line(`${this.labelDifficulty(difficulty)}: ${cleared} level${cleared === 1 ? '' : 's'} completed`));
      }
      body.appendChild(this.line(`Achievements: ${data.achievements.length} of ${ACHIEVEMENTS.length}`));
      body.appendChild(this.line('Progress stays on this device.'));
    }
    this.uiManager.showScreen(ScreenType.PROGRESS);
  }

  private openAchievements(): void {
    const list = document.getElementById('achievements-list');
    if (list) {
      while (list.firstChild) list.firstChild.remove();
      for (const achievement of ACHIEVEMENTS) {
        const item = document.createElement('li');
        const unlocked = this.saveManager.isAchievementUnlocked(achievement.id);
        item.className = unlocked ? 'achievement unlocked' : 'achievement locked';
        const title = document.createElement('strong');
        title.textContent = `${achievement.icon} ${achievement.name}`;
        const detail = document.createElement('span');
        detail.textContent = unlocked ? achievement.description : `${achievement.description} (locked)`;
        item.append(title, detail);
        list.appendChild(item);
      }
    }
    this.uiManager.showScreen(ScreenType.ACHIEVEMENTS);
  }

  private refreshMenuSummary(): void {
    const data = this.saveManager.loadSaveData();
    const stars = document.getElementById('menu-stars');
    const cleared = TRACKED_DIFFICULTIES.reduce(
      (sum, difficulty) => sum + Math.max(0, (data.highestLevel[difficulty] ?? 1) - 1),
      0
    );
    if (stars) stars.textContent = this.menuStarSummary(data.totalStars, cleared);
  }

  private menuStarSummary(stars: number, cleared: number): string {
    if (cleared === 0) return `${stars} stars · no levels cleared`;
    const levels = cleared === 1 ? 'level' : 'levels';
    return `${stars} stars · ${cleared} ${levels} cleared`;
  }

  private challengeButtonId(): string {
    if (this.currentChallengeMode === ChallengeMode.NORMAL) return 'btn-normal';
    if (this.currentChallengeMode === ChallengeMode.TIME_ATTACK) return 'btn-time-attack';
    return 'btn-minimal-moves';
  }

  private applyLegalLinks(): void {
    const privacy = document.getElementById('link-privacy') as HTMLAnchorElement | null;
    const terms = document.getElementById('link-terms') as HTMLAnchorElement | null;
    if (privacy) privacy.href = LEGAL_LINKS.privacyPolicy;
    if (terms) terms.href = LEGAL_LINKS.termsOfService;
  }

  private updateChallengeButtonStates(): void {
    document.querySelectorAll('.menu-btn.challenge').forEach((btn) => btn.classList.remove('active'));
    document.getElementById(this.challengeButtonId())?.classList.add('active');
  }

  private setRunEnabled(enabled: boolean): void {
    const button = document.getElementById('run-btn') as HTMLButtonElement | null;
    if (button) button.disabled = !enabled;
  }

  private setHidden(id: string, hidden: boolean): void {
    const el = document.getElementById(id);
    if (el) el.hidden = hidden;
  }

  private line(text: string): HTMLParagraphElement {
    const p = document.createElement('p');
    p.textContent = text;
    return p;
  }

  private labelDifficulty(difficulty: Difficulty): string {
    return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
  }

  private calculateCellSize(gridSize: number): number {
    if (gridSize > 9) return 30;
    if (gridSize > 7) return 35;
    if (gridSize > 5) return 40;
    return 50;
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private startTimer(timeLimit: number): void {
    this.stopTimer();
    this.startTime = Date.now();
    const timerDisplay = document.getElementById('timer-display');
    if (timerDisplay) timerDisplay.style.display = 'flex';

    this.timerInterval = window.setInterval(() => {
      const elapsed = (Date.now() - this.startTime) / 1000;
      const remaining = Math.max(0, timeLimit - elapsed);
      this.uiManager.updateTimerDisplay(remaining);
      if (remaining <= 0) {
        this.finishRun({
          success: false,
          reason: 'Time limit exceeded!',
          finalBattery: this.gameEngine.getBattery(),
          movesUsed: this.gameEngine.getState().playerState.movesCount,
          timeUsed: timeLimit,
          stars: 0,
          efficiency: 0
        }, []);
      }
    }, 100);
  }

  private stopTimer(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    const timerDisplay = document.getElementById('timer-display');
    if (timerDisplay) timerDisplay.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  try {
    const app = new App();
    void app.initialize().catch((error) => window.showGameError?.(error));
  } catch (error) {
    window.showGameError?.(error);
  }
});
