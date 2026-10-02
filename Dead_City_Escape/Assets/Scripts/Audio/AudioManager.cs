// ---------------------------------------------------------------------------
// Dead City Escape - Audio Manager
// Handles procedural audio generation (kkrieger-style), spatial audio,
// and adaptive music system.
// ---------------------------------------------------------------------------
using System;
using System.Collections.Generic;
using UnityEngine;

namespace DeadCityEscape.Audio
{
    /// <summary>
    /// Audio categories for volume control.
    /// </summary>
    public enum AudioCategory
    {
        Master,
        Music,
        SFX,
        Ambient,
        UI
    }

    /// <summary>
    /// Manages all audio in the game including procedural sound generation,
    /// spatial audio, and adaptive music. Follows kkrieger approach of
    /// generating sounds from parameters rather than loading wave files.
    /// </summary>
    public class AudioManager : DeadCityEscape.Core.Singleton<AudioManager>
    {
        [Header("Audio Sources")]
        [SerializeField] private AudioSource _musicSource;
        [SerializeField] private AudioSource _ambientSource;
        [SerializeField] private int _sfxPoolSize = 16;

        [Header("Volume")]
        [SerializeField] private float _masterVolume = 1.0f;
        [SerializeField] private float _musicVolume = 0.6f;
        [SerializeField] private float _sfxVolume = 0.8f;
        [SerializeField] private float _ambientVolume = 0.5f;

        private AudioSource[] _sfxPool;
        private int _sfxPoolIndex;
        private readonly Dictionary<string, AudioClip> _clipCache
            = new Dictionary<string, AudioClip>();

        protected override void OnInitialize()
        {
            // Create audio sources if not assigned
            if (_musicSource == null)
            {
                _musicSource = gameObject.AddComponent<AudioSource>();
                _musicSource.loop = true;
                _musicSource.playOnAwake = false;
            }

            if (_ambientSource == null)
            {
                _ambientSource = gameObject.AddComponent<AudioSource>();
                _ambientSource.loop = true;
                _ambientSource.playOnAwake = false;
            }

            // Create SFX pool
            _sfxPool = new AudioSource[_sfxPoolSize];
            for (int i = 0; i < _sfxPoolSize; i++)
            {
                _sfxPool[i] = gameObject.AddComponent<AudioSource>();
                _sfxPool[i].playOnAwake = false;
                _sfxPool[i].spatialBlend = 0f;
            }

            UpdateVolumes();
        }

        // -- Volume Control --

        public void SetVolume(AudioCategory category, float volume)
        {
            volume = Mathf.Clamp01(volume);
            switch (category)
            {
                case AudioCategory.Master: _masterVolume = volume; break;
                case AudioCategory.Music: _musicVolume = volume; break;
                case AudioCategory.SFX: _sfxVolume = volume; break;
                case AudioCategory.Ambient: _ambientVolume = volume; break;
            }
            UpdateVolumes();
        }

        private void UpdateVolumes()
        {
            if (_musicSource != null)
                _musicSource.volume = _masterVolume * _musicVolume;
            if (_ambientSource != null)
                _ambientSource.volume = _masterVolume * _ambientVolume;
        }

        // -- Procedural Sound Generation (kkrieger-style) --

        /// <summary>
        /// Generates a gunshot sound procedurally from parameters.
        /// </summary>
        public AudioClip GenerateGunshot(float attack = 0.005f, float decay = 0.15f,
            float noiseAmount = 0.8f, float pitchHz = 220f)
        {
            try
            {
                string key = $"gunshot_{attack}_{decay}_{noiseAmount}_{pitchHz}";
                if (_clipCache.TryGetValue(key, out var cached)) return cached;

                int sampleRate = 44100;
                int samples = (int)(sampleRate * (attack + decay));
                float[] data = new float[samples];

                for (int i = 0; i < samples; i++)
                {
                    float t = (float)i / sampleRate;
                    float envelope;

                    if (t < attack)
                        envelope = t / attack;
                    else
                        envelope = 1f - ((t - attack) / decay);

                    envelope = Mathf.Clamp01(envelope);

                    // Mix noise and tone
                    float noise = UnityEngine.Random.Range(-1f, 1f) * noiseAmount;
                    float tone = Mathf.Sin(2f * Mathf.PI * pitchHz * t) * (1f - noiseAmount);

                    data[i] = (noise + tone) * envelope * 0.5f;
                }

                var clip = AudioClip.Create(key, samples, 1, sampleRate, false);
                clip.SetData(data, 0);
                _clipCache[key] = clip;
                return clip;
            }
            catch (System.Exception e)
            {
                Debug.LogError($"AudioManager: Failed to generate gunshot audio: {e.Message}");
                return GetSilentClip();
            }
        }

