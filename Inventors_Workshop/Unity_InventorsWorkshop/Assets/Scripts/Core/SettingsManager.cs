using UnityEngine;

namespace InventorsWorkshop.Core
{
    /// <summary>
    /// Manages game settings (audio, graphics, controls, etc.)
    /// </summary>
    public class SettingsManager : MonoBehaviour
    {
        public GameSettings Settings { get; private set; }

        private const string SETTINGS_KEY = "GameSettings";

        private void Awake()
        {
            LoadSettings();
        }

        public void LoadSettings()
        {
            if (PlayerPrefs.HasKey(SETTINGS_KEY))
            {
                string json = PlayerPrefs.GetString(SETTINGS_KEY);
                Settings = JsonUtility.FromJson<GameSettings>(json);
                Debug.Log("Settings loaded");
            }
            else
            {
                Settings = new GameSettings();
                SaveSettings();
                Debug.Log("Default settings created");
            }
        }

        public void SaveSettings()
        {
            string json = JsonUtility.ToJson(Settings);
            PlayerPrefs.SetString(SETTINGS_KEY, json);
            PlayerPrefs.Save();
            Debug.Log("Settings saved");
        }

        public void ResetToDefaults()
        {
            Settings = new GameSettings();
            SaveSettings();
            Debug.Log("Settings reset to defaults");
        }

        #region Setting Accessors
        public void SetMusicVolume(float volume)
        {
            Settings.musicVolume = Mathf.Clamp01(volume);
            SaveSettings();
        }

        public void SetSFXVolume(float volume)
        {
            Settings.sfxVolume = Mathf.Clamp01(volume);
            SaveSettings();
        }

        public void SetHapticsEnabled(bool enabled)
        {
            Settings.hapticsEnabled = enabled;
            SaveSettings();
        }

        public void SetLanguage(string language)
        {
            Settings.language = language;
            SaveSettings();
        }

        public void SetTheme(string theme)
        {
            Settings.theme = theme;
            SaveSettings();
        }

        public void SetTutorialCompleted(bool completed)
        {
            Settings.tutorialCompleted = completed;
            SaveSettings();
        }
        #endregion
    }

    [System.Serializable]
    public class GameSettings
    {
        [Header("Audio")]
        public float musicVolume = 0.7f;
        public float sfxVolume = 0.8f;

        [Header("Controls")]
        public bool hapticsEnabled = true;
        public float touchSensitivity = 1.0f;

        [Header("Graphics")]
        public int qualityLevel = 2; // 0=Low, 1=Medium, 2=High
        public bool showFPS = false;

        [Header("Gameplay")]
        public bool autoSave = true;
        public float autoSaveInterval = 60f; // seconds
        public bool showTutorialHints = true;

        [Header("Localization")]
        public string language = "English";

        [Header("UI")]
        public string theme = "Light"; // Light, Dark
        public float uiScale = 1.0f;

        [Header("Progress")]
        public bool tutorialCompleted = false;
        public bool firstTimePlaying = true;
    }
}
