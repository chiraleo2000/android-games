// ---------------------------------------------------------------------------
// Dead City Escape - Zombie Spawner / Spawn Director
// Manages zombie spawning based on zone threat, player noise, and time.
// Implements the adaptive intensity director from the GDD.
// Requirements: 6.12, 14.7
// ---------------------------------------------------------------------------
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;
using DeadCityEscape.Logic;

namespace DeadCityEscape.AI
{
    /// <summary>
    /// Manages zombie spawning and population control.
    /// Adjusts intensity based on player noise, time-in-run, and zone threat.
    /// Requirements: 6.12 - Spawn director with intensity scaling
    /// Requirements: 14.7 - NavMeshAgent cap enforcement (12 Lite, 20 Standard)
    /// </summary>
    public class ZombieSpawner : MonoBehaviour
    {
        [Header("Spawn Settings")]
        [SerializeField] private float _spawnInterval = 5f;
        [SerializeField] private float _minSpawnDistance = 15f;
        [SerializeField] private float _maxSpawnDistance = 40f;
        [SerializeField] private float _despawnDistance = 60f;
        [SerializeField] private float _agentDisableDistance = 40f;

        [Header("Zombie Prefabs")]
        [SerializeField] private GameObject _walkerPrefab;
        [SerializeField] private GameObject _runnerPrefab;
        [SerializeField] private GameObject _brutePrefab;
        [SerializeField] private GameObject _screamerPrefab;

        [Header("Intensity")]
        [SerializeField] private int _baseCount = 3;
        [SerializeField] private float _intensityRampPerMinute = 1f;
        [SerializeField] private int _maxDesiredZombies = 15;

        // Spawn weights from GDD: Walker 60%, Runner 25%, Brute 10%, Screamer 5%
        private static readonly float[] SpawnWeights = { 0.60f, 0.25f, 0.10f, 0.05f };

        private readonly List<ZombieBase> _activeZombies = new List<ZombieBase>();
        private Transform _playerTransform;
        private float _spawnTimer;
        private SeededRNG _spawnRng;
        private int _maxActiveNavMeshAgents;

        public int ActiveZombieCount => _activeZombies.Count;
        public int MaxActiveNavMeshAgents => _maxActiveNavMeshAgents;

        private void Start()
        {
            // Requirement 14.7: Set NavMeshAgent cap based on quality level
            // QualityLevel 0 (Lite) = 12 agents, QualityLevel 1+ (Standard) = 20 agents
            int qualityLevel = QualitySettings.GetQualityLevel();
            _maxActiveNavMeshAgents = qualityLevel == 0 ? 12 : 20;

            Debug.Log($"ZombieSpawner: NavMeshAgent cap set to {_maxActiveNavMeshAgents} (QualityLevel {qualityLevel})");

            var gm = Core.GameManager.Instance;
            if (gm != null && gm.GameRNG != null)
                _spawnRng = gm.GameRNG.Fork(777);
            else
                _spawnRng = new SeededRNG(42);

            var player = FindAnyObjectByType<Player.PlayerController>();
            if (player != null)
                _playerTransform = player.transform;
        }

        private void Update()
        {
            if (_playerTransform == null) return;

            var gm = Core.GameManager.Instance;
            if (gm == null || gm.CurrentPhase != Core.GamePhase.Playing) return;

            UpdateSpawning();
            ManageNavMeshAgents();
            CleanupDead();
            DespawnFarZombies();
        }

        /// <summary>
        /// Requirement 6.12: Spawn director with intensity scaling by RunTimer
        /// Calculates desired zombie count based on time elapsed in run
        /// </summary>
        private int CalculateDesiredZombieCount()
        {
            var gm = Core.GameManager.Instance;
            if (gm == null) return _baseCount;

            // Requirement 6.12: Increase spawn intensity as RunTimer increases
            float minutesElapsed = gm.RunTimer / 60f;
            int desiredCount = _baseCount + Mathf.FloorToInt(minutesElapsed * _intensityRampPerMinute);

            // Cap at max desired zombies
            return Mathf.Min(desiredCount, _maxDesiredZombies);
        }

        private void UpdateSpawning()
        {
            _spawnTimer += Time.deltaTime;

            if (_spawnTimer < _spawnInterval) return;

            _spawnTimer = 0f;

            // Calculate desired zombie count based on run time
            int desiredCount = CalculateDesiredZombieCount();
            int currentCount = _activeZombies.Count;

            // Spawn deficit
            if (currentCount < desiredCount)
            {
                int deficit = desiredCount - currentCount;
                SpawnWave(deficit, _playerTransform.position, _maxSpawnDistance);
            }
        }

        /// <summary>
        /// Requirement 6.12: SpawnWave with type distribution
        /// Walker 60%, Runner 25%, Brute 10%, Screamer 5%
        /// Requirement 14.7: Enforce max active NavMeshAgent cap
        /// </summary>
        public void SpawnWave(int intensity, Vector3 center, float radius)
        {
            if (intensity <= 0) return;

            for (int i = 0; i < intensity; i++)
            {
                // Requirement 14.7: Enforce NavMeshAgent cap
                int activeAgentCount = CountActiveNavMeshAgents();
                if (activeAgentCount >= _maxActiveNavMeshAgents)
                {
                    Debug.Log($"ZombieSpawner: NavMeshAgent cap reached ({activeAgentCount}/{_maxActiveNavMeshAgents}), skipping spawn");
                    break;
                }

                SpawnZombie(center, radius);
            }
        }

        /// <summary>
        /// Counts currently active NavMeshAgents on zombies
        /// </summary>
        private int CountActiveNavMeshAgents()
        {
            int count = 0;
            foreach (var zombie in _activeZombies)
            {
                if (zombie != null && zombie.TryGetComponent<NavMeshAgent>(out var agent))
                {
                    if (agent.enabled)
                        count++;
                }
            }
            return count;
        }

