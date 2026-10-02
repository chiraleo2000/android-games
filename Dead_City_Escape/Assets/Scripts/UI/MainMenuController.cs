// ---------------------------------------------------------------------------
// Dead City Escape - Main Menu Controller
// Commercial-quality main menu with splash, animated background, route selection,
// skill tree, settings, and tutorial overlay.
// Implements Requirements 19.1-19.14
// ---------------------------------------------------------------------------
using System;
using System.Collections;
using UnityEngine;
using UnityEngine.UI;
using TMPro;
using UnityEngine.SceneManagement;

namespace DeadCityEscape.UI
{
    /// <summary>
    /// Main menu controller with splash sequence, animated background,
    /// route selection, skill tree, settings, and tutorial overlay.
    /// </summary>
    public class MainMenuController : MonoBehaviour
    {
        [Header("Splash Sequence")]
        [SerializeField] private GameObject _splashPanel;
        [SerializeField] private CanvasGroup _splashCanvasGroup;
        [SerializeField] private float _splashDuration = 3f;

        [Header("Main Menu Panels")]
        [SerializeField] private GameObject _mainMenuPanel;
        [SerializeField] private GameObject _routeSelectionSheet;
        [SerializeField] private GameObject _skillTreePanel;
        [SerializeField] private GameObject _settingsPanel;
        [SerializeField] private GameObject _tutorialOverlay;

        [Header("Animated Background")]
        [SerializeField] private RawImage _cityBackgroundImage;
        [SerializeField] private float _backgroundAnimationFPS = 30f;

        [Header("Main Menu Buttons")]
        [SerializeField] private Button _playButton;
        [SerializeField] private Button _continueButton;
        [SerializeField] private Button _dailyChallengeButton;
        [SerializeField] private Button _skillTreeButton;
        [SerializeField] private Button _settingsButton;
        [SerializeField] private Button _quitButton;

        [Header("Player Stats Display")]
        [SerializeField] private TextMeshProUGUI _playerLevelText;
        [SerializeField] private TextMeshProUGUI _playerXPText;
        [SerializeField] private TextMeshProUGUI _bestTimeText;

        [Header("Best Run Card")]
        [SerializeField] private GameObject _bestRunCard;
        [SerializeField] private TextMeshProUGUI _bestRunSeedText;
        [SerializeField] private TextMeshProUGUI _bestRunTimeText;
        [SerializeField] private TextMeshProUGUI _bestRunRouteText;
        [SerializeField] private Button _copySeedButton;

        [Header("Route Selection")]
        [SerializeField] private Button _helicopterRouteButton;
        [SerializeField] private Button _carRouteButton;
        [SerializeField] private Button _sewerRouteButton;
        [SerializeField] private Button _routeSheetCloseButton;
        [SerializeField] private TextMeshProUGUI _helicopterDescText;
        [SerializeField] private TextMeshProUGUI _carDescText;
        [SerializeField] private TextMeshProUGUI _sewerDescText;

        [Header("Settings Panel")]
        [SerializeField] private Slider _masterVolumeSlider;
        [SerializeField] private Slider _musicVolumeSlider;
        [SerializeField] private Slider _sfxVolumeSlider;
        [SerializeField] private Slider _touchSensitivitySlider;
        [SerializeField] private Toggle _invertYToggle;
        [SerializeField] private TMP_Dropdown _qualityDropdown;
        [SerializeField] private Button _settingsCloseButton;

        [Header("Tutorial Overlay")]
        [SerializeField] private Button _tutorialNextButton;
        [SerializeField] private Button _tutorialSkipButton;
        [SerializeField] private TextMeshProUGUI _tutorialPageText;
        [SerializeField] private GameObject[] _tutorialPages;

        [Header("Animation Settings")]
        [SerializeField] private float _sheetSlideUpDuration = 0.3f;
        [SerializeField] private float _panelSlideInDuration = 0.3f;

        private bool _splashSkipped = false;
        private int _currentTutorialPage = 0;
        private Coroutine _backgroundAnimationCoroutine;
        private Texture2D _backgroundTexture;

