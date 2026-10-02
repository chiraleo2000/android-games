# Car Escape Route Implementation

## Overview
This document describes the implementation of the Car escape route objectives for Dead City Escape.

## Requirements Implemented
- **Requirement 10.1**: Car route initialization with 4 sequential objectives
- **Requirement 10.2**: car_find_vehicle objective (ParkingGarage POI trigger)
- **Requirement 10.3**: car_get_key objective (PoliceStation POI pickup)
- **Requirement 10.4**: car_repair_parts objective (3 pickups: battery, tire, fuel)
- **Requirement 10.5**: car_clear_barricade objective (interaction when parts complete)
- **Requirement 10.6**: GameManager.TriggerVictory with 1.5× XP multiplier
- **Requirement 10.7**: PoliceStation designated as ThreatLevel.Extreme with 3 zombies

## Components Created

### 1. CarKeyPickup.cs
- Extends `Combat.PickupBase`
- Spawned at PoliceStation POI
- Advances `car_get_key` objective when picked up
- Adds car key to player inventory

### 2. CarRepairPartPickup.cs
- Extends `Combat.PickupBase`
- Supports three part types: Battery, Tire, Fuel
- Each pickup advances `car_repair_parts` objective count by 1
- Maximum count: 3 (one of each type)

### 3. BarricadeInteraction.cs
- Similar to `RadioRepairInteraction` from helicopter route
- Requires all 3 repair parts to be collected first
- Checks `car_repair_parts` objective completion status
- Advances `car_clear_barricade` objective on successful interaction
- Uses interact input (E key or InputManager.InteractPressed)

### 4. CarObjectiveSpawner.cs
- Central spawner for all Car route objectives
- Creates ParkingGarage POI trigger for `car_find_vehicle`
- Spawns car key at PoliceStation
- Spawns 3 repair parts scattered around the area
- Creates barricade interaction point
- Sets up PoliceStation as ThreatLevel.Extreme zone with ThreatZone component

### 5. ThreatZone.cs
- Helper component for marking high-threat areas
- Used by ZombieSpawner to maintain minimum zombie count
- Configured for PoliceStation: ThreatLevel.Extreme, 3 zombies, 30m radius

## Objective Flow

```
1. car_find_vehicle (Boolean)
   └─> Player enters ParkingGarage POI trigger
   
2. car_get_key (Boolean)
   └─> Player picks up car key at PoliceStation
   
3. car_repair_parts (Count/3)
   ├─> Player picks up battery
   ├─> Player picks up spare tire
   └─> Player picks up fuel canister
   
4. car_clear_barricade (Boolean)
   └─> Player interacts with barricade (requires parts complete)
   
All objectives complete → GameManager.TriggerVictory() with 1.5× XP multiplier
```

## Integration with Existing Systems

### EscapeRouteManager
- Car route objectives already defined in `InitializeObjectives()`
- `AdvanceObjective()` method handles all Car objective updates
- `TriggerExtraction()` calls `GameManager.TriggerVictory()` for Car route

### GameManager
- `TriggerVictory()` applies 1.5× XP multiplier for Car route
- XP multiplier configured via `GameConfig.CarXPMultiplier`

### POITrigger
- Reused from helicopter route implementation
- Configured with `ObjectiveId = "car_find_vehicle"`

## Usage

### In Scene Setup
1. Place `CarObjectiveSpawner` in the scene at the parking garage location
2. Optionally assign prefabs for visual representation:
   - `_carKeyPrefab`
   - `_batteryPrefab`
   - `_tirePrefab`
   - `_fuelPrefab`
   - `_barricadePrefab`
3. Configure spawn radius and offsets as needed

### Fallback Behavior
If prefabs are not assigned, the spawner creates simple primitive shapes:
- Car key: Yellow cube
- Battery: Green cube
- Tire: Black cylinder
- Fuel: Red capsule
- Barricade: Orange cube

## Testing Checklist
- [ ] ParkingGarage POI trigger advances car_find_vehicle
- [ ] Car key pickup at PoliceStation advances car_get_key
- [ ] Each repair part pickup advances car_repair_parts count
- [ ] Barricade interaction blocked until all 3 parts collected
- [ ] Barricade interaction advances car_clear_barricade when parts complete
- [ ] All objectives complete triggers victory with 1.5× XP multiplier
- [ ] PoliceStation spawns 3 zombies (ThreatLevel.Extreme)

## Notes
- The Car route is designed as a medium-difficulty option
- Requires both combat (PoliceStation threat zone) and exploration
- More straightforward than Helicopter (no defense phase)
- More action-oriented than Sewer (stealth route)
