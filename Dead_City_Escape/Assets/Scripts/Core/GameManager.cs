// ---------------------------------------------------------------------------
// Dead City Escape - Game Manager
// Central game state controller managing run lifecycle, phase transitions,
// seed management, and coordination between all game systems.
// ---------------------------------------------------------------------------
using System;
using UnityEngine;
using UnityEngine.SceneManagement;
using DeadCityEscape.Logic;

namespace DeadCityEscape.Core
{
    /// <summary>
    /// Game phases matching the core game loop.
    /// </summary>
    public enum GamePhase
    {
        MainMenu,
        Loading,
        Spawning,
        Playing,
        Paused,
        EscapeSequence,
        Victory,
        GameOver
    }

    /// <summary>
    /// Selected escape route for the current run.
    /// </summary>
    public enum EscapeRoute
    {
        None,
        Helicopter,
        Car,
        Sewer
    }

    /// <summary>
    /// Central game manager controlling the run lifecycle.
    /// Coordinates all subsystems and manages global game state.
    /// </summary>
    public class GameManager : Singleton<GameManager>
    {
        [Header("Configuration")]
        [SerializeField] private GameConfig _config;

        // Game state
        public GamePhase CurrentPhase { get; private set; } = GamePhase.MainMenu;
        public EscapeRoute SelectedRoute { get; private set; } = EscapeRoute.None;
        public int CurrentSeed { get; private set; }
        public SeededRNG GameRNG { get; private set; }
        public float RunTimer { get; private set; }
        public int PlayerLevel { get; private set; } = 1;
        public int PlayerXP { get; private set; }
        public int SkillPoints { get; private set; }
        public int ZombiesKilled { get; private set; }
        public int SurvivorsRescued { get; private set; }
        public bool IsMobile { get; private set; }

        // Config accessor
        public GameConfig Config => _config;

        // Events for system communication
        public event Action<GamePhase> OnPhaseChanged;
        public event Action<EscapeRoute> OnRouteSelected;
        public event Action<int> OnXPGained;
        public event Action<int> OnLevelUp;
        public event Action OnRunStarted;
        public event Action<bool> OnRunEnded; // true = victory

        protected override void OnInitialize()
        {
            Application.targetFrameRate = _config != null
                ? _config.TargetFrameRate
                : 60;

            IsMobile = Application.isMobilePlatform;

            // Prevent screen dimming during gameplay
            Screen.sleepTimeout = SleepTimeout.NeverSleep;

            // Initialize with default config if none assigned
            if (_config == null)
            {
                _config = ScriptableObject.CreateInstance<GameConfig>();
                Debug.LogWarning("GameManager: No GameConfig assigned, using defaults.");
            }

            // Load player progression from SaveSystem
            if (SaveSystem.Instance != null)
            {
                PlayerLevel = SaveSystem.Instance.Data.PlayerLevel;
                PlayerXP = SaveSystem.Instance.Data.PlayerXP;
                // Skill points are calculated based on level (1 per level, starting at level 1 = 0 points)
                SkillPoints = Mathf.Max(0, PlayerLevel - 1);
            }
        }

        private void OnApplicationPause(bool pauseStatus)
        {
            // Save game state when app is paused (user switches away or locks device)
            if (pauseStatus && SaveSystem.Instance != null)
            {
                Debug.Log("GameManager: Application paused, saving game state...");
                SaveSystem.Instance.Save();
            }
        }

        private void OnApplicationFocus(bool hasFocus)
        {
            // Save game state when app loses focus
            if (!hasFocus && SaveSystem.Instance != null)
            {
                Debug.Log("GameManager: Application lost focus, saving game state...");
                SaveSystem.Instance.Save();
            }
        }

        private void Update()
        {
            if (CurrentPhase == GamePhase.Playing ||
                CurrentPhase == GamePhase.EscapeSequence)
            {
                RunTimer += Time.deltaTime;
            }
        }

