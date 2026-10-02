# Design Document — Dead City Escape: Mobile Overhaul

## Overview

Dead City Escape is a first-person survival horror mobile game built in Unity 6 (URP 17) for Android (SDK 26–34, arm64-v8a + x86_64) and iOS 14+. The player spawns in a seeded, procedurally generated 16-zone city and must scavenge, fight or evade four zombie types, and escape via one of three routes. All textures, meshes, and audio are generated at runtime from parameter recipes (kkrieger-style), keeping the initial download under 100 MB.

The overhaul brings all 19 core systems to production-ready condition: deterministic world generation, zone streaming, procedural asset generation, mobile controls, combat, AI, inventory, skill tree, three escape routes, save/load, HUD, performance management, game loop, logic-layer tests, procedural audio, player health, and a commercial-quality main menu.

### Key Design Principles

- Pure logic layer (`DeadCityEscape.Logic`) has zero Unity dependencies — testable with standalone NUnit.
- Unity MonoBehaviours in `Assets/Scripts/` consume the logic layer via thin adapters.
- All randomness flows through `SeededRNG` (xoshiro256**) — no `UnityEngine.Random` in gameplay code.
- All assets are procedurally generated; no external texture/audio/mesh files ship in the build.
- Two quality tiers: Lite (QualityLevel 0, ≤4 GB RAM devices) and Standard (QualityLevel 1+).

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                        Unity Application                            │
│                                                                     │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │                    Unity Layer (Assets/Scripts/)             │   │
│  │                                                              │   │
│  │  Singletons: GameManager · SaveSystem · AudioManager        │   │
│  │              InputManager · ZombieSpawner                    │   │
│  │                                                              │   │
│  │  MonoBehaviours: PlayerController · PlayerHealth             │   │
│  │    CityGenerator · ZombieBase (Walker/Runner/Brute/Screamer) │   │
│  │    EscapeRouteManager · HUDController · WeaponBase           │   │
│  │    MobileJoystick · MainMenuController · LoadingScreenUI     │   │
│  │    ProceduralTexture · ProceduralGeometry                    │   │
│  │                                                              │   │
│  │  UI: Canvas (MainMenu) · Canvas (HUD) · Canvas (PauseMenu)  │   │
│  └──────────────────────┬───────────────────────────────────────┘   │
│                         │ calls pure C# APIs                        │
│  ┌──────────────────────▼───────────────────────────────────────┐   │
│  │              Logic Layer (DeadCityEscape.Logic)              │   │
│  │                                                              │   │
│  │  SeededRNG · ZoneLayoutGenerator · LRUCache                  │   │
│  │  DamageCalculator · InventorySystem · SkillTreeData          │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                     │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │              Tests (Tests/DeadCityEscape.Logic/)             │   │
│  │  Standalone NUnit — no Unity deps                            │   │
│  │  SeededRNGTests · LRUCacheTests · DamageCalculatorTests      │   │
│  │  InventorySystemTests · SkillTreeTests · ZoneLayoutTests     │   │
│  └──────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
```

### Scene Structure

```
MainMenu.unity
  └─ Canvas_MainMenu (Screen Space - Overlay, CanvasScaler 1080×1920)
       ├─ SplashSequence
       ├─ MainMenuPanel
       ├─ RouteSelectionSheet
       ├─ SkillTreePanel
       ├─ SettingsPanel
       └─ TutorialOverlay

Game.unity
  ├─ GameManager (DontDestroyOnLoad singleton)
  ├─ SaveSystem (DontDestroyOnLoad singleton)
  ├─ AudioManager (DontDestroyOnLoad singleton)
  ├─ InputManager (DontDestroyOnLoad singleton)
  ├─ CityGenerator
  ├─ ZombieSpawner
  ├─ EscapeRouteManager
  ├─ Player
  │    ├─ CharacterController
  │    ├─ PlayerController
  │    ├─ PlayerHealth
  │    ├─ CameraHolder
  │    │    └─ MainCamera (URP Camera)
  │    └─ WeaponHolder
  ├─ Canvas_HUD (Screen Space - Overlay)
  │    ├─ HealthBar
  │    ├─ AmmoDisplay
  │    ├─ ObjectiveDisplay
  │    ├─ RunTimer
  │    ├─ Crosshair
  │    ├─ NotificationArea
  │    ├─ VignetteOverlay
  │    ├─ MobileJoystick_Left
  │    └─ MobileJoystick_Right
  └─ Canvas_Pause (Screen Space - Overlay)
       └─ PauseMenuPanel

LoadingScreen.unity  (loaded additively during transitions)
  └─ Canvas_Loading
       ├─ ProgressBar
       ├─ TipText
       └─ CityNameText
```

### Game Phase State Machine

```
MainMenu ──StartNewRun/StartDailyChallenge──► Loading
Loading  ──SceneLoaded──────────────────────► Spawning
Spawning ──SetupComplete────────────────────► Playing
Playing  ──TogglePause──────────────────────► Paused
Paused   ──TogglePause──────────────────────► Playing
Playing  ──TriggerVictory──────────────────► EscapeSequence ──► Victory
Playing  ──TriggerGameOver─────────────────► GameOver
Victory  ──ReturnToMainMenu────────────────► MainMenu
GameOver ──ReturnToMainMenu────────────────► MainMenu
```

## Components and Interfaces

### Logic Layer — `DeadCityEscape.Logic`

#### `SeededRNG`
Implements xoshiro256** PRNG. All state is four `ulong` fields initialized by a splitmix64 seed expansion.

```csharp
public sealed class SeededRNG {
    public SeededRNG(int seed);
    public int    NextInt(int minInclusive, int maxExclusive);
    public float  NextFloat();                        // [0, 1)
    public int    WeightedChoice(float[] weights);    // returns index
    public void   Shuffle<T>(T[] array);
    public SeededRNG Fork();                          // independent child
    // Internal: ulong s0,s1,s2,s3; ulong Next();
}
```

#### `ZoneLayoutGenerator`
Pure-logic city layout. Produces a flat `ZoneLayoutData[16]` array.

```csharp
public static class ZoneLayoutGenerator {
    public static ZoneLayoutData[] GenerateAllZones(SeededRNG rng);
    // Assigns POIs, threat levels, building footprints, road segments.
    // Uses rng.Fork() per zone so global sequence is stable.
}
```

#### `LRUCache<TKey, TValue>`
Generic doubly-linked-list + dictionary LRU cache.

```csharp
public sealed class LRUCache<TKey, TValue> {
    public LRUCache(int capacity, Action<TKey, TValue> onEvict = null);
    public void Put(TKey key, TValue value);
    public bool TryGet(TKey key, out TValue value);
    public bool ContainsKey(TKey key);
    public void Remove(TKey key);
    public int  Count    { get; }
    public int  Capacity { get; }
}
```

#### `DamageCalculator`
Stateless pure function. No Unity deps.

```csharp
public static class DamageCalculator {
    public static DamageResult Calculate(DamageInput input);
    // Pipeline: base × multiplier → headshot(2.5×) → explosive falloff
    //           → armor absorption (cap 0.8) → floor(0) → stagger(≥15) → noise
}
```

#### `InventorySystem`
RE-style grid inventory. Columns × Rows cells, multi-cell items, stacking.

```csharp
public sealed class InventorySystem {
    public InventorySystem(int columns = 4, int rows = 2);
    public bool TryAdd(ItemDefinition def, int count);
    public bool Remove(string itemId, int count);
    public bool Has(string itemId, int count);
    public int  CountOf(string itemId);
    public void ExpandRows(int additionalRows);       // Marathon Runner skill
    public IReadOnlyList<InventorySlot> Slots { get; }
    public int Columns { get; }
    public int Rows    { get; }
}
```

#### `SkillTreeData`
Immutable skill definitions + mutable unlock state.

```csharp
public sealed class SkillTreeData {
    public SkillTreeData(IEnumerable<SkillNode> nodes);
    public bool CanUnlock(string skillId);
    public bool Unlock(string skillId);
    public IReadOnlyList<SkillNode> GetBranchSkills(SkillBranch branch);
    public int  TotalUnlocked { get; }
    public bool IsUnlocked(string skillId);
}
```

---

### Unity Layer — `Assets/Scripts/`

#### `GameManager` (Singleton, DontDestroyOnLoad)
```csharp
public class GameManager : MonoBehaviour {
    public static GameManager Instance { get; }
    public GamePhase CurrentPhase { get; }
    public float     RunTimer     { get; }
    public int       KillCount    { get; }
    public int       PlayerLevel  { get; }
    public int       PlayerXP     { get; }

