// ---------------------------------------------------------------------------
// Dead City Escape - Inventory System Tests
// Validates grid inventory: add, remove, stack, capacity.
// ---------------------------------------------------------------------------
using NUnit.Framework;
using DeadCityEscape.Logic;

namespace DeadCityEscape.Tests
{
    [TestFixture]
    public class InventorySystemTests
    {
        private static ItemDefinition MakeItem(string id, int w = 1, int h = 1,
            int stack = 1, ItemCategory cat = ItemCategory.Weapon)
            => new(id, id, cat, w, h, stack);

        [Test]
        public void NewInventory_IsEmpty()
        {
            var inv = new InventorySystem(4, 2);
            Assert.That(inv.ItemCount, Is.EqualTo(0));
            Assert.That(inv.Columns, Is.EqualTo(4));
            Assert.That(inv.Rows, Is.EqualTo(2));
        }

        [Test]
        public void TryAdd_SingleItem_Success()
        {
            var inv = new InventorySystem(4, 2);
            var item = MakeItem("bat");

            bool added = inv.TryAdd(item);
            Assert.That(added, Is.True);
            Assert.That(inv.ItemCount, Is.EqualTo(1));
        }

        [Test]
        public void Has_AfterAdding()
        {
            var inv = new InventorySystem(4, 2);
            var item = MakeItem("bat");

            inv.TryAdd(item);
            Assert.That(inv.Has("bat"), Is.True);
            Assert.That(inv.Has("pistol"), Is.False);
        }

        [Test]
        public void Remove_DecreasesCount()
        {
            var inv = new InventorySystem(4, 2);
            var item = MakeItem("bat");

            inv.TryAdd(item);
            bool removed = inv.Remove("bat");
            Assert.That(removed, Is.True);
            Assert.That(inv.Has("bat"), Is.False);
        }

        [Test]
        public void Remove_NonexistentItem_ReturnsFalse()
        {
            var inv = new InventorySystem(4, 2);
            Assert.That(inv.Remove("ghost"), Is.False);
        }

        [Test]
        public void Stacking_CombinesItems()
        {
            var inv = new InventorySystem(4, 2);
            var ammo = MakeItem("ammo", stack: 30, cat: ItemCategory.Ammo);

            inv.TryAdd(ammo, 10);
            inv.TryAdd(ammo, 5);

            Assert.That(inv.CountOf("ammo"), Is.EqualTo(15));
            Assert.That(inv.ItemCount, Is.EqualTo(1)); // Same slot
        }

        [Test]
        public void Stacking_OverflowCreatesNewSlot()
        {
            var inv = new InventorySystem(4, 2);
            var ammo = MakeItem("ammo", stack: 10, cat: ItemCategory.Ammo);

            inv.TryAdd(ammo, 10); // fills first stack
            inv.TryAdd(ammo, 5);  // creates second slot

            Assert.That(inv.CountOf("ammo"), Is.EqualTo(15));
            Assert.That(inv.ItemCount, Is.EqualTo(2));
        }

        [Test]
        public void LargeItem_OccupiesMultipleCells()
        {
            var inv = new InventorySystem(4, 2);
            var bigItem = MakeItem("rifle", 2, 1);

            bool added = inv.TryAdd(bigItem);
            Assert.That(added, Is.True);

            // Should still fit more 1x1 items
            var small = MakeItem("grenade");
            Assert.That(inv.TryAdd(small), Is.True);
        }

        [Test]
        public void FullInventory_RejectsNewItems()
        {
            var inv = new InventorySystem(2, 1); // Only 2 slots
            var item1 = MakeItem("a");
            var item2 = MakeItem("b");
            var item3 = MakeItem("c");

            Assert.That(inv.TryAdd(item1), Is.True);
            Assert.That(inv.TryAdd(item2), Is.True);
            Assert.That(inv.TryAdd(item3), Is.False);
        }

        [Test]
        public void HasSpace_ReportsCorrectly()
        {
            var inv = new InventorySystem(2, 1);
            var item = MakeItem("x");

            Assert.That(inv.HasSpace(item), Is.True);
            inv.TryAdd(item);
            inv.TryAdd(MakeItem("y"));
            Assert.That(inv.HasSpace(MakeItem("z")), Is.False);
        }

