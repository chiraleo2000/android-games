// ---------------------------------------------------------------------------
// Dead City Escape - Seeded RNG Property-Based Tests
// Validates correctness properties with randomized inputs (500 iterations).
// ---------------------------------------------------------------------------
using NUnit.Framework;
using DeadCityEscape.Logic;

namespace DeadCityEscape.Tests
{
    [TestFixture]
    public class SeededRNGPropertyTests
    {
        private const int Iterations = 500;
        private readonly Random _rand = new(42);

        private int RandomSeed() => _rand.Next(int.MinValue, int.MaxValue);

        // Property 1: SeededRNG Determinism
        [Test]
        [Category("Property:1")]
        public void Property1_SeededRNG_Determinism()
        {
            for (int iter = 0; iter < Iterations; iter++)
            {
                int seed = RandomSeed();
                var rng1 = new SeededRNG(seed);
                var rng2 = new SeededRNG(seed);

                for (int i = 0; i < 50; i++)
                    Assert.That(rng1.Next(0, 10000), Is.EqualTo(rng2.Next(0, 10000)),
                        $"Seed {seed}, iteration {i}: NextInt mismatch");

                rng1 = new SeededRNG(seed);
                rng2 = new SeededRNG(seed);

                for (int i = 0; i < 50; i++)
                    Assert.That(rng1.NextFloat(), Is.EqualTo(rng2.NextFloat()).Within(0.0001f),
                        $"Seed {seed}, iteration {i}: NextFloat mismatch");
            }
        }

        // Property 4: SeededRNG Fork Independence
        [Test]
        [Category("Property:4")]
        public void Property4_SeededRNG_ForkIndependence()
        {
            for (int iter = 0; iter < Iterations; iter++)
            {
                int seed = RandomSeed();

                var parent = new SeededRNG(seed);
                var child = parent.Fork();

                // Parent's next value should be deterministic regardless of child consumption
                var parent2 = new SeededRNG(seed);
                var child2 = parent2.Fork();

                // Both parents should produce identical sequences after fork
                for (int i = 0; i < 20; i++)
                    Assert.That(parent.Next(0, 10000), Is.EqualTo(parent2.Next(0, 10000)),
                        $"Seed {seed}: parent sequences diverged after fork");

                // Both children should produce identical sequences
                for (int i = 0; i < 20; i++)
                    Assert.That(child.Next(0, 10000), Is.EqualTo(child2.Next(0, 10000)),
                        $"Seed {seed}: child sequences diverged");

                // Parent and child sequences must differ
                var parent3 = new SeededRNG(seed);
                var child3 = parent3.Fork();
                bool foundDifference = false;
                for (int i = 0; i < 10; i++)
                {
                    if (parent3.Next(0, 10000) != child3.Next(0, 10000))
                    {
                        foundDifference = true;
                        break;
                    }
                }
                Assert.That(foundDifference, Is.True,
                    $"Seed {seed}: parent and child produced identical sequences");
            }
        }

        // Property 28: WeightedChoice Index Bounds
        [Test]
        [Category("Property:28")]
        public void Property28_WeightedChoice_IndexBounds()
        {
            for (int iter = 0; iter < Iterations; iter++)
            {
                int seed = RandomSeed();
                int len = _rand.Next(1, 11);
                var weights = new float[len];
                bool hasPositive = false;
                for (int i = 0; i < len; i++)
                {
                    weights[i] = _rand.Next(0, 101);
                    if (weights[i] > 0) hasPositive = true;
                }
                if (!hasPositive) weights[0] = 1f;

                var rng = new SeededRNG(seed);
                for (int i = 0; i < 100; i++)
                {
                    int idx = rng.WeightedChoice(weights);
                    Assert.That(idx, Is.GreaterThanOrEqualTo(0).And.LessThan(weights.Length),
                        $"Seed {seed}: WeightedChoice returned {idx} for array of length {weights.Length}");
                }
            }
        }

        // Property 29: Shuffle Produces a Permutation
        [Test]
        [Category("Property:29")]
        public void Property29_Shuffle_ProducesPermutation()
        {
            for (int iter = 0; iter < Iterations; iter++)
            {
                int seed = RandomSeed();
                int len = _rand.Next(1, 21);
                var original = new int[len];
                for (int i = 0; i < len; i++)
                    original[i] = _rand.Next(0, 101);

                var array = (int[])original.Clone();
                var rng = new SeededRNG(seed);
                rng.Shuffle(array);

                Assert.That(array.Length, Is.EqualTo(original.Length),
                    $"Seed {seed}: Shuffle changed array length");

                var sortedOriginal = original.OrderBy(x => x).ToArray();
                var sortedShuffled = array.OrderBy(x => x).ToArray();
                Assert.That(sortedShuffled, Is.EqualTo(sortedOriginal),
                    $"Seed {seed}: Shuffle did not produce a permutation");
            }
        }
    }
}
