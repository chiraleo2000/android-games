// ---------------------------------------------------------------------------
// Dead City Escape - Sewer Access Interaction
// Interaction point for unlocking sewer access gates.
// Requires lockpick set from inventory.
// ---------------------------------------------------------------------------
using UnityEngine;

namespace DeadCityEscape.Escape
{
    /// <summary>
    /// Sewer access gate interaction for sewer escape route.
    /// Requires lockpick set from player inventory.
    /// Advances sewer_unlock_gates objective on successful unlock.
    /// Requirement: 11.3
    /// </summary>
    public class SewerAccessInteraction : MonoBehaviour
    {
        [Header("Interaction")]
        [SerializeField] private float _interactRange = 3f;
        [SerializeField] private string _lockpickItemId = "lockpick_set";

        private bool _isUnlocked;
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
            if (_isUnlocked) return;

            // Check for player in range and interact input
            var player = FindAnyObjectByType<Player.PlayerController>();
            if (player == null) return;

            float distance = Vector3.Distance(transform.position, player.transform.position);
            if (distance <= _interactRange)
            {
                // Check for interact input (E key or interact button)
                bool interactPressed = Input.GetKeyDown(KeyCode.E);
                
                var inputManager = Core.InputManager.Instance;
                if (inputManager != null)
                {
                    interactPressed |= inputManager.InteractPressed;
                }

                if (interactPressed)
                {
                    TryUnlockGate();
                }
            }
        }

        private void TryUnlockGate()
        {
            if (_isUnlocked) return;

            var inventory = FindAnyObjectByType<Player.PlayerInventory>();
            if (inventory == null) return;

            // Check if player has lockpick set
            if (!inventory.HasItem(_lockpickItemId, 1))
            {
                Debug.Log("SewerAccess: Need lockpick set to unlock this gate");
                return;
            }

            // Note: We don't consume the lockpick set, it can be reused for all 3 gates
            // This is intentional per the design - one lockpick set unlocks all gates

            // Mark as unlocked
            _isUnlocked = true;

            // Advance sewer objective
            var escapeManager = FindAnyObjectByType<EscapeRouteManager>();
            if (escapeManager != null)
            {
                escapeManager.AdvanceObjective("sewer_unlock_gates", 1);
            }

            Debug.Log("SewerAccess: Gate unlocked!");

            // Optionally disable the collider
            if (_trigger != null)
            {
                _trigger.enabled = false;
            }
        }

        private void OnDrawGizmosSelected()
        {
            Gizmos.color = Color.green;
            Gizmos.DrawWireSphere(transform.position, _interactRange);
        }
    }
}
