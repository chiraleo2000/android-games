// ---------------------------------------------------------------------------
// Dead City Escape - Player Health System
// Manages player health, damage, healing, and death.
// ---------------------------------------------------------------------------
using System;
using UnityEngine;

namespace DeadCityEscape.Player
{
    /// <summary>
    /// Manages the player's health, damage intake, healing, and death.
    /// Integrates with the skill tree for health bonuses and regeneration.
    /// </summary>
    public class PlayerHealth : MonoBehaviour
    {
        [Header("Health")]
        [SerializeField] private float _maxHealth = 100f;
        [SerializeField] private float _currentHealth;
        [SerializeField] private float _medkitHealAmount = 40f;
        [SerializeField] private float _damageFlashDuration = 0.3f;

        [Header("Regeneration")]
        [SerializeField] private float _regenRate = 0f;
        [SerializeField] private float _regenDelay = 5f;

        private float _lastDamageTime;
        private bool _isDead;

        public float MaxHealth => _maxHealth;
        public float CurrentHealth => _currentHealth;
        public float HealthPercent => _currentHealth / _maxHealth;
        public bool IsDead => _isDead;
        public bool IsLowHealth => _currentHealth <= _maxHealth * 0.25f;

        public event Action<float, float> OnHealthChanged;  // current, max
        public event Action<float, Vector3> OnDamageTaken;  // damage, hitPosition
        public event Action<float> OnHealed;
        public event Action OnDeath;

        private void Start()
        {
            // Apply skill bonuses
            ApplySkillBonuses();

            _currentHealth = _maxHealth;
            OnHealthChanged?.Invoke(_currentHealth, _maxHealth);
        }

        /// <summary>
        /// Applies skill tree bonuses to health.
        /// </summary>
        private void ApplySkillBonuses()
        {
            var saveSystem = Core.SaveSystem.Instance;
            if (saveSystem == null) return;

            var unlockedSkills = saveSystem.GetUnlockedSkillIds();
            if (unlockedSkills == null) return;

            // Tough Skin (survival_1): +20 max health
            if (System.Array.Exists(unlockedSkills, id => id == "survival_1"))
            {
                _maxHealth += 20f;
            }

            // Second Wind (survival_4): passive regen when health < 30%
            if (System.Array.Exists(unlockedSkills, id => id == "survival_4"))
            {
                _regenRate = 1f;  // 1 HP per second
            }
        }

        private void Update()
        {
            if (_isDead) return;

            // Passive regeneration (from Second Wind skill - survival_4)
            // Only works when health is below 30% of max
            if (_regenRate > 0 &&
                _currentHealth < _maxHealth * 0.3f &&
                Time.time - _lastDamageTime > _regenDelay &&
                _currentHealth < _maxHealth)
            {
                Heal(_regenRate * Time.deltaTime);
            }
        }

        /// <summary>
        /// Applies damage to the player.
        /// </summary>
        public void TakeDamage(float amount, Vector3 hitPosition = default)
        {
            if (_isDead || amount <= 0) return;

            _currentHealth = Mathf.Max(0, _currentHealth - amount);
            _lastDamageTime = Time.time;

            OnDamageTaken?.Invoke(amount, hitPosition);
            OnHealthChanged?.Invoke(_currentHealth, _maxHealth);

            if (_currentHealth <= 0)
                Die();
        }

        /// <summary>
        /// Heals the player by the given amount.
        /// </summary>
        public void Heal(float amount)
        {
            if (_isDead || amount <= 0) return;

            float oldHealth = _currentHealth;
            _currentHealth = Mathf.Min(_maxHealth, _currentHealth + amount);

            float healed = _currentHealth - oldHealth;
            if (healed > 0)
            {
                OnHealed?.Invoke(healed);
                OnHealthChanged?.Invoke(_currentHealth, _maxHealth);
            }
        }

        /// <summary>
        /// Uses a medkit from inventory.
        /// </summary>
        public bool UseMedkit(float bonusMultiplier = 1f)
        {
            if (_isDead || _currentHealth >= _maxHealth) return false;

            // Check for Field Medic skill (if it exists in skill tree)
            var saveSystem = Core.SaveSystem.Instance;
            if (saveSystem != null)
            {
                var unlockedSkills = saveSystem.GetUnlockedSkillIds();
                if (unlockedSkills != null && System.Array.Exists(unlockedSkills, id => id == "survival_3"))
                {
                    bonusMultiplier = 1.5f;  // Field Medic: 60 HP instead of 40
                }
            }

            float healAmount = _medkitHealAmount * bonusMultiplier;
            Heal(healAmount);
            return true;
        }

        /// <summary>
        /// Updates max health (from skill bonuses).
        /// </summary>
        public void SetMaxHealth(float newMax)
        {
            float ratio = _currentHealth / _maxHealth;
            _maxHealth = Mathf.Max(1f, newMax);
            _currentHealth = _maxHealth * ratio;
            OnHealthChanged?.Invoke(_currentHealth, _maxHealth);
        }

        /// <summary>
        /// Sets the passive regeneration rate (from Survival skill).
        /// </summary>
        public void SetRegenRate(float rate)
        {
            _regenRate = Mathf.Max(0, rate);
        }

        /// <summary>
        /// Resets health to full (for new runs).
        /// </summary>
        public void ResetHealth()
        {
            _isDead = false;
            _currentHealth = _maxHealth;
            OnHealthChanged?.Invoke(_currentHealth, _maxHealth);
        }

        private void Die()
        {
            _isDead = true;
            OnDeath?.Invoke();
            Debug.Log("PlayerHealth: Player has died.");

            // Notify game manager
            var gm = Core.GameManager.Instance;
            if (gm != null)
                gm.TriggerGameOver();
        }
    }
}
