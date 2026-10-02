using UnityEngine;
using UnityEngine.UI;
using TMPro;

namespace InventorsWorkshop.UI
{
    /// <summary>
    /// Main Menu UI Controller
    /// Handles all UI interactions on the main menu screen
    /// </summary>
    public class MainMenuUI : MonoBehaviour
    {
        [Header("UI References")]
        [SerializeField] private Button playButton;
        [SerializeField] private Button examplesButton;
        [SerializeField] private Button settingsButton;
        [SerializeField] private Button tutorialButton;
        [SerializeField] private Button exitButton;

        [Header("Panels")]
        [SerializeField] private GameObject mainPanel;
        [SerializeField] private GameObject loadingPanel;

        [Header("Text")]
        [SerializeField] private TextMeshProUGUI titleText;
        [SerializeField] private TextMeshProUGUI versionText;

        private Core.GameManager gameManager;
        private Core.AudioManager audioManager;

        private void Start()
        {
            gameManager = Core.GameManager.Instance;
            audioManager = gameManager.AudioManager;

            SetupButtons();
            SetupUI();
            PlayMenuMusic();
        }

        private void SetupButtons()
        {
            if (playButton != null)
                playButton.onClick.AddListener(OnPlayClicked);

            if (examplesButton != null)
                examplesButton.onClick.AddListener(OnExamplesClicked);

            if (settingsButton != null)
                settingsButton.onClick.AddListener(OnSettingsClicked);

            if (tutorialButton != null)
                tutorialButton.onClick.AddListener(OnTutorialClicked);

            if (exitButton != null)
                exitButton.onClick.AddListener(OnExitClicked);
        }

        private void SetupUI()
        {
            if (titleText != null)
                titleText.text = "INVENTOR'S WORKSHOP";

            if (versionText != null)
                versionText.text = $"v{Application.version}";

            if (loadingPanel != null)
                loadingPanel.SetActive(false);
        }

        private void PlayMenuMusic()
        {
            audioManager.PlayMusic("mainmenu");
        }

        #region Button Callbacks
        private void OnPlayClicked()
        {
            audioManager.PlaySFX("buttonClick");
            audioManager.PlayHaptic(Core.HapticType.Light);
            
            ShowLoading();
            gameManager.LoadGameplay();
        }

        private void OnExamplesClicked()
        {
            audioManager.PlaySFX("buttonClick");
            audioManager.PlayHaptic(Core.HapticType.Light);
            
            ShowLoading();
            gameManager.LoadExamples();
        }

        private void OnSettingsClicked()
        {
            audioManager.PlaySFX("buttonClick");
            audioManager.PlayHaptic(Core.HapticType.Light);
            
            gameManager.LoadSettings();
        }

        private void OnTutorialClicked()
        {
            audioManager.PlaySFX("buttonClick");
            audioManager.PlayHaptic(Core.HapticType.Light);
            
            ShowLoading();
            gameManager.LoadTutorial();
        }

        private void OnExitClicked()
        {
            audioManager.PlaySFX("buttonClick");
            audioManager.PlayHaptic(Core.HapticType.Medium);
            
            // Show confirmation dialog
            ShowExitConfirmation();
        }
        #endregion

        #region UI Helpers
        private void ShowLoading()
        {
            if (mainPanel != null)
                mainPanel.SetActive(false);

            if (loadingPanel != null)
                loadingPanel.SetActive(true);
        }

        private void ShowExitConfirmation()
        {
            // TODO: Show confirmation dialog
            // For now, just quit
            gameManager.QuitGame();
        }
        #endregion

        private void OnDestroy()
        {
            // Clean up button listeners
            if (playButton != null)
                playButton.onClick.RemoveAllListeners();

            if (examplesButton != null)
                examplesButton.onClick.RemoveAllListeners();

            if (settingsButton != null)
                settingsButton.onClick.RemoveAllListeners();

            if (tutorialButton != null)
                tutorialButton.onClick.RemoveAllListeners();

            if (exitButton != null)
                exitButton.onClick.RemoveAllListeners();
        }
    }
}
