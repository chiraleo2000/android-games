using UnityEngine;

namespace InventorsWorkshop.Components
{
    /// <summary>
    /// Motor component - provides rotational power
    /// </summary>
    public class Motor : BaseComponent
    {
        [Header("Motor Properties")]
        [SerializeField] private MotorType motorType = MotorType.DC;
        [SerializeField] private float motorSpeed = 100f;
        [SerializeField] private float motorTorque = 10f;
        [SerializeField] private float powerConsumption = 5f;

        [Header("Motor State")]
        [SerializeField] private bool isRunning = false;
        [SerializeField] private float currentSpeed = 0f;
        [SerializeField] private float targetSpeed = 0f;
        [SerializeField] private float acceleration = 50f;

        [Header("Connected Components")]
        [SerializeField] private Gear connectedGear;
        [SerializeField] private BaseComponent powerSource;

        // Properties
        public MotorType Type => motorType;
        public bool IsRunning => isRunning;
        public float CurrentSpeed => currentSpeed;

        protected override void Awake()
        {
            componentType = ComponentType.Motor;
            base.Awake();
        }

        public override void Initialize()
        {
            base.Initialize();
            SetupMotorCollider();
            SetupConnectionPoints();
        }

        private void SetupMotorCollider()
        {
            // Create box collider for motor
            BoxCollider2D boxCol = GetComponent<BoxCollider2D>();
            if (boxCol == null)
            {
                boxCol = gameObject.AddComponent<BoxCollider2D>();
            }
            boxCol.size = new Vector2(0.8f, 0.6f);
        }

        private void SetupConnectionPoints()
        {
            connectionPoints.Clear();
            
            // Output shaft connection point
            connectionPoints.Add(new ConnectionPoint("Output", new Vector2(0.5f, 0), ConnectionType.Axle));
            
            // Power input connection point
            connectionPoints.Add(new ConnectionPoint("Power", new Vector2(-0.5f, 0), ConnectionType.Electrical));
        }

        private void FixedUpdate()
        {
            if (isPlaced && isRunning)
            {
                UpdateMotorSpeed();
                ApplyMotorTorque();
            }
        }

        private void UpdateMotorSpeed()
        {
            // Smoothly accelerate/decelerate to target speed
            currentSpeed = Mathf.MoveTowards(currentSpeed, targetSpeed, acceleration * Time.fixedDeltaTime);
        }

        private void ApplyMotorTorque()
        {
            // Apply torque to rigidbody
            rb.AddTorque(motorTorque * Mathf.Sign(currentSpeed));

            // Transfer motion to connected gear
            if (connectedGear != null)
            {
                connectedGear.SetRotationSpeed(currentSpeed);
            }
        }

        /// <summary>
        /// Start the motor
        /// </summary>
        public void StartMotor()
        {
            if (HasPower())
            {
                isRunning = true;
                targetSpeed = motorSpeed;
                Debug.Log($"Motor {componentName} started");
            }
            else
            {
                Debug.LogWarning($"Motor {componentName} has no power source");
            }
        }

        /// <summary>
        /// Stop the motor
        /// </summary>
        public void StopMotor()
        {
            isRunning = false;
            targetSpeed = 0f;
            Debug.Log($"Motor {componentName} stopped");
        }

        /// <summary>
        /// Set motor speed
        /// </summary>
        public void SetSpeed(float speed)
        {
            motorSpeed = Mathf.Clamp(speed, -200f, 200f);
            if (isRunning)
            {
                targetSpeed = motorSpeed;
            }
        }

        /// <summary>
        /// Set motor torque
        /// </summary>
        public void SetTorque(float torque)
        {
            motorTorque = Mathf.Clamp(torque, 0f, 100f);
        }

        /// <summary>
        /// Reverse motor direction
        /// </summary>
        public void Reverse()
        {
            motorSpeed = -motorSpeed;
            targetSpeed = motorSpeed;
        }

        /// <summary>
        /// Check if motor has power
        /// </summary>
        private bool HasPower()
        {
            return powerSource != null || motorType == MotorType.Manual;
        }

        /// <summary>
        /// Connect motor to a component
        /// </summary>
        public override void ConnectTo(BaseComponent other, int thisPoint, int otherPoint)
        {
            if (thisPoint == 0 && other is Gear gear)
            {
                // Connect to gear
                connectedGear = gear;
                
                // Create fixed joint
                FixedJoint2D joint = gameObject.AddComponent<FixedJoint2D>();
                joint.connectedBody = gear.GetComponent<Rigidbody2D>();
                joint.autoConfigureConnectedAnchor = true;

                connectionPoints[thisPoint].isConnected = true;
                connectionPoints[thisPoint].connectedComponent = other;

                Debug.Log($"Motor {componentName} connected to gear {other.ComponentName}");
            }
            else if (thisPoint == 1)
            {
                // Connect to power source
                powerSource = other;
                connectionPoints[thisPoint].isConnected = true;
                connectionPoints[thisPoint].connectedComponent = other;

                Debug.Log($"Motor {componentName} connected to power source");
            }
        }

        /// <summary>
        /// Disconnect motor from a component
        /// </summary>
        public override void DisconnectFrom(BaseComponent other)
        {
            if (other == connectedGear)
            {
                // Remove joint
                FixedJoint2D joint = GetComponent<FixedJoint2D>();
                if (joint != null)
                {
                    Destroy(joint);
                }

                connectedGear = null;
                connectionPoints[0].isConnected = false;
                connectionPoints[0].connectedComponent = null;
            }
            else if (other == powerSource)
            {
                powerSource = null;
                connectionPoints[1].isConnected = false;
                connectionPoints[1].connectedComponent = null;
            }
        }

        public override Core.ComponentSaveData GetSaveData()
        {
            var data = base.GetSaveData();
            data.properties["motorType"] = motorType.ToString();
            data.properties["motorSpeed"] = motorSpeed.ToString();
            data.properties["motorTorque"] = motorTorque.ToString();
            data.properties["isRunning"] = isRunning.ToString();
            return data;
        }

        public override void LoadSaveData(Core.ComponentSaveData data)
        {
            base.LoadSaveData(data);
            if (data.properties.ContainsKey("motorType"))
                motorType = (MotorType)System.Enum.Parse(typeof(MotorType), data.properties["motorType"]);
            if (data.properties.ContainsKey("motorSpeed"))
                motorSpeed = float.Parse(data.properties["motorSpeed"]);
            if (data.properties.ContainsKey("motorTorque"))
                motorTorque = float.Parse(data.properties["motorTorque"]);
            if (data.properties.ContainsKey("isRunning"))
                isRunning = bool.Parse(data.properties["isRunning"]);
        }

        protected override void OnDrawGizmos()
        {
            base.OnDrawGizmos();

            // Draw motor direction arrow
            if (isRunning)
            {
                Gizmos.color = Color.green;
                Vector3 direction = transform.right * Mathf.Sign(currentSpeed);
                Gizmos.DrawRay(transform.position, direction * 0.5f);
            }
        }
    }

    public enum MotorType
    {
        DC,
        Servo,
        Stepper,
        Manual
    }
}
