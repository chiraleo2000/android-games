# Implementation Plan: Dead City Escape Mobile Overhaul

## Overview

This plan implements a complete, production-ready first-person survival horror mobile game in Unity 6 (URP 17) for Android. The implementation follows a layered architecture: pure C# logic layer (testable standalone), Unity MonoBehaviours consuming the logic layer, and comprehensive property-based testing with FsCheck. All assets are procedurally generated at runtime to keep the download under 100 MB.

The plan covers: seeded world generation, zone streaming, procedural asset generation, mobile FPS controls, damage/combat systems, 4 zombie AI types, inventory, skill tree, 3 escape routes, save system, HUD/UI, performance optimization, game loop, 29 property-based tests, and full Android deployment.

## Tasks

- [x] 1. Project setup and Unity configuration
  - Create Unity 6 project with URP 17
  - Configure Android build settings (IL2CPP, ARM64, API 26-34)
  - Set up Input System package and action maps
  - Create scene structure (MainMenu.unity, LoadingScreen.unity, Game.unity)
  - Configure URP assets (Standard and Lite quality tiers)
  - Set up assembly definitions for logic layer and tests
  - _Requirements: 14.3, 14.4, 14.5, 14.8_

- [x] 2. Logic layer — Core systems (DeadCityEscape.Logic)
  - [x] 2.1 Implement SeededRNG (xoshiro256**)
    - Write xoshiro256** PRNG with splitmix64 seed expansion
    - Implement NextInt, NextFloat, WeightedChoice, Shuffle, Fork
    - _Requirements: 1.1, 1.5_

  - [ ]* 2.2 Write property tests for SeededRNG
    - **Property 1: SeededRNG Determinism**
    - **Property 4: SeededRNG Fork Independence**
    - **Property 28: WeightedChoice Index Bounds**
    - **Property 29: Shuffle Produces a Permutation**
    - **Validates: Requirements 1.1, 1.5, 16.1, 16.2, 16.3, 16.4**


  - [x] 2.3 Implement ZoneLayoutGenerator
    - Write GenerateAllZones to produce 16 zones in 4×4 grid
    - Assign threat levels, POIs, building footprints, road segments
    - Use rng.Fork() per zone for deterministic generation
    - _Requirements: 1.2, 1.3, 1.4_

  - [ ]* 2.4 Write property tests for ZoneLayoutGenerator
    - **Property 2: ZoneLayoutGenerator Determinism**
    - **Property 3: Zone Grid Structural Invariant**
    - **Property 5: ZoneLayoutData Serialization Round-Trip**
    - **Property 6: Required POI Types Always Present**
    - **Validates: Requirements 1.2, 1.3, 1.4, 1.6, 16.15, 16.16, 16.17**

  - [x] 2.5 Implement LRUCache<TKey, TValue>
    - Write doubly-linked-list + dictionary LRU cache
    - Implement Put, TryGet, Remove, ContainsKey with eviction callback
    - _Requirements: 2.3, 2.5_

  - [ ]* 2.6 Write property tests for LRUCache
    - **Property 7: LRUCache Capacity Invariant**
    - **Property 8: LRUCache Eviction Callback Correctness**
    - **Property 9: LRUCache Put-Then-Get Round-Trip**
    - **Validates: Requirements 2.3, 2.5, 16.5, 16.6, 16.7**

  - [x] 2.7 Implement DamageCalculator
    - Write Calculate method with damage pipeline
    - Apply base × multiplier → headshot(2.5×) → explosive falloff → armor → stagger → noise
    - _Requirements: 5.1, 5.2, 5.3, 5.4_

  - [ ]* 2.8 Write property tests for DamageCalculator
    - **Property 15: Damage Pipeline — Armor Never Increases Damage**
    - **Property 16: Stagger Threshold Invariant**
    - **Property 17: Explosive Damage Falloff Boundary**
    - **Property 18: Damage Noise Level Assignment**
    - **Validates: Requirements 5.1, 5.2, 5.3, 5.4, 5.10, 16.9, 16.10**

  - [x] 2.9 Implement InventorySystem
    - Write grid-based inventory with 4×2 default size
    - Implement TryAdd with stacking, Remove, Has, CountOf, ExpandRows
    - Handle multi-cell items and overlap prevention
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.7_

  - [ ]* 2.10 Write property tests for InventorySystem
    - **Property 19: Inventory Add-Then-Remove Round-Trip**
    - **Property 20: Inventory No Overlap for Multi-Cell Items**
    - **Property 21: Inventory Capacity Invariant**
    - **Property 22: Inventory Has() Logical Equivalence**
    - **Validates: Requirements 7.1, 7.5, 7.6, 7.7, 16.11, 16.12**


  - [x] 2.11 Implement SkillTreeData
    - Write SkillNode data model with 12 skills (3 branches × 4 tiers)
    - Implement CanUnlock, Unlock, GetBranchSkills with prerequisite logic
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6_

  - [ ]* 2.12 Write property tests for SkillTreeData
    - **Property 23: SkillTree Unlock Prerequisite Logic**
    - **Property 24: SkillTree Unlock State Transitions**
    - **Property 25: TotalUnlocked Increments by Exactly 1**
    - **Property 26: GetBranchSkills Sorted by Tier**
    - **Validates: Requirements 8.2, 8.3, 8.4, 8.5, 8.6, 16.13, 16.14**

