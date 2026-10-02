using UnityEngine;
using System.Collections.Generic;

namespace InventorsWorkshop.Core
{
    /// <summary>
    /// Manages all audio in the game - music and sound effects
    /// </summary>
    [RequireComponent(typeof(AudioSource))]
    public class AudioManager : MonoBehaviour
    {
        [Header("Audio Sources")]
        [SerializeField] private AudioSource musicSource;
        [SerializeField] private AudioSource sfxSource;

        [Header("Music Clips")]
        [SerializeField] private AudioClip mainMenuMusic;
        [SerializeField] private AudioClip gameplayMusic;

        [Header("SFX Clips")]
        [SerializeField] private AudioClip buttonClickSFX;
        [SerializeField] private AudioClip componentPlaceSFX;
        [SerializeField] private AudioClip gearRotateSFX;
        [SerializeField] private AudioClip motorStartSFX;
        [SerializeField] private AudioClip successSFX;
        [SerializeField] private AudioClip errorSFX;

        private Dictionary<string, AudioClip> sfxLibrary;
        private float musicVolume = 0.7f;
        private float sfxVolume = 0.8f;

        private void Awake()
        {
            InitializeAudioSources();
            InitializeSFXLibrary();
        }

        private void InitializeAudioSources()
        {
            if (musicSource == null)
            {
                musicSource = gameObject.AddComponent<AudioSource>();
                musicSource.loop = true;
                musicSource.playOnAwake = false;
            }

            if (sfxSource == null)
            {
                sfxSource = gameObject.AddComponent<AudioSource>();
                sfxSource.loop = false;
                sfxSource.playOnAwake = false;
            }
        }

        private void InitializeSFXLibrary()
        {
            sfxLibrary = new Dictionary<string, AudioClip>
            {
                { "buttonClick", buttonClickSFX },
                { "componentPlace", componentPlaceSFX },
                { "gearRotate", gearRotateSFX },
                { "motorStart", motorStartSFX },
                { "success", successSFX },
                { "error", errorSFX }
            };
        }

        #region Music Control
        public void PlayMusic(string musicName)
        {
            AudioClip clip = GetMusicClip(musicName);
            if (clip != null)
            {
                musicSource.clip = clip;
                musicSource.volume = musicVolume;
                musicSource.Play();
            }
        }

        public void StopMusic()
        {
            musicSource.Stop();
        }

        public void PauseMusic()
        {
            musicSource.Pause();
        }

        public void ResumeMusic()
        {
            musicSource.UnPause();
        }

        public void SetMusicVolume(float volume)
        {
            musicVolume = Mathf.Clamp01(volume);
            musicSource.volume = musicVolume;
        }

        private AudioClip GetMusicClip(string musicName)
        {
            switch (musicName.ToLower())
            {
                case "mainmenu":
                    return mainMenuMusic;
                case "gameplay":
                    return gameplayMusic;
                default:
                    Debug.LogWarning($"Music clip not found: {musicName}");
                    return null;
            }
        }
        #endregion

        #region SFX Control
        public void PlaySFX(string sfxName)
        {
            if (sfxLibrary.TryGetValue(sfxName, out AudioClip clip))
            {
                if (clip != null)
                {
                    sfxSource.PlayOneShot(clip, sfxVolume);
                }
            }
            else
            {
                Debug.LogWarning($"SFX not found: {sfxName}");
            }
        }

        public void PlaySFX(AudioClip clip)
        {
            if (clip != null)
            {
                sfxSource.PlayOneShot(clip, sfxVolume);
            }
        }

        public void PlaySFX(AudioClip clip, float volumeScale)
        {
            if (clip != null)
            {
                sfxSource.PlayOneShot(clip, sfxVolume * volumeScale);
            }
        }

        public void SetSFXVolume(float volume)
        {
            sfxVolume = Mathf.Clamp01(volume);
        }
        #endregion

        #region Haptic Feedback
        public void PlayHaptic(HapticType type)
        {
            #if UNITY_ANDROID || UNITY_IOS
            switch (type)
            {
                case HapticType.Light:
                    Handheld.Vibrate();
                    break;
                case HapticType.Medium:
                    Handheld.Vibrate();
                    break;
                case HapticType.Heavy:
                    Handheld.Vibrate();
                    break;
            }
            #endif
        }
        #endregion

        #region Utility
        public float GetMusicVolume() => musicVolume;
        public float GetSFXVolume() => sfxVolume;
        public bool IsMusicPlaying() => musicSource.isPlaying;
        #endregion
    }

    public enum HapticType
    {
        Light,
        Medium,
        Heavy
    }
}
