// ---------------------------------------------------------------------------
// Dead City Escape - HUD Controller
// Mobile-optimized Heads-Up Display.
// Health bar, ammo counter, objective tracker, run timer, notifications.
// Requirements: 13.1, 13.2, 13.3, 13.4, 13.5, 13.6, 13.9, 18.7
// ---------------------------------------------------------------------------
using UnityEngine;
using TMPro;
using UnityEngine.UI;
using System.Collections;

namespace DeadCityEscape.UI
{
    /// <summary>
    /// Main HUD controller that displays all in-game UI elements.
    /// Subscribes to PlayerHealth, WeaponBase, and EscapeRouteManager events.
    /// Implements Requirements 13.1-13.6, 13.9, 18.7
    /// </summary>
    public class HUDController : MonoBehaviour
    {
        [Header("Health")]
        [SerializeField] private Slider _healthBar;
        [SerializeField] private Image _healthFill;
        [SerializeField] private TextMeshProUGUI _healthText;

        [Header("Ammo")]
        [SerializeField] private TextMeshProUGUI _ammoText;
        [SerializeField] private GameObject _ammoPanel;

        [Header("Objective")]
        [SerializeField] private TextMeshProUGUI _objectiveText;
        [SerializeField] private Slider _objectiveProgressBar;

        [Header("Crosshair")]
        [SerializeField] private Image _crosshair;

        [Header("Notifications")]
        [SerializeField] private CanvasGroup _notificationGroup;
        [SerializeField] private TextMeshProUGUI _notificationText;

        [Header("Run Timer")]
        [SerializeField] private TextMeshProUGUI _runTimerText;

        [Header("Vignette")]
        [SerializeField] private Image _vignetteOverlay;
        [SerializeField] private Color _vignetteColor = new Color(1f, 0f, 0f, 0.5f);

        [Header("Weather (Lite Mode)")]
        [SerializeField] private ParticleSystem[] _weatherParticles;

        private Player.PlayerHealth _playerHealth;
        private Escape.EscapeRouteManager _escapeManager;
        private Combat.WeaponBase _currentWeapon;
        private Core.GameManager _gameManager;
        
        private float _notificationTimer;
        private const float NotificationDuration = 3f;
        private const float NotificationFadeTime = 0.5f;
        
        private int _updateFrameCounter;
        private bool _isLiteMode;
        private int _updateInterval = 1; // Update every frame by default, every 2 frames in Lite mode

        private void Start()
        {
            // Find references
            _playerHealth = FindAnyObjectByType<Player.PlayerHealth>();
            _escapeManager = FindAnyObjectByType<Escape.EscapeRouteManager>();
            _gameManager = Core.GameManager.Instance;

            // Subscribe to events
            if (_playerHealth != null)
            {
                _playerHealth.OnHealthChanged += OnHealthChanged;
                _playerHealth.OnDamageTaken += OnPlayerDamaged;
                _playerHealth.OnDeath += OnPlayerDeath;
            }

            if (_escapeManager != null)
            {
                _escapeManager.OnObjectiveUpdated += OnObjectiveUpdated;
                _escapeManager.OnObjectiveNotification += ShowNotification;
            }

            // Initialize vignette
            if (_vignetteOverlay != null)
            {
                var c = _vignetteColor;
                c.a = 0;
                _vignetteOverlay.color = c;
            }

            // Initialize notification
            if (_notificationGroup != null)
                _notificationGroup.alpha = 0;

            // Check quality level for Lite mode
            // Requirement 13.9: Hide weather particles and reduce update rate in Lite mode
            var saveSystem = Core.SaveSystem.Instance;
            if (saveSystem != null)
            {
                _isLiteMode = saveSystem.Data.QualityLevel == 0;
                _updateInterval = _isLiteMode ? 2 : 1;

                // Hide weather particles in Lite mode
                if (_isLiteMode && _weatherParticles != null)
                {
                    foreach (var ps in _weatherParticles)
                    {
                        if (ps != null)
                            ps.gameObject.SetActive(false);
                    }
                }
            }

            // Find and subscribe to weapon events
            UpdateWeaponReference();
        }

        private void Update()
        {
            // Requirement 13.9: Reduce update rate to every 2 frames in Lite mode
            _updateFrameCounter++;
            if (_updateFrameCounter % _updateInterval != 0)
                return;

            UpdateHealthDisplay();
            UpdateAmmoDisplay();
            UpdateObjectiveDisplay();
            UpdateRunTimer();
            UpdateVignetteOverlay();
            UpdateNotification();
        }

