// ---------------------------------------------------------------------------
// Dead City Escape - Zombie Base Class
// Base class for all zombie types with shared behavior state machine.
// Implements perception (sight + hearing), pathfinding, and combat.
// ---------------------------------------------------------------------------
using System;
using UnityEngine;
using UnityEngine.AI;

namespace DeadCityEscape.AI
{
    /// <summary>
    /// Zombie behavior states matching the GDD specification.
    /// </summary>
    public enum ZombieState
    {
        Idle,
        Patrol,
        Investigate,
        Chase,
        Attack,
        Search,
        Staggered,
        Dead
    }

    /// <summary>
    /// Zombie type enumeration with spawn weights.
    /// </summary>
    public enum ZombieType
    {
        Walker,     // 60% spawn rate
        Runner,     // 25% spawn rate
        Brute,      // 10% spawn rate
        Screamer    //  5% spawn rate
    }

    /// <summary>
    /// Base class for all zombie AI. Implements shared perception,
    /// state machine, pathfinding, and damage response.
    /// Zombie variants override specific behaviors.
    /// </summary>
    [RequireComponent(typeof(NavMeshAgent))]
    [RequireComponent(typeof(Collider))]
    public abstract class ZombieBase : MonoBehaviour
    {
        [Header("Type")]
        [SerializeField] protected ZombieType _zombieType = ZombieType.Walker;

        [Header("Stats")]
        [SerializeField] protected float _maxHealth = 30f;
        [SerializeField] protected float _moveSpeed = 1.5f;
        [SerializeField] protected float _attackDamage = 10f;
        [SerializeField] protected float _attackRange = 2.0f;
        [SerializeField] protected float _attackCooldown = 1.0f;

        [Header("Perception")]
        [SerializeField] protected float _sightRange = 15f;
        [SerializeField] protected float _sightAngle = 120f;
        [SerializeField] protected float _hearingRange = 25f;
        [SerializeField] protected float _investigateTimeout = 8f;
        [SerializeField] protected float _searchTimeout = 12f;
        [SerializeField] protected float _losLostTimeout = 3f;  // Time before transitioning from Chase to Search

        [Header("Patrol")]
        [SerializeField] protected float _patrolRadius = 10f;
        [SerializeField] protected float _patrolWaitTime = 3f;

        [Header("Stagger")]
        [SerializeField] protected float _staggerDuration = 0.5f;

        // Components
        protected NavMeshAgent _agent;
        protected Animator _animator;
        protected Collider _collider;

        // State
        protected ZombieState _currentState = ZombieState.Idle;
        protected float _currentHealth;
        protected float _lastAttackTime;
        protected float _stateTimer;
        protected float _losLostTimer;  // Tracks how long we've lost line of sight
        protected Vector3 _lastKnownPlayerPos;
        protected Vector3 _investigatePoint;
        protected Vector3 _spawnPosition;
        protected bool _hasLineOfSight;
        protected Transform _playerTransform;
        protected Transform _eyePosition;  // For line-of-sight raycasts

        // Public state
        public ZombieType Type => _zombieType;
        public ZombieState CurrentState => _currentState;
        public float Health => _currentHealth;
        public float HealthPercent => _currentHealth / _maxHealth;
        public bool IsDead => _currentState == ZombieState.Dead;
        public bool IsAlert => _currentState == ZombieState.Chase ||
                               _currentState == ZombieState.Attack;

        // Events
        public event Action<ZombieBase> OnDeath;
        public event Action<ZombieBase, float> OnDamaged;
        public event Action<ZombieBase, ZombieState> OnStateChanged;

        protected virtual void Start()
        {
            _agent = GetComponent<NavMeshAgent>();
            _animator = GetComponentInChildren<Animator>();
            _collider = GetComponent<Collider>();

            _agent.speed = _moveSpeed;
            _agent.stoppingDistance = _attackRange * 0.8f;
            _agent.angularSpeed = 360f;

            _currentHealth = _maxHealth;
            _spawnPosition = transform.position;

            // Create eye position for line-of-sight checks
            GameObject eyeObj = new GameObject("EyePosition");
            eyeObj.transform.SetParent(transform);
            eyeObj.transform.localPosition = new Vector3(0, 1.6f, 0);  // Approximate eye height
            _eyePosition = eyeObj.transform;

            // Find player
            var player = FindAnyObjectByType<Player.PlayerController>();
            if (player != null)
                _playerTransform = player.transform;

            TransitionToState(ZombieState.Idle);
        }

