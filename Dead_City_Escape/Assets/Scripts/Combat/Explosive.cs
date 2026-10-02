// ---------------------------------------------------------------------------
// Dead City Escape - Explosive System
// Throwable explosives and explosive world objects.
// Requirements: 5.3
// ---------------------------------------------------------------------------
using UnityEngine;
using DeadCityEscape.Logic;

namespace DeadCityEscape.Combat
{
    /// <summary>
    /// Throwable explosive weapon (grenades, molotovs).
    /// Deals AoE damage with explosive falloff.
    /// Requirement: 5.3
    /// </summary>
    public class Explosive : WeaponBase
    {
        [Header("Explosive")]
        [SerializeField] private float _explosionRadius = 8f;
        [SerializeField] private float _explosionDamage = 80f;
        [SerializeField] private float _throwForce = 15f;
        [SerializeField] private float _fuseTime = 3f;
        [SerializeField] private GameObject _explosivePrefab;

        private void Awake()
        {
            _weaponId = "grenade";
            _weaponName = "Grenade";
            _baseDamage = 80f;
            _range = 20f;
            _cooldown = 1.5f;
        }

        /// <summary>
        /// Throws explosive projectile.
        /// Requirement: 5.3
        /// </summary>
        public override void Fire()
        {
            var cam = Camera.main;
            if (cam == null) return;

            // Spawn explosive projectile
            if (_explosivePrefab != null)
            {
                Vector3 spawnPos = cam.transform.position + cam.transform.forward * 0.5f;
                GameObject projectile = Instantiate(_explosivePrefab, spawnPos, Quaternion.identity);
                
                var rb = projectile.GetComponent<Rigidbody>();
                if (rb != null)
                {
                    rb.linearVelocity = cam.transform.forward * _throwForce;
                }

                var explosive = projectile.GetComponent<ExplosiveProjectile>();
                if (explosive != null)
                {
                    explosive.Initialize(_explosionRadius, _explosionDamage, _fuseTime);
                }
            }

            // Broadcast noise (NoiseLevel 80 for explosives - Requirement 5.4)
            BroadcastNoise(80);
        }

        /// <summary>
        /// Explosives don't reload.
        /// </summary>
        public override void StartReload()
        {
            // No-op for explosives
        }
    }

    /// <summary>
    /// Explosive projectile that detonates after fuse time.
    /// </summary>
    public class ExplosiveProjectile : MonoBehaviour
    {
        private float _explosionRadius;
        private float _explosionDamage;
        private float _fuseTime;
        private float _fuseTimer;
        private bool _hasExploded;

        public void Initialize(float radius, float damage, float fuseTime)
        {
            _explosionRadius = radius;
            _explosionDamage = damage;
            _fuseTime = fuseTime;
            _fuseTimer = 0f;
        }

        private void Update()
        {
            _fuseTimer += Time.deltaTime;
            if (_fuseTimer >= _fuseTime && !_hasExploded)
            {
                Explode();
            }
        }

        private void Explode()
        {
            if (_hasExploded) return;
            _hasExploded = true;

            // Use Physics.OverlapSphere for AoE damage (Requirement 5.3)
            Collider[] hits = Physics.OverlapSphere(transform.position, _explosionRadius);

            foreach (var col in hits)
            {
                float distance = Vector3.Distance(transform.position, col.transform.position);

                // Damage zombies with explosive falloff via DamageCalculator
                var zombie = col.GetComponent<AI.ZombieBase>();
                if (zombie != null && !zombie.IsDead)
                {
                    var input = new DamageInput
                    {
                        BaseDamage = _explosionDamage,
                        Type = DamageType.Explosive,
                        HitZone = HitZone.Body,
                        Distance = distance,
                        TargetHealth = 100f,
                        TargetMaxHealth = 100f,
                        TargetArmor = 0f,
                        AttackerDamageMultiplier = 1f,
                        WeaponDamageMultiplier = 1f
                    };
                    var result = DamageCalculator.Calculate(input);
                    zombie.TakeDamage(result.FinalDamage, transform.position);
                }

                // Damage player
                var playerHealth = col.GetComponent<Player.PlayerHealth>();
                if (playerHealth != null)
                {
                    var input = new DamageInput
                    {
                        BaseDamage = _explosionDamage,
                        Type = DamageType.Explosive,
                        HitZone = HitZone.Body,
                        Distance = distance,
                        TargetHealth = playerHealth.CurrentHealth,
                        TargetMaxHealth = playerHealth.MaxHealth,
                        TargetArmor = 0f,
                        AttackerDamageMultiplier = 1f,
                        WeaponDamageMultiplier = 1f
                    };
                    var result = DamageCalculator.Calculate(input);
                    playerHealth.TakeDamage(result.FinalDamage, transform.position);
                }

                // Physics force to rigidbodies
                var rb = col.GetComponent<Rigidbody>();
                if (rb != null)
                {
                    rb.AddExplosionForce(500f, transform.position, _explosionRadius);
                }
            }

            // Play explosion sound
            var audio = Audio.AudioManager.Instance;
            if (audio != null)
            {
                var clip = audio.GenerateExplosion();
                audio.PlaySFXAtPosition(clip, transform.position, 1f, _explosionRadius * 2);
            }

            // Destroy projectile
            Destroy(gameObject);
        }
    }

