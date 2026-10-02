// ---------------------------------------------------------------------------
// Dead City Escape - Radio Repair Interaction
// Interaction point for repairing the radio transmitter.
// Requires toolkit + batteries from inventory.
// ---------------------------------------------------------------------------
using UnityEngine;

namespace DeadCityEscape.Escape
{
    /// <summary>
    /// Radio transmitter repair interaction for helicopter escape route.
    /// Requires toolkit and batteries from player inventory.
    /// Advances heli_repair_radio objective on successful repair.
    /// Requirement: 9.4
    /// </summary>
    public class RadioRepairInteraction : MonoBehaviour
    {
        [Header("Interaction")]
        [SerializeField] private float _interactRange = 3f;
        [SerializeField] private string _toolkitItemId = "toolkit";
        [SerializeField] private string _batteriesItemId = "batteries";

        private bool _isRepaired;
        private SphereCollider _trigger;

        private void Awake()
        {
            // Create trigger collider for interaction range
            _trigger = gameObject.AddComponent<SphereCollider>();
            _trigger.isTrigger = true;
            _trigger.radius = _interactRange;
        }

        private void Update()
        {
            if (_isRepaired) return;

            // Check for player in range and interact input
            var player = FindAnyObjectByType<Player.PlayerController>();
            if (player == null) return;

            float distance = Vector3.Distance(transform.position, player.transform.position);
            if (distance <= _interactRange)
            {
                // Check for interact input (E key or interact button)
                // Also check for InputManager interact input
                bool interactPressed = Input.GetKeyDown(KeyCode.E);
                
                var inputManager = Core.InputManager.Instance;
                if (inputManager != null)
                {
                    interactPressed |= inputManager.InteractPressed;
                }

                if (interactPressed)
                {
                    TryRepair();
                }
            }
        }

        private void TryRepair()
        {
            if (_isRepaired) return;

            var inventory = FindAnyObjectByType<Player.PlayerInventory>();
            if (inventory == null) return;

            // Check if player has required items
            if (!inventory.HasItem(_toolkitItemId, 1))
            {
                Debug.Log("RadioRepair: Missing toolkit");
                return;
            }

            if (!inventory.HasItem(_batteriesItemId, 1))
            {
                Debug.Log("RadioRepair: Missing batteries");
                return;
            }

            // Consume items from inventory
            inventory.RemoveItem(_toolkitItemId, 1);
            inventory.RemoveItem(_batteriesItemId, 1);

            // Mark as repaired
            _isRepaired = true;

            // Advance helicopter objective
            var escapeManager = FindAnyObjectByType<EscapeRouteManager>();
            if (escapeManager != null)
            {
                escapeManager.AdvanceObjective("heli_repair_radio", 1);
            }

            Debug.Log("RadioRepair: Radio transmitter repaired!");
        }

        private void OnDrawGizmosSelected()
        {
            Gizmos.color = Color.yellow;
            Gizmos.DrawWireSphere(transform.position, _interactRange);
        }
    }
}
