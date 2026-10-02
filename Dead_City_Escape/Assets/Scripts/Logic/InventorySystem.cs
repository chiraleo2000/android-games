// ---------------------------------------------------------------------------
// Dead City Escape - Inventory System
// RE-style 4x2 grid slot inventory management.
// Pure C# - no Unity dependency.
// ---------------------------------------------------------------------------
using System;
using System.Collections.Generic;

namespace DeadCityEscape.Logic
{
    /// <summary>
    /// Categories of items in the inventory.
    /// </summary>
    public enum ItemCategory
    {
        Weapon,
        Ammo,
        Medical,
        KeyItem,
        Tool,
        Explosive,
        Utility
    }

    /// <summary>
    /// Represents an item definition (template).
    /// </summary>
    public class ItemDefinition
    {
        public string Id;
        public string Name;
        public string Description;
        public ItemCategory Category;
        public int Width;
        public int Height;
        public int MaxStack;
        public bool IsKeyItem;
        public float Weight;

        public ItemDefinition(string id, string name, ItemCategory category,
            int width = 1, int height = 1, int maxStack = 1, bool isKeyItem = false,
            float weight = 1f, string description = "")
        {
            Id = id;
            Name = name;
            Description = description;
            Category = category;
            Width = Math.Max(1, width);
            Height = Math.Max(1, height);
            MaxStack = Math.Max(1, maxStack);
            IsKeyItem = isKeyItem;
            Weight = weight;
        }
    }

    /// <summary>
    /// Represents a single item instance in inventory.
    /// </summary>
    public class InventoryItem
    {
        public ItemDefinition Definition;
        public int StackCount;
        public int GridX;
        public int GridY;

        public InventoryItem(ItemDefinition definition, int stackCount = 1)
        {
            Definition = definition;
            StackCount = Math.Clamp(stackCount, 1, definition.MaxStack);
            GridX = -1;
            GridY = -1;
        }

        public bool CanStack => StackCount < Definition.MaxStack;
        public string Id => Definition.Id;
    }

    /// <summary>
    /// Grid-based inventory system (Resident Evil style).
    /// Default grid is 4 columns x 2 rows, expandable via skills.
    /// </summary>
    public class InventorySystem
    {
        private readonly bool[,] _grid;
        private readonly List<InventoryItem> _items;

        public int Columns { get; }
        public int Rows { get; }
        public IReadOnlyList<InventoryItem> Items => _items;
        public int ItemCount => _items.Count;

        public InventorySystem(int columns = 4, int rows = 2)
        {
            Columns = Math.Max(1, columns);
            Rows = Math.Max(1, rows);
            _grid = new bool[Columns, Rows];
            _items = new List<InventoryItem>();
        }

        /// <summary>
        /// Attempts to add an item to the inventory. Returns true if successful.
        /// Tries stacking first, then finds an empty slot.
        /// </summary>
        public bool TryAddItem(ItemDefinition definition, int count = 1)
        {
            if (definition == null) return false;

            // Try stacking with existing items first
            if (definition.MaxStack > 1)
            {
                foreach (var existing in _items)
                {
                    if (existing.Definition.Id == definition.Id && existing.CanStack)
                    {
                        int space = existing.Definition.MaxStack - existing.StackCount;
                        int toAdd = Math.Min(count, space);
                        existing.StackCount += toAdd;
                        count -= toAdd;
                        if (count <= 0) return true;
                    }
                }
            }

            // Find empty slot for remaining items
            while (count > 0)
            {
                if (TryFindSlot(definition.Width, definition.Height, out int gx, out int gy))
                {
                    var item = new InventoryItem(definition,
                        Math.Min(count, definition.MaxStack));
                    item.GridX = gx;
                    item.GridY = gy;
                    PlaceOnGrid(gx, gy, definition.Width, definition.Height, true);
                    _items.Add(item);
                    count -= item.StackCount;
                }
                else
                {
                    return false; // No space
                }
            }

            return true;
        }

        /// <summary>
        /// Removes an item by index. Returns the removed item or null.
        /// </summary>
        public InventoryItem RemoveItem(int index)
        {
            if (index < 0 || index >= _items.Count) return null;

            var item = _items[index];
            PlaceOnGrid(item.GridX, item.GridY,
                item.Definition.Width, item.Definition.Height, false);
            _items.RemoveAt(index);
            return item;
        }

        /// <summary>
        /// Removes one stack of an item by definition ID. Returns true if removed.
        /// </summary>
        public bool RemoveItemById(string itemId, int count = 1)
        {
            for (int i = _items.Count - 1; i >= 0; i--)
            {
                if (_items[i].Definition.Id == itemId)
                {
                    if (_items[i].StackCount > count)
                    {
                        _items[i].StackCount -= count;
                        return true;
                    }
                    else
                    {
                        count -= _items[i].StackCount;
                        RemoveItem(i);
                        if (count <= 0) return true;
                    }
                }
            }
            return count <= 0;
        }

        /// <summary>
        /// Checks if the inventory contains at least 'count' of the given item.
        /// </summary>
        public bool HasItem(string itemId, int count = 1)
        {
            int found = 0;
            foreach (var item in _items)
            {
                if (item.Definition.Id == itemId)
                {
                    found += item.StackCount;
                    if (found >= count) return true;
                }
            }
            return false;
        }

        /// <summary>
        /// Gets the total count of a specific item across all stacks.
        /// </summary>
        public int GetItemCount(string itemId)
        {
            int total = 0;
            foreach (var item in _items)
            {
                if (item.Definition.Id == itemId)
                    total += item.StackCount;
            }
            return total;
        }

        /// <summary>
        /// Returns the total weight of all items in inventory.
        /// </summary>
        public float GetTotalWeight()
        {
            float weight = 0f;
            foreach (var item in _items)
                weight += item.Definition.Weight * item.StackCount;
            return weight;
        }

        /// <summary>
        /// Gets all items of a specific category.
        /// </summary>
        public List<InventoryItem> GetItemsByCategory(ItemCategory category)
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
        /// Checks if there is space for an item of the given dimensions.
        /// </summary>
        public bool HasSpaceFor(int width, int height)
        {
            return TryFindSlot(width, height, out _, out _);
        }

        private bool TryFindSlot(int width, int height, out int gx, out int gy)
        {
            for (int y = 0; y <= Rows - height; y++)
            {
                for (int x = 0; x <= Columns - width; x++)
                {
                    if (IsSlotFree(x, y, width, height))
                    {
                        gx = x;
                        gy = y;
                        return true;
                    }
                }
            }

            gx = -1;
            gy = -1;
            return false;
        }

        private bool IsSlotFree(int startX, int startY, int width, int height)
        {
            for (int y = startY; y < startY + height; y++)
            {
                for (int x = startX; x < startX + width; x++)
                {
                    if (x >= Columns || y >= Rows || _grid[x, y])
                        return false;
                }
            }
            return true;
        }

        private void PlaceOnGrid(int startX, int startY, int width, int height, bool occupied)
        {
            for (int y = startY; y < startY + height && y < Rows; y++)
            {
                for (int x = startX; x < startX + width && x < Columns; x++)
                {
                    _grid[x, y] = occupied;
                }
            }
        }

        /// <summary>
        /// Clears the entire inventory.
        /// </summary>
        public void Clear()
        {
            _items.Clear();
            for (int y = 0; y < Rows; y++)
                for (int x = 0; x < Columns; x++)
                    _grid[x, y] = false;
        }
    }
}
