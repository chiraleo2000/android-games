// ---------------------------------------------------------------------------
// Dead City Escape - Zone Layout Generator
// Pure C# procedural city zone layout algorithm.
// Generates 16 zones with roads, buildings, and POI placement.
// ---------------------------------------------------------------------------
using System;
using System.Collections.Generic;

namespace DeadCityEscape.Logic
{
    /// <summary>
    /// Possible POI types that can be placed in zones.
    /// </summary>
    public enum POIType
    {
        None,
        PoliceStation,
        Hospital,
        GasStation,
        ParkingGarage,
        RadioTower,
        Helipad,
        SewerAccess,
        ArmoryCache,
        Warehouse,
        Apartment,
        Office,
        Store,
        Bar,
        Church,
        School,
        Factory
    }

    /// <summary>
    /// Threat level for a zone, affecting zombie density and loot quality.
    /// </summary>
    public enum ThreatLevel
    {
        Low,
        Medium,
        High,
        Extreme
    }

    /// <summary>
    /// Represents a building footprint in the city grid.
    /// </summary>
    public struct BuildingFootprint
    {
        public int X;
        public int Z;
        public int Width;
        public int Depth;
        public int Floors;
        public int Seed;
        public bool IsRuined;
        public POIType PoiType;
        public int RecipeSeed => Seed;
    }

    /// <summary>
    /// Represents a road segment in the city.
    /// </summary>
    public struct RoadSegment
    {
        public int StartX;
        public int StartZ;
        public int EndX;
        public int EndZ;
        public float Width;
        public bool IsMainRoad;
        public int RecipeSeed;
    }

    /// <summary>
    /// Data for a single zone (one of 16 district tiles).
    /// </summary>
    public class ZoneLayoutData
    {
        public int ZoneIndex;
        public int GridX;
        public int GridZ;
        public int Seed;
        public ThreatLevel Threat;
        public float ZoneSize;
        public List<BuildingFootprint> Buildings;
        public List<RoadSegment> Roads;
        public List<POIType> POIs;
        public int MaxZombieCount;
        public float LootDensity;

        public ZoneLayoutData(int index, int gridX, int gridZ, int seed)
        {
            ZoneIndex = index;
            GridX = gridX;
            GridZ = gridZ;
            Seed = seed;
            ZoneSize = 100f;
            Buildings = new List<BuildingFootprint>();
            Roads = new List<RoadSegment>();
            POIs = new List<POIType>();
        }
    }

    /// <summary>
    /// Generates the city layout for all 16 zones deterministically from a seed.
    /// </summary>
    public class ZoneLayoutGenerator
    {
        public const int GridSize = 4;            // 4x4 = 16 zones
        public const int TotalZones = GridSize * GridSize;
        public const float ZoneWorldSize = 100f;  // meters per zone side

        // Building generation parameters
        private const int MinBuildings = 6;
        private const int MaxBuildings = 14;
        private const int MinFloors = 1;
        private const int MaxFloors = 8;
        private const int MinBuildingSize = 8;
        private const int MaxBuildingSize = 22;
        private const float RuinChance = 0.2f;

        // Road parameters
        private const float MainRoadWidth = 12f;
        private const float SideRoadWidth = 6f;

        private readonly SeededRNG _masterRng;

        public ZoneLayoutGenerator(int seed)
        {
            _masterRng = new SeededRNG(seed);
        }

        /// <summary>
        /// Generates all 16 zone layouts deterministically.
        /// </summary>
        public ZoneLayoutData[] GenerateAllZones()
        {
            var zones = new ZoneLayoutData[TotalZones];

            // Assign POIs to zones first (ensuring critical POIs are placed)
            var poiAssignments = AssignPOIsToZones();

            for (int z = 0; z < GridSize; z++)
            {
                for (int x = 0; x < GridSize; x++)
                {
                    int index = z * GridSize + x;
                    var zoneRng = _masterRng.Fork(index);
                    var zone = new ZoneLayoutData(index, x, z, zoneRng.Seed);

                    // Set threat level based on distance from center
                    zone.Threat = CalculateThreatLevel(x, z);
                    zone.MaxZombieCount = CalculateMaxZombies(zone.Threat);
                    zone.LootDensity = CalculateLootDensity(zone.Threat);

                    // Assign POIs
                    if (poiAssignments.ContainsKey(index))
                        zone.POIs = poiAssignments[index];

                    // Generate roads
                    GenerateRoads(zone, zoneRng);

                    // Generate buildings (avoiding roads)
                    GenerateBuildings(zone, zoneRng);

                    zones[index] = zone;
                }
            }

            return zones;
        }

        private Dictionary<int, List<POIType>> AssignPOIsToZones()
        {
            var assignments = new Dictionary<int, List<POIType>>();
            var rng = _masterRng.Fork(999);

            // Critical POIs that must exist (for escape routes)
            var criticalPOIs = new[]
            {
                (POIType.Helipad, 14),          // Zone 14 - helicopter escape
                (POIType.ParkingGarage, 5),     // Zone 5 - car escape
                (POIType.PoliceStation, 6),     // Zone 6 - car key
                (POIType.SewerAccess, 3),       // Zone 3 - sewer gate 1
                (POIType.SewerAccess, 7),       // Zone 7 - sewer gate 2
                (POIType.SewerAccess, 11),      // Zone 11 - sewer gate 3
                (POIType.Factory, 10),          // Zone 10 - acetylene torch
                (POIType.RadioTower, 13),       // Zone 13 - radio for helicopter
            };

            foreach (var (poi, zone) in criticalPOIs)
            {
                if (!assignments.ContainsKey(zone))
                    assignments[zone] = new List<POIType>();
                assignments[zone].Add(poi);
            }

            // Distribute optional POIs randomly
            var optionalPOIs = new[]
            {
                POIType.Hospital, POIType.GasStation, POIType.ArmoryCache,
                POIType.Warehouse, POIType.Store, POIType.Bar,
                POIType.Church, POIType.School
            };

            foreach (var poi in optionalPOIs)
            {
                int zone = rng.Next(TotalZones);
                if (!assignments.ContainsKey(zone))
                    assignments[zone] = new List<POIType>();
                assignments[zone].Add(poi);
            }

            return assignments;
        }

