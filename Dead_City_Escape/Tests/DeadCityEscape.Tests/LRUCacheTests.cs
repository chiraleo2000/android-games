// ---------------------------------------------------------------------------
// Dead City Escape - LRU Cache Tests
// Validates eviction, capacity, and retrieval behavior.
// ---------------------------------------------------------------------------
using NUnit.Framework;
using DeadCityEscape.Logic;

namespace DeadCityEscape.Tests
{
    [TestFixture]
    public class LRUCacheTests
    {
        [Test]
        public void Put_And_TryGet_ReturnsValue()
        {
            var cache = new LRUCache<int, string>(3);
            cache.Put(1, "one");

            bool found = cache.TryGet(1, out string? val);
            Assert.That(found, Is.True);
            Assert.That(val, Is.EqualTo("one"));
        }

        [Test]
        public void TryGet_MissingKey_ReturnsFalse()
        {
            var cache = new LRUCache<int, string>(3);
            bool found = cache.TryGet(99, out _);
            Assert.That(found, Is.False);
        }

        [Test]
        public void Evicts_LeastRecentlyUsed_WhenCapacityExceeded()
        {
            var cache = new LRUCache<int, string>(2);
            cache.Put(1, "a");
            cache.Put(2, "b");
            cache.Put(3, "c"); // should evict key 1

            Assert.That(cache.TryGet(1, out _), Is.False);
            Assert.That(cache.TryGet(2, out _), Is.True);
            Assert.That(cache.TryGet(3, out _), Is.True);
        }

        [Test]
        public void Access_Refreshes_LRUOrder()
        {
            var cache = new LRUCache<int, string>(2);
            cache.Put(1, "a");
            cache.Put(2, "b");

            // Access key 1 to refresh it
            cache.TryGet(1, out _);

            // Now key 2 is LRU, so it should be evicted
            cache.Put(3, "c");

            Assert.That(cache.TryGet(1, out _), Is.True);
            Assert.That(cache.TryGet(2, out _), Is.False);
            Assert.That(cache.TryGet(3, out _), Is.True);
        }

        [Test]
        public void Count_TracksCorrectly()
        {
            var cache = new LRUCache<int, string>(5);
            Assert.That(cache.Count, Is.EqualTo(0));

            cache.Put(1, "a");
            Assert.That(cache.Count, Is.EqualTo(1));

            cache.Put(2, "b");
            Assert.That(cache.Count, Is.EqualTo(2));

            cache.Remove(1);
            Assert.That(cache.Count, Is.EqualTo(1));
        }

        [Test]
        public void Capacity_IsReported()
        {
            var cache = new LRUCache<int, string>(10);
            Assert.That(cache.Capacity, Is.EqualTo(10));
        }

        [Test]
        public void EvictionCallback_IsCalled()
        {
            int evictedKey = -1;
            string? evictedValue = null;

            var cache = new LRUCache<int, string>(2, (k, v) =>
            {
                evictedKey = k;
                evictedValue = v;
            });

            cache.Put(1, "a");
            cache.Put(2, "b");
            cache.Put(3, "c"); // triggers eviction of key 1

            Assert.That(evictedKey, Is.EqualTo(1));
            Assert.That(evictedValue, Is.EqualTo("a"));
        }

        [Test]
        public void Put_SameKey_UpdatesValue()
        {
            var cache = new LRUCache<int, string>(3);
            cache.Put(1, "old");
            cache.Put(1, "new");

            cache.TryGet(1, out string? val);
            Assert.That(val, Is.EqualTo("new"));
            Assert.That(cache.Count, Is.EqualTo(1));
        }

        [Test]
        public void Remove_ExistingKey_ReturnsTrue()
        {
            var cache = new LRUCache<int, string>(3);
            cache.Put(1, "a");
            Assert.That(cache.Remove(1), Is.True);
            Assert.That(cache.TryGet(1, out _), Is.False);
        }

        [Test]
        public void Remove_NonexistentKey_ReturnsFalse()
        {
            var cache = new LRUCache<int, string>(3);
            Assert.That(cache.Remove(99), Is.False);
        }

        [Test]
        public void Clear_RemovesAll()
        {
            var cache = new LRUCache<int, string>(5);
            cache.Put(1, "a");
            cache.Put(2, "b");
            cache.Put(3, "c");

            cache.Clear();

            Assert.That(cache.Count, Is.EqualTo(0));
            Assert.That(cache.TryGet(1, out _), Is.False);
        }

        [Test]
        public void Clear_CallsEvictionForAll()
        {
            int evictionCount = 0;
            var cache = new LRUCache<int, string>(5, (k, v) => evictionCount++);
            cache.Put(1, "a");
            cache.Put(2, "b");
            cache.Put(3, "c");

            cache.Clear();

            Assert.That(evictionCount, Is.EqualTo(3));
        }

        [Test]
        public void StressTest_ManyInsertions()
        {
            var cache = new LRUCache<int, int>(100);

            for (int i = 0; i < 10000; i++)
                cache.Put(i, i * 2);

            // Only last 100 should remain
            Assert.That(cache.Count, Is.EqualTo(100));
            Assert.That(cache.TryGet(9999, out int val), Is.True);
            Assert.That(val, Is.EqualTo(19998));
            Assert.That(cache.TryGet(0, out _), Is.False);
        }
    }
}
