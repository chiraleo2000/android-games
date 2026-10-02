// ---------------------------------------------------------------------------
// Dead City Escape - Pause Menu
// In-game pause with resume, settings, and quit to main menu.
// ---------------------------------------------------------------------------
using UnityEngine;
using UnityEngine.UI;

namespace DeadCityEscape.UI
{
    /// <summary>
    /// Pause menu overlay. Stops game time and provides options.
    /// </summary>
    public class PauseMenuController : MonoBehaviour
    {
        [SerializeField] private GameObject _panel;
        [SerializeField] private Button _resumeButton;
        [SerializeField] private Button _settingsButton;
        [SerializeField] private Button _mainMenuButton;

        [SerializeField] private GameObject _settingsPanel;
        [SerializeField] private Button _settingsBackButton;

        private bool _isPaused;

        private void Start()
        {
            if (_resumeButton != null)
                _resumeButton.onClick.AddListener(Resume);
            if (_settingsButton != null)
                _settingsButton.onClick.AddListener(ShowSettings);
            if (_mainMenuButton != null)
                _mainMenuButton.onClick.AddListener(QuitToMainMenu);
            if (_settingsBackButton != null)
                _settingsBackButton.onClick.AddListener(HideSettings);

            Hide();
        }

        private void Update()
        {
            var input = Core.InputManager.Instance;
            if (input != null && input.PausePressed)
            {
                if (_isPaused) Resume();
                else Pause();
            }
        }

        public void Pause()
        {
            _isPaused = true;
            if (_panel != null) _panel.SetActive(true);

            var gm = Core.GameManager.Instance;
            if (gm != null)
                gm.TogglePause();
        }

        public void Resume()
        {
            _isPaused = false;
            if (_panel != null) _panel.SetActive(false);
            if (_settingsPanel != null) _settingsPanel.SetActive(false);

            var gm = Core.GameManager.Instance;
            if (gm != null)
                gm.TogglePause();
        }

        private void ShowSettings()
        {
            if (_settingsPanel != null) _settingsPanel.SetActive(true);
            if (PlayComplianceOverlay.Instance != null)
                PlayComplianceOverlay.Instance.OpenSettings();
        }

        private void HideSettings()
        {
            if (_settingsPanel != null) _settingsPanel.SetActive(false);
        }

        private void QuitToMainMenu()
        {
            Time.timeScale = 1f;
            var gm = Core.GameManager.Instance;
            if (gm != null)
                gm.SetPhase(Core.GamePhase.MainMenu);

            UnityEngine.SceneManagement.SceneManager.LoadScene(0);
        }

        private void Hide()
        {
            if (_panel != null) _panel.SetActive(false);
            _isPaused = false;
        }
    }
}
