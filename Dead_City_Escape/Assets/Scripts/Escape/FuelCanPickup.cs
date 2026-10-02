// ---------------------------------------------------------------------------
// Dead City Escape - Fuel Can Pickup
// Specialized pickup for helicopter escape route fuel cans.
// ---------------------------------------------------------------------------
using UnityEngine;

namespace DeadCityEscape.Escape
{
    /// <summary>
    /// Fuel can pickup for helicopter escape route.
    /// Advances heli_fuel_cans objective when picked up.
    /// Requirement: 9.3
    /// </summary>
    public class FuelCanPickup : Combat.PickupBase
    {
        protected override void Start()
        {
            base.Start();
            _itemId = "fuel_can";
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

                // Advance helicopter objective
                var escapeManager = FindAnyObjectByType<EscapeRouteManager>();
                if (escapeManager != null)
                {
                    escapeManager.AdvanceObjective("heli_fuel_cans", 1);
                }

                InvokeOnPickedUp();
                Destroy(gameObject);
                return true;
            }

            return false;
        }
    }
}