    public void StartNewRun(int? seed = null);
    public void StartDailyChallenge();
    public void TriggerVictory(EscapeRoute route);
    public void TriggerGameOver();
    public void TogglePause();
    public void ReturnToMainMenu();
    public void RecordZombieKill();

    // Events
    public event Action<GamePhase> OnPhaseChanged;
    public event Action<int, int>  OnXPChanged;   // (currentXP, level)
}
```

#### `SaveSystem` (Singleton, DontDestroyOnLoad)
```csharp
public class SaveSystem : MonoBehaviour {
    public static SaveSystem Instance { get; }
    public SaveData CurrentData { get; }

    public void Save();
    public void Load();
    public void RecordRunResult(bool victory, float runTime, int seed,
                                EscapeRoute route, int xpEarned);
    public void SaveSkills(string[] skillIds);
    public string[] GetUnlockedSkillIds();
    public void DeleteSaveData();
}
```

#### `CityGenerator` (MonoBehaviour)
```csharp
public class CityGenerator : MonoBehaviour {
    public void Initialize(SeededRNG rng);
    public void UpdatePlayerZone(int zoneIndex);   // called by PlayerController
    public Vector3 GetSpawnPosition(ThreatLevel maxThreat);
    // Internal: LRUCache<int, ZoneInstance> _cache (capacity 6)
    // Internal: ObjectPool<GameObject> _buildingPool, _roadPool
}
```

#### `PlayerController` (MonoBehaviour)
```csharp
public class PlayerController : MonoBehaviour {
    public float CurrentNoiseLevel { get; private set; }
    public bool  IsCrouching       { get; private set; }
    public bool  IsSprinting       { get; private set; }

    // Reads from InputManager; writes to CharacterController
    // Applies aim assist via Physics.OverlapSphere + angle check
}
```

#### `PlayerHealth` (MonoBehaviour)
```csharp
public class PlayerHealth : MonoBehaviour {
    public float MaxHealth     { get; }
    public float CurrentHealth { get; private set; }

    public void TakeDamage(float amount, Vector3 hitPosition);
    public void Heal(float amount);
    public void UseMedkit();

    public event Action<float, Vector3> OnDamaged;
    public event Action                 OnDeath;
}
```

#### `WeaponBase` (MonoBehaviour, abstract)
```csharp
public abstract class WeaponBase : MonoBehaviour {
    public abstract void Fire();
    public abstract void StartReload();
    protected void BroadcastNoise(int noiseLevel);
}
public class MeleeWeapon  : WeaponBase { /* SphereCast, 60° arc */ }
public class RangedWeapon : WeaponBase { /* hitscan, recoil, suppressor */ }
```

#### `ZombieBase` (MonoBehaviour, abstract)
```csharp
public abstract class ZombieBase : MonoBehaviour {
    public ZombieState CurrentState { get; protected set; }
    public float       Health       { get; protected set; }

    public void TakeDamage(DamageResult result);
    public void OnNoiseHeard(Vector3 position, int noiseLevel);

    public event Action<ZombieBase> OnDeath;

    protected abstract void OnEnterState(ZombieState state);
    protected abstract void UpdateState();
}
public class WalkerZombie   : ZombieBase { }
public class RunnerZombie   : ZombieBase { }
public class BruteZombie    : ZombieBase { }
public class ScreamerZombie : ZombieBase { }
```

#### `ZombieSpawner` (MonoBehaviour)
```csharp
public class ZombieSpawner : MonoBehaviour {
    public void BroadcastNoise(Vector3 origin, int noiseLevel);
    public void SpawnWave(int intensity, Vector3 center, float radius);
    // Internal: tracks active NavMeshAgent count, caps at 12/20 per quality
}
```

#### `EscapeRouteManager` (MonoBehaviour)
```csharp
public class EscapeRouteManager : MonoBehaviour {
    public void ActivateRoute(EscapeRoute route);
    public EscapeObjective ActiveObjective { get; }
    public event Action<EscapeObjective> OnObjectiveUpdated;
    public event Action<EscapeRoute>     OnRouteComplete;
}
```

#### `AudioManager` (Singleton, DontDestroyOnLoad)
```csharp
public class AudioManager : MonoBehaviour {
    public static AudioManager Instance { get; }
    public AudioClip GenerateFootstep(FootstepParams p);
    public AudioClip GenerateGunshot(GunshotParams p);
    public AudioClip GenerateGroan(GroanParams p);
    public AudioClip GenerateExplosion(ExplosionParams p);
    public void PlaySFXAtPosition(AudioClip clip, Vector3 pos, float maxDist);
    public void PlayMusic(MusicTrack track);
}
```

#### `InputManager` (Singleton, DontDestroyOnLoad)
```csharp
public class InputManager : MonoBehaviour {
    public static InputManager Instance { get; }
    public Vector2 MoveInput   { get; }   // from left joystick or WASD
    public Vector2 LookInput   { get; }   // from right joystick or mouse
    public bool    SprintHeld  { get; }
    public bool    CrouchDown  { get; }
    public bool    JumpDown    { get; }
    public bool    FireDown    { get; }
    public bool    ReloadDown  { get; }
    public bool    InteractDown{ get; }
}
```

#### `HUDController` (MonoBehaviour)
```csharp
public class HUDController : MonoBehaviour {
    public void OnHealthChanged(float current, float max);
    public void OnAmmoChanged(int current, int magazine);
    public void OnObjectiveUpdated(EscapeObjective obj);
    public void ShowNotification(string message);
    // Subscribes to PlayerHealth.OnDamaged, WeaponBase events,
    // EscapeRouteManager.OnObjectiveUpdated
}
```

#### `MainMenuController` (MonoBehaviour)
```csharp
public class MainMenuController : MonoBehaviour {
    // Manages splash, main panel, route sheet, skill tree, settings, tutorial
    public void ShowRouteSelectionSheet();
    public void HideRouteSelectionSheet();
    public void ShowSettings();
    public void ShowSkillTree();
}
```

#### `RecipeCache` (static class)
```csharp
public static class RecipeCache {
    public static bool TryGet(string key, out byte[] data);
    public static void Store(string key, byte[] data);
    public static void InvalidateVersion(string oldVersion);
    public static void EnforceDiskCap(long maxBytes = 500L * 1024 * 1024);
    // Key format: "{appVersion}:{recipeHash}:{deviceTier}"
}
```

## Data Models

### World Generation

```csharp
// Logic layer — no Unity deps
public readonly struct ZoneLayoutData {
    public int          ZoneIndex;       // 0–15, row-major in 4×4 grid
    public int          GridX;           // 0–3
    public int          GridY;           // 0–3
    public ThreatLevel  ThreatLevel;     // Low / Medium / High / Extreme
    public POIType[]    POIs;            // zero or more POIs in this zone
    public BuildingFootprint[] Buildings;
    public RoadSegment[]       Roads;
}

public readonly struct BuildingFootprint {
    public float X, Z;          // world-space origin (zone-local)
    public float Width, Depth;  // metres
    public int   FloorCount;    // 1–6
    public BuildingStyle Style; // Residential / Commercial / Industrial / Derelict
    public int   RecipeSeed;    // deterministic seed for ProceduralGeometry
}

public readonly struct RoadSegment {
    public float StartX, StartZ;
    public float EndX,   EndZ;
    public float Width;          // 6 m standard, 10 m arterial
    public RoadType Type;        // Alley / Street / Arterial
}

public enum POIType {
    RadioTower, ParkingGarage, PoliceStation,
    SewerAccess, GasStation, Hospital, Helipad
}

