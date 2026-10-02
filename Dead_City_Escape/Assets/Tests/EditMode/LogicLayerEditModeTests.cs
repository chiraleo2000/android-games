// ---------------------------------------------------------------------------
// Dead City Escape - Unity EditMode Tests
// Tests the pure C# logic layer within the Unity Test Runner.
// These run without entering Play mode.
// ---------------------------------------------------------------------------
using NUnit.Framework;
using DeadCityEscape.Logic;
using System.Collections.Generic;
using System.Linq;

namespace DeadCityEscape.Tests.EditMode
{
    /// <summary>
    /// EditMode tests validating the logic layer runs correctly inside Unity's runtime.
    /// Mirrors the standalone .NET tests to ensure parity.
    /// </summary>
    public class LogicLayerEditModeTests
    {
        // ---- SeededRNG ----

        [Test]
        public void SeededRNG_SameSeed_ProducesSameSequence()
        {
            var rng1 = new SeededRNG(42);
            var rng2 = new SeededRNG(42);

            for (int i = 0; i < 100; i++)
                Assert.AreEqual(rng1.NextUInt64(), rng2.NextUInt64());
        }

        [Test]
        public void SeededRNG_DifferentSeeds_Diverge()
        {
            var rng1 = new SeededRNG(1);
            var rng2 = new SeededRNG(2);

            bool anyDifferent = false;
            for (int i = 0; i < 10; i++)
            {
                if (rng1.NextUInt64() != rng2.NextUInt64())
                {
                    anyDifferent = true;
                    break;
                }
            }
            Assert.IsTrue(anyDifferent);
        }

        [Test]
        public void SeededRNG_NextInt_InRange()
        {
            var rng = new SeededRNG(99);
            for (int i = 0; i < 500; i++)
            {
                int val = rng.Next(10, 20);
                Assert.GreaterOrEqual(val, 10);
                Assert.Less(val, 20);
            }
        }

        [Test]
        public void SeededRNG_NextFloat_InRange()
        {
            var rng = new SeededRNG(7);
            for (int i = 0; i < 500; i++)
            {
                float val = rng.NextFloat();
                Assert.GreaterOrEqual(val, 0f);
                Assert.Less(val, 1f);
            }
        }

        [Test]
        public void SeededRNG_Fork_ProducesIndependentStream()
        {
            var parent = new SeededRNG(100);
            ulong parentVal = parent.NextUInt64();
            var child = parent.Fork(42);
            ulong childVal = child.NextUInt64();

            // Child should produce different values than parent
            Assert.AreNotEqual(parentVal, childVal);
        }

        [Test]
        public void SeededRNG_Shuffle_PreservesElements()
        {
            var rng = new SeededRNG(55);
            var arr = new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
            var original = new List<int>(arr);
            rng.Shuffle(arr);

            CollectionAssert.AreEquivalent(original, arr);
        }

        [Test]
        public void SeededRNG_WeightedChoice_RespectsWeights()
        {
            var rng = new SeededRNG(88);
            float[] weights = { 100f, 0f, 0f };
            int[] counts = new int[3];

            for (int i = 0; i < 100; i++)
                counts[rng.WeightedChoice(weights)]++;

            Assert.AreEqual(100, counts[0]);
        }

        // ---- DamageCalculator ----

        [Test]
        public void DamageCalc_BaseDamage_NoModifiers()
        {
            var input = new DamageInput { BaseDamage = 10f, WeaponDamageMultiplier = 1f, AttackerDamageMultiplier = 1f, HitZone = HitZone.Body, Type = DamageType.Ranged, TargetHealth = 100f, TargetMaxHealth = 100f };
            var result = DamageCalculator.Calculate(input);
            Assert.AreEqual(10f, result.FinalDamage, 0.01f);
        }

        [Test]
        public void DamageCalc_Headshot_Multiplier()
        {
            var input = new DamageInput { BaseDamage = 10f, WeaponDamageMultiplier = 1f, AttackerDamageMultiplier = 1f, HitZone = HitZone.Head, Type = DamageType.Ranged, TargetHealth = 100f, TargetMaxHealth = 100f };
            var result = DamageCalculator.Calculate(input);
            Assert.AreEqual(25f, result.FinalDamage, 0.01f);
        }

