// ---------------------------------------------------------------------------
// Dead City Escape - Inventory System (Standalone .NET version)
// RE-style 4x2 grid inventory for .NET testing.
// ---------------------------------------------------------------------------
namespace DeadCityEscape.Logic
{
    public enum ItemCategory { Weapon, Ammo, Medical, KeyItem, Attachment, Tool }

    public sealed class ItemDefinition
    {
        public string Id;
        public string Name;
        public ItemCategory Category;
        public int Width;
        public int Height;
        public int MaxStack;
        public bool IsKeyItem;

        public ItemDefinition(string id, string name, ItemCategory cat,
            int w = 1, int h = 1, int maxStack = 1, bool key = false)
        {
            Id = id; Name = name; Category = cat;
            Width = w; Height = h; MaxStack = maxStack; IsKeyItem = key;
        }
    }

    public sealed class InventoryItem
    {
        public ItemDefinition Definition;
        public int Count;
        public int SlotX;
        public int SlotY;

        public InventoryItem(ItemDefinition def, int count = 1)
        {
            Definition = def;
            Count = Math.Min(count, def.MaxStack);
        }
    }

    /// <summary>
    /// RE-style grid inventory system. Manages a 4-column x 2-row grid.
    /// Items can occupy multiple cells depending on their size.
    /// </summary>
    public sealed class InventorySystem
    {
        public int Columns { get; private set; }
        public int Rows { get; private set; }
        private InventoryItem?[,] _grid;
        private readonly List<InventoryItem> _items = new();

        public IReadOnlyList<InventoryItem> Items => _items;
        public int ItemCount => _items.Count;

        public InventorySystem(int columns = 4, int rows = 2)
        {
            Columns = columns;
            Rows = rows;
            _grid = new InventoryItem?[columns, rows];
        }

        /// <summary>
        /// Attempts to add an item. Returns true if successful.
        /// Tries to stack first, then finds an empty slot.
        /// </summary>
        public bool TryAdd(ItemDefinition def, int count = 1)
        {
            // Try stacking on existing item
            foreach (var item in _items)
            {
                if (item.Definition.Id == def.Id &&
                    item.Count < item.Definition.MaxStack)
                {
                    int space = item.Definition.MaxStack - item.Count;
                    int toAdd = Math.Min(count, space);
                    item.Count += toAdd;
                    count -= toAdd;
                    if (count <= 0) return true;
                }
            }

            // Find empty slot for remaining
            while (count > 0)
            {
                if (!FindFreeSlot(def.Width, def.Height, out int sx, out int sy))
                    return false;

                int thisStack = Math.Min(count, def.MaxStack);
                var newItem = new InventoryItem(def, thisStack)
                {
                    SlotX = sx, SlotY = sy
                };

                PlaceItem(newItem, sx, sy);
                _items.Add(newItem);
                count -= thisStack;
            }

            return true;
        }

        /// <summary>
        /// Removes an item by definition ID.
        /// </summary>
        public bool Remove(string itemId, int count = 1)
        {
            for (int i = _items.Count - 1; i >= 0; i--)
            {
                var item = _items[i];
                if (item.Definition.Id != itemId) continue;

                if (item.Count <= count)
                {
                    count -= item.Count;
                    ClearItem(item);
                    _items.RemoveAt(i);
                }
                else
                {
                    item.Count -= count;
                    count = 0;
                }

                if (count <= 0) return true;
            }
            return count <= 0;
        }

        /// <summary>
        /// Checks if the inventory contains the given item.
        /// </summary>
        public bool Has(string itemId, int count = 1)
        {
            int total = 0;
            foreach (var item in _items)
            {
                if (item.Definition.Id == itemId)
                    total += item.Count;
            }
            return total >= count;
        }

        /// <summary>
        /// Gets total count of a specific item.
        /// </summary>
        public int CountOf(string itemId)
        {
            int total = 0;
            foreach (var item in _items)
            {
                if (item.Definition.Id == itemId)
                    total += item.Count;
            }
            return total;
        }

        /// <summary>
        /// Expands the inventory grid by adding additional rows.
        /// Used for the "Marathon Runner" skill.
        /// </summary>
        public void ExpandRows(int additionalRows)
        {
            if (additionalRows <= 0) return;

            int newRows = Rows + additionalRows;
            var newGrid = new InventoryItem?[Columns, newRows];

            // Copy existing items to new grid
            for (int y = 0; y < Rows; y++)
            {
                for (int x = 0; x < Columns; x++)
                {
                    newGrid[x, y] = _grid[x, y];
                }
            }

            // Update the grid and rows
            _grid = newGrid;
            Rows = newRows;
        }

        /// <summary>
        /// Gets all items in a given category.
        /// </summary>
        public List<InventoryItem> GetByCategory(ItemCategory category)
        {
            var result = new List<InventoryItem>();
            foreach (var item in _items)
            {
                if (item.Definition.Category == category)
                    result.Add(item);
            }
            return result;
        }

        /// <summary>
        /// Checks if there's space for the item.
        /// </summary>
        public bool HasSpace(ItemDefinition def)
        {
            // Check stacking
            foreach (var item in _items)
            {
                if (item.Definition.Id == def.Id &&
                    item.Count < item.Definition.MaxStack)
                    return true;
            }

            return FindFreeSlot(def.Width, def.Height, out _, out _);
        }

        private bool FindFreeSlot(int width, int height, out int slotX, out int slotY)
        {
            for (int y = 0; y <= Rows - height; y++)
            {
                for (int x = 0; x <= Columns - width; x++)
                {
                    if (IsAreaFree(x, y, width, height))
                    {
                        slotX = x;
                        slotY = y;
                        return true;
                    }
                }
            }
            slotX = slotY = -1;
            return false;
        }

        private bool IsAreaFree(int sx, int sy, int w, int h)
        {
            for (int y = sy; y < sy + h; y++)
                for (int x = sx; x < sx + w; x++)
                    if (_grid[x, y] != null) return false;
            return true;
        }

        private void PlaceItem(InventoryItem item, int sx, int sy)
        {
            for (int y = sy; y < sy + item.Definition.Height; y++)
                for (int x = sx; x < sx + item.Definition.Width; x++)
                    _grid[x, y] = item;
        }

        private void ClearItem(InventoryItem item)
        {
            for (int y = item.SlotY; y < item.SlotY + item.Definition.Height; y++)
                for (int x = item.SlotX; x < item.SlotX + item.Definition.Width; x++)
                    if (_grid[x, y] == item)
                        _grid[x, y] = null;
        }
    }
}
