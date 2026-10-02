// ---------------------------------------------------------------------------
// Dead City Escape - Neon Light Controller
// Creates atmospheric neon-dystopian lighting at runtime.
// Procedural neon signs, street lights, and ambient glow.
// ---------------------------------------------------------------------------
using UnityEngine;
using DeadCityEscape.Logic;

namespace DeadCityEscape.ProceduralArt
{
    /// <summary>
    /// Manages procedural neon lighting for the dystopian city atmosphere.
    /// Spawns point lights and emissive objects to create the art style.
    /// </summary>
    public class NeonLightController : MonoBehaviour
    {
        [Header("Neon Colors")]
        [SerializeField] private Color[] _neonPalette = new[]
        {
            new Color(0f, 1f, 0.8f),    // Cyan
            new Color(1f, 0f, 0.6f),     // Magenta/Pink
            new Color(0.4f, 0f, 1f),     // Purple
            new Color(1f, 0.5f, 0f),     // Orange
            new Color(0f, 0.8f, 1f),     // Blue
        };

        [Header("Light Settings")]
        [SerializeField] private float _neonIntensity = 3f;
        [SerializeField] private float _neonRange = 8f;
        [SerializeField] private float _flickerSpeed = 5f;
        [SerializeField] private float _flickerAmount = 0.3f;

        private Light[] _neonLights;
        private float[] _baseIntensities;

        /// <summary>
        /// Populates a zone with neon lights procedurally.
        /// </summary>
        public void GenerateNeonLightsForZone(Transform zoneRoot, int seed)
        {
            var rng = new SeededRNG(seed);
            int lightCount = rng.Next(4, 10);

            var lights = new System.Collections.Generic.List<Light>();
            var intensities = new System.Collections.Generic.List<float>();

            for (int i = 0; i < lightCount; i++)
            {
                float x = rng.NextFloat(-40f, 40f);
                float z = rng.NextFloat(-40f, 40f);
                float y = rng.NextFloat(2.5f, 6f);

                Color color = _neonPalette[rng.Next(_neonPalette.Length)];
                float intensity = _neonIntensity * rng.NextFloat(0.7f, 1.3f);

                var lightObj = new GameObject($"NeonLight_{i}");
                lightObj.transform.SetParent(zoneRoot);
                lightObj.transform.localPosition = new Vector3(x, y, z);

                var light = lightObj.AddComponent<Light>();
                light.type = LightType.Point;
                light.color = color;
                light.intensity = intensity;
                light.range = _neonRange;
                light.shadows = LightShadows.None; // Performance: no shadows for neon

                lights.Add(light);
                intensities.Add(intensity);
            }

            _neonLights = lights.ToArray();
            _baseIntensities = intensities.ToArray();
        }

        private void Update()
        {
            if (_neonLights == null) return;

            // Animate neon flicker
            for (int i = 0; i < _neonLights.Length; i++)
            {
                if (_neonLights[i] == null) continue;

                float flicker = Mathf.PerlinNoise1D(
                    Time.time * _flickerSpeed + i * 17.3f);
                _neonLights[i].intensity = _baseIntensities[i] *
                    (1f - _flickerAmount + flicker * _flickerAmount);
            }
        }
    }
}