        /// <summary>
        /// Starts a new run with the given seed.
        /// </summary>
        public void StartNewRun(int seed = -1)
        {
            CurrentSeed = seed >= 0 ? seed : UnityEngine.Random.Range(0, int.MaxValue);
            GameRNG = new SeededRNG(CurrentSeed);
            RunTimer = 0f;
            ZombiesKilled = 0;
            SurvivorsRescued = 0;
            SelectedRoute = EscapeRoute.None;

            Debug.Log($"GameManager: Starting run with seed {CurrentSeed}");
            OnRunStarted?.Invoke();

            // Transition to loading phase
            TransitionToLoading();
        }

        /// <summary>
        /// Starts a daily challenge run with a deterministic seed.
        /// </summary>
        public void StartDailyChallenge()
        {
            // Deterministic daily seed based on date
            var today = DateTime.UtcNow;
            int dailySeed = today.Year * 10000 + today.Month * 100 + today.Day;
            StartNewRun(dailySeed);
        }

        /// <summary>
        /// Transitions the game to a new phase.
        /// </summary>
        public void SetPhase(GamePhase newPhase)
        {
            if (CurrentPhase == newPhase) return;

            GamePhase oldPhase = CurrentPhase;
            CurrentPhase = newPhase;

            // Handle time scale
            Time.timeScale = newPhase == GamePhase.Paused ? 0f : 1f;

            Debug.Log($"GameManager: Phase {oldPhase} -> {newPhase}");
            OnPhaseChanged?.Invoke(newPhase);
        }

        /// <summary>
        /// Selects an escape route for the current run.
        /// </summary>
        public void SelectEscapeRoute(EscapeRoute route)
        {
            SelectedRoute = route;
            OnRouteSelected?.Invoke(route);
            Debug.Log($"GameManager: Escape route selected: {route}");
        }

        /// <summary>
        /// Awards XP and checks for level ups.
        /// Handles multiple level-ups in one call and grants skill points.
        /// Requirements: 8.11, 8.12
        /// </summary>
        public void AwardXP(int amount)
        {
            if (amount <= 0) return;

            PlayerXP += amount;
            OnXPGained?.Invoke(amount);

            // Check for level up (handle multiple level-ups)
            int xpForNext = GetXPForLevel(PlayerLevel + 1);
            while (PlayerXP >= xpForNext)
            {
                PlayerXP -= xpForNext;
                PlayerLevel++;
                
                // Grant skill point per level-up
                // Requirement: 8.12
                int skillPointsPerLevel = _config?.SkillPointsPerLevel ?? 1;
                SkillPoints += skillPointsPerLevel;
                
                OnLevelUp?.Invoke(PlayerLevel);
                Debug.Log($"GameManager: Level up! Now level {PlayerLevel}, {SkillPoints} skill points available");
                
                xpForNext = GetXPForLevel(PlayerLevel + 1);
            }

            // Persist progression to SaveSystem
            if (SaveSystem.Instance != null)
            {
                SaveSystem.Instance.UpdateProgression(PlayerLevel, PlayerXP);
            }
        }

        /// <summary>
        /// Calculates XP required for a given level.
        /// </summary>
        public int GetXPForLevel(int level)
        {
            if (_config == null) return 200;
            return (int)(_config.BaseXPPerLevel *
                Math.Pow(_config.XPScalePerLevel, level - 1));
        }

        /// <summary>
        /// Records a zombie kill (XP awarded at end of run).
        /// </summary>
        public void RecordZombieKill()
        {
            ZombiesKilled++;
        }

        /// <summary>
        /// Records a survivor rescue (XP awarded at end of run).
        /// </summary>
        public void RecordSurvivorRescue()
        {
            SurvivorsRescued++;
        }

