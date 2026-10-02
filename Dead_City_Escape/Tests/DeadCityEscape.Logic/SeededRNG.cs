// ---------------------------------------------------------------------------
// Dead City Escape - Seeded RNG (Standalone .NET version)
// xoshiro256** PRNG for deterministic procedural generation.
// This is a standalone copy for .NET testing without Unity dependencies.
// ---------------------------------------------------------------------------
namespace DeadCityEscape.Logic
{
    /// <summary>
    /// Deterministic pseudo-random number generator using xoshiro256**.
    /// Every seed produces an identical reproducible sequence.
    /// </summary>
    public sealed class SeededRNG
    {
        private ulong _s0, _s1, _s2, _s3;

        public SeededRNG(int seed)
        {
            // SplitMix64 to initialize state from a single seed
            ulong z = (ulong)seed;
            _s0 = SplitMix(ref z);
            _s1 = SplitMix(ref z);
            _s2 = SplitMix(ref z);
            _s3 = SplitMix(ref z);
        }

        private SeededRNG(ulong s0, ulong s1, ulong s2, ulong s3)
        {
            _s0 = s0; _s1 = s1; _s2 = s2; _s3 = s3;
        }

        private static ulong SplitMix(ref ulong state)
        {
            ulong z = state += 0x9E3779B97F4A7C15UL;
            z = (z ^ (z >> 30)) * 0xBF58476D1CE4E5B9UL;
            z = (z ^ (z >> 27)) * 0x94D049BB133111EBUL;
            return z ^ (z >> 31);
        }

        private static ulong Rotl(ulong x, int k) => (x << k) | (x >> (64 - k));

        /// <summary>
        /// Next raw 64-bit value.
        /// </summary>
        public ulong NextUlong()
        {
            ulong result = Rotl(_s1 * 5, 7) * 9;
            ulong t = _s1 << 17;
            _s2 ^= _s0;
            _s3 ^= _s1;
            _s1 ^= _s2;
            _s0 ^= _s3;
            _s2 ^= t;
            _s3 = Rotl(_s3, 45);
            return result;
        }

        /// <summary>
        /// Returns int in [0, max).
        /// </summary>
        public int Next(int max)
        {
            if (max <= 0) return 0;
            return (int)(NextUlong() % (ulong)max);
        }

        /// <summary>
        /// Returns int in [min, max).
        /// </summary>
        public int Next(int min, int max)
        {
            if (max <= min) return min;
            return min + Next(max - min);
        }

        /// <summary>
        /// Returns int in [minInclusive, maxExclusive).
        /// </summary>
        public int NextInt(int minInclusive, int maxExclusive)
        {
            return Next(minInclusive, maxExclusive);
        }

        /// <summary>
        /// Returns float in [0, 1).
        /// </summary>
        public float NextFloat() => (NextUlong() >> 11) * (1.0f / (1UL << 53));

        /// <summary>
        /// Returns float in [min, max).
        /// </summary>
        public float NextFloat(float min, float max) => min + NextFloat() * (max - min);

        /// <summary>
        /// Returns double in [0, 1).
        /// </summary>
        public double NextDouble() => (NextUlong() >> 11) * (1.0 / (1UL << 53));

        /// <summary>
        /// Forks an independent child RNG with a derived state.
        /// </summary>
        public SeededRNG Fork()
        {
            return new SeededRNG(NextUlong(), NextUlong(), NextUlong(), NextUlong());
        }

        /// <summary>
        /// 2D coherent noise in [-1, 1]. Useful for terrain/texture generation.
        /// Uses value noise with smooth interpolation.
        /// </summary>
        public float Noise2D(float x, float y)
        {
            int ix = (int)Math.Floor(x);
            int iy = (int)Math.Floor(y);
            float fx = x - ix;
            float fy = y - iy;

            // Smooth step
            fx = fx * fx * (3 - 2 * fx);
            fy = fy * fy * (3 - 2 * fy);

            float n00 = HashFloat(ix, iy);
            float n10 = HashFloat(ix + 1, iy);
            float n01 = HashFloat(ix, iy + 1);
            float n11 = HashFloat(ix + 1, iy + 1);

            float nx0 = Lerp(n00, n10, fx);
            float nx1 = Lerp(n01, n11, fx);
            return Lerp(nx0, nx1, fy);
        }

        private static float HashFloat(int x, int y)
        {
            uint h = (uint)(x * 374761393 + y * 668265263);
            h = (h ^ (h >> 13)) * 1274126177;
            h ^= h >> 16;
            return (h & 0x7FFFFFFF) / (float)0x7FFFFFFF * 2f - 1f;
        }

        private static float Lerp(float a, float b, float t) => a + (b - a) * t;

        /// <summary>
        /// Picks a random index from weighted probabilities.
        /// </summary>
        public int WeightedChoice(float[] weights)
        {
            float total = 0;
            for (int i = 0; i < weights.Length; i++) total += weights[i];
            float r = NextFloat() * total;
            float acc = 0;
            for (int i = 0; i < weights.Length; i++)
            {
                acc += weights[i];
                if (r < acc) return i;
            }
            return weights.Length - 1;
        }

        /// <summary>
        /// Fisher-Yates shuffle in place.
        /// </summary>
        public void Shuffle<T>(T[] array)
        {
            for (int i = array.Length - 1; i > 0; i--)
            {
                int j = Next(i + 1);
                (array[i], array[j]) = (array[j], array[i]);
            }
        }
    }
}
