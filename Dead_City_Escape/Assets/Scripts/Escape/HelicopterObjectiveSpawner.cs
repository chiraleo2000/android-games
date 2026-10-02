// ---------------------------------------------------------------------------
// Dead City Escape - Helicopter Objective Spawner
// Spawns all necessary objects for the helicopter escape route.
// ---------------------------------------------------------------------------
using UnityEngine;

namespace DeadCityEscape.Escape
{
    /// <summary>
    /// Spawns helicopter escape route objectives in the world.
    /// Creates POI triggers, fuel can pickups, and radio repair interaction.
    /// Should be placed in the scene or instantiated by CityGenerator.
    /// </summary>
    public class HelicopterObjectiveSpawner : MonoBehaviour
    {
        [Header("Prefabs")]
        [SerializeField] private GameObject _fuelCanPrefab;
        [SerializeField] private GameObject _radioTransmitterPrefab;

        [Header("Spawn Configuration")]
        [SerializeField] private int _fuelCanCount = 5;
        [SerializeField] private float _spawnRadius = 50f;

        private void Start()
        {
            SpawnHelicopterObjectives();
        }

        /// <summary>
        /// Spawns all helicopter route objectives.
        /// </summary>
        public void SpawnHelicopterObjectives()
        {
            // 1. Create RadioTower POI trigger for heli_find_helipad
            CreateRadioTowerTrigger();

            // 2. Spawn fuel cans scattered across zones
            SpawnFuelCans();

            // 3. Create radio repair interaction point
            CreateRadioRepairPoint();
        }

        private void CreateRadioTowerTrigger()
        {
            // Create a GameObject for the RadioTower POI trigger
            GameObject radioTower = new GameObject("RadioTower_POI");
            radioTower.transform.position = transform.position;
            
            var trigger = radioTower.AddComponent<POITrigger>();
            trigger.ObjectiveId = "heli_find_helipad";

            Debug.Log("HelicopterSpawner: Created RadioTower POI trigger");
        }

        private void SpawnFuelCans()
        {
            if (_fuelCanPrefab == null)
            {
                Debug.LogWarning("HelicopterSpawner: Fuel can prefab not assigned, creating simple pickups");
                CreateSimpleFuelCans();
                return;
            }

            for (int i = 0; i < _fuelCanCount; i++)
            {
                Vector3 spawnPos = GetRandomSpawnPosition();
                Instantiate(_fuelCanPrefab, spawnPos, Quaternion.identity);
            }

            Debug.Log($"HelicopterSpawner: Spawned {_fuelCanCount} fuel cans");
        }

        private void CreateSimpleFuelCans()
        {
            for (int i = 0; i < _fuelCanCount; i++)
            {
                Vector3 spawnPos = GetRandomSpawnPosition();
                GameObject fuelCan = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
                fuelCan.name = $"FuelCan_{i}";
                fuelCan.transform.position = spawnPos;
                fuelCan.transform.localScale = new Vector3(0.3f, 0.5f, 0.3f);
                
                // Add FuelCanPickup component
                fuelCan.AddComponent<FuelCanPickup>();
                
                // Make it red for visibility
                var renderer = fuelCan.GetComponent<Renderer>();
                if (renderer != null)
                {
                    renderer.material.color = Color.red;
                }
            }

            Debug.Log($"HelicopterSpawner: Created {_fuelCanCount} simple fuel cans");
        }

        private void CreateRadioRepairPoint()
        {
            Vector3 radioPos = transform.position + Vector3.forward * 10f;
            
            if (_radioTransmitterPrefab != null)
            {
                Instantiate(_radioTransmitterPrefab, radioPos, Quaternion.identity);
            }
            else
            {
                // Create simple radio repair point
                GameObject radio = GameObject.CreatePrimitive(PrimitiveType.Cube);
                radio.name = "RadioTransmitter";
                radio.transform.position = radioPos;
                radio.transform.localScale = new Vector3(1f, 1.5f, 0.5f);
                
                // Add RadioRepairInteraction component
                radio.AddComponent<RadioRepairInteraction>();
                
                // Make it blue for visibility
                var renderer = radio.GetComponent<Renderer>();
                if (renderer != null)
                {
                    renderer.material.color = Color.blue;
                }
            }

            Debug.Log("HelicopterSpawner: Created radio repair point");
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
        }
    }
}
