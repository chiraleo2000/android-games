// ---------------------------------------------------------------------------
// Dead City Escape - Skill Tree Data Property-Based Tests
// Validates correctness properties with randomized inputs (500 iterations).
// ---------------------------------------------------------------------------
using NUnit.Framework;
using DeadCityEscape.Logic;

namespace DeadCityEscape.Tests
{
    [TestFixture]
    public class SkillTreeDataPropertyTests
    {
        private const int Iterations = 500;
        private readonly Random _rand = new(42);

        private static readonly SkillBranch[] Branches =
            { SkillBranch.Stealth, SkillBranch.Combat, SkillBranch.Survival };

        // Property 23: SkillTree Unlock Prerequisite Logic
        [Test]
        [Category("Property:23")]
        public void Property23_SkillTree_UnlockPrerequisiteLogic()
        {
            for (int iter = 0; iter < Iterations; iter++)
            {
                int branchIdx = _rand.Next(0, 3);
                int tier = _rand.Next(1, 5);

                var skillTree = new SkillTreeData();
                var branch = Branches[branchIdx];
                string skillId = $"{branch.ToString().ToLower()}_{tier}";

                if (tier == 1)
                {
                    bool canUnlock = skillTree.CanUnlock(skillId);
                    var skill = skillTree.GetSkill(skillId);
                    bool isUnlocked = skill?.Unlocked ?? false;
                    Assert.That(canUnlock, Is.EqualTo(!isUnlocked),
                        $"Tier 1 skill {skillId}: CanUnlock should be !Unlocked");
                }
                else
                {
                    string prereqId = $"{branch.ToString().ToLower()}_{tier - 1}";
                    bool canUnlock = skillTree.CanUnlock(skillId);
                    var prereqSkill = skillTree.GetSkill(prereqId);
                    bool prereqUnlocked = prereqSkill?.Unlocked ?? false;
                    var skill = skillTree.GetSkill(skillId);
                    bool isUnlocked = skill?.Unlocked ?? false;

                    if (!prereqUnlocked)
                        Assert.That(canUnlock, Is.False,
                            $"Skill {skillId}: should not unlock without prerequisite {prereqId}");
                    else
                        Assert.That(canUnlock, Is.EqualTo(!isUnlocked),
                            $"Skill {skillId}: CanUnlock should be !Unlocked when prereq is met");
                }
            }
        }

        // Property 24: SkillTree Unlock State Transitions
        [Test]
        [Category("Property:24")]
        public void Property24_SkillTree_UnlockStateTransitions()
        {
            for (int iter = 0; iter < Iterations; iter++)
            {
                int branchIdx = _rand.Next(0, 3);
                int tier = _rand.Next(1, 5);

                var skillTree = new SkillTreeData();
                var branch = Branches[branchIdx];
                string skillId = $"{branch.ToString().ToLower()}_{tier}";

                // Unlock prerequisites
                for (int t = 1; t < tier; t++)
                {
                    string prereqId = $"{branch.ToString().ToLower()}_{t}";
                    skillTree.Unlock(prereqId);
                }

                bool canUnlockBefore = skillTree.CanUnlock(skillId);
                bool unlockResult = skillTree.Unlock(skillId);
                var skillAfter = skillTree.GetSkill(skillId);
                bool isUnlockedAfter = skillAfter?.Unlocked ?? false;

                if (canUnlockBefore)
                {
                    Assert.That(unlockResult, Is.True,
                        $"Skill {skillId}: Unlock should succeed when CanUnlock is true");
                    Assert.That(isUnlockedAfter, Is.True,
                        $"Skill {skillId}: should be unlocked after successful Unlock");
                }
                else
                {
                    Assert.That(unlockResult, Is.False,
                        $"Skill {skillId}: Unlock should fail when CanUnlock is false");
                    Assert.That(isUnlockedAfter, Is.False,
                        $"Skill {skillId}: should remain locked after failed Unlock");
                }
            }
        }

        // Property 25: TotalUnlocked Increments by Exactly 1
        [Test]
        [Category("Property:25")]
        public void Property25_TotalUnlocked_IncrementsBy1()
        {
            for (int iter = 0; iter < Iterations; iter++)
            {
                int branchIdx = _rand.Next(0, 3);
                int tier = _rand.Next(1, 5);

                var skillTree = new SkillTreeData();
                var branch = Branches[branchIdx];
                string skillId = $"{branch.ToString().ToLower()}_{tier}";

                // Unlock prerequisites
                for (int t = 1; t < tier; t++)
                {
                    string prereqId = $"{branch.ToString().ToLower()}_{t}";
                    skillTree.Unlock(prereqId);
                }

                int totalBefore = skillTree.TotalUnlocked();
                bool unlockResult = skillTree.Unlock(skillId);
                int totalAfter = skillTree.TotalUnlocked();

                if (unlockResult)
                    Assert.That(totalAfter, Is.EqualTo(totalBefore + 1),
                        $"Skill {skillId}: TotalUnlocked should increment by 1 on success");
                else
                    Assert.That(totalAfter, Is.EqualTo(totalBefore),
                        $"Skill {skillId}: TotalUnlocked should not change on failure");
            }
        }

        // Property 26: GetBranchSkills Sorted by Tier
        [Test]
        [Category("Property:26")]
        public void Property26_GetBranchSkills_SortedByTier()
        {
            for (int iter = 0; iter < Iterations; iter++)
            {
                int branchIdx = _rand.Next(0, 3);
                var skillTree = new SkillTreeData();
                var branch = Branches[branchIdx];

                var branchSkills = skillTree.GetBranchSkills(branch);

                Assert.That(branchSkills.Count, Is.EqualTo(4),
                    $"Branch {branch}: should have exactly 4 skills");

                foreach (var skill in branchSkills)
                    Assert.That(skill.Branch, Is.EqualTo(branch),
                        $"Branch {branch}: skill {skill.Id} has wrong branch {skill.Branch}");

                for (int i = 0; i < branchSkills.Count; i++)
                    Assert.That(branchSkills[i].Tier, Is.EqualTo(i + 1),
                        $"Branch {branch}: skill at index {i} has tier {branchSkills[i].Tier}, expected {i + 1}");
            }
        }
    }
}
