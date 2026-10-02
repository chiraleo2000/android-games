// ---------------------------------------------------------------------------
// Dead City Escape - POI Trigger System
// Triggers escape route objectives when player enters POI zones.
// ---------------------------------------------------------------------------
using UnityEngine;

namespace DeadCityEscape.Escape
{
    /// <summary>
    /// Trigger zone for Points of Interest (POI).
    /// Advances escape route objectives when player enters the trigger.
    /// Used for: RadioTower (heli_find_helipad), ParkingGarage (car_find_vehicle), etc.
    /// </summary>
    public class POITrigger : MonoBehaviour
    {
        [Header("POI Configuration")]
        [SerializeField] private string _objectiveId;
        [SerializeField] private float _triggerRadius = 10f;
        [SerializeField] private bool _triggerOnce = true;

        private bool _hasTriggered;
        private SphereCollider _trigger;

        public string ObjectiveId
        {
            get => _objectiveId;
            set => _objectiveId = value;
        }

        private void Awake()
        {
            // Create trigger collider
            _trigger = gameObject.AddComponent<SphereCollider>();
            _trigger.isTrigger = true;
            _trigger.radius = _triggerRadius;
        }

        private void OnTriggerEnter(Collider other)
        {
            if (_hasTriggered && _triggerOnce) return;

            // Check if player entered
            if (other.CompareTag("Player"))
            {
                var escapeManager = FindAnyObjectByType<EscapeRouteManager>();
                if (escapeManager != null)
                {
                    escapeManager.AdvanceObjective(_objectiveId, 1);
                    _hasTriggered = true;

                    Debug.Log($"POITrigger: Player entered {_objectiveId} zone");
                }
            }
        }

        private void OnDrawGizmosSelected()
        {
            Gizmos.color = Color.cyan;
            Gizmos.DrawWireSphere(transform.position, _triggerRadius);
        }
    }
}
