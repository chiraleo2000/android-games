import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';

// Mock StorageService
const mockStorageService = {
  get: vi.fn(),
  set: vi.fn(),
  remove: vi.fn(),
};

vi.mock('../StorageService.js', () => ({
  storageService: mockStorageService,
}));

// Import after mocking
const { ProgressManager } = await import('../ProgressManager.js');

describe('ProgressManager', () => {
  let progressManager;
  let mockDate;

  beforeEach(() => {
    // Clear all mocks
    vi.clearAllMocks();
    
    // Create new instance
    progressManager = new ProgressManager();
    
    // Mock Date.now() for consistent testing
    mockDate = new Date('2024-01-15T12:00:00Z');
    vi.useFakeTimers();
    vi.setSystemTime(mockDate);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('saveProgress', () => {
    it('should save progress with timestamp and version', async () => {
      const progress = {
        gameState: 'PLAYING',
        currentCareer: { id: 'software-engineer' },
        currentScenarioIndex: 5,
        stats: { money: 100, happiness: 80 },
      };

      mockStorageService.set.mockResolvedValue(true);

      const result = await progressManager.saveProgress(progress);

      expect(result).toBe(true);
      expect(mockStorageService.set).toHaveBeenCalledWith(
        'careerQuestState',
        expect.objectContaining({
          ...progress,
          savedAt: mockDate.toISOString(),
          version: '2.0',
        })
      );
    });

    it('should return false when storage fails', async () => {
      const progress = {
        gameState: 'PLAYING',
        currentCareer: { id: 'software-engineer' },
        currentScenarioIndex: 5,
      };

      mockStorageService.set.mockResolvedValue(false);

      const result = await progressManager.saveProgress(progress);

      expect(result).toBe(false);
    });

    it('should save personality test progress', async () => {
      const progress = {
        gameState: 'PERSONALITY_TEST',
        ptIndex: 10,
        ptAnswers: { q1: 4, q2: 3, q3: 5 },
        ptTraits: { openness: 0.7 },
      };

      mockStorageService.set.mockResolvedValue(true);

      const result = await progressManager.saveProgress(progress);

      expect(result).toBe(true);
      expect(mockStorageService.set).toHaveBeenCalledWith(
        'careerQuestState',
        expect.objectContaining({
          ...progress,
          savedAt: mockDate.toISOString(),
          version: '2.0',
        })
      );
    });
  });

  describe('loadProgress', () => {
    it('should load and return valid progress', async () => {
      const savedProgress = {
        gameState: 'PLAYING',
        currentCareer: { id: 'software-engineer' },
        currentScenarioIndex: 5,
        stats: { money: 100, happiness: 80 },
        savedAt: mockDate.toISOString(),
        version: '2.0',
      };

      mockStorageService.get.mockResolvedValue(savedProgress);

      const result = await progressManager.loadProgress();

      expect(result).toEqual(savedProgress);
      expect(mockStorageService.get).toHaveBeenCalledWith('careerQuestState');
    });

    it('should return null when no progress exists', async () => {
      mockStorageService.get.mockResolvedValue(null);

      const result = await progressManager.loadProgress();

      expect(result).toBeNull();
    });

    it('should clear and return null for invalid progress structure', async () => {
      const invalidProgress = {
        gameState: 'INVALID_STATE',
        savedAt: mockDate.toISOString(),
        version: '2.0',
      };

      mockStorageService.get.mockResolvedValue(invalidProgress);
      mockStorageService.remove.mockResolvedValue(true);

      const result = await progressManager.loadProgress();

      expect(result).toBeNull();
      expect(mockStorageService.remove).toHaveBeenCalledWith('careerQuestState');
    });
  });

  describe('stale progress detection', () => {
    it('should clear and return null for stale progress (older than 7 days)', async () => {
      const staleDate = new Date('2024-01-01T12:00:00Z'); // 14 days ago
      const staleProgress = {
        gameState: 'PLAYING',
        currentCareer: { id: 'software-engineer' },
        currentScenarioIndex: 5,
        savedAt: staleDate.toISOString(),
        version: '2.0',
      };

      mockStorageService.get.mockResolvedValue(staleProgress);
      mockStorageService.remove.mockResolvedValue(true);

      const result = await progressManager.loadProgress();

      expect(result).toBeNull();
      expect(mockStorageService.remove).toHaveBeenCalledWith('careerQuestState');
    });

    it('should return progress that is exactly 7 days old', async () => {
      const sevenDaysAgo = new Date('2024-01-08T12:00:00Z');
      const progress = {
        gameState: 'PLAYING',
        currentCareer: { id: 'software-engineer' },
        currentScenarioIndex: 5,
        savedAt: sevenDaysAgo.toISOString(),
        version: '2.0',
      };

      mockStorageService.get.mockResolvedValue(progress);

      const result = await progressManager.loadProgress();

      expect(result).toEqual(progress);
    });

    it('should return progress that is less than 7 days old', async () => {
      const threeDaysAgo = new Date('2024-01-12T12:00:00Z');
      const progress = {
        gameState: 'PLAYING',
        currentCareer: { id: 'software-engineer' },
        currentScenarioIndex: 5,
        savedAt: threeDaysAgo.toISOString(),
        version: '2.0',
      };

      mockStorageService.get.mockResolvedValue(progress);

      const result = await progressManager.loadProgress();

      expect(result).toEqual(progress);
    });

    it('should return null on load error', async () => {
      mockStorageService.get.mockRejectedValue(new Error('Storage error'));

      const result = await progressManager.loadProgress();

      expect(result).toBeNull();
    });
  });

  describe('clearProgress', () => {
    it('should remove progress from storage', async () => {
      mockStorageService.remove.mockResolvedValue(true);

      const result = await progressManager.clearProgress();

      expect(result).toBe(true);
      expect(mockStorageService.remove).toHaveBeenCalledWith('careerQuestState');
    });

    it('should return false when removal fails', async () => {
      mockStorageService.remove.mockResolvedValue(false);

      const result = await progressManager.clearProgress();

      expect(result).toBe(false);
    });
  });

  describe('hasProgress', () => {
    it('should return true when valid progress exists', async () => {
      const validProgress = {
        gameState: 'PLAYING',
        currentCareer: { id: 'software-engineer' },
        currentScenarioIndex: 5,
        savedAt: mockDate.toISOString(),
        version: '2.0',
      };

      mockStorageService.get.mockResolvedValue(validProgress);

      const result = await progressManager.hasProgress();

      expect(result).toBe(true);
    });

    it('should return false when no progress exists', async () => {
      mockStorageService.get.mockResolvedValue(null);

      const result = await progressManager.hasProgress();

      expect(result).toBe(false);
    });

    it('should return false when progress is invalid', async () => {
      const invalidProgress = {
        gameState: 'INVALID_STATE',
        savedAt: mockDate.toISOString(),
      };

      mockStorageService.get.mockResolvedValue(invalidProgress);
      mockStorageService.remove.mockResolvedValue(true);

      const result = await progressManager.hasProgress();

      expect(result).toBe(false);
    });

    it('should return false when progress is stale', async () => {
      const staleProgress = {
        gameState: 'PLAYING',
        currentCareer: { id: 'software-engineer' },
        currentScenarioIndex: 5,
        savedAt: new Date('2024-01-01T12:00:00Z').toISOString(),
        version: '2.0',
      };

      mockStorageService.get.mockResolvedValue(staleProgress);
      mockStorageService.remove.mockResolvedValue(true);

      const result = await progressManager.hasProgress();

      expect(result).toBe(false);
    });
  });

  describe('validateProgress', () => {
    it('should validate PLAYING state with required fields', () => {
      const validProgress = {
        gameState: 'PLAYING',
        currentCareer: { id: 'software-engineer' },
        currentScenarioIndex: 5,
      };

      const result = progressManager.validateProgress(validProgress);

      expect(result).toBe(true);
    });

    it('should validate PERSONALITY_TEST state with required fields', () => {
      const validProgress = {
        gameState: 'PERSONALITY_TEST',
        ptIndex: 10,
        ptAnswers: { q1: 4, q2: 3 },
      };

      const result = progressManager.validateProgress(validProgress);

      expect(result).toBe(true);
    });

    it('should reject null progress', () => {
      const result = progressManager.validateProgress(null);

      expect(result).toBe(false);
    });

    it('should reject undefined progress', () => {
      const result = progressManager.validateProgress(undefined);

      expect(result).toBe(false);
    });

    it('should reject non-object progress', () => {
      const result = progressManager.validateProgress('invalid');

      expect(result).toBe(false);
    });

    it('should reject progress without gameState', () => {
      const invalidProgress = {
        currentCareer: { id: 'software-engineer' },
        currentScenarioIndex: 5,
      };

      const result = progressManager.validateProgress(invalidProgress);

      expect(result).toBe(false);
    });

    it('should reject progress with invalid gameState', () => {
      const invalidProgress = {
        gameState: 'INVALID_STATE',
        currentCareer: { id: 'software-engineer' },
        currentScenarioIndex: 5,
      };

      const result = progressManager.validateProgress(invalidProgress);

      expect(result).toBe(false);
    });

    it('should reject PLAYING state without currentCareer', () => {
      const invalidProgress = {
        gameState: 'PLAYING',
        currentScenarioIndex: 5,
      };

      const result = progressManager.validateProgress(invalidProgress);

      expect(result).toBe(false);
    });

    it('should reject PLAYING state without currentScenarioIndex', () => {
      const invalidProgress = {
        gameState: 'PLAYING',
        currentCareer: { id: 'software-engineer' },
      };

      const result = progressManager.validateProgress(invalidProgress);

      expect(result).toBe(false);
    });

    it('should reject PLAYING state with non-number currentScenarioIndex', () => {
      const invalidProgress = {
        gameState: 'PLAYING',
        currentCareer: { id: 'software-engineer' },
        currentScenarioIndex: '5',
      };

      const result = progressManager.validateProgress(invalidProgress);

      expect(result).toBe(false);
    });

    it('should reject PERSONALITY_TEST state without ptIndex', () => {
      const invalidProgress = {
        gameState: 'PERSONALITY_TEST',
        ptAnswers: { q1: 4, q2: 3 },
      };

      const result = progressManager.validateProgress(invalidProgress);

      expect(result).toBe(false);
    });

    it('should reject PERSONALITY_TEST state with non-number ptIndex', () => {
      const invalidProgress = {
        gameState: 'PERSONALITY_TEST',
        ptIndex: '10',
        ptAnswers: { q1: 4, q2: 3 },
      };

      const result = progressManager.validateProgress(invalidProgress);

      expect(result).toBe(false);
    });

    it('should reject PERSONALITY_TEST state without ptAnswers', () => {
      const invalidProgress = {
        gameState: 'PERSONALITY_TEST',
        ptIndex: 10,
      };

      const result = progressManager.validateProgress(invalidProgress);

      expect(result).toBe(false);
    });

    it('should accept PLAYING state with zero currentScenarioIndex', () => {
      const validProgress = {
        gameState: 'PLAYING',
        currentCareer: { id: 'software-engineer' },
        currentScenarioIndex: 0,
      };

      const result = progressManager.validateProgress(validProgress);

      expect(result).toBe(true);
    });

    it('should accept PERSONALITY_TEST state with zero ptIndex', () => {
      const validProgress = {
        gameState: 'PERSONALITY_TEST',
        ptIndex: 0,
        ptAnswers: {},
      };

      const result = progressManager.validateProgress(validProgress);

      expect(result).toBe(true);
    });
  });

  describe('version compatibility', () => {
    it('should accept progress with current version', async () => {
      const progress = {
        gameState: 'PLAYING',
        currentCareer: { id: 'software-engineer' },
        currentScenarioIndex: 5,
        savedAt: mockDate.toISOString(),
        version: '2.0',
      };

      mockStorageService.get.mockResolvedValue(progress);

      const result = await progressManager.loadProgress();

      expect(result).toEqual(progress);
    });

    it('should accept progress without version field', async () => {
      const progress = {
        gameState: 'PLAYING',
        currentCareer: { id: 'software-engineer' },
        currentScenarioIndex: 5,
        savedAt: mockDate.toISOString(),
      };

      mockStorageService.get.mockResolvedValue(progress);

      const result = await progressManager.loadProgress();

      expect(result).toEqual(progress);
    });

    it('should accept progress with different version', async () => {
      const progress = {
        gameState: 'PLAYING',
        currentCareer: { id: 'software-engineer' },
        currentScenarioIndex: 5,
        savedAt: mockDate.toISOString(),
        version: '1.0',
      };

      mockStorageService.get.mockResolvedValue(progress);

      const result = await progressManager.loadProgress();

      expect(result).toEqual(progress);
    });
  });

  describe('setupAutoSave', () => {
    let cleanup;
    let visibilityChangeHandler;

    beforeEach(() => {
      // Capture the event listener
      const originalAddEventListener = document.addEventListener;
      document.addEventListener = vi.fn((event, handler) => {
        if (event === 'visibilitychange') {
          visibilityChangeHandler = handler;
        }
        originalAddEventListener.call(document, event, handler);
      });
    });

    afterEach(() => {
      if (cleanup) {
        cleanup();
      }
    });

    it('should setup visibility change listener', () => {
      const getProgressFn = vi.fn();
      
      cleanup = progressManager.setupAutoSave(getProgressFn);

      expect(document.addEventListener).toHaveBeenCalledWith(
        'visibilitychange',
        expect.any(Function)
      );
    });

    it('should save progress when document becomes hidden', async () => {
      const progress = {
        gameState: 'PLAYING',
        currentCareer: { id: 'software-engineer' },
        currentScenarioIndex: 5,
      };
      const getProgressFn = vi.fn().mockReturnValue(progress);
      mockStorageService.set.mockResolvedValue(true);

      cleanup = progressManager.setupAutoSave(getProgressFn);

      // Simulate visibility change to hidden
      Object.defineProperty(document, 'visibilityState', {
        writable: true,
        value: 'hidden',
      });

      await visibilityChangeHandler();

      expect(getProgressFn).toHaveBeenCalled();
      expect(mockStorageService.set).toHaveBeenCalledWith(
        'careerQuestState',
        expect.objectContaining(progress)
      );
    });

    it('should not save when document becomes visible', async () => {
      const getProgressFn = vi.fn();
      mockStorageService.set.mockResolvedValue(true);

      cleanup = progressManager.setupAutoSave(getProgressFn);

      // Simulate visibility change to visible
      Object.defineProperty(document, 'visibilityState', {
        writable: true,
        value: 'visible',
      });

      await visibilityChangeHandler();

      expect(mockStorageService.set).not.toHaveBeenCalled();
    });

    it('should not save when getProgressFn returns null', async () => {
      const getProgressFn = vi.fn().mockReturnValue(null);
      mockStorageService.set.mockResolvedValue(true);

      cleanup = progressManager.setupAutoSave(getProgressFn);

      // Simulate visibility change to hidden
      Object.defineProperty(document, 'visibilityState', {
        writable: true,
        value: 'hidden',
      });

      await visibilityChangeHandler();

      expect(getProgressFn).toHaveBeenCalled();
      expect(mockStorageService.set).not.toHaveBeenCalled();
    });

    it('should return cleanup function that removes listener', () => {
      const getProgressFn = vi.fn();
      const originalRemoveEventListener = document.removeEventListener;
      document.removeEventListener = vi.fn(originalRemoveEventListener);

      cleanup = progressManager.setupAutoSave(getProgressFn);
      cleanup();

      expect(document.removeEventListener).toHaveBeenCalledWith(
        'visibilitychange',
        expect.any(Function)
      );
    });
  });

  describe('integration - save and load flow', () => {
    it('should save and load progress successfully', async () => {
      const progress = {
        gameState: 'PLAYING',
        currentCareer: { id: 'software-engineer', name: 'Software Engineer' },
        currentScenarioIndex: 5,
        stats: { money: 100, happiness: 80, skills: 60 },
      };

      mockStorageService.set.mockResolvedValue(true);

      // Save progress
      const saveResult = await progressManager.saveProgress(progress);
      expect(saveResult).toBe(true);

      // Capture what was saved
      const savedData = mockStorageService.set.mock.calls[0][1];

      // Mock get to return saved data
      mockStorageService.get.mockResolvedValue(savedData);

      // Load progress
      const loadResult = await progressManager.loadProgress();

      expect(loadResult).toEqual(savedData);
      expect(loadResult.gameState).toBe('PLAYING');
      expect(loadResult.currentCareer.id).toBe('software-engineer');
      expect(loadResult.currentScenarioIndex).toBe(5);
      expect(loadResult.version).toBe('2.0');
      expect(loadResult.savedAt).toBeDefined();
    });

    it('should handle complete personality test flow', async () => {
      const progress = {
        gameState: 'PERSONALITY_TEST',
        ptIndex: 25,
        ptAnswers: { q1: 4, q2: 3, q3: 5, q4: 2, q5: 4 },
        ptTraits: { openness: 0.7, conscientiousness: 0.6 },
        mbtiDimensions: { EI: 0.3, NS: 0.8 },
      };

      mockStorageService.set.mockResolvedValue(true);

      // Save progress
      await progressManager.saveProgress(progress);

      // Capture what was saved
      const savedData = mockStorageService.set.mock.calls[0][1];

      // Mock get to return saved data
      mockStorageService.get.mockResolvedValue(savedData);

      // Load progress
      const loadResult = await progressManager.loadProgress();

      expect(loadResult.gameState).toBe('PERSONALITY_TEST');
      expect(loadResult.ptIndex).toBe(25);
      expect(loadResult.ptAnswers).toEqual(progress.ptAnswers);
      expect(loadResult.ptTraits).toEqual(progress.ptTraits);
      expect(loadResult.mbtiDimensions).toEqual(progress.mbtiDimensions);
    });
  });
});