        /// <summary>
        /// Generates an explosion sound procedurally.
        /// </summary>
        public AudioClip GenerateExplosion(float duration = 0.8f, float basePitch = 60f)
        {
            try
            {
                string key = $"explosion_{duration}_{basePitch}";
                if (_clipCache.TryGetValue(key, out var cached)) return cached;

                int sampleRate = 44100;
                int samples = (int)(sampleRate * duration);
                float[] data = new float[samples];

                for (int i = 0; i < samples; i++)
                {
                    float t = (float)i / sampleRate;
                    float envelope = Mathf.Exp(-3f * t / duration);

                    float noise = UnityEngine.Random.Range(-1f, 1f);
                    float lowRumble = Mathf.Sin(2f * Mathf.PI * basePitch * t);
                    float midCrackle = Mathf.Sin(2f * Mathf.PI * basePitch * 3f * t) * 0.3f;

                    data[i] = (noise * 0.4f + lowRumble * 0.4f + midCrackle * 0.2f)
                        * envelope * 0.6f;
                }

                var clip = AudioClip.Create(key, samples, 1, sampleRate, false);
                clip.SetData(data, 0);
                _clipCache[key] = clip;
                return clip;
            }
            catch (System.Exception e)
            {
                Debug.LogError($"AudioManager: Failed to generate explosion audio: {e.Message}");
                return GetSilentClip();
            }
        }

        /// <summary>
        /// Generates a zombie groan sound procedurally.
        /// </summary>
        public AudioClip GenerateZombieGroan(float duration = 1.2f,
            float basePitch = 80f, float vibrato = 5f)
        {
            try
            {
                string key = $"groan_{duration}_{basePitch}_{vibrato}";
                if (_clipCache.TryGetValue(key, out var cached)) return cached;

                int sampleRate = 44100;
                int samples = (int)(sampleRate * duration);
                float[] data = new float[samples];

                for (int i = 0; i < samples; i++)
                {
                    float t = (float)i / sampleRate;
                    float envelope = Mathf.Sin(Mathf.PI * t / duration);

                    float pitch = basePitch + Mathf.Sin(2f * Mathf.PI * vibrato * t) * 15f;
                    float voice = Mathf.Sin(2f * Mathf.PI * pitch * t) * 0.6f;
                    float breath = UnityEngine.Random.Range(-1f, 1f) * 0.15f;

                    data[i] = (voice + breath) * envelope * 0.4f;
                }

                var clip = AudioClip.Create(key, samples, 1, sampleRate, false);
                clip.SetData(data, 0);
                _clipCache[key] = clip;
                return clip;
            }
            catch (System.Exception e)
            {
                Debug.LogError($"AudioManager: Failed to generate zombie groan audio: {e.Message}");
                return GetSilentClip();
            }
        }

        /// <summary>
        /// Generates a footstep sound procedurally.
        /// </summary>
        public AudioClip GenerateFootstep(float pitch = 1.0f)
        {
            try
            {
                string key = $"footstep_{pitch}";
                if (_clipCache.TryGetValue(key, out var cached)) return cached;

                int sampleRate = 44100;
                int samples = (int)(sampleRate * 0.08f);
                float[] data = new float[samples];

                for (int i = 0; i < samples; i++)
                {
                    float t = (float)i / sampleRate;
                    float envelope = Mathf.Exp(-40f * t);
                    float noise = UnityEngine.Random.Range(-1f, 1f);
                    float thump = Mathf.Sin(2f * Mathf.PI * 80f * pitch * t);
                    data[i] = (noise * 0.3f + thump * 0.7f) * envelope * 0.3f;
                }

                var clip = AudioClip.Create(key, samples, 1, sampleRate, false);
                clip.SetData(data, 0);
                _clipCache[key] = clip;
                return clip;
            }
            catch (System.Exception e)
            {
                Debug.LogError($"AudioManager: Failed to generate footstep audio: {e.Message}");
                return GetSilentClip();
            }
        }

