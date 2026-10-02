// ---------------------------------------------------------------------------
// Dead City Escape - Player Inventory Component
// Unity MonoBehaviour wrapper around the InventorySystem logic.
// Handles item pickup, usage, and UI integration.
// ---------------------------------------------------------------------------
using System;
using System.Collections.Generic;
using UnityEngine;
using DeadCityEscape.Logic;

namespace DeadCityEscape.Player
{
    /// <summary>
    /// MonoBehaviour inventory component attached to the player.
    /// Wraps the pure C# InventorySystem with Unity events and input handling.
    /// </summary>
    public class PlayerInventory : MonoBehaviour
    {
        [Header("Inventory Settings")]
        [SerializeField] private int _baseColumns = 4;
        [SerializeField] private int _baseRows = 2;
        [SerializeField] private int _expandedRows = 3;  // With Marathon Runner skill

        private InventorySystem _inventory;
        private bool _hasMarathonRunner = false;

        public InventorySystem Inventory => _inventory;
        public int ItemCount => _inventory?.ItemCount ?? 0;

        // Events
        public event Action<ItemDefinition, int> OnItemAdded;
        public event Action<ItemDefinition, int> OnItemRemoved;
        public event Action<string> OnItemUsed;
        public event Action OnInventoryFull;

        // Pre-defined item templates
        public static readonly Dictionary<string, ItemDefinition> ItemDatabase
            = new Dictionary<string, ItemDefinition>
        {
            // Weapons
            ["bat"] = new ItemDefinition("bat", "Baseball Bat",
                ItemCategory.Weapon, 2, 1, 1, false, 3f, "Reliable melee weapon."),
            ["pistol"] = new ItemDefinition("pistol", "Pistol",
                ItemCategory.Weapon, 2, 1, 1, false, 2f, "Standard sidearm. Uses 9mm ammo."),

            // Ammo
            ["ammo_9mm"] = new ItemDefinition("ammo_9mm", "9mm Ammo",
                ItemCategory.Ammo, 1, 1, 30, false, 0.5f, "Standard pistol ammunition."),

            // Medical
            ["medkit"] = new ItemDefinition("medkit", "Medkit",
                ItemCategory.Medical, 1, 1, 3, false, 1f, "Restores 40 HP."),

            // Tools
            ["flashlight"] = new ItemDefinition("flashlight", "Flashlight",
                ItemCategory.Utility, 1, 1, 1, false, 0.5f, "Illuminates dark areas."),
            ["lockpick"] = new ItemDefinition("lockpick", "Lockpick Set",
                ItemCategory.Tool, 1, 1, 5, false, 0.2f, "Opens locked doors and gates."),
            ["toolkit"] = new ItemDefinition("toolkit", "Toolkit",
                ItemCategory.Tool, 2, 1, 1, false, 3f, "Required for repairs."),

            // Key Items (for escape routes)
            ["car_battery"] = new ItemDefinition("car_battery", "Car Battery",
                ItemCategory.KeyItem, 2, 1, 1, true, 5f, "Heavy-duty vehicle battery."),
            ["spare_tire"] = new ItemDefinition("spare_tire", "Spare Tire",
                ItemCategory.KeyItem, 2, 2, 1, true, 8f, "Replacement tire for the car."),
            ["fuel_can"] = new ItemDefinition("fuel_can", "Fuel Can",
                ItemCategory.KeyItem, 1, 1, 5, true, 3f, "Contains gasoline."),
            ["car_key"] = new ItemDefinition("car_key", "Car Key",
                ItemCategory.KeyItem, 1, 1, 1, true, 0.1f, "Key to the escape vehicle."),
            ["radio_parts"] = new ItemDefinition("radio_parts", "Radio Parts",
                ItemCategory.KeyItem, 1, 1, 3, true, 1f, "Electronic components for radio repair."),
            ["signal_flare"] = new ItemDefinition("signal_flare", "Signal Flare",
                ItemCategory.KeyItem, 1, 1, 1, true, 0.5f, "Emergency signal flare."),
            ["acetylene_torch"] = new ItemDefinition("acetylene_torch", "Acetylene Torch",
                ItemCategory.KeyItem, 2, 1, 1, true, 4f, "Cuts through reinforced metal."),

            // Attachments
            ["suppressor"] = new ItemDefinition("suppressor", "Suppressor",
                ItemCategory.Utility, 1, 1, 1, false, 0.3f, "Reduces gunfire noise by 80%."),
            ["extended_mag"] = new ItemDefinition("extended_mag", "Extended Magazine",
                ItemCategory.Utility, 1, 1, 1, false, 0.2f, "Increases pistol capacity to 25."),
        };

