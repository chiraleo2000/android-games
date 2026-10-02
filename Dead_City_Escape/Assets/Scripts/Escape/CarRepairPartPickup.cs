// ---------------------------------------------------------------------------
// Dead City Escape - Car Repair Part Pickup
// Specialized pickup for car repair parts (battery, tire, fuel).
// ---------------------------------------------------------------------------
using UnityEngine;

namespace DeadCityEscape.Escape
{
    /// <summary>
    /// Car repair part pickup for car escape route.
    /// Supports battery, spare tire, and fuel items.
    /// Advances car_repair_parts objective when picked up.
    /// Requirement: 10.4
    /// </summary>
    public class CarRepairPartPickup : Combat.PickupBase
    {
        [Header("Repair Part Type")]
        [SerializeField] private RepairPartType _partType = RepairPartType.Battery;

        public enum RepairPartType
        {
            Battery,
            Tire,
            Fuel
        }

        protected override void Start()
        {
            base.Start();
            
            // Set item ID based on part type
            _itemId = _partType switch
            {
                RepairPartType.Battery => "car_battery",
                RepairPartType.Tire => "spare_tire",
                RepairPartType.Fuel => "fuel_canister",
                _ => "car_battery"
            };
            
            _quantity = 1;
        }

        public override bool TryPickup()
        {
            if (_isPickedUp) return false;

            var inventory = FindAnyObjectByType<Player.PlayerInventory>();
            if (inventory == null) return false;

            // Add to inventory
            if (inventory.AddItem(_itemId, _quantity))
            {
                _isPickedUp = true;

                // Advance car repair parts objective
                var escapeManager = FindAnyObjectByType<EscapeRouteManager>();
                if (escapeManager != null)
                {
                    escapeManager.AdvanceObjective("car_repair_parts", 1);
                }

                InvokeOnPickedUp();
                Destroy(gameObject);
                return true;
            }

            return false;
        }

        public RepairPartType PartType
        {
            get => _partType;
            set => _partType = value;
        }
    }
}
