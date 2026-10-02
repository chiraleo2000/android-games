// ---------------------------------------------------------------------------
// Dead City Escape - Player Flashlight
// Doom-style flashlight with battery drain and procedural light cone.
// ---------------------------------------------------------------------------
using UnityEngine;

namespace DeadCityEscape.Player
{
    /// <summary>
    /// Flashlight component attached to the player's camera.
    /// Battery-powered with configurable range and angle.
    /// </summary>
    public class PlayerFlashlight : MonoBehaviour
    {
        [Header("Flashlight")]
        [SerializeField] private float _range = 20f;
        [SerializeField] private float _spotAngle = 45f;
        [SerializeField] private float _intensity = 2.0f;
        [SerializeField] private Color _color = new Color(1f, 0.95f, 0.85f);
        [SerializeField] private float _batteryMax = 100f;
        [SerializeField] private float _batteryDrainRate = 0.5f;
        [SerializeField] private float _flickerThreshold = 15f;

        private Light _light;
        private float _battery;
        private bool _isOn;
        private float _flickerTimer;
        private Core.InputManager _input;

        public float BatteryPercent => _battery / _batteryMax;
        public bool IsOn => _isOn;

        private void Start()
        {
            _input = Core.InputManager.Instance;

            _light = GetComponentInChildren<Light>();
            if (_light == null)
            {
                var lightObj = new GameObject("FlashlightSpot");
                lightObj.transform.SetParent(transform);
                lightObj.transform.localPosition = Vector3.zero;
                lightObj.transform.localRotation = Quaternion.identity;
                _light = lightObj.AddComponent<Light>();
            }

            _light.type = LightType.Spot;
            _light.range = _range;
            _light.spotAngle = _spotAngle;
            _light.intensity = _intensity;
            _light.color = _color;
            _light.shadows = LightShadows.Soft;
            _light.shadowStrength = 0.7f;

            _battery = _batteryMax;
            _isOn = false;
            _light.enabled = false;
        }

        private void Update()
        {
            // Handle input
            if (_input != null && _input.FlashlightPressed)
            {
                Toggle();
            }

            if (!_isOn) return;

            // Drain battery
            _battery -= _batteryDrainRate * Time.deltaTime;
            _battery = Mathf.Max(0, _battery);

            if (_battery <= 0)
            {
                Toggle();
                return;
            }

            // Flicker effect when battery is low
            if (_battery <= _flickerThreshold)
            {
                _flickerTimer += Time.deltaTime;
                float flicker = Mathf.PerlinNoise1D(_flickerTimer * 10f);
                _light.intensity = _intensity * Mathf.Lerp(0.2f, 1f, flicker);
            }
            else
            {
                _light.intensity = _intensity;
            }
        }

        /// <summary>
        /// Toggles the flashlight on/off.
        /// </summary>
        public void Toggle()
        {
            if (_battery <= 0 && !_isOn) return;

            _isOn = !_isOn;
            _light.enabled = _isOn;
        }

        /// <summary>
        /// Recharges the battery by the given amount.
        /// </summary>
        public void Recharge(float amount)
        {
            _battery = Mathf.Min(_batteryMax, _battery + amount);
        }
    }
}