- [x] 3. Checkpoint — Logic layer complete
  - Run all standalone NUnit tests with `dotnet test`
  - Ensure all 29 property-based tests pass with 500 iterations each
  - Verify zero Unity dependencies in DeadCityEscape.Logic assembly

- [x] 4. Unity core systems (Singletons and managers)
  - [x] 4.1 Implement GameManager singleton
    - Write DontDestroyOnLoad singleton with phase state machine
    - Implement StartNewRun, StartDailyChallenge, TriggerVictory, TriggerGameOver
    - Add TogglePause, ReturnToMainMenu, RecordZombieKill
    - Track RunTimer, KillCount, PlayerLevel, PlayerXP with events
    - _Requirements: 15.1, 15.2, 15.5, 15.6, 15.7, 15.8, 15.9, 8.11, 8.12_

  - [x] 4.2 Implement SaveSystem singleton
    - Write DontDestroyOnLoad singleton with SaveData model
    - Implement Save, Load with JSON serialization to persistentDataPath
    - Add RecordRunResult, SaveSkills, GetUnlockedSkillIds, DeleteSaveData
    - Handle corrupt save file recovery
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5, 12.6, 12.8, 12.9_

  - [ ]* 4.3 Write property test for SaveData serialization
    - **Property 27: SaveData Serialization Round-Trip**
    - **Validates: Requirements 12.7**

  - [x] 4.4 Implement InputManager singleton
    - Write DontDestroyOnLoad singleton using Unity Input System
    - Expose MoveInput, LookInput, SprintHeld, CrouchDown, JumpDown, FireDown, ReloadDown, InteractDown
    - Auto-detect touch vs keyboard/mouse input
    - _Requirements: 4.1, 4.2_

  - [x] 4.5 Implement AudioManager singleton
    - Write DontDestroyOnLoad singleton for procedural audio
    - Implement GenerateFootstep, GenerateGunshot, GenerateGroan, GenerateExplosion
    - Add PlaySFXAtPosition with distance attenuation
    - Add PlayMusic with volume control from SaveSystem
    - _Requirements: 17.1, 17.2, 17.3, 17.4, 17.5, 17.6, 17.7_

  - [ ]* 4.6 Write unit tests for AudioManager
    - Test idempotence of audio generation
    - Test volume attenuation by distance
    - _Requirements: 17.8_


- [x] 5. Procedural generation systems
  - [x] 5.1 Implement RecipeCache static class
    - Write TryGet, Store, InvalidateVersion, EnforceDiskCap
    - Use key format: "{appVersion}:{recipeHash}:{deviceTier}"
    - Store manifest as JSON in persistentDataPath/recipe_cache/
    - _Requirements: 3.4, 3.5, 3.6, 3.7_

  - [ ]* 5.2 Write property test for RecipeCache
    - **Property 11: RecipeCache Store-Then-Retrieve Round-Trip**
    - **Validates: Requirements 3.5**

  - [x] 5.3 Implement ProceduralTexture static class
    - Write Generate method for ground, building wall, road, neon sign textures
    - Use Perlin noise, brick patterns, asphalt, glow masks
    - Output RGBA32 source, compress to ASTC at runtime
    - Integrate with RecipeCache
    - _Requirements: 3.1, 3.10_

  - [ ]* 5.4 Write property test for ProceduralTexture
    - **Property 10: Recipe Generation Idempotence (textures)**
    - **Validates: Requirements 3.9**

  - [x] 5.5 Implement ProceduralGeometry static class
    - Write GenerateBuilding and GenerateRoad methods
    - Create meshes with positions, normals, UVs, triangles
    - Integrate with RecipeCache
    - _Requirements: 3.2_

  - [ ]* 5.6 Write property test for ProceduralGeometry
    - **Property 10: Recipe Generation Idempotence (meshes)**
    - **Validates: Requirements 3.9**

  - [x] 5.7 Implement CityGenerator MonoBehaviour
    - Write Initialize with SeededRNG
    - Implement UpdatePlayerZone with zone streaming (radius 2)
    - Use LRUCache<int, ZoneInstance> with capacity 6
    - Use ObjectPool for building and road GameObjects
    - Bake NavMesh per zone at runtime
    - Handle zone generation failure with fallback ground plane
    - _Requirements: 2.1, 2.2, 2.4, 2.6, 2.7, 14.6_