        protected virtual void Update()
        {
            if (IsDead) return;

            UpdatePerception();
            UpdateState();
            UpdateAnimation();
        }

        // -- Perception --

        protected virtual void UpdatePerception()
        {
            if (_playerTransform == null) return;

            bool hadLineOfSight = _hasLineOfSight;
            _hasLineOfSight = HasLoS(_playerTransform.position);

            if (_hasLineOfSight)
            {
                _lastKnownPlayerPos = _playerTransform.position;
                _losLostTimer = 0f;
            }
            else if (hadLineOfSight)
            {
                // Just lost line of sight, start tracking
                _losLostTimer += Time.deltaTime;
            }
        }

        /// <summary>
        /// Checks if this zombie has line-of-sight to the target position.
        /// Requirements: 6.2 - sight range, sight angle, raycast
        /// </summary>
        protected bool HasLoS(Vector3 targetPosition)
        {
            if (_eyePosition == null) return false;

            Vector3 toTarget = targetPosition - _eyePosition.position;
            float distance = toTarget.magnitude;

            // Check range
            if (distance > _sightRange) return false;

            // Check angle
            float angle = Vector3.Angle(transform.forward, toTarget.normalized);
            if (angle > _sightAngle * 0.5f) return false;

            // Raycast for occlusion
            if (Physics.Raycast(_eyePosition.position, toTarget.normalized, 
                out RaycastHit hit, distance))
            {
                // Check if we hit the player or a child of the player
                return hit.transform == _playerTransform ||
                       hit.transform.IsChildOf(_playerTransform);
            }

            return true;
        }

        // -- State Machine --

        /// <summary>
        /// Main state machine update. Switches on CurrentState.
        /// Requirements: 6.1 - State machine with all 8 states
        /// </summary>
        protected virtual void UpdateState()
        {
            _stateTimer += Time.deltaTime;

            switch (_currentState)
            {
                case ZombieState.Idle:
                    UpdateIdle();
                    break;
                case ZombieState.Patrol:
                    UpdatePatrol();
                    break;
                case ZombieState.Investigate:
                    UpdateInvestigate();
                    break;
                case ZombieState.Chase:
                    UpdateChase();
                    break;
                case ZombieState.Attack:
                    UpdateAttack();
                    break;
                case ZombieState.Search:
                    UpdateSearch();
                    break;
                case ZombieState.Staggered:
                    UpdateStaggered();
                    break;
                case ZombieState.Dead:
                    // No update needed for dead state
                    break;
            }
        }

        protected virtual void UpdateIdle()
        {
            // Requirement 6.2: Transition to Chase on line-of-sight
            if (_hasLineOfSight)
            {
                TransitionToState(ZombieState.Chase);
                return;
            }

            // Transition to patrol after waiting
            if (_stateTimer > _patrolWaitTime)
                TransitionToState(ZombieState.Patrol);
        }

        protected virtual void UpdatePatrol()
        {
            // Requirement 6.2: Transition to Chase on line-of-sight
            if (_hasLineOfSight)
            {
                TransitionToState(ZombieState.Chase);
                return;
            }

            // Continue patrolling
            if (!_agent.hasPath || _agent.remainingDistance < 0.5f)
            {
                Vector3 randomDir = UnityEngine.Random.insideUnitSphere * _patrolRadius;
                randomDir += _spawnPosition;
                randomDir.y = _spawnPosition.y;

                if (NavMesh.SamplePosition(randomDir, out NavMeshHit hit, _patrolRadius, NavMesh.AllAreas))
                    _agent.SetDestination(hit.position);
                else
                    TransitionToState(ZombieState.Idle);
            }
        }

        protected virtual void UpdateInvestigate()
        {
            // Requirement 6.2: Transition to Chase on line-of-sight
            if (_hasLineOfSight)
            {
                TransitionToState(ZombieState.Chase);
                return;
            }

            _agent.SetDestination(_investigatePoint);

            if (_agent.remainingDistance < 1.0f || _stateTimer > _investigateTimeout)
                TransitionToState(ZombieState.Search);
        }

        protected virtual void UpdateChase()
        {
            if (_playerTransform == null)
            {
                TransitionToState(ZombieState.Search);
                return;
            }

            float distance = Vector3.Distance(transform.position, _playerTransform.position);

            // Transition to Attack when in range
            if (distance <= _attackRange)
            {
                TransitionToState(ZombieState.Attack);
                return;
            }

            // Requirement 6.4: Transition to Search after losing LoS for 3 seconds
            if (!_hasLineOfSight && _losLostTimer > 3f)
            {
                TransitionToState(ZombieState.Search);
                return;
            }

            // Chase the player
            _agent.SetDestination(_hasLineOfSight
                ? _playerTransform.position
                : _lastKnownPlayerPos);
        }

