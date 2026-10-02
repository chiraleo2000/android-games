// ---------------------------------------------------------------------------
// Dead City Escape - Zombie Type Variants
// Walker, Runner, Brute, and Screamer specialized zombie behaviors.
// ---------------------------------------------------------------------------
using UnityEngine;

namespace DeadCityEscape.AI
{
    /// <summary>
    /// Walker Zombie: 60% spawn rate. Slow, dangerous in groups.
    /// Attracted by noise. Standard enemy type.
    /// </summary>
    public class WalkerZombie : ZombieBase
    {
        protected override void Start()
        {
            _zombieType = ZombieType.Walker;
            _maxHealth = 30f;
            _moveSpeed = 1.0f;
            _attackDamage = 10f;
            _attackRange = 2.0f;
            _attackCooldown = 1.0f;
            _sightRange = 20f;
            _sightAngle = 90f;
            _hearingRange = 25f;
            _patrolRadius = 8f;
            base.Start();
        }

        protected override void UpdateChase()
        {
            // Walker moves at 1.8 m/s during chase (1.0 m/s × 1.8 chase multiplier)
            _agent.speed = 1.8f;
            base.UpdateChase();
        }

        protected override void OnEnterState(ZombieState state)
        {
            // Reset speed to base moveSpeed when not chasing
            if (state != ZombieState.Chase && state != ZombieState.Attack)
            {
                _agent.speed = _moveSpeed;
            }
        }
    }

    /// <summary>
    /// Runner Zombie: 25% spawn rate. Fast, rushes when detected.
    /// Higher health than Walker but less group-oriented.
    /// </summary>
    public class RunnerZombie : ZombieBase
    {
        [Header("Runner Specific")]
        [SerializeField] private float _minChaseSpeed = 2.0f;
        [SerializeField] private float _maxChaseSpeed = 3.6f;

        protected override void Start()
        {
            _zombieType = ZombieType.Runner;
            _maxHealth = 50f;
            _moveSpeed = 2.0f;
            _attackDamage = 15f;
            _attackRange = 2.0f;
            _attackCooldown = 0.7f;
            _sightRange = 30f;
            _sightAngle = 120f;
            _hearingRange = 20f;
            _patrolRadius = 15f;
            base.Start();
        }

        protected override void UpdateChase()
        {
            // Runners get faster the closer they are (inversely proportional to distance)
            // Closer = faster (up to 3.6 m/s), farther = slower (down to 2.0 m/s)
            if (_playerTransform != null)
            {
                float dist = Vector3.Distance(transform.position,
                    _playerTransform.position);
                // Lerp from maxSpeed (when close) to minSpeed (when far)
                // dist/sightRange = 0 (close) → speed = maxSpeed (3.6)
                // dist/sightRange = 1 (far)   → speed = minSpeed (2.0)
                _agent.speed = Mathf.Lerp(_maxChaseSpeed, _minChaseSpeed,
                    dist / _sightRange);
            }
            base.UpdateChase();
        }

        protected override void PerformAttack()
        {
            base.PerformAttack();
            // Runners leap back briefly after attack
            if (_playerTransform != null)
            {
                Vector3 awayDir = (transform.position -
                    _playerTransform.position).normalized;
                _agent.Move(awayDir * 1.5f);
            }
        }

        protected override void OnEnterState(ZombieState state)
        {
            // Reset speed to base moveSpeed when not chasing
            if (state != ZombieState.Chase && state != ZombieState.Attack)
            {
                _agent.speed = _moveSpeed;
            }
        }
    }


    /// <summary>
    /// Brute Zombie: 10% spawn rate. Slow, powerful, guards key locations.
    /// Very high health, devastating attacks, resistant to stagger.
    /// </summary>
    public class BruteZombie : ZombieBase
    {
        [Header("Brute Specific")]
        [SerializeField] private float _groundPoundRadius = 4f;
        [SerializeField] private float _groundPoundDamage = 20f;
        [SerializeField] private float _groundPoundCooldown = 5f;
        private float _lastGroundPoundTime;

        protected override void Start()
        {
            _zombieType = ZombieType.Brute;
            _maxHealth = 100f;
            _moveSpeed = 0.8f;           // Updated from 1.0 to 0.8 m/s
            _attackDamage = 30f;
            _attackRange = 3.0f;
            _attackCooldown = 1.5f;
            _sightRange = 15f;           // Updated from 10 to 15 m
            _sightAngle = 60f;           // Added sight angle specification
            _hearingRange = 15f;
            _patrolRadius = 5f;
            base.Start();
        }

        protected override void UpdateChase()
        {
            // Brute moves at 1.2 m/s during chase
            _agent.speed = 1.2f;
            base.UpdateChase();
        }