        private void Start()
        {
            // Initialize all panels as hidden
            HideAllPanels();

            // Show splash sequence on first launch
            if (ShouldShowSplash())
            {
                StartCoroutine(PlaySplashSequence());
            }
            else
            {
                ShowMainMenu();
            }

            // Wire up button listeners
            SetupButtonListeners();

            // Start background animation
            StartBackgroundAnimation();
        }

        private void OnDestroy()
        {
            // Clean up background texture
            if (_backgroundTexture != null)
            {
                Destroy(_backgroundTexture);
                _backgroundTexture = null;
            }
        }

        private bool ShouldShowSplash()
        {
            // Show splash only on first launch or if explicitly requested
            var save = Core.SaveSystem.Instance;
            if (save == null || save.Data == null) return true;

            // Check if this is first launch (no FirstPlayedUTC set)
            return string.IsNullOrEmpty(save.Data.FirstPlayedUTC);
        }

        private IEnumerator PlaySplashSequence()
        {
            if (_splashPanel != null)
                _splashPanel.SetActive(true);

            if (_splashCanvasGroup != null)
                _splashCanvasGroup.alpha = 0f;

            // Fade in splash
            float elapsed = 0f;
            float fadeInDuration = 0.5f;
            while (elapsed < fadeInDuration && !_splashSkipped)
            {
                elapsed += Time.deltaTime;
                if (_splashCanvasGroup != null)
                    _splashCanvasGroup.alpha = Mathf.Clamp01(elapsed / fadeInDuration);
                yield return null;
            }

            // Hold splash
            elapsed = 0f;
            while (elapsed < _splashDuration && !_splashSkipped)
            {
                elapsed += Time.deltaTime;
                // Check for tap to skip
                if (Input.GetMouseButtonDown(0) || Input.touchCount > 0)
                {
                    _splashSkipped = true;
                }
                yield return null;
            }

            // Fade out splash
            elapsed = 0f;
            float fadeOutDuration = 0.3f;
            while (elapsed < fadeOutDuration)
            {
                elapsed += Time.deltaTime;
                if (_splashCanvasGroup != null)
                    _splashCanvasGroup.alpha = 1f - Mathf.Clamp01(elapsed / fadeOutDuration);
                yield return null;
            }

            if (_splashPanel != null)
                _splashPanel.SetActive(false);

            // Show tutorial if first launch
            if (ShouldShowTutorial())
            {
                ShowTutorial();
            }
            else
            {
                ShowMainMenu();
            }
        }

        private bool ShouldShowTutorial()
        {
            var save = Core.SaveSystem.Instance;
            if (save == null || save.Data == null) return true;

            // Show tutorial if no runs completed yet
            return save.Data.TotalRunsCompleted == 0;
        }

        private void StartBackgroundAnimation()
        {
            if (_cityBackgroundImage == null) return;

            // Create procedurally animated city skyline background
            _backgroundTexture = new Texture2D(512, 256, TextureFormat.RGBA32, false);
            _cityBackgroundImage.texture = _backgroundTexture;

            _backgroundAnimationCoroutine = StartCoroutine(AnimateBackground());
        }

        private IEnumerator AnimateBackground()
        {
            float frameTime = 1f / _backgroundAnimationFPS;
            float time = 0f;

            while (true)
            {
                time += frameTime;

                // Generate procedural city skyline with flickering neon lights
                GenerateCitySkylineFrame(time);

                yield return new WaitForSeconds(frameTime);
            }
        }

        private void GenerateCitySkylineFrame(float time)
        {
            if (_backgroundTexture == null) return;

            int width = _backgroundTexture.width;
            int height = _backgroundTexture.height;

            Color skyColor = new Color(0.05f, 0.05f, 0.1f); // Dark blue-black
            Color buildingColor = new Color(0.1f, 0.1f, 0.15f); // Dark gray
            Color neonColor = new Color(0.2f, 0.8f, 1.0f); // Cyan neon

            // Fill sky
            for (int y = height / 2; y < height; y++)
            {
                for (int x = 0; x < width; x++)
                {
                    _backgroundTexture.SetPixel(x, y, skyColor);
                }
            }

            // Draw building silhouettes
            System.Random rng = new System.Random(12345); // Fixed seed for consistent skyline
            for (int i = 0; i < 20; i++)
            {
                int buildingX = (i * width / 20);
                int buildingWidth = width / 20 + rng.Next(-5, 5);
                int buildingHeight = height / 4 + rng.Next(0, height / 4);

                for (int y = 0; y < buildingHeight; y++)
                {
                    for (int x = buildingX; x < buildingX + buildingWidth && x < width; x++)
                    {
                        _backgroundTexture.SetPixel(x, y, buildingColor);

                        // Add flickering neon windows
                        if (y % 8 == 0 && x % 6 == 0)
                        {
                            float flicker = Mathf.PerlinNoise(x * 0.1f + time, y * 0.1f + time);
                            if (flicker > 0.5f)
                            {
                                _backgroundTexture.SetPixel(x, y, neonColor * flicker);
                            }
                        }
                    }
                }
            }

            _backgroundTexture.Apply();
        }