        /// <summary>
        /// Triggers the victory sequence for the current escape route.
        /// Awards XP based on run performance with escape route multiplier.
        /// Requirements: 8.11, 8.12
        /// </summary>
        public void TriggerVictory()
        {
            // Calculate base XP from run performance
            // Base XP formula: (RunTime in seconds) + (KillCount × 10)
            // Requirement: 8.11
            int baseXP = (int)RunTimer + (ZombiesKilled * 10);

            // Apply escape route XP multiplier
            // Helicopter 2.0×, Car 1.5×, Sewer 1.25×
            // Requirement: 8.11
            float multiplier = SelectedRoute switch
            {
                EscapeRoute.Helicopter => _config?.HelicopterXPMultiplier ?? 2.0f,
                EscapeRoute.Car => _config?.CarXPMultiplier ?? 1.5f,
                EscapeRoute.Sewer => _config?.SewerXPMultiplier ?? 1.25f,
                _ => 1.0f
            };

            int finalXP = (int)(baseXP * multiplier);
            
            Debug.Log($"GameManager: Victory! Base XP: {baseXP}, Multiplier: {multiplier}x, Final XP: {finalXP}");
            AwardXP(finalXP);

            // Record run result in SaveSystem
            if (SaveSystem.Instance != null)
            {
                SaveSystem.Instance.RecordRunResult(
                    CurrentSeed,
                    RunTimer,
                    SelectedRoute.ToString(),
                    ZombiesKilled,
                    SurvivorsRescued,
                    true
                );
            }

            SetPhase(GamePhase.Victory);
            OnRunEnded?.Invoke(true);
        }

        /// <summary>
        /// Triggers game over (player death).
        /// </summary>
        public void TriggerGameOver()
        {
            // Record run result in SaveSystem
            if (SaveSystem.Instance != null)
            {
                SaveSystem.Instance.RecordRunResult(
                    CurrentSeed,
                    RunTimer,
                    SelectedRoute.ToString(),
                    ZombiesKilled,
                    SurvivorsRescued,
                    false
                );
            }

            SetPhase(GamePhase.GameOver);
            OnRunEnded?.Invoke(false);
        }

        /// <summary>
        /// Pauses/unpauses the game.
        /// </summary>
        public void TogglePause()
        {
            if (CurrentPhase == GamePhase.Playing)
                SetPhase(GamePhase.Paused);
            else if (CurrentPhase == GamePhase.Paused)
                SetPhase(GamePhase.Playing);
        }

        /// <summary>
        /// Drops in-memory progression and the active run so a wipe cannot be saved back.
        /// </summary>
        public void ApplyFreshStart()
        {
            Time.timeScale = 1f;
            PlayerLevel = 1;
            PlayerXP = 0;
            SkillPoints = 0;
            CurrentSeed = 0;
            GameRNG = null;
            RunTimer = 0f;
            ZombiesKilled = 0;
            SurvivorsRescued = 0;
            SelectedRoute = EscapeRoute.None;
            if (CurrentPhase != GamePhase.MainMenu)
                SetPhase(GamePhase.MainMenu);
        }

        /// <summary>
        /// Returns to main menu and cleans up.
        /// </summary>
        public void ReturnToMainMenu()
        {
            Time.timeScale = 1f;
            SetPhase(GamePhase.MainMenu);
            SceneManager.LoadScene("MainMenu");
        }

        // ===================================================================
        // Phase Transition Methods
        // ===================================================================

        /// <summary>
        /// Transitions to Loading phase with async scene loading.
        /// Loads LoadingScreen scene additively and starts Game scene load.
        /// Requirements: 15.1, 15.2, 15.3
        /// </summary>
        private void TransitionToLoading()
        {
            SetPhase(GamePhase.Loading);

            // Load LoadingScreen scene additively
            SceneManager.LoadSceneAsync("LoadingScreen", LoadSceneMode.Additive).completed += loadOp =>
            {
                // Find LoadingScreenUI in the loaded scene
                var loadingScreenUI = FindAnyObjectByType<UI.LoadingScreenUI>();
                if (loadingScreenUI != null)
                {
                    loadingScreenUI.Show("Game", CurrentSeed);
                }

                // Start loading Game scene asynchronously
                var gameLoadOp = SceneManager.LoadSceneAsync("Game", LoadSceneMode.Additive);
                gameLoadOp.allowSceneActivation = false;

                // Monitor progress
                StartCoroutine(MonitorSceneLoading(gameLoadOp, loadingScreenUI));
            };
        }