        private ThreatLevel CalculateThreatLevel(int x, int z)
        {
            // Center zones are more dangerous
            float cx = Math.Abs(x - 1.5f);
            float cz = Math.Abs(z - 1.5f);
            float dist = (float)Math.Sqrt(cx * cx + cz * cz);

            if (dist < 0.8f) return ThreatLevel.Extreme;
            if (dist < 1.3f) return ThreatLevel.High;
            if (dist < 1.8f) return ThreatLevel.Medium;
            return ThreatLevel.Low;
        }

        private int CalculateMaxZombies(ThreatLevel threat)
        {
            return threat switch
            {
                ThreatLevel.Low => 8,
                ThreatLevel.Medium => 14,
                ThreatLevel.High => 22,
                ThreatLevel.Extreme => 30,
                _ => 10
            };
        }

        private float CalculateLootDensity(ThreatLevel threat)
        {
            return threat switch
            {
                ThreatLevel.Low => 0.3f,
                ThreatLevel.Medium => 0.5f,
                ThreatLevel.High => 0.8f,
                ThreatLevel.Extreme => 1.0f,
                _ => 0.5f
            };
        }

        private void GenerateRoads(ZoneLayoutData zone, SeededRNG rng)
        {
            int worldX = zone.GridX * (int)ZoneWorldSize;
            int worldZ = zone.GridZ * (int)ZoneWorldSize;

            // Main road through center (horizontal)
            zone.Roads.Add(new RoadSegment
            {
                StartX = worldX,
                StartZ = worldZ + (int)(ZoneWorldSize * 0.5f),
                EndX = worldX + (int)ZoneWorldSize,
                EndZ = worldZ + (int)(ZoneWorldSize * 0.5f),
                Width = MainRoadWidth,
                IsMainRoad = true,
                RecipeSeed = zone.Seed
            });

            // Main road through center (vertical)
            zone.Roads.Add(new RoadSegment
            {
                StartX = worldX + (int)(ZoneWorldSize * 0.5f),
                StartZ = worldZ,
                EndX = worldX + (int)(ZoneWorldSize * 0.5f),
                EndZ = worldZ + (int)ZoneWorldSize,
                Width = MainRoadWidth,
                IsMainRoad = true,
                RecipeSeed = zone.Seed + 1
            });

            // Random side roads
            int sideRoadCount = rng.Next(2, 5);
            for (int i = 0; i < sideRoadCount; i++)
            {
                bool horizontal = rng.NextBool();
                float pos = rng.NextFloat(0.2f, 0.8f) * ZoneWorldSize;

                if (horizontal)
                {
                    zone.Roads.Add(new RoadSegment
                    {
                        StartX = worldX,
                        StartZ = worldZ + (int)pos,
                        EndX = worldX + (int)ZoneWorldSize,
                        EndZ = worldZ + (int)pos,
                        Width = SideRoadWidth,
                        IsMainRoad = false,
                        RecipeSeed = rng.Next(int.MaxValue)
                    });
                }
                else
                {
                    zone.Roads.Add(new RoadSegment
                    {
                        StartX = worldX + (int)pos,
                        StartZ = worldZ,
                        EndX = worldX + (int)pos,
                        EndZ = worldZ + (int)ZoneWorldSize,
                        Width = SideRoadWidth,
                        IsMainRoad = false,
                        RecipeSeed = rng.Next(int.MaxValue)
                    });
                }
            }
        }

        private void GenerateBuildings(ZoneLayoutData zone, SeededRNG rng)
        {
            int buildingCount = rng.Next(MinBuildings, MaxBuildings + 1);
            int worldX = zone.GridX * (int)ZoneWorldSize;
            int worldZ = zone.GridZ * (int)ZoneWorldSize;

            int poiIndex = 0;

            for (int i = 0; i < buildingCount; i++)
            {
                int bw = rng.Next(MinBuildingSize, MaxBuildingSize + 1);
                int bd = rng.Next(MinBuildingSize, MaxBuildingSize + 1);
                int floors = rng.Next(MinFloors, MaxFloors + 1);

                // Higher floors in high-threat zones
                if (zone.Threat >= ThreatLevel.High)
                    floors = Math.Min(MaxFloors, floors + 2);

                int bx = worldX + rng.Next(5, (int)ZoneWorldSize - bw - 5);
                int bz = worldZ + rng.Next(5, (int)ZoneWorldSize - bd - 5);

                POIType poiType = POIType.None;
                if (poiIndex < zone.POIs.Count)
                {
                    poiType = zone.POIs[poiIndex];
                    poiIndex++;
                }

                zone.Buildings.Add(new BuildingFootprint
                {
                    X = bx,
                    Z = bz,
                    Width = bw,
                    Depth = bd,
                    Floors = floors,
                    Seed = rng.Next(int.MaxValue),
                    IsRuined = rng.NextBool(RuinChance),
                    PoiType = poiType
                });
            }
        }
    }
}