        private void SetupButtonListeners()
        {
            // Main menu buttons
            if (_playButton != null)
                _playButton.onClick.AddListener(OnPlayClicked);
            if (_continueButton != null)
                _continueButton.onClick.AddListener(OnContinueClicked);
            if (_dailyChallengeButton != null)
                _dailyChallengeButton.onClick.AddListener(OnDailyChallengeClicked);
            if (_skillTreeButton != null)
                _skillTreeButton.onClick.AddListener(OnSkillTreeClicked);
            if (_settingsButton != null)
                _settingsButton.onClick.AddListener(OnSettingsClicked);
            if (_quitButton != null)
                _quitButton.onClick.AddListener(OnQuitClicked);

            // Route selection buttons
            if (_helicopterRouteButton != null)
                _helicopterRouteButton.onClick.AddListener(() => OnRouteSelected(Core.EscapeRoute.Helicopter));
            if (_carRouteButton != null)
                _carRouteButton.onClick.AddListener(() => OnRouteSelected(Core.EscapeRoute.Car));
            if (_sewerRouteButton != null)
                _sewerRouteButton.onClick.AddListener(() => OnRouteSelected(Core.EscapeRoute.Sewer));
            if (_routeSheetCloseButton != null)
                _routeSheetCloseButton.onClick.AddListener(HideRouteSelectionSheet);

            // Settings panel
            if (_masterVolumeSlider != null)
                _masterVolumeSlider.onValueChanged.AddListener(OnMasterVolumeChanged);
            if (_musicVolumeSlider != null)
                _musicVolumeSlider.onValueChanged.AddListener(OnMusicVolumeChanged);
            if (_sfxVolumeSlider != null)
                _sfxVolumeSlider.onValueChanged.AddListener(OnSFXVolumeChanged);
            if (_touchSensitivitySlider != null)
                _touchSensitivitySlider.onValueChanged.AddListener(OnTouchSensitivityChanged);
            if (_invertYToggle != null)
                _invertYToggle.onValueChanged.AddListener(OnInvertYChanged);
            if (_qualityDropdown != null)
                _qualityDropdown.onValueChanged.AddListener(OnQualityChanged);
            if (_settingsCloseButton != null)
                _settingsCloseButton.onClick.AddListener(HideSettings);

            // Best run card
            if (_copySeedButton != null)
                _copySeedButton.onClick.AddListener(OnCopySeedClicked);

            // Tutorial overlay
            if (_tutorialNextButton != null)
                _tutorialNextButton.onClick.AddListener(OnTutorialNext);
            if (_tutorialSkipButton != null)
                _tutorialSkipButton.onClick.AddListener(OnTutorialSkip);
        }

        private void ShowMainMenu()
        {
            HideAllPanels();

            if (_mainMenuPanel != null)
                _mainMenuPanel.SetActive(true);

            UpdatePlayerStats();
            UpdateContinueButton();
            UpdateBestRunCard();
        }

        private void UpdatePlayerStats()
        {
            var save = Core.SaveSystem.Instance;
            if (save == null || save.Data == null) return;

            var gm = Core.GameManager.Instance;
            int level = gm != null ? gm.PlayerLevel : save.Data.PlayerLevel;
            int xp = gm != null ? gm.PlayerXP : save.Data.PlayerXP;

            if (_playerLevelText != null)
                _playerLevelText.text = $"Level {level}";

            if (_playerXPText != null)
                _playerXPText.text = $"XP: {xp}";

            if (_bestTimeText != null)
            {
                if (save.Data.BestRunTime < float.MaxValue)
                {
                    int minutes = (int)(save.Data.BestRunTime / 60f);
                    int seconds = (int)(save.Data.BestRunTime % 60f);
                    _bestTimeText.text = $"Best: {minutes:00}:{seconds:00}";
                }
                else
                {
                    _bestTimeText.text = "Best: --:--";
                }
            }
        }

