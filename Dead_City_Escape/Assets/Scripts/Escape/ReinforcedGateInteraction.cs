// ---------------------------------------------------------------------------
// Dead City Escape - Reinforced Gate Interaction
// Interaction point for cutting through the reinforced gate in Zone 15.
// Requires acetylene torch from inventory.
// ---------------------------------------------------------------------------
using UnityEngine;

namespace DeadCityEscape.Escape
{
    /// <summary>
    /// Reinforced gate interaction for sewer escape route.
    /// Requires acetylene torch from player inventory.
    /// Advances sewer_breach objective and triggers victory on successful breach.
    /// Requirements: 11.5, 11.6
    /// </summary>
    public class ReinforcedGateInteraction : MonoBehaviour
    {
        [Header("Interaction")]
        [SerializeField] private float _interactRange = 3f;
        [SerializeField] private string _torchItemId = "acetylene_torch";

        private bool _isBreached;
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
            if (_isBreached) return;

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
                    TryBreachGate();
                }
            }
        }

        private void TryBreachGate()
        {
            if (_isBreached) return;

            var inventory = FindAnyObjectByType<Player.PlayerInventory>();
            if (inventory == null) return;

            // Check if player has acetylene torch
            if (!inventory.HasItem(_torchItemId, 1))
            {
                Debug.Log("ReinforcedGate: Need acetylene torch to cut through this gate");
                return;
            }

            // Mark as breached
            _isBreached = true;

            // Advance sewer objective
            var escapeManager = FindAnyObjectByType<EscapeRouteManager>();
            if (escapeManager != null)
            {
                escapeManager.AdvanceObjective("sewer_breach", 1);
            }

            Debug.Log("ReinforcedGate: Gate breached! Escape route clear!");

            // Optionally disable the collider
            if (_trigger != null)
            {
                _trigger.enabled = false;
            }

            // Note: Victory is triggered by EscapeRouteManager when all objectives complete
            // with 1.25× XP multiplier for Sewer route
        }

        private void OnDrawGizmosSelected()
        {
            Gizmos.color = Color.red;
            Gizmos.DrawWireSphere(transform.position, _interactRange);
        }
    }
}
