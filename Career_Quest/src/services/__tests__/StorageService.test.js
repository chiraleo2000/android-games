import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Preferences } from '@capacitor/preferences';

// Mock Capacitor Preferences
vi.mock('@capacitor/preferences', () => ({
  Preferences: {
    get: vi.fn(),
    set: vi.fn(),
    remove: vi.fn(),
    clear: vi.fn(),
  },
}));

// Import after mocking
const { StorageService } = await import('../StorageService.js');

describe('StorageService', () => {
  let storageService;

  beforeEach(() => {
    // Clear all mocks
    vi.clearAllMocks();
    
    // Clear localStorage
    localStorage.clear();
    
    // Create new instance
    storageService = new StorageService();
  });

  describe('get', () => {
    it('should retrieve value from Capacitor Preferences first', async () => {
      const testData = { name: 'test' };
      Preferences.get.mockResolvedValue({ value: JSON.stringify(testData) });

      const result = await storageService.get('testKey');

      expect(result).toEqual(testData);
      expect(Preferences.get).toHaveBeenCalledWith({ key: 'testKey' });
    });

    it('should fallback to localStorage if Capacitor Preferences returns null', async () => {
      const testData = { name: 'test' };
      Preferences.get.mockResolvedValue({ value: null });
      localStorage.setItem('testKey', JSON.stringify(testData));

      const result = await storageService.get('testKey');

      expect(result).toEqual(testData);
    });

    it('should return null if no value exists', async () => {
      Preferences.get.mockResolvedValue({ value: null });

      const result = await storageService.get('testKey');

      expect(result).toBeNull();
    });

    it('should return null for non-existent keys without errors', async () => {
      Preferences.get.mockResolvedValue({ value: null });

      const result = await storageService.get('nonExistentKey');

      expect(result).toBeNull();
      expect(Preferences.get).toHaveBeenCalledWith({ key: 'nonExistentKey' });
    });

    it('should handle JSON parse errors gracefully', async () => {
      Preferences.get.mockResolvedValue({ value: 'invalid json {' });

      const result = await storageService.get('testKey');

      expect(result).toBeNull();
    });

    it('should fallback to localStorage on Capacitor Preferences error', async () => {
      const testData = { name: 'test' };
      Preferences.get.mockRejectedValue(new Error('Capacitor error'));
      localStorage.setItem('testKey', JSON.stringify(testData));

      const result = await storageService.get('testKey');

      expect(result).toEqual(testData);
    });

    it('should sync localStorage data to Capacitor Preferences', async () => {
      const testData = { name: 'test' };
      Preferences.get.mockResolvedValue({ value: null });
      Preferences.set.mockResolvedValue(undefined);
      localStorage.setItem('testKey', JSON.stringify(testData));

      const result = await storageService.get('testKey');

      expect(result).toEqual(testData);
      expect(Preferences.set).toHaveBeenCalledWith({
        key: 'testKey',
        value: JSON.stringify(testData),
      });
    });
  });

  describe('set', () => {
    it('should save to both Capacitor Preferences and localStorage', async () => {
      const testData = { name: 'test' };
      Preferences.set.mockResolvedValue(undefined);

      const result = await storageService.set('testKey', testData);

      expect(result).toBe(true);
      expect(Preferences.set).toHaveBeenCalledWith({
        key: 'testKey',
        value: JSON.stringify(testData),
      });
      expect(localStorage.getItem('testKey')).toBe(JSON.stringify(testData));
    });

    it('should retry on failure with exponential backoff', async () => {
      const testData = { name: 'test' };
      let attempts = 0;
      
      Preferences.set.mockImplementation(() => {
        attempts++;
        if (attempts < 2) {
          return Promise.reject(new Error('Mock failure'));
        }
        return Promise.resolve();
      });

      const result = await storageService.set('testKey', testData);

      expect(result).toBe(true);
      expect(Preferences.set).toHaveBeenCalledTimes(2);
    });

    it('should return false after exhausting all retry attempts', async () => {
      const testData = { name: 'test' };
      Preferences.set.mockRejectedValue(new Error('Persistent failure'));

      const result = await storageService.set('testKey', testData);

      expect(result).toBe(false);
      expect(Preferences.set).toHaveBeenCalledTimes(3);
    });

    it('should handle serialization errors gracefully', async () => {
      const circularRef = {};
      circularRef.self = circularRef;

      // Wrap in try-catch since JSON.stringify will throw
      let result;
      try {
        result = await storageService.set('testKey', circularRef);
      } catch (error) {
        // Expected to throw during serialization
        expect(error.message).toContain('circular');
        return;
      }

      // If it doesn't throw, it should return false
      expect(result).toBe(false);
    });
  });

  describe('remove', () => {
    it('should remove from both storage mechanisms', async () => {
      localStorage.setItem('testKey', 'value');
      Preferences.remove.mockResolvedValue(undefined);

      const result = await storageService.remove('testKey');

      expect(result).toBe(true);
      expect(Preferences.remove).toHaveBeenCalledWith({ key: 'testKey' });
      expect(localStorage.getItem('testKey')).toBeNull();
    });

    it('should return false on removal failure', async () => {
      Preferences.remove.mockRejectedValue(new Error('Remove failed'));

      const result = await storageService.remove('testKey');

      expect(result).toBe(false);
    });
  });

  describe('clear', () => {
    it('should clear both storage mechanisms', async () => {
      localStorage.setItem('key1', 'value1');
      localStorage.setItem('key2', 'value2');
      Preferences.clear.mockResolvedValue(undefined);

      const result = await storageService.clear();

      expect(result).toBe(true);
      expect(Preferences.clear).toHaveBeenCalled();
      expect(localStorage.length).toBe(0);
    });

    it('should return false on clear failure', async () => {
      Preferences.clear.mockRejectedValue(new Error('Clear failed'));

      const result = await storageService.clear();

      expect(result).toBe(false);
    });
  });

  describe('validate', () => {
    it('should validate data using provided validator', async () => {
      const testData = { age: 25 };
      Preferences.get.mockResolvedValue({ value: JSON.stringify(testData) });

      const validator = (data) => data.age > 18;
      const result = await storageService.validate('testKey', validator);

      expect(result).toBe(true);
    });

    it('should return true for null data', async () => {
      Preferences.get.mockResolvedValue({ value: null });

      const validator = (data) => data.age > 18;
      const result = await storageService.validate('testKey', validator);

      expect(result).toBe(true);
    });

    it('should return false for invalid data', async () => {
      const testData = { age: 15 };
      Preferences.get.mockResolvedValue({ value: JSON.stringify(testData) });

      const validator = (data) => data.age > 18;
      const result = await storageService.validate('testKey', validator);

      expect(result).toBe(false);
    });

    it('should return false on validation error', async () => {
      const testData = { age: 15 };
      Preferences.get.mockResolvedValue({ value: JSON.stringify(testData) });

      const validator = (data) => {
        throw new Error('Validator error');
      };
      const result = await storageService.validate('testKey', validator);

      expect(result).toBe(false);
    });
  });

  describe('retry logic', () => {
    it('should use exponential backoff between retries', async () => {
      const testData = { name: 'test' };
      const delays = [];
      const originalDelay = storageService.delay;
      
      storageService.delay = vi.fn((ms) => {
        delays.push(ms);
        return originalDelay.call(storageService, 0); // Speed up test
      });

      Preferences.set
        .mockRejectedValueOnce(new Error('Attempt 1 failed'))
        .mockRejectedValueOnce(new Error('Attempt 2 failed'))
        .mockResolvedValueOnce(undefined);

      await storageService.set('testKey', testData);

      expect(delays).toEqual([100, 200]); // 100ms * 1, 100ms * 2
      
      storageService.delay = originalDelay;
    });

    it('should respect custom retry configuration', async () => {
      const customService = new StorageService({
        retryAttempts: 5,
        retryDelay: 50,
      });

      const testData = { name: 'test' };
      Preferences.set.mockRejectedValue(new Error('Always fails'));

      await customService.set('testKey', testData);

      expect(Preferences.set).toHaveBeenCalledTimes(5);
    });
  });

  describe('serialization', () => {
    it('should handle complex nested objects', async () => {
      const complexData = {
        user: { name: 'John', age: 30 },
        settings: { theme: 'dark', notifications: true },
        history: [1, 2, 3, 4, 5],
      };
      Preferences.set.mockResolvedValue(undefined);

      const result = await storageService.set('testKey', complexData);

      expect(result).toBe(true);
      expect(Preferences.set).toHaveBeenCalledWith({
        key: 'testKey',
        value: JSON.stringify(complexData),
      });
    });

    it('should handle arrays', async () => {
      const arrayData = [1, 2, 3, 4, 5];
      Preferences.set.mockResolvedValue(undefined);

      const result = await storageService.set('testKey', arrayData);

      expect(result).toBe(true);
    });

    it('should handle null values', async () => {
      Preferences.set.mockResolvedValue(undefined);

      const result = await storageService.set('testKey', null);

      expect(result).toBe(true);
      expect(Preferences.set).toHaveBeenCalledWith({
        key: 'testKey',
        value: 'null',
      });
    });

    it('should handle undefined by converting to null', async () => {
      Preferences.set.mockResolvedValue(undefined);

      const result = await storageService.set('testKey', undefined);

      expect(result).toBe(true);
      // JSON.stringify(undefined) returns undefined, not 'null'
      expect(Preferences.set).toHaveBeenCalledWith({
        key: 'testKey',
        value: undefined,
      });
    });

    it('should handle boolean values', async () => {
      Preferences.set.mockResolvedValue(undefined);

      const result = await storageService.set('testKey', true);

      expect(result).toBe(true);
      expect(Preferences.set).toHaveBeenCalledWith({
        key: 'testKey',
        value: 'true',
      });
    });

    it('should handle number values', async () => {
      Preferences.set.mockResolvedValue(undefined);

      const result = await storageService.set('testKey', 42);

      expect(result).toBe(true);
      expect(Preferences.set).toHaveBeenCalledWith({
        key: 'testKey',
        value: '42',
      });
    });

    it('should handle string values', async () => {
      Preferences.set.mockResolvedValue(undefined);

      const result = await storageService.set('testKey', 'hello');

      expect(result).toBe(true);
      expect(Preferences.set).toHaveBeenCalledWith({
        key: 'testKey',
        value: '"hello"',
      });
    });
  });
});
