// ---------------------------------------------------------------------------
// Dead City Escape - Escape Route System
// Manages the three escape routes: Helicopter, Car, Sewer.
// Tracks objectives and triggers extraction sequences.
// ---------------------------------------------------------------------------
using System;
using System.Collections.Generic;
using UnityEngine;

namespace DeadCityEscape.Escape
{
    /// <summary>
    /// Tracks the state of a single escape objective.
    /// Matches the EscapeObjective data model from the design spec.
    /// </summary>
    [Serializable]
    public class EscapeObjective
    {
        public string ObjectiveId;
        public string DisplayText;
        public int RequiredCount;
        public int CurrentCount;
        public bool IsComplete;

        public float Progress => RequiredCount > 0
            ? (float)CurrentCount / RequiredCount : 0f;
    }

    /// <summary>
    /// Manages all three escape routes and their objective tracking.
    /// Implements Requirements 9.1, 10.1, 11.1 from the spec.
    /// </summary>
    public class EscapeRouteManager : MonoBehaviour
    {
        private Dictionary<Core.EscapeRoute, List<EscapeObjective>> _routeObjectives;
        private Core.EscapeRoute _activeRoute = Core.EscapeRoute.None;

        public Core.EscapeRoute ActiveRoute => _activeRoute;
        
        /// <summary>
        /// Returns the currently active objective (the next incomplete one).
        /// </summary>
        public EscapeObjective ActiveObjective => GetNextObjective();
        
        public event Action<EscapeObjective> OnObjectiveUpdated;
        public event Action<Core.EscapeRoute> OnRouteComplete;
        public event Action<string> OnObjectiveNotification;

        private void Start()
        {
            InitializeObjectives();
        }

        private void InitializeObjectives()
        {
            _routeObjectives = new Dictionary<Core.EscapeRoute, List<EscapeObjective>>
            {
                // Helicopter Escape (Hard) - 2x XP
                // Requirements: 9.1-9.8
                [Core.EscapeRoute.Helicopter] = new List<EscapeObjective>
                {
                    new EscapeObjective
                    {
                        ObjectiveId = "heli_find_helipad",
                        DisplayText = "Locate the rooftop helipad via radio tower",
                        RequiredCount = 1,
                        CurrentCount = 0,
                        IsComplete = false
                    },
                    new EscapeObjective
                    {
                        ObjectiveId = "heli_fuel_cans",
                        DisplayText = "Collect fuel cans",
                        RequiredCount = 5,
                        CurrentCount = 0,
                        IsComplete = false
                    },
                    new EscapeObjective
                    {
                        ObjectiveId = "heli_repair_radio",
                        DisplayText = "Repair the radio transmitter",
                        RequiredCount = 1,
                        CurrentCount = 0,
                        IsComplete = false
                    },
                    new EscapeObjective
                    {
                        ObjectiveId = "heli_defend",
                        DisplayText = "Defend the helipad for 3 minutes",
                        RequiredCount = 1,
                        CurrentCount = 0,
                        IsComplete = false
                    }
                },

                // Car Escape (Medium) - 1.5x XP
                // Requirements: 10.1-10.7
                [Core.EscapeRoute.Car] = new List<EscapeObjective>
                {
                    new EscapeObjective
                    {
                        ObjectiveId = "car_find_vehicle",
                        DisplayText = "Find the vehicle in the parking garage",
                        RequiredCount = 1,
                        CurrentCount = 0,
                        IsComplete = false
                    },
                    new EscapeObjective
                    {
                        ObjectiveId = "car_get_key",
                        DisplayText = "Get the car key from the police station",
                        RequiredCount = 1,
                        CurrentCount = 0,
                        IsComplete = false
                    },
                    new EscapeObjective
                    {
                        ObjectiveId = "car_repair_parts",
                        DisplayText = "Gather repair items: battery, tire, fuel",
                        RequiredCount = 3,
                        CurrentCount = 0,
                        IsComplete = false
                    },
                    new EscapeObjective
                    {
                        ObjectiveId = "car_clear_barricade",
                        DisplayText = "Clear the street barricades",
                        RequiredCount = 1,
                        CurrentCount = 0,
                        IsComplete = false
                    }
                },

                // Sewer Escape (Stealth) - 1.25x XP
                // Requirements: 11.1-11.7
                [Core.EscapeRoute.Sewer] = new List<EscapeObjective>
                {
                    new EscapeObjective
                    {
                        ObjectiveId = "sewer_lockpicks",
                        DisplayText = "Acquire lockpick set",
                        RequiredCount = 1,
                        CurrentCount = 0,
                        IsComplete = false
                    },
                    new EscapeObjective
                    {
                        ObjectiveId = "sewer_unlock_gates",
                        DisplayText = "Unlock sewer access points (Zones 3, 7, 11)",
                        RequiredCount = 3,
                        CurrentCount = 0,
                        IsComplete = false
                    },
                    new EscapeObjective
                    {
                        ObjectiveId = "sewer_torch",
                        DisplayText = "Find the acetylene torch (Zone 10)",
                        RequiredCount = 1,
                        CurrentCount = 0,
                        IsComplete = false
                    },
                    new EscapeObjective
                    {
                        ObjectiveId = "sewer_breach",
                        DisplayText = "Cut through reinforced gate (Zone 15)",
                        RequiredCount = 1,
                        CurrentCount = 0,
                        IsComplete = false
                    }
                }
            };
        }

