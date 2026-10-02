// ---------------------------------------------------------------------------
// Dead City Escape - Weapon System
// Base weapon class and melee/ranged implementations.
// Doom-style FPS weapon mechanics with recoil simulation.
// ---------------------------------------------------------------------------
using System;
using UnityEngine;
using DeadCityEscape.Logic;

namespace DeadCityEscape.Combat
{
    /// <summary>
    /// Base class for all weapons in the game.
    /// Requirements: 5.9
    /// </summary>
    public abstract class WeaponBase : MonoBehaviour
    {
        [Header("Weapon Info")]
        [SerializeField] protected string _weaponId;
        [SerializeField] protected string _weaponName;
        [SerializeField] protected float _baseDamage = 25f;
        [SerializeField] protected float _range = 2f;
        [SerializeField] protected float _cooldown = 0.5f;

        protected float _lastFireTime;
        protected bool _isEquipped;
        protected int _currentNoiseLevel;

        public string WeaponId => _weaponId;
        public string WeaponName => _weaponName;
        public float BaseDamage => _baseDamage;
        public bool IsEquipped => _isEquipped;
        public bool CanFire => Time.time - _lastFireTime >= _cooldown;

        public event Action OnFired;
        public event Action OnEquipped;
        public event Action OnUnequipped;
        public event Action<int, int> OnAmmoChanged; // current, max

        protected void InvokeOnAmmoChanged(int current, int max)
        {
            OnAmmoChanged?.Invoke(current, max);
        }

        public virtual void Equip()
        {
            _isEquipped = true;
            gameObject.SetActive(true);
            OnEquipped?.Invoke();
        }

        public virtual void Unequip()
        {
            _isEquipped = false;
            gameObject.SetActive(false);
            OnUnequipped?.Invoke();
        }

        public virtual bool TryFire()
        {
            if (!_isEquipped || !CanFire) return false;

            _lastFireTime = Time.time;
            Fire();
            OnFired?.Invoke();

            return true;
        }

        /// <summary>
        /// Abstract method to be implemented by weapon subclasses.
        /// Must call BroadcastNoise after successful fire.
        /// </summary>
        public abstract void Fire();

        /// <summary>
        /// Abstract method to be implemented by weapons that support reloading.
        /// </summary>
        public abstract void StartReload();

        /// <summary>
        /// Broadcasts noise event via ZombieSpawner.
        /// Requirement: 5.9
        /// </summary>
        protected void BroadcastNoise(int noiseLevel)
        {
            var spawner = FindAnyObjectByType<AI.ZombieSpawner>();
            if (spawner != null)
                spawner.BroadcastNoise(transform.position, noiseLevel);
        }
    }

    /// <summary>
    /// Baseball bat and other melee weapons.
    /// Short range, no ammo, moderate noise.
    /// Requirements: 5.5
    /// </summary>
    public class MeleeWeapon : WeaponBase
    {
        [Header("Melee")]
        [SerializeField] private float _swingAngle = 60f;
        [SerializeField] private float _knockbackForce = 5f;

        private void Awake()
        {
            _weaponId = "bat";
            _weaponName = "Baseball Bat";
            _baseDamage = 35f;
            _range = 2.5f;
            _cooldown = 0.6f;
        }