        [Test]
        public void DamageCalc_Armor_Reduces()
        {
            var input = new DamageInput { BaseDamage = 100f, WeaponDamageMultiplier = 1f, AttackerDamageMultiplier = 1f, HitZone = HitZone.Body, Type = DamageType.Ranged, TargetArmor = 50f, TargetHealth = 100f, TargetMaxHealth = 100f };
            var result = DamageCalculator.Calculate(input);
            Assert.AreEqual(50f, result.FinalDamage, 0.01f);
        }

        [Test]
        public void DamageCalc_ArmorCap_At80Percent()
        {
            var input = new DamageInput { BaseDamage = 100f, WeaponDamageMultiplier = 1f, AttackerDamageMultiplier = 1f, HitZone = HitZone.Body, Type = DamageType.Ranged, TargetArmor = 100f, TargetHealth = 100f, TargetMaxHealth = 100f };
            var result = DamageCalculator.Calculate(input);
            Assert.AreEqual(20f, result.FinalDamage, 0.01f);
        }

        [Test]
        public void DamageCalc_Stagger_At15Plus()
        {
            // StaggerThreshold=0.25f: with TargetMaxHealth=60, 14.9/60=0.248<0.25 (no stagger), 15/60=0.25>=0.25 (stagger)
            var lowInput = new DamageInput { BaseDamage = 14.9f, WeaponDamageMultiplier = 1f, AttackerDamageMultiplier = 1f, Type = DamageType.Ranged, TargetHealth = 60f, TargetMaxHealth = 60f };
            var highInput = new DamageInput { BaseDamage = 15f, WeaponDamageMultiplier = 1f, AttackerDamageMultiplier = 1f, Type = DamageType.Ranged, TargetHealth = 60f, TargetMaxHealth = 60f };
            Assert.IsFalse(DamageCalculator.Calculate(lowInput).StaggerDuration > 0f);
            Assert.IsTrue(DamageCalculator.Calculate(highInput).StaggerDuration > 0f);
        }

        [Test]
        public void DamageCalc_NoiseLevel_Melee()
        {
            float noise = DamageCalculator.GetNoiseLevel(DamageType.Melee, false);
            Assert.AreEqual(15f, noise, 0.01f);
        }

        [Test]
        public void DamageCalc_NoiseLevel_Explosive()
        {
            float noise = DamageCalculator.GetNoiseLevel(DamageType.Explosive, false);
            Assert.AreEqual(100f, noise, 0.01f);
        }

        // ---- InventorySystem ----

        [Test]
        public void Inventory_NewIsEmpty()
        {
            var inv = new InventorySystem(4, 2);
            Assert.AreEqual(0, inv.Items.Count);
        }

        [Test]
        public void Inventory_AddAndRetrieve()
        {
            var inv = new InventorySystem(4, 2);
            bool added = inv.TryAddItem(new ItemDefinition("ammo_9mm", "Ammo", ItemCategory.Ammo, 1, 1, 30), 30);
            Assert.IsTrue(added);
            Assert.IsTrue(inv.HasItem("ammo_9mm"));
            Assert.AreEqual(30, inv.GetItemCount("ammo_9mm"));
        }

        [Test]
        public void Inventory_StackItems()
        {
            var inv = new InventorySystem(4, 2);
            inv.TryAddItem(new ItemDefinition("ammo_9mm", "Ammo", ItemCategory.Ammo, 1, 1, 50), 20);
            inv.TryAddItem(new ItemDefinition("ammo_9mm", "Ammo", ItemCategory.Ammo, 1, 1, 50), 15);
            Assert.AreEqual(35, inv.GetItemCount("ammo_9mm"));
        }

        [Test]
        public void Inventory_RemoveItems()
        {
            var inv = new InventorySystem(4, 2);
            inv.TryAddItem(new ItemDefinition("medkit", "Medical", ItemCategory.Medical, 1, 1, 5), 3);
            bool removed = inv.RemoveItemById("medkit", 1);
            Assert.IsTrue(removed);
            Assert.AreEqual(2, inv.GetItemCount("medkit"));
        }

        [Test]
        public void Inventory_FullRejectsNew()
        {
            var inv = new InventorySystem(1, 1);
            inv.TryAddItem(new ItemDefinition("item_a", "Weapon A", ItemCategory.Weapon), 1);
            bool second = inv.TryAddItem(new ItemDefinition("item_b", "Weapon B", ItemCategory.Weapon), 1);
            Assert.IsFalse(second);
        }