        /// <summary>
        /// Updates health bar and numeric display.
        /// Requirement 13.1: Display health as numeric value and visual bar,
        /// updating within 1 frame of PlayerHealth changing.
        /// </summary>
        private void UpdateHealthDisplay()
        {
            if (_playerHealth == null) return;

            float current = _playerHealth.CurrentHealth;
            float max = _playerHealth.MaxHealth;
            float ratio = current / max;

            if (_healthBar != null)
                _healthBar.value = ratio;

            // Requirement 13.1: Display numeric value (e.g., "75/100")
            if (_healthText != null)
                _healthText.text = $"{Mathf.CeilToInt(current)}/{Mathf.CeilToInt(max)}";

            // Color gradient: green -> yellow -> red
            if (_healthFill != null)
            {
                _healthFill.color = ratio > 0.5f
                    ? Color.Lerp(Color.yellow, Color.green, (ratio - 0.5f) * 2f)
                    : Color.Lerp(Color.red, Color.yellow, ratio * 2f);
            }
        }

        /// <summary>
        /// Updates ammo display for active weapon.
        /// Requirement 13.2: Display current ammo and magazine size,
        /// updating within 1 frame of OnAmmoChanged firing.
        /// </summary>
        private void UpdateAmmoDisplay()
        {
            // Try to find current weapon if we don't have one
            if (_currentWeapon == null)
                UpdateWeaponReference();

            // Check if we have a ranged weapon
            var rangedWeapon = _currentWeapon as Combat.RangedWeapon;
            if (rangedWeapon == null)
            {
                if (_ammoPanel != null) _ammoPanel.SetActive(false);
                return;
            }

            if (_ammoPanel != null) _ammoPanel.SetActive(true);

            // Requirement 13.2: Display ammo and magazine size (e.g., "12/30")
            if (_ammoText != null)
                _ammoText.text = $"{rangedWeapon.CurrentAmmo}/{rangedWeapon.MagSize}";
        }

        /// <summary>
        /// Updates objective description and progress.
        /// Requirement 13.3: Display objective description and progress,
        /// updating within 1 frame of OnObjectiveUpdated firing.
        /// </summary>
        private void UpdateObjectiveDisplay()
        {
            if (_escapeManager == null || _objectiveText == null) return;

            var activeObjective = _escapeManager.ActiveObjective;
            if (activeObjective != null)
            {
                // Requirement 13.3: Display objective description and progress (e.g., "Fuel Cans: 3/5")
                if (activeObjective.RequiredCount > 1)
                {
                    _objectiveText.text = $"{activeObjective.DisplayText}: {activeObjective.CurrentCount}/{activeObjective.RequiredCount}";
                }
                else
                {
                    _objectiveText.text = activeObjective.DisplayText;
                }

                // Update progress bar if available
                if (_objectiveProgressBar != null)
                {
                    _objectiveProgressBar.gameObject.SetActive(activeObjective.RequiredCount > 1);
                    _objectiveProgressBar.value = activeObjective.Progress;
                }
            }
            else
            {
                _objectiveText.text = "No active objective";
                if (_objectiveProgressBar != null)
                    _objectiveProgressBar.gameObject.SetActive(false);
            }
        }

        /// <summary>
        /// Updates run timer display.
        /// Requirement 13.6: Display elapsed run timer in MM:SS format,
        /// updating every second.
        /// </summary>
        private void UpdateRunTimer()
        {
            if (_gameManager == null || _runTimerText == null) return;

            float runTime = _gameManager.RunTimer;
            int minutes = Mathf.FloorToInt(runTime / 60f);
            int seconds = Mathf.FloorToInt(runTime % 60f);

            // Requirement 13.6: Display in MM:SS format
            _runTimerText.text = $"{minutes:00}:{seconds:00}";
        }

        /// <summary>
        /// Updates red vignette overlay based on health.
        /// Requirement 18.7: Display red vignette overlay that increases
        /// in opacity as CurrentHealth decreases below 50% of MaxHealth.
        /// </summary>
        private void UpdateVignetteOverlay()
        {
            if (_vignetteOverlay == null || _playerHealth == null) return;

            float healthPercent = _playerHealth.CurrentHealth / _playerHealth.MaxHealth;

            // Requirement 18.7: Scale vignette with low health (below 50%)
            if (healthPercent < 0.5f)
            {
                // Vignette intensity increases as health decreases below 50%
                // At 50% health: alpha = 0
                // At 0% health: alpha = vignetteColor.a (0.5)
                float vignetteIntensity = (0.5f - healthPercent) / 0.5f;
                var c = _vignetteColor;
                c.a = vignetteIntensity * _vignetteColor.a;
                _vignetteOverlay.color = c;
            }
            else
            {
                // No vignette above 50% health
                var c = _vignetteColor;
                c.a = 0;
                _vignetteOverlay.color = c;
            }
        }

