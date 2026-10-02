# XP and Leveling System Implementation

## Overview
Implemented the XP and leveling system for Dead City Escape as specified in Task 16.2. The system awards XP after each run based on performance metrics and applies escape route multipliers, handles level-ups with exponential XP scaling, and persists progression data.

## Requirements Implemented
- **Requirement 8.11**: Award XP after run with escape route multiplier
- **Requirement 8.12**: Calculate level-up threshold with exponential scaling and grant skill points

## Implementation Details

### 1. XP Award System (GameManager.cs)

#### Base XP Calculation
```csharp
// Formula: (RunTime in seconds) + (KillCount × 10)
int baseXP = (int)RunTimer + (ZombiesKilled * 10);
```

#### Escape Route Multipliers
- **Helicopter**: 2.0× (hardest route)
- **Car**: 1.5× (medium difficulty)
- **Sewer**: 1.25× (stealth route)

```csharp
float multiplier = SelectedRoute switch
{
    EscapeRoute.Helicopter => 2.0f,
    EscapeRoute.Car => 1.5f,
    EscapeRoute.Sewer => 1.25f,
    _ => 1.0f
};
int finalXP = (int)(baseXP * multiplier);
```

### 2. Level-Up System

#### XP Threshold Formula
```csharp
// BaseXPPerLevel × XPScalePerLevel^(level−1)
// Default: 200 × 1.15^(level−1)
int xpForNext = (int)(BaseXPPerLevel * Math.Pow(XPScalePerLevel, level - 1));
```

#### Level Progression Examples
- Level 1 → 2: 200 XP
- Level 2 → 3: 229 XP
- Level 3 → 4: 264 XP
- Level 10 → 11: 703 XP

#### Multiple Level-Ups
The system handles multiple level-ups in a single XP award:
```csharp
while (PlayerXP >= xpForNext)
{
    PlayerXP -= xpForNext;
    PlayerLevel++;
    SkillPoints += skillPointsPerLevel;
    xpForNext = GetXPForLevel(PlayerLevel + 1);
}
```

### 3. Skill Points
- **1 skill point** granted per level-up
- Skill points accumulate and can be spent in the skill tree
- Starting at level 1 = 0 skill points
- Level 5 = 4 skill points available

### 4. Persistence (SaveSystem.cs)

#### SaveData Structure
```csharp
public int PlayerLevel = 1;
public int PlayerXP = 0;
```

#### Auto-Save on XP Award
The system automatically persists progression after each XP award:
```csharp
SaveSystem.Instance.UpdateProgression(PlayerLevel, PlayerXP);
```

#### Load on Startup
Player level and XP are loaded from SaveSystem when GameManager initializes:
```csharp
PlayerLevel = SaveSystem.Instance.Data.PlayerLevel;
PlayerXP = SaveSystem.Instance.Data.PlayerXP;
SkillPoints = Mathf.Max(0, PlayerLevel - 1);
```

### 5. Run Result Recording

#### Victory
```csharp
SaveSystem.Instance.RecordRunResult(
    CurrentSeed,
    RunTimer,
    SelectedRoute.ToString(),
    ZombiesKilled,
    SurvivorsRescued,
    true  // victory
);
```

#### Game Over
Same as victory but with `false` for the victory parameter.

## Testing

### Unit Tests (XPLevelingTests.cs)
Created comprehensive unit tests covering:
1. **XP Threshold Calculation**: Verifies exponential scaling formula
2. **Base XP Calculation**: Tests run performance to XP conversion
3. **Escape Route Multipliers**: Validates 2.0×, 1.5×, 1.25× multipliers
4. **Multiple Level-Ups**: Ensures correct handling of multiple levels in one award
5. **XP Remainder**: Verifies XP carries over after level-up
6. **Skill Points**: Confirms 1 skill point per level-up

All tests pass successfully.

## Example Scenarios

### Scenario 1: Quick Helicopter Escape
- Run time: 300 seconds (5 minutes)
- Kills: 20 zombies
- Base XP: 300 + (20 × 10) = 500
- Multiplier: 2.0× (Helicopter)
- **Final XP: 1000**

### Scenario 2: Slow Car Escape
- Run time: 600 seconds (10 minutes)
- Kills: 30 zombies
- Base XP: 600 + (30 × 10) = 900
- Multiplier: 1.5× (Car)
- **Final XP: 1350**

### Scenario 3: Stealth Sewer Escape
- Run time: 450 seconds (7.5 minutes)
- Kills: 5 zombies (stealth approach)
- Base XP: 450 + (5 × 10) = 500
- Multiplier: 1.25× (Sewer)
- **Final XP: 625**

## Configuration

All XP parameters are configurable in GameConfig.asset:
- `BaseXPPerLevel`: 200 (default)
- `XPScalePerLevel`: 1.15 (default)
- `SkillPointsPerLevel`: 1 (default)
- `HelicopterXPMultiplier`: 2.0
- `CarXPMultiplier`: 1.5
- `SewerXPMultiplier`: 1.25

## Integration Points

### GameManager Events
- `OnXPGained`: Fired when XP is awarded
- `OnLevelUp`: Fired when player levels up (includes new level)

### UI Integration
The HUD and main menu can subscribe to these events to display:
- Current XP progress bar
- Level-up notifications
- Available skill points
- Total player level

## Notes

- XP is only awarded at the end of a run (victory or game over)
- Zombie kills during the run are tracked but don't award XP immediately
- The system supports multiple level-ups in a single run
- All progression is automatically saved to disk
- XP remainder carries over between levels correctly