        // ---- LRUCache ----

        [Test]
        public void LRUCache_PutAndGet()
        {
            var cache = new LRUCache<string, int>(3);
            cache.Put("a", 1);
            Assert.IsTrue(cache.TryGet("a", out int val));
            Assert.AreEqual(1, val);
        }

        [Test]
        public void LRUCache_EvictsLRU()
        {
            var cache = new LRUCache<string, int>(2);
            cache.Put("a", 1);
            cache.Put("b", 2);
            cache.Put("c", 3); // evicts "a"
            Assert.IsFalse(cache.TryGet("a", out _));
            Assert.IsTrue(cache.TryGet("b", out _));
            Assert.IsTrue(cache.TryGet("c", out _));
        }

        [Test]
        public void LRUCache_AccessRefreshes()
        {
            var cache = new LRUCache<string, int>(2);
            cache.Put("a", 1);
            cache.Put("b", 2);
            cache.TryGet("a", out _); // refresh "a"
            cache.Put("c", 3); // evicts "b", not "a"
            Assert.IsTrue(cache.TryGet("a", out _));
            Assert.IsFalse(cache.TryGet("b", out _));
        }

        [Test]
        public void LRUCache_EvictionCallback()
        {
            string evictedKey = null;
            var cache = new LRUCache<string, int>(1, (k, v) => evictedKey = k);
            cache.Put("a", 1);
            cache.Put("b", 2);
            Assert.AreEqual("a", evictedKey);
        }

        // ---- ZoneLayoutGenerator ----

        [Test]
        public void ZoneLayout_GeneratesCorrectZoneCount()
        {
            var gen = new ZoneLayoutGenerator(42);
            var layout = gen.GenerateAllZones();
            Assert.AreEqual(16, layout.Length);
        }

        [Test]
        public void ZoneLayout_Deterministic()
        {
            var gen1 = new ZoneLayoutGenerator(42);
            var gen2 = new ZoneLayoutGenerator(42);

            var layout1 = gen1.GenerateAllZones();
            var layout2 = gen2.GenerateAllZones();

            for (int i = 0; i < layout1.Length; i++)
            {
                Assert.AreEqual(layout1[i].ZoneIndex, layout2[i].ZoneIndex);
                Assert.AreEqual(layout1[i].Buildings.Count, layout2[i].Buildings.Count);
            }
        }

        [Test]
        public void ZoneLayout_AllZonesHaveBuildings()
        {
            var gen = new ZoneLayoutGenerator(123);
            var layout = gen.GenerateAllZones();

            for (int i = 0; i < layout.Length; i++)
                Assert.Greater(layout[i].Buildings.Count, 0, $"Zone {i} has no buildings");
        }

        [Test]
        public void ZoneLayout_Zone0_IsLowThreat()
        {
            var gen = new ZoneLayoutGenerator(42);
            var layout = gen.GenerateAllZones();
            Assert.AreEqual(ThreatLevel.Low, layout[0].Threat);
        }

        // ---- SkillTreeData ----

        [Test]
        public void SkillTree_NewTree_NothingUnlocked()
        {
            var tree = new SkillTreeData();
            Assert.AreEqual(0, tree.TotalUnlocked());
        }

        [Test]
        public void SkillTree_Tier1_UnlocksImmediately()
        {
            var tree = new SkillTreeData();
            tree.AddPoints(5);
            bool ok = tree.TryUnlock("combat_1");
            Assert.IsTrue(ok);
            Assert.IsTrue(tree.GetSkill("combat_1").IsUnlocked);
        }

        [Test]
        public void SkillTree_Tier2_RequiresPrereq()
        {
            var tree = new SkillTreeData();
            tree.AddPoints(10);
            bool fail = tree.TryUnlock("combat_2");
            Assert.IsFalse(fail);

            tree.TryUnlock("combat_1");
            bool ok = tree.TryUnlock("combat_2");
            Assert.IsTrue(ok);
        }

        [Test]
        public void SkillTree_BranchSkills_SortedByTier()
        {
            var tree = new SkillTreeData();
            var skills = tree.GetBranchSkills(SkillBranch.Combat);

            for (int i = 1; i < skills.Count; i++)
                Assert.GreaterOrEqual(skills[i].Tier, skills[i - 1].Tier);
        }
    }
}
