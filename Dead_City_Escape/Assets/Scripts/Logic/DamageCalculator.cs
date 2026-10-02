// ---------------------------------------------------------------------------
// Dead City Escape - Damage Calculator
// Pure C# damage pipeline for combat calculations.
// Handles melee, ranged, explosive, and critical hit mechanics.
// ---------------------------------------------------------------------------
using System;

namespace DeadCityEscape.Logic
{
    /// <summary>
    /// Types of damage sources in the game.
    /// </summary>
    public enum DamageType
    {
        Melee,
        Ranged,
        Explosive,
        Environmental
    }

    /// <summary>
    /// Body parts for hit detection and damage multipliers.
    /// </summary>
    public enum HitZone
    {
        Body,
        Head,
        Limb
    }

    /// <summary>
    /// Represents the result of a damage calculation.
    /// </summary>
    public struct DamageResult
    {
        public float FinalDamage;
        public bool IsCritical;
        public bool IsKill;
        public float KnockbackForce;
        public float StaggerDuration;
        public float RemainingHealth;

        public override string ToString()
        {
            return $"Damage={FinalDamage:F1} Crit={IsCritical} Kill={IsKill} " +
                   $"Knockback={KnockbackForce:F1} Stagger={StaggerDuration:F2}s";
        }
    }

    /// <summary>
    /// Input parameters for a damage calculation.
    /// </summary>
    public struct DamageInput
    {
        public float BaseDamage;
        public DamageType Type;
        public HitZone HitZone;
        public float Distance;
        public float TargetHealth;
        public float TargetMaxHealth;
        public float TargetArmor;
        public float AttackerDamageMultiplier;
        public float WeaponDamageMultiplier;
        public bool HasSuppressor;
    }

    /// <summary>
    /// Calculates damage for all combat interactions.
    /// Stateless - all methods are pure functions.
    /// </summary>
    public static class DamageCalculator
    {
        // Headshot critical damage multiplier (Doom-style)
        public const float HeadshotMultiplier = 2.5f;
        public const float LimbMultiplier = 0.6f;
        public const float BodyMultiplier = 1.0f;

        // Explosive falloff
        public const float ExplosionMaxRadius = 8.0f;
        public const float ExplosionMinDamagePercent = 0.15f;

        // Knockback
        public const float MeleeKnockback = 3.0f;
        public const float RangedKnockback = 1.5f;
        public const float ExplosiveKnockback = 12.0f;

        // Stagger thresholds
        public const float StaggerThreshold = 0.25f;
        public const float StaggerDurationBase = 0.5f;

        /// <summary>
        /// Calculates the final damage result for a given input.
        /// </summary>
        public static DamageResult Calculate(DamageInput input)
        {
            float damage = input.BaseDamage;

            // Apply weapon multiplier
            damage *= Math.Max(0.1f, input.WeaponDamageMultiplier);

            // Apply attacker skill multiplier
            damage *= Math.Max(0.1f, input.AttackerDamageMultiplier);

            // Apply hit zone multiplier
            bool isCritical = false;
            switch (input.HitZone)
            {
                case HitZone.Head:
                    damage *= HeadshotMultiplier;
                    isCritical = true;
                    break;
                case HitZone.Limb:
                    damage *= LimbMultiplier;
                    break;
                case HitZone.Body:
                default:
                    damage *= BodyMultiplier;
                    break;
            }

            // Apply explosive distance falloff
            if (input.Type == DamageType.Explosive && input.Distance > 0)
            {
                float falloff = 1.0f - Math.Clamp(input.Distance / ExplosionMaxRadius, 0f, 1f);
                falloff = Math.Max(ExplosionMinDamagePercent, falloff);
                damage *= falloff;
            }

            // Apply armor reduction
            float armorReduction = Math.Clamp(input.TargetArmor * 0.01f, 0f, 0.8f);
            damage *= (1.0f - armorReduction);

            // Floor damage to minimum of 1
            damage = Math.Max(1.0f, damage);

            // Calculate knockback
            float knockback = input.Type switch
            {
                DamageType.Melee => MeleeKnockback,
                DamageType.Ranged => RangedKnockback,
                DamageType.Explosive => ExplosiveKnockback,
                _ => 0f
            };

            // Calculate stagger
            float stagger = 0f;
            float healthRatio = input.TargetHealth / Math.Max(1f, input.TargetMaxHealth);
            if (damage / input.TargetMaxHealth >= StaggerThreshold || isCritical)
            {
                stagger = StaggerDurationBase * (isCritical ? 1.5f : 1.0f);
            }

            float remaining = Math.Max(0f, input.TargetHealth - damage);

            return new DamageResult
            {
                FinalDamage = damage,
                IsCritical = isCritical,
                IsKill = remaining <= 0f,
                KnockbackForce = knockback,
                StaggerDuration = stagger,
                RemainingHealth = remaining
            };
        }

        /// <summary>
        /// Returns the noise level generated by a damage event.
        /// Higher noise attracts more zombies.
        /// </summary>
        public static float GetNoiseLevel(DamageType type, bool hasSuppressor)
        {
            float baseNoise = type switch
            {
                DamageType.Melee => 15f,
                DamageType.Ranged => hasSuppressor ? 10f : 50f,
                DamageType.Explosive => 100f,
                DamageType.Environmental => 5f,
                _ => 0f
            };
            return baseNoise;
        }

        /// <summary>
        /// Calculates explosive area damage for all targets in radius.
        /// Returns an array of damage amounts indexed by target.
        /// </summary>
        public static float[] CalculateAreaDamage(
            float baseDamage,
            float[] targetDistances,
            float maxRadius)
        {
            if (targetDistances == null) return Array.Empty<float>();

            float[] results = new float[targetDistances.Length];
            for (int i = 0; i < targetDistances.Length; i++)
            {
                if (targetDistances[i] > maxRadius)
                {
                    results[i] = 0f;
                    continue;
                }

                float falloff = 1.0f - Math.Clamp(targetDistances[i] / maxRadius, 0f, 1f);
                falloff = Math.Max(ExplosionMinDamagePercent, falloff);
                results[i] = baseDamage * falloff;
            }
            return results;
        }
    }
}
