// ---------------------------------------------------------------------------
// Dead City Escape - Procedural City Generator (Unity Component)
// Generates the 16-zone city using the ZoneLayoutGenerator logic.
// Manages zone streaming, LOD, and LRU caching.
// ---------------------------------------------------------------------------
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;
using DeadCityEscape.Logic;

namespace DeadCityEscape.WorldGen
{
    /// <summary>
    /// Main city generator component. Creates the procedural city
    /// from a seed and manages zone streaming around the player.
    /// </summary>
    public class CityGenerator : MonoBehaviour
    {
        [Header("Generation")]
        [SerializeField] private int _seed = 12345;
        [SerializeField] private int _activeZoneRadius = 2;
        [SerializeField] private int _maxCachedZones = 6;

        [Header("References")]
        [SerializeField] private Transform _playerTransform;
        [SerializeField] private Material _buildingMaterial;
        [SerializeField] private Material _roadMaterial;
        [SerializeField] private Material _groundMaterial;

        [Header("Object Pooling")]
        [SerializeField] private GameObject _buildingPrefab;
        [SerializeField] private GameObject _roadPrefab;
        [SerializeField] private int _buildingPoolSize = 20;
        [SerializeField] private int _roadPoolSize = 10;

        private SeededRNG _rng;
        private ZoneLayoutData[] _allZones;
        private LRUCache<int, ZoneInstance> _zoneCache;
        private HashSet<int> _loadedZones = new HashSet<int>();
        private int _lastPlayerZone = -1;
        
        private Core.ObjectPool _buildingPool;
        private Core.ObjectPool _roadPool;
        private Dictionary<GameObject, List<GameObject>> _zonePooledObjects = new Dictionary<GameObject, List<GameObject>>();

        public ZoneLayoutData[] AllZones => _allZones;

        /// <summary>
        /// Initialize the city generator with a seeded RNG.
        /// </summary>
        public void Initialize(SeededRNG rng)
        {
            _rng = rng;
            var generator = new ZoneLayoutGenerator(_rng.Seed);
            _allZones = generator.GenerateAllZones();

            _zoneCache = new LRUCache<int, ZoneInstance>(_maxCachedZones, OnZoneEvicted);

            // Initialize object pools
            InitializeObjectPools();

            if (_playerTransform == null)
            {
                var player = FindAnyObjectByType<Player.PlayerController>();
                if (player != null)
                    _playerTransform = player.transform;
            }

            // Generate initial zones around spawn
            UpdateActiveZones();
        }

        /// <summary>
        /// Initialize and pre-warm object pools for buildings and roads.
        /// </summary>
        private void InitializeObjectPools()
        {
            // Create building pool
            if (_buildingPrefab != null)
            {
                var buildingPoolObj = new GameObject("BuildingPool");
                buildingPoolObj.transform.SetParent(transform);
                _buildingPool = buildingPoolObj.AddComponent<Core.ObjectPool>();
                _buildingPool.Initialize(_buildingPrefab, _buildingPoolSize, maxSize: 50, autoExpand: true);
            }
            else
            {
                Debug.LogWarning("CityGenerator: Building prefab not assigned, pooling disabled for buildings");
            }

            // Create road pool
            if (_roadPrefab != null)
            {
                var roadPoolObj = new GameObject("RoadPool");
                roadPoolObj.transform.SetParent(transform);
                _roadPool = roadPoolObj.AddComponent<Core.ObjectPool>();
                _roadPool.Initialize(_roadPrefab, _roadPoolSize, maxSize: 30, autoExpand: true);
            }
            else
            {
                Debug.LogWarning("CityGenerator: Road prefab not assigned, pooling disabled for roads");
            }
        }

        /// <summary>
        /// Update active zones based on player's current zone index.
        /// Called by PlayerController when zone changes.
        /// </summary>
        public void UpdatePlayerZone(int zoneIndex)
        {
            _lastPlayerZone = zoneIndex;
            UpdateActiveZones();
        }

        /// <summary>
        /// Get a spawn position in a low-threat zone.
        /// </summary>
        public Vector3 GetSpawnPosition(ThreatLevel maxThreat = ThreatLevel.Low)
        {
            // Find a zone with appropriate threat level for spawn
            foreach (var zone in _allZones)
            {
                if (zone.Threat <= maxThreat)
                {
                    float x = zone.GridX * ZoneLayoutGenerator.ZoneWorldSize +
                        _rng.NextFloat(10, ZoneLayoutGenerator.ZoneWorldSize - 10);
                    float z = zone.GridZ * ZoneLayoutGenerator.ZoneWorldSize +
                        _rng.NextFloat(10, ZoneLayoutGenerator.ZoneWorldSize - 10);
                    return new Vector3(x, 1f, z);
                }
            }

            return new Vector3(50, 1, 50);
        }