        /// <summary>
        /// Performs a SphereCast along camera forward vector.
        /// Applies damage to all ZombieBase within 60° swing arc.
        /// Requirement: 5.5, 8.8 (Heavy Hitter skill)
        /// </summary>
        public override void Fire()
        {
            // Sphere cast in front of player
            var cam = Camera.main;
            if (cam == null) return;

            // Check for Heavy Hitter skill (combat_1) - Requirement 8.8
            float damageMultiplier = 1f;
            var saveSystem = Core.SaveSystem.Instance;
            if (saveSystem != null)
            {
                var unlockedSkills = saveSystem.GetUnlockedSkillIds();
                if (unlockedSkills != null && System.Array.Exists(unlockedSkills, id => id == "combat_1"))
                {
                    // Heavy Hitter: 1.25× melee damage
                    damageMultiplier = 1.25f;
                }
            }

            Ray ray = new Ray(cam.transform.position, cam.transform.forward);
            RaycastHit[] hits = Physics.SphereCastAll(ray, 0.5f, _range,
                LayerMask.GetMask("Enemy"));

            bool hitAny = false;

            foreach (var hit in hits)
            {
                // Check angle - only hit targets within 60° arc
                Vector3 toTarget = hit.point - cam.transform.position;
                float angle = Vector3.Angle(cam.transform.forward, toTarget);
                if (angle > _swingAngle * 0.5f) continue;

                var zombie = hit.collider.GetComponent<AI.ZombieBase>();
                if (zombie != null && !zombie.IsDead)
                {
                    // Determine hit zone
                    HitZone zone = DetermineHitZone(hit.point,
                        hit.collider.bounds);
                    // Apply damage with Heavy Hitter multiplier
                    zombie.TakeDamage(_baseDamage, hit.point, zone, damageMultiplier);
                    hitAny = true;

                    // Apply knockback
                    var agent = hit.collider.GetComponent<UnityEngine.AI.NavMeshAgent>();
                    if (agent != null)
                        agent.Move(cam.transform.forward * _knockbackForce * Time.deltaTime);
                }
            }

            // Broadcast noise (NoiseLevel 15 for melee - Requirement 5.4)
            if (hitAny)
                BroadcastNoise(15);

            // Play swing sound
            var audio = Audio.AudioManager.Instance;
            if (audio != null)
            {
                var clip = audio.GenerateFootstep(2.0f);
                audio.PlaySFX(clip, 0.5f);
            }
        }

        /// <summary>
        /// Melee weapons don't reload.
        /// </summary>
        public override void StartReload()
        {
            // No-op for melee weapons
        }

        private HitZone DetermineHitZone(Vector3 hitPoint, Bounds bounds)
        {
            float relativeHeight = (hitPoint.y - bounds.min.y) / bounds.size.y;
            if (relativeHeight > 0.8f) return HitZone.Head;
            if (relativeHeight < 0.3f) return HitZone.Limb;
            return HitZone.Body;
        }
    }

    /// <summary>
    /// Pistol and other ranged weapons.
    /// Hitscan firing, ammo management, recoil, and suppressor support.
    /// Requirements: 5.6, 5.7, 5.8
    /// </summary>
    public class RangedWeapon : WeaponBase
    {
        [Header("Ranged")]
        [SerializeField] private int _magSize = 12;
        [SerializeField] private int _currentAmmo;
        [SerializeField] private float _reloadTime = 1.5f;
        [SerializeField] private float _recoilAmount = 2.0f;
        [SerializeField] private float _recoilRecovery = 5f;
        [SerializeField] private bool _hasSuppressor = false;

        private bool _isReloading;
        private float _reloadTimer;
        private float _currentRecoil;

        public int CurrentAmmo => _currentAmmo;
        public int MagSize => _magSize;
        public bool IsReloading => _isReloading;
        public bool HasSuppressor => _hasSuppressor;
        public float AmmoPercent => (float)_currentAmmo / _magSize;

        public event Action OnReloadStarted;
        public event Action OnReloadComplete;

        private void Awake()
        {
            _weaponId = "pistol";
            _weaponName = "Pistol";
            _baseDamage = 25f;
            _range = 50f;
            _cooldown = 0.3f;
        }

        private void Start()
        {
            _currentAmmo = _magSize;
            InvokeOnAmmoChanged(_currentAmmo, _magSize);
        }

        private void Update()
        {
            if (!_isEquipped) return;

            // Handle reload
            if (_isReloading)
            {
                _reloadTimer += Time.deltaTime;
                if (_reloadTimer >= _reloadTime)
                {
                    CompleteReload();
                }
                return;
            }

            // Recover recoil
            if (_currentRecoil > 0)
            {
                _currentRecoil = Mathf.Max(0,
                    _currentRecoil - _recoilRecovery * Time.deltaTime);
            }
        }

