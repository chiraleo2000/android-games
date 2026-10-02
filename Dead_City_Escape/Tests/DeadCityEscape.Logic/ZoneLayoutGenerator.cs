// ---------------------------------------------------------------------------
// Dead City Escape - Zone Layout Generator (Standalone .NET version)
// Procedural 4x4 city grid generator for .NET testing.
// ---------------------------------------------------------------------------
namespace DeadCityEscape.Logic
{
    public enum ThreatLevel { Low, Medium, High, Extreme }
    public enum POIType
    {
        None, GasStation, Hospital, PoliceStation, RadioTower,
        ParkingGarage, SewerAccess, Warehouse, Apartments,
        Supermarket, Church, School, FireStation
    }

    public struct BuildingFootprint
    {
        public float X, Z, Width, Depth;
        public int Floors;
        public bool IsRuined;
        public POIType PoiType;
    }

    public struct RoadSegment
    {
        public float StartX, StartZ, EndX, EndZ, Width;
    }

    public sealed class ZoneLayoutData
    {
        public int ZoneIndex;
        public int GridX, GridZ;
        public ThreatLevel Threat;
        public required BuildingFootprint[] Buildings;
        public required RoadSegment[] Roads;
        public required POIType[] AssignedPOIs;
    }

    /// <summary>
    /// Generates the 4x4 city grid layout from a seed.
    /// All 16 zones with buildings, roads, and POI assignments.
    /// </summary>
    public static class ZoneLayoutGenerator
    {
        public const int GridSize = 4;
        public const float ZoneWorldSize = 100f;

        /// <summary>
        /// Generates all 16 zones in a 4x4 grid with deterministic POI placement.
        /// Requirements: 1.2, 1.3, 1.4
        /// </summary>
        public static ZoneLayoutData[] GenerateAllZones(SeededRNG rng)
        {
            var zones = new ZoneLayoutData[GridSize * GridSize];

            // Step 1-3: Generate zones with threat levels using forked RNGs
            for (int z = 0; z < GridSize; z++)
            {
                for (int x = 0; x < GridSize; x++)
                {
                    int idx = z * GridSize + x;
                    zones[idx] = GenerateZone(idx, x, z, rng);
                }
            }

            // Force zone 0 (top-left) to Low threat as spawn zone
            zones[0].Threat = ThreatLevel.Low;

            // Step 4: Assign required POIs deterministically
            AssignRequiredPOIs(zones, rng);

            return zones;
        }

        private static ZoneLayoutData GenerateZone(int index, int gx, int gz, SeededRNG parentRng)
        {
            // Use rng.Fork() per zone for deterministic generation
            var zoneRng = parentRng.Fork();

            // Step 2: Assign ThreatLevel via weighted table
            // Low 40%, Medium 35%, High 20%, Extreme 5%
            float[] threatWeights = { 0.40f, 0.35f, 0.20f, 0.05f };
            int threatIndex = zoneRng.WeightedChoice(threatWeights);
            ThreatLevel threat = (ThreatLevel)threatIndex;

            // Step 5: Generate 3-8 BuildingFootprint entries
            int buildingCount = zoneRng.Next(3, 9); // 3-8 inclusive
            var buildings = new BuildingFootprint[buildingCount];
            for (int i = 0; i < buildingCount; i++)
            {
                // Zone-local coordinates (0-100)
                float localX = zoneRng.NextFloat(5, ZoneWorldSize - 20);
                float localZ = zoneRng.NextFloat(5, ZoneWorldSize - 20);
                
                buildings[i] = new BuildingFootprint
                {
                    X = localX,
                    Z = localZ,
                    Width = zoneRng.NextFloat(8, 25),
                    Depth = zoneRng.NextFloat(8, 20),
                    Floors = zoneRng.Next(1, 7), // 1-6 floors
                    IsRuined = zoneRng.NextFloat() < 0.2f,
                    PoiType = POIType.None
                };
            }

            // Step 5: Generate 2-4 RoadSegment entries
            int roadCount = zoneRng.Next(2, 5); // 2-4 inclusive
            var roads = new RoadSegment[roadCount];
            for (int i = 0; i < roadCount; i++)
            {
                // Generate roads within zone-local coordinates
                bool isHorizontal = zoneRng.NextFloat() < 0.5f;
                float offset = zoneRng.NextFloat(20, ZoneWorldSize - 20);
                
                if (isHorizontal)
                {
                    roads[i] = new RoadSegment
                    {
                        StartX = 0,
                        StartZ = offset,
                        EndX = ZoneWorldSize,
                        EndZ = offset,
                        Width = zoneRng.NextFloat(6, 10)
                    };
                }
                else
                {
                    roads[i] = new RoadSegment
                    {
                        StartX = offset,
                        StartZ = 0,
                        EndX = offset,
                        EndZ = ZoneWorldSize,
                        Width = zoneRng.NextFloat(6, 10)
                    };
                }
            }

            return new ZoneLayoutData
            {
                ZoneIndex = index,
                GridX = gx,
                GridZ = gz,
                Threat = threat,
                Buildings = buildings,
                Roads = roads,
                AssignedPOIs = Array.Empty<POIType>()
            };
        }

