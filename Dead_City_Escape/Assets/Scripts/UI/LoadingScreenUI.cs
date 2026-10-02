// ---------------------------------------------------------------------------
// Dead City Escape - Loading Screen
// Displays generation progress while the world is being built.
// ---------------------------------------------------------------------------
using System.Collections;
using UnityEngine;
using UnityEngine.SceneManagement;
using TMPro;
using UnityEngine.UI;

namespace DeadCityEscape.UI
{
    /// <summary>
    /// Loading screen shown while the procedural city generates.
    /// Shows progress bar, rotating tips, city name, and breach transition.
    /// Requirements: 19.7, 19.8, 19.9, 14.9
    /// </summary>
    public class LoadingScreenUI : MonoBehaviour
    {
        [Header("UI References")]
        [SerializeField] private GameObject _panel;
        [SerializeField] private Image _progressBarFill;
        [SerializeField] private TextMeshProUGUI _tipText;
        [SerializeField] private TextMeshProUGUI _cityNameText;
        [SerializeField] private TextMeshProUGUI _generatingDistrictText;
        [SerializeField] private CanvasGroup _breachTransitionOverlay;

        [Header("Settings")]
        [SerializeField] private float _tipRotationInterval = 5f;
        [SerializeField] private float _progressSmoothSpeed = 2f;
        [SerializeField] private float _breachAnimationDuration = 1.5f;
        [SerializeField] private float _zoneGenerationThreshold = 0.5f;

        // Thematic tips for loading screen
        private static readonly string[] Tips = new[]
        {
            "Headshots deal 2.5× damage.",
            "Crouching reduces noise by 60%.",
            "Screamer zombies alert others. Silence them fast.",
            "Gas canisters can chain-explode nearby hazards.",
            "The helicopter escape awards the most XP.",
            "Survivors grant 50 XP when rescued.",
            "Your flashlight attracts zombies. Use it wisely.",
            "Stealth skills reduce detection range.",
            "Collect medkits before entering high-threat zones.",
            "Sprint noise can trigger zombie investigations.",
            "Walkers are slow but dangerous in groups.",
            "Runners rush when they detect you.",
            "Brutes have high health and ground pound attacks.",
            "The sewer route rewards stealth play.",
            "Suppressors reduce weapon noise significantly.",
            "Medkits restore 40 HP instantly."
        };

        // City name generation components
        private static readonly string[] CityPrefixes = new[]
        {
            "New", "Old", "North", "South", "East", "West", "Fort", "Port", "Saint"
        };

        private static readonly string[] CityNames = new[]
        {
            "Haven", "Ridge", "Valley", "Harbor", "Creek", "Falls", "Springs",
            "Heights", "Grove", "Point", "Bay", "Shore", "Hill", "Dale"
        };

        private float _targetProgress;
        private float _currentProgress;
        private Coroutine _tipRotationCoroutine;
        private Coroutine _zoneGenerationCheckCoroutine;
        private AsyncOperation _asyncOperation;

        private void Awake()
        {
            if (_panel != null) _panel.SetActive(false);
            if (_generatingDistrictText != null) _generatingDistrictText.gameObject.SetActive(false);
            if (_breachTransitionOverlay != null) _breachTransitionOverlay.alpha = 0f;
        }

        /// <summary>
        /// Shows the loading screen and starts loading the specified scene.
        /// </summary>
        public void Show(string sceneName, int seed)
        {
            if (_panel != null) _panel.SetActive(true);

            _currentProgress = 0f;
            _targetProgress = 0f;

            // Set procedurally generated city name from seed
            if (_cityNameText != null)
            {
                _cityNameText.text = GenerateCityName(seed);
            }

            // Set initial random tip
            if (_tipText != null)
            {
                _tipText.text = Tips[Random.Range(0, Tips.Length)];
            }

            // Start tip rotation
            if (_tipRotationCoroutine != null) StopCoroutine(_tipRotationCoroutine);
            _tipRotationCoroutine = StartCoroutine(RotateTipsCoroutine());

            // Start async scene loading
            StartCoroutine(LoadSceneAsync(sceneName));
        }

        /// <summary>
        /// Hides the loading screen.
        /// </summary>
        public void Hide()
        {
            if (_tipRotationCoroutine != null)
            {
                StopCoroutine(_tipRotationCoroutine);
                _tipRotationCoroutine = null;
            }

            if (_zoneGenerationCheckCoroutine != null)
            {
                StopCoroutine(_zoneGenerationCheckCoroutine);
                _zoneGenerationCheckCoroutine = null;
            }

            if (_panel != null) _panel.SetActive(false);
        }

        /// <summary>
        /// Manually sets the progress (0-1 range).
        /// </summary>
        public void SetProgress(float progress)
        {
            _targetProgress = Mathf.Clamp01(progress);
        }

        /// <summary>
        /// Shows the "Generating District..." indicator if zone generation takes >0.5s.
        /// Requirement: 14.9
        /// </summary>
        public void ShowGeneratingDistrictIndicator()
        {
            if (_zoneGenerationCheckCoroutine != null)
                StopCoroutine(_zoneGenerationCheckCoroutine);

            _zoneGenerationCheckCoroutine = StartCoroutine(ShowGeneratingDistrictCoroutine());
        }

