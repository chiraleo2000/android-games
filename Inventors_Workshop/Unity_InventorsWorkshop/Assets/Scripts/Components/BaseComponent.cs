using UnityEngine;
using System.Collections.Generic;

namespace InventorsWorkshop.Components
{
    /// <summary>
    /// Base class for all game components (gears, motors, blocks, etc.)
    /// </summary>
    [RequireComponent(typeof(Rigidbody2D))]
    [RequireComponent(typeof(Collider2D))]
    public abstract class BaseComponent : MonoBehaviour
    {
        [Header("Component Info")]
        [SerializeField] protected string componentId;
        [SerializeField] protected string componentName;
        [SerializeField] protected ComponentType componentType;
        [SerializeField] protected string description;

        [Header("Physics")]
        [SerializeField] protected float mass = 1f;
        [SerializeField] protected float friction = 0.4f;
        [SerializeField] protected float bounciness = 0.2f;

        [Header("Connection Points")]
        [SerializeField] protected List<ConnectionPoint> connectionPoints = new List<ConnectionPoint>();

        [Header("Visual")]
        [SerializeField] protected SpriteRenderer spriteRenderer;
        [SerializeField] protected Color normalColor = Color.white;
        [SerializeField] protected Color selectedColor = Color.yellow;
        [SerializeField] protected Color hoveredColor = Color.cyan;

        // Component state
        protected Rigidbody2D rb;
        protected Collider2D col;
        protected bool isSelected = false;
        protected bool isHovered = false;
        protected bool isPlaced = false;

        // Properties
        public string ComponentId => componentId;
        public string ComponentName => componentName;
        public ComponentType Type => componentType;
        public bool IsSelected => isSelected;
        public bool IsPlaced => isPlaced;

        protected virtual void Awake()
        {
            rb = GetComponent<Rigidbody2D>();
            col = GetComponent<Collider2D>();
            spriteRenderer = GetComponent<SpriteRenderer>();

            if (componentId == null || componentId == "")
            {
                componentId = System.Guid.NewGuid().ToString();
            }

            ConfigurePhysics();
        }

        protected virtual void Start()
        {
            Initialize();
        }

        /// <summary>
        /// Initialize component - override in derived classes
        /// </summary>
        public virtual void Initialize()
        {
            UpdateVisual();
        }

        /// <summary>
        /// Configure physics properties
        /// </summary>
        protected virtual void ConfigurePhysics()
        {
            if (rb != null)
            {
                rb.mass = mass;
                rb.drag = 0.5f;
                rb.angularDrag = 0.5f;
                rb.gravityScale = 1f;
                rb.collisionDetectionMode = CollisionDetectionMode2D.Continuous;
            }

            // Set physics material
            PhysicsMaterial2D material = new PhysicsMaterial2D
            {
                friction = friction,
                bounciness = bounciness
            };

            if (col != null)
            {
                col.sharedMaterial = material;
            }
        }

        /// <summary>
        /// Place component in the world
        /// </summary>
        public virtual void Place(Vector2 position)
        {
            transform.position = position;
            isPlaced = true;
            rb.bodyType = RigidbodyType2D.Dynamic;
            OnPlaced();
        }

        /// <summary>
        /// Called when component is placed
        /// </summary>
        protected virtual void OnPlaced()
        {
            // Override in derived classes
        }

        /// <summary>
        /// Select this component
        /// </summary>
        public virtual void Select()
        {
            isSelected = true;
            UpdateVisual();
            OnSelected();
        }

        /// <summary>
        /// Deselect this component
        /// </summary>
        public virtual void Deselect()
        {
            isSelected = false;
            UpdateVisual();
            OnDeselected();
        }

        /// <summary>
        /// Called when component is selected
        /// </summary>
        protected virtual void OnSelected()
        {
            // Override in derived classes
        }

        /// <summary>
        /// Called when component is deselected
        /// </summary>
        protected virtual void OnDeselected()
        {
            // Override in derived classes
        }

