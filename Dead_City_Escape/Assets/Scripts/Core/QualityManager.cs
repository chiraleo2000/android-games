// ---------------------------------------------------------------------------
// Dead City Escape - Quality Manager
// Manages quality tier differences between Lite and Standard modes
// ---------------------------------------------------------------------------
using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.Rendering.Universal;
using ShadowQuality = UnityEngine.ShadowQuality;

namespace DeadCityEscape.Core
{
    /// <summary>
    /// Manages quality tier settings and runtime quality adjustments.
    /// Lite mode (QualityLevel 0): 30 FPS, 12 max agents, no shadows, reduced effects
    /// Standard mode (QualityLevel 1): 60 FPS, 20 max agents, full effects
    /// </summary>
    public class QualityManager : Singleton<QualityManager>
    {
        [Header("Quality Tier Settings")]
        [SerializeField] private UniversalRenderPipelineAsset urpLite;
        [SerializeField] private UniversalRenderPipelineAsset urpStandard;

        [Header("Zone Streaming")]
        [SerializeField] private int liteZoneRadius = 1;
        [SerializeField] private int standardZoneRadius = 2;

        [Header("AI Settings")]
        [SerializeField] private int liteMaxNavMeshAgents = 12;
        [SerializeField] private int standardMaxNavMeshAgents = 20;

        [Header("Frame Rate")]
        [SerializeField] private int liteTargetFrameRate = 30;
        [SerializeField] private int standardTargetFrameRate = 60;

        private int _currentQualityLevel = -1;

        public int MaxNavMeshAgents { get; private set; }
        public int ZoneStreamingRadius { get; private set; }

        protected override void OnInitialize()
        {
            // Apply quality settings from SaveSystem if available
            if (SaveSystem.Instance != null && SaveSystem.Instance.Data != null)
            {
                ApplyQualityLevel(SaveSystem.Instance.Data.QualityLevel);
            }
            else
            {
                // Default to platform-specific quality
                int defaultQuality = Application.platform == RuntimePlatform.Android ? 0 : 1;
                ApplyQualityLevel(defaultQuality);
            }
        }

        /// <summary>
        /// Apply quality level settings.
        /// </summary>
        public void ApplyQualityLevel(int qualityLevel)
        {
            if (_currentQualityLevel == qualityLevel) return;

            _currentQualityLevel = qualityLevel;
            QualitySettings.SetQualityLevel(qualityLevel, true);

            // Set URP asset
            if (qualityLevel == 0 && urpLite != null)
            {
                QualitySettings.renderPipeline = urpLite;
            }
            else if (qualityLevel == 1 && urpStandard != null)
            {
                QualitySettings.renderPipeline = urpStandard;
            }

            // Set target frame rate
            Application.targetFrameRate = qualityLevel == 0 ? liteTargetFrameRate : standardTargetFrameRate;

            // Set max NavMeshAgents
            MaxNavMeshAgents = qualityLevel == 0 ? liteMaxNavMeshAgents : standardMaxNavMeshAgents;

            // Set zone streaming radius
            ZoneStreamingRadius = qualityLevel == 0 ? liteZoneRadius : standardZoneRadius;

            // Toggle shadows
            bool shadowsEnabled = qualityLevel >= 1;
            QualitySettings.shadows = shadowsEnabled ? ShadowQuality.All : ShadowQuality.Disable;

            // Toggle reflection probes
            bool reflectionProbesEnabled = qualityLevel >= 1;
            // Reflection probes are controlled by URP asset settings

            // Toggle post-processing
            TogglePostProcessing(qualityLevel >= 1);

            // Toggle particles
            ToggleParticles(qualityLevel >= 1);

            Debug.Log($"QualityManager: Applied quality level {qualityLevel} " +
                      $"(FPS: {Application.targetFrameRate}, MaxAgents: {MaxNavMeshAgents}, " +
                      $"ZoneRadius: {ZoneStreamingRadius}, Shadows: {shadowsEnabled})");
        }

        /// <summary>
        /// Toggle post-processing effects based on quality level.
        /// </summary>
        private void TogglePostProcessing(bool enabled)
        {
            // Find all volume components and toggle them
            var volumes = FindObjectsByType<UnityEngine.Rendering.Volume>(FindObjectsSortMode.None);
            foreach (var volume in volumes)
            {
                volume.enabled = enabled;
            }
        }

        /// <summary>
        /// Toggle particle systems based on quality level.
        /// </summary>
        private void ToggleParticles(bool enabled)
        {
            // Find weather particle systems and toggle them
            var weatherParticles = GameObject.FindGameObjectsWithTag("WeatherParticles");
            foreach (var particle in weatherParticles)
            {
                var ps = particle.GetComponent<ParticleSystem>();
                if (ps != null)
                {
                    if (enabled)
                        ps.Play();
                    else
                        ps.Stop();
                }
            }
        }

        /// <summary>
        /// Get the current quality level.
        /// </summary>
        public int GetCurrentQualityLevel()
        {
            return _currentQualityLevel;
        }

        /// <summary>
        /// Check if we're in Lite mode.
        /// </summary>
        public bool IsLiteMode()
        {
            return _currentQualityLevel == 0;
        }

        /// <summary>
        /// Check if we're in Standard mode.
        /// </summary>
        public bool IsStandardMode()
        {
            return _currentQualityLevel >= 1;
        }
    }
}