        /// <summary>
        /// Activates a specific escape route for the player.
        /// Initializes the objective sequence for the chosen route.
        /// Requirement: 9.1, 10.1, 11.1
        /// </summary>
        public void ActivateRoute(Core.EscapeRoute route)
        {
            if (route == Core.EscapeRoute.None)
            {
                Debug.LogWarning("EscapeRouteManager: Cannot activate None route");
                return;
            }

            _activeRoute = route;
            
            var gm = Core.GameManager.Instance;
            if (gm != null)
                gm.SelectEscapeRoute(route);

            string routeName = route switch
            {
                Core.EscapeRoute.Helicopter => "Helicopter Escape",
                Core.EscapeRoute.Car => "Car Escape",
                Core.EscapeRoute.Sewer => "Sewer Escape",
                _ => "Unknown"
            };

            OnObjectiveNotification?.Invoke($"Route activated: {routeName}");
            
            // Notify about the first objective
            var firstObjective = GetNextObjective();
            if (firstObjective != null)
            {
                OnObjectiveUpdated?.Invoke(firstObjective);
            }
        }

        /// <summary>
        /// Advances an objective by the given amount.
        /// Checks completion conditions and triggers events.
        /// </summary>
        public void AdvanceObjective(string objectiveId, int amount = 1)
        {
            if (_activeRoute == Core.EscapeRoute.None) return;

            if (!_routeObjectives.TryGetValue(_activeRoute, out var objectives))
                return;

            foreach (var objective in objectives)
            {
                if (objective.ObjectiveId == objectiveId && !objective.IsComplete)
                {
                    objective.CurrentCount = Mathf.Min(
                        objective.CurrentCount + amount, objective.RequiredCount);

                    if (objective.CurrentCount >= objective.RequiredCount)
                    {
                        objective.IsComplete = true;
                        OnObjectiveNotification?.Invoke(
                            $"Objective complete: {objective.DisplayText}");

                        // Award XP for objective completion
                        var gm = Core.GameManager.Instance;
                        if (gm != null)
                            gm.AwardXP(gm.Config?.XPPerObjectiveComplete ?? 100);

                        // Special handling for heli_repair_radio - start defense phase
                        if (objectiveId == "heli_repair_radio" && _activeRoute == Core.EscapeRoute.Helicopter)
                        {
                            StartCoroutine(HelicopterDefensePhase());
                        }
                    }

                    OnObjectiveUpdated?.Invoke(objective);

                    // Check if all objectives complete
                    if (AreAllObjectivesComplete())
                    {
                        OnRouteComplete?.Invoke(_activeRoute);
                        TriggerExtraction();
                    }
                    return;
                }
            }
        }

        /// <summary>
        /// Returns the objectives for the active route.
        /// </summary>
        public List<EscapeObjective> GetActiveObjectives()
        {
            if (_activeRoute == Core.EscapeRoute.None) return new List<EscapeObjective>();
            return _routeObjectives.TryGetValue(_activeRoute, out var objectives)
                ? objectives
                : new List<EscapeObjective>();
        }

