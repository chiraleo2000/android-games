# Object Pool Setup for Zone Streaming

## Overview

Task 17.2 implements ObjectPool integration for CityGenerator to improve performance during zone streaming. This document explains how to set up the required prefabs.

## Requirements

The CityGenerator now uses ObjectPool to recycle building and road GameObjects:
- **Building Pool**: Pre-warmed with 20 prefabs
- **Road Pool**: Pre-warmed with 10 prefabs

## Prefab Setup

### 1. Building Prefab

Create a prefab at `Assets/Prefabs/WorldGen/BuildingPooled.prefab`:

1. Create an empty GameObject named "BuildingPooled"
2. Add the following components:
   - MeshFilter (mesh will be set at runtime)
   - MeshRenderer (material will be set at runtime)
   - MeshCollider (for physics)
   - NavMeshObstacle (for AI navigation)
3. Set Layer to "Environment"
4. Save as prefab

**Component Configuration:**
- **NavMeshObstacle:**
  - Carving: true
  - Size and Center will be set at runtime based on building dimensions

### 2. Road Prefab

Create a prefab at `Assets/Prefabs/WorldGen/RoadPooled.prefab`:

1. Create an empty GameObject named "RoadPooled"
2. Add the following components:
   - MeshFilter (mesh will be set at runtime)
   - MeshRenderer (material will be set at runtime)
3. Set Layer to "Environment"
4. Position Y: 0.01 (slightly above ground to prevent z-fighting)
5. Save as prefab

## CityGenerator Configuration

After creating the prefabs, configure the CityGenerator component:

1. Select the CityGenerator GameObject in the scene
2. In the Inspector, find the "Object Pooling" section
3. Assign the prefabs:
   - **Building Prefab**: Drag `BuildingPooled.prefab`
   - **Road Prefab**: Drag `RoadPooled.prefab`
4. Pool sizes (default values):
   - **Building Pool Size**: 20
   - **Road Pool Size**: 10

## How It Works

### Initialization
When CityGenerator.Initialize() is called:
1. Creates ObjectPool components for buildings and roads
2. Pre-warms pools by instantiating prefabs
3. All pooled objects start inactive

### Zone Loading
When a zone is loaded:
1. CityGenerator tries to Get() objects from pools
2. If available, reuses existing GameObject
3. If pool exhausted, creates new GameObject (fallback)
4. Configures mesh, materials, and components at runtime
5. Tracks pooled objects per zone

### Zone Unloading
When a zone is unloaded:
1. Deactivates zone root GameObject
2. Deactivates all pooled objects in that zone
3. Objects remain in memory for reuse

### Zone Eviction
When LRUCache evicts a zone:
1. Returns all pooled objects to their pools via Return()
2. Destroys the zone root GameObject
3. Pooled objects are ready for reuse

## Performance Benefits

- **Reduced GC pressure**: Reuses GameObjects instead of creating/destroying
- **Faster zone loading**: Pre-instantiated objects avoid runtime allocation
- **Smoother gameplay**: Eliminates hitches during zone transitions
- **Memory efficient**: Pools cap at reasonable sizes (50 buildings, 30 roads)

## Fallback Behavior

If prefabs are not assigned:
- CityGenerator logs a warning
- Falls back to creating GameObjects at runtime (old behavior)
- Game continues to work, but without pooling benefits

## Testing

To verify the implementation:
1. Play the game and move between zones
2. Open the Profiler (Window > Analysis > Profiler)
3. Check "GC Alloc" - should be minimal during zone transitions
4. Check hierarchy - BuildingPool and RoadPool should show active/inactive objects
5. Move back to previously visited zones - objects should be reused from cache

## Notes

- Pools auto-expand if needed (up to max size)
- Each zone tracks its pooled objects for proper cleanup
- Materials are assigned at runtime from CityGenerator settings
- Procedural meshes are generated and cached per recipe