        private void UpdateContinueButton()
        {
            // Show Continue button if run-in-progress exists
            // For now, we'll check if there's a saved game
            var save = Core.SaveSystem.Instance;
            bool hasRunInProgress = save != null && save.HasRestorableRun;

            if (_continueButton != null)
            {
                _continueButton.gameObject.SetActive(hasRunInProgress);
            }

            if (_playButton != null)
            {
                // If continue exists, show both buttons, otherwise just Play
                _playButton.gameObject.SetActive(true);
            }
        }

        private void UpdateBestRunCard()
        {
            var save = Core.SaveSystem.Instance;
            if (save == null || save.Data == null) return;

            if (_bestRunCard != null)
            {
                // Show card only if there's a best run
                bool hasBestRun = save.Data.BestRunTime < float.MaxValue;
                _bestRunCard.SetActive(hasBestRun);

                if (hasBestRun)
                {
                    if (_bestRunSeedText != null)
                        _bestRunSeedText.text = $"Seed: {save.Data.BestRunSeed}";

                    if (_bestRunTimeText != null)
                    {
                        int minutes = (int)(save.Data.BestRunTime / 60f);
                        int seconds = (int)(save.Data.BestRunTime % 60f);
                        _bestRunTimeText.text = $"{minutes:00}:{seconds:00}";
                    }

                    if (_bestRunRouteText != null)
                        _bestRunRouteText.text = save.Data.BestEscapeRoute;
                }
            }
        }

        private void HideAllPanels()
        {
            if (_splashPanel != null)
                _splashPanel.SetActive(false);
            if (_mainMenuPanel != null)
                _mainMenuPanel.SetActive(false);
            if (_routeSelectionSheet != null)
                _routeSelectionSheet.SetActive(false);
            if (_skillTreePanel != null)
                _skillTreePanel.SetActive(false);
            if (_settingsPanel != null)
                _settingsPanel.SetActive(false);
            if (_tutorialOverlay != null)
                _tutorialOverlay.SetActive(false);
        }

        // Button Handlers

        private void OnPlayClicked()
        {
            ShowRouteSelectionSheet();
        }

        private void OnContinueClicked()
        {
            // TODO: Implement continue run functionality
            var gm = Core.GameManager.Instance;
            if (gm != null)
            {
                // For now, just start a new run
                gm.StartNewRun();
            }
        }

        private void OnDailyChallengeClicked()
        {
            var gm = Core.GameManager.Instance;
            if (gm != null)
            {
                gm.StartDailyChallenge();
            }
        }

        private void OnSkillTreeClicked()
        {
            ShowSkillTree();
        }

        private void OnSettingsClicked()
        {
            ShowSettings();
        }

        private void OnQuitClicked()
        {
#if UNITY_EDITOR
            UnityEditor.EditorApplication.isPlaying = false;
#else
            Application.Quit();
#endif
        }

        private void OnCopySeedClicked()
        {
            var save = Core.SaveSystem.Instance;
            if (save != null && save.Data != null)
            {
                GUIUtility.systemCopyBuffer = save.Data.BestRunSeed.ToString();
                Debug.Log($"Copied seed to clipboard: {save.Data.BestRunSeed}");
                // TODO: Show toast notification
            }
        }

        // Route Selection Sheet

        public void ShowRouteSelectionSheet()
        {
            if (_routeSelectionSheet != null)
            {
                _routeSelectionSheet.SetActive(true);
                StartCoroutine(AnimateSheetSlideUp(_routeSelectionSheet));
            }

            // Update route descriptions
            if (_helicopterDescText != null)
                _helicopterDescText.text = "Hard • 2.0x XP\nRequires fuel, radio repair, and helipad defense";
            if (_carDescText != null)
                _carDescText.text = "Medium • 1.5x XP\nFind key, repair parts, and clear barricades";
            if (_sewerDescText != null)
                _sewerDescText.text = "Stealth • 1.25x XP\nLockpicks, sewer access, and acetylene torch";
        }

