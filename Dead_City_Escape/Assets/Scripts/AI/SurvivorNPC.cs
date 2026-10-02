// ---------------------------------------------------------------------------
// Dead City Escape - Survivor NPC
// Rescuable NPCs that follow player and optionally fight alongside.
// Awards +50 XP per rescue. Some will assist in combat.
// ---------------------------------------------------------------------------
using UnityEngine;
using UnityEngine.AI;

namespace DeadCityEscape.AI
{
    /// <summary>
    /// Survivor NPC that can be rescued by the player.
    /// Follows the player once rescued and may assist in combat.
    /// </summary>
    [RequireComponent(typeof(NavMeshAgent))]
    public class SurvivorNPC : MonoBehaviour
    {
        [Header("Survivor")]
        [SerializeField] private float _followDistance = 3f;
        [SerializeField] private float _maxFollowDistance = 15f;
        [SerializeField] private float _interactRange = 3f;
        [SerializeField] private bool _canFight = false;
        [SerializeField] private float _fightDamage = 8f;
        [SerializeField] private float _fightRange = 2.5f;
        [SerializeField] private float _fightCooldown = 2f;
        [SerializeField] private float _health = 50f;

        private NavMeshAgent _agent;
        private Transform _playerTransform;
        private bool _isRescued;
        private bool _isDead;
        private float _lastFightTime;

        public bool IsRescued => _isRescued;
        public bool IsDead => _isDead;
        public bool CanFight => _canFight;

        private void Start()
        {
            _agent = GetComponent<NavMeshAgent>();
            _agent.speed = 4f;
            _agent.stoppingDistance = _followDistance;

            var player = FindAnyObjectByType<Player.PlayerController>();
            if (player != null)
                _playerTransform = player.transform;
        }

        private void Update()
        {
            if (_isDead || !_isRescued || _playerTransform == null) return;

            FollowPlayer();

            if (_canFight)
                UpdateCombat();
        }

        /// <summary>
        /// Called when the player interacts with this survivor.
        /// </summary>
        public void Rescue()
        {
            if (_isRescued || _isDead) return;

            _isRescued = true;

            var gm = Core.GameManager.Instance;
            if (gm != null)
                gm.RecordSurvivorRescue();

            Debug.Log("SurvivorNPC: Survivor rescued!");
        }

        /// <summary>
        /// Checks if the player is close enough to interact.
        /// </summary>
        public bool CanInteract()
        {
            if (_isRescued || _isDead || _playerTransform == null) return false;
            return Vector3.Distance(transform.position,
                _playerTransform.position) <= _interactRange;
        }

        private void FollowPlayer()
        {
            float dist = Vector3.Distance(transform.position,
                _playerTransform.position);

            if (dist > _maxFollowDistance)
            {
                // Teleport near player if too far
                Vector3 nearPlayer = _playerTransform.position -
                    _playerTransform.forward * _followDistance;

                if (NavMesh.SamplePosition(nearPlayer, out NavMeshHit hit,
                    5f, NavMesh.AllAreas))
                {
                    _agent.Warp(hit.position);
                }
            }
            else if (dist > _followDistance)
            {
                _agent.SetDestination(_playerTransform.position);
            }
        }

        private void UpdateCombat()
        {
            if (Time.time - _lastFightTime < _fightCooldown) return;

            // Find nearest zombie
            Collider[] enemies = Physics.OverlapSphere(transform.position,
                _fightRange, LayerMask.GetMask("Enemy"));

            foreach (var col in enemies)
            {
                var zombie = col.GetComponent<ZombieBase>();
                if (zombie != null && !zombie.IsDead)
                {
                    zombie.TakeDamage(_fightDamage, transform.position);
                    _lastFightTime = Time.time;
                    break;
                }
            }
        }

        /// <summary>
        /// Applies damage to this survivor.
        /// </summary>
        public void TakeDamage(float damage)
        {
            if (_isDead) return;
            _health -= damage;
            if (_health <= 0)
            {
                _isDead = true;
                _agent.enabled = false;
                Destroy(gameObject, 5f);
            }
        }
    }
}
