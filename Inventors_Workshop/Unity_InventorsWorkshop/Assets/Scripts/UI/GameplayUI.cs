using UnityEngine;
using UnityEngine.UI;
using TMPro;
using InventorsWorkshop.Gameplay;

namespace InventorsWorkshop.UI
{
    /// <summary>
    /// Gameplay UI Controller - manages all UI during gameplay
    /// </summary>
    public class GameplayUI : MonoBehaviour
    {
        [Header("Top Bar")]
        [SerializeField] private Button menuButton;
        [SerializeField] private Button pauseButton;
        [SerializeField] private Button settingsButton;
        [SerializeField] private Button helpButton;

        [Header("Component Palette")]
        [SerializeField] private GameObject palettePanel;
        [SerializeField] private Button paletteTog Button;
        [SerializeField] private Transform componentGrid;
        [SerializeField] private GameObject componentButtonPrefab;

        [Header("Control Panel")]
        [SerializeField] private Button playButton;
        [SerializeField] private Button pauseSimButton;
        [SerializeField] private Button stopButton;
        [SerializeField] private Button saveButton;
        [SerializeField] private Button loadButton;
        [SerializeField] private Button clearButton;

        [Header("Status Bar")]
        [SerializeField] private TextMeshProUGUI entityCountText;
        [SerializeField] private TextMeshProUGUI fpsText;
        [SerializeField] private TextMeshProUGUI simStatusText;

        [Header("Panels")]
        [SerializeField] private GameObject pausePanel;
        [SerializeField] private GameObject savePanel;
        [SerializeField] private GameObject loadPanel;

        // Managers
        private Core.GameManager gameManager;
        private Core.AudioManager audioManager;
        private WorkspaceManager workspaceManager;

        // State
        private bool isPaletteOpen = true;
        private bool isSimulationRunning = false;

        private void Start()
        {
            gameManager = Core.GameManager.Instance;
            audioManager = gameManager.AudioManager;
            workspaceManager = FindObjectOfType<WorkspaceManager>();

            SetupButtons();
            SetupComponentPalette();
            UpdateUI();

            // Play gameplay music
            audioManager.PlayMusic("gameplay");
        }

        private void Update()
        {
            UpdateStatusBar();
        }

        private void SetupButtons()
        {
            // Top bar
            if (menuButton != null)
                menuButton.onClick.AddListener(OnMenuClicked);
            if (pauseButton != null)
                pauseButton.onClick.AddListener(OnPauseClicked);
            if (settingsButton != null)
                settingsButton.onClick.AddListener(OnSettingsClicked);
            if (helpButton != null)
                helpButton.onClick.AddListener(OnHelpClicked);

            // Palette
            if (paletteToggleButton != null)
                paletteToggleButton.onClick.AddListener(OnPaletteToggleClicked);

            // Control panel
            if (playButton != null)
                playButton.onClick.AddListener(OnPlayClicked);
            if (pauseSimButton != null)
                pauseSimButton.onClick.AddListener(OnPauseSimClicked);
            if (stopButton != null)
                stopButton.onClick.AddListener(OnStopClicked);
            if (saveButton != null)
                saveButton.onClick.AddListener(OnSaveClicked);
            if (loadButton != null)
                loadButton.onClick.AddListener(OnLoadClicked);
            if (clearButton != null)
                clearButton.onClick.AddListener(OnClearClicked);
        }

        private void SetupComponentPalette()
        {
            if (componentGrid == null || componentButtonPrefab == null) return;

            // Component types to add
            string[] components = { "Gear", "Motor", "Block", "Battery", "Switch", "Sensor" };

            foreach (string comp in components)
            {
                GameObject btn = Instantiate(componentButtonPrefab, componentGrid);
                Button button = btn.GetComponent<Button>();
                TextMeshProUGUI text = btn.GetComponentInChildren<TextMeshProUGUI>();

                if (text != null)
                    text.text = comp;

                if (button != null)
                {
                    string componentType = comp; // Capture for closure
                    button.onClick.AddListener(() => OnComponentSelected(componentType));
                }
            }
        }

        #region Button Callbacks
        private void OnMenuClicked()
        {
            audioManager.PlaySFX("buttonClick");
            audioManager.PlayHaptic(Core.HapticType.Light);
            ShowPausePanel();
        }

        private void OnPauseClicked()
        {
            audioManager.PlaySFX("buttonClick");
            audioManager.PlayHaptic(Core.HapticType.Light);
            
            if (gameManager.IsPaused())
            {
                gameManager.ResumeGame();
            }
            else
            {
                gameManager.PauseGame();
            }
            
            UpdateUI();
        }

        private void OnSettingsClicked()
        {
            audioManager.PlaySFX("buttonClick");
            audioManager.PlayHaptic(Core.HapticType.Light);
            gameManager.LoadSettings();
        }