        public void HideRouteSelectionSheet()
        {
            if (_routeSelectionSheet != null)
            {
                StartCoroutine(AnimateSheetSlideDown(_routeSelectionSheet));
            }
        }

        private void OnRouteSelected(Core.EscapeRoute route)
        {
            var gm = Core.GameManager.Instance;
            if (gm != null)
            {
                gm.StartNewRun();
                gm.SelectEscapeRoute(route);
            }
        }

        private IEnumerator AnimateSheetSlideUp(GameObject sheet)
        {
            RectTransform rect = sheet.GetComponent<RectTransform>();
            if (rect == null) yield break;

            Vector2 startPos = new Vector2(0, -rect.rect.height);
            Vector2 endPos = Vector2.zero;

            rect.anchoredPosition = startPos;

            float elapsed = 0f;
            while (elapsed < _sheetSlideUpDuration)
            {
                elapsed += Time.deltaTime;
                float t = elapsed / _sheetSlideUpDuration;
                t = Mathf.SmoothStep(0f, 1f, t); // Smooth easing
                rect.anchoredPosition = Vector2.Lerp(startPos, endPos, t);
                yield return null;
            }

            rect.anchoredPosition = endPos;
        }

        private IEnumerator AnimateSheetSlideDown(GameObject sheet)
        {
            RectTransform rect = sheet.GetComponent<RectTransform>();
            if (rect == null) yield break;

            Vector2 startPos = rect.anchoredPosition;
            Vector2 endPos = new Vector2(0, -rect.rect.height);

            float elapsed = 0f;
            while (elapsed < _sheetSlideUpDuration)
            {
                elapsed += Time.deltaTime;
                float t = elapsed / _sheetSlideUpDuration;
                t = Mathf.SmoothStep(0f, 1f, t);
                rect.anchoredPosition = Vector2.Lerp(startPos, endPos, t);
                yield return null;
            }

            sheet.SetActive(false);
        }

        // Skill Tree

        private void ShowSkillTree()
        {
            HideAllPanels();
            if (_skillTreePanel != null)
                _skillTreePanel.SetActive(true);
            // TODO: Implement skill tree UI
        }

        // Settings Panel

        private void ShowSettings()
        {
            if (_settingsPanel != null)
            {
                _settingsPanel.SetActive(true);
                StartCoroutine(AnimatePanelSlideIn(_settingsPanel));
            }

            LoadSettings();
            if (PlayComplianceOverlay.Instance != null)
                PlayComplianceOverlay.Instance.OpenSettings();
        }

        private void HideSettings()
        {
            if (_settingsPanel != null)
            {
                StartCoroutine(AnimatePanelSlideOut(_settingsPanel));
            }
        }

        private IEnumerator AnimatePanelSlideIn(GameObject panel)
        {
            RectTransform rect = panel.GetComponent<RectTransform>();
            if (rect == null) yield break;

            Vector2 startPos = new Vector2(rect.rect.width, 0);
            Vector2 endPos = Vector2.zero;

            rect.anchoredPosition = startPos;

            float elapsed = 0f;
            while (elapsed < _panelSlideInDuration)
            {
                elapsed += Time.deltaTime;
                float t = elapsed / _panelSlideInDuration;
                t = Mathf.SmoothStep(0f, 1f, t);
                rect.anchoredPosition = Vector2.Lerp(startPos, endPos, t);
                yield return null;
            }

            rect.anchoredPosition = endPos;
        }

        private IEnumerator AnimatePanelSlideOut(GameObject panel)
        {
            RectTransform rect = panel.GetComponent<RectTransform>();
            if (rect == null) yield break;

            Vector2 startPos = rect.anchoredPosition;
            Vector2 endPos = new Vector2(rect.rect.width, 0);

            float elapsed = 0f;
            while (elapsed < _panelSlideInDuration)
            {
                elapsed += Time.deltaTime;
                float t = elapsed / _panelSlideInDuration;
                t = Mathf.SmoothStep(0f, 1f, t);
                rect.anchoredPosition = Vector2.Lerp(startPos, endPos, t);
                yield return null;
            }

            panel.SetActive(false);
        }

