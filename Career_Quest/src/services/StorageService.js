import { Preferences } from '@capacitor/preferences';

class StorageService {
  constructor(options = {}) {
    this.retryAttempts = options.retryAttempts || 3;
    this.retryDelay = options.retryDelay || 100;
    this.validateOnRead = options.validateOnRead !== false;
  }

  /**
   * Get value with fallback chain: Capacitor Preferences -> localStorage -> null
   */
  async get(key) {
    try {
      // Try Capacitor Preferences first (native storage)
      const { value } = await Preferences.get({ key });
      if (value !== null) {
        return JSON.parse(value);
      }
      
      // Fallback to localStorage
      const localValue = localStorage.getItem(key);
      if (localValue !== null) {
        const parsed = JSON.parse(localValue);
        // Sync to Capacitor Preferences for future reads
        await this.set(key, parsed);
        return parsed;
      }
      
      return null;
    } catch (error) {
      console.error(`StorageService.get failed for key "${key}":`, error);
      
      // Last resort: try localStorage directly
      try {
        const localValue = localStorage.getItem(key);
        return localValue ? JSON.parse(localValue) : null;
      } catch {
        return null;
      }
    }
  }

  /**
   * Set value with retry logic and dual-storage persistence
   */
  async set(key, value) {
    const serialized = JSON.stringify(value);
    let lastError = null;
    
    for (let attempt = 0; attempt < this.retryAttempts; attempt++) {
      try {
        // Write to both storage mechanisms
        await Promise.all([
          Preferences.set({ key, value: serialized }),
          this.setLocalStorage(key, serialized)
        ]);
        return true;
      } catch (error) {
        lastError = error;
        console.warn(`StorageService.set attempt ${attempt + 1} failed:`, error);
        
        if (attempt < this.retryAttempts - 1) {
          await this.delay(this.retryDelay * (attempt + 1));
        }
      }
    }
    
    console.error(`StorageService.set failed after ${this.retryAttempts} attempts:`, lastError);
    return false;
  }

  /**
   * Remove value from both storage mechanisms
   */
  async remove(key) {
    try {
      await Promise.all([
        Preferences.remove({ key }),
        Promise.resolve(localStorage.removeItem(key))
      ]);
      return true;
    } catch (error) {
      console.error(`StorageService.remove failed for key "${key}":`, error);
      return false;
    }
  }

  /**
   * Clear all stored data
   */
  async clear() {
    try {
      await Promise.all([
        Preferences.clear(),
        Promise.resolve(localStorage.clear())
      ]);
      return true;
    } catch (error) {
      console.error('StorageService.clear failed:', error);
      return false;
    }
  }

  /**
   * Validate data integrity
   */
  async validate(key, validator) {
    try {
      const data = await this.get(key);
      if (data === null) return true; // No data is valid
      
      return validator(data);
    } catch {
      return false;
    }
  }

  // Helper methods
  setLocalStorage(key, value) {
    return new Promise((resolve, reject) => {
      try {
        localStorage.setItem(key, value);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export { StorageService };
export const storageService = new StorageService();
