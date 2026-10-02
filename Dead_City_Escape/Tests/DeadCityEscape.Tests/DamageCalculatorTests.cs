// ---------------------------------------------------------------------------
// Dead City Escape - Damage Calculator Tests
// Validates damage pipeline: headshots, explosives, armor, stagger.
// ---------------------------------------------------------------------------
using NUnit.Framework;
using DeadCityEscape.Logic;

namespace DeadCityEscape.Tests
{
    [TestFixture]
    public class DamageCalculatorTests
    {
        [Test]
        public void BaseDamage_NoModifiers()
        {
            var input = new DamageInput
            {
                BaseDamage = 20,
                DamageMultiplier = 1f
            };

            var result = DamageCalculator.Calculate(input);
            Assert.That(result.FinalDamage, Is.EqualTo(20f));
        }

        [Test]
        public void Headshot_AppliesMultiplier()
        {
            var input = new DamageInput
            {
                BaseDamage = 10,
                IsHeadshot = true,
                DamageMultiplier = 1f
            };

            var result = DamageCalculator.Calculate(input);
            Assert.That(result.FinalDamage,
                Is.EqualTo(10f * DamageCalculator.HeadshotMultiplier));
        }

        [Test]
        public void Armor_ReducesDamage()
        {
            var input = new DamageInput
            {
                BaseDamage = 100,
                ArmorRating = 0.5f,
                DamageMultiplier = 1f
            };

            var result = DamageCalculator.Calculate(input);
            Assert.That(result.FinalDamage, Is.EqualTo(50f));
        }

        [Test]
        public void Armor_CapsAt80Percent()
        {
            var input = new DamageInput
            {
                BaseDamage = 100,
                ArmorRating = 1.0f, // Would be 100% but cap at 80%
                DamageMultiplier = 1f
            };

            var result = DamageCalculator.Calculate(input);
            Assert.That(result.FinalDamage, Is.EqualTo(20f).Within(0.01f));
        }

        [Test]
        public void Explosive_FalloffAtCenter()
        {
            var input = new DamageInput
            {
                BaseDamage = 50,
                IsExplosive = true,
                DistanceFromExplosion = 0f,
                ExplosionRadius = 10f,
                DamageMultiplier = 1f
            };

            var result = DamageCalculator.Calculate(input);
            Assert.That(result.FinalDamage, Is.EqualTo(50f));
        }

        [Test]
        public void Explosive_FalloffAtEdge()
        {
            var input = new DamageInput
            {
                BaseDamage = 50,
                IsExplosive = true,
                DistanceFromExplosion = 10f,
                ExplosionRadius = 10f,
                DamageMultiplier = 1f
            };

            var result = DamageCalculator.Calculate(input);
            Assert.That(result.FinalDamage, Is.EqualTo(0f));
        }

        [Test]
        public void Explosive_FalloffAtHalfway()
        {
            var input = new DamageInput
            {
                BaseDamage = 100,
                IsExplosive = true,
                DistanceFromExplosion = 5f,
                ExplosionRadius = 10f,
                DamageMultiplier = 1f
            };

            var result = DamageCalculator.Calculate(input);
            Assert.That(result.FinalDamage, Is.EqualTo(50f));
        }

        [Test]
        public void DamageMultiplier_Applied()
        {
            var input = new DamageInput
            {
                BaseDamage = 10,
                DamageMultiplier = 2f
            };

            var result = DamageCalculator.Calculate(input);
            Assert.That(result.FinalDamage, Is.EqualTo(20f));
        }

        [Test]
        public void Stagger_TriggeredAboveThreshold()
        {
            var input = new DamageInput
            {
                BaseDamage = DamageCalculator.StaggerThreshold + 1,
                DamageMultiplier = 1f
            };

            var result = DamageCalculator.Calculate(input);
            Assert.That(result.ShouldStagger, Is.True);
        }

        [Test]
        public void Stagger_NotTriggeredBelowThreshold()
        {
            var input = new DamageInput
            {
                BaseDamage = DamageCalculator.StaggerThreshold - 1,
                DamageMultiplier = 1f
            };

            var result = DamageCalculator.Calculate(input);
            Assert.That(result.ShouldStagger, Is.False);
        }

        [Test]
        public void NoiseLevel_Explosive()
        {
            var input = new DamageInput
            {
                BaseDamage = 50,
                IsExplosive = true,
                ExplosionRadius = 10,
                DamageMultiplier = 1f
            };

            var result = DamageCalculator.Calculate(input);
            Assert.That(result.NoiseLevel, Is.EqualTo(80));
        }

        [Test]
        public void NoiseLevel_Gunshot()
        {
            var input = new DamageInput
            {
                BaseDamage = 30, // > 20 = gunshot
                IsMelee = false,
                HasSuppressor = false,
                DamageMultiplier = 1f
            };

            var result = DamageCalculator.Calculate(input);
            Assert.That(result.NoiseLevel, Is.EqualTo(50));
        }

        [Test]
        public void NoiseLevel_Melee()
        {
            var input = new DamageInput
            {
                BaseDamage = 15,
                IsMelee = true,
                DamageMultiplier = 1f
            };

            var result = DamageCalculator.Calculate(input);
            Assert.That(result.NoiseLevel, Is.EqualTo(15));
        }

        [Test]
        public void NoiseLevel_Suppressed()
        {
            var input = new DamageInput
            {
                BaseDamage = 30,
                IsMelee = false,
                HasSuppressor = true,
                DamageMultiplier = 1f
            };

            var result = DamageCalculator.Calculate(input);
            Assert.That(result.NoiseLevel, Is.EqualTo(10));
        }

        [Test]
        public void ZeroDamage_NeverNegative()
        {
            var input = new DamageInput
            {
                BaseDamage = 0,
                DamageMultiplier = 1f
            };

            var result = DamageCalculator.Calculate(input);
            Assert.That(result.FinalDamage, Is.GreaterThanOrEqualTo(0f));
        }

        [Test]
        public void Combined_HeadshotWithArmor()
        {
            var input = new DamageInput
            {
                BaseDamage = 10,
                IsHeadshot = true,
                ArmorRating = 0.5f,
                DamageMultiplier = 1f
            };

            var result = DamageCalculator.Calculate(input);
            float expected = 10f * 2.5f * 0.5f; // 12.5
            Assert.That(result.FinalDamage, Is.EqualTo(expected).Within(0.01f));
        }

        [Test]
        public void ZeroMultiplier_DefaultsToOne()
        {
            var input = new DamageInput
            {
                BaseDamage = 20,
                DamageMultiplier = 0f // 0 should default to 1
            };

            var result = DamageCalculator.Calculate(input);
            Assert.That(result.FinalDamage, Is.EqualTo(20f));
        }
    }
}
