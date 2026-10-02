// ---------------------------------------------------------------------------
// Dead City Escape - Weather System
// Procedural rain, fog, and atmospheric effects.
// Performance-budgeted for mobile devices.
// ---------------------------------------------------------------------------
using UnityEngine;

namespace DeadCityEscape.ProceduralArt
{
    /// <summary>
    /// Controls dynamic weather effects: rain, fog, and ambient lighting.
    /// Uses lightweight particle systems budgeted for mobile performance.
    /// </summary>
    public class WeatherSystem : MonoBehaviour
    {
        [Header("Fog")]
        [SerializeField] private bool _enableFog = true;
        [SerializeField] private Color _fogColor = new Color(0.02f, 0.02f, 0.05f);
        [SerializeField] private float _fogDensity = 0.015f;
        [SerializeField] private float _fogStart = 10f;
        [SerializeField] private float _fogEnd = 80f;

        [Header("Rain")]
        [SerializeField] private bool _enableRain = true;
        [SerializeField] private int _rainParticleCount = 500;
        [SerializeField] private float _rainSpeed = 15f;
        [SerializeField] private float _rainSpread = 20f;

        [Header("Ambient")]
        [SerializeField] private Color _ambientColor = new Color(0.03f, 0.03f, 0.06f);
        [SerializeField] private float _ambientIntensity = 0.4f;

        private ParticleSystem _rainSystem;
        private Transform _playerTransform;

        private void Start()
        {
            _playerTransform = FindAnyObjectByType<Player.PlayerController>()?.transform;

            SetupFog();
            SetupAmbient();

            if (_enableRain)
                SetupRain();
        }

        private void Update()
        {
            // Move rain to follow player
            if (_rainSystem != null && _playerTransform != null)
            {
                _rainSystem.transform.position = _playerTransform.position
                    + Vector3.up * 15f;
            }
        }

        private void SetupFog()
        {
            RenderSettings.fog = _enableFog;
            RenderSettings.fogColor = _fogColor;
            RenderSettings.fogMode = FogMode.Linear;
            RenderSettings.fogStartDistance = _fogStart;
            RenderSettings.fogEndDistance = _fogEnd;
        }

        private void SetupAmbient()
        {
            RenderSettings.ambientMode = UnityEngine.Rendering.AmbientMode.Flat;
            RenderSettings.ambientLight = _ambientColor;
            RenderSettings.ambientIntensity = _ambientIntensity;

            // Dark skybox color
            Camera.main.backgroundColor = new Color(0.01f, 0.01f, 0.02f);
            Camera.main.clearFlags = CameraClearFlags.SolidColor;
        }

        private void SetupRain()
        {
            var rainObj = new GameObject("RainSystem");
            rainObj.transform.SetParent(transform);
            _rainSystem = rainObj.AddComponent<ParticleSystem>();

            var main = _rainSystem.main;
            main.maxParticles = _rainParticleCount;
            main.startLifetime = 1.5f;
            main.startSpeed = _rainSpeed;
            main.startSize = 0.03f;
            main.startColor = new Color(0.5f, 0.5f, 0.6f, 0.4f);
            main.simulationSpace = ParticleSystemSimulationSpace.World;
            main.gravityModifier = 1.5f;

            var emission = _rainSystem.emission;
            emission.rateOverTime = _rainParticleCount / 1.5f;

            var shape = _rainSystem.shape;
            shape.shapeType = ParticleSystemShapeType.Box;
            shape.scale = new Vector3(_rainSpread * 2, 0.1f, _rainSpread * 2);

            // Use unlit particle shader for performance
            var renderer = _rainSystem.GetComponent<ParticleSystemRenderer>();
            renderer.renderMode = ParticleSystemRenderMode.Stretch;
            renderer.lengthScale = 3f;
        }

        public void SetWeatherIntensity(float intensity)
        {
            intensity = Mathf.Clamp01(intensity);
            RenderSettings.fogDensity = _fogDensity * intensity;

            if (_rainSystem != null)
            {
                var emission = _rainSystem.emission;
                emission.rateOverTime = _rainParticleCount * intensity / 1.5f;
            }
        }
    }
}
