# Requirements Document

## Introduction

Dead City Escape is a first-person survival horror mobile game built in Unity 6 (URP 17) for Android and iOS. The player spawns in a seeded, procedurally generated 16-zone city and must scavenge resources, fight or evade four zombie types, and escape via one of three routes: Helicopter (hard, 2x XP), Car (medium, 1.5x XP), or Sewer (stealth, 1.25x XP). This overhaul brings all core systems to production-ready, fully functional condition on mobile — covering gameplay, AI, procedural generation, recipe-based asset generation, progression, save/load, mobile UI/controls, and full logic-layer test coverage.


## Glossary

- **Game**: The Dead City Escape Unity 6 mobile application.
- **Run**: A single play session from spawn to extraction or death, driven by a deterministic seed.
- **Seed**: A 32-bit integer that fully determines city layout, item placement, and zombie spawn tables for a Run.
- **Zone**: One of 16 district tiles in the 4x4 city grid, each 100×100 world units.
- **POI**: Point of Interest — a named location (e.g., Police Station, Parking Garage, Helipad) required by escape routes.
- **SeededRNG**: The xoshiro256** deterministic PRNG in `DeadCityEscape.Logic.SeededRNG`.
- **ZoneLayoutGenerator**: The pure-logic procedural city layout generator in `DeadCityEscape.Logic.ZoneLayoutGenerator`.
- **LRUCache**: The generic least-recently-used cache in `DeadCityEscape.Logic.LRUCache`.
- **DamageCalculator**: The pure-logic damage pipeline in `DeadCityEscape.Logic.DamageCalculator`.
- **InventorySystem**: The RE-style 4×2 grid inventory in `DeadCityEscape.Logic.InventorySystem`.
- **SkillTreeData**: The three-branch skill tree data model in `DeadCityEscape.Logic.SkillTreeData`.
- **CityGenerator**: The Unity MonoBehaviour that instantiates zone geometry and manages zone streaming.
- **ZombieBase**: The Unity MonoBehaviour base class for all zombie AI.
- **PlayerController**: The Unity MonoBehaviour first-person character controller.
- **EscapeRouteManager**: The Unity MonoBehaviour that tracks escape route objectives.
- **SaveSystem**: The Unity Singleton that persists run results, progression, and settings to JSON.
- **GameManager**: The Unity Singleton that manages game phase transitions and run lifecycle.
- **InputManager**: The Unity Singleton that unifies touch and keyboard/mouse input.
- **MobileJoystick**: The virtual joystick UI component for touch input.
- **HUDController**: The Unity MonoBehaviour that renders the in-game heads-up display.
- **ProceduralTexture**: The static class that generates textures from parameter recipes at runtime.
- **ProceduralGeometry**: The static class that generates mesh geometry from parameter recipes at runtime.
- **AudioManager**: The Unity Singleton that generates and plays procedural audio clips.
- **Recipe**: A serializable parameter set that fully describes how to generate a texture, mesh, or audio clip.
- **RecipeCache**: The on-device disk cache that stores generated assets keyed by app version + recipe hash + device tier.
- **ZombieSpawner**: The Unity MonoBehaviour that manages zombie population, spawn director, and noise event broadcasting.
- **Walker**: Zombie type with 60% spawn rate — slow, noise-attracted, dangerous in groups.
- **Runner**: Zombie type with 25% spawn rate — fast, rushes on detection.
- **Brute**: Zombie type with 10% spawn rate — slow, high health, guards key locations, AoE ground pound.
- **Screamer**: Zombie type with 5% spawn rate — low health, alerts nearby zombies, priority target.
- **Helicopter Route**: Hard escape route requiring fuel cans, radio repair, and a 3-minute helipad defense.
- **Car Route**: Medium escape route requiring a car key, repair parts, and clearing barricades.
- **Sewer Route**: Stealth escape route requiring lockpicks, sewer access unlocks, and an acetylene torch.
- **Skill Branch**: One of three progression paths — Stealth, Combat, or Survival — each with 4 tiers.
- **Daily Challenge**: A run using a deterministic seed derived from the UTC calendar date.
- **Lite Mode**: A reduced-quality rendering profile for devices with less than 4 GB RAM.
- **ASTC**: Adaptive Scalable Texture Compression, the required texture format for Android/iOS.
- **NavMesh**: Unity's navigation mesh used for zombie pathfinding.
- **ObjectPool**: The Unity component that recycles GameObjects to avoid runtime allocation spikes.


## Requirements

### Requirement 1: Deterministic Seeded World Generation

**User Story:** As a player, I want every run with the same seed to produce an identical city, so that daily challenges and shared seeds are fair and reproducible.

#### Acceptance Criteria