public enum ThreatLevel { Low, Medium, High, Extreme }
public enum BuildingStyle { Residential, Commercial, Industrial, Derelict }
public enum RoadType { Alley, Street, Arterial }
```

### Combat

```csharp
public readonly struct DamageInput {
    public float  BaseDamage;
    public float  DamageMultiplier;    // default 1.0
    public bool   IsHeadshot;
    public bool   IsExplosive;
    public float  ExplosionRadius;     // metres; 0 if not explosive
    public float  DistanceFromExplosion;
    public float  ArmorRating;         // [0, 0.8]
    public bool   IsMelee;
    public bool   HasSuppressor;
}

public readonly struct DamageResult {
    public float FinalDamage;
    public bool  ShouldStagger;        // FinalDamage >= 15
    public int   NoiseLevel;           // 80 explosive / 50 ranged / 15 melee / 10 suppressed
}
```

### Inventory

```csharp
public sealed class ItemDefinition {
    public string ItemId;
    public string DisplayName;
    public int    Width;          // grid cells
    public int    Height;         // grid cells
    public int    MaxStack;       // 1 for unique items
    public ItemCategory Category; // Weapon / Ammo / Medical / Key / Tool / Resource
}

public sealed class InventorySlot {
    public ItemDefinition Definition;
    public int            Count;
    public int            GridX;
    public int            GridY;
}

public enum ItemCategory { Weapon, Ammo, Medical, Key, Tool, Resource }
```

### Skill Tree

```csharp
public sealed class SkillNode {
    public string      SkillId;        // e.g. "stealth_1", "combat_2"
    public string      DisplayName;
    public SkillBranch Branch;         // Stealth / Combat / Survival
    public int         Tier;           // 1–4
    public string      PrerequisiteId; // null for tier-1 skills
    public bool        Unlocked;
    public string      Description;
}

public enum SkillBranch { Stealth, Combat, Survival }
```

### Escape Routes

```csharp
public sealed class EscapeObjective {
    public string ObjectiveId;       // e.g. "heli_fuel_cans"
    public string DisplayText;       // e.g. "Collect Fuel Cans"
    public int    RequiredCount;     // 0 = boolean objective
    public int    CurrentCount;
    public bool   IsComplete;
}

public enum EscapeRoute { Helicopter, Car, Sewer }
```

### Save Data

```csharp
[Serializable]
public sealed class SaveData {
    // Progression
    public int    PlayerLevel;
    public int    PlayerXP;
    public string UnlockedSkillIds;   // comma-separated, e.g. "stealth_1,combat_1"

    // Best run
    public float  BestRunTime;        // seconds; float.MaxValue if no run
    public int    BestRunSeed;
    public string BestEscapeRoute;    // "Helicopter" / "Car" / "Sewer" / ""

    // Run-in-progress (for Continue button)
    public bool   HasRunInProgress;
    public int    RunInProgressSeed;
    public string RunInProgressRoute;
    public float  RunInProgressTimer;

    // Settings
    public float  MasterVolume;       // [0, 1]
    public float  MusicVolume;
    public float  SFXVolume;
    public float  TouchSensitivity;   // [0.1, 3.0]
    public bool   InvertY;
    public int    QualityLevel;       // 0 = Lite, 1 = Standard

    // Meta
    public int    TotalRuns;
    public int    TotalKills;
    public bool   HasSeenTutorial;
    public string AppVersion;         // for RecipeCache invalidation
}
```

Full JSON example:
```json
{
  "PlayerLevel": 3,
  "PlayerXP": 1450,
  "UnlockedSkillIds": "stealth_1,combat_1,survival_1",
  "BestRunTime": 743.2,
  "BestRunSeed": 20240615,
  "BestEscapeRoute": "Helicopter",
  "HasRunInProgress": false,
  "RunInProgressSeed": 0,
  "RunInProgressRoute": "",
  "RunInProgressTimer": 0.0,
  "MasterVolume": 0.8,
  "MusicVolume": 0.5,
  "SFXVolume": 1.0,
  "TouchSensitivity": 1.0,
  "InvertY": false,
  "QualityLevel": 1,
  "TotalRuns": 12,
  "TotalKills": 87,
  "HasSeenTutorial": true,
  "AppVersion": "1.0.0"
}
```

### Recipe Cache Entry

```csharp
public sealed class RecipeCacheEntry {
    public string Key;          // "{appVersion}:{recipeHash}:{deviceTier}"
    public long   SizeBytes;
    public long   LastAccessUtc; // Unix timestamp
    public string FilePath;      // absolute path under persistentDataPath/recipe_cache/
}
// Manifest stored as JSON array of RecipeCacheEntry at:
// Application.persistentDataPath/recipe_cache/manifest.json
```

### Procedural Audio Parameters

```csharp
public readonly struct FootstepParams  { public float Pitch; public float Duration; }
public readonly struct GunshotParams   { public float Attack; public float Decay; public float Volume; public float Frequency; }
public readonly struct GroanParams     { public float Duration; public float Frequency; public float Amplitude; }
public readonly struct ExplosionParams { public float Amplitude; public float Duration; }
```

## Procedural Generation Pipeline

### Flow

```
int seed
  └─► SeededRNG(seed)
        ├─► ZoneLayoutGenerator.GenerateAllZones(rng)
        │     ├─ rng.Fork() per zone → ZoneLayoutData[16]
        │     └─ POI assignment via WeightedChoice
        │
        └─► CityGenerator.Initialize(rng)
              ├─ Per zone (on demand via streaming):
              │    ├─ ProceduralGeometry.GenerateBuilding(footprint, recipeSeed)
              │    │    └─ RecipeCache.TryGet / Store
              │    ├─ ProceduralGeometry.GenerateRoad(segment, recipeSeed)
              │    └─ ProceduralTexture.Generate(recipe)
              │         └─ RecipeCache.TryGet / Store
              └─ AudioManager.Generate*(params)
                   └─ RecipeCache.TryGet / Store
```

### SeededRNG — xoshiro256** Implementation

```csharp
// Seed expansion via splitmix64
private static ulong SplitMix64(ref ulong x) {
    x += 0x9e3779b97f4a7c15UL;
    ulong z = x;
    z = (z ^ (z >> 30)) * 0xbf58476d1ce4e5b9UL;
    z = (z ^ (z >> 27)) * 0x94d049bb133111ebUL;
    return z ^ (z >> 31);
}
// Constructor: expand int seed into s0..s3 via four SplitMix64 calls
// Next(): xoshiro256** rotate-and-mix, returns ulong
// Fork(): advance state by 2^128 jumps using the jump polynomial
```

### ZoneLayoutGenerator — 4×4 Grid Assignment

1. Create `SeededRNG` fork per zone index (0–15).
2. Assign `ThreatLevel` via weighted table: Low 40%, Medium 35%, High 20%, Extreme 5%.
3. Force zone 0 (top-left) to `ThreatLevel.Low` as spawn zone.
4. Distribute required POIs: RadioTower, ParkingGarage, PoliceStation, SewerAccess, GasStation, Hospital — one each, assigned to deterministic zone indices via `WeightedChoice` biased toward matching threat levels (e.g., PoliceStation → Extreme zone).
5. Per zone: generate 3–8 `BuildingFootprint` entries and 2–4 `RoadSegment` entries using the zone fork.

### ProceduralTexture

- Input: `TextureRecipe { int seed, TextureType type, int resolution, Color[] palette }`
- Output: `Texture2D` (RGBA32 source), then `EditorUtility.CompressTexture` / `ImageConversion` for ASTC at runtime.
- Types: Ground (Perlin noise + tiling), BuildingWall (brick pattern + grime), Road (asphalt + lane markings), NeonSign (glow mask + color).
- Cache key: `"{appVersion}:{SHA256(recipe bytes)}:{deviceTier}"`.

### ProceduralGeometry

- Input: `BuildingFootprint` or `RoadSegment` + recipe seed.
- Output: `Mesh` with positions, normals, UVs, triangles.
- Building: extrude footprint rect to `FloorCount × 3 m` height; add window cutouts per floor.
- Road: quad strip along segment with UV tiling.

### RecipeCache Eviction

1. On `Store`: append entry to manifest, call `EnforceDiskCap`.
2. `EnforceDiskCap`: sort manifest by `LastAccessUtc` ascending; delete files and entries until total size ≤ 500 MB.
3. On app version change: delete all files in `recipe_cache/`, reset manifest.

## AI Architecture

### ZombieBase State Machine

```
                    ┌──────────────────────────────────────────────────┐
                    │                  ZombieBase                      │
                    │                                                  │
  ┌───────┐  noise  ┌───────────┐  LoS    ┌───────┐  in range  ┌──────┐
  │ Idle  ├────────►│Investigate├────────►│ Chase ├───────────►│Attack│
  └───┬───┘         └─────┬─────┘         └───┬───┘            └──────┘
      │ patrol             │ timeout(12s)       │ LoS lost(3s)
      ▼                    ▼                   ▼
  ┌───────┐           ┌───────┐           ┌────────┐
  │Patrol │           │ Idle  │           │ Search │──timeout(12s)──► Idle
  └───────┘           └───────┘           └────────┘
      │ LoS
      ▼
   Chase

  Any state ──ShouldStagger──► Staggered ──duration elapsed──► Chase/Idle
  Any state ──health=0──────► Dead
