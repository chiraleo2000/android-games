// ---------------------------------------------------------------------------
// Dead City Escape - Game Configuration
// Central configuration for all tunable game parameters.
// ---------------------------------------------------------------------------
using System;
using UnityEngine;

namespace DeadCityEscape.Core
{
    /// <summary>
    /// Holds all tunable game configuration values.
    /// Create as ScriptableObject for easy tweaking in Unity Editor.
    /// </summary>
    [CreateAssetMenu(fileName = "GameConfig", menuName = "DeadCityEscape/Game Config")]
    public class GameConfig : ScriptableObject
    {
        [Header("Player Settings")]
        public float PlayerMoveSpeed = 5.0f;
        public float PlayerSprintSpeed = 8.0f;
        public float PlayerCrouchSpeed = 2.5f;
        public float PlayerJumpForce = 5.0f;
        public float PlayerMaxHealth = 100f;
        public float PlayerStartHealth = 100f;
        public float MouseSensitivity = 2.0f;
        public float TouchSensitivity = 1.5f;
        public float GravityMultiplier = 2.0f;

        [Header("Camera")]
        public float CameraMinPitch = -80f;
        public float CameraMaxPitch = 80f;
        public float CameraFOV = 75f;
        public float SprintFOVBoost = 10f;
        public float CameraHeight = 1.7f;

        [Header("Combat")]
        public float MeleeRange = 2.5f;
        public float MeleeCooldown = 0.6f;
        public float MeleeBaseDamage = 35f;
        public float PistolBaseDamage = 25f;
        public float PistolFireRate = 0.3f;
        public float PistolRange = 50f;
        public int PistolMagSize = 12;
        public int PistolExtendedMagSize = 25;
        public float ReloadTime = 1.5f;
        public float RecoilAmount = 2.0f;
        public float RecoilRecoverySpeed = 5.0f;

        [Header("Flashlight")]
        public float FlashlightRange = 20f;
        public float FlashlightAngle = 45f;
        public float FlashlightIntensity = 2.0f;
        public float FlashlightBatteryDrain = 0.01f;

        [Header("Zombie AI")]
        public float WalkerSpeed = 1.5f;
        public float RunnerSpeed = 5.5f;
        public float BruteSpeed = 1.0f;
        public float ScreamerSpeed = 3.0f;
        public float WalkerHealth = 30f;
        public float RunnerHealth = 50f;
        public float BruteHealth = 100f;
        public float ScreamerHealth = 20f;
        public float WalkerDamage = 10f;
        public float RunnerDamage = 15f;
        public float BruteDamage = 30f;
        public float ScreamerDamage = 5f;
        public float DetectionRangeBase = 15f;
        public float HearingRangeBase = 25f;
        public float ScreamerAlertRadius = 40f;

        [Header("World Generation")]
        public int DefaultSeed = 12345;
        public int ZoneCount = 16;
        public float ZoneSize = 100f;
        public int ActiveZoneRadius = 2;
        public int MaxCachedZones = 6;

        [Header("Escape Routes")]
        public int HelicopterFuelCansRequired = 5;
        public float HelicopterDefendTime = 180f;
        public float HelicopterXPMultiplier = 2.0f;
        public int CarRepairPartsRequired = 3;
        public float CarXPMultiplier = 1.5f;
        public int SewerGatesRequired = 3;
        public float SewerXPMultiplier = 1.25f;

        [Header("Progression")]
        public int XPPerZombieKill = 25;
        public int XPPerSurvivorRescue = 50;
        public int XPPerObjectiveComplete = 100;
        public int BaseXPPerLevel = 200;
        public float XPScalePerLevel = 1.15f;
        public int SkillPointsPerLevel = 1;

        [Header("Explosives")]
        public float GasCanisterExplosionRadius = 8f;
        public float GasCanisterDamage = 80f;
        public float GasCanisterFuseTime = 0.5f;

        [Header("Performance")]
        public int TargetFrameRate = 60;
        public int MaxDrawCallBudget = 200;
        public float LODSwitchDistance = 30f;
        public int MaxActiveZombies = 20;
        public int ObjectPoolDefaultSize = 50;

        [Header("Audio")]
        public float MasterVolume = 1.0f;
        public float MusicVolume = 0.6f;
        public float SFXVolume = 0.8f;
        public float AmbientVolume = 0.5f;
    }
}