        /// <summary>
        /// Hides the "Generating District..." indicator.
        /// </summary>
        public void HideGeneratingDistrictIndicator()
        {
            if (_zoneGenerationCheckCoroutine != null)
            {
                StopCoroutine(_zoneGenerationCheckCoroutine);
                _zoneGenerationCheckCoroutine = null;
            }

            if (_generatingDistrictText != null)
                _generatingDistrictText.gameObject.SetActive(false);
        }

        /// <summary>
        /// Plays the breach transition animation (screen cracks and shatters).
        /// Requirement: 19.9
        /// </summary>
        public void PlayBreachTransition(System.Action onComplete = null)
        {
            StartCoroutine(BreachTransitionCoroutine(onComplete));
        }

        private void Update()
        {
            // Smooth progress bar animation
            if (_progressBarFill != null)
            {
                _currentProgress = Mathf.Lerp(_currentProgress, _targetProgress, 
                    Time.deltaTime * _progressSmoothSpeed);
                _progressBarFill.fillAmount = _currentProgress;
            }
        }

        private IEnumerator LoadSceneAsync(string sceneName)
        {
            // Start async scene load
            _asyncOperation = SceneManager.LoadSceneAsync(sceneName, LoadSceneMode.Single);
            _asyncOperation.allowSceneActivation = false;

            // Update progress bar based on async operation progress
            // AsyncOperation.progress goes from 0 to 0.9 during loading
            while (!_asyncOperation.isDone)
            {
                // Map 0-0.9 to 0-1 for display
                float progress = Mathf.Clamp01(_asyncOperation.progress / 0.9f);
                SetProgress(progress);

                // When loading is complete (progress reaches 0.9), wait for breach animation
                if (_asyncOperation.progress >= 0.9f)
                {
                    SetProgress(1f);
                    yield return new WaitForSeconds(0.2f); // Brief pause at 100%
                    
                    // Play breach transition
                    bool breachComplete = false;
                    PlayBreachTransition(() => breachComplete = true);
                    
                    yield return new WaitUntil(() => breachComplete);
                    
                    // Activate the scene
                    _asyncOperation.allowSceneActivation = true;
                    break;
                }

                yield return null;
            }

            // Hide loading screen after scene is activated
            yield return new WaitForSeconds(0.1f);
            Hide();
        }

        private IEnumerator RotateTipsCoroutine()
        {
            while (true)
            {
                yield return new WaitForSeconds(_tipRotationInterval);

                if (_tipText != null)
                {
                    // Fade out
                    float fadeTime = 0.3f;
                    float elapsed = 0f;
                    Color originalColor = _tipText.color;

                    while (elapsed < fadeTime)
                    {
                        elapsed += Time.deltaTime;
                        float alpha = Mathf.Lerp(1f, 0f, elapsed / fadeTime);
                        _tipText.color = new Color(originalColor.r, originalColor.g, originalColor.b, alpha);
                        yield return null;
                    }

                    // Change tip
                    _tipText.text = Tips[Random.Range(0, Tips.Length)];

                    // Fade in
                    elapsed = 0f;
                    while (elapsed < fadeTime)
                    {
                        elapsed += Time.deltaTime;
                        float alpha = Mathf.Lerp(0f, 1f, elapsed / fadeTime);
                        _tipText.color = new Color(originalColor.r, originalColor.g, originalColor.b, alpha);
                        yield return null;
                    }

                    _tipText.color = originalColor;
                }
            }
        }

        private IEnumerator ShowGeneratingDistrictCoroutine()
        {
            // Wait for threshold before showing indicator
            yield return new WaitForSeconds(_zoneGenerationThreshold);

            if (_generatingDistrictText != null)
            {
                _generatingDistrictText.gameObject.SetActive(true);
                
                // Animate ellipsis
                string baseText = "Generating District";
                int dotCount = 0;
                
                while (true)
                {
                    dotCount = (dotCount + 1) % 4;
                    _generatingDistrictText.text = baseText + new string('.', dotCount);
                    yield return new WaitForSeconds(0.5f);
                }
            }
        }

        private IEnumerator BreachTransitionCoroutine(System.Action onComplete)
        {
            if (_breachTransitionOverlay == null)
            {
                onComplete?.Invoke();
                yield break;
            }

            // Crack effect: fade in white overlay quickly
            float elapsed = 0f;
            float crackDuration = _breachAnimationDuration * 0.3f;

            while (elapsed < crackDuration)
            {
                elapsed += Time.deltaTime;
                _breachTransitionOverlay.alpha = Mathf.Lerp(0f, 0.8f, elapsed / crackDuration);
                yield return null;
            }

            // Brief pause at peak
            yield return new WaitForSeconds(0.1f);

            // Shatter effect: fade out quickly
            elapsed = 0f;
            float shatterDuration = _breachAnimationDuration * 0.7f;

            while (elapsed < shatterDuration)
            {
                elapsed += Time.deltaTime;
                _breachTransitionOverlay.alpha = Mathf.Lerp(0.8f, 0f, elapsed / shatterDuration);
                yield return null;
            }

            _breachTransitionOverlay.alpha = 0f;
            onComplete?.Invoke();
        }

        /// <summary>
        /// Generates a procedural city name from the seed.
        /// </summary>
        private string GenerateCityName(int seed)
        {
            // Use seed to deterministically generate city name
            System.Random rng = new System.Random(seed);
            
            string prefix = CityPrefixes[rng.Next(CityPrefixes.Length)];
            string name = CityNames[rng.Next(CityNames.Length)];
            
            return $"{prefix} {name}";
        }
    }
}
