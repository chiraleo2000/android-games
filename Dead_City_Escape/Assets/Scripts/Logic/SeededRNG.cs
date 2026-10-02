// ---------------------------------------------------------------------------
// Dead City Escape - Seeded Random Number Generator
// Pure C# implementation (no Unity dependency) for deterministic world gen.
// Uses xoshiro256** algorithm for high-quality, fast random numbers.
// ---------------------------------------------------------------------------
using System;

namespace DeadCityEscape.Logic
{
    /// <summary>
    /// Deterministic seeded RNG using xoshiro256** algorithm.
    /// Produces identical sequences for identical seeds across all platforms.
    /// Used for procedural city generation, loot placement, and spawn tables.
    /// </summary>
    public sealed class SeededRNG
    {
        private ulong _s0;
        private ulong _s1;
        private ulong _s2;
        private ulong _s3;

        public int Seed { get; }

        public SeededRNG(int seed)
        {
            Seed = seed;
            InitializeState((ulong)seed);
        }

        public SeededRNG(string seedString)
        {
            Seed = ComputeHash(seedString);
            InitializeState((ulong)Seed);
        }

        private void InitializeState(ulong seed)
        {
            // SplitMix64 to expand single seed into full state
            _s0 = SplitMix64(ref seed);
            _s1 = SplitMix64(ref seed);
            _s2 = SplitMix64(ref seed);
            _s3 = SplitMix64(ref seed);
        }

        private static ulong SplitMix64(ref ulong state)
        {
            ulong z = (state += 0x9E3779B97F4A7C15UL);
            z = (z ^ (z >> 30)) * 0xBF58476D1CE4E5B9UL;
            z = (z ^ (z >> 27)) * 0x94D049BB133111EBUL;
            return z ^ (z >> 31);
        }

        private static ulong RotateLeft(ulong x, int k)
        {
            return (x << k) | (x >> (64 - k));
        }

        /// <summary>
        /// Returns the next raw 64-bit unsigned integer.
        /// </summary>
        public ulong NextUInt64()
        {
            ulong result = RotateLeft(_s1 * 5, 7) * 9;
            ulong t = _s1 << 17;

            _s2 ^= _s0;
            _s3 ^= _s1;
            _s1 ^= _s2;
            _s0 ^= _s3;

            _s2 ^= t;
            _s3 = RotateLeft(_s3, 45);

            return result;
        }

        /// <summary>
        /// Returns a random integer in [0, max) range.
        /// </summary>
        public int Next(int max)
        {
            if (max <= 0) throw new ArgumentOutOfRangeException(nameof(max));
            return (int)(NextUInt64() % (ulong)max);
        }

        /// <summary>
        /// Returns a random integer in [min, max) range.
        /// </summary>
        public int Next(int min, int max)
        {
            if (min >= max) throw new ArgumentOutOfRangeException(nameof(min));
            return min + Next(max - min);
        }

        /// <summary>
        /// Alias for Next(int min, int max). Returns a random int in [min, max).
        /// </summary>
        public int NextInt(int min, int max) => Next(min, max);

        /// <summary>
        /// Alias for Next(int max). Returns a random int in [0, max).
        /// </summary>
        public int NextInt(int max) => Next(max);

        /// <summary>
        /// Returns a random float in [0.0, 1.0) range.
        /// </summary>
        public float NextFloat()
        {
            return (float)(NextUInt64() >> 40) / (1 << 24);
        }

        /// <summary>
        /// Returns a random float in [min, max) range.
        /// </summary>
        public float NextFloat(float min, float max)
        {
            return min + NextFloat() * (max - min);
        }

        /// <summary>
        /// Returns true with the given probability [0.0 - 1.0].
        /// </summary>
        public bool NextBool(float probability = 0.5f)
        {
            return NextFloat() < probability;
        }

        /// <summary>
        /// Selects a random element from the given array.
        /// </summary>
        public T Choose<T>(T[] items)
        {
            if (items == null || items.Length == 0)
                throw new ArgumentException("Items array must not be empty.", nameof(items));
            return items[Next(items.Length)];
        }

        /// <summary>
        /// Selects a random index based on weighted probabilities.
        /// Weights do not need to sum to 1.0.
        /// </summary>
        public int WeightedChoice(float[] weights)
        {
            if (weights == null || weights.Length == 0)
                throw new ArgumentException("Weights array must not be empty.", nameof(weights));

            float total = 0f;
            for (int i = 0; i < weights.Length; i++)
                total += weights[i];

            float roll = NextFloat() * total;
            float cumulative = 0f;

            for (int i = 0; i < weights.Length; i++)
            {
                cumulative += weights[i];
                if (roll < cumulative)
                    return i;
            }

            return weights.Length - 1;
        }

        /// <summary>
        /// Fisher-Yates shuffle of the given array in-place.
        /// </summary>
        public void Shuffle<T>(T[] array)
        {
            for (int i = array.Length - 1; i > 0; i--)
            {
                int j = Next(i + 1);
                (array[i], array[j]) = (array[j], array[i]);
            }
        }

        /// <summary>
        /// Generates a 2D Perlin-like noise value from coordinates.
        /// Uses value noise with smoothstep interpolation.
        /// </summary>
        public float Noise2D(float x, float y)
        {
            int ix = (int)Math.Floor(x);
            int iy = (int)Math.Floor(y);
            float fx = x - ix;
            float fy = y - iy;

            float sx = fx * fx * (3f - 2f * fx);
            float sy = fy * fy * (3f - 2f * fy);

            float n00 = HashPoint(ix, iy);
            float n10 = HashPoint(ix + 1, iy);
            float n01 = HashPoint(ix, iy + 1);
            float n11 = HashPoint(ix + 1, iy + 1);

            float nx0 = n00 + sx * (n10 - n00);
            float nx1 = n01 + sx * (n11 - n01);

            return nx0 + sy * (nx1 - nx0);
        }

        private float HashPoint(int x, int y)
        {
            int hash = Seed;
            hash ^= x * 374761393;
            hash ^= y * 668265263;
            hash = (hash ^ (hash >> 13)) * 1274126177;
            hash = hash ^ (hash >> 16);
            return (hash & 0x7FFFFFFF) / (float)int.MaxValue;
        }

        private static int ComputeHash(string text)
        {
            unchecked
            {
                int hash = 5381;
                foreach (char c in text)
                    hash = ((hash << 5) + hash) + c;
                return hash;
            }
        }

        /// <summary>
        /// Creates a forked RNG with a derived seed for sub-generation (e.g., per-zone).
        /// </summary>
        public SeededRNG Fork(int modifier)
        {
            unchecked
            {
                return new SeededRNG((int)(Seed ^ (modifier * 2654435761L)));
            }
        }
    }
}