```

### State Implementation Pattern

Each `ZombieBase` subclass uses a `switch` on `CurrentState` in `Update()`:

```csharp
protected override void UpdateState() {
    switch (CurrentState) {
        case ZombieState.Idle:      UpdateIdle();      break;
        case ZombieState.Patrol:    UpdatePatrol();    break;
        case ZombieState.Investigate: UpdateInvestigate(); break;
        case ZombieState.Chase:     UpdateChase();     break;
        case ZombieState.Attack:    UpdateAttack();    break;
        case ZombieState.Search:    UpdateSearch();    break;
        case ZombieState.Staggered: UpdateStaggered(); break;
        case ZombieState.Dead:      break;
    }
}

private void TransitionTo(ZombieState next) {
    CurrentState = next;
    _stateTimer = 0f;
    OnEnterState(next);
}
```

### NavMeshAgent Configuration Per Type

| Type     | Speed (Idle) | Speed (Chase) | StoppingDist | Radius | Height | Priority |
|----------|-------------|---------------|--------------|--------|--------|----------|
| Walker   | 1.0 m/s     | 1.8 m/s       | 1.5 m        | 0.4 m  | 1.8 m  | 50       |
| Runner   | 2.0 m/s     | 2.0–3.6 m/s*  | 1.2 m        | 0.35 m | 1.7 m  | 40       |
| Brute    | 0.8 m/s     | 1.2 m/s       | 2.0 m        | 0.6 m  | 2.2 m  | 60       |
| Screamer | 1.5 m/s     | 2.5 m/s       | 1.5 m        | 0.3 m  | 1.6 m  | 45       |

*Runner speed scales inversely with distance: `speed = Lerp(maxSpeed, minSpeed, dist/chaseRange)`

### ZombieSpawner Director Algorithm

```
Every 5 seconds:
  desiredCount = BaseCount + floor(RunTimer / 60) × IntensityRamp
  desiredCount = min(desiredCount, MaxActive[qualityLevel])  // 12 or 20
  deficit = desiredCount - activeCount
  if deficit > 0:
    SpawnWave(deficit, playerPosition, spawnRadius=30m)
    bias spawn points toward high-threat zones and noise origin

BroadcastNoise(origin, level):
  foreach zombie in Physics.OverlapSphere(origin, level × 0.5m):
    zombie.OnNoiseHeard(origin, level)
```

### Sight and Hearing Check (per frame, staggered)

```csharp
// Stagger checks: each zombie checks every 3rd frame (offset by ZombieIndex % 3)
bool HasLoS(Vector3 playerPos) {
    Vector3 dir = playerPos - transform.position;
    if (dir.magnitude > sightRange) return false;
    if (Vector3.Angle(transform.forward, dir) > sightAngle * 0.5f) return false;
    return !Physics.Raycast(eyePosition, dir.normalized, dir.magnitude, obstacleMask);
}
```

## Escape Route Objective State Machine

Each route is a linear sequence of `EscapeObjective` entries. `EscapeRouteManager` advances through them in order.

```
Route Activated
  └─► objectives[0] = Active
        │ completion condition met
        ▼
      objectives[1] = Active
        │ ...
        ▼
      objectives[N] = Active
        │ completion condition met
        ▼
      GameManager.TriggerVictory(route)
```

### Helicopter Route Objectives

| ID                  | Type    | Condition                                      |
|---------------------|---------|------------------------------------------------|
| heli_find_helipad   | Boolean | Enter RadioTower POI trigger                   |
| heli_fuel_cans      | Count/5 | Pick up fuel can item (×5)                     |
| heli_repair_radio   | Boolean | Use toolkit+batteries at radio transmitter     |
| heli_defend         | Timer   | Survive 180 s defense coroutine                |

Defense coroutine: `StartCoroutine(DefensePhase(180f))` — spawns waves every 20 s at escalating intensity. On timer expiry → `TriggerVictory`. On player death → coroutine stops (GameManager calls `TriggerGameOver`).

### Car Route Objectives

| ID                  | Type    | Condition                                      |
|---------------------|---------|------------------------------------------------|
| car_find_vehicle    | Boolean | Enter ParkingGarage POI trigger                |
| car_get_key         | Boolean | Pick up car key at PoliceStation POI           |
| car_repair_parts    | Count/3 | Pick up battery / spare tire / fuel (×3)       |
| car_clear_barricade | Boolean | Interact with barricade while parts complete   |

### Sewer Route Objectives

| ID                  | Type    | Condition                                      |
|---------------------|---------|------------------------------------------------|
| sewer_lockpicks     | Boolean | Pick up lockpick set item                      |
| sewer_unlock_gates  | Count/3 | Interact with SewerAccess POI (×3, uses lockpick) |
| sewer_torch         | Boolean | Pick up acetylene torch in Zone 10             |
| sewer_breach        | Boolean | Interact with reinforced gate in Zone 15       |

### Stealth Noise Modifier

`ZombieBase.OnNoiseHeard` checks: if player is crouching AND within 10 m, multiply the incoming `noiseLevel` by 0.667 before comparing to `hearingThreshold` (equivalent to raising threshold 50%).

```csharp
float effectiveNoise = noiseLevel;
if (player.IsCrouching && Vector3.Distance(transform.position, player.position) < 10f)
    effectiveNoise *= 0.667f;
if (effectiveNoise > hearingThreshold)
    TransitionTo(ZombieState.Investigate);
```

## Mobile UI Layout

### Canvas Scaler Settings

```
Canvas Scaler (HUD and MainMenu canvases):
  UI Scale Mode:        Scale With Screen Size
  Reference Resolution: 1080 × 1920
  Screen Match Mode:    Match Width Or Height
  Match:                0.5  (balanced)
```

### Safe-Area Handling

A `SafeAreaPanel` MonoBehaviour reads `Screen.safeArea` each frame and sets the `RectTransform` anchors/offsets of its child panel to match. Applied to:
- `Canvas_MainMenu` root panel
- `Canvas_HUD` root panel
- Bottom sheet (RouteSelectionSheet)

```csharp
public class SafeAreaPanel : MonoBehaviour {
    void Start() => ApplySafeArea();
    void ApplySafeArea() {
        Rect safe = Screen.safeArea;
        Vector2 anchorMin = safe.position / new Vector2(Screen.width, Screen.height);
        Vector2 anchorMax = (safe.position + safe.size) / new Vector2(Screen.width, Screen.height);
        _rt.anchorMin = anchorMin;
        _rt.anchorMax = anchorMax;
    }
}
```

### Touch Input Routing

`InputManager` uses Unity's new Input System (`UnityEngine.InputSystem`) with two action maps:
- `Gameplay`: MoveJoystick (left touch), LookJoystick (right touch), Sprint, Crouch, Jump, Fire, Reload, Interact, Pause.
- `UI`: Navigate, Submit, Cancel (for menu navigation).

`MobileJoystick` floating mode:
1. On `PointerDown`: record touch position as new background anchor; show joystick at that position.
2. On `PointerDrag`: compute delta from anchor; normalize; apply dead zone (magnitude < 0.1 → Vector2.zero).
3. On `PointerUp`: hide joystick; output Vector2.zero.

### HUD Layout (1080×1920 reference)

```
┌─────────────────────────────────────────────────────┐
│  [HealthBar 400×40 @ top-left +safe]  [Timer top-right] │
│                                                     │
│                  [Crosshair center]                 │
│                                                     │
│  [Objective bottom-left]    [Ammo bottom-right]     │
│                                                     │
│  [LeftJoystick 200×200]     [RightJoystick 200×200] │
│  [bottom-left +safe]        [bottom-right +safe]    │
└─────────────────────────────────────────────────────┘
```

Notification area: anchored top-center, slides in from top, auto-fades after 3 s via `DOTween` / `LeanTween`.

Vignette: full-screen `Image` with radial gradient sprite, alpha = `Mathf.Clamp01(1f - (health/maxHealth) / 0.5f)` when health < 50%.

## Performance Architecture

### ObjectPool Setup

`CityGenerator` maintains two `UnityEngine.Pool.ObjectPool<GameObject>` instances:
- `_buildingPool`: pre-warmed with 20 building prefabs (unit cube placeholder, geometry applied at runtime).
- `_roadPool`: pre-warmed with 10 road quad prefabs.

On zone load: `Get()` from pool, apply generated `Mesh` and `Material`. On zone unload: `Release()` back to pool.

### Zone Streaming Flow

```
PlayerController.Update()
  └─► int newZone = WorldToZoneIndex(transform.position)
        if newZone != _currentZone:
          _currentZone = newZone
          CityGenerator.UpdatePlayerZone(newZone)