        private void Awake()
        {
            // Check for Marathon Runner skill (survival_2)
            var saveSystem = Core.SaveSystem.Instance;
            if (saveSystem != null)
            {
                var unlockedSkills = saveSystem.GetUnlockedSkillIds();
                if (unlockedSkills != null && System.Array.Exists(unlockedSkills, id => id == "survival_2"))
                {
                    _hasMarathonRunner = true;
                }
            }

            int rows = _hasMarathonRunner ? _expandedRows : _baseRows;
            _inventory = new InventorySystem(_baseColumns, rows);
        }

        private void Start()
        {
            // Give starting loadout
            AddItem("bat");
            AddItem("flashlight");
        }

        /// <summary>
        /// Adds an item to inventory by its database ID.
        /// </summary>
        public bool AddItem(string itemId, int count = 1)
        {
            if (!ItemDatabase.TryGetValue(itemId, out var definition))
            {
                Debug.LogWarning($"PlayerInventory: Unknown item ID '{itemId}'");
                return false;
            }

            if (_inventory.TryAddItem(definition, count))
            {
                OnItemAdded?.Invoke(definition, count);
                return true;
            }

            OnInventoryFull?.Invoke();
            return false;
        }

        /// <summary>
        /// Removes an item by database ID.
        /// </summary>
        public bool RemoveItem(string itemId, int count = 1)
        {
            if (_inventory.RemoveItemById(itemId, count))
            {
                if (ItemDatabase.TryGetValue(itemId, out var def))
                    OnItemRemoved?.Invoke(def, count);
                return true;
            }
            return false;
        }

        /// <summary>
        /// Checks if a specific item exists in inventory.
        /// </summary>
        public bool HasItem(string itemId, int count = 1)
        {
            return _inventory.HasItem(itemId, count);
        }

        /// <summary>
        /// Gets the count of a specific item.
        /// </summary>
        public int GetCount(string itemId)
        {
            return _inventory.GetItemCount(itemId);
        }

        /// <summary>
        /// Uses a consumable item (medkit, flare, etc).
        /// </summary>
        public bool UseItem(string itemId)
        {
            if (!HasItem(itemId)) return false;

            switch (itemId)
            {
                case "medkit":
                    var health = GetComponent<PlayerHealth>();
                    if (health != null && !health.IsDead &&
                        health.CurrentHealth < health.MaxHealth)
                    {
                        RemoveItem("medkit");
                        health.UseMedkit();
                        OnItemUsed?.Invoke(itemId);
                        return true;
                    }
                    return false;

                default:
                    OnItemUsed?.Invoke(itemId);
                    return true;
            }
        }

        /// <summary>
        /// Expands inventory grid (from Survival skill tree).
        /// Note: This requires recreating the inventory, so it should be called
        /// before adding items or items will be lost.
        /// </summary>
        public void ExpandInventory()
        {
            if (_hasMarathonRunner) return;  // Already expanded

            _hasMarathonRunner = true;
            
            // Save current items
            var currentItems = new List<(ItemDefinition def, int count)>();
            foreach (var item in _inventory.Items)
            {
                currentItems.Add((item.Definition, item.StackCount));
            }

            // Recreate inventory with expanded size
            _inventory = new InventorySystem(_baseColumns, _expandedRows);

            // Re-add items
            foreach (var (def, count) in currentItems)
            {
                _inventory.TryAddItem(def, count);
            }
        }
    }
}