        /// <summary>
        /// Monitors async scene loading and transitions to Spawning when complete.
        /// </summary>
        private System.Collections.IEnumerator MonitorSceneLoading(
            AsyncOperation gameLoadOp, 
            UI.LoadingScreenUI loadingScreenUI)
        {
            // Wait for scene to be ready (progress reaches 0.9)
            while (gameLoadOp.progress < 0.9f)
            {
                if (loadingScreenUI != null)
                {
                    loadingScreenUI.SetProgress(gameLoadOp.progress / 0.9f);
                }
                yield return null;
            }

            // Scene is ready, set progress to 100%
            if (loadingScreenUI != null)
            {
                loadingScreenUI.SetProgress(1f);
            }

            // Brief pause at 100%
            yield return new WaitForSeconds(0.2f);

            // Play breach transition
            bool breachComplete = false;
            if (loadingScreenUI != null)
            {
                loadingScreenUI.PlayBreachTransition(() => breachComplete = true);
            }
            else
            {
                breachComplete = true;
            }

            yield return new WaitUntil(() => breachComplete);

            // Activate the Game scene
            gameLoadOp.allowSceneActivation = true;

            // Wait for scene to fully activate
            yield return new WaitUntil(() => gameLoadOp.isDone);

            // Unload MainMenu and LoadingScreen scenes
            for (int i = 0; i < SceneManager.sceneCount; i++)
            {
                Scene scene = SceneManager.GetSceneAt(i);
                if (scene.name == "MainMenu" || scene.name == "LoadingScreen")
                {
                    SceneManager.UnloadSceneAsync(scene);
                }
            }

            // Transition to Spawning phase
            TransitionToSpawning();
        }

        /// <summary>
        /// Transitions to Spawning phase with CityGenerator initialization.
        /// Initializes the procedural city and prepares for gameplay.
        /// Requirements: 15.1, 15.2, 15.3
        /// </summary>
        private void TransitionToSpawning()
        {
            SetPhase(GamePhase.Spawning);

            // Find CityGenerator in the Game scene
            var cityGenerator = FindAnyObjectByType<WorldGen.CityGenerator>();
            if (cityGenerator != null)
            {
                // Show generating district indicator if needed
                var loadingScreenUI = FindAnyObjectByType<UI.LoadingScreenUI>();
                if (loadingScreenUI != null)
                {
                    loadingScreenUI.ShowGeneratingDistrictIndicator();
                }

                // Initialize city generator with the seeded RNG
                cityGenerator.Initialize(GameRNG);

                // Hide generating district indicator
                if (loadingScreenUI != null)
                {
                    loadingScreenUI.HideGeneratingDistrictIndicator();
                }

                Debug.Log("GameManager: CityGenerator initialized");
            }
            else
            {
                Debug.LogError("GameManager: CityGenerator not found in Game scene!");
            }

            // Transition to Playing phase
            TransitionToPlaying();
        }

        /// <summary>
        /// Transitions to Playing phase with player spawn.
        /// Spawns the player at a safe location and starts gameplay.
        /// Requirements: 15.1, 15.2, 15.3, 15.4
        /// </summary>
        private void TransitionToPlaying()
        {
            // Find player controller
            var playerController = FindAnyObjectByType<Player.PlayerController>();
            if (playerController != null)
            {
                // Find city generator to get spawn position
                var cityGenerator = FindAnyObjectByType<WorldGen.CityGenerator>();
                if (cityGenerator != null)
                {
                    // Get spawn position in a low-threat zone
                    Vector3 spawnPosition = cityGenerator.GetSpawnPosition(DeadCityEscape.Logic.ThreatLevel.Low);
                    
                    // Teleport player to spawn position
                    playerController.TeleportTo(spawnPosition);
                    
                    Debug.Log($"GameManager: Player spawned at {spawnPosition}");
                }
                else
                {
                    Debug.LogWarning("GameManager: CityGenerator not found, using default spawn position");
                    playerController.TeleportTo(new Vector3(50, 1, 50));
                }
            }
            else
            {
                Debug.LogError("GameManager: PlayerController not found in Game scene!");
            }

            // Set phase to Playing and broadcast event
            SetPhase(GamePhase.Playing);
            
            Debug.Log("GameManager: Gameplay started");
        }
    }
}