CityGenerator.UpdatePlayerZone(zoneIndex):
  activeSet = GetZonesInRadius(zoneIndex, radius=2)   // up to 25 zones, clamped to grid
  toLoad   = activeSet - _loadedZones
  toUnload = _loadedZones - activeSet
  foreach z in toUnload: DeactivateZone(z)            // returns to LRUCache
  foreach z in toLoad:   ActivateZone(z)              // from LRUCache or generate

DeactivateZone(z):
  _lruCache.Put(z.ZoneIndex, z.Instance)              // eviction callback destroys if over cap

ActivateZone(z):
  if _lruCache.TryGet(z.ZoneIndex, out var inst):
    inst.SetActive(true)
  else:
    inst = GenerateZone(z.ZoneIndex)                  // async via coroutine
    _lruCache.Put(z.ZoneIndex, inst)
```

### NavMesh Strategy

- NavMesh is baked per zone at runtime using `NavMeshSurface.BuildNavMesh()` when a zone is first generated.
- Baked `NavMeshData` is stored in the `ZoneInstance` and re-added to the world via `NavMesh.AddNavMeshData()` on reactivation, removed on deactivation.
- This avoids a single global bake and keeps memory proportional to active zones.
- `ZombieSpawner` enforces the 12/20 active `NavMeshAgent` cap by disabling agents on zombies that are in `Idle` state and more than 40 m from the player.

### Draw Call Budget

| Category          | Lite | Standard |
|-------------------|------|----------|
| Buildings (batched) | 30 | 60       |
| Roads             | 8    | 12       |
| Zombies           | 12   | 20       |
| Player + weapons  | 5    | 8        |
| UI                | 10   | 15       |
| Particles         | 0    | 8        |
| **Total**         | **65** | **123** |

GPU instancing enabled on all building and road materials. Static batching applied to road quads within a zone.

### Texture Atlas Strategy

- All building wall textures share one 2048×2048 ASTC atlas per `BuildingStyle` (4 atlases total).
- Ground and road textures share one 1024×1024 atlas.
- Neon sign textures: individual 256×256 ASTC, generated on demand.
- Atlas UVs are packed at generation time; `ProceduralTexture` writes into a sub-rect of the atlas texture.

### Quality Tier Differences

| Setting                    | Lite (0)         | Standard (1)     |
|----------------------------|------------------|------------------|
| Target FPS                 | 30               | 60               |
| Max NavMeshAgents          | 12               | 20               |
| Shadow Distance            | 0 (disabled)     | 30 m             |
| Reflection Probes          | Off              | Baked, 1 per zone|
| Particle Systems           | Off              | On               |
| Post-Processing            | Off              | Bloom + Color Grading |
| HUD Update Rate            | Every 2 frames   | Every frame      |
| Texture Resolution         | Half             | Full             |
| Zone Streaming Radius      | 1                | 2                |

## Unity Project Settings

### URP Asset Configuration

Two URP assets: `URP_Standard.asset` and `URP_Lite.asset`.

```
URP_Standard:
  Rendering Path:       Forward+
  HDR:                  Enabled
  MSAA:                 2x
  Shadow Distance:      30 m
  Cascade Count:        2
  Render Scale:         1.0
  Post Processing:      Enabled (Bloom, Color Grading, Vignette via Volume)

URP_Lite:
  Rendering Path:       Forward
  HDR:                  Disabled
  MSAA:                 Off
  Shadow Distance:      0
  Cascade Count:        0
  Render Scale:         0.85
  Post Processing:      Disabled
```

Quality tiers in `ProjectSettings/QualitySettings.asset`:
- Level 0 "Lite": uses `URP_Lite.asset`
- Level 1 "Standard": uses `URP_Standard.asset`

`GameManager.Awake()` reads `SaveData.QualityLevel` and calls `QualitySettings.SetQualityLevel(level, applyExpensiveChanges: true)`.

### Input System

Package: `com.unity.inputsystem` 1.7+. Legacy input disabled. Action asset: `Assets/Input/DeadCityEscapeActions.inputactions`.

Action Maps:
- `Gameplay`: MoveJoystick (Vector2), LookJoystick (Vector2), Sprint (Button), Crouch (Button), Jump (Button), Fire (Button), Reload (Button), Interact (Button), Pause (Button).
- `UI`: standard UI actions.

Binding overrides: WASD/mouse for editor; touch joystick for mobile (auto-detected via `Touchscreen` device).

### TextMeshPro

Font asset: `LiberationSans SDF` (included with TMP). Custom font for UI: `DeadCity_UI SDF` generated from a single TTF at build time — no external font files needed beyond the TTF embedded in the project.

### Scene Loading Strategy

- `MainMenu.unity`: loaded as single scene on startup and on `ReturnToMainMenu`.
- `Game.unity`: loaded additively over `LoadingScreen.unity` during the Loading phase. Once `Game.unity` is ready, `LoadingScreen.unity` is unloaded.
- `LoadingScreen.unity`: loaded additively when transitioning from MainMenu → Loading.

```csharp
// GameManager.TransitionToLoading()
async Task TransitionToLoading() {
    var loadingOp = SceneManager.LoadSceneAsync("LoadingScreen", LoadSceneMode.Additive);
    await loadingOp;
    var gameOp = SceneManager.LoadSceneAsync("Game", LoadSceneMode.Additive);
    gameOp.allowSceneActivation = false;
    while (gameOp.progress < 0.9f) {
        LoadingScreenUI.Instance.SetProgress(gameOp.progress);
        await Task.Yield();
    }
    LoadingScreenUI.Instance.PlayBreachTransition(() => {
        gameOp.allowSceneActivation = true;
        SceneManager.UnloadSceneAsync("LoadingScreen");
        SceneManager.UnloadSceneAsync("MainMenu");
    });
}
```

## Android and iOS Deployment

### Android Build Settings

```
Player Settings → Android:
  Package Name:         com.studio.deadcityescape
  Version:              1.0.0
  Bundle Version Code:  1
  Minimum API Level:    26 (Android 8.0)
  Target API Level:     34 (Android 14)
  Scripting Backend:    IL2CPP
  Target Architectures: ARM64 + x86_64
  Internet Access:      Not Required
  Write Permission:     External (SDCard) — NOT required; use persistentDataPath
  Active Input Handling: Input System Package (New)

Build:
  Build App Bundle (AAB): true (Play Store)
  Split APKs by ABI:      true (for direct APK testing)
  Minify (Release):       Proguard enabled
  Compression:            LZ4HC

Gradle (mainTemplate.gradle additions):
  android {
    defaultConfig {
      ndk { abiFilters "arm64-v8a", "x86_64" }
    }
    packagingOptions {
      exclude 'lib/armeabi-v7a/**'
    }
  }
  dependencies {
    implementation 'androidx.core:core:1.12.0'
  }