        protected virtual void UpdateAttack()
        {
            if (_playerTransform == null)
            {
                TransitionToState(ZombieState.Idle);
                return;
            }

            float distance = Vector3.Distance(transform.position, _playerTransform.position);

            // Return to chase if player moves away
            if (distance > _attackRange * 1.5f)
            {
                TransitionToState(ZombieState.Chase);
                return;
            }

            // Face player
            Vector3 lookDir = (_playerTransform.position - transform.position).normalized;
            lookDir.y = 0;
            if (lookDir.sqrMagnitude > 0.01f)
                transform.rotation = Quaternion.LookRotation(lookDir);

            // Attack on cooldown
            if (Time.time - _lastAttackTime >= _attackCooldown)
            {
                PerformAttack();
                _lastAttackTime = Time.time;
            }
        }

        protected virtual void UpdateSearch()
        {
            // Requirement 6.2: Transition to Chase on line-of-sight
            if (_hasLineOfSight)
            {
                TransitionToState(ZombieState.Chase);
                return;
            }

            // Requirement 6.5: Transition to Idle after 12 seconds
            if (_stateTimer > _searchTimeout)
            {
                TransitionToState(ZombieState.Idle);
                return;
            }

            // Wander near last known position
            if (!_agent.hasPath || _agent.remainingDistance < 1f)
            {
                Vector3 searchPoint = _lastKnownPlayerPos +
                    UnityEngine.Random.insideUnitSphere * 5f;
                searchPoint.y = transform.position.y;

                if (NavMesh.SamplePosition(searchPoint, out NavMeshHit hit,
                    5f, NavMesh.AllAreas))
                    _agent.SetDestination(hit.position);
            }
        }

        protected virtual void UpdateStaggered()
        {
            // Requirement 6.6: Disable NavMeshAgent movement during stagger
            // Exit stagger after duration
            if (_stateTimer >= _staggerDuration)
            {
                TransitionToState(_hasLineOfSight ? ZombieState.Chase : ZombieState.Search);
            }
        }

        protected void TransitionToState(ZombieState newState)
        {
            if (_currentState == newState) return;

            ZombieState oldState = _currentState;
            _currentState = newState;
            _stateTimer = 0f;

            // Handle state entry logic
            OnEnterState(newState);

            // Adjust agent speed and behavior per state
            switch (newState)
            {
                case ZombieState.Chase:
                    _agent.isStopped = false;
                    _agent.speed = _moveSpeed * 1.2f;
                    break;
                case ZombieState.Attack:
                    _agent.isStopped = true;
                    _agent.ResetPath();
                    break;
                case ZombieState.Search:
                    _agent.isStopped = false;
                    _agent.speed = _moveSpeed * 0.6f;
                    break;
                case ZombieState.Patrol:
                    _agent.isStopped = false;
                    _agent.speed = _moveSpeed * 0.5f;
                    break;
                case ZombieState.Staggered:
                    // Requirement 6.6: Disable NavMeshAgent movement
                    _agent.isStopped = true;
                    _agent.ResetPath();
                    break;
                case ZombieState.Idle:
                    _agent.isStopped = true;
                    _agent.ResetPath();
                    break;
                default:
                    _agent.isStopped = false;
                    _agent.speed = _moveSpeed;
                    break;
            }

            OnStateChanged?.Invoke(this, newState);
        }

        /// <summary>
        /// Called when entering a new state. Override in derived classes for custom behavior.
        /// </summary>
        protected abstract void OnEnterState(ZombieState state);

        // -- Combat --

        protected virtual void PerformAttack()
        {
            if (_playerTransform == null) return;

            float distance = Vector3.Distance(transform.position, _playerTransform.position);

            if (distance <= _attackRange)
            {
                var playerHealth = _playerTransform.GetComponent<Player.PlayerHealth>();
                if (playerHealth != null)
                {
                    playerHealth.TakeDamage(_attackDamage, transform.position);
                }

                // Play attack sound
                var audio = Audio.AudioManager.Instance;
                if (audio != null)
                {
                    var clip = audio.GenerateZombieGroan(0.5f, 100f, 8f);
                    audio.PlaySFXAtPosition(clip, transform.position);
                }
            }
        }

