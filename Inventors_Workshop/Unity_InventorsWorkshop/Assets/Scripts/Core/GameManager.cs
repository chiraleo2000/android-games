using UnityEngine;
using UnityEngine.SceneManagement;

namespace InventorsWorkshop.Core
{
    /// <summary>
    /// Main game manager - Singleton pattern
    /// Handles game state, scene management, and core systems
    /// </summary>
    public class GameManager : MonoBehaviour
    {
        #region Singleton
        private static GameManager _instance;
        public static GameManager Instance
        {
            get
            {
                if (_instance == null)
                {
                    _instance = FindObjectOfType<GameManager>();
                    if (_instance == null)
                    {
                        GameObject go = new GameObject("GameManager");
                        _instance = go.AddComponent<GameManager>();
                    }
                }
                return _instance;
            }
        }
        #endregion

        [Header("Game State")]
        [SerializeField] private GameState currentState = GameState.MainMenu;
        
        [Header("Managers")]
        public AudioManager AudioManager { get; private set; }
        public SaveManager SaveManager { get; private set; }
        public SettingsManager SettingsManager { get; private set; }

        [Header("Settings")]
        [SerializeField] private bool debugMode = false;

        private void Awake()
        {
            // Singleton pattern
            if (_instance != null && _instance != this)
            {
                Destroy(gameObject);
                return;
            }

            _instance = this;
            DontDestroyOnLoad(gameObject);

            InitializeManagers();
        }

        private void Start()
        {
            // Load settings
            SettingsManager.LoadSettings();
            
            // Apply settings
            ApplySettings();

            Log("Game Manager initialized");
        }

        private void InitializeManagers()
        {
            // Initialize sub-managers
            AudioManager = GetComponent<AudioManager>() ?? gameObject.AddComponent<AudioManager>();
            SaveManager = GetComponent<SaveManager>() ?? gameObject.AddComponent<SaveManager>();
            SettingsManager = GetComponent<SettingsManager>() ?? gameObject.AddComponent<SettingsManager>();
        }

        private void ApplySettings()
        {
            // Apply audio settings
            AudioManager.SetMusicVolume(SettingsManager.Settings.musicVolume);
            AudioManager.SetSFXVolume(SettingsManager.Settings.sfxVolume);

            // Apply graphics settings
            Application.targetFrameRate = 60;
            Screen.sleepTimeout = SleepTimeout.NeverSleep;
        }

        #region Scene Management
        public void LoadScene(string sceneName)
        {
            Log($"Loading scene: {sceneName}");
            SceneManager.LoadScene(sceneName);
        }

        public void LoadMainMenu()
        {
            currentState = GameState.MainMenu;
            LoadScene("MainMenu");
        }

        public void LoadGameplay()
        {
            currentState = GameState.Gameplay;
            LoadScene("Gameplay");
        }

        public void LoadSettings()
        {
            currentState = GameState.Settings;
            LoadScene("Settings");
        }

        public void LoadExamples()
        {
            currentState = GameState.Examples;
            LoadScene("Examples");
        }

        public void LoadTutorial()
        {
            currentState = GameState.Tutorial;
            LoadScene("Tutorial");
        }

        public void QuitGame()
        {
            Log("Quitting game");
            #if UNITY_EDITOR
                UnityEditor.EditorApplication.isPlaying = false;
            #else
                Application.Quit();
            #endif
        }
        #endregion

        #region Game State
        public GameState GetCurrentState()
        {
            return currentState;
        }

        public void SetGameState(GameState newState)
        {
            currentState = newState;
            Log($"Game state changed to: {newState}");
        }

        public bool IsPlaying()
        {
            return currentState == GameState.Gameplay;
        }

        public bool IsPaused()
        {
            return Time.timeScale == 0f;
        }

        public void PauseGame()
        {
            Time.timeScale = 0f;
            Log("Game paused");
        }

        public void ResumeGame()
        {
            Time.timeScale = 1f;
            Log("Game resumed");
        }
        #endregion

        #region Utility
        public void Log(string message)
        {
            if (debugMode)
            {
                Debug.Log($"[GameManager] {message}");
            }
        }

        public void LogWarning(string message)
        {
            Debug.LogWarning($"[GameManager] {message}");
        }

        public void LogError(string message)
        {
            Debug.LogError($"[GameManager] {message}");
        }
        #endregion
    }

    public enum GameState
    {
        MainMenu,
        Gameplay,
        Settings,
        Examples,
        Tutorial,
        Paused
    }
}
