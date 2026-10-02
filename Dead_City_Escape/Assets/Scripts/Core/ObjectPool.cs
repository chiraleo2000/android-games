// ---------------------------------------------------------------------------
// Dead City Escape - Object Pool
// High-performance generic object pooling for zombies, projectiles, pickups.
// Reduces GC pressure on mobile devices.
// ---------------------------------------------------------------------------
using System;
using System.Collections.Generic;
using UnityEngine;

namespace DeadCityEscape.Core
{
    /// <summary>
    /// Generic object pool for GameObjects.
    /// Pre-instantiates and recycles objects to avoid runtime allocation.
    /// </summary>
    public class ObjectPool : MonoBehaviour
    {
        [SerializeField] private GameObject _prefab;
        [SerializeField] private int _initialSize = 20;
        [SerializeField] private int _maxSize = 100;
        [SerializeField] private bool _autoExpand = true;

        private readonly Queue<GameObject> _available = new Queue<GameObject>();
        private readonly HashSet<GameObject> _active = new HashSet<GameObject>();
        private Transform _poolRoot;

        public int ActiveCount => _active.Count;
        public int AvailableCount => _available.Count;
        public int TotalCount => _active.Count + _available.Count;

        private void Awake()
        {
            if (_prefab != null)
            {
                _poolRoot = new GameObject($"Pool_{_prefab.name}").transform;
                _poolRoot.SetParent(transform);
                WarmUp(_initialSize);
            }
        }

        /// <summary>
        /// Initialize the pool with a prefab programmatically.
        /// Call this before using the pool if not set via inspector.
        /// </summary>
        public void Initialize(GameObject prefab, int initialSize, int maxSize = 100, bool autoExpand = true)
        {
            _prefab = prefab;
            _initialSize = initialSize;
            _maxSize = maxSize;
            _autoExpand = autoExpand;
            
            if (_poolRoot == null)
            {
                _poolRoot = new GameObject($"Pool_{_prefab?.name ?? "Unknown"}").transform;
                _poolRoot.SetParent(transform);
            }
            
            WarmUp(_initialSize);
        }

        /// <summary>
        /// Pre-instantiates objects to avoid hitches during gameplay.
        /// </summary>
        public void WarmUp(int count)
        {
            for (int i = 0; i < count && TotalCount < _maxSize; i++)
            {
                var obj = CreateNewObject();
                obj.SetActive(false);
                _available.Enqueue(obj);
            }
        }

        /// <summary>
        /// Gets an object from the pool. Returns null if pool is exhausted.
        /// </summary>
        public GameObject Get(Vector3 position, Quaternion rotation)
        {
            GameObject obj;

            if (_available.Count > 0)
            {
                obj = _available.Dequeue();
            }
            else if (_autoExpand && TotalCount < _maxSize)
            {
                obj = CreateNewObject();
            }
            else
            {
                Debug.LogWarning($"ObjectPool: Pool exhausted for {_prefab.name}");
                return null;
            }

            obj.transform.SetPositionAndRotation(position, rotation);
            obj.SetActive(true);
            _active.Add(obj);
            return obj;
        }

        /// <summary>
        /// Returns an object to the pool for reuse.
        /// </summary>
        public void Return(GameObject obj)
        {
            if (obj == null || !_active.Contains(obj)) return;

            obj.SetActive(false);
            obj.transform.SetParent(_poolRoot);
            _active.Remove(obj);
            _available.Enqueue(obj);
        }

        /// <summary>
        /// Returns all active objects to the pool.
        /// </summary>
        public void ReturnAll()
        {
            var activeList = new List<GameObject>(_active);
            foreach (var obj in activeList)
                Return(obj);
        }

        private GameObject CreateNewObject()
        {
            var obj = Instantiate(_prefab, _poolRoot);
            obj.name = $"{_prefab.name}_{TotalCount}";
            return obj;
        }

        private void OnDestroy()
        {
            ReturnAll();
            while (_available.Count > 0)
            {
                var obj = _available.Dequeue();
                if (obj != null) Destroy(obj);
            }
        }
    }
}