        /// <summary>
        /// Generates ambient wind/city drone procedurally.
        /// </summary>
        public AudioClip GenerateAmbientDrone(float duration = 10f)
        {
            try
            {
                string key = $"ambient_{duration}";
                if (_clipCache.TryGetValue(key, out var cached)) return cached;

                int sampleRate = 44100;
                int samples = (int)(sampleRate * duration);
                float[] data = new float[samples];

                for (int i = 0; i < samples; i++)
                {
                    float t = (float)i / sampleRate;
                    float wind = UnityEngine.Random.Range(-1f, 1f) * 0.1f;
                    float hum = Mathf.Sin(2f * Mathf.PI * 50f * t) * 0.05f;
                    float sweep = Mathf.Sin(2f * Mathf.PI * 0.1f * t) * 0.03f;
                    data[i] = (wind + hum + sweep) * 0.2f;
                }

                var clip = AudioClip.Create(key, samples, 1, sampleRate, false);
                clip.SetData(data, 0);
                _clipCache[key] = clip;
                return clip;
            }
            catch (System.Exception e)
            {
                Debug.LogError($"AudioManager: Failed to generate ambient drone audio: {e.Message}");
                return GetSilentClip();
            }
        }

        /// <summary>
        /// Returns a silent audio clip for fallback when generation fails.
        /// </summary>
        private AudioClip GetSilentClip()
        {
            if (_clipCache.TryGetValue("_silent", out var cached)) return cached;

            int sampleRate = 44100;
            int samples = sampleRate / 10; // 0.1 second of silence
            float[] data = new float[samples];
            
            var clip = AudioClip.Create("silent", samples, 1, sampleRate, false);
            clip.SetData(data, 0);
            _clipCache["_silent"] = clip;
            return clip;
        }

        // -- Playback --

        /// <summary>
        /// Plays a one-shot SFX using the pool.
        /// </summary>
        public void PlaySFX(AudioClip clip, float volumeScale = 1f)
        {
            if (clip == null) return;
            var source = _sfxPool[_sfxPoolIndex % _sfxPoolSize];
            source.clip = clip;
            source.volume = _masterVolume * _sfxVolume * volumeScale;
            source.spatialBlend = 0f;
            source.Play();
            _sfxPoolIndex++;
        }

        /// <summary>
        /// Plays a positional 3D SFX at a world position.
        /// </summary>
        public void PlaySFXAtPosition(AudioClip clip, Vector3 position,
            float volumeScale = 1f, float maxDistance = 30f)
        {
            if (clip == null) return;
            var source = _sfxPool[_sfxPoolIndex % _sfxPoolSize];
            source.transform.position = position;
            source.clip = clip;
            source.volume = _masterVolume * _sfxVolume * volumeScale;
            source.spatialBlend = 1f;
            source.maxDistance = maxDistance;
            source.rolloffMode = AudioRolloffMode.Linear;
            source.Play();
            _sfxPoolIndex++;
        }

        /// <summary>
        /// Sets the music track. Fades if already playing.
        /// </summary>
        public void PlayMusic(AudioClip clip)
        {
            if (_musicSource == null) return;
            _musicSource.clip = clip;
            _musicSource.volume = _masterVolume * _musicVolume;
            _musicSource.Play();
        }

        /// <summary>
        /// Sets the ambient audio loop.
        /// </summary>
        public void PlayAmbient(AudioClip clip)
        {
            if (_ambientSource == null) return;
            _ambientSource.clip = clip;
            _ambientSource.volume = _masterVolume * _ambientVolume;
            _ambientSource.Play();
        }

        /// <summary>
        /// Stops all audio playback.
        /// </summary>
        public void StopAll()
        {
            _musicSource?.Stop();
            _ambientSource?.Stop();
            foreach (var s in _sfxPool)
                s?.Stop();
        }

        /// <summary>
        /// Clears the procedural audio cache to free memory.
        /// </summary>
        public void ClearCache()
        {
            foreach (var clip in _clipCache.Values)
            {
                if (clip != null) Destroy(clip);
            }
            _clipCache.Clear();
        }
    }
}
