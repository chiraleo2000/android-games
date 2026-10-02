// ---------------------------------------------------------------------------
// Dead City Escape - Singleton Base Class
// Generic MonoBehaviour singleton pattern for manager classes.
// ---------------------------------------------------------------------------
using UnityEngine;

namespace DeadCityEscape.Core
{
    /// <summary>
    /// Base class for persistent singleton MonoBehaviours.
    /// Survives scene loads and prevents duplicates.
    /// </summary>
    public abstract class Singleton<T> : MonoBehaviour where T : MonoBehaviour
    {
        private static T _instance;
        private static readonly object _lock = new object();
        private static bool _applicationIsQuitting;

        public static T Instance
        {
            get
            {
                if (_applicationIsQuitting)
                    return null;

                lock (_lock)
                {
                    if (_instance == null)
                    {
                        _instance = FindAnyObjectByType<T>();
                        if (_instance == null)
                        {
                            var go = new GameObject($"[{typeof(T).Name}]");
                            _instance = go.AddComponent<T>();
                            DontDestroyOnLoad(go);
                        }
                    }
                    return _instance;
                }
            }
        }

        protected virtual void Awake()
        {
            if (_instance != null && _instance != this)
            {
                Destroy(gameObject);
                return;
            }

            _instance = this as T;
            DontDestroyOnLoad(gameObject);
            OnInitialize();
        }

        protected virtual void OnDestroy()
        {
            if (_instance == this)
            {
                _applicationIsQuitting = true;
                _instance = null;
            }
        }

        /// <summary>
        /// Called once when the singleton is first created.
        /// Override instead of using Awake.
        /// </summary>
        protected virtual void OnInitialize() { }
    }
}
