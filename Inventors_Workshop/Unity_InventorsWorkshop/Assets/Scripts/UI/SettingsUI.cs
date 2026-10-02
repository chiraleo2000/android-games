using UnityEngine;
using UnityEngine.UI;
using TMPro;

namespace InventorsWorkshop.UI
{
    /// <summary>
    /// Settings UI Controller
    /// Handles all settings UI interactions
    /// </summary>
    public class SettingsUI : MonoBehaviour
    {
        [Header("Audio Settings")]
        [SerializeField] private Slider musicVolumeSlider;
        [SerializeField] private Slider sfxVolumeSlider;
        [SerializeField] private TextMeshProUGUI musicVolumeText;
        [SerializeField] private TextMeshProUGUI sfxVolumeText;

        [Header("Control Settings")]
        [SerializeField] private Toggle hapticsToggle;
        [SerializeField] private Slider touchSensitivitySlider;

        [Header("Graphics Settings")]
        [SerializeField] private TMP_Dropdown qualityDropdown;
        [SerializeField] private Toggle showFPSToggle;

        [Header("Gameplay Settings")]
        [SerializeField] private Toggle autoSaveToggle;
        [SerializeField] private Toggle tutorialHintsToggle;

        [Header("Localization")]
        [SerializeField] private TMP_Dropdown languageDropdown;

        [Header("UI Settings")]
        [SerializeField] private TMP_Dropdown themeDropdown;

        [Header("Buttons")]
        [SerializeField] private Button saveButton;
        [SerializeField] private Button cancelButton;
        [SerializeField] private Button resetButton;
        [SerializeField] private Button backButton;

        private Core.GameManager gameManager;
        private Core.AudioManager audioManager;
        private Core.SettingsManager settingsManager;
        private Core.GameSettings currentSettings;

        private void Start()
        {
            gameManager = Core.GameManager.Instance;
            audioManager = gameManager.AudioManager;
            settingsManager = gameManager.SettingsManager;

            LoadCurrentSettings();
            SetupUI();
            SetupButtons();
        }

        private void LoadCurrentSettings()
        {
            currentSettings = settingsManager.Settings;
        }

        private void SetupUI()
        {
            // Audio
            if (musicVolumeSlider != null)
            {
                musicVolumeSlider.value = currentSettings.musicVolume;
                musicVolumeSlider.onValueChanged.AddListener(OnMusicVolumeChanged);
                UpdateMusicVolumeText(currentSettings.musicVolume);
            }

            if (sfxVolumeSlider != null)
            {
                sfxVolumeSlider.value = currentSettings.sfxVolume;
                sfxVolumeSlider.onValueChanged.AddListener(OnSFXVolumeChanged);
                UpdateSFXVolumeText(currentSettings.sfxVolume);
            }

            // Controls
            if (hapticsToggle != null)
            {
                hapticsToggle.isOn = currentSettings.hapticsEnabled;
                hapticsToggle.onValueChanged.AddListener(OnHapticsToggled);
            }

            if (touchSensitivitySlider != null)
            {
                touchSensitivitySlider.value = currentSettings.touchSensitivity;
            }

            // Graphics
            if (qualityDropdown != null)
            {
                qualityDropdown.value = currentSettings.qualityLevel;
            }

            if (showFPSToggle != null)
            {
                showFPSToggle.isOn = currentSettings.showFPS;
            }

            // Gameplay
            if (autoSaveToggle != null)
            {
                autoSaveToggle.isOn = currentSettings.autoSave;
            }

            if (tutorialHintsToggle != null)
            {
                tutorialHintsToggle.isOn = currentSettings.showTutorialHints;
            }

            // Localization
            if (languageDropdown != null)
            {
                SetupLanguageDropdown();
            }

            // UI
            if (themeDropdown != null)
            {
                SetupThemeDropdown();
            }
        }

        private void SetupButtons()
        {
            if (saveButton != null)
                saveButton.onClick.AddListener(OnSaveClicked);

            if (cancelButton != null)
                cancelButton.onClick.AddListener(OnCancelClicked);

            if (resetButton != null)
                resetButton.onClick.AddListener(OnResetClicked);

            if (backButton != null)
                backButton.onClick.AddListener(OnBackClicked);
        }

        #region Audio Callbacks
        private void OnMusicVolumeChanged(float value)
        {
            audioManager.SetMusicVolume(value);
            UpdateMusicVolumeText(value);
        }

