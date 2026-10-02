// ---------------------------------------------------------------------------
// Dead City Escape - Skill Tree Data
// Pure C# skill tree with three branches: Stealth, Combat, Survival.
// No Unity dependency - data model only.
// ---------------------------------------------------------------------------
using System;
using System.Collections.Generic;

namespace DeadCityEscape.Logic
{
    /// <summary>
    /// Skill tree branches matching the GDD specification.
    /// </summary>
    public enum SkillBranch
    {
        Stealth,
        Combat,
        Survival
    }

    /// <summary>
    /// Represents a single skill node in the tree.
    /// </summary>
    public class SkillNode
    {
        public string Id;
        public string Name;
        public string Description;
        public SkillBranch Branch;
        public int Tier;                    // 0=root, 1=first unlock, etc.
        public int PointCost;
        public bool IsUnlocked;
        public string[] Prerequisites;      // IDs of required skills
        public Dictionary<string, float> Effects; // stat key -> modifier value

        public SkillNode(string id, string name, string description,
            SkillBranch branch, int tier, int pointCost,
            string[] prerequisites = null, Dictionary<string, float> effects = null)
        {
            Id = id;
            Name = name;
            Description = description;
            Branch = branch;
            Tier = tier;
            PointCost = pointCost;
            Prerequisites = prerequisites ?? Array.Empty<string>();
            Effects = effects ?? new Dictionary<string, float>();
            IsUnlocked = false;
        }
    }

    /// <summary>
    /// Manages the skill tree, point allocation, and stat bonuses.
    /// </summary>
    public class SkillTreeData
    {
        private readonly Dictionary<string, SkillNode> _nodes;
        private int _availablePoints;
        private int _totalPointsSpent;

        public int AvailablePoints => _availablePoints;
        public int TotalPointsSpent => _totalPointsSpent;
        public IReadOnlyDictionary<string, SkillNode> Nodes => _nodes;

        public SkillTreeData()
        {
            _nodes = new Dictionary<string, SkillNode>();
            _availablePoints = 0;
            _totalPointsSpent = 0;
            BuildDefaultTree();
        }

        private void BuildDefaultTree()
        {
            // -- Stealth Branch --
            // Requirement 8.7: Shadow Walk (stealth_1) - multiply CurrentNoiseLevel by 0.7
            AddNode(new SkillNode("stealth_1", "Shadow Walk",
                "Reduces movement noise by 30% (multiply by 0.7).",
                SkillBranch.Stealth, 1, 1,
                effects: new Dictionary<string, float> { { "noise_reduction", 0.30f } }));

            AddNode(new SkillNode("stealth_2", "Ghost Protocol",
                "Reduces detection radius by 25%.",
                SkillBranch.Stealth, 2, 2,
                prerequisites: new[] { "stealth_1" },
                effects: new Dictionary<string, float> { { "detection_radius", -0.25f } }));

            AddNode(new SkillNode("stealth_3", "Silent Assassin",
                "Reduces movement noise by additional 50%. Near silent.",
                SkillBranch.Stealth, 3, 3,
                prerequisites: new[] { "stealth_2" },
                effects: new Dictionary<string, float> { { "noise_reduction", 0.50f } }));

            AddNode(new SkillNode("stealth_4", "Phantom",
                "Lockpick speed doubled. Crouch speed increased 40%.",
                SkillBranch.Stealth, 4, 4,
                prerequisites: new[] { "stealth_3" },
                effects: new Dictionary<string, float>
                {
                    { "lockpick_speed", 2.0f },
                    { "crouch_speed", 0.40f }
                }));

            // -- Combat Branch --
            // Requirement 8.8: Heavy Hitter (combat_1) - apply 1.25× melee DamageMultiplier
            AddNode(new SkillNode("combat_1", "Heavy Hitter",
                "Melee damage increased by 25%.",
                SkillBranch.Combat, 1, 1,
                effects: new Dictionary<string, float> { { "melee_damage", 0.25f } }));

            AddNode(new SkillNode("combat_2", "Quick Hands",
                "Reload speed increased by 30%.",
                SkillBranch.Combat, 2, 2,
                prerequisites: new[] { "combat_1" },
                effects: new Dictionary<string, float> { { "reload_speed", 0.30f } }));

            AddNode(new SkillNode("combat_3", "Sharpshooter",
                "Headshot damage increased by 50%. Damage +15%.",
                SkillBranch.Combat, 3, 3,
                prerequisites: new[] { "combat_2" },
                effects: new Dictionary<string, float>
                {
                    { "headshot_bonus", 0.50f },
                    { "damage_bonus", 0.15f }
                }));

            AddNode(new SkillNode("combat_4", "Executioner",
                "Critical hits have 20% chance to instant-kill low-tier enemies.",
                SkillBranch.Combat, 4, 4,
                prerequisites: new[] { "combat_3" },
                effects: new Dictionary<string, float>
                {
                    { "execute_chance", 0.20f },
                    { "damage_bonus", 0.10f }
                }));

            // -- Survival Branch --
            // Requirement 8.9: Tough Skin (survival_1) - increase MaxHealth by 20
            AddNode(new SkillNode("survival_1", "Tough Skin",
                "Max health increased by 20.",
                SkillBranch.Survival, 1, 1,
                effects: new Dictionary<string, float> { { "max_health_bonus", 20f } }));

            // Requirement 7.8: Marathon Runner (survival_2) - call InventorySystem.ExpandRows(1)
            AddNode(new SkillNode("survival_2", "Marathon Runner",
                "Inventory expanded by 1 additional row.",
                SkillBranch.Survival, 2, 2,
                prerequisites: new[] { "survival_1" },
                effects: new Dictionary<string, float> { { "inventory_rows", 1f } }));

            AddNode(new SkillNode("survival_3", "Field Medic",
                "Medkit effectiveness increased by 50%.",
                SkillBranch.Survival, 3, 3,
                prerequisites: new[] { "survival_2" },
                effects: new Dictionary<string, float> { { "medkit_bonus", 0.50f } }));

            // Requirement 8.10: Second Wind (survival_4) - enable passive regen when health <30%
            AddNode(new SkillNode("survival_4", "Second Wind",
                "Regenerate 1 HP per second when health is below 30%.",
                SkillBranch.Survival, 4, 4,
                prerequisites: new[] { "survival_3" },
                effects: new Dictionary<string, float>
                {
                    { "regen_rate", 1.0f },
                    { "regen_threshold", 0.30f }
                }));
        }

