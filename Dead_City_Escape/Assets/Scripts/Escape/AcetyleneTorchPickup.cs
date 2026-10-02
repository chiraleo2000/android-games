// ---------------------------------------------------------------------------
// Dead City Escape - Acetylene Torch Pickup
// Specialized pickup for sewer escape route torch in Zone 10.
// ---------------------------------------------------------------------------
using UnityEngine;

namespace DeadCityEscape.Escape
{
    /// <summary>
    /// Acetylene torch pickup for sewer escape route.
    /// Found in Zone 10, advances sewer_torch objective when picked up.
    /// Requirement: 11.4
    /// </summary>
    public class AcetyleneTorchPickup : Combat.PickupBase
    {
        protected override void Start()
        {
            base.Start();
            _itemId = "acetylene_torch";
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
                    escapeManager.AdvanceObjective("sewer_torch", 1);
                }

                InvokeOnPickedUp();
                Destroy(gameObject);
                return true;
            }

            return false;
        }
    }
}