        /// <summary>
        /// Hover over this component
        /// </summary>
        public virtual void Hover()
        {
            isHovered = true;
            UpdateVisual();
        }

        /// <summary>
        /// Stop hovering over this component
        /// </summary>
        public virtual void Unhover()
        {
            isHovered = false;
            UpdateVisual();
        }

        /// <summary>
        /// Update visual appearance based on state
        /// </summary>
        protected virtual void UpdateVisual()
        {
            if (spriteRenderer == null) return;

            if (isSelected)
            {
                spriteRenderer.color = selectedColor;
            }
            else if (isHovered)
            {
                spriteRenderer.color = hoveredColor;
            }
            else
            {
                spriteRenderer.color = normalColor;
            }
        }

        /// <summary>
        /// Get connection point by index
        /// </summary>
        public ConnectionPoint GetConnectionPoint(int index)
        {
            if (index >= 0 && index < connectionPoints.Count)
            {
                return connectionPoints[index];
            }
            return null;
        }

        /// <summary>
        /// Get all connection points
        /// </summary>
        public List<ConnectionPoint> GetConnectionPoints()
        {
            return connectionPoints;
        }

        /// <summary>
        /// Check if component can connect to another component
        /// </summary>
        public virtual bool CanConnectTo(BaseComponent other)
        {
            return other != null && other != this;
        }

        /// <summary>
        /// Connect to another component
        /// </summary>
        public virtual void ConnectTo(BaseComponent other, int thisPoint, int otherPoint)
        {
            // Override in derived classes
        }

        /// <summary>
        /// Disconnect from another component
        /// </summary>
        public virtual void DisconnectFrom(BaseComponent other)
        {
            // Override in derived classes
        }

        /// <summary>
        /// Get component data for saving
        /// </summary>
        public virtual Core.ComponentSaveData GetSaveData()
        {
            Core.ComponentSaveData data = new Core.ComponentSaveData
            {
                componentId = componentId,
                componentType = componentType.ToString(),
                position = transform.position,
                rotation = transform.eulerAngles.z,
                scale = transform.localScale
            };

            return data;
        }

        /// <summary>
        /// Load component data
        /// </summary>
        public virtual void LoadSaveData(Core.ComponentSaveData data)
        {
            componentId = data.componentId;
            transform.position = data.position;
            transform.eulerAngles = new Vector3(0, 0, data.rotation);
            transform.localScale = data.scale;
        }

        /// <summary>
        /// Destroy this component
        /// </summary>
        public virtual void DestroyComponent()
        {
            Destroy(gameObject);
        }

        protected virtual void OnDrawGizmos()
        {
            // Draw connection points
            if (connectionPoints != null)
            {
                Gizmos.color = Color.green;
                foreach (var point in connectionPoints)
                {
                    if (point != null)
                    {
                        Vector3 worldPos = transform.TransformPoint(point.localPosition);
                        Gizmos.DrawWireSphere(worldPos, 0.1f);
                    }
                }
            }
        }
    }

    [System.Serializable]
    public class ConnectionPoint
    {
        public string name;
        public Vector2 localPosition;
        public ConnectionType type;
        public bool isConnected;
        public BaseComponent connectedComponent;

        public ConnectionPoint(string name, Vector2 localPosition, ConnectionType type)
        {
            this.name = name;
            this.localPosition = localPosition;
            this.type = type;
            this.isConnected = false;
            this.connectedComponent = null;
        }
    }

    public enum ComponentType
    {
        Gear,
        Motor,
        Block,
        Battery,
        Switch,
        Sensor,
        Wheel,
        Axle,
        Belt,
        Pulley,
        Spring,
        Hinge
    }

    public enum ConnectionType
    {
        Gear,
        Axle,
        Belt,
        Weld,
        Hinge,
        Spring,
        Electrical
    }
}
