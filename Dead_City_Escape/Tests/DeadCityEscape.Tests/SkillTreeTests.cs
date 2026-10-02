// ---------------------------------------------------------------------------
// Dead City Escape - Skill Tree Tests
// Validates skill prerequisites, unlocking, and branch queries.
// ---------------------------------------------------------------------------
using NUnit.Framework;
using DeadCityEscape.Logic;

namespace DeadCityEscape.Tests
{
    [TestFixture]
    public class SkillTreeTests
    {
        [Test]
        public void NewTree_NoSkillsUnlocked()
        {
            var tree = new SkillTreeData();
            Assert.That(tree.TotalUnlocked(), Is.EqualTo(0));
        }

        [Test]
        public void Tier1Skills_CanUnlockImmediately()
        {
            var tree = new SkillTreeData();
            Assert.That(tree.CanUnlock("stealth_1"), Is.True);
            Assert.That(tree.CanUnlock("combat_1"), Is.True);
            Assert.That(tree.CanUnlock("survival_1"), Is.True);
        }

        [Test]
        public void Tier2Skills_RequirePrerequisite()
        {
            var tree = new SkillTreeData();
            Assert.That(tree.CanUnlock("stealth_2"), Is.False);

            tree.Unlock("stealth_1");
            Assert.That(tree.CanUnlock("stealth_2"), Is.True);
        }

        [Test]
        public void Unlock_ReturnsTrue_OnSuccess()
        {
            var tree = new SkillTreeData();
            Assert.That(tree.Unlock("combat_1"), Is.True);
        }

        [Test]
        public void Unlock_ReturnsFalse_WhenMissingPrereq()
        {
            var tree = new SkillTreeData();
            Assert.That(tree.Unlock("combat_4"), Is.False);
        }

        [Test]
        public void Unlock_ReturnsFalse_WhenAlreadyUnlocked()
        {
            var tree = new SkillTreeData();
            tree.Unlock("stealth_1");
            Assert.That(tree.Unlock("stealth_1"), Is.False);
        }

        [Test]
        public void FullChain_UnlocksInOrder()
        {
            var tree = new SkillTreeData();

            Assert.That(tree.Unlock("survival_1"), Is.True);
            Assert.That(tree.Unlock("survival_2"), Is.True);
            Assert.That(tree.Unlock("survival_3"), Is.True);
            Assert.That(tree.Unlock("survival_4"), Is.True);

            Assert.That(tree.TotalUnlocked(), Is.EqualTo(4));
        }

        [Test]
        public void SkipTier_Fails()
        {
            var tree = new SkillTreeData();
            tree.Unlock("combat_1");

            // Cannot skip to tier 3
            Assert.That(tree.Unlock("combat_3"), Is.False);
        }

        [Test]
        public void GetSkill_ReturnsCorrectData()
        {
            var tree = new SkillTreeData();
            var skill = tree.GetSkill("stealth_1");

            Assert.That(skill, Is.Not.Null);
            Assert.That(skill!.Name, Is.EqualTo("Shadow Walk"));
            Assert.That(skill.Branch, Is.EqualTo(SkillBranch.Stealth));
            Assert.That(skill.Tier, Is.EqualTo(1));
        }

        [Test]
        public void GetSkill_InvalidId_ReturnsNull()
        {
            var tree = new SkillTreeData();
            Assert.That(tree.GetSkill("nonexistent"), Is.Null);
        }

        [Test]
        public void GetBranchSkills_ReturnsCorrectCount()
        {
            var tree = new SkillTreeData();

            Assert.That(tree.GetBranchSkills(SkillBranch.Stealth).Count, Is.EqualTo(4));
            Assert.That(tree.GetBranchSkills(SkillBranch.Combat).Count, Is.EqualTo(4));
            Assert.That(tree.GetBranchSkills(SkillBranch.Survival).Count, Is.EqualTo(4));
        }

        [Test]
        public void GetBranchSkills_SortedByTier()
        {
            var tree = new SkillTreeData();
            var skills = tree.GetBranchSkills(SkillBranch.Combat);

            for (int i = 0; i < skills.Count - 1; i++)
                Assert.That(skills[i].Tier, Is.LessThanOrEqualTo(skills[i + 1].Tier));
        }

        [Test]
        public void SkillEffects_Exist()
        {
            var tree = new SkillTreeData();
            var skill = tree.GetSkill("combat_1");

            Assert.That(skill!.Effects, Is.Not.Empty);
            Assert.That(skill.Effects.ContainsKey("melee_damage_multiplier"), Is.True);
            Assert.That(skill.Effects["melee_damage_multiplier"], Is.EqualTo(1.25f));
        }

        [Test]
        public void CrossBranch_UnlockIndependent()
        {
            var tree = new SkillTreeData();

            tree.Unlock("stealth_1");
            tree.Unlock("combat_1");
            tree.Unlock("survival_1");

            Assert.That(tree.TotalUnlocked(), Is.EqualTo(3));
        }

        [Test]
        public void Survival4_HasMultipleEffects()
        {
            var tree = new SkillTreeData();
            var skill = tree.GetSkill("survival_4");

            Assert.That(skill!.Effects.Count, Is.GreaterThanOrEqualTo(2));
            Assert.That(skill.Effects.ContainsKey("passive_regen"), Is.True);
            Assert.That(skill.Effects.ContainsKey("regen_threshold"), Is.True);
        }
    }
}
