// ---------------------------------------------------------------------------
// Dead City Escape - Input Manager
// Handles both desktop (keyboard/mouse) and mobile (touch) input.
// Abstracts platform differences for the game systems.
// ---------------------------------------------------------------------------
using UnityEngine;

namespace DeadCityEscape.Core
{
    /// <summary>
    /// Unified input layer supporting desktop and mobile controls.
    /// Read-only properties updated each frame for all systems to query.
    /// </summary>
    public class InputManager : Singleton<InputManager>
    {
        [Header("Settings")]
        [SerializeField] private float _mouseSensitivity = 2.0f;
        [SerializeField] private float _touchSensitivity = 1.5f;
        [SerializeField] private float _aimAssistStrength = 0.3f;
        [SerializeField] private bool _invertYAxis = false;

        // Movement input (normalized)
        public Vector2 MoveInput { get; private set; }
        // Look input (delta per frame)
        public Vector2 LookInput { get; private set; }
        // Action buttons
        public bool FirePressed { get; private set; }
        public bool FireHeld { get; private set; }
        public bool FireReleased { get; private set; }
        public bool JumpPressed { get; private set; }
        public bool SprintHeld { get; private set; }
        public bool ReloadPressed { get; private set; }
        public bool InteractPressed { get; private set; }
        public bool UseMedkitPressed { get; private set; }
        public bool PausePressed { get; private set; }
        public bool SkillMenuPressed { get; private set; }
        public bool CrouchPressed { get; private set; }
        public bool FlashlightPressed { get; private set; }
        public bool IsMobile { get; private set; }

        // Mobile joystick state (set by UI joystick components)
        private Vector2 _mobileMove;
        private Vector2 _mobileLook;
        private bool _mobileFire;
        private bool _mobileJump;
        private bool _mobileSprint;
        private bool _mobileReload;
        private bool _mobileInteract;
        private bool _mobileFlashlight;

        protected override void OnInitialize()
        {
#if UNITY_WEBGL && !UNITY_EDITOR
            // WebGL: detect mobile browser via user agent
            IsMobile = false; // Default to desktop; mobile browsers use touch events
#else
            IsMobile = Application.isMobilePlatform;
#endif
        }

        private void Update()
        {
            if (IsMobile)
                UpdateMobileInput();
            else
                UpdateDesktopInput();
        }

        private void UpdateDesktopInput()
        {
            // Movement (WASD)
            float h = 0f, v = 0f;
            if (Input.GetKey(KeyCode.W)) v += 1f;
            if (Input.GetKey(KeyCode.S)) v -= 1f;
            if (Input.GetKey(KeyCode.A)) h -= 1f;
            if (Input.GetKey(KeyCode.D)) h += 1f;
            MoveInput = new Vector2(h, v).normalized;

            // Look (Mouse)
            float mx = Input.GetAxis("Mouse X") * _mouseSensitivity;
            float my = Input.GetAxis("Mouse Y") * _mouseSensitivity;
            if (_invertYAxis) my = -my;
            LookInput = new Vector2(mx, my);

            // Fire
            FirePressed = Input.GetMouseButtonDown(0);
            FireHeld = Input.GetMouseButton(0);
            FireReleased = Input.GetMouseButtonUp(0);

            // Other actions
            JumpPressed = Input.GetKeyDown(KeyCode.Space);
            SprintHeld = Input.GetKey(KeyCode.LeftShift);
            ReloadPressed = Input.GetKeyDown(KeyCode.R);
            InteractPressed = Input.GetKeyDown(KeyCode.E);
            UseMedkitPressed = Input.GetKeyDown(KeyCode.H);
            PausePressed = Input.GetKeyDown(KeyCode.Escape);
            SkillMenuPressed = Input.GetKeyDown(KeyCode.Tab);
            CrouchPressed = Input.GetKeyDown(KeyCode.C);
            FlashlightPressed = Input.GetKeyDown(KeyCode.F);
        }

        private void UpdateMobileInput()
        {
            // Mobile input comes from UI joystick components
            MoveInput = _mobileMove;
            LookInput = _mobileLook * _touchSensitivity;

            FirePressed = _mobileFire;
            FireHeld = _mobileFire;
            FireReleased = false;
            JumpPressed = _mobileJump;
            SprintHeld = _mobileSprint;
            ReloadPressed = _mobileReload;
            InteractPressed = _mobileInteract;
            FlashlightPressed = _mobileFlashlight;

            // Reset one-shot inputs
            _mobileJump = false;
            _mobileReload = false;
            _mobileInteract = false;
            _mobileFlashlight = false;
        }

        // -- Mobile Input Setters (called by UI components) --

        public void SetMobileMove(Vector2 input)
        {
            _mobileMove = input;
        }

        public void SetMobileLook(Vector2 delta)
        {
            _mobileLook = delta;
        }

        public void SetMobileFire(bool pressed)
        {
            _mobileFire = pressed;
        }

        public void TriggerMobileJump()
        {
            _mobileJump = true;
        }

        public void SetMobileSprint(bool sprinting)
        {
            _mobileSprint = sprinting;
        }

        public void TriggerMobileReload()
        {
            _mobileReload = true;
        }

        public void TriggerMobileInteract()
        {
            _mobileInteract = true;
        }

        public void TriggerMobileFlashlight()
        {
            _mobileFlashlight = true;
        }

        // -- Settings --

        public void SetMouseSensitivity(float value)
        {
            _mouseSensitivity = Mathf.Clamp(value, 0.1f, 10f);
        }

        public void SetTouchSensitivity(float value)
        {
            _touchSensitivity = Mathf.Clamp(value, 0.1f, 10f);
        }

        public void SetInvertY(bool invert)
        {
            _invertYAxis = invert;
        }
    }
}
