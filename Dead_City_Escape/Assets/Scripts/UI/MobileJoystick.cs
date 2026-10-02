// ---------------------------------------------------------------------------
// Dead City Escape - Mobile Joystick
// Touch-based virtual joystick for mobile FPS movement.
// Supports both fixed and floating joystick modes.
// ---------------------------------------------------------------------------
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

namespace DeadCityEscape.UI
{
    /// <summary>
    /// Virtual joystick for mobile input. Left side for movement,
    /// right side for camera look. Integrates with InputManager.
    /// </summary>
    public class MobileJoystick : MonoBehaviour,
        IPointerDownHandler, IDragHandler, IPointerUpHandler
    {
        [Header("Configuration")]
        [SerializeField] private bool _isMovementJoystick = true;
        [SerializeField] private float _deadZone = 0.1f;
        [SerializeField] private float _handleRange = 50f;
        [SerializeField] private bool _floating = true;

        [Header("Visual")]
        [SerializeField] private RectTransform _background;
        [SerializeField] private RectTransform _handle;
        [SerializeField] private CanvasGroup _canvasGroup;
        [SerializeField] private float _idleAlpha = 0.3f;
        [SerializeField] private float _activeAlpha = 0.7f;

        private Canvas _canvas;
        private Camera _uiCamera;
        private Vector2 _input;
        private Vector2 _startPos;
        private bool _isDragging;

        public Vector2 Input => _input;

        private void Start()
        {
            _canvas = GetComponentInParent<Canvas>();
            if (_canvas != null && _canvas.renderMode != RenderMode.ScreenSpaceOverlay)
                _uiCamera = _canvas.worldCamera;

            _startPos = _background.anchoredPosition;

            if (_canvasGroup != null)
                _canvasGroup.alpha = _idleAlpha;

            // Show/hide based on Application.isMobilePlatform (Requirement 13.7)
            gameObject.SetActive(Application.isMobilePlatform);
        }

        public void OnPointerDown(PointerEventData eventData)
        {
            _isDragging = true;

            if (_canvasGroup != null)
                _canvasGroup.alpha = _activeAlpha;

            if (_floating)
            {
                RectTransformUtility.ScreenPointToLocalPointInRectangle(
                    _background.parent as RectTransform,
                    eventData.position, _uiCamera, out var localPos);
                _background.anchoredPosition = localPos;
            }

            OnDrag(eventData);
        }

        public void OnDrag(PointerEventData eventData)
        {
            if (!_isDragging) return;
            RectTransformUtility.ScreenPointToLocalPointInRectangle(
                _background, eventData.position, _uiCamera, out var localPos);

            // Normalize to [-1, 1]
            localPos /= _background.sizeDelta * 0.5f;

            // Clamp to circle
            if (localPos.magnitude > 1f)
                localPos = localPos.normalized;

            // Apply dead zone
            _input = localPos.magnitude > _deadZone ? localPos : Vector2.zero;

            // Move handle visual
            if (_handle != null)
            {
                _handle.anchoredPosition = localPos * _handleRange;
            }

            // Feed to InputManager
            var inputMgr = Core.InputManager.Instance;
            if (inputMgr != null)
            {
                if (_isMovementJoystick)
                    inputMgr.SetMobileMove(_input);
                else
                    inputMgr.SetMobileLook(_input);
            }
        }

        public void OnPointerUp(PointerEventData eventData)
        {
            _isDragging = false;
            _input = Vector2.zero;

            if (_handle != null)
                _handle.anchoredPosition = Vector2.zero;

            if (_floating)
                _background.anchoredPosition = _startPos;

            if (_canvasGroup != null)
                _canvasGroup.alpha = _idleAlpha;

            // Reset input
            var inputMgr = Core.InputManager.Instance;
            if (inputMgr != null)
            {
                if (_isMovementJoystick)
                    inputMgr.SetMobileMove(Vector2.zero);
                else
                    inputMgr.SetMobileLook(Vector2.zero);
            }
        }
    }
}
