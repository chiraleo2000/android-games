# Helicopter Escape Route Setup Guide

## Overview
This document explains how to set up the Helicopter escape route objectives in Dead City Escape.

## Components Created

### 1. POITrigger.cs
- Generic trigger for Points of Interest
- Advances objectives when player enters the trigger zone
- **Usage**: Attach to GameObjects at POI locations (RadioTower, ParkingGarage, etc.)
- **Configuration**:
  - `ObjectiveId`: The objective to advance (e.g., "heli_find_helipad")
  - `TriggerRadius`: Detection radius (default: 10m)
  - `TriggerOnce`: Whether to trigger only once (default: true)

### 2. FuelCanPickup.cs
- Specialized pickup for fuel cans
- Automatically advances "heli_fuel_cans" objective
- **Usage**: Attach to fuel can GameObjects scattered across the map
- Inherits from PickupBase (floating animation, interaction range)

### 3. RadioRepairInteraction.cs
- Interaction point for repairing the radio transmitter
- Requires toolkit + batteries from player inventory
- Advances "heli_repair_radio" objective and starts defense phase
- **Usage**: Attach to radio transmitter GameObject
- **Configuration**:
  - `InteractRange`: Interaction distance (default: 3m)
  - `ToolkitItemId`: Item ID for toolkit (default: "toolkit")
  - `BatteriesItemId`: Item ID for batteries (default: "batteries")
- **Input**: Press E key to interact when in range

### 4. HelicopterObjectiveSpawner.cs
- Utility script to spawn all helicopter objectives
- Creates POI trigger, fuel cans, and radio repair point
- **Usage**: Place in scene at RadioTower location
- **Configuration**:
  - `FuelCanCount`: Number of fuel cans to spawn (default: 5)
  - `SpawnRadius`: Radius for fuel can distribution (default: 50m)
  - Optional prefabs for fuel cans and radio transmitter

## Helicopter Route Flow

1. **heli_find_helipad** (Boolean)
   - Player enters RadioTower POI trigger zone
   - POITrigger advances objective

2. **heli_fuel_cans** (Count: 5)
   - Player picks up 5 fuel cans scattered across zones
   - FuelCanPickup advances objective on each pickup

3. **heli_repair_radio** (Boolean)
   - Player interacts with radio transmitter (E key)
   - Requires toolkit + batteries in inventory
   - RadioRepairInteraction consumes items and advances objective
   - **Triggers defense phase automatically**

4. **heli_defend** (Timer: 180s)
   - Defense phase starts automatically after radio repair
   - Zombie waves spawn every 20 seconds with escalating intensity
   - Player must survive for 3 minutes
   - On completion, triggers victory with 2.0× XP multiplier

## EscapeRouteManager Updates

The EscapeRouteManager has been updated with:
- `HelicopterDefensePhase()` coroutine for 180-second defense
- Wave spawning every 20 seconds with escalating intensity
- Automatic advancement of "heli_defend" objective on completion
- Integration with ZombieSpawner for wave generation

## Setup Instructions

### Quick Setup (Using Spawner)
1. Create empty GameObject at RadioTower location
2. Add `HelicopterObjectiveSpawner` component
3. Configure spawn radius and fuel can count
4. Run game - objectives will spawn automatically

### Manual Setup
1. **RadioTower POI Trigger**:
   - Create GameObject at RadioTower location
   - Add `POITrigger` component
   - Set ObjectiveId to "heli_find_helipad"
   - Set TriggerRadius to 10m

2. **Fuel Cans** (5 total):
   - Create 5 GameObjects scattered across zones
   - Add `FuelCanPickup` component to each
   - Add visual mesh/primitive for visibility

3. **Radio Transmitter**:
   - Create GameObject at helipad/tower location
   - Add `RadioRepairInteraction` component
   - Set InteractRange to 3m
   - Add visual mesh/primitive for visibility

## Testing Checklist

- [ ] Player can enter RadioTower zone and advance heli_find_helipad
- [ ] Player can pick up all 5 fuel cans
- [ ] Player can interact with radio (E key) when in range
- [ ] Radio repair requires toolkit + batteries
- [ ] Radio repair consumes items from inventory
- [ ] Defense phase starts after radio repair
- [ ] Zombie waves spawn every 20 seconds
- [ ] Defense lasts exactly 180 seconds
- [ ] Victory triggers with 2.0× XP multiplier on completion
- [ ] Player death during defense triggers game over

## XP Multipliers (from GameConfig)
- Helicopter: 2.0× (hardest route)
- Car: 1.5× (medium route)
- Sewer: 1.25× (stealth route)

## Requirements Implemented
- ✅ 9.1: Four sequential objectives
- ✅ 9.2: RadioTower POI trigger
- ✅ 9.3: Fuel can pickups (5 total)
- ✅ 9.4: Radio repair with toolkit + batteries
- ✅ 9.5: 180-second defense with wave spawning
- ✅ 9.6: Victory trigger on completion
- ✅ 9.7: Game over on player death
- ✅ 9.8: 2.0× XP multiplier applied by GameManager
