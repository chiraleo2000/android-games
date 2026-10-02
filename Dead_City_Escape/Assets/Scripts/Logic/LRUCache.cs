// ---------------------------------------------------------------------------
// Dead City Escape - Generic LRU Cache
// Used for zone streaming, generated mesh caching, and texture caching.
// Pure C# - no Unity dependency.
// ---------------------------------------------------------------------------
using System;
using System.Collections.Generic;

namespace DeadCityEscape.Logic
{
    /// <summary>
    /// Least Recently Used cache with configurable capacity.
    /// Evicts the oldest entry when capacity is exceeded.
    /// Thread-safe for single-producer/single-consumer scenarios.
    /// </summary>
    public sealed class LRUCache<TKey, TValue> where TKey : notnull
    {
        private readonly int _capacity;
        private readonly Dictionary<TKey, LinkedListNode<CacheEntry>> _map;
        private readonly LinkedList<CacheEntry> _order;
        private readonly Action<TKey, TValue> _onEvict;

        private struct CacheEntry
        {
            public TKey Key;
            public TValue Value;
        }

        public int Count => _map.Count;
        public int Capacity => _capacity;

        /// <param name="capacity">Maximum number of cached items.</param>
        /// <param name="onEvict">Optional callback when an entry is evicted.</param>
        public LRUCache(int capacity, Action<TKey, TValue> onEvict = null)
        {
            if (capacity <= 0) throw new ArgumentOutOfRangeException(nameof(capacity));
            _capacity = capacity;
            _map = new Dictionary<TKey, LinkedListNode<CacheEntry>>(capacity);
            _order = new LinkedList<CacheEntry>();
            _onEvict = onEvict;
        }

        /// <summary>
        /// Retrieves a cached value. Returns true if found and moves to front.
        /// </summary>
        public bool TryGet(TKey key, out TValue value)
        {
            if (_map.TryGetValue(key, out var node))
            {
                // Move to front (most recently used)
                _order.Remove(node);
                _order.AddFirst(node);
                value = node.Value.Value;
                return true;
            }

            value = default;
            return false;
        }

        /// <summary>
        /// Inserts or updates a cache entry. Evicts LRU if at capacity.
        /// </summary>
        public void Put(TKey key, TValue value)
        {
            if (_map.TryGetValue(key, out var existing))
            {
                // Update existing entry
                _order.Remove(existing);
                existing.Value = new CacheEntry { Key = key, Value = value };
                _order.AddFirst(existing);
                return;
            }

            // Evict if at capacity
            while (_map.Count >= _capacity)
            {
                var last = _order.Last;
                if (last == null) break;

                _order.RemoveLast();
                _map.Remove(last.Value.Key);
                _onEvict?.Invoke(last.Value.Key, last.Value.Value);
            }

            // Insert new entry at front
            var entry = new CacheEntry { Key = key, Value = value };
            var newNode = _order.AddFirst(entry);
            _map[key] = newNode;
        }

        /// <summary>
        /// Checks if a key exists without affecting LRU order.
        /// </summary>
        public bool ContainsKey(TKey key)
        {
            return _map.ContainsKey(key);
        }

        /// <summary>
        /// Removes a specific entry from the cache.
        /// </summary>
        public bool Remove(TKey key)
        {
            if (_map.TryGetValue(key, out var node))
            {
                _order.Remove(node);
                _map.Remove(key);
                _onEvict?.Invoke(node.Value.Key, node.Value.Value);
                return true;
            }
            return false;
        }

        /// <summary>
        /// Clears all entries, invoking eviction callback for each.
        /// </summary>
        public void Clear()
        {
            if (_onEvict != null)
            {
                foreach (var entry in _order)
                    _onEvict(entry.Key, entry.Value);
            }

            _map.Clear();
            _order.Clear();
        }

        /// <summary>
        /// Returns all cached keys in MRU-to-LRU order.
        /// </summary>
        public IEnumerable<TKey> GetKeys()
        {
            foreach (var entry in _order)
                yield return entry.Key;
        }
    }
}
