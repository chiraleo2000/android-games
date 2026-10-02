/**
 * GIFLoader Service
 * 
 * Handles lazy loading, caching, and fallback management for GIF animations.
 * Implements timeout handling and cache size limits.
 */

import { gifAssets, fallbackImages } from '../data/gifAssets.js';

class GIFLoader {
  constructor() {
    this.cache = new Map();
    this.loadingPromises = new Map();
    this.maxCacheSize = 50; // Maximum number of cached GIFs
    this.loadTimeout = 5000; // 5 seconds timeout
  }

  /**
   * Load a GIF by ID with caching
   * @param {string} gifId - The unique identifier for the GIF
   * @returns {Promise<string>} - The GIF URL or fallback image URL
   */
  async load(gifId) {
    // Check cache first
    if (this.cache.has(gifId)) {
      return this.cache.get(gifId);
    }

    // Check if already loading
    if (this.loadingPromises.has(gifId)) {
      return this.loadingPromises.get(gifId);
    }

    // Find GIF asset
    const asset = this.findAsset(gifId);
    if (!asset) {
      console.warn(`GIF asset not found: ${gifId}`);
      return this.getFallback(gifId);
    }

    // Start loading
    const loadPromise = this.loadGIF(asset);
    this.loadingPromises.set(gifId, loadPromise);

    try {
      const url = await loadPromise;
      this.cache.set(gifId, url);
      this.loadingPromises.delete(gifId);
      
      // Enforce cache size limit (FIFO eviction)
      if (this.cache.size > this.maxCacheSize) {
        const firstKey = this.cache.keys().next().value;
        this.cache.delete(firstKey);
      }
      
      return url;
    } catch (error) {
      console.error(`Failed to load GIF ${gifId}:`, error);
      this.loadingPromises.delete(gifId);
      return this.getFallback(gifId);
    }
  }

  /**
   * Preload multiple GIFs
   * @param {string[]} gifIds - Array of GIF identifiers to preload
   * @returns {Promise<void>}
   */
  async preload(gifIds) {
    const promises = gifIds.map(id => this.load(id));
    await Promise.allSettled(promises);
  }

  /**
   * Load GIF with timeout
   * @param {Object} asset - The GIF asset object
   * @returns {Promise<string>} - The loaded GIF URL
   */
  loadGIF(asset) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const timeout = setTimeout(() => {
        img.src = ''; // Cancel loading
        reject(new Error('GIF load timeout'));
      }, this.loadTimeout);

      img.onload = () => {
        clearTimeout(timeout);
        resolve(asset.url);
      };

      img.onerror = () => {
        clearTimeout(timeout);
        reject(new Error('GIF load failed'));
      };

      img.src = asset.url;
    });
  }

  /**
   * Find asset by ID across all categories
   * @param {string} gifId - The GIF identifier
   * @returns {Object|null} - The asset object or null
   */
  findAsset(gifId) {
    for (const category of Object.values(gifAssets)) {
      const asset = category.find(a => a.id === gifId);
      if (asset) return asset;
    }
    return null;
  }

  /**
   * Get fallback image for a GIF
   * @param {string} gifId - The GIF identifier
   * @returns {string} - The fallback image URL
   */
  getFallback(gifId) {
    const asset = this.findAsset(gifId);
    if (asset && asset.category) {
      // Try to find category-specific fallback
      for (const [categoryKey, categoryAssets] of Object.entries(gifAssets)) {
        if (categoryAssets.includes(asset)) {
          return fallbackImages[categoryKey] || fallbackImages.career_start;
        }
      }
    }
    return fallbackImages.career_start;
  }

  /**
   * Get random GIF ID from a category
   * @param {string} category - The category name (e.g., 'feedback_positive')
   * @returns {string|null} - Random GIF ID or null
   */
  getRandomFromCategory(category) {
    const assets = gifAssets[category];
    if (!assets || assets.length === 0) {
      return null;
    }
    const randomAsset = assets[Math.floor(Math.random() * assets.length)];
    return randomAsset.id;
  }

  /**
   * Get random GIF ID from career category
   * @param {string} careerGroup - The career group (e.g., 'tech', 'healthcare')
   * @returns {string|null} - Random GIF ID or null
   */
  getRandomCareerGIF(careerGroup) {
    const careerAssets = gifAssets.career_start.filter(
      asset => asset.category === careerGroup
    );
    
    if (careerAssets.length === 0) {
      // Fallback to any career start GIF
      return this.getRandomFromCategory('career_start');
    }
    
    const randomAsset = careerAssets[Math.floor(Math.random() * careerAssets.length)];
    return randomAsset.id;
  }

  /**
   * Clear the entire cache
   */
  clearCache() {
    this.cache.clear();
    this.loadingPromises.clear();
  }

  /**
   * Get current cache size
   * @returns {number} - Number of cached GIFs
   */
  getCacheSize() {
    return this.cache.size;
  }
}

// Export singleton instance
export const gifLoader = new GIFLoader();
