using UnityEngine;
using System.Collections.Generic;

namespace InventorsWorkshop.Components
{
    /// <summary>
    /// Gear component - rotates and transfers motion
    /// </summary>
    public class Gear : BaseComponent
    {
        [Header("Gear Properties")]
        [SerializeField] private int toothCount = 16;
        [SerializeField] private float radius = 0.5f;
        [SerializeField] private float rotationSpeed = 0f;
        [SerializeField] private float torque = 0f;

        [Header("Gear Connections")]
        [SerializeField] private List<Gear> connectedGears = new List<Gear>();
        [SerializeField] private List<HingeJoint2D> gearJoints = new List<HingeJoint2D>();

        // Properties
        public int ToothCount => toothCount;
        public float Radius => radius;
        public float RotationSpeed => rotationSpeed;

        protected override void Awake()
        {
            componentType = ComponentType.Gear;
            base.Awake();
        }

        public override void Initialize()
        {
            base.Initialize();
            SetupGearCollider();
            SetupConnectionPoints();
        }

        private void SetupGearCollider()
        {
            // Create circular collider for gear
            CircleCollider2D circleCol = GetComponent<CircleCollider2D>();
            if (circleCol == null)
            {
                circleCol = gameObject.AddComponent<CircleCollider2D>();
            }
            circleCol.radius = radius;
        }

        private void SetupConnectionPoints()
        {
            // Add connection point at center for axle
            connectionPoints.Clear();
            connectionPoints.Add(new ConnectionPoint("Center", Vector2.zero, ConnectionType.Axle));

            // Add connection points around perimeter for gear meshing
            int numPoints = 8;
            for (int i = 0; i < numPoints; i++)
            {
                float angle = (360f / numPoints) * i;
                float rad = angle * Mathf.Deg2Rad;
                Vector2 pos = new Vector2(Mathf.Cos(rad), Mathf.Sin(rad)) * radius;
                connectionPoints.Add(new ConnectionPoint($"Tooth_{i}", pos, ConnectionType.Gear));
            }
        }

        private void FixedUpdate()
        {
            if (isPlaced)
            {
                UpdateGearRotation();
                TransferMotionToConnectedGears();
            }
        }

        private void UpdateGearRotation()
        {
            // Apply rotation based on speed
            if (Mathf.Abs(rotationSpeed) > 0.01f)
            {
                rb.angularVelocity = rotationSpeed;
            }
        }

        private void TransferMotionToConnectedGears()
        {
            foreach (var gear in connectedGears)
            {
                if (gear != null)
                {
                    // Calculate gear ratio
                    float ratio = (float)toothCount / gear.ToothCount;
                    
                    // Transfer rotation (opposite direction)
                    gear.SetRotationSpeed(-rotationSpeed * ratio);
                }
            }
        }

        /// <summary>
        /// Set rotation speed of this gear
        /// </summary>
        public void SetRotationSpeed(float speed)
        {
            rotationSpeed = speed;
        }

        /// <summary>
        /// Apply torque to this gear
        /// </summary>
        public void ApplyTorque(float torqueAmount)
        {
            torque = torqueAmount;
            rb.AddTorque(torque);
        }

        /// <summary>
        /// Connect this gear to another gear
        /// </summary>
        public override void ConnectTo(BaseComponent other, int thisPoint, int otherPoint)
        {
            if (other is Gear otherGear)
            {
                // Check if gears are close enough to mesh
                float distance = Vector2.Distance(transform.position, other.transform.position);
                float requiredDistance = radius + otherGear.Radius;

                if (Mathf.Abs(distance - requiredDistance) < 0.2f)
                {
                    // Create hinge joint connection
                    HingeJoint2D joint = gameObject.AddComponent<HingeJoint2D>();
                    joint.connectedBody = otherGear.GetComponent<Rigidbody2D>();
                    joint.autoConfigureConnectedAnchor = true;
                    joint.enableCollision = false;

                    // Add to lists
                    connectedGears.Add(otherGear);
                    gearJoints.Add(joint);

                    // Mark connection points as connected
                    if (thisPoint < connectionPoints.Count)
                    {
                        connectionPoints[thisPoint].isConnected = true;
                        connectionPoints[thisPoint].connectedComponent = other;
                    }

                    Debug.Log($"Gear {componentName} connected to {other.ComponentName}");
                }
                else
                {
                    Debug.LogWarning($"Gears too far apart to connect: {distance} vs {requiredDistance}");
                }
            }
        }

        /// <summary>
        /// Disconnect from another gear
        /// </summary>
        public override void DisconnectFrom(BaseComponent other)
        {
            if (other is Gear otherGear)
            {
                int index = connectedGears.IndexOf(otherGear);
                if (index >= 0)
                {
                    // Remove joint
                    if (index < gearJoints.Count && gearJoints[index] != null)
                    {
                        Destroy(gearJoints[index]);
                        gearJoints.RemoveAt(index);
                    }

                    // Remove from list
                    connectedGears.RemoveAt(index);

                    // Update connection points
                    foreach (var point in connectionPoints)
                    {
                        if (point.connectedComponent == other)
                        {
                            point.isConnected = false;
                            point.connectedComponent = null;
                        }
                    }

                    Debug.Log($"Gear {componentName} disconnected from {other.ComponentName}");
                }
            }
        }

        /// <summary>
        /// Get gear ratio with another gear
        /// </summary>
        public float GetGearRatio(Gear other)
        {
            if (other != null)
            {
                return (float)toothCount / other.ToothCount;
            }
            return 1f;
        }

        public override Core.ComponentSaveData GetSaveData()
        {
            var data = base.GetSaveData();
            data.properties["toothCount"] = toothCount.ToString();
            data.properties["radius"] = radius.ToString();
            data.properties["rotationSpeed"] = rotationSpeed.ToString();
            return data;
        }

        public override void LoadSaveData(Core.ComponentSaveData data)
        {
            base.LoadSaveData(data);
            if (data.properties.ContainsKey("toothCount"))
                toothCount = int.Parse(data.properties["toothCount"]);
            if (data.properties.ContainsKey("radius"))
                radius = float.Parse(data.properties["radius"]);
            if (data.properties.ContainsKey("rotationSpeed"))
                rotationSpeed = float.Parse(data.properties["rotationSpeed"]);
        }

        protected override void OnDrawGizmos()
        {
            base.OnDrawGizmos();

            // Draw gear circle
            Gizmos.color = Color.blue;
            Gizmos.DrawWireSphere(transform.position, radius);

            // Draw connections to other gears
            Gizmos.color = Color.yellow;
            foreach (var gear in connectedGears)
            {
                if (gear != null)
                {
                    Gizmos.DrawLine(transform.position, gear.transform.position);
                }
            }
        }
    }
}