        private void OnSFXVolumeChanged(float value)
        {
            audioManager.SetSFXVolume(value);
            audioManager.PlaySFX("buttonClick");
            UpdateSFXVolumeText(value);
        }

        private void UpdateMusicVolumeText(float value)
        {
            if (musicVolumeText != null)
                musicVolumeText.text = $"{Mathf.RoundToInt(value * 100)}%";
        }

        private void UpdateSFXVolumeText(float value)
        {
            if (sfxVolumeText != null)
                sfxVolumeText.text = $"{Mathf.RoundToInt(value * 100)}%";
        }
        #endregion

        #region Control Callbacks
        private void OnHapticsToggled(bool enabled)
        {
            if (enabled)
            {
                audioManager.PlayHaptic(Core.HapticType.Light);
            }
        }
        #endregion

        #region Button Callbacks
        private void OnSaveClicked()
        {
            audioManager.PlaySFX("buttonClick");
            audioManager.PlayHaptic(Core.HapticType.Light);

            SaveSettings();
            audioManager.PlaySFX("success");
            
            gameManager.LoadMainMenu();
        }

        private void OnCancelClicked()
        {
            audioManager.PlaySFX("buttonClick");
            audioManager.PlayHaptic(Core.HapticType.Light);

            // Reload original settings
            settingsManager.LoadSettings();
            
            gameManager.LoadMainMenu();
        }

        private void OnResetClicked()
        {
            audioManager.PlaySFX("buttonClick");
            audioManager.PlayHaptic(Core.HapticType.Medium);

            // Show confirmation dialog
            // For now, just reset
            settingsManager.ResetToDefaults();
            LoadCurrentSettings();
            SetupUI();
            
            audioManager.PlaySFX("success");
        }

        private void OnBackClicked()
        {
            audioManager.PlaySFX("buttonClick");
            audioManager.PlayHaptic(Core.HapticType.Light);

            gameManager.LoadMainMenu();
        }
        #endregion

        #region Helpers
        private void SaveSettings()
        {
            // Audio
            settingsManager.SetMusicVolume(musicVolumeSlider.value);
            settingsManager.SetSFXVolume(sfxVolumeSlider.value);

            // Controls
            settingsManager.SetHapticsEnabled(hapticsToggle.isOn);

            // Graphics
            currentSettings.qualityLevel = qualityDropdown.value;
            currentSettings.showFPS = showFPSToggle.isOn;

            // Gameplay
            currentSettings.autoSave = autoSaveToggle.isOn;
            currentSettings.showTutorialHints = tutorialHintsToggle.isOn;

            // Localization
            if (languageDropdown != null)
            {
                settingsManager.SetLanguage(languageDropdown.options[languageDropdown.value].text);
            }

            // UI
            if (themeDropdown != null)
            {
                settingsManager.SetTheme(themeDropdown.options[themeDropdown.value].text);
            }

            settingsManager.SaveSettings();
        }

        private void SetupLanguageDropdown()
        {
            languageDropdown.ClearOptions();
            languageDropdown.AddOptions(new System.Collections.Generic.List<string>
            {
                "English",
                "Spanish",
                "French",
                "German",
                "Chinese",
                "Japanese"
            });

            // Set current language
            int index = languageDropdown.options.FindIndex(option => option.text == currentSettings.language);
            if (index >= 0)
                languageDropdown.value = index;
        }

        private void SetupThemeDropdown()
        {
            themeDropdown.ClearOptions();
            themeDropdown.AddOptions(new System.Collections.Generic.List<string>
            {
                "Light",
                "Dark",
                "Auto"
            });

            // Set current theme
            int index = themeDropdown.options.FindIndex(option => option.text == currentSettings.theme);
            if (index >= 0)
                themeDropdown.value = index;
        }
        #endregion

        private void OnDestroy()
        {
            // Clean up listeners
            if (musicVolumeSlider != null)
                musicVolumeSlider.onValueChanged.RemoveAllListeners();

            if (sfxVolumeSlider != null)
                sfxVolumeSlider.onValueChanged.RemoveAllListeners();

            if (hapticsToggle != null)
                hapticsToggle.onValueChanged.RemoveAllListeners();

            if (saveButton != null)
                saveButton.onClick.RemoveAllListeners();

            if (cancelButton != null)
                cancelButton.onClick.RemoveAllListeners();

            if (resetButton != null)
                resetButton.onClick.RemoveAllListeners();

            if (backButton != null)
                backButton.onClick.RemoveAllListeners();
        }
    }
}
