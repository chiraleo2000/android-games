// ---------------------------------------------------------------------------
// Dead City Escape - Barricade Interaction
// Interaction point for clearing street barricades.
// Requires all 3 repair parts to be collected first.
// ---------------------------------------------------------------------------
using UnityEngine;

namespace DeadCityEscape.Escape
{
    /// <summary>
    /// Barricade clearing interaction for car escape route.
    /// Can only be cleared after all 3 repair parts are collected.
    /// Advances car_clear_barricade objective on successful interaction.
    /// Requirement: 10.5
    /// </summary>
    public class BarricadeInteraction : MonoBehaviour
    {
        [Header("Interaction")]
        [SerializeField] private float _interactRange = 3f;

        private bool _isCleared;
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
            if (_isCleared) return;

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
                    TryClearBarricade();
                }
            }
        }

        private void TryClearBarricade()
        {
            if (_isCleared) return;

            var escapeManager = FindAnyObjectByType<EscapeRouteManager>();
            if (escapeManager == null) return;

            // Check if car_repair_parts objective is complete
            var objectives = escapeManager.GetActiveObjectives();
            bool repairPartsComplete = false;

            foreach (var objective in objectives)
            {
                if (objective.ObjectiveId == "car_repair_parts" && objective.IsComplete)
                {
                    repairPartsComplete = true;
                    break;
                }
            }

            if (!repairPartsComplete)
            {
                Debug.Log("BarricadeInteraction: Need to collect all repair parts first (battery, tire, fuel)");
                return;
            }

            // Clear the barricade
            _isCleared = true;

            // Advance car objective
            escapeManager.AdvanceObjective("car_clear_barricade", 1);

            Debug.Log("BarricadeInteraction: Barricade cleared! Ready to escape!");

            // Optionally destroy or hide the barricade visual
            // For now, just disable the collider
            if (_trigger != null)
            {
                _trigger.enabled = false;
            }
        }

        private void OnDrawGizmosSelected()
        {
            Gizmos.color = Color.yellow;
            Gizmos.DrawWireSphere(transform.position, _interactRange);
        }
    }
}
