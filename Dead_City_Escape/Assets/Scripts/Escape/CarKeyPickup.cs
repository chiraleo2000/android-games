// ---------------------------------------------------------------------------
// Dead City Escape - Car Key Pickup
// Specialized pickup for car escape route key at PoliceStation.
// ---------------------------------------------------------------------------
using UnityEngine;

namespace DeadCityEscape.Escape
{
    /// <summary>
    /// Car key pickup for car escape route.
    /// Advances car_get_key objective when picked up.
    /// Requirement: 10.3
    /// </summary>
    public class CarKeyPickup : Combat.PickupBase
    {
        protected override void Start()
        {
            base.Start();
            _itemId = "car_key";
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

                // Advance car objective
                var escapeManager = FindAnyObjectByType<EscapeRouteManager>();
                if (escapeManager != null)
                {
                    escapeManager.AdvanceObjective("car_get_key", 1);
                }

                InvokeOnPickedUp();
                Destroy(gameObject);
                return true;
            }

            return false;
        }
    }
}
