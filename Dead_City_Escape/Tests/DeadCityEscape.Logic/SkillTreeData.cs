// ---------------------------------------------------------------------------
// Dead City Escape - Skill Tree Data (Standalone .NET version)
// Three-branch skill tree for .NET testing.
// ---------------------------------------------------------------------------
namespace DeadCityEscape.Logic
{
    public enum SkillBranch { Stealth, Combat, Survival }

    public sealed class SkillNode
    {
        public string Id;
        public string Name;
        public string Description;
        public SkillBranch Branch;
        public int Tier;
        public string? Prerequisite;
        public Dictionary<string, float> Effects;
        public bool Unlocked;

        public SkillNode(string id, string name, string desc, SkillBranch branch,
            int tier, string? prereq, Dictionary<string, float> effects)
        {
            Id = id; Name = name; Description = desc;
            Branch = branch; Tier = tier; Prerequisite = prereq;
            Effects = effects; Unlocked = false;
        }
    }

    /// <summary>
    /// Defines the complete skill tree: 3 branches x 4 tiers = 12 skills.
    /// </summary>
    public sealed class SkillTreeData
    {
        private readonly Dictionary<string, SkillNode> _skills = new();

        public SkillTreeData()
        {
            // Stealth branch
            Add("stealth_1", "Shadow Walk", "Reduce movement noise by 30%",
                SkillBranch.Stealth, 1, null,
                new() { { "noise_multiplier", 0.7f } });
            Add("stealth_2", "Silent Takedown", "Melee backstabs deal 3x damage",
                SkillBranch.Stealth, 2, "stealth_1",
                new() { { "backstab_multiplier", 3f } });
            Add("stealth_3", "Ghost", "Zombies lose sight 40% faster",
                SkillBranch.Stealth, 3, "stealth_2",
                new() { { "detection_decay_multiplier", 0.6f } });
            Add("stealth_4", "Phantom", "Crouch movement is completely silent",
                SkillBranch.Stealth, 4, "stealth_3",
                new() { { "crouch_noise_multiplier", 0f } });

            // Combat branch
            Add("combat_1", "Heavy Hitter", "Melee damage +25%",
                SkillBranch.Combat, 1, null,
                new() { { "melee_damage_multiplier", 1.25f } });
            Add("combat_2", "Quick Reload", "Reload speed +30%",
                SkillBranch.Combat, 2, "combat_1",
                new() { { "reload_speed_multiplier", 0.7f } });
            Add("combat_3", "Demolitions", "Explosive damage +40%, radius +20%",
                SkillBranch.Combat, 3, "combat_2",
                new() { { "explosive_damage_multiplier", 1.4f },
                        { "explosive_radius_multiplier", 1.2f } });
            Add("combat_4", "Executioner", "Critical hit chance 15%",
                SkillBranch.Combat, 4, "combat_3",
                new() { { "critical_chance", 0.15f } });

            // Survival branch
            Add("survival_1", "Tough Skin", "+20 max health",
                SkillBranch.Survival, 1, null,
                new() { { "max_health_bonus", 20f } });
            Add("survival_2", "Field Medic", "Medkits heal 50% more",
                SkillBranch.Survival, 2, "survival_1",
                new() { { "medkit_efficiency", 1.5f } });
            Add("survival_3", "Marathon Runner", "Sprint 20% faster",
                SkillBranch.Survival, 3, "survival_2",
                new() { { "sprint_speed_multiplier", 1.2f } });
            Add("survival_4", "Second Wind", "Passive regen 1 HP/sec below 30%",
                SkillBranch.Survival, 4, "survival_3",
                new() { { "passive_regen", 1f },
                        { "regen_threshold", 0.3f } });
        }

        private void Add(string id, string name, string desc, SkillBranch branch,
            int tier, string? prereq, Dictionary<string, float> effects)
        {
            _skills[id] = new SkillNode(id, name, desc, branch, tier, prereq, effects);
        }

        public SkillNode? GetSkill(string id)
            => _skills.TryGetValue(id, out var s) ? s : null;

        public bool CanUnlock(string id)
        {
            if (!_skills.TryGetValue(id, out var skill)) return false;
            if (skill.Unlocked) return false;
            if (skill.Prerequisite == null) return true;
            return _skills.TryGetValue(skill.Prerequisite, out var prereq)
                && prereq.Unlocked;
        }

        public bool Unlock(string id)
        {
            if (!CanUnlock(id)) return false;
            _skills[id].Unlocked = true;
            return true;
        }

        public List<SkillNode> GetBranchSkills(SkillBranch branch)
        {
            var result = new List<SkillNode>();
            foreach (var skill in _skills.Values)
            {
                if (skill.Branch == branch)
                    result.Add(skill);
            }
            result.Sort((a, b) => a.Tier.CompareTo(b.Tier));
            return result;
        }

        public int TotalUnlocked()
        {
            int count = 0;
            foreach (var skill in _skills.Values)
                if (skill.Unlocked) count++;
            return count;
        }
    }
}