        private void Start()
        {
            var gm = Core.GameManager.Instance;
            if (gm != null)
            {
                _seed = gm.CurrentSeed;
                Initialize(new SeededRNG(_seed));
            }
            else
            {
                Initialize(new SeededRNG(_seed));
            }
        }

        private void Update()
        {
            if (_playerTransform == null) return;

            int currentZone = GetPlayerZoneIndex();
            if (currentZone != _lastPlayerZone)
            {
                _lastPlayerZone = currentZone;
                UpdateActiveZones();
            }
        }

        private int GetPlayerZoneIndex()
        {
            int x = Mathf.FloorToInt(
                _playerTransform.position.x / ZoneLayoutGenerator.ZoneWorldSize);
            int z = Mathf.FloorToInt(
                _playerTransform.position.z / ZoneLayoutGenerator.ZoneWorldSize);
            x = Mathf.Clamp(x, 0, ZoneLayoutGenerator.GridSize - 1);
            z = Mathf.Clamp(z, 0, ZoneLayoutGenerator.GridSize - 1);
            return z * ZoneLayoutGenerator.GridSize + x;
        }

        private void UpdateActiveZones()
        {
            int playerZone = GetPlayerZoneIndex();
            int px = playerZone % ZoneLayoutGenerator.GridSize;
            int pz = playerZone / ZoneLayoutGenerator.GridSize;

            HashSet<int> neededZones = new HashSet<int>();

            for (int dz = -_activeZoneRadius; dz <= _activeZoneRadius; dz++)
            {
                for (int dx = -_activeZoneRadius; dx <= _activeZoneRadius; dx++)
                {
                    int zx = px + dx;
                    int zz = pz + dz;
                    if (zx < 0 || zx >= ZoneLayoutGenerator.GridSize) continue;
                    if (zz < 0 || zz >= ZoneLayoutGenerator.GridSize) continue;

                    int idx = zz * ZoneLayoutGenerator.GridSize + zx;
                    neededZones.Add(idx);

                    if (!_loadedZones.Contains(idx))
                        LoadZone(idx);
                }
            }

            // Unload zones no longer needed
            var toUnload = new List<int>();
            foreach (int idx in _loadedZones)
            {
                if (!neededZones.Contains(idx))
                    toUnload.Add(idx);
            }

            foreach (int idx in toUnload)
                UnloadZone(idx);
        }

        private void LoadZone(int zoneIndex)
        {
            if (zoneIndex < 0 || zoneIndex >= _allZones.Length) return;

            // Check cache first
            if (_zoneCache.TryGet(zoneIndex, out var cached))
            {
                cached.ZoneObject.SetActive(true);
                
                // Reactivate pooled objects for this zone
                if (_zonePooledObjects.TryGetValue(cached.ZoneObject, out var pooledObjs))
                {
                    foreach (var obj in pooledObjs)
                    {
                        if (obj != null)
                            obj.SetActive(true);
                    }
                }
                
                // Re-add NavMeshData to the world
                if (cached.HasValidNavMesh && !cached.NavMeshDataInstance.valid)
                {
                    cached.NavMeshDataInstance = NavMesh.AddNavMeshData(cached.NavMeshData);
                }
                
                _loadedZones.Add(zoneIndex);
                return;
            }

            // Generate zone geometry and bake NavMesh
            var zone = _allZones[zoneIndex];
            var zoneInstance = GenerateZoneWithNavMesh(zone);
            _zoneCache.Put(zoneIndex, zoneInstance);
            _loadedZones.Add(zoneIndex);
        }

        private void UnloadZone(int zoneIndex)
        {
            if (_zoneCache.TryGet(zoneIndex, out var zoneInstance))
            {
                zoneInstance.ZoneObject.SetActive(false);
                
                // Deactivate pooled objects for this zone
                if (_zonePooledObjects.TryGetValue(zoneInstance.ZoneObject, out var pooledObjs))
                {
                    foreach (var obj in pooledObjs)
                    {
                        if (obj != null)
                            obj.SetActive(false);
                    }
                }
                
                // Remove NavMeshData from the world
                if (zoneInstance.NavMeshDataInstance.valid)
                {
                    NavMesh.RemoveNavMeshData(zoneInstance.NavMeshDataInstance);
                }
            }

            _loadedZones.Remove(zoneIndex);
        }

