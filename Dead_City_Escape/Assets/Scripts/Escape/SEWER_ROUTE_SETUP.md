# Sewer Escape Route Setup Guide

## Overview

The Sewer escape route is the stealth-focused path with a 1.25× XP multiplier. It requires the player to:
1. Find lockpick set
2. Unlock 3 sewer access gates (Zones 3, 7, 11)
3. Find acetylene torch (Zone 10)
4. Cut through reinforced gate (Zone 15)

## Components Created

### Pickups
- **LockpickSetPickup.cs** - Advances `sewer_lockpicks` objective
- **AcetyleneTorchPickup.cs** - Advances `sewer_torch` objective (Zone 10)

### Interactions
- **SewerAccessInteraction.cs** - Unlocks sewer gates, advances `sewer_unlock_gates` (count/3)
- **ReinforcedGateInteraction.cs** - Final breach, advances `sewer_breach` and triggers victory

### Spawner
- **SewerObjectiveSpawner.cs** - Spawns all sewer route objectives in the world

## Stealth Mechanic

The sewer route includes a special stealth noise modifier (Requirement 11.7):
- When player is crouching within 10m of zombies, noise detection threshold is 50% higher
- Implemented in `ZombieBase.OnNoiseHeard()` by multiplying noise by 0.667
- This makes stealth gameplay more viable for the sewer route

## Setup Instructions

### 1. Add SewerObjectiveSpawner to Scene

Create a GameObject in your scene:
```
GameObject > Create Empty
Name: "SewerObjectiveSpawner"
Add Component: SewerObjectiveSpawner
```

### 2. Configure Spawner

The spawner has configurable offsets for each objective:
- **Zone 3 Offset**: First sewer access gate
- **Zone 7 Offset**: Second sewer access gate  
- **Zone 11 Offset**: Third sewer access gate
- **Zone 10 Torch Offset**: Acetylene torch location
- **Zone 15 Gate Offset**: Reinforced gate location

### 3. Optional: Create Prefabs

You can create custom prefabs for:
- Lockpick set visual
- Sewer access gate visual
- Acetylene torch visual
- Reinforced gate visual

Assign these in the spawner's inspector. If not assigned, simple primitive shapes will be used.

### 4. Activate Route

The route is activated via:
```csharp
var escapeManager = FindAnyObjectByType<EscapeRouteManager>();
escapeManager.ActivateRoute(Core.EscapeRoute.Sewer);
```

## Objective Flow

```
1. sewer_lockpicks (Boolean)
   ↓ Player finds lockpick set
   
2. sewer_unlock_gates (Count/3)
   ↓ Player unlocks gates in Zones 3, 7, 11
   
3. sewer_torch (Boolean)
   ↓ Player finds acetylene torch in Zone 10
   
4. sewer_breach (Boolean)
   ↓ Player cuts through reinforced gate in Zone 15
   
→ Victory with 1.25× XP multiplier
```

## Item IDs

The following item IDs are used:
- `lockpick_set` - Lockpick set (reusable for all 3 gates)
- `acetylene_torch` - Acetylene torch for cutting gate

Make sure these items are defined in your inventory system.

## Testing

1. Start a new run
2. Activate the Sewer route
3. Find the lockpick set (spawns randomly within spawn radius)
4. Unlock 3 sewer gates (Zones 3, 7, 11)
5. Find acetylene torch in Zone 10
6. Cut through reinforced gate in Zone 15
7. Victory screen should show 1.25× XP multiplier

## Integration with EscapeRouteManager

The objectives are already defined in `EscapeRouteManager.cs`:
```csharp
[Core.EscapeRoute.Sewer] = new List<EscapeObjective>
{
    new EscapeObjective { ObjectiveId = "sewer_lockpicks", ... },
    new EscapeObjective { ObjectiveId = "sewer_unlock_gates", RequiredCount = 3, ... },
    new EscapeObjective { ObjectiveId = "sewer_torch", ... },
    new EscapeObjective { ObjectiveId = "sewer_breach", ... }
}
```

## Requirements Implemented

- ✅ 11.1: Four sequential objectives initialized
- ✅ 11.2: Lockpick set pickup advances objective
- ✅ 11.3: Sewer access interactions advance count (3 gates)
- ✅ 11.4: Acetylene torch pickup in Zone 10
- ✅ 11.5: Reinforced gate interaction in Zone 15
- ✅ 11.6: GameManager.TriggerVictory with 1.25× XP multiplier
- ✅ 11.7: Stealth noise modifier (50% higher threshold when crouching within 10m)

## Notes

- The lockpick set is NOT consumed when unlocking gates (reusable)
- The acetylene torch is required but not consumed for the final breach
- Stealth modifier applies globally when player is crouching near zombies
- All objectives must be completed in sequence
