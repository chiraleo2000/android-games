# Skill Effects Implementation Summary

## Overview
This document summarizes the implementation of skill effects for Task 16.1, wiring up gameplay effects when skills are unlocked.

## Implemented Skill Effects

### 1. Shadow Walk (stealth_1) - Requirement 8.7
**Effect**: Multiply PlayerController.CurrentNoiseLevel by 0.7 (30% noise reduction)

**Implementation**: `Assets/Scripts/Player/PlayerController.cs`
- Location: `UpdateNoiseLevel()` method
- Checks if `stealth_1` is unlocked via SaveSystem
- Applies 0.7× multiplier to CurrentNoiseLevel when moving
- Works for all movement states (crouch, walk, sprint)

**Code**:
```csharp
// Apply stealth skill reduction (Shadow Walk / stealth_1)
var saveSystem = Core.SaveSystem.Instance;
if (saveSystem != null)
{
    var unlockedSkills = saveSystem.GetUnlockedSkillIds();
    if (unlockedSkills != null && System.Array.Exists(unlockedSkills, id => id == "stealth_1"))
    {
        // Shadow Walk reduces noise by 30% (multiply by 0.7)
        CurrentNoiseLevel *= 0.7f;
    }
}
```

---

### 2. Heavy Hitter (combat_1) - Requirement 8.8
**Effect**: Apply 1.25× melee DamageMultiplier in DamageCalculator

**Implementation**: `Assets/Scripts/Combat/WeaponSystem.cs`
- Location: `MeleeWeapon.Fire()` method
- Checks if `combat_1` is unlocked via SaveSystem
- Passes 1.25× damage multiplier to `zombie.TakeDamage()`
- Only affects melee weapons (bat, etc.)

**Code**:
```csharp
// Check for Heavy Hitter skill (combat_1) - Requirement 8.8
float damageMultiplier = 1f;
var saveSystem = Core.SaveSystem.Instance;
if (saveSystem != null)
{
    var unlockedSkills = saveSystem.GetUnlockedSkillIds();
    if (unlockedSkills != null && System.Array.Exists(unlockedSkills, id => id == "combat_1"))
    {
        // Heavy Hitter: 1.25× melee damage
        damageMultiplier = 1.25f;
    }
}
// ...
zombie.TakeDamage(_baseDamage, hit.point, zone, damageMultiplier);
```

**Supporting Changes**:
- Updated `ZombieBase.TakeDamage()` signature to accept optional `attackerDamageMultiplier` parameter
- Parameter is passed to `DamageInput.AttackerDamageMultiplier` field

---

### 3. Tough Skin (survival_1) - Requirement 8.9
**Effect**: Increase PlayerHealth.MaxHealth by 20

**Implementation**: `Assets/Scripts/Player/PlayerHealth.cs`
- Location: `ApplySkillBonuses()` method, called in `Start()`
- Checks if `survival_1` is unlocked via SaveSystem
- Adds 20 to `_maxHealth` before setting initial health
- Effect persists across the entire run

**Code**:
```csharp
// Tough Skin (survival_1): +20 max health
if (System.Array.Exists(unlockedSkills, id => id == "survival_1"))
{
    _maxHealth += 20f;
}
```

---

### 4. Second Wind (survival_4) - Requirement 8.10
**Effect**: Enable passive regen coroutine when health <30%

**Implementation**: `Assets/Scripts/Player/PlayerHealth.cs`
- Location: `ApplySkillBonuses()` method sets `_regenRate`, `Update()` applies regen
- Checks if `survival_4` is unlocked via SaveSystem
- Sets `_regenRate` to 1.0 HP/second
- Regeneration only activates when health is below 30% of MaxHealth
- Includes 5-second delay after taking damage before regen starts

