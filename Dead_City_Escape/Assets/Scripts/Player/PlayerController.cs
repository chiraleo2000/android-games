// ---------------------------------------------------------------------------
// Dead City Escape - FPS Player Controller
// Doom-style first-person controller with mobile and desktop support.
// Handles movement, sprinting, crouching, jumping, and gravity.
// ---------------------------------------------------------------------------
using UnityEngine;

namespace DeadCityEscape.Player
{
    /// <summary>
    /// First-person player controller with Doom-style movement.
    /// Supports desktop keyboard/mouse and mobile virtual joystick input.
    /// </summary>
    [RequireComponent(typeof(CharacterController))]
    public class PlayerController : MonoBehaviour
    {
        [Header("Movement")]
        [SerializeField] private float _walkSpeed = 5.0f;
        [SerializeField] private float _sprintSpeed = 8.0f;
        [SerializeField] private float _crouchSpeed = 2.5f;
        [SerializeField] private float _jumpForce = 5.0f;
        [SerializeField] private float _gravity = -19.62f;
        [SerializeField] private float _groundCheckDistance = 0.3f;

        [Header("Camera")]
        [SerializeField] private Transform _cameraHolder;
        [SerializeField] private float _standHeight = 1.7f;
        [SerializeField] private float _crouchHeight = 0.9f;
        [SerializeField] private float _minPitch = -80f;
        [SerializeField] private float _maxPitch = 80f;
        [SerializeField] private float _baseFOV = 75f;
        [SerializeField] private float _sprintFOVBoost = 10f;
        [SerializeField] private float _fovLerpSpeed = 8f;

        [Header("Footsteps")]
        [SerializeField] private float _footstepInterval = 0.5f;
        [SerializeField] private float _sprintFootstepInterval = 0.35f;

        [Header("Aim Assist")]
        [SerializeField] private bool _aimAssistEnabled = true;
        [SerializeField] private float _aimAssistRange = 20f;
        [SerializeField] private float _aimAssistAngle = 15f;
        [SerializeField] private float _aimAssistStrength = 0.3f;

        private CharacterController _controller;
        private Camera _camera;
        private Core.InputManager _input;
        private WorldGen.CityGenerator _cityGenerator;

        private Vector3 _velocity;
        private float _cameraPitch;
        private float _currentSpeed;
        private float _footstepTimer;
        private bool _isCrouching;
        private bool _isSprinting;
        private bool _isGrounded;
        private int _currentZoneIndex = -1;

        // Noise system integration
        public float CurrentNoiseLevel { get; private set; }
        public bool IsMoving => _controller.velocity.magnitude > 0.1f;
        public bool IsSprinting => _isSprinting;
        public bool IsCrouching => _isCrouching;
        public Vector3 Position => transform.position;
        public Vector3 Forward => transform.forward;

        private void Start()
        {
            _controller = GetComponent<CharacterController>();
            _input = Core.InputManager.Instance;
            _cityGenerator = FindFirstObjectByType<WorldGen.CityGenerator>();

            // Setup camera
            if (_cameraHolder == null)
            {
                _cameraHolder = new GameObject("CameraHolder").transform;
                _cameraHolder.SetParent(transform);
                _cameraHolder.localPosition = new Vector3(0, _standHeight, 0);
            }

            _camera = _cameraHolder.GetComponentInChildren<Camera>();
            if (_camera == null)
            {
                var camObj = new GameObject("PlayerCamera");
                camObj.transform.SetParent(_cameraHolder);
                camObj.transform.localPosition = Vector3.zero;
                _camera = camObj.AddComponent<Camera>();
                camObj.AddComponent<AudioListener>();
            }

            _camera.fieldOfView = _baseFOV;

            // Lock cursor on desktop
            if (!Application.isMobilePlatform)
            {
                Cursor.lockState = CursorLockMode.Locked;
                Cursor.visible = false;
            }
        }

        private void Update()
        {
            if (_input == null) return;

            var gm = Core.GameManager.Instance;
            if (gm != null && gm.CurrentPhase != Core.GamePhase.Playing &&
                gm.CurrentPhase != Core.GamePhase.EscapeSequence)
                return;

            UpdateGroundCheck();
            UpdateMovement();
            UpdateCamera();
            UpdateFootsteps();
            UpdateCrouch();
            UpdateNoiseLevel();
            UpdateZoneTracking();
        }

        private void UpdateGroundCheck()
        {
            _isGrounded = _controller.isGrounded;

            if (_isGrounded && _velocity.y < 0)
                _velocity.y = -2f;
        }

        private void UpdateMovement()
        {
            Vector2 input = _input.MoveInput;

            // Determine speed
            _isSprinting = _input.SprintHeld && !_isCrouching && input.y > 0;
            _currentSpeed = _isCrouching ? _crouchSpeed :
                            _isSprinting ? _sprintSpeed : _walkSpeed;

            // Calculate movement direction
            Vector3 move = transform.right * input.x + transform.forward * input.y;
            move = Vector3.ClampMagnitude(move, 1f) * _currentSpeed;

            _controller.Move(move * Time.deltaTime);

            // Jump
            if (_input.JumpPressed && _isGrounded && !_isCrouching)
            {
                _velocity.y = Mathf.Sqrt(_jumpForce * -2f * _gravity);
            }

            // Apply gravity
            _velocity.y += _gravity * Time.deltaTime;
            _controller.Move(_velocity * Time.deltaTime);
        }