        private void OnZoneEvicted(int zoneIndex, ZoneInstance zoneInstance)
        {
            // Return all pooled objects to their pools
            if (_zonePooledObjects.TryGetValue(zoneInstance.ZoneObject, out var pooledObjs))
            {
                foreach (var obj in pooledObjs)
                {
                    if (obj != null)
                    {
                        // Determine which pool this object belongs to
                        if (obj.name.Contains("Building") && _buildingPool != null)
                            _buildingPool.Return(obj);
                        else if (obj.name.Contains("Road") && _roadPool != null)
                            _roadPool.Return(obj);
                    }
                }
                _zonePooledObjects.Remove(zoneInstance.ZoneObject);
            }
            
            // Clean up NavMeshData
            zoneInstance.Cleanup();
            
            if (zoneInstance.ZoneObject != null)
                Destroy(zoneInstance.ZoneObject);
            _loadedZones.Remove(zoneIndex);
        }

        /// <summary>
        /// Generate zone geometry and bake NavMesh for zombie pathfinding.
        /// </summary>
        private ZoneInstance GenerateZoneWithNavMesh(ZoneLayoutData zone)
        {
            // Generate the zone geometry
            var zoneObj = GenerateZoneGeometry(zone);
            var zoneInstance = new ZoneInstance(zoneObj);

            // Bake NavMesh for this zone
            try
            {
                // Get all static geometry in the zone for NavMesh baking
                var sources = new List<NavMeshBuildSource>();
                
                // Collect all mesh renderers in the zone
                var meshFilters = zoneObj.GetComponentsInChildren<MeshFilter>();
                foreach (var meshFilter in meshFilters)
                {
                    if (meshFilter.sharedMesh == null) continue;
                    
                    var source = new NavMeshBuildSource
                    {
                        shape = NavMeshBuildSourceShape.Mesh,
                        sourceObject = meshFilter.sharedMesh,
                        transform = meshFilter.transform.localToWorldMatrix,
                        area = 0 // Walkable area
                    };
                    sources.Add(source);
                }

                // Define NavMesh build settings
                var buildSettings = NavMesh.GetSettingsByID(0); // Use default agent settings
                
                // Calculate zone bounds
                float worldX = zone.GridX * ZoneLayoutGenerator.ZoneWorldSize;
                float worldZ = zone.GridZ * ZoneLayoutGenerator.ZoneWorldSize;
                var bounds = new Bounds(
                    new Vector3(
                        worldX + ZoneLayoutGenerator.ZoneWorldSize * 0.5f,
                        10f, // Center Y at 10m to capture all geometry
                        worldZ + ZoneLayoutGenerator.ZoneWorldSize * 0.5f),
                    new Vector3(
                        ZoneLayoutGenerator.ZoneWorldSize,
                        20f, // 20m height should capture all buildings
                        ZoneLayoutGenerator.ZoneWorldSize));

                // Bake the NavMesh
                var navMeshData = NavMeshBuilder.BuildNavMeshData(
                    buildSettings,
                    sources,
                    bounds,
                    Vector3.zero,
                    Quaternion.identity);

                if (navMeshData != null)
                {
                    zoneInstance.NavMeshData = navMeshData;
                    zoneInstance.NavMeshDataInstance = NavMesh.AddNavMeshData(navMeshData);
                    Debug.Log($"CityGenerator: Successfully baked NavMesh for Zone {zone.ZoneIndex}");
                }
                else
                {
                    Debug.LogWarning($"CityGenerator: NavMesh baking returned null for Zone {zone.ZoneIndex}. No zombies will spawn in this zone.");
                }
            }
            catch (System.Exception e)
            {
                Debug.LogError($"CityGenerator: Failed to bake NavMesh for Zone {zone.ZoneIndex}: {e.Message}. No zombies will spawn in this zone.");
            }

            return zoneInstance;
        }

