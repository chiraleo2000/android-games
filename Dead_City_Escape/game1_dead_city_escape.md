# Dead City Escape — Game Design Document

> **Version:** 1.1.0  
> **Purpose:** Single source of truth for building the mobile-first zombie survival FPS  
> **Audience:** Engineering/technical agents implementing features

---

## Table of Contents

1. [Product Summary](#1-product-summary)
2. [Core Gameplay](#2-core-gameplay)
3. [Progression & Replayability](#3-progression--replayability)
4. [Visual & UX Direction](#4-visual--ux-direction)
5. [Technical Architecture](#5-technical-architecture)
6. [Procedural City Generation](#6-procedural-city-generation)
7. [Recipe-Based Assets](#7-kkrieger-inspired-recipe-based-assets)
8. [Zombie AI & Systems](#8-zombie-ai--systems)
9. [Asset Optimization Rules](#9-asset-optimization-rules)
10. [Deliverables & Definition of Done](#10-deliverables--definition-of-done)
11. [Work Plan](#11-work-plan)
12. [Code Conventions](#12-code-conventions)

---

## 1. Product Summary

### 1.1 High-Level Pitch

A replayable survival FPS where the player spawns in a **seeded procedurally generated city** and must escape via **Helicopter** (hard), **Car** (medium), or **Sewer** (stealth) while managing scarce resources and reactive zombie threats.

### 1.2 Design Pillars

| Pillar | Description |
|--------|-------------|
| **Replayable Runs** | Same rules, different city layout and item placement per seed |
| **Tension Without Gore** | Readable threats, strong audio cues, atmospheric lighting |
| **Mobile Performance First** | Stable FPS and controlled memory via streaming + caching |

### 1.3 Target & Constraints

| Constraint | Value |
|------------|-------|
| **Platform** | Android, Web |
| **Device Baseline** | 4GB+ RAM (scalable "Lite Mode" available) |
| **Age Target** | Teens 13–18 |
| **Initial Download** | 80–120MB (prefer <100MB) |
| **Session Length** | 12–20 minutes per run |

---

## 2. Core Gameplay

### 2.1 Run Loop (Core Loop)

```
1. Spawn → 2. Scavenge → 3. Choose Route → 4. Complete Objectives → 5. Extract → 6. Rewards
```

### 2.2 Spawn System

- **Random spawn points** across **16 city zones** (seed-based generation)
- **Starting loadout:**
  - Melee: Baseball bat
  - Utility: Flashlight
- **No minimap initially** — player must discover landmarks

### 2.3 Enemy Roster

All zombies share a **common rig/anim set**; behavior differs via parameters + state machine.

| Type | Spawn Rate | Health | Behavior |
|------|------------|--------|----------|
| **Walker** | 60% | ~3 hits | Slow, attracted by noise, dangerous in groups |
| **Runner** | 25% | ~5 hits | Fast, rushes when detected |
| **Brute** | 10% | ~10 hits | Slow, powerful, guards key locations |
| **Screamer** | 5% | ~2 hits | Alerts nearby zombies; priority target |

> **Note:** Health values are baselines — tune via difficulty curves and weapon tiers.

### 2.4 Escape Routes

#### 🚁 Helicopter Escape (Hard)

| Step | Objective |
|------|-----------|
| 1 | Locate rooftop helipad via radio tower signals |
| 2 | Collect 5 fuel cans |
| 3 | Repair radio transmitter (toolkit + batteries) |
| 4 | Defend helipad for 3 minutes |
| **Reward** | 2× XP multiplier |

#### 🚗 Car Escape (Medium)

| Step | Objective |
|------|-----------|
| 1 | Find working vehicle in parking garage |
| 2 | Get car key from police station (high threat) |
| 3 | Gather 3 repair items: battery, spare tire, fuel |
| 4 | Clear street barricades (stealth/combat) |
| **Reward** | 1.5× XP multiplier |

#### 🕳️ Sewer Escape (Stealth)

| Step | Objective |
|------|-----------|
| 1 | Acquire lockpicks for security gates |
| 2 | Unlock 3 sewer access points (Zones 3, 7, 11) |
| 3 | Find acetylene torch (Zone 10) |
| 4 | Cut through reinforced mesh gate (Zone 15) |
| **Reward** | 1.25× XP multiplier |

---

## 3. Progression & Replayability

### 3.1 Progression System

- Leveling unlocks attachments and perks
- **Skill Tree Branches:**
  - *Stealth:* Quieter movement, reduced detection radius
  - *Combat:* Damage boost, faster reload
  - *Survival:* Regen improvements, increased inventory

### 3.2 Social & Retention

| Feature | Description |
|---------|-------------|
| **Leaderboards** | Fastest escape times |
| **Daily Challenges** | Unique spawn scenarios / fixed daily seed |
| **Shareable Clips** | Optional; privacy-safe and performant |

### 3.3 Monetization (Non-P2W)

- Cosmetic packs (outfits, skins)
- Battle pass (free + premium tracks)
- **No pay-to-win** — all gameplay items earnable

---

## 4. Visual & UX Direction

### 4.1 Visual Style

| Element | Specification |
|---------|---------------|
| **Art Style** | Stylized low-poly with vibrant neon lighting |
| **Environment** | Graffiti/posters (non-sensitive, non-real-brand) |
| **Weather** | Rain, fog (budgeted for performance) |
| **UI Accents** | Comic-book style hit markers |

### 4.2 UI/Controls (Mobile FPS)

- **Two-thumb controls:**
  - Left: Move + sprint
  - Right: Look + fire/aim
- Large, accessible buttons
- Configurable sensitivity
- Optional aim assist for accessibility

---

## 5. Technical Architecture

### 5.1 Engine & Rendering

| Component | Technology |
|-----------|------------|
| **Framework** | React Three Fiber (R3F) |
| **Physics** | @react-three/cannon |
| **Rendering** | Three.js with optimized settings |
| **State** | Zustand |

### 5.2 Performance Targets

| Metric | Target |
|--------|--------|
| **FPS** | 30–60 on mid-tier devices |
| **RAM** | <2GB peak usage |
| **Time-to-playable** | <10s to menu |
| **Thermals** | Avoid sustained GPU-heavy effects |

### 5.3 Content Delivery

- Use dynamic imports for optional content
- Optional remote bundles (CDN) for cosmetics

---

## 6. Procedural City Generation

### 6.1 World Model

- City = **16 zones** ("district tiles") generated from deterministic **seed**
- Each zone contains:
  - Road graph / blocks
  - Building footprints + placements
  - POIs: police station, garage, helipad, sewer access
  - Item spawn tables and zombie spawn tables

### 6.2 Streaming Model

- Keep only **2–3 active zones** around player
- **LRU cache** for:
  - Generated buildings
  - Decals/textures
  - Prop meshes
- Unload zones outside radius; preserve determinism via seed

### 6.3 Culling & Visibility

- Load only buildings within view/stream radius
- Frustum culling + occlusion where feasible
- Prefer baked lighting; neon is emissive (cheap)

---

## 7. .kkrieger-Inspired Recipe-Based Assets

> **Goal:** Reduce shipped asset footprint by storing **recipes** (parameters) and generating assets at runtime.

### 7.1 Recipe Types

| Recipe | Inputs | Output |
|--------|--------|--------|
| **TextureRecipe** | Seed, palette, noise params, masks | 256–512px textures + decals |
| **MeshRecipe** | Primitive stack, deformation ops | Low-poly props + auto LODs |
| **AudioRecipe** | Synth params for layers | Procedural SFX / baked clips |

### 7.2 Caching Policy

- **Cache key:** App version + recipe hash + device tier
- **Limits:** 250–500MB disk cap (configurable)
- **Invalidation:** Bump version on breaking content changes

### 7.3 Progressive Generation

- **Fast boot:** Reach menu quickly
- Generate during safe spawn pockets or transitions
- Show "Generating District…" progress when needed
- **Fallback:** Use shipped default assets on failure

---

## 8. Zombie AI & Systems

### 8.1 Core AI Requirements

| System | Description |
|--------|-------------|
| **Perception** | Distance + LoS + hearing (noise events) |
| **States** | Idle → Investigate → Chase → Attack → Search → Return |
| **Group Behavior** | Walkers cluster; screamers call reinforcements |
| **Spawn Director** | Adjusts intensity by time-in-run and player noise |

### 8.2 Combat Requirements

- Melee and ranged damage pipeline
- Hit feedback: non-graphic, stylized markers
- Stagger/knockback rules (tuned per type)
- Ammo scarcity + reload pacing

---

## 9. Asset Optimization Rules

| Rule | Implementation |
|------|----------------|
| **Textures** | ASTC compression; high atlas usage |
| **Draw Calls** | Texture atlases to reduce count |
| **Lighting** | Baked where possible; avoid real-time shadows |
| **Animations** | Shared zombie rig/anim set |
| **Particles** | Lightweight; avoid expensive transparencies |

---

## 10. Deliverables & Definition of Done

### 10.1 MVP Milestone (Vertical Slice)

**Player can complete one escape route in a generated city:**

- [ ] Mobile FPS controller + UI
- [ ] Procedural city with ≥4 zones
- [ ] Walker + Runner AI
- [ ] Items: bat, flashlight, 3 pickup items
- [ ] Car escape route end-to-end
- [ ] Basic save of run seed + results

### 10.2 Full Feature DoD (Release Candidate)

- [ ] 16 zones streaming + stable performance
- [ ] All 4 zombie types
- [ ] All 3 escape routes end-to-end + rewards
- [ ] Progression + skill branches functional
- [ ] Daily seed challenge + leaderboard
- [ ] Recipe system integrated with caching
- [ ] Crash-free on device matrix

---

## 11. Work Plan

### Phase A — Foundation (Core Loop)

1. Implement mobile FPS controller + UI bindings
2. Implement seed system + deterministic RNG utilities
3. Implement zone streaming scaffold (load/unload + LRU)
4. Implement base item pickups + inventory

### Phase B — Procedural City Slice

5. Implement grid/block generator (roads + footprints)
6. Place POIs using constraints
7. Implement spawn tables (items + zombies) deterministically

### Phase C — AI & Combat Slice

8. Implement Walker AI + melee combat
9. Add Runner AI + ranged weapon baseline
10. Add noise event system + hearing response

### Phase D — Escape Routes

11. Implement Car route objectives + extraction
12. Add Helicopter route + defend timer
13. Add Sewer route + stealth mechanics

### Phase E — Recipe System + Optimization

14. Implement TextureRecipe generator + cache
15. Implement MeshRecipe generator + LOD
16. Add progressive generation UX + fallbacks
17. Performance pass (profiling, draw calls, memory)

### Phase F — Meta + Polish

18. Progression + skill branches
19. Daily seed + leaderboard integration
20. QA on device matrix + balancing pass

---

## 12. Code Conventions

### Directory Structure

```
src/
├── core/        # Seed, config, utilities, player, audio
├── worldgen/    # Zones, streaming, LRU cache, POI placement
├── ai/          # Perception, states, spawn director
├── combat/      # Weapons, damage, hit feedback
├── recipes/     # TextureRecipe, MeshRecipe, AudioRecipe + cache
├── ui/          # HUD, menus, prompts
├── store/       # Zustand state management
└── hooks/       # Custom React hooks
```

### Patterns

- Use **Zustand** for global state management
- Use **TypeScript** for all source files
- Define tunables as separate config objects
- Keep components focused and reusable

---

*Last Updated: February 2026*
