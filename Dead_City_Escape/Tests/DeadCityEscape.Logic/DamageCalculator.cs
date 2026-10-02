// ---------------------------------------------------------------------------
// Dead City Escape - Damage Calculator (Standalone .NET version)
// Pure math damage pipeline for .NET testing.
// ---------------------------------------------------------------------------
namespace DeadCityEscape.Logic
{
    public struct DamageInput
    {
        public float BaseDamage;
        public float DamageMultiplier;    // default 1.0, skill modifiers
        public bool IsHeadshot;
        public bool IsExplosive;
        public float ExplosionRadius;     // metres; 0 if not explosive
        public float DistanceFromExplosion;
        public float ArmorRating;         // [0, 0.8]
        public bool IsMelee;
        public bool HasSuppressor;
    }

    public struct DamageResult
    {
        public float FinalDamage;
        public bool ShouldStagger;        // FinalDamage >= 15
        public int NoiseLevel;            // 80 explosive / 50 ranged / 15 melee / 10 suppressed
    }

    /// <summary>
    /// Static damage calculation pipeline. No side effects, fully testable.
    /// </summary>
    public static class DamageCalculator
    {
        public const float HeadshotMultiplier = 2.5f;
        public const float StaggerThreshold = 15f;
        public const float ExplosionBaseNoise = 80f;
        public const float GunshotBaseNoise = 50f;
        public const float MeleeBaseNoise = 15f;

        public static DamageResult Calculate(DamageInput input)
        {
            float damage = input.BaseDamage;

            // Apply damage multiplier (skill tree, buffs)
            damage *= input.DamageMultiplier > 0 ? input.DamageMultiplier : 1f;

            // Headshot bonus
            if (input.IsHeadshot)
                damage *= HeadshotMultiplier;

            // Explosive falloff
            if (input.IsExplosive && input.ExplosionRadius > 0)
            {
                float falloff = 1f -
                    Math.Clamp(input.DistanceFromExplosion / input.ExplosionRadius, 0f, 1f);
                damage *= falloff;
            }

            // Armor reduction
            float armorAbsorb = Math.Clamp(input.ArmorRating, 0f, 0.8f);
            damage *= (1f - armorAbsorb);

            // Floor to zero
            damage = Math.Max(0f, damage);

            // Stagger check
            bool shouldStagger = damage >= StaggerThreshold;

            // Noise level for AI (Requirement 5.4)
            // - 80 for explosive
            // - 10 for suppressed ranged
            // - 50 for ranged (BaseDamage > 20)
            // - 15 for melee
            int noise;
            if (input.IsExplosive)
            {
                noise = 80;
            }
            else if (input.HasSuppressor)
            {
                noise = 10;
            }
            else if (input.IsMelee)
            {
                noise = 15;
            }
            else if (input.BaseDamage > 20)
            {
                noise = 50;
            }
            else
            {
                // Default for low-damage ranged weapons
                noise = 15;
            }

            return new DamageResult
            {
                FinalDamage = damage,
                ShouldStagger = shouldStagger,
                NoiseLevel = noise
            };
        }
    }
}