        private void UpdateCamera()
        {
            Vector2 look = _input.LookInput;

            // Apply aim assist if enabled
            if (_aimAssistEnabled && Application.isMobilePlatform)
            {
                look += GetAimAssist();
            }

            // Horizontal rotation (yaw)
            transform.Rotate(Vector3.up * look.x);

            // Vertical rotation (pitch)
            _cameraPitch -= look.y;
            _cameraPitch = Mathf.Clamp(_cameraPitch, _minPitch, _maxPitch);
            _cameraHolder.localEulerAngles = new Vector3(_cameraPitch, 0, 0);

            // FOV adjustment for sprint
            float targetFOV = _isSprinting ? _baseFOV + _sprintFOVBoost : _baseFOV;
            _camera.fieldOfView = Mathf.Lerp(_camera.fieldOfView,
                targetFOV, Time.deltaTime * _fovLerpSpeed);
        }

        private void UpdateCrouch()
        {
            if (_input.CrouchPressed)
            {
                _isCrouching = !_isCrouching;
                float targetHeight = _isCrouching ? _crouchHeight : _standHeight;
                _cameraHolder.localPosition = new Vector3(0, targetHeight, 0);
                _controller.height = _isCrouching ? 1.0f : 2.0f;
                _controller.center = new Vector3(0, _controller.height * 0.5f, 0);
            }
        }

        private void UpdateFootsteps()
        {
            if (!_isGrounded || !IsMoving) return;

            float interval = _isSprinting ? _sprintFootstepInterval : _footstepInterval;
            _footstepTimer += Time.deltaTime;

            if (_footstepTimer >= interval)
            {
                _footstepTimer = 0f;
                PlayFootstep();
            }
        }

        private void PlayFootstep()
        {
            var audio = Audio.AudioManager.Instance;
            if (audio != null)
            {
                float pitch = _isSprinting ? 1.2f : (_isCrouching ? 0.8f : 1.0f);
                var clip = audio.GenerateFootstep(pitch);
                audio.PlaySFX(clip, _isCrouching ? 0.3f : 0.7f);
            }
        }

        private void UpdateNoiseLevel()
        {
            if (!IsMoving)
            {
                CurrentNoiseLevel = 0f;
                return;
            }

            CurrentNoiseLevel = _isCrouching ? 5f : (_isSprinting ? 30f : 15f);

            // Apply stealth skill reduction (Shadow Walk / stealth_1)
            var saveSystem = Core.SaveSystem.Instance;
            if (saveSystem != null)
            {
                var unlockedSkills = saveSystem.GetUnlockedSkillIds();
                if (unlockedSkills != null && System.Array.Exists(unlockedSkills, id => id == "stealth_1"))
                {
                    // Shadow Walk reduces noise by 30% (multiply by 0.7)
                    CurrentNoiseLevel *= 0.7f;
                }
            }
        }

        /// <summary>
        /// Tracks zone changes and notifies CityGenerator for streaming.
        /// </summary>
        private void UpdateZoneTracking()
        {
            if (_cityGenerator == null) return;

            int newZone = WorldToZoneIndex(transform.position);
            if (newZone != _currentZoneIndex)
            {
                _currentZoneIndex = newZone;
                _cityGenerator.UpdatePlayerZone(newZone);
            }
        }

        /// <summary>
        /// Converts world position to zone index (0-15 in 4x4 grid).
        /// </summary>
        private int WorldToZoneIndex(Vector3 worldPos)
        {
            // Each zone is 100x100 units
            int gridX = Mathf.Clamp(Mathf.FloorToInt(worldPos.x / 100f), 0, 3);
            int gridZ = Mathf.Clamp(Mathf.FloorToInt(worldPos.z / 100f), 0, 3);
            return gridZ * 4 + gridX;
        }

        /// <summary>
        /// Calculates aim assist pull toward nearest zombie.
        /// </summary>
        private Vector2 GetAimAssist()
        {
            if (_camera == null) return Vector2.zero;

            // Find zombies within range
            var zombies = Physics.OverlapSphere(transform.position, _aimAssistRange,
                LayerMask.GetMask("Enemy"));

            AI.ZombieBase closestZombie = null;
            float closestAngle = _aimAssistAngle;

            foreach (var col in zombies)
            {
                var zombie = col.GetComponent<AI.ZombieBase>();
                if (zombie == null || zombie.IsDead) continue;

                Vector3 dirToZombie = (zombie.transform.position - _camera.transform.position).normalized;
                float angle = Vector3.Angle(_camera.transform.forward, dirToZombie);

                if (angle < closestAngle)
                {
                    closestAngle = angle;
                    closestZombie = zombie;
                }
            }

            if (closestZombie == null) return Vector2.zero;

            // Calculate pull toward zombie
            Vector3 dirToTarget = (closestZombie.transform.position - _camera.transform.position).normalized;
            Vector3 currentForward = _camera.transform.forward;

            // Calculate rotation needed
            Quaternion targetRot = Quaternion.LookRotation(dirToTarget);
            Quaternion currentRot = Quaternion.LookRotation(currentForward);
            Quaternion deltaRot = Quaternion.Inverse(currentRot) * targetRot;

            // Convert to euler and apply strength
            Vector3 euler = deltaRot.eulerAngles;
            if (euler.x > 180f) euler.x -= 360f;
            if (euler.y > 180f) euler.y -= 360f;

            return new Vector2(euler.y, -euler.x) * _aimAssistStrength;
        }

        /// <summary>
        /// Teleports the player to a position (used for spawning).
        /// </summary>
        public void TeleportTo(Vector3 position)
        {
            _controller.enabled = false;
            transform.position = position;
            _controller.enabled = true;
            _velocity = Vector3.zero;
        }

        /// <summary>
        /// Applies an external force (knockback from explosions, etc.).
        /// </summary>
        public void ApplyForce(Vector3 force)
        {
            _velocity += force;
        }
    }
}