        private GameObject GenerateZoneGeometry(ZoneLayoutData zone)
        {
            var zoneRoot = new GameObject($"Zone_{zone.ZoneIndex}");
            zoneRoot.transform.SetParent(transform);

            // Initialize pooled objects list for this zone
            _zonePooledObjects[zoneRoot] = new List<GameObject>();

            float worldX = zone.GridX * ZoneLayoutGenerator.ZoneWorldSize;
            float worldZ = zone.GridZ * ZoneLayoutGenerator.ZoneWorldSize;

            // Ground plane
            var ground = GameObject.CreatePrimitive(PrimitiveType.Cube);
            ground.name = "Ground";
            ground.transform.SetParent(zoneRoot.transform);
            ground.transform.position = new Vector3(
                worldX + ZoneLayoutGenerator.ZoneWorldSize * 0.5f,
                -0.5f,
                worldZ + ZoneLayoutGenerator.ZoneWorldSize * 0.5f);
            ground.transform.localScale = new Vector3(
                ZoneLayoutGenerator.ZoneWorldSize, 1f,
                ZoneLayoutGenerator.ZoneWorldSize);
            ground.layer = LayerMask.NameToLayer("Environment");
            if (_groundMaterial != null)
                ground.GetComponent<Renderer>().material = _groundMaterial;

            // Generate roads
            foreach (var road in zone.Roads)
            {
                GenerateRoad(zoneRoot.transform, road);
            }

            // Generate buildings
            foreach (var building in zone.Buildings)
            {
                GenerateBuilding(zoneRoot.transform, building);
            }

            return zoneRoot;
        }

        private void GenerateRoad(Transform parent, RoadSegment road)
        {
            GameObject roadObj = null;
            
            // Try to get from pool if available
            if (_roadPool != null && _roadPrefab != null)
            {
                float cx = (road.StartX + road.EndX) * 0.5f;
                float cz = (road.StartZ + road.EndZ) * 0.5f;
                Vector3 position = new Vector3(cx, 0.01f, cz);
                
                roadObj = _roadPool.Get(position, Quaternion.identity);
                
                if (roadObj != null)
                {
                    roadObj.transform.SetParent(parent);
                    roadObj.name = "Road";
                    
                    // Track this pooled object
                    if (_zonePooledObjects.TryGetValue(parent.gameObject, out var list))
                        list.Add(roadObj);
                    
                    // Configure the road mesh
                    ConfigureRoadMesh(roadObj, road);
                    return;
                }
            }
            
            // Fallback: create new road object if pool is unavailable or exhausted
            roadObj = new GameObject("Road");
            roadObj.transform.SetParent(parent);
            roadObj.layer = LayerMask.NameToLayer("Environment");

            float cx2 = (road.StartX + road.EndX) * 0.5f;
            float cz2 = (road.StartZ + road.EndZ) * 0.5f;
            roadObj.transform.position = new Vector3(cx2, 0.01f, cz2);

            ConfigureRoadMesh(roadObj, road);
        }
        
        private void ConfigureRoadMesh(GameObject roadObj, RoadSegment road)
        {
            // Use procedural geometry with caching
            try
            {
                var roadSegment = new ProceduralArt.RoadSegment(
                    road.StartX, road.StartZ,
                    road.EndX, road.EndZ,
                    road.Width, road.RecipeSeed);

                var mesh = ProceduralArt.ProceduralGeometry.GenerateRoad(roadSegment);
                
                var meshFilter = roadObj.GetComponent<MeshFilter>();
                if (meshFilter == null)
                    meshFilter = roadObj.AddComponent<MeshFilter>();
                meshFilter.mesh = mesh;

                var meshRenderer = roadObj.GetComponent<MeshRenderer>();
                if (meshRenderer == null)
                    meshRenderer = roadObj.AddComponent<MeshRenderer>();
                if (_roadMaterial != null)
                    meshRenderer.material = _roadMaterial;
            }
            catch (System.Exception e)
            {
                Debug.LogError($"CityGenerator: Failed to generate road: {e.Message}");
                // Fallback to simple cube
                var fallback = GameObject.CreatePrimitive(PrimitiveType.Cube);
                fallback.transform.SetParent(roadObj.transform);
                fallback.transform.localScale = new Vector3(road.Width, 0.1f, 10f);
            }
        }

