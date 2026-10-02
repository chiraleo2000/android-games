// ---------------------------------------------------------------------------
// Dead City Escape - Play compliance overlay
// Settings entry for deleting local data, the privacy-policy link, and a
// crash fallback that stays on device.
// ---------------------------------------------------------------------------
using DeadCityEscape.Core;
using DeadCityEscape.Logic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.InputSystem.UI;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

namespace DeadCityEscape.UI
{
    /// <summary>
    /// Always-available settings surface. Delete asks for confirmation, then
    /// clears local data and returns to a fresh main menu with no restored run.
    /// </summary>
    public class PlayComplianceOverlay : MonoBehaviour
    {
        public static PlayComplianceOverlay Instance { get; private set; }

        GameObject _settingsPanel;
        GameObject _confirmPanel;
        GameObject _donePanel;
        GameObject _crashPanel;
        Text _doneText;
        bool _pausedForUi;
        float _previousScale = 1f;
        bool _crashVisible;
        bool _inputReady;
        Font _font;

        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.AfterSceneLoad)]
        static void Bootstrap()
        {
            if (FindAnyObjectByType<PlayComplianceOverlay>() != null)
                return;
            var go = new GameObject("[PlayCompliance]");
            DontDestroyOnLoad(go);
            go.AddComponent<PlayComplianceOverlay>();
        }

        void Awake()
        {
            if (Instance != null && Instance != this)
            {
                Destroy(gameObject);
                return;
            }

            Instance = this;
            DontDestroyOnLoad(gameObject);
            _font = Resources.GetBuiltinResource<Font>("LegacyRuntime.ttf");
            if (_font == null)
                _font = Resources.GetBuiltinResource<Font>("Arial.ttf");
            BuildUi();
        }

        void OnEnable()
        {
            Application.logMessageReceived += OnLog;
            SceneManager.sceneLoaded += OnSceneLoaded;
        }

        void OnDisable()
        {
            Application.logMessageReceived -= OnLog;
            SceneManager.sceneLoaded -= OnSceneLoaded;
        }

        void OnDestroy()
        {
            if (Instance == this)
                Instance = null;
        }

        void Start()
        {
            _inputReady = EnsureUiInput();
        }

        void Update()
        {
            if (!_inputReady)
                _inputReady = EnsureUiInput();
        }

        void OnSceneLoaded(Scene scene, LoadSceneMode mode)
        {
            _inputReady = EnsureUiInput();
        }

        public void OpenSettings()
        {
            if (_crashVisible)
                return;
            _inputReady = EnsureUiInput();
            if (_donePanel != null)
                _donePanel.SetActive(false);
            if (_confirmPanel != null)
                _confirmPanel.SetActive(false);
            if (_settingsPanel != null)
                _settingsPanel.SetActive(true);
            PauseForUi();
        }

        void BuildUi()
        {
            var canvasGo = new GameObject("PlayComplianceCanvas");
            canvasGo.transform.SetParent(transform, false);
            var canvas = canvasGo.AddComponent<Canvas>();
            canvas.renderMode = RenderMode.ScreenSpaceOverlay;
            canvas.sortingOrder = 32000;
            var scaler = canvasGo.AddComponent<CanvasScaler>();
            scaler.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
            scaler.referenceResolution = new Vector2(1080f, 1920f);
            scaler.matchWidthOrHeight = 0.5f;
            canvasGo.AddComponent<GraphicRaycaster>();

            var settingsButton = CreateButton(canvasGo.transform, "SettingsButton", "Settings",
                new Vector2(1f, 1f), new Vector2(1f, 1f), new Vector2(1f, 1f),
                new Vector2(-24f, -24f), new Vector2(240f, 84f),
                new Color(0.12f, 0.14f, 0.18f, 0.94f));
            settingsButton.onClick.AddListener(OpenSettings);

            _settingsPanel = CreateModal(canvasGo.transform, "SettingsModal");
            var card = CreateCard(_settingsPanel.transform);
            CreateLabel(card, "Settings", 42, FontStyle.Bold, new Vector2(0.5f, 1f), new Vector2(0f, -36f), new Vector2(760f, 70f));
            CreateLabel(card,
                "Violent game. No account. Not a Families app. Progress stays on this device and is not sent off the device.\n\n" +
                PlayReleaseInfo.PrivacyPolicyUrl + "\n\nVersion " + PlayReleaseInfo.VersionName +
                " (" + PlayReleaseInfo.VersionCode + ")",
                26, FontStyle.Normal, new Vector2(0.5f, 1f), new Vector2(0f, -150f), new Vector2(760f, 280f));

            var privacy = CreateButton(card, "PrivacyPolicyButton", "Privacy policy",
                new Vector2(0.5f, 0f), new Vector2(0.5f, 0f), new Vector2(0.5f, 0f),
                new Vector2(0f, 340f), new Vector2(680f, 90f),
                new Color(0.15f, 0.28f, 0.38f, 1f));
            privacy.onClick.AddListener(OpenPrivacyPolicy);

            var delete = CreateButton(card, "DeleteLocalDataButton", "Delete all local data",
                new Vector2(0.5f, 0f), new Vector2(0.5f, 0f), new Vector2(0.5f, 0f),
                new Vector2(0f, 220f), new Vector2(680f, 90f),
                new Color(0.45f, 0.12f, 0.12f, 1f));
            delete.onClick.AddListener(ShowConfirm);

            var close = CreateButton(card, "CloseSettingsButton", "Close",
                new Vector2(0.5f, 0f), new Vector2(0.5f, 0f), new Vector2(0.5f, 0f),
                new Vector2(0f, 100f), new Vector2(680f, 90f),
                new Color(0.2f, 0.2f, 0.24f, 1f));
            close.onClick.AddListener(CloseSettings);
            _settingsPanel.SetActive(false);

            _confirmPanel = CreateModal(canvasGo.transform, "ConfirmDeleteModal");
            var confirmCard = CreateCard(_confirmPanel.transform);
            CreateLabel(confirmCard, "Delete all local data?", 40, FontStyle.Bold,
                new Vector2(0.5f, 1f), new Vector2(0f, -48f), new Vector2(760f, 80f));
            CreateLabel(confirmCard,
                "This removes saved progress, settings, and cache from this device. The game starts fresh with no restored run.",
                28, FontStyle.Normal, new Vector2(0.5f, 0.5f), new Vector2(0f, 40f), new Vector2(760f, 220f));
            var confirm = CreateButton(confirmCard, "ConfirmDeleteButton", "Delete",
                new Vector2(0.5f, 0f), new Vector2(0.5f, 0f), new Vector2(0.5f, 0f),
                new Vector2(0f, 220f), new Vector2(680f, 90f),
                new Color(0.5f, 0.1f, 0.1f, 1f));
            confirm.onClick.AddListener(ConfirmDelete);
            var cancel = CreateButton(confirmCard, "CancelDeleteButton", "Cancel",
                new Vector2(0.5f, 0f), new Vector2(0.5f, 0f), new Vector2(0.5f, 0f),
                new Vector2(0f, 100f), new Vector2(680f, 90f),
                new Color(0.2f, 0.2f, 0.24f, 1f));
            cancel.onClick.AddListener(CancelDelete);
            _confirmPanel.SetActive(false);

            _donePanel = CreateModal(canvasGo.transform, "DeleteDoneModal");
            var doneCard = CreateCard(_donePanel.transform);
            _doneText = CreateLabel(doneCard,
                "All local data deleted. Starting fresh with no restored run.",
                32, FontStyle.Normal, new Vector2(0.5f, 0.5f), new Vector2(0f, 40f), new Vector2(760f, 280f));
            var ok = CreateButton(doneCard, "DeleteDoneButton", "OK",
                new Vector2(0.5f, 0f), new Vector2(0.5f, 0f), new Vector2(0.5f, 0f),
                new Vector2(0f, 120f), new Vector2(680f, 90f),
                new Color(0.15f, 0.28f, 0.38f, 1f));
            ok.onClick.AddListener(CloseDone);
            _donePanel.SetActive(false);

            _crashPanel = CreateModal(canvasGo.transform, "CrashFallbackModal");
            var crashCard = CreateCard(_crashPanel.transform);
            CreateLabel(crashCard, "Something went wrong", 40, FontStyle.Bold,
                new Vector2(0.5f, 1f), new Vector2(0f, -48f), new Vector2(760f, 80f));
            CreateLabel(crashCard,
                "A log was saved on this device. It does not include account or contact details. You can keep playing.",
                28, FontStyle.Normal, new Vector2(0.5f, 0.5f), new Vector2(0f, 40f), new Vector2(760f, 220f));
            var continueButton = CreateButton(crashCard, "ContinuePlayingButton", "Continue",
                new Vector2(0.5f, 0f), new Vector2(0.5f, 0f), new Vector2(0.5f, 0f),
                new Vector2(0f, 220f), new Vector2(680f, 90f),
                new Color(0.15f, 0.35f, 0.22f, 1f));
            continueButton.onClick.AddListener(ContinueAfterCrash);
            var menuButton = CreateButton(crashCard, "CrashMainMenuButton", "Main menu",
                new Vector2(0.5f, 0f), new Vector2(0.5f, 0f), new Vector2(0.5f, 0f),
                new Vector2(0f, 100f), new Vector2(680f, 90f),
                new Color(0.2f, 0.2f, 0.24f, 1f));
            menuButton.onClick.AddListener(MainMenuAfterCrash);
            _crashPanel.SetActive(false);
        }

        void OpenPrivacyPolicy()
        {
            Application.OpenURL(PlayReleaseInfo.PrivacyPolicyUrl);
        }

        void ShowConfirm()
        {
            if (_settingsPanel != null)
                _settingsPanel.SetActive(false);
            if (_confirmPanel != null)
                _confirmPanel.SetActive(true);
        }

        void CancelDelete()
        {
            if (_confirmPanel != null)
                _confirmPanel.SetActive(false);
            if (_settingsPanel != null)
                _settingsPanel.SetActive(true);
        }

        void ConfirmDelete()
        {
            if (_confirmPanel != null)
                _confirmPanel.SetActive(false);
            _pausedForUi = false;

            var save = SaveSystem.Instance;
            string error = null;
            var ok = save != null && save.TryDeleteAllLocalData(out error);
            Time.timeScale = 1f;

            if (ok)
            {
                if (_doneText != null)
                    _doneText.text = "All local data deleted. Starting fresh with no restored run.";
                LoadFreshMainMenu();
            }
            else
            {
                if (_doneText != null)
                {
                    _doneText.text = string.IsNullOrEmpty(error)
                        ? "Local data could not be deleted. Nothing was confirmed as cleared."
                        : "Local data could not be fully deleted. " + error;
                }
            }

            if (_donePanel != null)
                _donePanel.SetActive(true);
        }

        void CloseDone()
        {
            if (_donePanel != null)
                _donePanel.SetActive(false);
        }

        void CloseSettings()
        {
            if (_settingsPanel != null)
                _settingsPanel.SetActive(false);
            if (_confirmPanel != null)
                _confirmPanel.SetActive(false);
            ResumeFromUi();
        }

        void LoadFreshMainMenu()
        {
            if (SceneManager.GetActiveScene().name != "MainMenu")
                SceneManager.LoadScene("MainMenu");
        }

        void PauseForUi()
        {
            if (_pausedForUi)
                return;
            _previousScale = Time.timeScale;
            _pausedForUi = true;
            Time.timeScale = 0f;
        }

        void ResumeFromUi()
        {
            if (!_pausedForUi)
                return;
            _pausedForUi = false;
            Time.timeScale = _previousScale;
        }

        void OnLog(string condition, string stackTrace, LogType type)
        {
            if (type != LogType.Exception || _crashVisible)
                return;
            if (!string.IsNullOrEmpty(condition) && condition.Contains("[PlayCompliance]"))
                return;

            OnDeviceLog.AppendException(condition, stackTrace);
            _crashVisible = true;
            if (_crashPanel != null)
                _crashPanel.SetActive(true);
            Time.timeScale = 0f;
        }

        void ContinueAfterCrash()
        {
            _crashVisible = false;
            if (_crashPanel != null)
                _crashPanel.SetActive(false);
            _pausedForUi = false;
            Time.timeScale = 1f;
        }

        void MainMenuAfterCrash()
        {
            _crashVisible = false;
            if (_crashPanel != null)
                _crashPanel.SetActive(false);
            _pausedForUi = false;
            Time.timeScale = 1f;
            LoadFreshMainMenu();
        }

        bool EnsureUiInput()
        {
            var es = FindAnyObjectByType<EventSystem>();
            if (es == null)
            {
                var go = new GameObject("EventSystem");
                es = go.AddComponent<EventSystem>();
            }

            if (es.GetComponent<InputSystemUIInputModule>() == null)
                es.gameObject.AddComponent<InputSystemUIInputModule>();

            var standalone = es.GetComponent<StandaloneInputModule>();
            if (standalone != null)
                standalone.enabled = false;

            return es.GetComponent<InputSystemUIInputModule>() != null;
        }

        GameObject CreateModal(Transform parent, string name)
        {
            var modal = new GameObject(name);
            modal.transform.SetParent(parent, false);
            var rect = modal.AddComponent<RectTransform>();
            Stretch(rect);
            var image = modal.AddComponent<Image>();
            image.color = new Color(0f, 0f, 0f, 0.72f);
            image.raycastTarget = true;
            return modal;
        }

        RectTransform CreateCard(Transform parent)
        {
            var card = new GameObject("Card");
            card.transform.SetParent(parent, false);
            var rect = card.AddComponent<RectTransform>();
            rect.anchorMin = new Vector2(0.5f, 0.5f);
            rect.anchorMax = new Vector2(0.5f, 0.5f);
            rect.pivot = new Vector2(0.5f, 0.5f);
            rect.sizeDelta = new Vector2(860f, 980f);
            var image = card.AddComponent<Image>();
            image.color = new Color(0.08f, 0.09f, 0.12f, 0.98f);
            return rect;
        }

        Text CreateLabel(Transform parent, string message, int size, FontStyle style,
            Vector2 anchor, Vector2 position, Vector2 dimensions)
        {
            var go = new GameObject("Label");
            go.transform.SetParent(parent, false);
            var rect = go.AddComponent<RectTransform>();
            rect.anchorMin = anchor;
            rect.anchorMax = anchor;
            rect.pivot = new Vector2(0.5f, 1f);
            rect.anchoredPosition = position;
            rect.sizeDelta = dimensions;
            var text = go.AddComponent<Text>();
            text.font = _font;
            text.fontSize = size;
            text.fontStyle = style;
            text.alignment = TextAnchor.UpperCenter;
            text.color = Color.white;
            text.horizontalOverflow = HorizontalWrapMode.Wrap;
            text.verticalOverflow = VerticalWrapMode.Overflow;
            text.text = message;
            text.raycastTarget = false;
            return text;
        }

        Button CreateButton(Transform parent, string name, string label,
            Vector2 anchorMin, Vector2 anchorMax, Vector2 pivot,
            Vector2 position, Vector2 size, Color color)
        {
            var go = new GameObject(name);
            go.transform.SetParent(parent, false);
            var rect = go.AddComponent<RectTransform>();
            rect.anchorMin = anchorMin;
            rect.anchorMax = anchorMax;
            rect.pivot = pivot;
            rect.anchoredPosition = position;
            rect.sizeDelta = size;
            var image = go.AddComponent<Image>();
            image.color = color;
            var button = go.AddComponent<Button>();
            button.targetGraphic = image;

            var textGo = new GameObject("Text");
            textGo.transform.SetParent(go.transform, false);
            var textRect = textGo.AddComponent<RectTransform>();
            Stretch(textRect);
            var text = textGo.AddComponent<Text>();
            text.font = _font;
            text.fontSize = 30;
            text.fontStyle = FontStyle.Bold;
            text.alignment = TextAnchor.MiddleCenter;
            text.color = Color.white;
            text.text = label;
            text.raycastTarget = false;
            return button;
        }

        static void Stretch(RectTransform rect)
        {
            rect.anchorMin = Vector2.zero;
            rect.anchorMax = Vector2.one;
            rect.offsetMin = Vector2.zero;
            rect.offsetMax = Vector2.zero;
        }
    }
}
