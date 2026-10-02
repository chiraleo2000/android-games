// ---------------------------------------------------------------------------
// Dead City Escape - LRU Cache Property-Based Tests
// Validates correctness properties with randomized inputs (500 iterations).
// ---------------------------------------------------------------------------
using NUnit.Framework;
using DeadCityEscape.Logic;

namespace DeadCityEscape.Tests
{
    [TestFixture]
    public class LRUCachePropertyTests
    {
        private const int Iterations = 500;
        private readonly Random _rand = new(42);

        // Property 7: LRUCache Capacity Invariant
        [Test]
        [Category("Property:7")]
        public void Property7_LRUCache_CapacityInvariant()
        {
            for (int iter = 0; iter < Iterations; iter++)
            {
                int capacity = _rand.Next(1, 21);
                int opCount = _rand.Next(1, 51);

                var cache = new LRUCache<int, string>(capacity);

                for (int i = 0; i < opCount; i++)
                {
                    int key = _rand.Next(0, 101);
                    cache.Put(key, $"value_{key}");
                    Assert.That(cache.Count, Is.LessThanOrEqualTo(capacity),
                        $"Capacity {capacity}: Count {cache.Count} exceeded after {i + 1} puts");
                }
            }
        }

        // Property 8: LRUCache Eviction Callback Correctness
        [Test]
        [Category("Property:8")]
        public void Property8_LRUCache_EvictionCallbackCorrectness()
        {
            for (int iter = 0; iter < Iterations; iter++)
            {
                int capacity = _rand.Next(2, 11);
                int evictionCount = 0;
                int? evictedKey = null;
                string? evictedValue = null;

                var cache = new LRUCache<int, string>(
                    capacity,
                    (k, v) =>
                    {
                        evictionCount++;
                        evictedKey = k;
                        evictedValue = v;
                    });

                // Fill cache to capacity
                for (int i = 0; i < capacity; i++)
                    cache.Put(i, $"value_{i}");

                Assert.That(evictionCount, Is.EqualTo(0),
                    $"Capacity {capacity}: eviction fired before full");

                // Add one more — should evict key 0 (LRU)
                cache.Put(capacity, $"value_{capacity}");

                Assert.That(evictionCount, Is.EqualTo(1),
                    $"Capacity {capacity}: expected exactly 1 eviction");
                Assert.That(evictedKey, Is.EqualTo(0),
                    $"Capacity {capacity}: expected key 0 evicted");
                Assert.That(evictedValue, Is.EqualTo("value_0"),
                    $"Capacity {capacity}: expected value_0 evicted");
            }
        }

        // Property 9: LRUCache Put-Then-Get Round-Trip
        [Test]
        [Category("Property:9")]
        public void Property9_LRUCache_PutThenGetRoundTrip()
        {
            for (int iter = 0; iter < Iterations; iter++)
            {
                int capacity = _rand.Next(5, 21);
                int key = _rand.Next(0, 101);
                var value = $"test_value_{key}";

                var cache = new LRUCache<int, string>(capacity);
                cache.Put(key, value);

                Assert.That(cache.TryGet(key, out var retrieved), Is.True,
                    $"Capacity {capacity}, key {key}: TryGet returned false");
                Assert.That(retrieved, Is.EqualTo(value),
                    $"Capacity {capacity}, key {key}: value mismatch");
            }
        }
    }
}