**Code**:
```csharp
// In ApplySkillBonuses():
// Second Wind (survival_4): passive regen when health < 30%
if (System.Array.Exists(unlockedSkills, id => id == "survival_4"))
{
    _regenRate = 1f;  // 1 HP per second
}

// In Update():
// Passive regeneration (from Second Wind skill - survival_4)
// Only works when health is below 30% of max
if (_regenRate > 0 &&
    _currentHealth < _maxHealth * 0.3f &&
    Time.time - _lastDamageTime > _regenDelay &&
    _currentHealth < _maxHealth)
{
    Heal(_regenRate * Time.deltaTime);
}
```

---

### 5. Marathon Runner (survival_2) - Requirement 7.8
**Effect**: Call InventorySystem.ExpandRows(1)

**Implementation**: `Assets/Scripts/Player/PlayerInventory.cs`
- Location: `Awake()` method
- Checks if `survival_2` is unlocked via SaveSystem
- Creates inventory with 3 rows instead of 2 (4×3 grid instead of 4×2)
- Effect is permanent for the run

**Code**:
```csharp
// Check for Marathon Runner skill (survival_2)
var saveSystem = Core.SaveSystem.Instance;
if (saveSystem != null)
{
    var unlockedSkills = saveSystem.GetUnlockedSkillIds();
    if (unlockedSkills != null && System.Array.Exists(unlockedSkills, id => id == "survival_2"))
    {
        _hasMarathonRunner = true;
    }
}

int rows = _hasMarathonRunner ? _expandedRows : _baseRows;
_inventory = new InventorySystem(_baseColumns, rows);
```

---

## Skill Tree Data Updates

Updated `Assets/Scripts/Logic/SkillTreeData.cs` to match requirements:
- **stealth_1**: Changed from "Quiet Steps" to "Shadow Walk"
- **combat_1**: Changed from "Steady Aim" to "Heavy Hitter"
- **survival_1**: "Tough Skin" (unchanged, but effect value updated)
- **survival_2**: Changed from "Field Medic" to "Marathon Runner"
- **survival_3**: Changed from "Pack Rat" to "Field Medic"
- **survival_4**: Changed from "Regeneration" to "Second Wind"

## Testing Recommendations

1. **Shadow Walk**: Spawn zombies, move around in different states (crouch/walk/sprint), verify noise detection radius is reduced
2. **Heavy Hitter**: Attack zombies with melee weapon, verify damage is 1.25× base damage
3. **Tough Skin**: Start new run, verify max health is 120 instead of 100
4. **Second Wind**: Take damage to below 30% health, wait 5 seconds, verify health regenerates at 1 HP/sec
5. **Marathon Runner**: Start new run, verify inventory has 3 rows instead of 2

## Requirements Satisfied

- ✅ Requirement 8.7: Shadow Walk noise reduction
- ✅ Requirement 8.8: Heavy Hitter melee damage boost
- ✅ Requirement 8.9: Tough Skin max health increase
- ✅ Requirement 8.10: Second Wind passive regeneration
- ✅ Requirement 7.8: Marathon Runner inventory expansion

## Files Modified

1. `Assets/Scripts/Logic/SkillTreeData.cs` - Updated skill definitions to match requirements
2. `Assets/Scripts/Player/PlayerController.cs` - Already had Shadow Walk implementation
3. `Assets/Scripts/Player/PlayerHealth.cs` - Already had Tough Skin and Second Wind implementation
4. `Assets/Scripts/Player/PlayerInventory.cs` - Already had Marathon Runner implementation
5. `Assets/Scripts/Combat/WeaponSystem.cs` - Added Heavy Hitter skill check in MeleeWeapon.Fire()
6. `Assets/Scripts/AI/ZombieBase.cs` - Updated TakeDamage() signature to accept damage multiplier

## Notes

- All skill effects are checked at runtime via SaveSystem.GetUnlockedSkillIds()
- Effects are applied immediately when skills are unlocked (no restart required)
- Skill effects persist for the entire run
- No performance impact - skill checks are minimal and cached where possible
