# Game 2: Inventor's Workshop - Physics Puzzle Builder

## Game Overview
**Genre**: Educational / Puzzle / Sandbox  
**Platform**: Android (All devices 2GB+ RAM)  
**Target Audience**: Kids 8-16 years old  
**Estimated Size**: 15-30MB

## Core Concept
A 2D physics-based educational game where players design working machines and contraptions using realistic components like gears, pulleys, motors, sensors, and building blocks. Think "digital LEGO Mindstorms" meets "The Incredible Machine."

## Component Library

### Mechanical Parts
- **Gears** (5 sizes: 8, 12, 16, 24, 32 teeth)
  - Procedurally generated tooth geometry
  - Realistic gear ratios and torque transfer
  - Clockwise/counterclockwise rotation

- **Pulleys & Belts**
  - Dynamic rope physics with tension simulation
  - Belt length auto-adjusts between pulleys
  - Friction and slippage properties

- **Wheels & Axles**
  - Configurable radius and friction
  - Torque and angular velocity properties
  - Ground contact physics

- **Springs**
  - Compression and extension forces
  - Adjustable stiffness constant
  - Hooke's Law implementation

- **Hinges**
  - Rotational joints with angle limits
  - Motor attachment points
  - Friction and damping controls

### Power & Control
- **Motors** (3 types)
  - DC Motor: Constant rotation
  - Servo Motor: Position control (0-180°)
  - Stepper Motor: Precise angle increments

- **Batteries**
  - Power capacity: 100, 500, 1000 units
  - Drain rate visualization
  - Rechargeable in sandbox mode

- **Switches**
  - Manual toggle (on/off)
  - Push button (momentary)
  - Pressure plate (weight-activated)

- **Sensors**
  - Proximity: Detects objects within range
  - Touch: Activated by collision
  - Light: Responds to brightness levels
  - Rotation: Counts wheel revolutions

- **Timers**
  - Delay activation (1-10 seconds)
  - Interval triggers (repeating)
  - Countdown displays

### Structural Elements
- **Blocks** (8 shapes)
  - Cube, rectangular plank, triangle, cylinder
  - Material properties: wood, metal, plastic
  - Configurable mass and density

- **Fasteners**
  - Glue: Permanent rigid connection
  - Bolts/Nuts: Removable connections
  - Screws: Quick attach/detach
  - Welds: Strong metal-to-metal bonds

- **Frames**
  - Lightweight structural supports
  - I-beam, L-bracket, T-connector
  - No mass contribution (purely structural)

## Gameplay Modes

### Sandbox Mode
**Features**:
- Unlimited component access
- Adjustable physics parameters:
  - Gravity: 0-15 m/s²
  - Friction coefficient: 0-1.0
  - Air resistance: 0-100%
  - Time scale: 0.25x - 2x
- Save/load up to 20 custom inventions
- Export creations as shareable 6-digit codes
- Import community designs

### Challenge Mode
**Progressive Difficulty**: 100+ handcrafted levels

#### Level Categories

**Simple Machines (Levels 1-20)**
- Lever basics: First-class, second-class, third-class
- Wheel and axle applications
- Inclined plane and wedge concepts
- Pulley systems: Fixed and movable
- Screw thread mechanics

**Gear Systems (Levels 21-40)**
- Gear ratio calculations
- Speed multiplication/reduction
- Compound gear trains
- Rack and pinion mechanisms
- Differential gear concepts

**Automation (Levels 41-60)**
- Sensor-triggered activation
- Timer sequences
- Conditional logic gates (if/then)
- Automated conveyor systems
- Sorting mechanisms

**Transportation (Levels 61-80)**
- Vehicle design: Cars, trucks, bikes
- Elevator and lift systems
- Cable cars and ski lifts
- Crane and hoist mechanisms
- Robotic arm movement

**Robotics (Levels 81-100)**
- Multi-sensor coordination
- Feedback loops
- Autonomous navigation
- Pick-and-place tasks
- Line-following robots

### Tutorial System
- **Professor Spark**: Friendly animated owl mascot
- Interactive component demonstrations
- Physics concept explanations:
  - Friction and drag forces
  - Momentum and energy transfer
  - Torque and mechanical advantage
  - Electrical circuits basics
- Progressive hint system (3 hints per level)
- Video tutorials for complex topics

## Kids/Teen Appeal Strategies

### Visual Design
- Bright, saturated color palette
- Smooth tweened animations for component movement
- Particle effects:
  - Sparks when motors activate
  - Confetti when puzzles complete
  - Smoke puffs for failures
