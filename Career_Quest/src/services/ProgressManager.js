import { storageService } from './StorageService.js';

const PROGRESS_KEY = 'careerQuestState';
const PROGRESS_VERSION = '2.0';

class ProgressManager {
  /**
   * Save current game progress
   */
  async saveProgress(progress) {
    const progressData = {
      ...progress,
      savedAt: new Date().toISOString(),
      version: PROGRESS_VERSION
    };
    
    const success = await storageService.set(PROGRESS_KEY, progressData);
    
    if (!success) {
      console.error('Failed to save progress');
    }
    
    return success;
  }

  /**
   * Load saved progress with validation
   */
  async loadProgress() {
    try {
      const progress = await storageService.get(PROGRESS_KEY);
      
      if (!progress) {
        return null;
      }
      
      // Validate progress data
      if (!this.validateProgress(progress)) {
        console.warn('Invalid progress data, clearing');
        await this.clearProgress();
        return null;
      }
      
      // Check if progress is stale (older than 7 days)
      const savedDate = new Date(progress.savedAt);
      const daysSince = (Date.now() - savedDate.getTime()) / (1000 * 60 * 60 * 24);
      
      if (daysSince > 7) {
        console.info('Progress is stale, clearing');
        await this.clearProgress();
        return null;
      }
      
      return progress;
    } catch (error) {
      console.error('Failed to load progress:', error);
      return null;
    }
  }

  /**
   * Clear saved progress
   */
  async clearProgress() {
    return await storageService.remove(PROGRESS_KEY);
  }

  /**
   * Check if progress exists
   */
  async hasProgress() {
    const progress = await this.loadProgress();
    return progress !== null;
  }

  /**
   * Validate progress data structure
   */
  validateProgress(progress) {
    if (!progress || typeof progress !== 'object') {
      return false;
    }
    
    // Must have gameState
    if (!progress.gameState || !['PLAYING', 'PERSONALITY_TEST'].includes(progress.gameState)) {
      return false;
    }
    
    // Validate PLAYING state
    if (progress.gameState === 'PLAYING') {
      if (!progress.currentCareer || typeof progress.currentScenarioIndex !== 'number') {
        return false;
      }
    }
    
    // Validate PERSONALITY_TEST state
    if (progress.gameState === 'PERSONALITY_TEST') {
      if (typeof progress.ptIndex !== 'number' || !progress.ptAnswers) {
        return false;
      }
    }
    
    return true;
  }

  /**
   * Auto-save on visibility change
   */
  setupAutoSave(getProgressFn) {
    const handleVisibilityChange = async () => {
      if (document.visibilityState === 'hidden') {
        const progress = getProgressFn();
        if (progress) {
          await this.saveProgress(progress);
        }
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }
}

export { ProgressManager };
export const progressManager = new ProgressManager();