        private void GenerateBuilding(Transform parent, BuildingFootprint bp)
        {
            GameObject buildingRoot = null;
            
            // Try to get from pool if available
            if (_buildingPool != null && _buildingPrefab != null)
            {
                float floorHeight = 3f;
                float totalHeight = bp.Floors * floorHeight;
                Vector3 position = new Vector3(
                    bp.X + bp.Width * 0.5f,
                    totalHeight * 0.5f,
                    bp.Z + bp.Depth * 0.5f);
                
                buildingRoot = _buildingPool.Get(position, Quaternion.identity);
                
                if (buildingRoot != null)
                {
                    buildingRoot.transform.SetParent(parent);
                    buildingRoot.name = $"Building_{bp.X}_{bp.Z}";
                    
                    // Track this pooled object
                    if (_zonePooledObjects.TryGetValue(parent.gameObject, out var list))
                        list.Add(buildingRoot);
                    
                    // Configure the building mesh and components
                    ConfigureBuilding(buildingRoot, bp);
                    return;
                }
            }
            
            // Fallback: create new building if pool is unavailable or exhausted
            buildingRoot = new GameObject($"Building_{bp.X}_{bp.Z}");
            buildingRoot.transform.SetParent(parent);
            buildingRoot.layer = LayerMask.NameToLayer("Environment");

            ConfigureBuilding(buildingRoot, bp);
        }
        
        private void ConfigureBuilding(GameObject buildingRoot, BuildingFootprint bp)
        {
            float floorHeight = 3f;
            float totalHeight = bp.Floors * floorHeight;

            // Use procedural geometry with caching
            try
            {
                var footprint = new ProceduralArt.BuildingFootprint(
                    bp.X, bp.Z,
                    bp.Width, bp.Depth,
                    bp.Floors, bp.RecipeSeed);

                var mesh = ProceduralArt.ProceduralGeometry.GenerateBuilding(footprint);

                var meshFilter = buildingRoot.GetComponent<MeshFilter>();
                if (meshFilter == null)
                    meshFilter = buildingRoot.AddComponent<MeshFilter>();
                meshFilter.mesh = mesh;

                var meshRenderer = buildingRoot.GetComponent<MeshRenderer>();
                if (meshRenderer == null)
                    meshRenderer = buildingRoot.AddComponent<MeshRenderer>();
                if (_buildingMaterial != null)
                    meshRenderer.material = _buildingMaterial;

                // Add collider
                var meshCollider = buildingRoot.GetComponent<MeshCollider>();
                if (meshCollider == null)
                    meshCollider = buildingRoot.AddComponent<MeshCollider>();
                meshCollider.sharedMesh = mesh;
            }
            catch (System.Exception e)
            {
                Debug.LogError($"CityGenerator: Failed to generate building: {e.Message}");
                // Fallback to simple cube
                var body = GameObject.CreatePrimitive(PrimitiveType.Cube);
                body.name = "Body";
                body.transform.SetParent(buildingRoot.transform);
                body.transform.position = new Vector3(
                    bp.X + bp.Width * 0.5f,
                    totalHeight * 0.5f,
                    bp.Z + bp.Depth * 0.5f);
                body.transform.localScale = new Vector3(
                    bp.Width, totalHeight, bp.Depth);
                body.layer = LayerMask.NameToLayer("Environment");

                if (_buildingMaterial != null)
                    body.GetComponent<Renderer>().material = _buildingMaterial;
            }

            // Add POI indicator if this building has one
            if (bp.PoiType != POIType.None)
            {
                var poi = new GameObject($"POI_{bp.PoiType}");
                poi.transform.SetParent(buildingRoot.transform);
                poi.transform.position = new Vector3(
                    bp.X + bp.Width * 0.5f,
                    1.5f,
                    bp.Z + bp.Depth * 0.5f + bp.Depth * 0.5f + 1f);
                poi.tag = "POI";

                // Add interaction trigger
                var collider = poi.AddComponent<BoxCollider>();
                collider.isTrigger = true;
                collider.size = new Vector3(3f, 3f, 3f);
            }

            // Add damage/ruin state
            if (bp.IsRuined)
            {
                // Reduce height and add rubble placeholder
                buildingRoot.transform.localScale = new Vector3(1f, 0.4f, 1f);
            }

            // Add static collider for navigation
            var navObstacle = buildingRoot.GetComponent<UnityEngine.AI.NavMeshObstacle>();
            if (navObstacle == null)
                navObstacle = buildingRoot.AddComponent<UnityEngine.AI.NavMeshObstacle>();
            navObstacle.carving = true;
            navObstacle.size = new Vector3(bp.Width, totalHeight, bp.Depth);
            navObstacle.center = new Vector3(
                bp.Width * 0.5f, totalHeight * 0.5f, bp.Depth * 0.5f);
        }
    }
}