        /// <summary>
        /// Returns the next incomplete objective (the active one).
        /// </summary>
        public EscapeObjective GetNextObjective()
        {
            var objectives = GetActiveObjectives();
            foreach (var objective in objectives)
            {
                if (!objective.IsComplete) return objective;
            }
            return null;
        }

        private bool AreAllObjectivesComplete()
        {
            if (!_routeObjectives.TryGetValue(_activeRoute, out var objectives))
                return false;

            foreach (var objective in objectives)
            {
                if (!objective.IsComplete) return false;
            }
            return true;
        }

        private void TriggerExtraction()
        {
            var gm = Core.GameManager.Instance;
            if (gm != null)
            {
                gm.SetPhase(Core.GamePhase.EscapeSequence);

                // Different extraction sequences per route
                // Requirements: 9.6, 10.6, 11.6
                switch (_activeRoute)
                {
                    case Core.EscapeRoute.Helicopter:
                        // Helicopter extraction with 2.0x XP multiplier
                        // Requirement: 9.8
                        StartCoroutine(HelicopterExtractionSequence());
                        break;
                    case Core.EscapeRoute.Car:
                        // Car escape is immediate with 1.5x XP multiplier
                        gm.TriggerVictory();
                        break;
                    case Core.EscapeRoute.Sewer:
                        // Sewer escape is immediate with 1.25x XP multiplier
                        gm.TriggerVictory();
                        break;
                }
            }
        }

        private System.Collections.IEnumerator HelicopterExtractionSequence()
        {
            // 3-minute defend phase (180 seconds)
            // Requirement: 9.5
            float defendTime = 180f;
            float timer = 0f;

            OnObjectiveNotification?.Invoke(
                "Defend the helipad! Helicopter arriving in 3 minutes!");

            while (timer < defendTime)
            {
                timer += Time.deltaTime;

                // Update HUD with remaining time every 30 seconds
                float remaining = defendTime - timer;
                if (Mathf.FloorToInt(remaining) % 30 == 0 && remaining > 1)
                {
                    OnObjectiveNotification?.Invoke(
                        $"Hold on! {Mathf.CeilToInt(remaining)} seconds remaining!");
                }

                yield return null;
            }

            // Victory! Requirement: 9.6
            var gm = Core.GameManager.Instance;
            if (gm != null)
                gm.TriggerVictory();
        }

        /// <summary>
        /// Helicopter defense phase coroutine.
        /// 180 second defense with wave spawning.
        /// Requirement: 9.5
        /// </summary>
        private System.Collections.IEnumerator HelicopterDefensePhase()
        {
            float defendTime = 180f;
            float timer = 0f;
            float waveInterval = 20f; // Spawn wave every 20 seconds
            float nextWaveTime = waveInterval;

            OnObjectiveNotification?.Invoke(
                "Radio repaired! Defend the helipad for 3 minutes!");

            var spawner = FindAnyObjectByType<AI.ZombieSpawner>();
            var player = FindAnyObjectByType<Player.PlayerController>();

            while (timer < defendTime)
            {
                timer += Time.deltaTime;

                // Spawn waves at intervals
                if (timer >= nextWaveTime && spawner != null && player != null)
                {
                    // Escalating intensity based on time elapsed
                    int intensity = Mathf.CeilToInt(3 + (timer / defendTime) * 5);
                    spawner.SpawnWave(intensity, player.transform.position, 30f);
                    
                    nextWaveTime += waveInterval;
                    
                    OnObjectiveNotification?.Invoke(
                        $"Incoming wave! {Mathf.CeilToInt(defendTime - timer)}s remaining!");
                }

                // Update progress every 30 seconds
                float remaining = defendTime - timer;
                if (Mathf.FloorToInt(remaining) % 30 == 0 && remaining > 1 && remaining < defendTime - 1)
                {
                    OnObjectiveNotification?.Invoke(
                        $"Hold on! {Mathf.CeilToInt(remaining)} seconds remaining!");
                }

                yield return null;
            }

            // Defense complete - advance the defend objective
            AdvanceObjective("heli_defend", 1);
        }
    }
}