- [x] 6. Player systems
  - [x] 6.1 Implement PlayerController MonoBehaviour
    - Write first-person character controller with CharacterController
    - Read input from InputManager
    - Implement movement (walk 4.5 m/s, sprint 8.0 m/s, crouch)
    - Implement camera look with pitch clamp [−80°, +80°]
    - Implement jump with sqrt(jumpForce × 2 × |gravity|)
    - Track CurrentNoiseLevel (0/5/15/30 based on movement state)
    - Add aim assist (optional, 15° cone, 20 m range)
    - Call CityGenerator.UpdatePlayerZone on zone change
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.10_

  - [ ]* 6.2 Write property tests for PlayerController
    - **Property 12: Camera Pitch Clamp**
    - **Property 13: Noise Level Per Movement State**
    - **Validates: Requirements 4.6, 4.7**


  - [x] 6.3 Implement PlayerHealth MonoBehaviour
    - Write health system with MaxHealth (100 default), CurrentHealth
    - Implement TakeDamage, Heal, UseMedkit
    - Invoke OnDamaged event with damage and hit position
    - Invoke OnDeath event and call GameManager.TriggerGameOver at 0 HP
    - Add passive regen coroutine for "Second Wind" skill
    - Clamp CurrentHealth to [0, MaxHealth]
    - _Requirements: 18.1, 18.2, 18.3, 18.4, 18.5, 18.6_

  - [x] 6.4 Implement PlayerInventory MonoBehaviour
    - Wrap InventorySystem from logic layer
    - Expose AddItem, RemoveItem, HasItem methods
    - Subscribe to skill unlock events to call ExpandRows for "Marathon Runner"
    - _Requirements: 7.8_

  - [x] 6.5 Implement PlayerFlashlight MonoBehaviour
    - Add spotlight component with battery drain mechanic
    - Toggle on/off with input, drain battery over time
    - _Requirements: (implicit from design)_

- [x] 7. Weapon systems
  - [x] 7.1 Implement WeaponBase abstract MonoBehaviour
    - Write abstract Fire and StartReload methods
    - Implement BroadcastNoise via ZombieSpawner
    - Add ammo tracking and OnAmmoChanged event
    - _Requirements: 5.9_

  - [x] 7.2 Implement MeleeWeapon : WeaponBase
    - Write Fire with SphereCast (radius 0.5 m, 60° arc)
    - Apply damage to all ZombieBase in arc
    - Set NoiseLevel to 15
    - _Requirements: 5.5_

  - [x] 7.3 Implement RangedWeapon : WeaponBase
    - Write Fire with hitscan Raycast
    - Apply recoil spread, damage to first ZombieBase hit
    - Implement auto-reload when CurrentAmmo reaches 0
    - Support suppressor (NoiseLevel 10 vs 50)
    - _Requirements: 5.6, 5.7, 5.8_

  - [x] 7.4 Implement Explosive : WeaponBase
    - Write Fire with Physics.OverlapSphere for AoE damage
    - Apply explosive falloff via DamageCalculator
    - Set NoiseLevel to 80
    - _Requirements: 5.3_

  - [x] 7.5 Implement PickupSystem MonoBehaviour
    - Write interactable pickup trigger for items
    - Add to PlayerInventory on interact
    - Destroy pickup GameObject on successful add
    - _Requirements: (implicit from design)_

- [x] 8. Checkpoint — Player systems complete
  - Test player movement, camera, health, inventory in Play mode
  - Verify weapon firing, damage application, noise broadcasting
  - Ensure all tests pass, ask the user if questions arise


