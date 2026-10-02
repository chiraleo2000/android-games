// ---------------------------------------------------------------------------
// Dead City Escape - Pickup System
// Base pickup class and specialized pickup types.
// Interactable pickups that add items to player inventory.
// ---------------------------------------------------------------------------
using System;
using UnityEngine;

namespace DeadCityEscape.Combat
{
    /// <summary>
    /// Base class for all pickupable items in the world.
    /// Displays interaction prompt when player is near.
    /// Adds item to PlayerInventory on interact and destroys GameObject.
    /// </summary>
    public class PickupBase : MonoBehaviour
    {
        [Header("Pickup")]
        [SerializeField] protected string _itemId;
        [SerializeField] protected int _quantity = 1;
        [SerializeField] protected float _interactRange = 2.5f;
        [SerializeField] protected float _bobSpeed = 2f;
        [SerializeField] protected float _bobHeight = 0.2f;
        [SerializeField] protected float _rotateSpeed = 45f;

        private Vector3 _startPos;
        protected bool _isPickedUp;

        public string ItemId => _itemId;
        public bool IsPickedUp => _isPickedUp;

        public event Action<PickupBase> OnPickedUp;

        protected void InvokeOnPickedUp()
        {
            OnPickedUp?.Invoke(this);
        }

        protected virtual void Start()
        {
            _startPos = transform.position;
        }

        protected virtual void Update()
        {
            if (_isPickedUp) return;

            // Floating bob animation
            float bob = Mathf.Sin(Time.time * _bobSpeed) * _bobHeight;
            transform.position = _startPos + Vector3.up * bob;

            // Slow rotation
            transform.Rotate(Vector3.up, _rotateSpeed * Time.deltaTime);
        }

        /// <summary>
        /// Checks if player is in range and can pick up this item.
        /// </summary>
        public bool CanPickup(Transform playerTransform)
        {
            if (_isPickedUp || playerTransform == null) return false;
            return Vector3.Distance(transform.position,
                playerTransform.position) <= _interactRange;
        }

        /// <summary>
        /// Attempts to add this item to the player's inventory.
        /// Destroys pickup GameObject on successful add.
        /// </summary>
        public virtual bool TryPickup()
        {
            if (_isPickedUp) return false;

            var inventory = FindAnyObjectByType<Player.PlayerInventory>();
            if (inventory == null) return false;

            if (inventory.AddItem(_itemId, _quantity))
            {
                _isPickedUp = true;
                OnPickedUp?.Invoke(this);
                Destroy(gameObject);
                return true;
            }

            return false;
        }
    }

    /// <summary>
    /// Ammo pickup that adds ammunition to inventory.
    /// </summary>
    public class AmmoPickup : PickupBase
    {
        private void Awake()
        {
            _itemId = "ammo_9mm";
            _quantity = 12;
        }
    }

    /// <summary>
    /// Health pickup (Medkit).
    /// </summary>
    public class HealthPickup : PickupBase
    {
        private void Awake()
        {
            _itemId = "medkit";
            _quantity = 1;
        }
    }

    /// <summary>
    /// Weapon pickup (finds a new weapon in the world).
    /// </summary>
    public class WeaponPickup : PickupBase
    {
        private void Awake()
        {
            _itemId = "pistol";
            _quantity = 1;
        }
    }

    /// <summary>
    /// Key item pickup for escape route objectives.
    /// </summary>
    public class KeyItemPickup : PickupBase
    {
        [SerializeField] private string _keyItemId = "fuel_can";

        private void Awake()
        {
            _itemId = _keyItemId;
            _quantity = 1;
        }
    }
}
