// ---------------------------------------------------------------------------
// Dead City Escape - Seeded RNG Tests
// Validates determinism, distribution, and utility functions.
// ---------------------------------------------------------------------------
using NUnit.Framework;
using DeadCityEscape.Logic;

namespace DeadCityEscape.Tests
{
    [TestFixture]
    public class SeededRNGTests
    {
        [Test]
        public void SameSeed_ProducesSameSequence()
        {
            var rng1 = new SeededRNG(42);
            var rng2 = new SeededRNG(42);

            for (int i = 0; i < 100; i++)
                Assert.That(rng1.NextUlong(), Is.EqualTo(rng2.NextUlong()));
        }

        [Test]
        public void DifferentSeeds_ProduceDifferentSequences()
        {
            var rng1 = new SeededRNG(1);
            var rng2 = new SeededRNG(2);

            bool allSame = true;
            for (int i = 0; i < 10; i++)
            {
                if (rng1.NextUlong() != rng2.NextUlong())
                {
                    allSame = false;
                    break;
                }
            }
            Assert.That(allSame, Is.False);
        }

        [Test]
        public void NextInt_WithinRange()
        {
            var rng = new SeededRNG(123);
            for (int i = 0; i < 1000; i++)
            {
                int val = rng.Next(10);
                Assert.That(val, Is.GreaterThanOrEqualTo(0));
                Assert.That(val, Is.LessThan(10));
            }
        }

        [Test]
        public void NextInt_MinMax_WithinRange()
        {
            var rng = new SeededRNG(456);
            for (int i = 0; i < 1000; i++)
            {
                int val = rng.Next(5, 15);
                Assert.That(val, Is.GreaterThanOrEqualTo(5));
                Assert.That(val, Is.LessThan(15));
            }
        }

        [Test]
        public void NextFloat_WithinUnitRange()
        {
            var rng = new SeededRNG(789);
            for (int i = 0; i < 1000; i++)
            {
                float val = rng.NextFloat();
                Assert.That(val, Is.GreaterThanOrEqualTo(0f));
                Assert.That(val, Is.LessThan(1f));
            }
        }

        [Test]
        public void NextFloat_MinMax_WithinRange()
        {
            var rng = new SeededRNG(101);
            for (int i = 0; i < 1000; i++)
            {
                float val = rng.NextFloat(-5f, 5f);
                Assert.That(val, Is.GreaterThanOrEqualTo(-5f));
                Assert.That(val, Is.LessThan(5f));
            }
        }

        [Test]
        public void Fork_ProducesIndependentStream()
        {
            var parent = new SeededRNG(42);
            var child = parent.Fork();

            // Parent and child should produce different sequences
            bool allSame = true;
            for (int i = 0; i < 10; i++)
            {
                if (parent.NextUlong() != child.NextUlong())
                {
                    allSame = false;
                    break;
                }
            }
            Assert.That(allSame, Is.False);
        }

        [Test]
        public void Fork_IsDeterministic()
        {
            var parent1 = new SeededRNG(99);
            var parent2 = new SeededRNG(99);

            var child1 = parent1.Fork();
            var child2 = parent2.Fork();

            for (int i = 0; i < 50; i++)
                Assert.That(child1.NextUlong(), Is.EqualTo(child2.NextUlong()));
        }

        [Test]
        public void Noise2D_IsDeterministic()
        {
            var rng1 = new SeededRNG(55);
            var rng2 = new SeededRNG(55);

            for (int i = 0; i < 20; i++)
            {
                float x = i * 0.5f;
                float y = i * 0.3f;
                Assert.That(rng1.Noise2D(x, y), Is.EqualTo(rng2.Noise2D(x, y)));
            }
        }

        [Test]
        public void Noise2D_ValuesInRange()
        {
            var rng = new SeededRNG(77);
            for (int i = 0; i < 200; i++)
            {
                float val = rng.Noise2D(i * 0.1f, i * 0.2f);
                Assert.That(val, Is.GreaterThanOrEqualTo(-1f));
                Assert.That(val, Is.LessThanOrEqualTo(1f));
            }
        }

        [Test]
        public void WeightedChoice_RespectsWeights()
        {
            var rng = new SeededRNG(33);
            float[] weights = { 0f, 0f, 1f }; // Only index 2 has weight

            for (int i = 0; i < 100; i++)
                Assert.That(rng.WeightedChoice(weights), Is.EqualTo(2));
        }

        [Test]
        public void WeightedChoice_DistributionRoughlyCorrect()
        {
            var rng = new SeededRNG(44);
            float[] weights = { 1f, 3f }; // 25% / 75%
            int[] counts = new int[2];

            for (int i = 0; i < 10000; i++)
                counts[rng.WeightedChoice(weights)]++;

            // Allow 5% tolerance
            float ratio = counts[0] / (float)(counts[0] + counts[1]);
            Assert.That(ratio, Is.InRange(0.20f, 0.30f));
        }

        [Test]
        public void Shuffle_PreservesElements()
        {
            var rng = new SeededRNG(88);
            int[] arr = { 1, 2, 3, 4, 5 };
            rng.Shuffle(arr);

            // All elements still present
            Array.Sort(arr);
            Assert.That(arr, Is.EqualTo(new[] { 1, 2, 3, 4, 5 }));
        }

        [Test]
        public void Shuffle_IsDeterministic()
        {
            int[] arr1 = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
            int[] arr2 = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

            new SeededRNG(77).Shuffle(arr1);
            new SeededRNG(77).Shuffle(arr2);

            Assert.That(arr1, Is.EqualTo(arr2));
        }

        [Test]
        public void NextZero_ReturnsZero()
        {
            var rng = new SeededRNG(1);
            Assert.That(rng.Next(0), Is.EqualTo(0));
        }

        [Test]
        public void NextDouble_WithinUnitRange()
        {
            var rng = new SeededRNG(999);
            for (int i = 0; i < 100; i++)
            {
                double val = rng.NextDouble();
                Assert.That(val, Is.GreaterThanOrEqualTo(0.0));
                Assert.That(val, Is.LessThan(1.0));
            }
        }
    }
}