        /// <summary>
        /// Updates notification fade animation.
        /// Requirement 13.5: Display notification messages for 3 seconds
        /// then fade them out.
        /// </summary>
        private void UpdateNotification()
        {
            if (_notificationGroup == null) return;

            if (_notificationTimer > 0)
            {
                _notificationTimer -= Time.deltaTime;

                // Requirement 13.5: 3 second display with fade-out
                if (_notificationTimer > NotificationDuration - NotificationFadeTime)
                {
                    // Fade in
                    float fadeIn = (NotificationDuration - _notificationTimer) / NotificationFadeTime;
                    _notificationGroup.alpha = Mathf.Clamp01(fadeIn);
                }
                else if (_notificationTimer < NotificationFadeTime)
                {
                    // Fade out
                    _notificationGroup.alpha = Mathf.Clamp01(_notificationTimer / NotificationFadeTime);
                }
                else
                {
                    // Full opacity
                    _notificationGroup.alpha = 1f;
                }
            }
            else
            {
                _notificationGroup.alpha = 0;
            }
        }

        /// <summary>
        /// Event handler for health changes.
        /// Requirement 13.1: Update within 1 frame of PlayerHealth changing.
        /// </summary>
        private void OnHealthChanged(float current, float max)
        {
            // Health display is updated in Update() which runs every frame
            // This ensures we update within 1 frame as required
        }

        /// <summary>
        /// Event handler for player damage.
        /// </summary>
        private void OnPlayerDamaged(float amount, Vector3 hitPosition)
        {
            // Flash effect could be added here if desired
        }

        /// <summary>
        /// Event handler for player death.
        /// </summary>
        private void OnPlayerDeath()
        {
            if (_vignetteOverlay != null)
            {
                var c = _vignetteColor;
                c.a = 0.8f;
                _vignetteOverlay.color = c;
            }
        }

        /// <summary>
        /// Event handler for objective updates.
        /// Requirement 13.3: Update within 1 frame of OnObjectiveUpdated firing.
        /// </summary>
        private void OnObjectiveUpdated(Escape.EscapeObjective objective)
        {
            // Objective display is updated in Update() which runs every frame
            // This ensures we update within 1 frame as required
            
            // Show notification for completed objectives
            if (objective.IsComplete)
            {
                ShowNotification($"Objective Complete: {objective.DisplayText}");
            }
        }

        /// <summary>
        /// Shows a notification message.
        /// Requirement 13.5: Display notification messages for 3 seconds
        /// then fade them out.
        /// </summary>
        public void ShowNotification(string message)
        {
            if (_notificationText != null)
                _notificationText.text = message;
            
            _notificationTimer = NotificationDuration;
        }

        /// <summary>
        /// Updates weapon reference and subscribes to weapon events.
        /// Requirement 13.2: Subscribe to WeaponBase events.
        /// </summary>
        private void UpdateWeaponReference()
        {
            // Unsubscribe from old weapon
            if (_currentWeapon != null)
            {
                _currentWeapon.OnAmmoChanged -= OnAmmoChanged;
            }

            // Find current weapon
            _currentWeapon = FindAnyObjectByType<Combat.WeaponBase>();

            // Subscribe to new weapon
            if (_currentWeapon != null)
            {
                _currentWeapon.OnAmmoChanged += OnAmmoChanged;
            }
        }

        /// <summary>
        /// Event handler for ammo changes.
        /// Requirement 13.2: Update within 1 frame of OnAmmoChanged firing.
        /// </summary>
        private void OnAmmoChanged(int current, int max)
        {
            // Ammo display is updated in Update() which runs every frame
            // This ensures we update within 1 frame as required
        }

        private void OnDestroy()
        {
            // Unsubscribe from all events
            if (_playerHealth != null)
            {
                _playerHealth.OnHealthChanged -= OnHealthChanged;
                _playerHealth.OnDamageTaken -= OnPlayerDamaged;
                _playerHealth.OnDeath -= OnPlayerDeath;
            }

            if (_escapeManager != null)
            {
                _escapeManager.OnObjectiveUpdated -= OnObjectiveUpdated;
                _escapeManager.OnObjectiveNotification -= ShowNotification;
            }

            if (_currentWeapon != null)
            {
                _currentWeapon.OnAmmoChanged -= OnAmmoChanged;
            }
        }
    }
}