        public void AddNode(SkillNode node)
        {
            _nodes[node.Id] = node;
        }

        /// <summary>
        /// Grants skill points (from leveling up).
        /// </summary>
        public void AddPoints(int points)
        {
            _availablePoints += Math.Max(0, points);
        }

        /// <summary>
        /// Attempts to unlock a skill. Returns true if successful.
        /// Checks prerequisites and point availability.
        /// </summary>
        public bool TryUnlock(string skillId)
        {
            if (!_nodes.TryGetValue(skillId, out var node)) return false;
            if (node.IsUnlocked) return false;
            if (_availablePoints < node.PointCost) return false;

            // Check prerequisites
            foreach (string prereqId in node.Prerequisites)
            {
                if (!_nodes.TryGetValue(prereqId, out var prereq) || !prereq.IsUnlocked)
                    return false;
            }

            node.IsUnlocked = true;
            _availablePoints -= node.PointCost;
            _totalPointsSpent += node.PointCost;
            return true;
        }

        /// <summary>
        /// Returns the cumulative effect value for a given stat key.
        /// Sums across all unlocked skills.
        /// </summary>
        public float GetEffectValue(string statKey)
        {
            float total = 0f;
            foreach (var node in _nodes.Values)
            {
                if (node.IsUnlocked && node.Effects.TryGetValue(statKey, out float val))
                    total += val;
            }
            return total;
        }

        /// <summary>
        /// Returns all unlocked skills for a given branch.
        /// </summary>
        public List<SkillNode> GetUnlockedSkills(SkillBranch branch)
        {
            var result = new List<SkillNode>();
            foreach (var node in _nodes.Values)
            {
                if (node.Branch == branch && node.IsUnlocked)
                    result.Add(node);
            }
            return result;
        }

        /// <summary>
        /// Returns all skills for a given branch, sorted by tier.
        /// </summary>
        public List<SkillNode> GetBranchSkills(SkillBranch branch)
        {
            var result = new List<SkillNode>();
            foreach (var node in _nodes.Values)
            {
                if (node.Branch == branch)
                    result.Add(node);
            }
            result.Sort((a, b) => a.Tier.CompareTo(b.Tier));
            return result;
        }

        /// <summary>
        /// Gets a skill node by ID.
        /// </summary>
        public SkillNode GetSkill(string skillId)
        {
            _nodes.TryGetValue(skillId, out var node);
            return node;
        }

        /// <summary>
        /// Returns the total number of unlocked skills.
        /// </summary>
        public int TotalUnlocked()
        {
            int count = 0;
            foreach (var node in _nodes.Values)
            {
                if (node.IsUnlocked) count++;
            }
            return count;
        }

        /// <summary>
        /// Attempts to unlock a skill using the CanUnlock/Unlock pattern.
        /// </summary>
        public bool Unlock(string skillId)
        {
            if (!CanUnlock(skillId)) return false;
            if (!_nodes.TryGetValue(skillId, out var node)) return false;
            
            node.IsUnlocked = true;
            _availablePoints -= node.PointCost;
            _totalPointsSpent += node.PointCost;
            return true;
        }

        /// <summary>
        /// Returns true if the given skill can currently be unlocked.
        /// </summary>
        public bool CanUnlock(string skillId)
        {
            if (!_nodes.TryGetValue(skillId, out var node)) return false;
            if (node.IsUnlocked) return false;
            if (_availablePoints < node.PointCost) return false;

            foreach (string prereqId in node.Prerequisites)
            {
                if (!_nodes.TryGetValue(prereqId, out var prereq) || !prereq.IsUnlocked)
                    return false;
            }
            return true;
        }

        /// <summary>
        /// Resets the skill tree, refunding all points.
        /// </summary>
        public void Reset()
        {
            _availablePoints += _totalPointsSpent;
            _totalPointsSpent = 0;
            foreach (var node in _nodes.Values)
                node.IsUnlocked = false;
        }
    }
}
