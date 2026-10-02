// ---------------------------------------------------------------------------
// Dead City Escape - Car Objective Spawner
// Spawns all necessary objects for the car escape route.
// ---------------------------------------------------------------------------
using UnityEngine;

namespace DeadCityEscape.Escape
{
    /// <summary>
    /// Spawns car escape route objectives in the world.
    /// Creates POI triggers, car key pickup, repair part pickups, and barricade interaction.
    /// Should be placed in the scene or instantiated by CityGenerator.
    /// Requirements: 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7
    /// </summary>
    public class CarObjectiveSpawner : MonoBehaviour
    {
        [Header("Prefabs")]
        [SerializeField] private GameObject _carKeyPrefab;
        [SerializeField] private GameObject _batteryPrefab;
        [SerializeField] private GameObject _tirePrefab;
        [SerializeField] private GameObject _fuelPrefab;
        [SerializeField] private GameObject _barricadePrefab;

        [Header("Spawn Configuration")]
        [SerializeField] private float _spawnRadius = 50f;
        [SerializeField] private Vector3 _policeStationOffset = new Vector3(20f, 0f, 0f);
        [SerializeField] private Vector3 _barricadeOffset = new Vector3(0f, 0f, 30f);

        private void Start()
        {
            SpawnCarObjectives();
        }

        /// <summary>
        /// Spawns all car route objectives.
        /// </summary>
        public void SpawnCarObjectives()
        {
            // 1. Create ParkingGarage POI trigger for car_find_vehicle
            CreateParkingGarageTrigger();

            // 2. Create car key pickup at PoliceStation
            CreateCarKeyPickup();

            // 3. Spawn 3 repair parts (battery, tire, fuel)
            SpawnRepairParts();

            // 4. Create barricade interaction point
            CreateBarricadeInteraction();

            // 5. Set up PoliceStation as high-threat zone
            SetupPoliceStationThreat();
        }

        private void CreateParkingGarageTrigger()
        {
            // Create a GameObject for the ParkingGarage POI trigger
            GameObject parkingGarage = new GameObject("ParkingGarage_POI");
            parkingGarage.transform.position = transform.position;
            
            var trigger = parkingGarage.AddComponent<POITrigger>();
            trigger.ObjectiveId = "car_find_vehicle";

            Debug.Log("CarSpawner: Created ParkingGarage POI trigger");
        }

        private void CreateCarKeyPickup()
        {
            Vector3 keyPos = transform.position + _policeStationOffset;

            if (_carKeyPrefab != null)
            {
                Instantiate(_carKeyPrefab, keyPos, Quaternion.identity);
            }
            else
            {
                // Create simple car key pickup
                GameObject carKey = GameObject.CreatePrimitive(PrimitiveType.Cube);
                carKey.name = "CarKey";
                carKey.transform.position = keyPos;
                carKey.transform.localScale = new Vector3(0.3f, 0.1f, 0.5f);
                
                // Add CarKeyPickup component
                carKey.AddComponent<CarKeyPickup>();
                
                // Make it yellow for visibility
                var renderer = carKey.GetComponent<Renderer>();
                if (renderer != null)
                {
                    renderer.material.color = Color.yellow;
                }
            }

            Debug.Log("CarSpawner: Created car key pickup at PoliceStation");
        }

        private void SpawnRepairParts()
        {
            // Spawn battery
            SpawnRepairPart(CarRepairPartPickup.RepairPartType.Battery, _batteryPrefab, Color.green);
            
            // Spawn tire
            SpawnRepairPart(CarRepairPartPickup.RepairPartType.Tire, _tirePrefab, Color.black);
            
            // Spawn fuel
            SpawnRepairPart(CarRepairPartPickup.RepairPartType.Fuel, _fuelPrefab, Color.red);

            Debug.Log("CarSpawner: Spawned 3 repair parts (battery, tire, fuel)");
        }