```

Signing: release keystore stored in CI secrets, referenced via `signingConfigs` in `launcherTemplate.gradle`. Never committed to source control.

### iOS Build Settings

```
Player Settings → iOS:
  Bundle Identifier:    com.studio.deadcityescape
  Version:              1.0.0
  Build:                1
  Target SDK:           Device SDK
  Target minimum iOS:   14.0
  Scripting Backend:    IL2CPP
  Architecture:         ARM64
  Active Input Handling: Input System Package (New)
  Requires Persistent WiFi: false
  Status Bar Hidden:    true
  Default Orientation:  Portrait

Info.plist keys (added via XcodePostProcess build script):
  NSCameraUsageDescription:        Not used
  NSMicrophoneUsageDescription:    Not used
  UIRequiresFullScreen:            true
  UIStatusBarHidden:               true
  LSApplicationQueriesSchemes:     (none)
  ITSAppUsesNonExemptEncryption:   false
```

Post-process build script (`Assets/Editor/iOSPostProcess.cs`) using `UnityEditor.iOS.Xcode.PBXProject`:
- Sets `ENABLE_BITCODE = NO` (required for Unity IL2CPP).
- Sets `SWIFT_VERSION = 5.0`.
- Adds `libc++.tbd` to linked libraries.
- Injects `Info.plist` keys above.

Distribution: Archive → TestFlight (internal track) → App Store submission. Certificates managed via Xcode automatic signing in CI.

### IL2CPP and Stripping

```
Managed Stripping Level: Minimal (to preserve reflection used by JsonUtility)
link.xml (Assets/link.xml):
  <linker>
    <assembly fullname="DeadCityEscape.Logic" preserve="all"/>
    <assembly fullname="System" preserve="all"/>
    <assembly fullname="System.Core" preserve="all"/>
  </linker>
```

### App Size Budget

| Component              | Estimated Size |
|------------------------|---------------|
| IL2CPP runtime + code  | 35 MB         |
| Unity engine modules   | 25 MB         |
| URP shaders            | 8 MB          |
| TMP font assets        | 3 MB          |
| UI sprites (minimal)   | 2 MB          |
| Fallback assets        | 5 MB          |
| **Total**              | **~78 MB**    |

All textures, meshes, and audio are generated at runtime — zero shipped binary assets beyond fallbacks.

## Test Architecture

### Project Structure

```
Tests/
└─ DeadCityEscape.Logic/
     ├─ DeadCityEscape.Logic.Tests.csproj   (targets net8.0, refs NUnit 4.x + FsCheck 3.x)
     ├─ SeededRNGTests.cs
     ├─ LRUCacheTests.cs
     ├─ DamageCalculatorTests.cs
     ├─ InventorySystemTests.cs
     ├─ SkillTreeTests.cs
     └─ ZoneLayoutGeneratorTests.cs

Assets/Tests/
├─ EditMode/
│    ├─ EditModeTests.asmdef
│    ├─ DamageCalculatorEditTests.cs   (mirrors logic tests, Unity TestRunner)
│    └─ InventoryEditTests.cs
└─ PlayMode/
     ├─ PlayModeTests.asmdef
     ├─ PlayerControllerTests.cs       (requires scene setup)
     ├─ ZombieAITests.cs
     ├─ EscapeRouteTests.cs
     └─ SaveSystemTests.cs
```

### Standalone NUnit Tests (no Unity)

Run with: `dotnet test Tests/DeadCityEscape.Logic/`

Property-based tests use **FsCheck** (`FsCheck.NUnit` package). Each property test runs a minimum of 100 iterations (configured via `[Property(MaxTest = 500)]`).

Tag format in test names: `Feature: dead-city-escape-mobile-overhaul, Property N: <text>`

```csharp
// Example property test pattern
[Property(MaxTest = 500)]
[Trait("Feature", "dead-city-escape-mobile-overhaul")]
public Property SeededRNG_SameSeedSameSequence() =>
    Prop.ForAll(
        Arb.From(Gen.Choose(-100000, 100000)),
        seed => {
            var rng1 = new SeededRNG(seed);
            var rng2 = new SeededRNG(seed);
            return Enumerable.Range(0, 20)
                .All(_ => rng1.NextInt(0, 1000) == rng2.NextInt(0, 1000));
        });
```

### Unity TestRunner — EditMode

EditMode tests run without entering Play mode. Used for:
- Verifying logic layer classes through Unity's test runner (redundant coverage).
- Testing `RecipeCache` file I/O (uses `Application.persistentDataPath`).
- Testing `SaveSystem` serialization.

### Unity TestRunner — PlayMode

PlayMode tests enter Play mode in a minimal test scene. Used for:
- `PlayerController` movement and noise level transitions.
- `ZombieBase` state machine transitions (requires NavMesh).
- `EscapeRouteManager` objective progression.
- Full `GameManager` phase transitions.

### CI Test Execution

```yaml
# Standalone logic tests (fast, no Unity license needed)
- run: dotnet test Tests/DeadCityEscape.Logic/ --logger trx --results-directory TestResults/

# Unity EditMode + PlayMode (requires Unity license)
- run: |
    unity-editor -runTests -testPlatform EditMode -testResults editmode-results.xml
    unity-editor -runTests -testPlatform PlayMode -testResults playmode-results.xml
```

## CI/CD Pipeline

### Recommended Stack: GitHub Actions + Unity Build Server (or GameCI)

```yaml
# .github/workflows/build.yml
name: Build Android + iOS