- Cel-shaded cartoon aesthetic
- Animated background workshop setting

### Educational Integration
- **STEM Learning Objectives** clearly marked:
  - Physics concepts covered
  - Engineering principles applied
  - Mathematical skills used
- Real-world applications shown:
  - "Elevators use pulleys and counterweights!"
  - "Car transmissions use gear ratios!"
  - "Robots use sensors and actuators!"
- Achievement badges:
  - "Junior Engineer" (Complete 20 levels)
  - "Master Builder" (50 sandbox creations)
  - "Physics Wizard" (100% completion)
- Progress reports for parents:
  - Skills learned tracking
  - Time spent per concept
  - Downloadable certificates

### Social & Sharing
- **Community Hub**
  - Browse player-created machines
  - Filter by category, rating, complexity
  - Weekly featured inventions

- **Building Competitions**
  - Weekly themes: "Build a catapult," "Design a clock"
  - Voting system (1-5 stars)
  - Winner showcases and rewards

- **Remix Culture**
  - "Remix" button to modify others' designs
  - Attribution system shows original creator
  - Version history tracking

- **Social Features**
  - Friend list and private sharing
  - Challenge friends to beat your level
  - Cooperative building mode (planned)

### Gamification
- **Star Rating System**
  - 1 star: Complete the objective
  - 2 stars: Meet efficiency target (fewer parts)
  - 3 stars: Meet speed target (complete under time limit)

- **Optional Challenges**
  - "Use fewer than 10 components"
  - "Complete without motors"
  - "Achieve 100% energy efficiency"

- **Daily Rewards**
  - Login streak bonuses
  - New components unlock rotation
  - Special decorative items

- **Seasonal Events**
  - Holiday-themed components (spring-loaded snowman, etc.)
  - Limited-time challenges
  - Exclusive badges and frames

## Technical Implementation

### Engine: Godot 4.x with 2D Physics

#### Physics Nodes
- **StaticBody2D**: Fixed components (walls, mounting points)
- **RigidBody2D**: All movable parts with realistic mass and inertia
- **Area2D**: Sensor collision detection zones
- **PhysicsMaterial**: Friction and bounce properties per material

#### Component System Architecture
```
BaseComponent (Parent Class)
├── Mass, size, attachment points
├── Connection validation
└── Serialization methods

MechanicalComponent (Gears, Pulleys, etc.)
├── Rotation physics
├── Torque calculations
└── Connection constraints

ElectricalComponent (Motors, Sensors, etc.)
├── Power consumption
├── Activation states
└── Signal propagation
```

#### Physics Simulation
- Fixed timestep: 60 physics ticks/second
- Continuous collision detection for fast-moving objects
- Constraint solver iterations: 8 (balance accuracy/performance)
- Sleep threshold for inactive objects (optimization)

### Asset Optimization
- **Vector Graphics**: All UI elements scalable
- **Procedural Textures**: Noise-based material generation
- **Single Sprite Atlas**: All components in one texture
- **JSON Serialization**: Lightweight save files (<10KB each)
- **Compressed Audio**: OGG Vorbis for sound effects

### Storage Structure
```
/data/
  /levels/ - JSON level definitions (5KB each)
  /saves/ - User creations (compressed JSON)
  /progress/ - Achievement and unlock data
/assets/
  /atlas/ - Single texture atlas (2MB)
  /audio/ - OGG compressed sounds (3MB)
/scripts/ - Godot GDScript (minimal size)
```

## Development Roadmap

### Phase 1: Core Physics Engine (6-8 weeks)
- Godot 2D physics setup and testing
- Component base classes and connection system
- 10 basic components: blocks, gears, motors
- Sandbox mode with basic UI

### Phase 2: Challenge Levels (8-10 weeks)
- Level editor and design pipeline
- First 40 levels (Simple Machines + Gear Systems)
- Tutorial system with Professor Spark
- Hint system implementation

### Phase 3: Educational Content (4-6 weeks)
- Physics explanation screens
- Real-world application videos
- Achievement and badge system
- Parent progress reporting

### Phase 4: Social Features (6-8 weeks)
- Community hub backend (Firebase/GCS)
- Share code generation and import
- Rating and commenting system
- Weekly competition infrastructure

### Phase 5: Polish & Testing (4-6 weeks)
- Final 60 levels (Automation, Transport, Robotics)
- Sound design and music
- Playtesting with 8-16 age group
- Accessibility features (colorblind mode, text-to-speech)
<!--   -->