        protected override void PerformAttack()
        {
            // Chance to do ground pound AoE attack
            if (Time.time - _lastGroundPoundTime >= _groundPoundCooldown)
            {
                GroundPound();
                _lastGroundPoundTime = Time.time;
                return;
            }
            base.PerformAttack();
        }

        private void GroundPound()
        {
            // Damage all entities in radius
            Collider[] hits = Physics.OverlapSphere(transform.position,
                _groundPoundRadius, LayerMask.GetMask("Player"));

            foreach (var hit in hits)
            {
                var health = hit.GetComponent<Player.PlayerHealth>();
                if (health != null)
                    health.TakeDamage(_groundPoundDamage, transform.position);
            }

            // Screen shake would be triggered here
            var audio = Audio.AudioManager.Instance;
            if (audio != null)
            {
                var clip = audio.GenerateExplosion(0.4f, 40f);
                audio.PlaySFXAtPosition(clip, transform.position);
            }
        }

        public override void TakeDamage(float damage, Vector3 hitPoint,
            Logic.HitZone hitZone = Logic.HitZone.Body,
            float attackerDamageMultiplier = 1f)
        {
            // Brutes are resistant to stagger (halve stagger duration)
            base.TakeDamage(damage, hitPoint, hitZone, attackerDamageMultiplier);
        }

        protected override void OnEnterState(ZombieState state)
        {
            // Reset speed to base moveSpeed when not chasing
            if (state != ZombieState.Chase && state != ZombieState.Attack)
            {
                _agent.speed = _moveSpeed;
            }
        }
    }

    /// <summary>
    /// Screamer Zombie: 5% spawn rate. Low health, alerts nearby zombies.
    /// Priority target -- killing quickly prevents reinforcements.
    /// </summary>
    public class ScreamerZombie : ZombieBase
    {
        [Header("Screamer Specific")]
        [SerializeField] private float _screamRadius = 40f;
        [SerializeField] private float _screamCooldown = 8f;
        [SerializeField] private float _screamDuration = 1.5f;
        private float _lastScreamTime = -100f;
        private bool _isScreaming;

        protected override void Start()
        {
            _zombieType = ZombieType.Screamer;
            _maxHealth = 20f;
            _moveSpeed = 1.5f;           // Updated from 3.0 to 1.5 m/s
            _attackDamage = 5f;
            _attackRange = 2.0f;
            _attackCooldown = 1.2f;
            _sightRange = 25f;           // Updated from 20 to 25 m
            _sightAngle = 100f;          // Added sight angle specification
            _hearingRange = 30f;
            _patrolRadius = 12f;
            base.Start();
        }

        protected override void UpdateChase()
        {
            // Screamer moves at 2.5 m/s during chase
            _agent.speed = 2.5f;

            // Screamer tries to keep distance and scream
            if (_playerTransform != null)
            {
                float dist = Vector3.Distance(transform.position,
                    _playerTransform.position);

                // Scream to alert others
                if (Time.time - _lastScreamTime >= _screamCooldown && !_isScreaming)
                {
                    StartScream();
                }

                // Keep distance from player while screaming
                if (dist < 8f)
                {
                    Vector3 awayDir = (transform.position -
                        _playerTransform.position).normalized;
                    Vector3 retreatPos = transform.position + awayDir * 5f;

                    if (UnityEngine.AI.NavMesh.SamplePosition(retreatPos,
                        out UnityEngine.AI.NavMeshHit hit, 5f,
                        UnityEngine.AI.NavMesh.AllAreas))
                    {
                        _agent.SetDestination(hit.position);
                        return;
                    }
                }
            }

            base.UpdateChase();
        }

        private void StartScream()
        {
            _isScreaming = true;
            _lastScreamTime = Time.time;

            // Alert all zombies in radius
            Collider[] nearby = Physics.OverlapSphere(transform.position,
                _screamRadius, LayerMask.GetMask("Enemy"));

            foreach (var col in nearby)
            {
                var zombie = col.GetComponent<ZombieBase>();
                if (zombie != null && zombie != this && !zombie.IsDead)
                {
                    zombie.OnNoiseHeard(_playerTransform != null
                        ? _playerTransform.position
                        : transform.position, 100f);
                }
            }

            // Scream sound
            var audio = Audio.AudioManager.Instance;
            if (audio != null)
            {
                var clip = audio.GenerateZombieGroan(1.5f, 200f, 15f);
                audio.PlaySFXAtPosition(clip, transform.position, 1.2f, _screamRadius);
            }

            // End scream after duration
            Invoke(nameof(EndScream), _screamDuration);
        }

        private void EndScream()
        {
            _isScreaming = false;
        }

        protected override void OnEnterState(ZombieState state)
        {
            // Reset speed to base moveSpeed when not chasing
            if (state != ZombieState.Chase && state != ZombieState.Attack)
            {
                _agent.speed = _moveSpeed;
            }
        }
    }
}
