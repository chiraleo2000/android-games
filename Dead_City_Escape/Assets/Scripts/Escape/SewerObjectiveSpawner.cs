// ---------------------------------------------------------------------------
// Dead City Escape - Sewer Objective Spawner
// Spawns all necessary objects for the sewer escape route.
// ---------------------------------------------------------------------------
using UnityEngine;

namespace DeadCityEscape.Escape
{
    /// <summary>
    /// Spawns sewer escape route objectives in the world.
    /// Creates lockpick pickup, sewer access interactions, torch pickup, and reinforced gate.
    /// Should be placed in the scene or instantiated by CityGenerator.
    /// Requirements: 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7
    /// </summary>
    public class SewerObjectiveSpawner : MonoBehaviour
    {
        [Header("Prefabs")]
        [SerializeField] private GameObject _lockpickSetPrefab;
        [SerializeField] private GameObject _sewerAccessPrefab;
        [SerializeField] private GameObject _acetyleneTorchPrefab;
        [SerializeField] private GameObject _reinforcedGatePrefab;

        [Header("Spawn Configuration")]
        [SerializeField] private float _spawnRadius = 50f;
        [SerializeField] private Vector3 _zone3Offset = new Vector3(10f, 0f, 10f);
        [SerializeField] private Vector3 _zone7Offset = new Vector3(-10f, 0f, 20f);
        [SerializeField] private Vector3 _zone11Offset = new Vector3(20f, 0f, -10f);
        [SerializeField] private Vector3 _zone10TorchOffset = new Vector3(0f, 0f, 15f);
        [SerializeField] private Vector3 _zone15GateOffset = new Vector3(0f, 0f, 30f);

        private void Start()
        {
            SpawnSewerObjectives();
        }

        /// <summary>
        /// Spawns all sewer route objectives.
        /// </summary>
        public void SpawnSewerObjectives()
        {
            // 1. Spawn lockpick set pickup
            CreateLockpickSetPickup();

            // 2. Create 3 sewer access gate interactions (Zones 3, 7, 11)
            CreateSewerAccessGates();

            // 3. Spawn acetylene torch in Zone 10
            CreateAcetyleneTorchPickup();

            // 4. Create reinforced gate interaction in Zone 15
            CreateReinforcedGateInteraction();
        }

        private void CreateLockpickSetPickup()
        {
            Vector3 lockpickPos = GetRandomSpawnPosition();

            if (_lockpickSetPrefab != null)
            {
                Instantiate(_lockpickSetPrefab, lockpickPos, Quaternion.identity);
            }
            else
            {
                // Create simple lockpick set pickup
                GameObject lockpicks = GameObject.CreatePrimitive(PrimitiveType.Capsule);
                lockpicks.name = "LockpickSet";
                lockpicks.transform.position = lockpickPos;
                lockpicks.transform.localScale = new Vector3(0.2f, 0.3f, 0.2f);
                
                // Add LockpickSetPickup component
                lockpicks.AddComponent<LockpickSetPickup>();
                
                // Make it silver/gray for visibility
                var renderer = lockpicks.GetComponent<Renderer>();
                if (renderer != null)
                {
                    renderer.material.color = new Color(0.7f, 0.7f, 0.7f); // Silver
                }
            }

            Debug.Log("SewerSpawner: Created lockpick set pickup");
        }

        private void CreateSewerAccessGates()
        {
            // Create 3 sewer access gates in Zones 3, 7, 11
            CreateSewerAccessGate("Zone3", transform.position + _zone3Offset);
            CreateSewerAccessGate("Zone7", transform.position + _zone7Offset);
            CreateSewerAccessGate("Zone11", transform.position + _zone11Offset);

            Debug.Log("SewerSpawner: Created 3 sewer access gates (Zones 3, 7, 11)");
        }