        [Test]
        public void HasSpace_ConsidersStacking()
        {
            var inv = new InventorySystem(1, 1); // 1 slot only
            var ammo = MakeItem("ammo", stack: 99, cat: ItemCategory.Ammo);

            inv.TryAdd(ammo, 50);

            // Should still have space via stacking
            Assert.That(inv.HasSpace(ammo), Is.True);
        }

        [Test]
        public void GetByCategory_FiltersCorrectly()
        {
            var inv = new InventorySystem(4, 2);
            inv.TryAdd(MakeItem("bat", cat: ItemCategory.Weapon));
            inv.TryAdd(MakeItem("ammo", cat: ItemCategory.Ammo));
            inv.TryAdd(MakeItem("medkit", cat: ItemCategory.Medical));
            inv.TryAdd(MakeItem("key", cat: ItemCategory.KeyItem));

            var weapons = inv.GetByCategory(ItemCategory.Weapon);
            Assert.That(weapons.Count, Is.EqualTo(1));
            Assert.That(weapons[0].Definition.Id, Is.EqualTo("bat"));

            var medical = inv.GetByCategory(ItemCategory.Medical);
            Assert.That(medical.Count, Is.EqualTo(1));
        }

        [Test]
        public void CountOf_EmptyInventory_ReturnsZero()
        {
            var inv = new InventorySystem(4, 2);
            Assert.That(inv.CountOf("anything"), Is.EqualTo(0));
        }

        [Test]
        public void Remove_PartialStack()
        {
            var inv = new InventorySystem(4, 2);
            var ammo = MakeItem("ammo", stack: 30, cat: ItemCategory.Ammo);

            inv.TryAdd(ammo, 20);
            inv.Remove("ammo", 5);

            Assert.That(inv.CountOf("ammo"), Is.EqualTo(15));
        }

        [Test]
        public void LargeItem_DoesNotFit_InSmallGrid()
        {
            var inv = new InventorySystem(1, 1);
            var bigItem = MakeItem("huge", 2, 2);

            Assert.That(inv.TryAdd(bigItem), Is.False);
        }

        [Test]
        public void MultipleItems_FillGrid()
        {
            var inv = new InventorySystem(4, 2); // 8 total cells

            for (int i = 0; i < 8; i++)
                Assert.That(inv.TryAdd(MakeItem($"item{i}")), Is.True);

            // 9th should fail
            Assert.That(inv.TryAdd(MakeItem("overflow")), Is.False);
        }

        [Test]
        public void ExpandRows_IncreasesCapacity()
        {
            var inv = new InventorySystem(4, 2); // 8 total cells

            // Fill the inventory
            for (int i = 0; i < 8; i++)
                Assert.That(inv.TryAdd(MakeItem($"item{i}")), Is.True);

            // 9th should fail
            Assert.That(inv.TryAdd(MakeItem("overflow")), Is.False);

            // Expand by 1 row (4 more cells)
            inv.ExpandRows(1);
            Assert.That(inv.Rows, Is.EqualTo(3));
            Assert.That(inv.Columns, Is.EqualTo(4));

            // Now we should be able to add more items
            Assert.That(inv.TryAdd(MakeItem("overflow")), Is.True);
            Assert.That(inv.TryAdd(MakeItem("item9")), Is.True);
        }

        [Test]
        public void ExpandRows_PreservesExistingItems()
        {
            var inv = new InventorySystem(4, 2);

            // Add some items
            var ammo = MakeItem("ammo", stack: 30, cat: ItemCategory.Ammo);
            inv.TryAdd(ammo, 20);
            inv.TryAdd(MakeItem("bat"));
            inv.TryAdd(MakeItem("medkit", cat: ItemCategory.Medical));

            // Expand
            inv.ExpandRows(1);

            // Verify existing items are still there
            Assert.That(inv.CountOf("ammo"), Is.EqualTo(20));
            Assert.That(inv.Has("bat"), Is.True);
            Assert.That(inv.Has("medkit"), Is.True);
            Assert.That(inv.ItemCount, Is.EqualTo(3));
        }

        [Test]
        public void ExpandRows_WithZeroOrNegative_DoesNothing()
        {
            var inv = new InventorySystem(4, 2);

            inv.ExpandRows(0);
            Assert.That(inv.Rows, Is.EqualTo(2));

            inv.ExpandRows(-1);
            Assert.That(inv.Rows, Is.EqualTo(2));
        }
    }
}