        private void OnHelpClicked()
        {
            audioManager.PlaySFX("buttonClick");
            audioManager.PlayHaptic(Core.HapticType.Light);
            // Show help dialog
            Debug.Log("Help clicked");
        }

        private void OnPaletteToggleClicked()
        {
            audioManager.PlaySFX("buttonClick");
            audioManager.PlayHaptic(Core.HapticType.Light);
            
            isPaletteOpen = !isPaletteOpen;
            if (palettePanel != null)
            {
                palettePanel.SetActive(isPaletteOpen);
            }
        }

        private void OnPlayClicked()
        {
            audioManager.PlaySFX("buttonClick");
            audioManager.PlayHaptic(Core.HapticType.Medium);
            
            isSimulationRunning = true;
            Time.timeScale = 1f;
            
            audioManager.PlaySFX("motorStart");
            UpdateUI();
        }

        private void OnPauseSimClicked()
        {
            audioManager.PlaySFX("buttonClick");
            audioManager.PlayHaptic(Core.HapticType.Light);
            
            Time.timeScale = 0f;
            UpdateUI();
        }

        private void OnStopClicked()
        {
            audioManager.PlaySFX("buttonClick");
            audioManager.PlayHaptic(Core.HapticType.Medium);
            
            isSimulationRunning = false;
            Time.timeScale = 1f;
            
            // Reset simulation
            // TODO: Implement reset logic
            
            UpdateUI();
        }

        private void OnSaveClicked()
        {
            audioManager.PlaySFX("buttonClick");
            audioManager.PlayHaptic(Core.HapticType.Light);
            
            if (savePanel != null)
            {
                savePanel.SetActive(true);
            }
        }

        private void OnLoadClicked()
        {
            audioManager.PlaySFX("buttonClick");
            audioManager.PlayHaptic(Core.HapticType.Light);
            
            if (loadPanel != null)
            {
                loadPanel.SetActive(true);
            }
        }

        private void OnClearClicked()
        {
            audioManager.PlaySFX("buttonClick");
            audioManager.PlayHaptic(Core.HapticType.Heavy);
            
            // Show confirmation
            if (workspaceManager != null)
            {
                workspaceManager.ClearWorkspace();
                audioManager.PlaySFX("success");
            }
        }

        private void OnComponentSelected(string componentType)
        {
            audioManager.PlaySFX("buttonClick");
            audioManager.PlayHaptic(Core.HapticType.Light);
            
            Debug.Log($"Component selected: {componentType}");
            // TODO: Enter placement mode
        }
        #endregion

        private void UpdateUI()
        {
            // Update button states based on game state
            if (pauseButton != null)
            {
                TextMeshProUGUI text = pauseButton.GetComponentInChildren<TextMeshProUGUI>();
                if (text != null)
                {
                    text.text = gameManager.IsPaused() ? "▶️" : "⏸️";
                }
            }
        }

        private void UpdateStatusBar()
        {
            // Update entity count
            if (entityCountText != null && workspaceManager != null)
            {
                entityCountText.text = $"Components: {workspaceManager.ComponentCount}";
            }

            // Update FPS
            if (fpsText != null)
            {
                float fps = 1f / Time.unscaledDeltaTime;
                fpsText.text = $"FPS: {Mathf.RoundToInt(fps)}";
            }

            // Update simulation status
            if (simStatusText != null)
            {
                string status = isSimulationRunning ? "Running" : "Stopped";
                if (gameManager.IsPaused())
                {
                    status = "Paused";
                }
                simStatusText.text = $"Status: {status}";
            }
        }

        private void ShowPausePanel()
        {
            if (pausePanel != null)
            {
                pausePanel.SetActive(true);
                gameManager.PauseGame();
            }
        }

        private void OnDestroy()
        {
            // Clean up button listeners
            if (menuButton != null) menuButton.onClick.RemoveAllListeners();
            if (pauseButton != null) pauseButton.onClick.RemoveAllListeners();
            if (settingsButton != null) settingsButton.onClick.RemoveAllListeners();
            if (helpButton != null) helpButton.onClick.RemoveAllListeners();
            if (paletteToggleButton != null) paletteToggleButton.onClick.RemoveAllListeners();
            if (playButton != null) playButton.onClick.RemoveAllListeners();
            if (pauseSimButton != null) pauseSimButton.onClick.RemoveAllListeners();
            if (stopButton != null) stopButton.onClick.RemoveAllListeners();
            if (saveButton != null) saveButton.onClick.RemoveAllListeners();
            if (loadButton != null) loadButton.onClick.RemoveAllListeners();
            if (clearButton != null) clearButton.onClick.RemoveAllListeners();
        }
    }
}
