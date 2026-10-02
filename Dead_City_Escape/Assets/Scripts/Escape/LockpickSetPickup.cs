// ---------------------------------------------------------------------------
// Dead City Escape - Lockpick Set Pickup
// Specialized pickup for sewer escape route lockpicks.
// ---------------------------------------------------------------------------
using UnityEngine;

namespace DeadCityEscape.Escape
{
    /// <summary>
    /// Lockpick set pickup for sewer escape route.
    /// Advances sewer_lockpicks objective when picked up.
    /// Requirement: 11.2
    /// </summary>
    public class LockpickSetPickup : Combat.PickupBase
    {
        protected override void Start()
        {
            base.Start();
            _itemId = "lockpick_set";
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

                // Advance sewer objective
                var escapeManager = FindAnyObjectByType<EscapeRouteManager>();
                if (escapeManager != null)
                {
                    escapeManager.AdvanceObjective("sewer_lockpicks", 1);
                }

                InvokeOnPickedUp();
                Destroy(gameObject);
                return true;
            }

            return false;
        }
    }
}
