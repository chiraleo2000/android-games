// ---------------------------------------------------------------------------
// Dead City Escape - Save System
// Persists run results, progression, and settings using JSON serialization.
// ---------------------------------------------------------------------------
using System;
using System.IO;
using DeadCityEscape.Logic;
using UnityEngine;

namespace DeadCityEscape.Core
{
    /// <summary>
    /// Save data structure for persistent game state.
    /// </summary>
    [Serializable]
    public class SaveData
    {
        // Progression
        public int PlayerLevel = 1;
        public int PlayerXP = 0;
        public int TotalRunsCompleted = 0;
        public int TotalZombiesKilled = 0;
        public int TotalSurvivorsRescued = 0;
        public float BestRunTime = float.MaxValue;
        public int BestRunSeed = 0;
        public string BestEscapeRoute = "";

        // Skill tree state (serialized as comma-separated unlocked IDs)
        public string UnlockedSkillIds = "";

        // Settings
        public float MasterVolume = 1.0f;
        public float MusicVolume = 0.6f;
        public float SFXVolume = 0.8f;
        public float MouseSensitivity = 2.0f;
        public float TouchSensitivity = 1.5f;
        public bool InvertY = false;
        public int QualityLevel = 1;

        // Daily challenge
        public string LastDailySeed = "";
        public float LastDailyTime = float.MaxValue;

        // An in-progress run is restorable only when both fields say so.
        // A wipe sets these back to a fresh snapshot.
        public bool RunInProgress = false;
        public int ActiveRunSeed = 0;

        // Timestamps
        public string LastPlayedUTC = "";
        public string FirstPlayedUTC = "";
    }

    /// <summary>
    /// Handles saving and loading game data to persistent storage.
    /// Uses JSON serialization for cross-platform compatibility.
    /// </summary>
    public class SaveSystem : Singleton<SaveSystem>
    {
        private const string SaveFileName = "dce_save.json";
        private SaveData _currentData;
        private string _savePath;
        private bool _suspendPersistence;

        public SaveData Data => _currentData;

        public bool HasRestorableRun =>
            _currentData != null &&
            RunSaveSnapshot.IsRestorable(_currentData.RunInProgress, _currentData.ActiveRunSeed);

        protected override void OnInitialize()
        {
            _savePath = Path.Combine(Application.persistentDataPath, SaveFileName);
            Load();
        }

        /// <summary>
        /// Loads save data from disk. Creates default if none exists.
        /// </summary>
        public void Load()
        {
            if (File.Exists(_savePath))
            {
                try
                {
                    string json = File.ReadAllText(_savePath);
                    _currentData = JsonUtility.FromJson<SaveData>(json);
                    Debug.Log("SaveSystem: Loaded save data successfully.");
                }
                catch (Exception ex)
                {
                    Debug.LogError($"SaveSystem: Failed to load save data: {LogRedactor.Redact(ex.Message)}");
                    _currentData = CreateDefault();
                }
            }
            else
            {
                _currentData = CreateDefault();
                Save();
            }
        }

        /// <summary>
        /// Saves current data to disk.
        /// </summary>
        public void Save()
        {
            if (_suspendPersistence || _currentData == null)
                return;

            try
            {
                _currentData.LastPlayedUTC = DateTime.UtcNow.ToString("o");
                string json = JsonUtility.ToJson(_currentData, true);
                File.WriteAllText(_savePath, json);
                Debug.Log("SaveSystem: Save data written to disk.");
            }
            catch (Exception ex)
            {
                Debug.LogError($"SaveSystem: Failed to save: {LogRedactor.Redact(ex.Message)}");
            }
        }

        /// <summary>
        /// Records the result of a completed run.
        /// </summary>
        public void RecordRunResult(int seed, float time, string escapeRoute,
            int zombiesKilled, int survivorsRescued, bool victory)
        {
            _currentData.TotalRunsCompleted++;
            _currentData.TotalZombiesKilled += zombiesKilled;
            _currentData.TotalSurvivorsRescued += survivorsRescued;

            if (victory && time < _currentData.BestRunTime)
            {
                _currentData.BestRunTime = time;
                _currentData.BestRunSeed = seed;
                _currentData.BestEscapeRoute = escapeRoute;
            }

            Save();
        }