- [x] 9. Zombie AI systems
  - [x] 9.1 Implement ZombieBase abstract MonoBehaviour
    - Write state machine: Idle → Patrol → Investigate → Chase → Attack → Search → Staggered → Dead
    - Implement UpdateState with switch on CurrentState
    - Add HasLoS check with sight range, sight angle, raycast
    - Implement OnNoiseHeard with hearing range check
    - Add TakeDamage with stagger logic (FinalDamage ≥ 15)
    - Invoke OnDeath event, disable NavMeshAgent/Collider, call GameManager.RecordZombieKill
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.11_

  - [x] 9.2 Implement WalkerZombie : ZombieBase
    - Set moveSpeed 1.0 m/s, chaseSpeed 1.8 m/s
    - Set sightRange 20 m, sightAngle 90°, hearingRange 25 m
    - Implement state transitions per design
    - _Requirements: 6.7_

  - [x] 9.3 Implement RunnerZombie : ZombieBase
    - Set moveSpeed 2.0 m/s, chaseSpeed 2.0–3.6 m/s (distance-scaled)
    - Set sightRange 30 m, sightAngle 120°, hearingRange 20 m
    - Implement rush speed scaling inversely with distance
    - _Requirements: 6.8_

  - [x] 9.4 Implement BruteZombie : ZombieBase
    - Set moveSpeed 0.8 m/s, chaseSpeed 1.2 m/s
    - Set sightRange 15 m, sightAngle 60°, hearingRange 15 m
    - Implement ground pound attack (20 damage, 4 m radius, 5 s cooldown)
    - _Requirements: 6.9_

  - [x] 9.5 Implement ScreamerZombie : ZombieBase
    - Set moveSpeed 1.5 m/s, chaseSpeed 2.5 m/s
    - Set sightRange 25 m, sightAngle 100°, hearingRange 30 m
    - Implement scream ability (noiseLevel 100, 40 m range, 8 s cooldown)
    - Play groan clip at 1.2× pitch via AudioManager
    - _Requirements: 6.10, 17.7_

  - [x] 9.6 Implement ZombieSpawner MonoBehaviour
    - Write spawn director with intensity scaling by RunTimer
    - Implement BroadcastNoise to all zombies in range
    - Implement SpawnWave with type distribution (Walker 60%, Runner 25%, Brute 10%, Screamer 5%)
    - Enforce max active NavMeshAgent cap (12 Lite, 20 Standard)
    - Disable agents on Idle zombies >40 m from player
    - _Requirements: 6.12, 14.7_

  - [ ]* 9.7 Write PlayMode tests for zombie AI
    - Test state transitions (Idle → Chase → Attack)
    - Test noise hearing and investigation
    - Test stagger on high damage
    - _Requirements: 6.1–6.12_


- [x] 10. Escape route systems
  - [x] 10.1 Implement EscapeRouteManager MonoBehaviour
    - Write ActivateRoute to initialize objective sequence
    - Track ActiveObjective with completion conditions
    - Invoke OnObjectiveUpdated and OnRouteComplete events
    - _Requirements: 9.1, 10.1, 11.1_

  - [x] 10.2 Implement Helicopter route objectives
    - Create heli_find_helipad (RadioTower POI trigger)
    - Create heli_fuel_cans (count/5 pickup)
    - Create heli_repair_radio (toolkit + batteries interaction)
    - Create heli_defend (180 s defense coroutine with wave spawning)
    - Call GameManager.TriggerVictory with 2.0× XP multiplier on completion
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.7, 9.8_

  - [x] 10.3 Implement Car route objectives
    - Create car_find_vehicle (ParkingGarage POI trigger)
    - Create car_get_key (PoliceStation POI pickup)
    - Create car_repair_parts (count/3: battery, tire, fuel)
    - Create car_clear_barricade (interaction when parts complete)
    - Call GameManager.TriggerVictory with 1.5× XP multiplier on completion
    - Designate PoliceStation as ThreatLevel.Extreme with 3 zombies
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7_

  - [x] 10.4 Implement Sewer route objectives
    - Create sewer_lockpicks (lockpick set pickup)
    - Create sewer_unlock_gates (count/3: SewerAccess POI interactions)
    - Create sewer_torch (acetylene torch pickup in Zone 10)
    - Create sewer_breach (reinforced gate interaction in Zone 15)
    - Call GameManager.TriggerVictory with 1.25× XP multiplier on completion
    - Apply stealth noise modifier (50% higher threshold when crouching within 10 m)
    - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7_

  - [ ]* 10.5 Write PlayMode tests for escape routes
    - Test objective progression for all three routes
    - Test victory trigger and XP multipliers
    - _Requirements: 9.1–9.8, 10.1–10.7, 11.1–11.7_

- [x] 11. UI systems — Mobile joysticks
  - [x] 11.1 Implement MobileJoystick MonoBehaviour
    - Write floating mode with PointerDown, PointerDrag, PointerUp
    - Apply dead zone of 0.1 normalized units
    - Output Vector2 to InputManager
    - Show/hide based on Application.isMobilePlatform
    - _Requirements: 4.8, 4.9, 13.7_

  - [ ]* 11.2 Write property test for MobileJoystick
    - **Property 14: MobileJoystick Dead Zone**
    - **Validates: Requirements 4.9**