    /// <summary>
    /// Explodable world object (gas canister, barrel, etc).
    /// Shoot to trigger a physics-based explosion dealing area damage.
    /// </summary>
    public class ExplosiveObject : MonoBehaviour
    {
        [Header("Explosion")]
        [SerializeField] private float _explosionRadius = 8f;
        [SerializeField] private float _explosionDamage = 80f;
        [SerializeField] private float _explosionForce = 500f;
        [SerializeField] private float _fuseTime = 0.5f;
        [SerializeField] private float _health = 10f;
        [SerializeField] private Color _glowColor = Color.red;

        private bool _isDetonating;
        private bool _hasExploded;
        private float _fuseTimer;
        private Renderer _renderer;
        private MaterialPropertyBlock _propBlock;

        private void Start()
        {
            _renderer = GetComponent<Renderer>();
            _propBlock = new MaterialPropertyBlock();

            // Set red glow color
            if (_renderer != null)
            {
                _propBlock.SetColor("_EmissionColor",
                    _glowColor * 2f);
                _renderer.SetPropertyBlock(_propBlock);
            }
        }

        private void Update()
        {
            if (!_isDetonating) return;

            _fuseTimer += Time.deltaTime;

            // Flash effect before exploding
            if (_renderer != null)
            {
                float flash = Mathf.Sin(_fuseTimer * 30f) > 0 ? 4f : 1f;
                _propBlock.SetColor("_EmissionColor",
                    _glowColor * flash);
                _renderer.SetPropertyBlock(_propBlock);
            }

            if (_fuseTimer >= _fuseTime)
                Explode();
        }

        /// <summary>
        /// Called when this explosive takes damage (e.g., from gunfire).
        /// </summary>
        public void TakeDamage(float damage)
        {
            if (_hasExploded || _isDetonating) return;

            _health -= damage;
            if (_health <= 0)
            {
                _isDetonating = true;
                _fuseTimer = 0f;
            }
        }

        private void Explode()
        {
            if (_hasExploded) return;
            _hasExploded = true;

            // Damage all entities in radius
            Collider[] hits = Physics.OverlapSphere(transform.position,
                _explosionRadius);

            foreach (var col in hits)
            {
                float distance = Vector3.Distance(transform.position,
                    col.transform.position);

                // Damage zombies
                var zombie = col.GetComponent<AI.ZombieBase>();
                if (zombie != null && !zombie.IsDead)
                {
                    var input = new DamageInput
                    {
                        BaseDamage = _explosionDamage,
                        Type = DamageType.Explosive,
                        HitZone = HitZone.Body,
                        Distance = distance,
                        TargetHealth = 100f,
                        TargetMaxHealth = 100f,
                        TargetArmor = 0f,
                        AttackerDamageMultiplier = 1f,
                        WeaponDamageMultiplier = 1f
                    };
                    var result = DamageCalculator.Calculate(input);
                    zombie.TakeDamage(result.FinalDamage, transform.position);
                }

                // Damage player
                var playerHealth = col.GetComponent<Player.PlayerHealth>();
                if (playerHealth != null)
                {
                    var input = new DamageInput
                    {
                        BaseDamage = _explosionDamage,
                        Type = DamageType.Explosive,
                        HitZone = HitZone.Body,
                        Distance = distance,
                        TargetHealth = playerHealth.CurrentHealth,
                        TargetMaxHealth = playerHealth.MaxHealth,
                        TargetArmor = 0f,
                        AttackerDamageMultiplier = 1f,
                        WeaponDamageMultiplier = 1f
                    };
                    var result = DamageCalculator.Calculate(input);
                    playerHealth.TakeDamage(result.FinalDamage, transform.position);
                }

                // Physics force to rigidbodies
                var rb = col.GetComponent<Rigidbody>();
                if (rb != null)
                {
                    rb.AddExplosionForce(_explosionForce,
                        transform.position, _explosionRadius);
                }

                // Chain explosions
                var otherExplosive = col.GetComponent<ExplosiveObject>();
                if (otherExplosive != null && otherExplosive != this)
                    otherExplosive.TakeDamage(999f);
            }

            // Play explosion sound
            var audio = Audio.AudioManager.Instance;
            if (audio != null)
            {
                var clip = audio.GenerateExplosion();
                audio.PlaySFXAtPosition(clip, transform.position, 1f, _explosionRadius * 2);
            }

            // Broadcast noise
            var spawner = FindAnyObjectByType<AI.ZombieSpawner>();
            if (spawner != null)
                spawner.BroadcastNoise(transform.position, 100f);

            // Destroy this object
            Destroy(gameObject, 0.1f);
        }

        private void OnDrawGizmosSelected()
        {
            Gizmos.color = new Color(1, 0, 0, 0.3f);
            Gizmos.DrawWireSphere(transform.position, _explosionRadius);
        }
    }
}
