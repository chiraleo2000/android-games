/**
 * Save Manager - Handles game progress persistence
 */

import { SaveData, Difficulty, ExecutionResult, GameSettings } from './types';

export class SaveManager {
  private readonly SAVE_KEY = 'logiclabs_save_data';
  private readonly SETTINGS_KEY = 'logiclabs_settings';

  /**
   * Load save data from localStorage
   */
  public loadSaveData(): SaveData {
    const defaultSave: SaveData = {
      highestLevel: {
        [Difficulty.EASY]: 1,
        [Difficulty.MEDIUM]: 1,
        [Difficulty.HARD]: 1,
        [Difficulty.EXPERT]: 1,
        [Difficulty.MASTER]: 1,
        [Difficulty.EXTREME]: 1,
        [Difficulty.NIGHTMARE]: 1
      },
      bestScores: {},
      tutorialCompleted: false,
      totalStars: 0,
      achievements: [],
      settings: this.loadSettings()
    };

    try {
      const saved = localStorage.getItem(this.SAVE_KEY);
      if (saved) {
        return { ...defaultSave, ...JSON.parse(saved) };
      }
    } catch (error) {
      console.error('Error loading save data:', error);
    }

    return defaultSave;
  }

  /**
   * Save game data to localStorage
   */
  public saveSaveData(data: SaveData): void {
    try {
      localStorage.setItem(this.SAVE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving data:', error);
    }
  }

  /**
   * Update level progress
   */
  public updateLevelProgress(
    difficulty: Difficulty,
    levelNumber: number,
    result: ExecutionResult
  ): void {
    const saveData = this.loadSaveData();

    // Update highest level
    if (result.success && levelNumber >= saveData.highestLevel[difficulty]) {
      saveData.highestLevel[difficulty] = levelNumber + 1;
    }

    // Update best score for this level
    const levelKey = `${difficulty}-${levelNumber}`;
    const existingScore = saveData.bestScores[levelKey];
    
    if (!existingScore || result.stars > existingScore.stars || 
        (result.stars === existingScore.stars && result.efficiency > existingScore.efficiency)) {
      saveData.bestScores[levelKey] = result;
    }

    // Update total stars
    if (result.success) {
      saveData.totalStars += result.stars;
    }

    this.saveSaveData(saveData);
  }

  /**
   * Mark tutorial as completed
   */
  public completeTutorial(): void {
    const saveData = this.loadSaveData();
    saveData.tutorialCompleted = true;
    this.saveSaveData(saveData);
  }

  /**
   * Unlock achievement
   */
  public unlockAchievement(achievementId: string): boolean {
    const saveData = this.loadSaveData();
    
    if (!saveData.achievements.includes(achievementId)) {
      saveData.achievements.push(achievementId);
      this.saveSaveData(saveData);
      return true; // Newly unlocked
    }
    
    return false; // Already unlocked
  }

  /**
   * Load settings
   */
  public loadSettings(): GameSettings {
    const defaultSettings: GameSettings = {
      soundEnabled: true,
      musicEnabled: true,
      hapticEnabled: true,
      animationSpeed: 1.0,
      colorblindMode: false,
      language: 'en'
    };

    try {
      const saved = localStorage.getItem(this.SETTINGS_KEY);
      if (saved) {
        return { ...defaultSettings, ...JSON.parse(saved) };
      }
    } catch (error) {
      console.error('Error loading settings:', error);
    }

    return defaultSettings;
  }

  /**
   * Save settings
   */
  public saveSettings(settings: GameSettings): void {
    try {
      localStorage.setItem(this.SETTINGS_KEY, JSON.stringify(settings));
    } catch (error) {
      console.error('Error saving settings:', error);
    }
  }

  /**
   * Get total stars earned
   */
  public addStars(stars: number): void {
    if (stars <= 0) return;
    const saveData = this.loadSaveData();
    saveData.totalStars += stars;
    this.saveSaveData(saveData);
  }

  public getTotalStars(): number {
    const saveData = this.loadSaveData();
    return saveData.totalStars;
  }

  /**
   * Get highest level reached for difficulty
   */
  public getHighestLevel(difficulty: Difficulty): number {
    const saveData = this.loadSaveData();
    return saveData.highestLevel[difficulty];
  }

  /**
   * Get best score for a level
   */
  public getBestScore(difficulty: Difficulty, levelNumber: number): ExecutionResult | null {
    const saveData = this.loadSaveData();
    const levelKey = `${difficulty}-${levelNumber}`;
    return saveData.bestScores[levelKey] || null;
  }

  /**
   * Check if achievement is unlocked
   */
  public isAchievementUnlocked(achievementId: string): boolean {
    const saveData = this.loadSaveData();
    return saveData.achievements.includes(achievementId);
  }

  /**
   * Reset all progress (for testing or user request)
   */
  public resetAllProgress(): void {
    localStorage.removeItem(this.SAVE_KEY);
    localStorage.removeItem(this.SETTINGS_KEY);
    localStorage.removeItem('logiclabs_error_log');
  }

  /**
   * Export save data as JSON string
   */
  public exportSaveData(): string {
    const saveData = this.loadSaveData();
    return JSON.stringify(saveData, null, 2);
  }

  /**
   * Import save data from JSON string
   */
  public importSaveData(jsonString: string): boolean {
    try {
      const data = JSON.parse(jsonString);
      this.saveSaveData(data);
      return true;
    } catch (error) {
      console.error('Error importing save data:', error);
      return false;
    }
  }
}