        private void SpawnRepairPart(CarRepairPartPickup.RepairPartType partType, GameObject prefab, Color fallbackColor)
        {
            Vector3 spawnPos = GetRandomSpawnPosition();

            if (prefab != null)
            {
                var instance = Instantiate(prefab, spawnPos, Quaternion.identity);
                var pickup = instance.GetComponent<CarRepairPartPickup>();
                if (pickup != null)
                {
                    pickup.PartType = partType;
                }
            }
            else
            {
                // Create simple repair part pickup
                PrimitiveType primitiveType = partType switch
                {
                    CarRepairPartPickup.RepairPartType.Battery => PrimitiveType.Cube,
                    CarRepairPartPickup.RepairPartType.Tire => PrimitiveType.Cylinder,
                    CarRepairPartPickup.RepairPartType.Fuel => PrimitiveType.Capsule,
                    _ => PrimitiveType.Cube
                };

                GameObject part = GameObject.CreatePrimitive(primitiveType);
                part.name = $"RepairPart_{partType}";
                part.transform.position = spawnPos;
                part.transform.localScale = new Vector3(0.4f, 0.4f, 0.4f);
                
                // Add CarRepairPartPickup component
                var pickup = part.AddComponent<CarRepairPartPickup>();
                pickup.PartType = partType;
                
                // Set color for visibility
                var renderer = part.GetComponent<Renderer>();
                if (renderer != null)
                {
                    renderer.material.color = fallbackColor;
                }
            }
        }

        private void CreateBarricadeInteraction()
        {
            Vector3 barricadePos = transform.position + _barricadeOffset;

            if (_barricadePrefab != null)
            {
                Instantiate(_barricadePrefab, barricadePos, Quaternion.identity);
            }
            else
            {
                // Create simple barricade
                GameObject barricade = GameObject.CreatePrimitive(PrimitiveType.Cube);
                barricade.name = "Barricade";
                barricade.transform.position = barricadePos;
                barricade.transform.localScale = new Vector3(3f, 1.5f, 0.5f);
                
                // Add BarricadeInteraction component
                barricade.AddComponent<BarricadeInteraction>();
                
                // Make it orange for visibility
                var renderer = barricade.GetComponent<Renderer>();
                if (renderer != null)
                {
                    renderer.material.color = new Color(1f, 0.5f, 0f); // Orange
                }
            }

            Debug.Log("CarSpawner: Created barricade interaction point");
        }

        private void SetupPoliceStationThreat()
        {
            // Requirement 10.7: PoliceStation designated as ThreatLevel.Extreme with 3 zombies
            // This would typically be handled by the ZombieSpawner and CityGenerator
            // For now, we'll spawn a marker that the ZombieSpawner can detect
            
            Vector3 policeStationPos = transform.position + _policeStationOffset;
            GameObject threatMarker = new GameObject("PoliceStation_ThreatZone");
            threatMarker.transform.position = policeStationPos;
            
            // Add a component that ZombieSpawner can detect
            var threatZone = threatMarker.AddComponent<ThreatZone>();
            threatZone.ThreatLevel = Logic.ThreatLevel.Extreme;
            threatZone.MinZombieCount = 3;
            threatZone.ThreatRadius = 30f;

            Debug.Log("CarSpawner: Set up PoliceStation as ThreatLevel.Extreme zone");
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
            Gizmos.color = Color.cyan;
            Gizmos.DrawWireSphere(transform.position, _spawnRadius);
            
            // Draw police station position
            Gizmos.color = Color.red;
            Gizmos.DrawWireSphere(transform.position + _policeStationOffset, 5f);
            
            // Draw barricade position
            Gizmos.color = Color.yellow;
            Gizmos.DrawWireCube(transform.position + _barricadeOffset, new Vector3(3f, 1.5f, 0.5f));
        }
    }

    /// <summary>
    /// Marks a zone as a high-threat area for zombie spawning.
    /// Used by ZombieSpawner to maintain minimum zombie count.
    /// Requirement: 10.7
    /// </summary>
    public class ThreatZone : MonoBehaviour
    {
        public Logic.ThreatLevel ThreatLevel = Logic.ThreatLevel.Extreme;
        public int MinZombieCount = 3;
        public float ThreatRadius = 30f;

        private void OnDrawGizmosSelected()
        {
            Gizmos.color = Color.red;
            Gizmos.DrawWireSphere(transform.position, ThreatRadius);
        }
    }
}
