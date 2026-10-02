// ---------------------------------------------------------------------------
// Dead City Escape - Damage Calculator Property-Based Tests
// Validates correctness properties with randomized inputs (500 iterations).
// ---------------------------------------------------------------------------
using NUnit.Framework;
using DeadCityEscape.Logic;

namespace DeadCityEscape.Tests
{
    [TestFixture]
    public class DamageCalculatorPropertyTests
    {
        private const int Iterations = 500;
        private readonly Random _rand = new(42);

        // Property 15: Armor Never Increases Damage
        [Test]
        [Category("Property:15")]
        public void Property15_DamagePipeline_ArmorNeverIncreasesDamage()
        {
            for (int iter = 0; iter < Iterations; iter++)
            {
                float baseDamage = _rand.Next(1, 101);
                float multiplier = _rand.Next(1, 11) / 10f;
                float armor = _rand.Next(0, 81) / 100f;

                var input = new DamageInput
                {
                    BaseDamage = baseDamage,
                    DamageMultiplier = multiplier,
                    IsHeadshot = false,
                    IsExplosive = false,
                    ArmorRating = armor,
                    IsMelee = false,
                    HasSuppressor = false
                };

                var result = DamageCalculator.Calculate(input);
                float maxDamage = baseDamage * multiplier;

                Assert.That(result.FinalDamage, Is.LessThanOrEqualTo(maxDamage + 0.01f),
                    $"BaseDamage={baseDamage}, Multiplier={multiplier}, Armor={armor}: damage exceeded max");

                // Headshot should be 2.5x the non-headshot result
                var headshotInput = input with { IsHeadshot = true };
                var headshotResult = DamageCalculator.Calculate(headshotInput);
                var nonHeadshotResult = DamageCalculator.Calculate(input);

                if (nonHeadshotResult.FinalDamage > 0)
                {
                    float actualRatio = headshotResult.FinalDamage / nonHeadshotResult.FinalDamage;
                    Assert.That(actualRatio, Is.EqualTo(2.5f).Within(0.1f),
                        $"BaseDamage={baseDamage}: headshot ratio was {actualRatio}, expected 2.5");
                }
            }
        }

        // Property 16: Stagger Threshold Invariant
        [Test]
        [Category("Property:16")]
        public void Property16_StaggerThreshold_Invariant()
        {
            for (int iter = 0; iter < Iterations; iter++)
            {
                float baseDamage = _rand.Next(1, 101);
                float multiplier = _rand.Next(1, 11) / 10f;
                float armor = _rand.Next(0, 81) / 100f;
                bool isHeadshot = _rand.Next(2) == 1;

                var input = new DamageInput
                {
                    BaseDamage = baseDamage,
                    DamageMultiplier = multiplier,
                    IsHeadshot = isHeadshot,
                    IsExplosive = false,
                    ArmorRating = armor,
                    IsMelee = false,
                    HasSuppressor = false
                };

                var result = DamageCalculator.Calculate(input);

                if (result.FinalDamage >= 15f)
                    Assert.That(result.ShouldStagger, Is.True,
                        $"FinalDamage={result.FinalDamage}: should stagger at >=15");
                else
                    Assert.That(result.ShouldStagger, Is.False,
                        $"FinalDamage={result.FinalDamage}: should not stagger at <15");
            }
        }

        // Property 17: Explosive Damage Falloff Boundary
        [Test]
        [Category("Property:17")]
        public void Property17_ExplosiveDamage_FalloffBoundary()
        {
            for (int iter = 0; iter < Iterations; iter++)
            {
                float baseDamage = _rand.Next(10, 101);
                float radius = _rand.Next(1, 21);
                float distance = _rand.Next(0, 41);

                // Only test when distance >= radius (falloff boundary)
                if (distance < radius) continue;

                var input = new DamageInput
                {
                    BaseDamage = baseDamage,
                    DamageMultiplier = 1.0f,
                    IsHeadshot = false,
                    IsExplosive = true,
                    ExplosionRadius = radius,
                    DistanceFromExplosion = distance,
                    ArmorRating = 0f,
                    IsMelee = false,
                    HasSuppressor = false
                };

                var result = DamageCalculator.Calculate(input);
                Assert.That(result.FinalDamage, Is.EqualTo(0f),
                    $"BaseDamage={baseDamage}, Radius={radius}, Distance={distance}: explosive should be 0 beyond radius");
            }
        }

        // Property 18: Damage Noise Level Assignment
        [Test]
        [Category("Property:18")]
        public void Property18_DamageNoiseLevel_Assignment()
        {
            for (int iter = 0; iter < Iterations; iter++)
            {
                float baseDamage = _rand.Next(1, 101);
                bool isExplosive = _rand.Next(2) == 1;
                bool isMelee = _rand.Next(2) == 1;
                bool hasSuppressor = _rand.Next(2) == 1;

                var input = new DamageInput
                {
                    BaseDamage = baseDamage,
                    DamageMultiplier = 1.0f,
                    IsHeadshot = false,
                    IsExplosive = isExplosive,
                    ExplosionRadius = isExplosive ? 5f : 0f,
                    DistanceFromExplosion = 0f,
                    ArmorRating = 0f,
                    IsMelee = isMelee,
                    HasSuppressor = hasSuppressor
                };

                var result = DamageCalculator.Calculate(input);

                if (isExplosive)
                    Assert.That(result.NoiseLevel, Is.EqualTo(80),
                        "Explosive should have noise level 80");
                else if (hasSuppressor)
                    Assert.That(result.NoiseLevel, Is.EqualTo(10),
                        "Suppressed should have noise level 10");
                else if (isMelee)
                    Assert.That(result.NoiseLevel, Is.EqualTo(15),
                        "Melee should have noise level 15");
                else if (baseDamage > 20)
                    Assert.That(result.NoiseLevel, Is.EqualTo(50),
                        "High-damage ranged should have noise level 50");
                else
                    Assert.That(result.NoiseLevel, Is.EqualTo(15),
                        "Low-damage ranged should have noise level 15");
            }
        }
    }
}