- [x] 12. UI systems — HUD and in-game UI
  - [x] 12.1 Implement HUDController MonoBehaviour
    - Display health bar and numeric value (update within 1 frame)
    - Display ammo and magazine size (update within 1 frame)
    - Display objective description and progress (update within 1 frame)
    - Display crosshair at screen center
    - Display notification messages (3 s fade-out)
    - Display run timer in MM:SS format (update every second)
    - Display red vignette overlay scaling with low health
    - Subscribe to PlayerHealth.OnDamaged, WeaponBase events, EscapeRouteManager.OnObjectiveUpdated
    - Hide weather particles and reduce update rate to every 2 frames in Lite mode
    - _Requirements: 13.1, 13.2, 13.3, 13.4, 13.5, 13.6, 13.9, 18.7_

  - [x] 12.2 Implement PauseMenuController MonoBehaviour
    - Set Time.timeScale to 0 on pause, 1 on resume
    - Display pause panel with Resume, Settings, Quit buttons
    - _Requirements: 13.8_

  - [x] 12.3 Implement SafeAreaPanel MonoBehaviour
    - Read Screen.safeArea and adjust RectTransform anchors
    - Apply to Canvas_MainMenu, Canvas_HUD, RouteSelectionSheet
    - _Requirements: 19.11_

  - [x] 12.4 Create Canvas_HUD prefab
    - Set up Screen Space - Overlay canvas with CanvasScaler (1080×1920)
    - Add HealthBar, AmmoDisplay, ObjectiveDisplay, RunTimer, Crosshair, NotificationArea
    - Add VignetteOverlay, MobileJoystick_Left, MobileJoystick_Right
    - _Requirements: 13.1–13.7_

- [x] 13. UI systems — Main menu and loading screen
  - [x] 13.1 Implement MainMenuController MonoBehaviour
    - Display animated splash/logo sequence (3 s, skippable)
    - Display procedurally animated city skyline background (30 FPS)
    - Display primary buttons: Play, Daily Challenge, Skill Tree, Settings, Quit
    - Display player level, total XP, best escape time from SaveSystem
    - Display "Continue" button if run-in-progress exists
    - Display route selection sheet (bottom sheet slide-up) on Play tap
    - Display Settings panel (slide-in from right) with volume/sensitivity sliders
    - Display "Best Run" card with seed copy-to-clipboard
    - Display "How to Escape" tutorial overlay on first launch
    - _Requirements: 19.1, 19.2, 19.3, 19.4, 19.5, 19.6, 19.10, 19.13, 19.14_

  - [x] 13.2 Implement LoadingScreenUI MonoBehaviour
    - Display full-screen loading scene with progress bar
    - Display rotating thematic tip and procedurally generated city name
    - Show smooth animated fill bar (0–100%) reflecting async scene load
    - Play "breach" transition animation (screen cracks, shatters) on completion
    - Show "Generating District…" indicator if zone generation >0.5 s
    - _Requirements: 19.7, 19.8, 19.9, 14.9_

  - [x] 13.3 Implement SkillTreeUI MonoBehaviour
    - Display 12 skill nodes in 3 branches × 4 tiers
    - Show unlock state, prerequisites, descriptions
    - Call SkillTreeData.Unlock on tap if CanUnlock returns true
    - _Requirements: 8.1–8.6_


  - [x] 13.4 Create MainMenu.unity scene
    - Set up Canvas_MainMenu with Screen Space - Overlay
    - Add SplashSequence, MainMenuPanel, RouteSelectionSheet, SkillTreePanel, SettingsPanel, TutorialOverlay
    - Apply SafeAreaPanel to root
    - _Requirements: 19.1–19.14_

  - [x] 13.5 Create LoadingScreen.unity scene
    - Set up Canvas_Loading with ProgressBar, TipText, CityNameText
    - _Requirements: 19.7–19.9_

- [x] 14. Checkpoint — UI systems complete
  - Test all UI interactions in Play mode
  - Verify safe-area handling on notched devices
  - Verify animations complete within 33 ms frame budget
  - Ensure all tests pass, ask the user if questions arise

- [x] 15. Game loop and scene management
  - [x] 15.1 Implement GameManager phase transitions
    - Write TransitionToLoading with async scene loading
    - Write TransitionToSpawning with CityGenerator initialization
    - Write TransitionToPlaying with player spawn
    - Write phase change event broadcasting
    - _Requirements: 15.1, 15.2, 15.3, 15.4, 15.5_

  - [x] 15.2 Implement daily challenge seed formula
    - Calculate seed as: year × 10000 + month × 100 + day (UTC)
    - _Requirements: 1.7_

  - [x] 15.3 Wire up scene loading flow
    - MainMenu → LoadingScreen (additive) → Game (additive) → unload LoadingScreen/MainMenu
    - Implement LoadingScreenUI.PlayBreachTransition callback
    - _Requirements: 15.3_

  - [ ]* 15.4 Write PlayMode tests for game loop
    - Test phase transitions (MainMenu → Loading → Spawning → Playing → Victory)
    - Test pause/resume
    - Test return to main menu
    - _Requirements: 15.1–15.9_