on:
  push:
    branches: [main, release/*]
  pull_request:

jobs:
  test-logic:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-dotnet@v4
        with: { dotnet-version: '8.0.x' }
      - run: dotnet test Tests/DeadCityEscape.Logic/ --logger trx

  build-android:
    needs: test-logic
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: game-ci/unity-builder@v4
        with:
          targetPlatform: Android
          buildMethod: BuildScript.BuildAndroid
          androidExportType: androidAppBundle
          androidKeystoreName: ${{ secrets.KEYSTORE_NAME }}
          androidKeystoreBase64: ${{ secrets.KEYSTORE_BASE64 }}
          androidKeystorePass: ${{ secrets.KEYSTORE_PASS }}
          androidKeyaliasName: ${{ secrets.KEY_ALIAS }}
          androidKeyaliasPass: ${{ secrets.KEY_PASS }}
      - uses: actions/upload-artifact@v4
        with: { name: android-aab, path: build/Android/*.aab }

  build-ios:
    needs: test-logic
    runs-on: macos-latest
    steps:
      - uses: actions/checkout@v4
      - uses: game-ci/unity-builder@v4
        with:
          targetPlatform: iOS
          buildMethod: BuildScript.BuildiOS
      - uses: apple-actions/import-codesign-certs@v2
        with:
          p12-file-base64: ${{ secrets.IOS_P12_BASE64 }}
          p12-password: ${{ secrets.IOS_P12_PASSWORD }}
      - run: |
          xcodebuild archive -project build/iOS/Unity-iPhone.xcodeproj \
            -scheme Unity-iPhone -archivePath build/iOS/app.xcarchive \
            CODE_SIGN_STYLE=Manual PROVISIONING_PROFILE_SPECIFIER="${{ secrets.PROV_PROFILE }}"
          xcodebuild -exportArchive -archivePath build/iOS/app.xcarchive \
            -exportPath build/iOS/ipa -exportOptionsPlist ExportOptions.plist
      - uses: actions/upload-artifact@v4
        with: { name: ios-ipa, path: build/iOS/ipa/*.ipa }

  distribute:
    needs: [build-android, build-ios]
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/download-artifact@v4
      - name: Upload to Play Store internal track
        uses: r0adkll/upload-google-play@v1
        with:
          serviceAccountJsonPlainText: ${{ secrets.PLAY_SERVICE_ACCOUNT }}
          packageName: com.studio.deadcityescape
          releaseFiles: android-aab/*.aab
          track: internal
      - name: Upload to TestFlight
        uses: apple-actions/upload-testflight-build@v1
        with:
          app-path: ios-ipa/*.ipa
          issuer-id: ${{ secrets.APPSTORE_ISSUER_ID }}
          api-key-id: ${{ secrets.APPSTORE_KEY_ID }}
          api-private-key: ${{ secrets.APPSTORE_PRIVATE_KEY }}
```

### `BuildScript.cs` (Assets/Editor/)

```csharp
public static class BuildScript {
    public static void BuildAndroid() {
        BuildPlayerOptions opts = new() {
            scenes = new[] { "Assets/Scenes/MainMenu.unity",
                             "Assets/Scenes/LoadingScreen.unity",
                             "Assets/Scenes/Game.unity" },
            locationPathName = "build/Android/DeadCityEscape.aab",
            target = BuildTarget.Android,
            options = BuildOptions.None
        };
        BuildPipeline.BuildPlayer(opts);
    }

    public static void BuildiOS() {
        BuildPlayerOptions opts = new() {
            scenes = new[] { "Assets/Scenes/MainMenu.unity",
                             "Assets/Scenes/LoadingScreen.unity",
                             "Assets/Scenes/Game.unity" },
            locationPathName = "build/iOS",
            target = BuildTarget.iOS,
            options = BuildOptions.None
        };
        BuildPipeline.BuildPlayer(opts);
    }
}
```

## Error Handling

### Zone Generation Failure (Req 2.7)
If `ProceduralGeometry` or `ProceduralTexture` throws during zone generation, `CityGenerator` catches the exception, logs it via `Debug.LogError`, and instantiates a flat 100×100 ground plane from the fallback prefab. The run continues uninterrupted.

### Recipe Generation Failure (Req 3.8)
`ProceduralTexture.Generate` and `ProceduralGeometry.Generate` wrap their generation logic in try/catch. On failure: log error, return the shipped fallback (solid white `Texture2D(2,2)` or unit cube `Mesh`). The fallback is never cached.

### Save File Corruption (Req 12.3)
`SaveSystem.Load()`:
```csharp
try {
    string json = File.ReadAllText(savePath);
    _data = JsonUtility.FromJson<SaveData>(json);
    if (_data == null) throw new Exception("Null deserialization");
} catch (Exception e) {
    Debug.LogError($"Save corrupt: {e.Message}");
    _data = new SaveData(); // defaults
    Save();
}
```

### NavMesh Bake Failure
If `NavMeshSurface.BuildNavMesh()` fails (e.g., geometry too complex), `CityGenerator` logs the error and the zone is still activated without a NavMesh. `ZombieSpawner` will not spawn zombies in zones with no NavMesh data.

### Audio Generation Failure
`AudioManager` wraps each `Generate*` call. On failure: log error, return a 0.1 s silent `AudioClip`. The silent clip is not cached.

### Application Lifecycle
- `OnApplicationPause(true)`: call `SaveSystem.Save()` immediately.
- `OnApplicationFocus(false)`: call `SaveSystem.Save()` immediately.
- This ensures run-in-progress state is persisted if the OS kills the app.

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

Property-based tests use **FsCheck** (NUnit binding) in the standalone `DeadCityEscape.Logic.Tests` project. Each test is tagged `[Trait("Feature", "dead-city-escape-mobile-overhaul")]` and configured with `[Property(MaxTest = 500)]`.

---

### Property 1: SeededRNG Determinism

*For any* 32-bit integer seed, two independently constructed `SeededRNG` instances initialized with that seed must produce identical sequences of values across all `NextInt`, `NextFloat`, `WeightedChoice`, and `Shuffle` calls.

**Validates: Requirements 1.1, 16.1**

---

### Property 2: ZoneLayoutGenerator Determinism

*For any* 32-bit integer seed, calling `ZoneLayoutGenerator.GenerateAllZones` twice with independent `SeededRNG` instances initialized from that seed must produce structurally identical `ZoneLayoutData` arrays — identical zone indices, threat levels, POI assignments, building footprints, and road segments.

**Validates: Requirements 1.2, 16.16**

---

### Property 3: Zone Grid Structural Invariant

*For any* 32-bit integer seed, `ZoneLayoutGenerator.GenerateAllZones` must return an array of exactly 16 elements with `ZoneIndex` values covering the complete set {0, 1, …, 15} and `GridX` in [0, 3], `GridY` in [0, 3].

**Validates: Requirements 1.3, 16.15**

---

### Property 4: SeededRNG Fork Independence

*For any* seed, after calling `Fork()` on a `SeededRNG`, the child RNG's subsequent sequence must be independent from the parent's subsequent sequence — i.e., consuming N values from the child must not change the parent's next value, and the two sequences must differ.

**Validates: Requirements 1.5, 16.2**

---

### Property 5: ZoneLayoutData Serialization Round-Trip

*For any* 32-bit integer seed, generating `ZoneLayoutData[]` via `ZoneLayoutGenerator`, serializing to JSON via `JsonUtility`, then deserializing must produce an array equivalent to the original in all fields.

**Validates: Requirements 1.6**

---

### Property 6: Required POI Types Always Present

*For any* 32-bit integer seed, the `ZoneLayoutData[]` produced by `ZoneLayoutGenerator.GenerateAllZones` must contain at least one zone with each of the required POI types: `RadioTower`, `ParkingGarage`, `PoliceStation`, `SewerAccess`, `GasStation`, `Hospital`.

**Validates: Requirements 1.4, 16.17**

---

### Property 7: LRUCache Capacity Invariant

*For any* sequence of `Put` operations on an `LRUCache` with capacity C, `Count` must never exceed C after any operation in the sequence.

**Validates: Requirements 2.5, 16.5**

---

### Property 8: LRUCache Eviction Callback Correctness

*For any* `LRUCache` with capacity C, when a (C+1)th distinct key is inserted, the eviction callback must be invoked exactly once with the key and value of the least-recently-used entry.

**Validates: Requirements 2.3, 16.7**

---

### Property 9: LRUCache Put-Then-Get Round-Trip

*For any* key-value pair inserted into an `LRUCache` that has not been evicted, `TryGet` with that key must return `true` and the original value.

**Validates: Requirements 16.6**

---

### Property 10: Recipe Generation Idempotence

*For any* valid `TextureRecipe` or geometry recipe input, calling the generation function twice with identical parameters must produce pixel-identical `Texture2D` output (same width, height, and pixel data) or vertex-identical `Mesh` output (same vertex positions and triangle indices).

**Validates: Requirements 3.9**

---

### Property 11: RecipeCache Store-Then-Retrieve Round-Trip

*For any* cache key and byte array, calling `RecipeCache.Store(key, data)` followed by `RecipeCache.TryGet(key, out result)` must return `true` and a byte array equal to `data`.

**Validates: Requirements 3.5**

---

### Property 12: Camera Pitch Clamp

*For any* sequence of look input deltas applied to `PlayerController`, the resulting camera pitch must always remain within [−80°, +80°].

**Validates: Requirements 4.6**

---

### Property 13: Noise Level Per Movement State

*For any* player movement state, `PlayerController.CurrentNoiseLevel` must equal the specified value: 0 when stationary, 5 when crouching-and-moving, 15 when walking, 30 when sprinting.

**Validates: Requirements 4.7**

---

### Property 14: MobileJoystick Dead Zone

*For any* touch input with normalized magnitude strictly less than 0.1, `MobileJoystick` must output `Vector2.zero`. For any input with normalized magnitude ≥ 0.1, the output magnitude must be greater than 0.

**Validates: Requirements 4.9**

---

### Property 15: Damage Pipeline — Armor Never Increases Damage

*For any* `DamageInput` where `ArmorRating` is in [0, 0.8] and `DamageMultiplier` > 0, `DamageResult.FinalDamage` must be ≤ `BaseDamage × DamageMultiplier × HeadshotMultiplier` (armor absorption can only reduce, never increase, final damage). Additionally, for any two identical `DamageInput` values differing only in `IsHeadshot`, the headshot variant's `FinalDamage` must equal exactly 2.5× the non-headshot variant's `FinalDamage`.

**Validates: Requirements 5.1, 5.10, 16.9**

---

### Property 16: Stagger Threshold Invariant

*For any* `DamageInput` that produces `FinalDamage` ≥ 15, `DamageResult.ShouldStagger` must be `true`. For any input producing `FinalDamage` < 15, `ShouldStagger` must be `false`.

**Validates: Requirements 5.2**

---

### Property 17: Explosive Damage Falloff Boundary

*For any* explosive `DamageInput` where `DistanceFromExplosion` ≥ `ExplosionRadius` and `ExplosionRadius` > 0, `DamageResult.FinalDamage` must be 0.

**Validates: Requirements 5.3, 16.10**

---

### Property 18: Damage Noise Level Assignment

*For any* `DamageInput`, `DamageResult.NoiseLevel` must equal: 80 when `IsExplosive` is true; 10 when `HasSuppressor` is true and not explosive; 50 when `BaseDamage` > 20 and not melee and not suppressed; 15 when `IsMelee` is true.

**Validates: Requirements 5.4**

---

### Property 19: Inventory Add-Then-Remove Round-Trip

*For any* `InventorySystem` state and any item that can be successfully added (TryAdd returns true), calling `Remove` with the same item ID and count must return the inventory to its exact prior state (same slot contents, same counts).

**Validates: Requirements 7.6, 16.11**

---

### Property 20: Inventory No Overlap for Multi-Cell Items

*For any* sequence of `TryAdd` calls with items of varying `Width` and `Height`, no two items in the resulting inventory state may occupy the same grid cell.

**Validates: Requirements 7.5**

---

### Property 21: Inventory Capacity Invariant

*For any* sequence of `TryAdd` operations, the total number of occupied grid cells must never exceed `Columns × Rows`.

**Validates: Requirements 7.1, 16.12**

---

### Property 22: Inventory Has() Logical Equivalence

*For any* `InventorySystem` state, `itemId`, and `count`, `Has(itemId, count)` must return `true` if and only if `CountOf(itemId) ≥ count`.

**Validates: Requirements 7.7**

---

### Property 23: SkillTree Unlo
ck Prerequisite Logic

*For any* `SkillNode` with a non-null `PrerequisiteId`, `CanUnlock` must return `false` if the prerequisite skill is not yet unlocked, and `true` only when the prerequisite is unlocked and the skill itself is not already unlocked. For tier-1 skills (null prerequisite), `CanUnlock` must return `true` if and only if the skill is not already unlocked.

**Validates: Requirements 8.2, 8.3, 16.13**

---

### Property 24: SkillTree Unlock State Transitions

*For any* skill where `CanUnlock` returns `true`, calling `Unlock` must set `Unlocked = true`, return `true`, and leave all other skill states unchanged. For any skill where `CanUnlock` returns `false`, calling `Unlock` must return `false` and leave all state unchanged.

**Validates: Requirements 8.4, 8.5**

---

### Property 25: TotalUnlocked Increments by Exactly 1

*For any* successful `Unlock` call (where `CanUnlock` was true), `TotalUnlocked` must increase by exactly 1. For any failed `Unlock` call, `TotalUnlocked` must remain unchanged.

**Validates: Requirements 16.14**

---

### Property 26: GetBranchSkills Sorted by Tier

*For any* `SkillBranch`, `GetBranchSkills(branch)` must return exactly 4 skills belonging to that branch, sorted in ascending order by `Tier` (1, 2, 3, 4).

**Validates: Requirements 8.6**

---

### Property 27: SaveData Serialization Round-Trip

*For any* `SaveData` object with valid field values, serializing to JSON via `JsonUtility.ToJson` then deserializing via `JsonUtility.FromJson<SaveData>` must produce an object with all fields equal to the original.

**Validates: Requirements 12.7**

---

### Property 28: WeightedChoice Index Bounds

*For any* non-empty `float[]` weights array with all non-negative values and at least one positive value, `SeededRNG.WeightedChoice(weights)` must return an index in the range [0, weights.Length).

**Validates: Requirements 16.3**

---

### Property 29: Shuffle Produces a Permutation

*For any* array of elements, `SeededRNG.Shuffle` must produce a rearrangement that contains exactly the same elements as the original array (same multiset), with the same total count.

**Validates: Requirements 16.4**

## Testing Strategy

### Dual Testing Approach

Unit tests and property-based tests are complementary. Unit tests catch concrete bugs with specific inputs; property tests verify general correctness across the full input space.

**Unit tests focus on:**
- Specific examples demonstrating correct behavior (daily challenge seed formula, XP level-up thresholds, medkit heal amounts)
- Integration points (SaveSystem file I/O, RecipeCache disk operations)
- Error conditions (corrupt save recovery, recipe generation failure fallback, zone generation failure)
- Edge cases (empty inventory, max armor, explosion at exact radius boundary)

**Property tests focus on:**
- Universal invariants (LRU capacity, inventory capacity, damage pipeline)
- Round-trip correctness (serialization, cache store/retrieve, inventory add/remove)
- Determinism (SeededRNG, ZoneLayoutGenerator)
- Metamorphic relationships (armor reduces damage, headshot multiplier)

### Property-Based Testing Configuration

Library: **FsCheck 3.x** with `FsCheck.NUnit` binding.

```csharp
// All property tests in Tests/DeadCityEscape.Logic/
[TestFixture]
[Trait("Feature", "dead-city-escape-mobile-overhaul")]
public class SeededRNGTests {

    // Feature: dead-city-escape-mobile-overhaul, Property 1: SeededRNG Determinism
    [Property(MaxTest = 500)]
    public Property SameSeedProducesSameSequence() =>
        Prop.ForAll(
            Arb.From(Gen.Choose(int.MinValue, int.MaxValue)),
            seed => {
                var rng1 = new SeededRNG(seed);
                var rng2 = new SeededRNG(seed);
                return Enumerable.Range(0, 50)
                    .All(_ => rng1.NextInt(0, 10000) == rng2.NextInt(0, 10000));
            });

    // Feature: dead-city-escape-mobile-overhaul, Property 28: WeightedChoice Index Bounds
    [Property(MaxTest = 500)]
    public Property WeightedChoiceReturnsValidIndex() =>
        Prop.ForAll(
            Arb.From(Gen.NonEmptyListOf(Gen.Choose(0, 100).Select(x => (float)x))
                       .Select(l => l.ToArray())
                       .Where(a => a.Any(w => w > 0))),
            weights => {
                var rng = new SeededRNG(42);
                int idx = rng.WeightedChoice(weights);
                return idx >= 0 && idx < weights.Length;
            });
}
```

Each correctness property (1–29) must be implemented by exactly one property-based test. Minimum 500 iterations per test (configured via `MaxTest = 500`).

### Unity TestRunner — EditMode Tests

Location: `Assets/Tests/EditMode/`

Covers:
- `SaveSystem` serialization and file I/O (uses `Application.temporaryCachePath` in tests)
- `RecipeCache` disk operations
- `DamageCalculator` specific examples (armor cap at 0.8, headshot exact values)
- `InventorySystem` specific examples (stacking order, multi-cell placement)
- Daily Challenge seed formula: `Assert.AreEqual(20240615, GameManager.ComputeDailyChallengeSeed(new DateTime(2024, 6, 15)))`

### Unity TestRunner — PlayMode Tests

Location: `Assets/Tests/PlayMode/`

Covers:
- `PlayerController` noise level transitions (requires CharacterController in scene)
- `ZombieBase` state machine transitions (requires NavMesh baked in test scene)
- `EscapeRouteManager` objective progression for all three routes
- `GameManager` phase transitions (MainMenu → Loading → Spawning → Playing → Victory/GameOver)
- `PlayerHealth` damage, death, medkit, Second Wind regen
- Audio idempotence (generate same params twice, compare AudioClip sample data)

### Test Scene Setup

`Assets/Tests/PlayMode/TestScene.unity`:
- Minimal NavMesh plane (100×100)
- Player prefab with `PlayerController`, `PlayerHealth`, `CharacterController`
- One zombie of each type
- `GameManager`, `SaveSystem`, `AudioManager`, `InputManager` singletons
- `EscapeRouteManager` with all three routes configured

### Coverage Targets

| Layer              | Target Coverage | Method              |
|--------------------|----------------|---------------------|
| Logic layer        | 100% line       | NUnit + FsCheck     |
| Unity MonoBehaviours | 80% branch    | Unity TestRunner    |
| UI controllers     | 60% branch      | PlayMode tests      |
| Error paths        | 100%            | Unit examples       |