        /// <summary>
        /// Requirement 14.7: Disable agents on Idle zombies >40 m from player
        /// This manages the NavMeshAgent cap by disabling agents on distant idle zombies
        /// </summary>
        private void ManageNavMeshAgents()
        {
            if (_playerTransform == null) return;

            foreach (var zombie in _activeZombies)
            {
                if (zombie == null) continue;

                if (!zombie.TryGetComponent<NavMeshAgent>(out var agent))
                    continue;

                float distance = Vector3.Distance(zombie.transform.position, _playerTransform.position);

                // Requirement 14.7: Disable agents on Idle zombies >40 m from player
                if (zombie.CurrentState == ZombieState.Idle && distance > _agentDisableDistance)
                {
                    if (agent.enabled)
                    {
                        agent.enabled = false;
                    }
                }
                // Re-enable agents when zombie becomes active or gets closer
                else if (!agent.enabled && (zombie.CurrentState != ZombieState.Idle || distance <= _agentDisableDistance))
                {
                    // Only re-enable if we haven't hit the cap
                    int activeCount = CountActiveNavMeshAgents();
                    if (activeCount < _maxActiveNavMeshAgents)
                    {
                        agent.enabled = true;
                    }
                }
            }
        }

        private void SpawnZombie(Vector3 center, float radius)
        {
            // Requirement 6.12: Choose type based on weighted spawn rates
            // Walker 60%, Runner 25%, Brute 10%, Screamer 5%
            int typeIndex = _spawnRng.WeightedChoice(SpawnWeights);
            ZombieType type = (ZombieType)typeIndex;

            // Find spawn position around center
            Vector3 spawnPos = FindSpawnPosition(center, radius);
            if (spawnPos == Vector3.zero) return;

            // Instantiate
            GameObject prefab = type switch
            {
                ZombieType.Walker => _walkerPrefab,
                ZombieType.Runner => _runnerPrefab,
                ZombieType.Brute => _brutePrefab,
                ZombieType.Screamer => _screamerPrefab,
                _ => _walkerPrefab
            };

            if (prefab == null)
            {
                Debug.LogWarning($"ZombieSpawner: No prefab for {type}");
                return;
            }

            var go = Instantiate(prefab, spawnPos,
                Quaternion.Euler(0, _spawnRng.NextFloat(0, 360), 0));
            var zombie = go.GetComponent<ZombieBase>();

            if (zombie != null)
            {
                zombie.OnDeath += OnZombieDeath;
                _activeZombies.Add(zombie);
            }
        }

        private Vector3 FindSpawnPosition(Vector3 center, float radius)
        {
            // Try multiple positions around the center
            for (int attempt = 0; attempt < 10; attempt++)
            {
                float angle = _spawnRng.NextFloat(0, 360) * Mathf.Deg2Rad;
                float distance = _spawnRng.NextFloat(_minSpawnDistance, Mathf.Min(_maxSpawnDistance, radius));

                Vector3 offset = new Vector3(
                    Mathf.Cos(angle) * distance,
                    0,
                    Mathf.Sin(angle) * distance
                );

                Vector3 candidate = center + offset;

                // Check if on NavMesh
                if (NavMesh.SamplePosition(candidate, out NavMeshHit hit, 5f, NavMesh.AllAreas))
                {
                    // Check if not visible to player (optional - spawn behind obstacles)
                    Vector3 toPlayer = _playerTransform.position - hit.position;
                    if (Physics.Raycast(hit.position + Vector3.up, toPlayer.normalized,
                        toPlayer.magnitude, LayerMask.GetMask("Environment")))
                    {
                        // Blocked by environment, good spawn spot
                        return hit.position;
                    }

                    // If no obstacles, still use this position (better than nothing)
                    return hit.position;
                }
            }

            return Vector3.zero;
        }

        private void OnZombieDeath(ZombieBase zombie)
        {
            zombie.OnDeath -= OnZombieDeath;
            _activeZombies.Remove(zombie);
        }

        private void CleanupDead()
        {
            _activeZombies.RemoveAll(z => z == null || z.IsDead);
        }

        private void DespawnFarZombies()
        {
            for (int i = _activeZombies.Count - 1; i >= 0; i--)
            {
                if (_activeZombies[i] == null) continue;

                float dist = Vector3.Distance(
                    _activeZombies[i].transform.position,
                    _playerTransform.position);

                if (dist > _despawnDistance && !_activeZombies[i].IsAlert)
                {
                    Destroy(_activeZombies[i].gameObject);
                    _activeZombies.RemoveAt(i);
                }
            }
        }

        /// <summary>
        /// Requirement 6.12: Broadcasts a noise event to all zombies in range.
        /// Range is determined by noiseLevel * 0.5 meters.
        /// </summary>
        public void BroadcastNoise(Vector3 position, float noiseLevel)
        {
            if (noiseLevel <= 0) return;

            // Requirement 6.12: Broadcast to all zombies within range
            // Range calculation: noiseLevel * 0.5 meters (from design doc)
            float range = noiseLevel * 0.5f;

            foreach (var zombie in _activeZombies)
            {
                if (zombie == null || zombie.IsDead) continue;

                float distance = Vector3.Distance(zombie.transform.position, position);
                if (distance <= range)
                {
                    zombie.OnNoiseHeard(position, noiseLevel);
                }
            }
        }

        /// <summary>
        /// Despawns all zombies (used for scene transitions).
        /// </summary>
        public void DespawnAll()
        {
            foreach (var zombie in _activeZombies)
            {
                if (zombie != null)
                    Destroy(zombie.gameObject);
            }
            _activeZombies.Clear();
        }
    }
}
