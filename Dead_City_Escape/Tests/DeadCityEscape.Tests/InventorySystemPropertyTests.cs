// ---------------------------------------------------------------------------
// Dead City Escape - Inventory System Property-Based Tests
// Validates correctness properties with randomized inputs (500 iterations).
// ---------------------------------------------------------------------------
using NUnit.Framework;
using DeadCityEscape.Logic;

namespace DeadCityEscape.Tests
{
    [TestFixture]
    public class InventorySystemPropertyTests
    {
        private const int Iterations = 500;
        private readonly Random _rand = new(42);

        // Property 19: Inventory Add-Then-Remove Round-Trip
        [Test]
        [Category("Property:19")]
        public void Property19_Inventory_AddThenRemoveRoundTrip()
        {
            for (int iter = 0; iter < Iterations; iter++)
            {
                int itemCount = _rand.Next(1, 11);
                int stackSize = _rand.Next(1, 6);

                var inventory = new InventorySystem(4, 2);
                var item = new ItemDefinition("test_item", "Test Item", ItemCategory.Ammo,
                    w: 1, h: 1, maxStack: stackSize);

                if (!inventory.TryAdd(item, itemCount))
                    continue; // Skip if can't add (grid full for this stack config)

                int countBefore = inventory.CountOf("test_item");
                bool removed = inventory.Remove("test_item", countBefore);

                Assert.That(removed, Is.True,
                    $"Iter {iter}: Remove failed after adding {countBefore} items");
                Assert.That(inventory.CountOf("test_item"), Is.EqualTo(0),
                    $"Iter {iter}: Items remained after removing all");
            }
        }

        // Property 20: Inventory No Overlap for Multi-Cell Items
        [Test]
        [Category("Property:20")]
        public void Property20_Inventory_NoOverlapForMultiCellItems()
        {
            for (int iter = 0; iter < Iterations; iter++)
            {
                int itemCount = _rand.Next(1, 6);
                var inventory = new InventorySystem(4, 3);

                for (int i = 0; i < itemCount; i++)
                {
                    int width = (i % 2) + 1;
                    int height = (i % 2) + 1;

                    var item = new ItemDefinition($"item_{i}", $"Item {i}",
                        ItemCategory.Weapon, w: width, h: height, maxStack: 1);
                    inventory.TryAdd(item, 1);
                }

                // Check for overlaps using a grid occupancy map
                var occupiedCells = new HashSet<(int, int)>();

                foreach (var invItem in inventory.Items)
                {
                    for (int x = 0; x < invItem.Definition.Width; x++)
                    {
                        for (int y = 0; y < invItem.Definition.Height; y++)
                        {
                            var cell = (invItem.SlotX + x, invItem.SlotY + y);
                            Assert.That(occupiedCells.Contains(cell), Is.False,
                                $"Iter {iter}: Overlap detected at cell ({cell.Item1},{cell.Item2})");
                            occupiedCells.Add(cell);
                        }
                    }
                }
            }
        }

        // Property 21: Inventory Capacity Invariant
        [Test]
        [Category("Property:21")]
        public void Property21_Inventory_CapacityInvariant()
        {
            for (int iter = 0; iter < Iterations; iter++)
            {
                int opCount = _rand.Next(1, 21);
                var inventory = new InventorySystem(4, 2);
                int maxCells = 4 * 2;

                for (int i = 0; i < opCount; i++)
                {
                    int width = _rand.Next(1, 3);
                    int height = _rand.Next(1, 3);

                    var item = new ItemDefinition($"item_{i}", $"Item {i}",
                        ItemCategory.Weapon, w: width, h: height, maxStack: 1);
                    inventory.TryAdd(item, 1);

                    // Count occupied cells
                    int occupiedCells = 0;
                    foreach (var invItem in inventory.Items)
                        occupiedCells += invItem.Definition.Width * invItem.Definition.Height;

                    Assert.That(occupiedCells, Is.LessThanOrEqualTo(maxCells),
                        $"Iter {iter}: Occupied {occupiedCells} cells exceeds max {maxCells}");
                }
            }
        }

        // Property 22: Inventory Has() Logical Equivalence
        [Test]
        [Category("Property:22")]
        public void Property22_Inventory_HasLogicalEquivalence()
        {
            for (int iter = 0; iter < Iterations; iter++)
            {
                int addCount = _rand.Next(1, 21);
                int checkCount = _rand.Next(1, 11);

                var inventory = new InventorySystem(4, 2);
                var item = new ItemDefinition("test_item", "Test Item",
                    ItemCategory.Ammo, w: 1, h: 1, maxStack: 99);

                inventory.TryAdd(item, addCount);

                int actualCount = inventory.CountOf("test_item");
                bool hasResult = inventory.Has("test_item", checkCount);
                bool expected = actualCount >= checkCount;

                Assert.That(hasResult, Is.EqualTo(expected),
                    $"Iter {iter}: Has({checkCount}) = {hasResult}, but CountOf = {actualCount}, expected {expected}");
            }
        }
    }
}