        /// <summary>
        /// Applies damage to this zombie.
        /// Requirements: 6.6 - Stagger logic when FinalDamage >= 15
        /// Requirements: 8.8 - Heavy Hitter skill applies 1.25× melee damage multiplier
        /// </summary>
        public virtual void TakeDamage(float damage, Vector3 hitPoint,
            Logic.HitZone hitZone = Logic.HitZone.Body,
            float attackerDamageMultiplier = 1f)
        {
            if (IsDead) return;

            var input = new Logic.DamageInput
            {
                BaseDamage = damage,
                Type = Logic.DamageType.Ranged,
                HitZone = hitZone,
                TargetHealth = _currentHealth,
                TargetMaxHealth = _maxHealth,
                TargetArmor = 0,
                AttackerDamageMultiplier = attackerDamageMultiplier,
                WeaponDamageMultiplier = 1f
            };

            var result = Logic.DamageCalculator.Calculate(input);
            _currentHealth -= result.FinalDamage;

            OnDamaged?.Invoke(this, result.FinalDamage);

            // Requirement 6.6: Stagger when FinalDamage >= 15
            // The DamageCalculator uses a threshold based on damage/maxHealth ratio
            // But the requirement explicitly states FinalDamage >= 15
            if (result.FinalDamage >= 15f)
            {
                TransitionToState(ZombieState.Staggered);
            }
            else if (_currentState == ZombieState.Idle || _currentState == ZombieState.Patrol)
            {
                // Alert to damage source
                _lastKnownPlayerPos = hitPoint;
                TransitionToState(ZombieState.Chase);
            }

            if (_currentHealth <= 0)
                Die();
        }

        /// <summary>
        /// Handles zombie death.
        /// Requirements: 6.11 - Invoke OnDeath, disable NavMeshAgent/Collider, call GameManager.RecordZombieKill
        /// </summary>
        protected virtual void Die()
        {
            TransitionToState(ZombieState.Dead);

            // Requirement 6.11: Disable NavMeshAgent
            if (_agent != null)
                _agent.enabled = false;

            // Requirement 6.11: Disable Collider
            if (_collider != null)
                _collider.enabled = false;

            // Requirement 6.11: Invoke OnDeath event
            OnDeath?.Invoke(this);

            // Requirement 6.11: Call GameManager.RecordZombieKill
            var gm = Core.GameManager.Instance;
            if (gm != null)
                gm.RecordZombieKill();

            // Destroy after delay (or return to pool)
            Destroy(gameObject, 5f);
        }

        // -- Animation --

        protected virtual void UpdateAnimation()
        {
            if (_animator == null) return;

            _animator.SetFloat("Speed", _agent.velocity.magnitude / _moveSpeed);
            _animator.SetBool("IsAttacking", _currentState == ZombieState.Attack);
            _animator.SetBool("IsDead", IsDead);
            _animator.SetBool("IsStaggered", _currentState == ZombieState.Staggered);
        }

        // -- Noise Response --

        /// <summary>
        /// Called by the noise event system when a loud event occurs nearby.
        /// Requirements: 6.3 - Transition to Investigate when noiseLevel > 5 within hearingRange
        /// </summary>
        public void OnNoiseHeard(Vector3 noisePosition, float noiseLevel)
                {
                    if (IsDead) return;

                    float distance = Vector3.Distance(transform.position, noisePosition);

                    // Requirement 6.3: Check hearing range
                    if (distance > _hearingRange) return;

                    // Requirement 11.7: Apply stealth noise modifier for Sewer route
                    // When player is crouching within 10m, multiply noise by 0.667 (50% higher threshold)
                    float effectiveNoise = noiseLevel;
                    var player = FindAnyObjectByType<Player.PlayerController>();
                    if (player != null && player.IsCrouching && distance < 10f)
                    {
                        effectiveNoise *= 0.667f;
                    }

                    // Requirement 6.3: Check noise level > 5
                    if (effectiveNoise <= 5f) return;

                    // Requirement 6.3: Transition to Investigate from Idle or Patrol
                    if (_currentState == ZombieState.Idle || _currentState == ZombieState.Patrol)
                    {
                        _investigatePoint = noisePosition;
                        _lastKnownPlayerPos = noisePosition;
                        TransitionToState(ZombieState.Investigate);
                    }
                    // Louder noises can interrupt other states
                    else if (effectiveNoise > 50f && _currentState != ZombieState.Chase && 
                             _currentState != ZombieState.Attack)
                    {
                        _investigatePoint = noisePosition;
                        _lastKnownPlayerPos = noisePosition;
                        TransitionToState(ZombieState.Investigate);
                    }
                }

    }
}
