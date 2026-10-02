using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using UnityEngine;

namespace DeadCityEscape
{
    /// <summary>
    /// On-device disk cache for procedurally generated assets.
    /// Key format: "{appVersion}:{recipeHash}:{deviceTier}"
    /// </summary>
    public static class RecipeCache
    {
        private static readonly string CacheDirectory = Path.Combine(Application.persistentDataPath, "recipe_cache");
        private static readonly string ManifestPath = Path.Combine(CacheDirectory, "manifest.json");
        private static List<RecipeCacheEntry> _manifest;
        private static bool _initialized = false;

        [Serializable]
        private class ManifestData
        {
            public List<RecipeCacheEntry> entries = new List<RecipeCacheEntry>();
        }

        /// <summary>
        /// Initialize the cache system and load the manifest.
        /// </summary>
        private static void Initialize()
        {
            if (_initialized) return;

            if (!Directory.Exists(CacheDirectory))
            {
                Directory.CreateDirectory(CacheDirectory);
            }

            LoadManifest();
            _initialized = true;
        }

        /// <summary>
        /// Try to retrieve cached data for the given key.
        /// </summary>
        public static bool TryGet(string key, out byte[] data)
        {
            Initialize();
            data = null;

            var entry = _manifest.FirstOrDefault(e => e.Key == key);
            if (entry == null) return false;

            if (!File.Exists(entry.FilePath))
            {
                // File was deleted externally, remove from manifest
                _manifest.Remove(entry);
                SaveManifest();
                return false;
            }

            try
            {
                data = File.ReadAllBytes(entry.FilePath);
                // Update last access time
                entry.LastAccessUtc = DateTimeOffset.UtcNow.ToUnixTimeSeconds();
                SaveManifest();
                return true;
            }
            catch (Exception e)
            {
                Debug.LogError($"RecipeCache: Failed to read {entry.FilePath}: {e.Message}");
                return false;
            }
        }

        /// <summary>
        /// Store data in the cache with the given key.
        /// </summary>
        public static void Store(string key, byte[] data)
        {
            Initialize();

            // Check if entry already exists
            var existing = _manifest.FirstOrDefault(e => e.Key == key);
            if (existing != null)
            {
                // Update existing entry
                try
                {
                    File.WriteAllBytes(existing.FilePath, data);
                    existing.SizeBytes = data.Length;
                    existing.LastAccessUtc = DateTimeOffset.UtcNow.ToUnixTimeSeconds();
                    SaveManifest();
                    return;
                }
                catch (Exception e)
                {
                    Debug.LogError($"RecipeCache: Failed to update {existing.FilePath}: {e.Message}");
                    return;
                }
            }

            // Create new entry
            string fileName = ComputeHash(key) + ".dat";
            string filePath = Path.Combine(CacheDirectory, fileName);

            try
            {
                File.WriteAllBytes(filePath, data);

                var entry = new RecipeCacheEntry
                {
                    Key = key,
                    SizeBytes = data.Length,
                    LastAccessUtc = DateTimeOffset.UtcNow.ToUnixTimeSeconds(),
                    FilePath = filePath
                };

                _manifest.Add(entry);
                SaveManifest();

                // Enforce disk cap after adding
                EnforceDiskCap();
            }
            catch (Exception e)
            {
                Debug.LogError($"RecipeCache: Failed to store {filePath}: {e.Message}");
            }
        }

        /// <summary>
        /// Invalidate all cache entries from a previous app version.
        /// </summary>
        public static void InvalidateVersion(string oldVersion)
        {
            Initialize();

            var toRemove = _manifest.Where(e => e.Key.StartsWith(oldVersion + ":")).ToList();
            foreach (var entry in toRemove)
            {
                try
                {
                    if (File.Exists(entry.FilePath))
                    {
                        File.Delete(entry.FilePath);
                    }
                    _manifest.Remove(entry);
                }
                catch (Exception e)
                {
                    Debug.LogError($"RecipeCache: Failed to delete {entry.FilePath}: {e.Message}");
                }
            }

            if (toRemove.Count > 0)
            {
                SaveManifest();
                Debug.Log($"RecipeCache: Invalidated {toRemove.Count} entries from version {oldVersion}");
            }
        }