1. THE SeededRNG SHALL produce an identical sequence of values for any given 32-bit integer seed across all supported platforms.
2. WHEN the same seed is provided to ZoneLayoutGenerator, THE ZoneLayoutGenerator SHALL produce identical ZoneLayoutData arrays including building footprints, road segments, threat levels, and POI assignments.
3. THE ZoneLayoutGenerator SHALL generate exactly 16 zones arranged in a 4×4 grid, each 100×100 world units.
4. WHEN a seed is provided, THE ZoneLayoutGenerator SHALL assign each required POI type (RadioTower, ParkingGarage, PoliceStation, SewerAccess, GasStation, Hospital) to a deterministic zone index.
5. THE SeededRNG SHALL support forking an independent child RNG via
 Fork() so that per-zone generation does not consume the global RNG sequence.
6. FOR ALL valid seeds, generating all zones then serializing and deserializing the ZoneLayoutData SHALL produce an equivalent layout (round-trip property).
7. THE GameManager SHALL derive the Daily Challenge seed deterministically from the UTC calendar date as: year × 10000 + month × 100 + day.


### Requirement 2: Zone Streaming and LRU Cache

**User Story:** As a player, I want the city to load and unload smoothly as I move through it, so that the game stays within the 2 GB RAM budget without hitches.

#### Acceptance Criteria

1. WHEN the player moves into a new zone, THE CityGenerator SHALL load all zones within a radius of 2 zones around the player's current zone within 1 frame of the zone boundary crossing.
2. WHEN a zone moves outside the active radius, THE CityGenerator SHALL deactivate its GameObject and return it to the LRUCache within 1 frame.
3. THE LRUCache SHALL evict the least-recently-used zone GameObject when the cache reaches its configured capacity of 6 zones, invoking the eviction callback to destroy the evicted object.
4. WHEN a previously visited zone re-enters the active radius and its entry is still in the LRUCache, THE CityGenerator SHALL reactivate the cached GameObject without regenerating geometry.
5. THE LRUCache SHALL maintain Count ≤ Capacity at all times.
6. WHILE the player is in the Playing phase, THE CityGenerator SHALL keep at least the player's current zone and all immediately adjacent zones active.
7. IF zone geometry generation fails for any zone, THEN THE CityGenerator SHALL log the error and substitute a flat ground plane so the run can continue.


### Requirement 3: Recipe-Based Procedural Asset Generation

**User Story:** As a developer, I want all textures, meshes, and audio to be generated from parameter recipes at runtime, so that the initial download stays under 100 MB.

#### Acceptance Criteria

