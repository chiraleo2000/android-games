/**
 * Unit Tests for GIFLoader Service
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { gifLoader } from '../GIFLoader.js';

describe('GIFLoader', () => {
  beforeEach(() => {
    // Clear cache before each test
    gifLoader.clearCache();
    
    // Mock Image constructor
    global.Image = class {
      constructor() {
        setTimeout(() => {
          this.onload?.();
        }, 10);
      }
    };
  });

  describe('load', () => {
    it('should load a GIF and cache it', async () => {
      const gifId = 'success_1';
      const url = await gifLoader.load(gifId);
      
      expect(url).toBeDefined();
      expect(typeof url).toBe('string');
      expect(gifLoader.getCacheSize()).toBe(1);
    });

    it('should return cached GIF on second load', async () => {
      const gifId = 'success_1';
      
      // First load
      const url1 = await gifLoader.load(gifId);
      const cacheSize1 = gifLoader.getCacheSize();
      
      // Second load (should use cache)
      const url2 = await gifLoader.load(gifId);
      const cacheSize2 = gifLoader.getCacheSize();
      
      expect(url1).toBe(url2);
      expect(cacheSize1).toBe(1);
      expect(cacheSize2).toBe(1);
    });

    it('should return fallback for non-existent GIF', async () => {
      const gifId = 'non_existent_gif';
      const url = await gifLoader.load(gifId);
      
      expect(url).toBeDefined();
      expect(url).toContain('placeholder');
    });

    it('should handle load failures gracefully', async () => {
      // Mock Image to fail
      global.Image = class {
        constructor() {
          setTimeout(() => {
            this.onerror?.(new Error('Load failed'));
          }, 10);
        }
      };
      
      const gifId = 'success_1';
      const url = await gifLoader.load(gifId);
      
      // Should return fallback
      expect(url).toBeDefined();
      expect(url).toContain('placeholder');
    });
  });

  describe('preload', () => {
    it('should preload multiple GIFs', async () => {
      const gifIds = ['success_1', 'success_2', 'success_3'];
      
      await gifLoader.preload(gifIds);
      
      expect(gifLoader.getCacheSize()).toBe(3);
    });

    it('should handle preload failures gracefully', async () => {
      const gifIds = ['success_1', 'non_existent', 'success_2'];
      
      await gifLoader.preload(gifIds);
      
      // Should still cache the successful loads
      expect(gifLoader.getCacheSize()).toBeGreaterThan(0);
    });
  });

  describe('cache management', () => {
    it('should enforce cache size limit', async () => {
      // Load more than maxCacheSize (50) GIFs
      const promises = [];
      for (let i = 0; i < 55; i++) {
        promises.push(gifLoader.load(`test_gif_${i}`));
      }
      
      await Promise.allSettled(promises);
      
      // Cache should not exceed max size
      expect(gifLoader.getCacheSize()).toBeLessThanOrEqual(50);
    });

    it('should clear cache completely', async () => {
      await gifLoader.load('success_1');
      await gifLoader.load('success_2');
      
      expect(gifLoader.getCacheSize()).toBe(2);
      
      gifLoader.clearCache();
      
      expect(gifLoader.getCacheSize()).toBe(0);
    });
  });

  describe('getRandomFromCategory', () => {
    it('should return a random GIF ID from category', () => {
      const gifId = gifLoader.getRandomFromCategory('feedback_positive');
      
      expect(gifId).toBeDefined();
      expect(typeof gifId).toBe('string');
    });

    it('should return null for non-existent category', () => {
      const gifId = gifLoader.getRandomFromCategory('non_existent_category');
      
      expect(gifId).toBeNull();
    });

    it('should return different IDs on multiple calls (probabilistic)', () => {
      const ids = new Set();
      
      // Call multiple times
      for (let i = 0; i < 20; i++) {
        const gifId = gifLoader.getRandomFromCategory('feedback_positive');
        ids.add(gifId);
      }
      
      // Should have gotten at least 2 different IDs (very high probability)
      expect(ids.size).toBeGreaterThan(1);
    });
  });

  describe('getRandomCareerGIF', () => {
    it('should return a GIF for specific career group', () => {
      const gifId = gifLoader.getRandomCareerGIF('tech');
      
      expect(gifId).toBeDefined();
      expect(typeof gifId).toBe('string');
    });

    it('should fallback to any career GIF for unknown group', () => {
      const gifId = gifLoader.getRandomCareerGIF('unknown_group');
      
      expect(gifId).toBeDefined();
      expect(typeof gifId).toBe('string');
    });
  });

  describe('findAsset', () => {
    it('should find asset by ID', () => {
      const asset = gifLoader.findAsset('success_1');
      
      expect(asset).toBeDefined();
      expect(asset.id).toBe('success_1');
      expect(asset.url).toBeDefined();
    });

    it('should return null for non-existent asset', () => {
      const asset = gifLoader.findAsset('non_existent');
      
      expect(asset).toBeNull();
    });
  });

  describe('getFallback', () => {
    it('should return fallback image for valid GIF ID', () => {
      const fallback = gifLoader.getFallback('success_1');
      
      expect(fallback).toBeDefined();
      expect(fallback).toContain('placeholder');
    });

    it('should return default fallback for unknown GIF ID', () => {
      const fallback = gifLoader.getFallback('unknown_gif');
      
      expect(fallback).toBeDefined();
      expect(fallback).toContain('placeholder');
    });
  });

  describe('timeout handling', () => {
    it('should timeout after 5 seconds', async () => {
      // Mock Image to never load
      global.Image = class {
        constructor() {
          // Never call onload or onerror
        }
      };
      
      const startTime = Date.now();
      const gifId = 'success_1';
      
      await gifLoader.load(gifId);
      
      const elapsed = Date.now() - startTime;
      
      // Should have timed out (allowing some margin)
      expect(elapsed).toBeGreaterThanOrEqual(5000);
      expect(elapsed).toBeLessThan(6000);
    }, 10000); // Increase test timeout
  });
});