        /// <summary>
        /// Updates the player's progression data.
        /// </summary>
        public void UpdateProgression(int level, int xp)
        {
            _currentData.PlayerLevel = level;
            _currentData.PlayerXP = xp;
            Save();
        }

        /// <summary>
        /// Saves unlocked skill IDs.
        /// </summary>
        public void SaveSkills(string[] unlockedIds)
        {
            _currentData.UnlockedSkillIds = string.Join(",", unlockedIds);
            Save();
        }

        /// <summary>
        /// Returns the array of unlocked skill IDs.
        /// </summary>
        public string[] GetUnlockedSkillIds()
        {
            if (string.IsNullOrEmpty(_currentData.UnlockedSkillIds))
                return Array.Empty<string>();
            return _currentData.UnlockedSkillIds.Split(',');
        }

        /// <summary>
        /// Deletes all save data and creates fresh defaults.
        /// </summary>
        public void DeleteSaveData()
        {
            TryDeleteAllLocalData(out _);
        }

        /// <summary>
        /// Deletes save files, cache, and preferences on this device, then stores a fresh
        /// snapshot with no run to restore. Requires the caller to have confirmed first.
        /// </summary>
        public bool TryDeleteAllLocalData(out string error)
        {
            error = null;
            _suspendPersistence = true;
            try
            {
                var gm = GameManager.Instance;
                if (gm != null)
                    gm.ApplyFreshStart();

                PlayerPrefs.DeleteAll();
                PlayerPrefs.Save();
                global::DeadCityEscape.RecipeCache.Discard();

                var root = Application.persistentDataPath;
                LocalDataWipe.DeleteContents(root);
                _currentData = CreateDefault();
                _savePath = Path.Combine(root, SaveFileName);
            }
            catch (Exception ex)
            {
                _currentData = CreateDefault();
                error = LogRedactor.Redact(ex.Message);
            }
            finally
            {
                _suspendPersistence = false;
                Save();
            }

            ApplyFreshRuntimeState();

            var fresh = _currentData != null
                && !HasRestorableRun
                && _currentData.PlayerLevel == RunSaveSnapshot.Fresh().PlayerLevel
                && _currentData.TotalRunsCompleted == 0
                && string.IsNullOrEmpty(_currentData.UnlockedSkillIds)
                && FreshSaveOnDisk();
            if (!fresh && string.IsNullOrEmpty(error))
                error = "Local data could not be reset.";
            return fresh;
        }

        bool FreshSaveOnDisk()
        {
            try
            {
                if (string.IsNullOrEmpty(_savePath) || !File.Exists(_savePath))
                    return false;
                var json = File.ReadAllText(_savePath);
                var compact = json.Replace(" ", "").Replace("\r", "").Replace("\n", "").Replace("\t", "");
                return compact.Contains("\"PlayerLevel\":1,")
                    && compact.Contains("\"TotalRunsCompleted\":0,")
                    && compact.Contains("\"RunInProgress\":false")
                    && compact.Contains("\"ActiveRunSeed\":0,");
            }
            catch (Exception)
            {
                return false;
            }
        }

        void ApplyFreshRuntimeState()
        {
            if (_currentData == null)
                return;

            try
            {
                var quality = FindAnyObjectByType<QualityManager>();
                if (quality != null)
                    quality.ApplyQualityLevel(_currentData.QualityLevel);

                var audio = FindAnyObjectByType<Audio.AudioManager>();
                if (audio != null)
                {
                    audio.SetVolume(Audio.AudioCategory.Master, _currentData.MasterVolume);
                    audio.SetVolume(Audio.AudioCategory.Music, _currentData.MusicVolume);
                    audio.SetVolume(Audio.AudioCategory.SFX, _currentData.SFXVolume);
                }
            }
            catch (Exception ex)
            {
                Debug.LogWarning($"SaveSystem: Fresh state apply skipped: {LogRedactor.Redact(ex.Message)}");
            }
        }

        private SaveData CreateDefault()
        {
            return new SaveData
            {
                FirstPlayedUTC = DateTime.UtcNow.ToString("o"),
                LastPlayedUTC = DateTime.UtcNow.ToString("o")
            };
        }
    }
}