        private void CreateSewerAccessGate(string zoneName, Vector3 position)
        {
            if (_sewerAccessPrefab != null)
            {
                var instance = Instantiate(_sewerAccessPrefab, position, Quaternion.identity);
                instance.name = $"SewerAccess_{zoneName}";
            }
            else
            {
                // Create simple sewer access gate
                GameObject gate = GameObject.CreatePrimitive(PrimitiveType.Cube);
                gate.name = $"SewerAccess_{zoneName}";
                gate.transform.position = position;
                gate.transform.localScale = new Vector3(2f, 2f, 0.3f);
                
                // Add SewerAccessInteraction component
                gate.AddComponent<SewerAccessInteraction>();
                
                // Make it dark green for visibility
                var renderer = gate.GetComponent<Renderer>();
                if (renderer != null)
                {
                    renderer.material.color = new Color(0f, 0.5f, 0f); // Dark green
                }
            }
        }

        private void CreateAcetyleneTorchPickup()
        {
            Vector3 torchPos = transform.position + _zone10TorchOffset;

            if (_acetyleneTorchPrefab != null)
            {
                Instantiate(_acetyleneTorchPrefab, torchPos, Quaternion.identity);
            }
            else
            {
                // Create simple acetylene torch pickup
                GameObject torch = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
                torch.name = "AcetyleneTorch";
                torch.transform.position = torchPos;
                torch.transform.localScale = new Vector3(0.3f, 0.6f, 0.3f);
                
                // Add AcetyleneTorchPickup component
                torch.AddComponent<AcetyleneTorchPickup>();
                
                // Make it orange/red for visibility (like a torch flame)
                var renderer = torch.GetComponent<Renderer>();
                if (renderer != null)
                {
                    renderer.material.color = new Color(1f, 0.4f, 0f); // Orange
                }
            }

            Debug.Log("SewerSpawner: Created acetylene torch pickup in Zone 10");
        }

        private void CreateReinforcedGateInteraction()
        {
            Vector3 gatePos = transform.position + _zone15GateOffset;

            if (_reinforcedGatePrefab != null)
            {
                Instantiate(_reinforcedGatePrefab, gatePos, Quaternion.identity);
            }
            else
            {
                // Create simple reinforced gate
                GameObject gate = GameObject.CreatePrimitive(PrimitiveType.Cube);
                gate.name = "ReinforcedGate";
                gate.transform.position = gatePos;
                gate.transform.localScale = new Vector3(3f, 2.5f, 0.5f);
                
                // Add ReinforcedGateInteraction component
                gate.AddComponent<ReinforcedGateInteraction>();
                
                // Make it dark gray/metallic for visibility
                var renderer = gate.GetComponent<Renderer>();
                if (renderer != null)
                {
                    renderer.material.color = new Color(0.3f, 0.3f, 0.3f); // Dark gray
                }
            }

            Debug.Log("SewerSpawner: Created reinforced gate in Zone 15");
        }

        private Vector3 GetRandomSpawnPosition()
        {
            // Random position within spawn radius
            Vector2 randomCircle = Random.insideUnitCircle * _spawnRadius;
            Vector3 spawnPos = transform.position + new Vector3(randomCircle.x, 0, randomCircle.y);
            
            // Raycast down to find ground
            if (Physics.Raycast(spawnPos + Vector3.up * 10f, Vector3.down, out RaycastHit hit, 20f))
            {
                spawnPos = hit.point + Vector3.up * 0.5f;
            }

            return spawnPos;
        }

        private void OnDrawGizmosSelected()
        {
            Gizmos.color = Color.green;
            Gizmos.DrawWireSphere(transform.position, _spawnRadius);
            
            // Draw sewer access gate positions
            Gizmos.color = Color.green;
            Gizmos.DrawWireCube(transform.position + _zone3Offset, new Vector3(2f, 2f, 0.3f));
            Gizmos.DrawWireCube(transform.position + _zone7Offset, new Vector3(2f, 2f, 0.3f));
            Gizmos.DrawWireCube(transform.position + _zone11Offset, new Vector3(2f, 2f, 0.3f));
            
            // Draw torch position
            Gizmos.color = Color.yellow;
            Gizmos.DrawWireSphere(transform.position + _zone10TorchOffset, 1f);
            
            // Draw reinforced gate position
            Gizmos.color = Color.red;
            Gizmos.DrawWireCube(transform.position + _zone15GateOffset, new Vector3(3f, 2.5f, 0.5f));
        }
    }
}