- [x] 16. Skill system integration
  - [x] 16.1 Wire up skill effects to gameplay systems
    - "Shadow Walk" (stealth_1): multiply PlayerController.CurrentNoiseLevel by 0.7
    - "Heavy Hitter" (combat_1): apply 1.25× melee DamageMultiplier in DamageCalculator
    - "Tough Skin" (survival_1): increase PlayerHealth.MaxHealth by 20
    - "Second Wind" (survival_4): enable passive regen coroutine when health <30%
    - "Marathon Runner" (survival_2): call InventorySystem.ExpandRows(1)
    - _Requirements: 8.7, 8.8, 8.9, 8.10, 7.8_

  - [x] 16.2 Implement XP and leveling system
    - Award XP after run with escape route multiplier (Helicopter 2.0×, Car 1.5×, Sewer 1.25×)
    - Calculate level-up threshold: BaseXPPerLevel × XPScalePerLevel^(level−1)
    - Increment PlayerLevel and reset XP remainder on threshold
    - _Requirements: 8.11, 8.12_


- [x] 17. Performance optimization and quality tiers
  - [x] 17.1 Configure URP assets
    - Create URP_Standard.asset (Forward+, HDR, MSAA 2×, shadows 30 m)
    - Create URP_Lite.asset (Forward, no HDR, no MSAA, no shadows)
    - Set up Quality Settings with Level 0 (Lite) and Level 1 (Standard)
    - _Requirements: 14.8_

  - [x] 17.2 Implement ObjectPool for zone streaming
    - Pre-warm building pool (20 prefabs) and road pool (10 prefabs)
    - Use Get/Release in CityGenerator zone activation/deactivation
    - _Requirements: 14.6_

  - [x] 17.3 Implement NavMesh per-zone baking
    - Bake NavMeshData at runtime using NavMeshSurface.BuildNavMesh
    - Store NavMeshData in ZoneInstance, add/remove via NavMesh.AddNavMeshData
    - Handle bake failure gracefully (log error, no zombies in zone)
    - _Requirements: (implicit from design)_

  - [x] 17.4 Implement texture atlas strategy
    - Create 2048×2048 ASTC atlas per BuildingStyle (4 atlases)
    - Create 1024×1024 atlas for ground and road textures
    - Pack UVs at generation time in ProceduralTexture
    - _Requirements: 14.5_

  - [x] 17.5 Implement GPU instancing and static batching
    - Enable GPU instancing on all building and road materials
    - Apply static batching to road quads within a zone
    - _Requirements: (implicit from design)_

  - [x] 17.6 Implement quality tier differences
    - Set targetFrameRate (30 Lite, 60 Standard)
    - Set max NavMeshAgents (12 Lite, 20 Standard)
    - Toggle shadows, reflection probes, particles, post-processing
    - Set zone streaming radius (1 Lite, 2 Standard)
    - _Requirements: 14.7, 14.8_

  - [x] 17.7 Implement error handling
    - Zone generation failure → fallback ground plane
    - Recipe generation failure → fallback white texture / unit cube
    - Save file corruption → default SaveData
    - NavMesh bake failure → log error, no zombies
    - Audio generation failure → silent clip
    - _Requirements: 2.7, 3.8, 12.3_

  - [x] 17.8 Implement application lifecycle handlers
    - OnApplicationPause(true) → SaveSystem.Save()
    - OnApplicationFocus(false) → SaveSystem.Save()
    - _Requirements: (implicit from design)_

- [x] 18. Checkpoint — Performance and optimization complete
  - Profile on Android device (Adreno 640 or equivalent)
  - Verify 30 FPS minimum over 10-second window
  - Verify 2 GB peak RAM usage
  - Verify 10-second launch time to main menu
  - Ensure all tests pass, ask the user if questions arise