        private static void AssignRequiredPOIs(ZoneLayoutData[] zones, SeededRNG rng)
        {
            // Step 4: Distribute required POIs deterministically
            // RadioTower, ParkingGarage, PoliceStation, SewerAccess, GasStation, Hospital
            var requiredPOIs = new[]
            {
                POIType.RadioTower,
                POIType.ParkingGarage,
                POIType.PoliceStation,
                POIType.SewerAccess,
                POIType.GasStation,
                POIType.Hospital
            };

            foreach (var poi in requiredPOIs)
            {
                // Use WeightedChoice biased toward matching threat levels
                float[] zoneWeights = new float[zones.Length];
                
                for (int i = 0; i < zones.Length; i++)
                {
                    // Base weight
                    float weight = 1.0f;
                    
                    // Bias based on POI type and threat level
                    // PoliceStation → Extreme zones
                    if (poi == POIType.PoliceStation && zones[i].Threat == ThreatLevel.Extreme)
                        weight = 5.0f;
                    else if (poi == POIType.PoliceStation && zones[i].Threat == ThreatLevel.High)
                        weight = 2.0f;
                    
                    // Hospital, GasStation → Medium/High zones
                    else if ((poi == POIType.Hospital || poi == POIType.GasStation) && 
                             (zones[i].Threat == ThreatLevel.Medium || zones[i].Threat == ThreatLevel.High))
                        weight = 3.0f;
                    
                    // RadioTower → High/Extreme zones
                    else if (poi == POIType.RadioTower && 
                             (zones[i].Threat == ThreatLevel.High || zones[i].Threat == ThreatLevel.Extreme))
                        weight = 4.0f;
                    
                    // ParkingGarage, SewerAccess → any zone
                    else if (poi == POIType.ParkingGarage || poi == POIType.SewerAccess)
                        weight = 2.0f;
                    
                    // Reduce weight if zone already has a POI
                    if (zones[i].AssignedPOIs.Length > 0)
                        weight *= 0.1f;
                    
                    zoneWeights[i] = weight;
                }
                
                // Select zone using weighted choice
                int selectedZone = rng.WeightedChoice(zoneWeights);
                
                // Assign POI to the selected zone
                var existingPOIs = zones[selectedZone].AssignedPOIs;
                var newPOIs = new POIType[existingPOIs.Length + 1];
                Array.Copy(existingPOIs, newPOIs, existingPOIs.Length);
                newPOIs[existingPOIs.Length] = poi;
                zones[selectedZone].AssignedPOIs = newPOIs;
                
                // Assign to first building in zone
                if (zones[selectedZone].Buildings.Length > 0)
                {
                    zones[selectedZone].Buildings[0].PoiType = poi;
                }
            }
        }
    }
}