1. THE ProceduralTexture SHALL generate ground, building wall, road, and neon sign textures entirely from seed and parameter inputs, with no external texture files required.
2. THE ProceduralGeometry SHALL generate building body meshes, road plane meshes, and prop meshes from BuildingFootprint and RoadSegment parameter inputs.
3. THE AudioManager SHALL generate footstep, gunshot, zombie groan, and explosion audio clips from synthesizer parameter inputs, with no external audio files required.
4. WHEN a Recipe is generated, THE RecipeCache SHALL store the resulting asset on device disk keyed by the string "{appVersion}:{recipeHash}:{deviceTier}".
5. WHEN a Recipe is requested and a matching cache entry exists, THE RecipeCache SHALL return the cached asset without regenerating it.
6. THE RecipeCache SHALL enforce a configurable disk cap of 500 MB, evicting the least-recently-used entries when the cap is exceeded.
7. WHEN the app version changes, THE RecipeCache SHALL invalidate all cached entries from the previous version.
8. IF recipe generation fails at runtime, THEN THE Game SHALL substitute a shipped fallback asset (solid-color texture or unit cube mesh) and log the failure.
9. FOR ALL valid Recipe inputs, generating an asset then re-generating from the same Recipe SHALL produce a pixel-identical texture or vertex-identical mesh (idempotence property).
10. THE ProceduralTexture SHALL output textures in ASTC-compatible format (RGBA32 source, compressed via Unity's runtime compression API) on Android and iOS.


### Requirement 4: Mobile First-Person Player Controller

**User Story:** As a mobile player, I want responsive two-thumb touch controls for movement and camera, so that I can play comfortably on a phone without a physical controller.

#### Acceptance Criteria

1. THE PlayerController SHALL read movement input from the left MobileJoystick on touch devices and from WASD/arrow keys on desktop.
2. THE PlayerController SHALL read camera look input from the right MobileJoystick on touch devices and from mouse delta on desktop.
3. WHEN the sprint input is held and the player is moving forward and not crouching, THE PlayerController SHALL move at 8.0 m/s and increase camera FOV by 10 degrees over 0.125 seconds.
4. WHEN the crouch input is toggled, THE PlayerController SHALL reduce CharacterController height to 1.0 m and camera holder Y to 0.9 m within the same frame.
5. WHEN the player is grounded and the jump input is pressed and the player is not crouching, THE PlayerController SHALL apply an upward velocity of sqrt(jumpForce × 2 × |gravity|).
6. THE PlayerController SHALL clamp camera pitch to the range [−80°, +80°].
7. WHEN the player is moving while crouching, THE PlayerController SHALL set CurrentNoiseLevel to 5. WHEN the player is sprinting, THE PlayerController SHALL set CurrentNoiseLevel to 30. WHEN the player is walking, THE PlayerController SHALL set CurrentNoiseLevel to 15. WHEN the player is stationary, THE PlayerController SHALL set CurrentNoiseLevel to 0.
8. THE MobileJoystick SHALL support floating mode, repositioning its background anchor to the touch-down point each time a new touch begins.
9. THE MobileJoystick SHALL apply a dead zone of 0.1 normalized units, outputting Vector2.zero for inputs within the dead zone.
10. WHERE aim assist is enabled in settings, THE PlayerController SHALL apply a configurable rotational pull toward the nearest zombie within 15° of the crosshair and within 20 m.


### Requirement 5: Damage Pipeline and Combat

**User Story:** As a player, I want weapon hits to feel impactful and consistent, so that combat decisions are meaningful and skill-based.

#### Acceptance Criteria

1. THE DamageCalculator SHALL apply damage in the following order: base damage × DamageMultiplier → headshot multiplier (2.5×) → explosive falloff → armor absorption (capped at 80%) → floor to 0.
2. WHEN DamageResult.FinalDamage is ≥ 15, THE DamageCalculator SHALL set ShouldStagger to true.
3. WHEN IsExplosive is true and ExplosionRadius > 0, THE DamageCalculator SHALL scale damage by (1 − clamp(DistanceFromExplosion / ExplosionRadius, 0, 1)).
4. THE DamageCalculator SHALL set NoiseLevel to 80 for explosive damage, 50 for ranged damage with BaseDamage > 20, and 15 for melee damage.
5. WHEN a MeleeWeapon fires, THE MeleeWeapon SHALL perform a SphereCast of radius 0.5 m along the camera forward vector up to the weapon range and apply damage to all ZombieBase components within the swing arc of 60°.
6. WHEN a RangedWeapon fires, THE RangedWeapon SHALL perform a hitscan Raycast along the camera forward vector with recoil spread proportional to accumulated recoil, and apply damage to the first ZombieBase hit.
7. WHEN a RangedWeapon's CurrentAmmo reaches 0, THE RangedWeapon SHALL automatically call StartReload if the player's inventory contains the required ammo item.
8. WHEN a RangedWeapon has a suppressor attached, THE RangedWeapon SHALL set NoiseLevel to 10 instead of 50.
9. THE WeaponBase SHALL broadcast a noise event via ZombieSpawner.BroadcastNoise after every successful fire.
10. FOR ALL DamageInput values where ArmorRating is in [0, 0.8] and DamageMultiplier > 0, THE DamageCalculator SHALL produce FinalDamage ≤ BaseDamage × DamageMultiplier × HeadshotMultiplier (metamorphic: armor never increases damage).


### Requirement 6: Zombie AI — Four Types with Full State Machine

**User Story:** As a player, I want each zombie type to behave distinctly and predictably, so that I can develop strategies and the game remains challenging.

#### Acceptance Criteria

1. THE ZombieBase SHALL implement the state machine: Idle → Patrol → Investigate → Chase → Attack → Search → Staggered → Dead, with valid transitions as defined in the GDD.
2. WHEN a zombie in Idle or Patrol state has line-of-sight to the player within its sightRange and within its sightAngle, THE ZombieBase SHALL transition to Chase.
3. WHEN a zombie in Idle or Patrol state receives a noise event with noiseLevel > 5 within its hearingRange, THE ZombieBase SHALL transition to Investigate with the noise position as the investigate point.
4. WHEN a zombie in Chase state loses line-of-sight for more than 3 seconds, THE ZombieBase SHALL transition to Search.
5. WHEN a zombie in Search state has not regained line-of-sight within 12 seconds, THE ZombieBase SHALL transition to Idle.
6. WHEN a zombie receives damage with ShouldStagger true, THE ZombieBase SHALL transition to Staggered and disable NavMeshAgent movement for the stagger duration.
7. WHEN a WalkerZombie is in Chase state, THE WalkerZombie SHALL move at 1.5 m/s × 1.2 chase multiplier and have a hearingRange of 25 m.
8. WHEN a RunnerZombie is in Chase state, THE RunnerZombie SHALL scale its NavMeshAgent speed between moveSpeed and moveSpeed × rushSpeedMultiplier (1.8) inversely proportional to distance from the player.
9. WHEN a BruteZombie performs an attack and the ground pound cooldown of 5 seconds has elapsed, THE BruteZombie SHALL deal groundPoundDamage (20) to all PlayerHealth components within groundPoundRadius (4 m) via Physics.OverlapSphere.
10. WHEN a ScreamerZombie enters Chase state and the scream cooldown of 8 seconds has elapsed, THE ScreamerZombie SHALL call OnNoiseHeard on all non-dead ZombieBase components within 40 m with noiseLevel 100, then start the scream cooldown.
11. WHEN a zombie's health reaches 0, THE ZombieBase SHALL transition to Dead, disable its NavMeshAgent and Collider, invoke the OnDeath event, and call GameManager.RecordZombieKill.
12. THE ZombieSpawner SHALL maintain zombie population according to the spawn director, increasing spawn intensity as RunTimer increases and as player noise accumulates.


### Requirement 7: Inventory System

**User Story:** As a player, I want a grid-based inventory that limits what I can carry, so that resource management creates meaningful tension.

#### Acceptance Criteria

1. THE InventorySystem SHALL manage a configurable grid of Columns × Rows cells, defaulting to 4 columns × 2 rows.
2. WHEN TryAdd is called with an ItemDefinition and count, THE InventorySystem SHALL first attempt to stack onto existing items of the same ID up to MaxStack before placing a new item in a free slot.
3. WHEN no free slot of sufficient size exists and no stackable item exists, THE InventorySystem SHALL return false from TryAdd without modifying state.
4. WHEN Remove is called with an itemId and count, THE InventorySystem SHALL reduce item counts from the most-recently-added stacks first and remove items whose count reaches 0.
5. THE InventorySystem SHALL correctly place items that occupy multiple grid cells (Width > 1 or Height > 1) and prevent overlapping placements.
6. FOR ALL sequences of TryAdd and Remove operations that result in a net zero change, THE InventorySystem SHALL return to its original state (invariant: add then remove restores state).
7. THE InventorySystem SHALL expose Has(itemId, count) returning true if and only if CountOf(itemId) ≥ count.
8. WHEN the Survival branch skill "Marathon Runner" is unlocked, THE InventorySystem SHALL increase its effective grid to 4 columns × 3 rows.


### Requirement 8: Skill Tree Progression

**User Story:** As a player, I want to unlock skills across three branches between runs, so that I feel a sense of progression and can tailor my playstyle.

#### Acceptance Criteria

1. THE SkillTreeData SHALL define exactly 12 skill nodes: 4 tiers × 3 branches (Stealth, Combat, Survival).
2. WHEN CanUnlock is called for a skill whose Prerequisite is null, THE SkillTreeData SHALL return true if the skill is not already unlocked.
3. WHEN CanUnlock is called for a skill whose Prerequisite is not null, THE SkillTreeData SHALL return true only if the prerequisite skill is unlocked and the skill itself is not already unlocked.
4. WHEN Unlock is called for a skill where CanUnlock returns true, THE SkillTreeData SHALL set the skill's Unlocked flag to true and return true.
5. WHEN Unlock is called for a skill where CanUnlock returns false, THE SkillTreeData SHALL leave all state unchanged and return false.
6. THE SkillTreeData SHALL expose GetBranchSkills(branch) returning skills sorted ascending by Tier.
7. WHEN the "Shadow Walk" skill (stealth_1) is unlocked, THE PlayerController SHALL multiply CurrentNoiseLevel by 0.7.
8. WHEN the "Heavy Hitter" skill (combat_1) is unlocked, THE DamageCalculator SHALL apply a melee DamageMultiplier of 1.25 to all melee weapon damage inputs.
9. WHEN the "Tough Skin" skill (survival_1) is unlocked, THE PlayerHealth SHALL increase MaxHealth by 20.
10. WHEN the "Second Wind" skill (survival_4) is unlocked, WHILE the player's health is below 30% of MaxHealth, THE PlayerHealth SHALL regenerate 1 HP per second.
11. THE GameManager SHALL award XP after each run using the escape route multiplier: Helicopter 2.0×, Car 1.5×, Sewer 1.25×.
12. WHEN PlayerXP reaches the threshold for the next level (BaseXPPerLevel × XPScalePerLevel^(level−1)), THE GameManager SHALL increment PlayerLevel and reset the XP remainder.


### Requirement 9: Helicopter Escape Route (Hard)

**User Story:** As a player, I want to attempt the hardest escape route for the greatest reward, so that skilled play is meaningfully recognized.

#### Acceptance Criteria

1. WHEN the Helicopter route is activated, THE EscapeRouteManager SHALL initialize four sequential objectives: locate helipad, collect 5 fuel cans, repair radio transmitter, defend helipad for 180 seconds.
2. WHEN the player enters the RadioTower POI trigger, THE EscapeRouteManager SHALL advance the "heli_find_helipad" objective to complete.
3. WHEN the player picks up a fuel can item, THE EscapeRouteManager SHALL advance the "heli_fuel_cans" objective count by 1.
4. WHEN the player uses a toolkit and batteries from inventory at the radio transmitter interactable, THE EscapeRouteManager SHALL advance the "heli_repair_radio" objective to complete and consume the toolkit and batteries from inventory.
5. WHEN the "heli_repair_radio" objective is complete, THE EscapeRouteManager SHALL start the 180-second helipad defense coroutine and spawn a ZombieSpawner wave at elevated intensity.
6. WHEN the 180-second defense timer elapses without the player dying, THE EscapeRouteManager SHALL advance the "heli_defend" objective to complete and call GameManager.TriggerVictory.
7. IF the player dies during the defense phase, THEN THE GameManager SHALL call TriggerGameOver and the defense coroutine SHALL stop.
8. WHEN all four Helicopter objectives are complete, THE GameManager SHALL award XP with a 2.0× multiplier applied to the base completion bonus.


### Requirement 10: Car Escape Route (Medium)

**User Story:** As a player, I want a balanced escape route that rewards both combat and exploration, so that I have a reliable mid-difficulty option.

#### Acceptance Criteria

1. WHEN the Car route is activated, THE EscapeRouteManager SHALL initialize four sequential objectives: find vehicle, get car key, gather 3 repair parts, clear barricades.
2. WHEN the player enters the ParkingGarage POI trigger, THE EscapeRouteManager SHALL advance the "car_find_vehicle" objective to complete.
3. WHEN the player picks up the car key item from the PoliceStation POI, THE EscapeRouteManager SHALL advance the "car_get_key" objective to complete and add the car key to the player's inventory.
4. WHEN the player picks up a battery, spare tire, or fuel item, THE EscapeRouteManager SHALL advance the "car_repair_parts" objective count by 1, up to a maximum of 3.
5. WHEN the player interacts with a barricade while the "car_repair_parts" objective is complete, THE EscapeRouteManager SHALL advance the "car_clear_barricade" objective to complete.
6. WHEN all four Car objectives are complete, THE EscapeRouteManager SHALL call GameManager.TriggerVictory with a 1.5× XP multiplier.
7. THE PoliceStation POI SHALL be designated as a high-threat zone with ThreatLevel.Extreme, causing the ZombieSpawner to maintain at least 3 active zombies within 30 m of the POI.


### Requirement 11: Sewer Escape Route (Stealth)

**User Story:** As a player, I want a stealth-focused escape route that rewards quiet play, so that non-combat builds have a viable path to victory.

#### Acceptance Criteria

1. WHEN the Sewer route is activated, THE EscapeRouteManager SHALL initialize four sequential objectives: acquire lockpicks, unlock 3 sewer access points, find acetylene torch, cut through reinforced gate.
2. WHEN the player picks up the lockpick set item, THE EscapeRouteManager SHALL advance the "sewer_lockpicks" objective to complete and add lockpicks to inventory.
3. WHEN the player interacts with a SewerAccess POI trigger while lockpicks are in inventory, THE EscapeRouteManager SHALL advance the "sewer_unlock_gates" objective count by 1 and consume one lockpick use.
4. WHEN the "sewer_unlock_gates" objective count reaches 3, THE EscapeRouteManager SHALL mark the objective complete.
5. WHEN the player enters Zone 10 and picks up the acetylene torch item, THE EscapeRouteManager SHALL advance the "sewer_torch" objective to complete.
6. WHEN the player interacts with the reinforced gate in Zone 15 while the acetylene torch is in inventory, THE EscapeRouteManager SHALL advance the "sewer_breach" objective to complete and call GameManager.TriggerVictory with a 1.25× XP multiplier.
7. WHILE the player is crouching and moving within 10 m of a zombie, THE ZombieBase hearing check SHALL use a noise threshold 50% higher than the standard threshold, making detection harder during stealth approach.


### Requirement 12: Save System and Persistence

**User Story:** As a player, I want my progression, best times, and settings to persist between sessions, so that my effort carries over across runs.

#### Acceptance Criteria

1. THE SaveSystem SHALL serialize SaveData to JSON and write it to Application.persistentDataPath on every call to Save().
2. WHEN the application starts, THE SaveSystem SHALL call Load() and deserialize SaveData from disk; IF the file does not exist, THE SaveSystem SHALL create a default SaveData and call Save().
3. IF the JSON file is corrupt or unreadable, THEN THE SaveSystem SHALL log the error, create a default SaveData, and call Save() to overwrite the corrupt file.
4. WHEN RecordRunResult is called with victory = true and the run time is less than BestRunTime, THE SaveSystem SHALL update BestRunTime, BestRunSeed, and BestEscapeRoute and call Save().
5. WHEN SaveSkills is called with an array of skill IDs, THE SaveSystem SHALL serialize them as a comma-separated string and call Save().
6. WHEN GetUnlockedSkillIds is called, THE SaveSystem SHALL return the deserialized array of skill IDs from the current SaveData.
7. FOR ALL SaveData objects, serializing to JSON then deserializing SHALL produce an equivalent SaveData object (round-trip property).
8. WHEN DeleteSaveData is called, THE SaveSystem SHALL delete the file from disk, create a default SaveData, and call Save().
9. THE SaveSystem SHALL persist player settings including MasterVolume, MusicVolume, SFXVolume, TouchSensitivity, InvertY, and QualityLevel.


### Requirement 13: HUD and Mobile UI

**User Story:** As a mobile player, I want a clear, uncluttered HUD that shows all critical information at a glance, so that I can make decisions quickly without leaving the game world.

#### Acceptance Criteria

1. THE HUDController SHALL display the player's current health as a numeric value and a visual bar that updates within 1 frame of PlayerHealth changing.
2. THE HUDController SHALL display the active weapon's current ammo and magazine size, updating within 1 frame of OnAmmoChanged firing.
3. THE HUDController SHALL display the current objective description and progress (e.g., "Fuel Cans: 3/5") for the active escape route, updating within 1 frame of OnObjectiveUpdated firing.
4. THE HUDController SHALL display a crosshair at the screen center during gameplay.
5. WHEN a zombie is killed or an objective is completed, THE HUDController SHALL display a notification message for 3 seconds then fade it out.
6. THE HUDController SHALL display the elapsed run timer in MM:SS format, updating every second.
7. THE MobileJoystick components SHALL only be visible and active on touch-capable devices (Application.isMobilePlatform or UnityEngine.Input.touchSupported).
8. THE PauseMenuController SHALL pause the game (Time.timeScale = 0) when the pause button is tapped and resume (Time.timeScale = 1) when the resume button is tapped.
9. WHERE the QualityLevel setting is 0 (Lite Mode), THE HUDController SHALL hide weather particle effects and reduce the HUD update rate to every 2 frames to reduce GPU load.
10. THE MainMenuController SHALL display a "Daily Challenge" button that calls GameManager.StartDailyChallenge() and a "New Run" button that calls GameManager.StartNewRun() with a random seed.


### Requirement 14: Mobile Performance Targets

**User Story:** As a player on a mid-tier Android or iOS device, I want the game to run smoothly without overheating my device, so that I can complete a full 12–20 minute run comfortably.

#### Acceptance Criteria

1. THE Game SHALL maintain a minimum of 30 FPS on devices with 4 GB RAM and a GPU equivalent to Adreno 640 or Apple A13, measured over any 10-second window during active gameplay.
2. THE Game SHALL not exceed 2 GB peak RAM usage at any point during a run, including during zone transitions.
3. THE Game SHALL reach the main menu within 10 seconds of application launch on the baseline device.
4. THE initial application download size SHALL not exceed 100 MB on the Google Play Store and Apple App Store.
5. THE Game SHALL use ASTC texture compression for all runtime-generated and shipped textures on Android and iOS.
6. THE CityGenerator SHALL use Unity's ObjectPool to recycle building and road GameObjects, avoiding runtime allocation spikes during zone streaming.
7. THE ZombieSpawner SHALL limit the maximum number of simultaneously active NavMeshAgent components to 12 on devices with QualityLevel 0 (Lite Mode) and 20 on devices with QualityLevel 1 or higher.
8. THE Game SHALL set Application.targetFrameRate to 60 on devices with QualityLevel 1 and to 30 on devices with QualityLevel 0.
9. WHILE the player is in a zone transition, THE LoadingScreenUI SHALL display a "Generating District…" progress indicator if zone generation takes longer than 0.5 seconds.
10. THE WeatherSystem SHALL disable rain and fog particle systems when QualityLevel is 0 to avoid expensive transparent overdraw.


### Requirement 15: Game Loop and Phase Management

**User Story:** As a player, I want the game to transition cleanly between menus, loading, gameplay, and end screens, so that the experience feels polished and complete.

#### Acceptance Criteria

1. THE GameManager SHALL manage the following phases in order: MainMenu → Loading → Spawning → Playing → (Paused ↔ Playing) → EscapeSequence → Victory or GameOver.
2. WHEN StartNewRun is called, THE GameManager SHALL generate a new seed if none is provided, create a SeededRNG, reset RunTimer and kill counts, and transition to Loading.
3. WHEN the Loading phase begins, THE GameManager SHALL load the GameScene asynchronously and transition to Spawning on completion.
4. WHEN the Spawning phase begins, THE CityGenerator SHALL generate initial zones and THE PlayerController SHALL be teleported to a spawn position in a ThreatLevel.Low zone.
5. WHEN the Spawning phase setup is complete, THE GameManager SHALL transition to Playing.
6. WHEN TriggerVictory is called, THE GameManager SHALL transition to Victory, apply the escape route XP multiplier, call SaveSystem.RecordRunResult with victory = true, and display the victory screen.
7. WHEN TriggerGameOver is called, THE GameManager SHALL transition to GameOver, call SaveSystem.RecordRunResult with victory = false, and display the game over screen.
8. WHEN TogglePause is called during Playing, THE GameManager SHALL set Time.timeScale to 0 and transition to Paused. WHEN TogglePause is called during Paused, THE GameManager SHALL set Time.timeScale to 1 and transition to Playing.
9. WHEN ReturnToMainMenu is called, THE GameManager SHALL set Time.timeScale to 1, transition to MainMenu, and load the MainMenu scene.


### Requirement 16: Logic Layer Test Coverage

**User Story:** As a developer, I want comprehensive NUnit tests for all pure-logic classes, so that regressions are caught immediately and the logic layer can be validated without Unity.

#### Acceptance Criteria

1. THE SeededRNGTests SHALL verify that the same seed produces the same sequence of values across multiple instantiations (determinism property).
2. THE SeededRNGTests SHALL verify that Fork() produces a child RNG whose sequence is independent from the parent's subsequent calls.
3. THE SeededRNGTests SHALL verify that WeightedChoice always returns an index within [0, weights.Length) for any non-empty weight array.
4. THE SeededRNGTests SHALL verify that Shuffle produces a permutation of the original array (all elements present, same count).
5. THE LRUCacheTests SHALL verify that Count never exceeds Capacity after any sequence of Put operations.
6. THE LRUCacheTests SHALL verify that TryGet on a recently Put key returns the correct value (round-trip: put then get).
7. THE LRUCacheTests SHALL verify that the eviction callback is invoked with the correct key and value when capacity is exceeded.
8. THE DamageCalculatorTests SHALL verify that FinalDamage is 0 when ArmorRating is 0.8 and BaseDamage is any positive value (armor cap property).
9. THE DamageCalculatorTests SHALL verify that headshot damage is exactly 2.5× non-headshot damage for identical inputs (metamorphic property).
10. THE DamageCalculatorTests SHALL verify that explosive damage at DistanceFromExplosion ≥ ExplosionRadius is 0 (falloff boundary property).
11. THE InventorySystemTests SHALL verify that TryAdd followed by Remove for the same item and count leaves the inventory in its original state (round-trip property).
12. THE InventorySystemTests SHALL verify that Count never exceeds the grid capacity (Columns × Rows) regardless of item sizes.
13. THE SkillTreeTests SHALL verify that unlocking a skill whose prerequisite is not yet unlocked returns false and leaves state unchanged.
14. THE SkillTreeTests SHALL verify that TotalUnlocked increases by exactly 1 after each successful Unlock call (invariant).
15. THE ZoneLayoutGeneratorTests SHALL verify that GenerateAllZones returns exactly 16 zones with ZoneIndex values 0–15.
16. THE ZoneLayoutGeneratorTests SHALL verify that the same seed produces identical zone layouts on repeated calls (determinism property).
17. THE ZoneLayoutGeneratorTests SHALL verify that all required POI types (RadioTower, ParkingGarage, PoliceStation, SewerAccess) are present in the generated layout.


### Requirement 17: Procedural Audio

**User Story:** As a player, I want atmospheric sound effects that react to gameplay events, so that audio reinforces tension without requiring large shipped audio files.

#### Acceptance Criteria

1. THE AudioManager SHALL generate footstep audio clips from synthesizer parameters (pitch, duration) with no external audio files.
2. THE AudioManager SHALL generate gunshot audio clips from synthesizer parameters (attack, decay, volume, frequency) with no external audio files.
3. THE AudioManager SHALL generate zombie groan audio clips from synthesizer parameters (duration, frequency, amplitude) with no external audio files.
4. THE AudioManager SHALL generate explosion audio clips from synthesizer parameters (amplitude, duration) with no external audio files.
5. WHEN PlaySFXAtPosition is called, THE AudioManager SHALL attenuate volume by distance using a configurable falloff curve, reaching 0 at the specified maxDistance.
6. THE AudioManager SHALL respect the MasterVolume and SFXVolume settings from SaveSystem when playing any clip.
7. WHEN a ScreamerZombie screams, THE AudioManager SHALL play the generated groan clip at 1.2× pitch and with a spatial range of 40 m.
8. FOR ALL valid synthesizer parameter inputs, generating an audio clip then regenerating from the same parameters SHALL produce an identical AudioClip (idempotence property).


### Requirement 18: Player Health and Death

**User Story:** As a player, I want clear feedback when I take damage and a fair death state, so that survival decisions feel consequential.

#### Acceptance Criteria

1. THE PlayerHealth SHALL initialize CurrentHealth to MaxHealth (100 by default) at the start of each run.
2. WHEN TakeDamage is called with a positive damage value, THE PlayerHealth SHALL reduce CurrentHealth by that amount and invoke an OnDamaged event with the damage value and hit position.
3. WHEN CurrentHealth reaches 0 or below, THE PlayerHealth SHALL invoke an OnDeath event and call GameManager.TriggerGameOver.
4. THE PlayerHealth SHALL clamp CurrentHealth to the range [0, MaxHealth] at all times.
5. WHEN a medkit item is used from inventory, THE PlayerHealth SHALL increase CurrentHealth by 40 (or 60 if the "Field Medic" skill is unlocked) and remove one medkit from inventory.
6. WHILE the "Second Wind" skill is unlocked and CurrentHealth is below 30% of MaxHealth, THE PlayerHealth SHALL add 1 HP per second via a passive regen coroutine.
7. THE HUDController SHALL display a red vignette overlay that increases in opacity as CurrentHealth decreases below 50% of MaxHealth.


### Requirement 19: Commercial-Quality Main Menu and Loading Screen

**User Story:** As a player, I want a polished main menu and loading experience that feels on par with commercially released mobile games, so that the game makes a strong first impression and sets the tone before gameplay begins.

#### Acceptance Criteria

1. THE MainMenuController SHALL display an animated splash/logo sequence on first launch (studio logo fade-in → game logo reveal with particle burst) lasting no more than 3 seconds, skippable by tap.
2. THE MainMenuController SHALL display a full-screen atmospheric background — a procedurally animated city skyline with neon lights flickering and fog drifting — rendered at 30 FPS to conserve battery on the menu screen.
3. THE MainMenuController SHALL present the following primary buttons in a vertically stacked layout optimized for one-thumb reach on phones: "Play" (starts a new run), "Daily Challenge", "Skill Tree", "Settings", and "Quit".
4. THE MainMenuController SHALL display the player's current level, total XP, and best escape time prominently on the main menu, loaded from SaveSystem on scene entry.
5. WHEN the "Play" button is tapped, THE MainMenuController SHALL present a route selection sheet (bottom sheet slide-up animation) showing all three escape routes with their difficulty rating, XP multiplier, and a short description before confirming the run start.
6. THE MainMenuController SHALL display a "Continue" button in place of "Play" if a run-in-progress save state exists, allowing the player to resume the last session.
7. THE LoadingScreenUI SHALL display a full-screen loading scene with an animated progress bar, a rotating thematic tip (e.g., "Walkers are attracted to noise — stay quiet"), and the procedurally generated city name derived from the run seed.
8. THE LoadingScreenUI SHALL show a smooth animated fill bar that reflects actual async scene load progress (0–100%), never jumping or stalling visibly for more than 0.5 seconds.
9. WHEN loading completes and the scene is ready, THE LoadingScreenUI SHALL play a "breach" transition animation (screen cracks like glass, then shatters to reveal the game world) before deactivating.
10. THE MainMenuController SHALL include a Settings panel (slide-in from right) with sliders for Master Volume, Music Volume, SFX Volume, and Touch Sensitivity; a toggle for Invert Y; and a Quality selector (Lite / Standard) — all changes persisted immediately via SaveSystem.
11. THE MainMenuController SHALL support safe-area insets on notched/punch-hole Android and iOS devices, ensuring no UI element is obscured by the device notch, home indicator, or status bar.
12. ALL MainMenuController and LoadingScreenUI animations SHALL use Unity's UI Toolkit animation system or DOTween-compatible LeanTween calls, completing within the frame budget of 33 ms per frame at 30 FPS on the baseline device.
13. THE MainMenuController SHALL display a "Best Run" card showing the best escape route icon, seed, and time — tappable to copy the seed to clipboard for sharing.
14. WHEN the device has no save data (first launch), THE MainMenuController SHALL play a one-time animated "How to Escape" tutorial overlay (three swipeable cards) before showing the main menu buttons.
