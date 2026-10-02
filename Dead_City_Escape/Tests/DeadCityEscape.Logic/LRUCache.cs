// ---------------------------------------------------------------------------
// Dead City Escape - LRU Cache (Standalone .NET version)
// Generic Least-Recently-Used cache for .NET testing.
// ---------------------------------------------------------------------------
namespace DeadCityEscape.Logic
{
    /// <summary>
    /// Generic LRU cache with configurable capacity and eviction callback.
    /// </summary>
    public sealed class LRUCache<TKey, TValue> where TKey : notnull
    {
        private readonly int _capacity;
        private readonly Dictionary<TKey, LinkedListNode<(TKey Key, TValue Value)>> _map;
        private readonly LinkedList<(TKey Key, TValue Value)> _order;
        private readonly Action<TKey, TValue>? _onEvict;

        public int Count => _map.Count;
        public int Capacity => _capacity;

        public LRUCache(int capacity, Action<TKey, TValue>? onEvict = null)
        {
            _capacity = capacity;
            _onEvict = onEvict;
            _map = new Dictionary<TKey, LinkedListNode<(TKey, TValue)>>(capacity);
            _order = new LinkedList<(TKey, TValue)>();
        }

        public bool TryGet(TKey key, out TValue value)
        {
            if (_map.TryGetValue(key, out var node))
            {
                _order.Remove(node);
                _order.AddFirst(node);
                value = node.Value.Value;
                return true;
            }
            value = default!;
            return false;
        }

        public void Put(TKey key, TValue value)
        {
            if (_map.TryGetValue(key, out var existing))
            {
                _order.Remove(existing);
                existing.Value = (key, value);
                _order.AddFirst(existing);
                return;
            }

            if (_map.Count >= _capacity)
                EvictLRU();

            var node = new LinkedListNode<(TKey, TValue)>((key, value));
            _order.AddFirst(node);
            _map[key] = node;
        }

        public bool ContainsKey(TKey key)
        {
            return _map.ContainsKey(key);
        }

        public bool Remove(TKey key)
        {
            if (_map.TryGetValue(key, out var node))
            {
                _order.Remove(node);
                _map.Remove(key);
                return true;
            }
            return false;
        }

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

        private void EvictLRU()
        {
            var last = _order.Last;
            if (last == null) return;
            _order.RemoveLast();
            _map.Remove(last.Value.Key);
            _onEvict?.Invoke(last.Value.Key, last.Value.Value);
        }
    }
}
