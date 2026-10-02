# NavMesh Per-Zone Baking Implementation

## Overview

The CityGenerator now implements runtime NavMesh baking for each zone to enable zombie AI navigation. Each zone has its own NavMeshData that is baked when the zone is first generated and managed through the zone streaming system.

## Implementation Details

### ZoneInstance Class

A new `ZoneInstance` class stores:
- `ZoneObject`: The root GameObject containing all zone geometry
- `NavMeshData`: Baked NavMeshData for zombie pathfinding
- `NavMeshDataInstance`: Handle for adding/removing NavMeshData from the world
- `HasValidNavMesh`: Property indicating if baking succeeded

### NavMesh Baking Process

1. **Zone Generation**: When a zone is first loaded, `GenerateZoneWithNavMesh()` is called
2. **Geometry Collection**: All MeshFilter components in the zone are collected as NavMeshBuildSources
3. **Bounds Calculation**: Zone bounds are calculated based on the zone's grid position and size
4. **Baking**: `NavMeshBuilder.BuildNavMeshData()` bakes the NavMesh using default agent settings
5. **Registration**: The baked NavMeshData is added to the world via `NavMesh.AddNavMeshData()`

### Zone Streaming Integration

- **Load**: When a zone is loaded from cache, its NavMeshData is re-added to the world
- **Unload**: When a zone is unloaded, its NavMeshData is removed from the world
- **Eviction**: When a zone is evicted from the LRU cache, its NavMeshData is properly cleaned up

### Error Handling

The implementation handles bake failures gracefully:
- Exceptions during baking are caught and logged
- Zones with failed NavMesh baking have `HasValidNavMesh = false`
- ZombieSpawner's `FindSpawnPosition()` uses `NavMesh.SamplePosition()` which naturally fails in zones without NavMesh
- Result: No zombies spawn in zones where NavMesh baking failed

## Verification

To verify NavMesh baking is working:

1. **Console Logs**: Check for "Successfully baked NavMesh for Zone X" messages
2. **Visual Debug**: Enable NavMesh visualization in Unity (Window > AI > Navigation)
3. **Zombie Spawning**: Verify zombies spawn and navigate correctly in zones
4. **Performance**: Monitor frame time during zone transitions (should be <0.5s per zone)

## Configuration

NavMesh baking uses the default NavMesh agent settings (ID 0). To customize:
1. Open Window > AI > Navigation
2. Configure Agent settings (radius, height, step height, max slope)
3. The baking will automatically use these settings

## Performance Considerations

- NavMesh baking happens on the main thread during zone generation
- Typical bake time: 50-200ms per zone depending on geometry complexity
- Baked NavMeshData is cached in the LRU cache (capacity: 6 zones)
- Memory per zone: ~100-500 KB for NavMeshData

## Troubleshooting

### No zombies spawning in a zone
- Check console for NavMesh baking errors
- Verify zone has walkable geometry (ground plane, roads)
- Check NavMesh visualization to see if NavMesh exists

### NavMesh baking takes too long
- Reduce building complexity in ZoneLayoutGenerator
- Reduce zone size or building count
- Consider pre-baking NavMesh for common zone layouts

### NavMesh not updating when zone reloads
- Verify `NavMesh.AddNavMeshData()` is called in LoadZone
- Check that `NavMeshDataInstance.valid` is false before re-adding
- Ensure NavMeshData is not null in the cached ZoneInstance