        public override bool TryFire()
        {
            if (_isReloading || _currentAmmo <= 0) return false;
            return base.TryFire();
        }

        /// <summary>
        /// Performs hitscan Raycast with recoil spread.
        /// Applies damage to first ZombieBase hit.
        /// Requirements: 5.6, 5.8
        /// </summary>
        public override void Fire()
        {
            _currentAmmo--;

            // Apply recoil
            _currentRecoil += _recoilAmount;

            // Hitscan raycast
            var cam = Camera.main;
            if (cam == null) return;

            // Add recoil spread proportional to accumulated recoil
            Vector3 spread = new Vector3(
                UnityEngine.Random.Range(-1f, 1f) * _currentRecoil * 0.01f,
                UnityEngine.Random.Range(-1f, 1f) * _currentRecoil * 0.01f,
                0
            );
            Vector3 direction = cam.transform.forward +
                cam.transform.TransformDirection(spread);

            Ray ray = new Ray(cam.transform.position, direction);

            if (Physics.Raycast(ray, out RaycastHit hit, _range,
                ~LayerMask.GetMask("Player", "IgnoreRaycast")))
            {
                var zombie = hit.collider.GetComponent<AI.ZombieBase>();
                if (zombie != null && !zombie.IsDead)
                {
                    HitZone zone = DetermineHitZone(hit.point,
                        hit.collider.bounds);
                    zombie.TakeDamage(_baseDamage, hit.point, zone);
                }

                // Hit effect at impact point would be spawned here
            }

            // Broadcast noise (Requirement 5.8: suppressor = 10, normal = 50)
            int noiseLevel = _hasSuppressor ? 10 : 50;
            BroadcastNoise(noiseLevel);

            // Play gunshot sound
            var audio = Audio.AudioManager.Instance;
            if (audio != null)
            {
                float decay = _hasSuppressor ? 0.06f : 0.15f;
                var clip = audio.GenerateGunshot(0.005f, decay,
                    _hasSuppressor ? 0.5f : 0.8f, 220f);
                audio.PlaySFX(clip);
            }

            InvokeOnAmmoChanged(_currentAmmo, _magSize);

            // Auto-reload when empty (Requirement 5.7)
            if (_currentAmmo <= 0)
                StartReload();
        }

        /// <summary>
        /// Starts reload if player has ammo in inventory.
        /// Requirement: 5.7
        /// </summary>
        public override void StartReload()
        {
            if (_isReloading || _currentAmmo >= _magSize) return;

            // Check if player has ammo
            var inventory = FindAnyObjectByType<Player.PlayerInventory>();
            if (inventory == null || !inventory.HasItem("ammo_9mm")) return;

            _isReloading = true;
            _reloadTimer = 0f;
            OnReloadStarted?.Invoke();
        }

        private void CompleteReload()
        {
            var inventory = FindAnyObjectByType<Player.PlayerInventory>();
            if (inventory != null)
            {
                int needed = _magSize - _currentAmmo;
                int available = inventory.GetCount("ammo_9mm");
                int toLoad = Mathf.Min(needed, available);

                inventory.RemoveItem("ammo_9mm", toLoad);
                _currentAmmo += toLoad;
            }

            _isReloading = false;
            _reloadTimer = 0f;
            _currentRecoil = 0f;
            InvokeOnAmmoChanged(_currentAmmo, _magSize);
            OnReloadComplete?.Invoke();
        }

        public void AttachSuppressor()
        {
            _hasSuppressor = true;
        }

        public void AttachExtendedMag()
        {
            _magSize = 25;
        }

        private HitZone DetermineHitZone(Vector3 hitPoint, Bounds bounds)
        {
            float relativeHeight = (hitPoint.y - bounds.min.y) / bounds.size.y;
            if (relativeHeight > 0.8f) return HitZone.Head;
            if (relativeHeight < 0.3f) return HitZone.Limb;
            return HitZone.Body;
        }
    }
}