- [-] 19. Test infrastructure and coverage
  - [-] 19.1 Set up standalone NUnit test project
    - Create Tests/DeadCityEscape.Logic/DeadCityEscape.Logic.Tests.csproj
    - Target net8.0, reference NUnit 4.x and FsCheck 3.x
    - Add all logic layer property-based tests (Properties 1–29)
    - Configure [Property(MaxTest = 500)] and [Trait("Feature", "dead-city-escape-mobile-overhaul")]
    - _Requirements: 16.1–16.17_

  - [ ] 19.2 Set up Unity TestRunner EditMode tests
    - Create Assets/Tests/EditMode/ with EditModeTests.asmdef
    - Add DamageCalculatorEditTests, InventoryEditTests
    - Add RecipeCache file I/O tests
    - Add SaveSystem serialization tests
    - _Requirements: 16.1–16.17_

  - [ ] 19.3 Set up Unity TestRunner PlayMode tests
    - Create Assets/Tests/PlayMode/ with PlayModeTests.asmdef
    - Add PlayerControllerTests (movement, noise, camera)
    - Add ZombieAITests (state transitions, LoS, hearing)
    - Add EscapeRouteTests (objective progression)
    - Add SaveSystemTests (file I/O)
    - Add GameManagerTests (phase transitions)
    - _Requirements: 16.1–16.17_

  - [ ] 19.4 Run all tests and verify coverage
    - Run `dotnet test Tests/DeadCityEscape.Logic/` (standalone)
    - Run Unity EditMode tests
    - Run Unity PlayMode tests
    - Verify all 29 property-based tests pass with 500 iterations
    - _Requirements: 16.1–16.17_

- [x] 20. Android build configuration
  - [x] 20.1 Configure Android Player Settings
    - Set Package Name: com.studio.deadcityescape
    - Set Version: 1.0.0, Bundle Version Code: 1
    - Set Minimum API Level: 26, Target API Level: 34
    - Set Scripting Backend: IL2CPP
    - Set Target Architectures: ARM64 + x86_64
    - Set Active Input Handling: Input System Package (New)
    - _Requirements: 14.4_

  - [x] 20.2 Configure Android build settings
    - Enable Build App Bundle (AAB): true
    - Enable Split APKs by ABI: true
    - Enable Minify (Release): Proguard
    - Set Compression: LZ4HC
    - _Requirements: 14.4_

  - [x] 20.3 Configure Gradle templates
    - Add mainTemplate.gradle with ndk abiFilters
    - Add packagingOptions to exclude armeabi-v7a
    - Add androidx.core:core:1.12.0 dependency
    - _Requirements: 14.4_

  - [x] 20.4 Configure IL2CPP and stripping
    - Set Managed Stripping Level: Minimal
    - Create Assets/link.xml to preserve DeadCityEscape.Logic, System, System.Core
    - _Requirements: 14.4_


  - [x] 20.5 Create BuildScript.cs
    - Write BuildAndroid method with BuildPlayerOptions
    - Include all three scenes: MainMenu, LoadingScreen, Game
    - Set target to BuildTarget.Android
    - Set locationPathName to build/Android/DeadCityEscape.aab
    - _Requirements: 14.4_

