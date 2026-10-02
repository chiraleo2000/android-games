// ---------------------------------------------------------------------------
// Dead City Escape - Safe Area Panel
// Handles safe area insets for notched devices (iPhone X+, Android punch-hole).
// Adjusts RectTransform anchors to avoid UI being obscured by notches/camera cutouts.
// Requirements: 19.11
// ---------------------------------------------------------------------------
using UnityEngine;

namespace DeadCityEscape.UI
{
    /// <summary>
    /// Adjusts RectTransform anchors based on Screen.safeArea to handle device notches,
    /// punch-hole cameras, and home indicators on modern mobile devices.
    /// Supports both portrait and landscape orientations.
    /// Implements Requirement 19.11
    /// </summary>
    [RequireComponent(typeof(RectTransform))]
    public class SafeAreaPanel : MonoBehaviour
    {
        private RectTransform _rectTransform;
        private Rect _lastSafeArea;
        private ScreenOrientation _lastOrientation;

        private void Awake()
        {
            _rectTransform = GetComponent<RectTransform>();
            _lastSafeArea = new Rect(0, 0, 0, 0);
            _lastOrientation = Screen.orientation;
        }

        private void Start()
        {
            // Apply safe area on start
            ApplySafeArea();
        }

        private void Update()
        {
            // Check if safe area or orientation has changed
            if (_lastSafeArea != Screen.safeArea || _lastOrientation != Screen.orientation)
            {
                ApplySafeArea();
            }
        }

        /// <summary>
        /// Applies the safe area by adjusting RectTransform anchor min/max.
        /// This ensures UI elements respect device notches, camera cutouts, and home indicators.
        /// </summary>
        private void ApplySafeArea()
        {
            Rect safeArea = Screen.safeArea;
            
            // Store current values for change detection
            _lastSafeArea = safeArea;
            _lastOrientation = Screen.orientation;

            // Calculate anchor positions based on safe area
            // Safe area is in pixels, we need to convert to normalized coordinates [0, 1]
            Vector2 anchorMin = safeArea.position;
            Vector2 anchorMax = safeArea.position + safeArea.size;

            // Normalize to screen dimensions
            anchorMin.x /= Screen.width;
            anchorMin.y /= Screen.height;
            anchorMax.x /= Screen.width;
            anchorMax.y /= Screen.height;

            // Apply to RectTransform
            _rectTransform.anchorMin = anchorMin;
            _rectTransform.anchorMax = anchorMax;

            // Reset offsets to ensure the panel fills the safe area exactly
            _rectTransform.offsetMin = Vector2.zero;
            _rectTransform.offsetMax = Vector2.zero;

#if UNITY_EDITOR || DEVELOPMENT_BUILD
            // Log safe area changes for debugging
            Debug.Log($"[SafeAreaPanel] Applied safe area: {safeArea} | Anchors: min={anchorMin}, max={anchorMax} | Orientation: {_lastOrientation}");
#endif
        }

        /// <summary>
        /// Force reapply safe area. Useful when manually triggered after device fold/unfold events.
        /// </summary>
        public void RefreshSafeArea()
        {
            ApplySafeArea();
        }

#if UNITY_EDITOR
        // Allow testing in editor by simulating safe area changes
        private void OnValidate()
        {
            if (Application.isPlaying && _rectTransform != null)
            {
                ApplySafeArea();
            }
        }
#endif
    }
}