        private void LoadSettings()
        {
            var save = Core.SaveSystem.Instance;
            if (save == null || save.Data == null) return;

            if (_masterVolumeSlider != null)
                _masterVolumeSlider.value = save.Data.MasterVolume;
            if (_musicVolumeSlider != null)
                _musicVolumeSlider.value = save.Data.MusicVolume;
            if (_sfxVolumeSlider != null)
                _sfxVolumeSlider.value = save.Data.SFXVolume;
            if (_touchSensitivitySlider != null)
                _touchSensitivitySlider.value = save.Data.TouchSensitivity;
            if (_invertYToggle != null)
                _invertYToggle.isOn = save.Data.InvertY;
            if (_qualityDropdown != null)
                _qualityDropdown.value = save.Data.QualityLevel;
        }

        private void OnMasterVolumeChanged(float value)
        {
            var save = Core.SaveSystem.Instance;
            if (save != null && save.Data != null)
            {
                save.Data.MasterVolume = value;
                save.Save();
            }

            // Apply to AudioManager
            var audio = Audio.AudioManager.Instance;
            if (audio != null)
                audio.SetVolume(Audio.AudioCategory.Master, value);
        }

        private void OnMusicVolumeChanged(float value)
        {
            var save = Core.SaveSystem.Instance;
            if (save != null && save.Data != null)
            {
                save.Data.MusicVolume = value;
                save.Save();
            }

            var audio = Audio.AudioManager.Instance;
            if (audio != null)
                audio.SetVolume(Audio.AudioCategory.Music, value);
        }

        private void OnSFXVolumeChanged(float value)
        {
            var save = Core.SaveSystem.Instance;
            if (save != null && save.Data != null)
            {
                save.Data.SFXVolume = value;
                save.Save();
            }

            var audio = Audio.AudioManager.Instance;
            if (audio != null)
                audio.SetVolume(Audio.AudioCategory.SFX, value);
        }

        private void OnTouchSensitivityChanged(float value)
        {
            var save = Core.SaveSystem.Instance;
            if (save != null && save.Data != null)
            {
                save.Data.TouchSensitivity = value;
                save.Save();
            }

            var input = Core.InputManager.Instance;
            if (input != null)
                input.SetTouchSensitivity(value);
        }

        private void OnInvertYChanged(bool value)
        {
            var save = Core.SaveSystem.Instance;
            if (save != null && save.Data != null)
            {
                save.Data.InvertY = value;
                save.Save();
            }

            var input = Core.InputManager.Instance;
            if (input != null)
                input.SetInvertY(value);
        }

        private void OnQualityChanged(int value)
        {
            var save = Core.SaveSystem.Instance;
            if (save != null && save.Data != null)
            {
                save.Data.QualityLevel = value;
                save.Save();
            }

            QualitySettings.SetQualityLevel(value);
        }

        // Tutorial Overlay

        private void ShowTutorial()
        {
            HideAllPanels();

            if (_tutorialOverlay != null)
                _tutorialOverlay.SetActive(true);

            _currentTutorialPage = 0;
            UpdateTutorialPage();
        }

        private void UpdateTutorialPage()
        {
            if (_tutorialPages == null || _tutorialPages.Length == 0) return;

            // Hide all pages
            for (int i = 0; i < _tutorialPages.Length; i++)
            {
                if (_tutorialPages[i] != null)
                    _tutorialPages[i].SetActive(i == _currentTutorialPage);
            }

            // Update page indicator
            if (_tutorialPageText != null)
                _tutorialPageText.text = $"{_currentTutorialPage + 1} / {_tutorialPages.Length}";

            // Update next button text
            if (_tutorialNextButton != null)
            {
                var buttonText = _tutorialNextButton.GetComponentInChildren<TextMeshProUGUI>();
                if (buttonText != null)
                {
                    buttonText.text = _currentTutorialPage == _tutorialPages.Length - 1 ? "Start" : "Next";
                }
            }
        }

        private void OnTutorialNext()
        {
            _currentTutorialPage++;

            if (_currentTutorialPage >= _tutorialPages.Length)
            {
                OnTutorialSkip();
            }
            else
            {
                UpdateTutorialPage();
            }
        }

        private void OnTutorialSkip()
        {
            if (_tutorialOverlay != null)
                _tutorialOverlay.SetActive(false);

            ShowMainMenu();
        }
    }
}