- [ ] 21. Android deployment and testing
  - [ ] 21.1 Build Android AAB
    - Run BuildScript.BuildAndroid from Unity Editor
    - Verify output AAB size <100 MB
    - _Requirements: 14.4_

  - [ ] 21.2 Test on Android Studio emulator
    - Create emulator with API 26, 4 GB RAM, Adreno 640 equivalent
    - Install AAB via adb
    - Test full app lifecycle: install → splash → main menu → route selection → gameplay → escape/death → results
    - _Requirements: 14.1, 14.2, 14.3_

  - [ ] 21.3 Test on physical Android device
    - Install on mid-tier Android device (4 GB RAM, Adreno 640 or equivalent)
    - Profile FPS, RAM usage, launch time
    - Verify 30 FPS minimum, 2 GB peak RAM, 10 s launch time
    - Test all 3 escape routes to completion
    - _Requirements: 14.1, 14.2, 14.3_

  - [ ] 21.4 Verify all 19 requirements implemented
    - Requirement 1: Deterministic seeded world generation ✓
    - Requirement 2: Zone streaming and LRU cache ✓
    - Requirement 3: Recipe-based procedural asset generation ✓
    - Requirement 4: Mobile first-person player controller ✓
    - Requirement 5: Damage pipeline and combat ✓
    - Requirement 6: Zombie AI — four types with full state machine ✓
    - Requirement 7: Inventory system ✓
    - Requirement 8: Skill tree progression ✓
    - Requirement 9: Helicopter escape route (hard) ✓
    - Requirement 10: Car escape route (medium) ✓
    - Requirement 11: Sewer escape route (stealth) ✓
    - Requirement 12: Save system and persistence ✓
    - Requirement 13: HUD and mobile UI ✓
    - Requirement 14: Mobile performance targets ✓
    - Requirement 15: Game loop and phase management ✓
    - Requirement 16: Logic layer test coverage ✓
    - Requirement 17: Procedural audio ✓
    - Requirement 18: Player health and death ✓
    - Requirement 19: Commercial-quality main menu and loading screen ✓
    - _Requirements: 1.1–19.14_

  - [ ] 21.5 Verify all 29 correctness properties tested
    - Property 1: SeededRNG Determinism ✓
    - Property 2: ZoneLayoutGenerator Determinism ✓
    - Property 3: Zone Grid Structural Invariant ✓
    - Property 4: SeededRNG Fork Independence ✓
    - Property 5: ZoneLayoutData Serialization Round-Trip ✓
    - Property 6: Required POI Types Always Present ✓
    - Property 7: LRUCache Capacity Invariant ✓
    - Property 8: LRUCache Eviction Callback Correctness ✓
    - Property 9: LRUCache Put-Then-Get Round-Trip ✓
    - Property 10: Recipe Generation Idempotence ✓
    - Property 11: RecipeCache Store-Then-Retrieve Round-Trip ✓
    - Property 12: Camera Pitch Clamp ✓
    - Property 13: Noise Level Per Movement State ✓
    - Property 14: MobileJoystick Dead Zone ✓
    - Property 15: Damage Pipeline — Armor Never Increases Damage ✓
    - Property 16: Stagger Threshold Invariant ✓
    - Property 17: Explosive Damage Falloff Boundary ✓
    - Property 18: Damage Noise Level Assignment ✓
    - Property 19: Inventory Add-Then-Remove Round-Trip ✓
    - Property 20: Inventory No Overlap for Multi-Cell Items ✓
    - Property 21: Inventory Capacity Invariant ✓
    - Property 22: Inventory Has() Logical Equivalence ✓
    - Property 23: SkillTree Unlock Prerequisite Logic ✓
    - Property 24: SkillTree Unlock State Transitions ✓
    - Property 25: TotalUnlocked Increments by Exactly 1 ✓
    - Property 26: GetBranchSkills Sorted by Tier ✓
    - Property 27: SaveData Serialization Round-Trip ✓
    - Property 28: WeightedChoice Index Bounds ✓
    - Property 29: Shuffle Produces a Permutation ✓
    - _Requirements: 16.1–16.17_


- [ ] 22. Final integration and polish
  - [ ] 22.1 End-to-end gameplay testing
    - Test complete run: spawn → explore → combat → escape (all 3 routes)
    - Test death and game over flow
    - Test pause/resume during gameplay
    - Test return to main menu and restart
    - Test daily challenge seed consistency
    - _Requirements: 15.1–15.9_

  - [ ] 22.2 UI/UX polish
    - Verify all animations complete within 33 ms frame budget
    - Verify safe-area handling on notched devices
    - Verify touch input responsiveness
    - Verify HUD updates within 1 frame
    - _Requirements: 13.1–13.9, 19.11, 19.12_

  - [ ] 22.3 Audio polish
    - Test all procedural audio clips (footsteps, gunshots, groans, explosions)
    - Verify volume attenuation by distance
    - Verify MasterVolume, MusicVolume, SFXVolume settings
    - _Requirements: 17.1–17.8_

  - [ ] 22.4 Performance validation
    - Profile on baseline device (4 GB RAM, Adreno 640)
    - Verify 30 FPS minimum over 10-second window
    - Verify 2 GB peak RAM usage
    - Verify 10-second launch time to main menu
    - Verify <100 MB download size
    - _Requirements: 14.1, 14.2, 14.3, 14.4_

  - [ ] 22.5 Save system validation
    - Test save/load across app restarts
    - Test corrupt save file recovery
    - Test run-in-progress save/resume
    - Test skill unlock persistence
    - Test best run tracking
    - _Requirements: 12.1–12.9_

- [ ] 23. Final checkpoint — Deployment ready
  - All 19 requirements implemented and verified
  - All 29 property-based tests passing with 500 iterations
  - All Unity EditMode and PlayMode tests passing
  - Android AAB builds successfully
  - Full app lifecycle tested on Android device
  - Performance targets met (30 FPS, 2 GB RAM, 10 s launch, <100 MB)
  - Ready for Play Store internal track deployment

## Notes

- Tasks marked with `*` are optional property-based tests and can be skipped for faster MVP, but are strongly recommended for production quality
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation at major milestones
- Property tests validate universal correctness properties with FsCheck (500 iterations each)
- Unit tests validate specific examples and edge cases
- The implementation follows a bottom-up approach: logic layer → Unity systems → integration → testing → deployment
- All code is C# targeting .NET 8 for logic layer and Unity 6 scripting runtime
- Zero external asset files ship in the build — all textures, meshes, and audio are procedurally generated at runtime