        /// <summary>
        /// Enforce the disk cap by evicting least-recently-used entries.
        /// </summary>
        public static void EnforceDiskCap(long maxBytes = 500L * 1024 * 1024)
        {
            Initialize();

            long totalSize = _manifest.Sum(e => e.SizeBytes);
            if (totalSize <= maxBytes) return;

            // Sort by last access time (oldest first)
            var sorted = _manifest.OrderBy(e => e.LastAccessUtc).ToList();

            while (totalSize > maxBytes && sorted.Count > 0)
            {
                var toEvict = sorted[0];
                sorted.RemoveAt(0);

                try
                {
                    if (File.Exists(toEvict.FilePath))
                    {
                        File.Delete(toEvict.FilePath);
                    }
                    _manifest.Remove(toEvict);
                    totalSize -= toEvict.SizeBytes;
                }
                catch (Exception e)
                {
                    Debug.LogError($"RecipeCache: Failed to evict {toEvict.FilePath}: {e.Message}");
                }
            }

            SaveManifest();
            Debug.Log($"RecipeCache: Enforced disk cap, current size: {totalSize / (1024f * 1024f):F2} MB");
        }

        /// <summary>
        /// Drops the in-memory cache index. Does not write a new manifest.
        /// Call this before deleting the cache directory.
        /// </summary>
        public static void Discard()
        {
            _manifest = new List<RecipeCacheEntry>();
            _initialized = false;
        }

        /// <summary>
        /// Compute SHA256 hash of the input string for file naming.
        /// </summary>
        private static string ComputeHash(string input)
        {
            using (var sha256 = SHA256.Create())
            {
                byte[] hashBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(input));
                return BitConverter.ToString(hashBytes).Replace("-", "").ToLowerInvariant();
            }
        }

        /// <summary>
        /// Validates that a file path is safely within the cache directory.
        /// Prevents path traversal attacks from tampered manifest data.
        /// </summary>
        private static bool IsPathWithinCacheDir(string filePath)
        {
            if (string.IsNullOrEmpty(filePath)) return false;
            string fullPath = Path.GetFullPath(filePath);
            string cacheFullPath = Path.GetFullPath(CacheDirectory + Path.DirectorySeparatorChar);
            return fullPath.StartsWith(cacheFullPath, StringComparison.OrdinalIgnoreCase);
        }

        /// <summary>
        /// Load the manifest from disk.
        /// </summary>
        private static void LoadManifest()
        {
            if (File.Exists(ManifestPath))
            {
                try
                {
                    string json = File.ReadAllText(ManifestPath);
                    var manifestData = JsonUtility.FromJson<ManifestData>(json);
                    _manifest = manifestData?.entries ?? new List<RecipeCacheEntry>();

                    // Validate all file paths are within cache directory (prevent path traversal)
                    int removed = _manifest.RemoveAll(e => !IsPathWithinCacheDir(e.FilePath));
                    if (removed > 0)
                    {
                        Debug.LogWarning($"RecipeCache: Removed {removed} entries with invalid paths.");
                        SaveManifest();
                    }
                }
                catch (Exception e)
                {
                    Debug.LogError($"RecipeCache: Failed to load manifest: {e.Message}");
                    _manifest = new List<RecipeCacheEntry>();
                }
            }
            else
            {
                _manifest = new List<RecipeCacheEntry>();
            }
        }

        /// <summary>
        /// Save the manifest to disk.
        /// </summary>
        private static void SaveManifest()
        {
            try
            {
                var manifestData = new ManifestData { entries = _manifest };
                string json = JsonUtility.ToJson(manifestData, true);
                File.WriteAllText(ManifestPath, json);
            }
            catch (Exception e)
            {
                Debug.LogError($"RecipeCache: Failed to save manifest: {e.Message}");
            }
        }
    }

    /// <summary>
    /// Represents a single entry in the recipe cache manifest.
    /// </summary>
    [Serializable]
    public class RecipeCacheEntry
    {
        public string Key;          // "{appVersion}:{recipeHash}:{deviceTier}"
        public long SizeBytes;
        public long LastAccessUtc;  // Unix timestamp
        public string FilePath;     // Absolute path to cached file
    }
}
