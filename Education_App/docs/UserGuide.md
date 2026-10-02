# LogicLabs: User Guide & Learning Journey

Welcome to **LogicLabs: Code & Escape**! This guide will help you develop problem-solving, logical thinking, and critical thinking skills while having fun programming a robot.

## What You'll Learn

LogicLabs teaches you how to think like a programmer:
- **Break down problems** into smaller, manageable steps
- **Plan solutions** before taking action
- **Think logically** using sequences, loops, and conditions
- **Debug and improve** your code when things don't work
- **Optimize** your solutions to be more efficient

## Getting Started

### First Launch

When you open LogicLabs for the first time:
1. **Splash Screen**: Watch the animated logo (2 seconds)
2. **Loading**: The app prepares your first puzzle
3. **Tutorial**: Swipe through 3 quick screens to learn the basics
   - Screen 1: Meet your robot 🤖
   - Screen 2: Learn about code blocks 🧩
   - Screen 3: Understand the goal ⭐

You can skip the tutorial and access it later from Settings → Help.

## Your Mission

Guide your robot 🤖 from the **Start** position (S) to the **Star** (⭐) by building a program using code blocks.

### Success Criteria
- ✅ Robot reaches the star
- ✅ Avoid hitting walls (#)
- ✅ Use battery efficiently (aim for 3 stars!)

### Failure Conditions
- ❌ Robot hits a wall
- ❌ Robot runs out of instructions before reaching the goal
- ❌ Battery reaches 0%

Don't worry! Failure is part of learning. Each attempt teaches you something new.

## Understanding Code Blocks

Code blocks are the building pieces of your program. Drag them from the palette and snap them together like puzzle pieces!

### Action Blocks (Blue & Orange)

#### 🔵 Move Forward
- **What it does**: Moves robot 1 step in the direction it's facing
- **Battery cost**: 1%
- **When to use**: Moving through open paths
- **Learning skill**: Sequential thinking

#### 🔵 Turn Left / Turn Right
- **What it does**: Rotates robot 90 degrees (doesn't move forward)
- **Battery cost**: FREE (0%)
- **When to use**: Changing direction at corners
- **Learning skill**: Spatial reasoning

#### 🟠 Jump (Advanced)
- **What it does**: Leaps 2 spaces forward, can hop over 1 wall
- **Battery cost**: 3%
- **When to use**: Taking shortcuts to save moves
- **Learning skill**: Risk-reward analysis
- **Critical thinking**: Is jumping worth the extra cost? Calculate: Walking around = 2-4 moves (2-4%), Jumping = 1 jump (3%)

### Logic Blocks (Yellow)

#### 🟡 Loop (Repeat)
- **What it does**: Repeats the blocks inside it multiple times
- **Battery cost**: Depends on blocks inside
- **When to use**: Long straight paths, repeating patterns
- **Learning skill**: Pattern recognition, code efficiency
- **Example**: Instead of [Move][Move][Move], use [Loop 3: Move]

### Sensor Blocks (Purple)

#### 🟣 If Wall Ahead
- **What it does**: Checks if there's a wall in front. If TRUE, runs blocks inside
- **Battery cost**: Depends on blocks inside
- **When to use**: Making adaptive code that works for different mazes
- **Learning skill**: Conditional logic, decision-making

#### 🟣 If Gem Ahead
- **What it does**: Checks if the star is directly in front
- **Battery cost**: Depends on blocks inside
- **When to use**: Final approach to the goal
- **Learning skill**: Boolean logic

## How to Play (Mobile Controls)

### Step 1: Choose Your Challenge
From the main menu, tap a difficulty level:
- **🟢 Easy**: Perfect for learning the basics
- **🟡 Medium**: Test your logical thinking
- **🔴 Hard**: Master-level problem-solving

### Step 2: Analyze the Maze
- Look at the grid carefully
- Find the Start (S) and Goal (⭐)
- Identify walls (#) and open paths
- Plan your route mentally before coding

### Step 3: Build Your Program
1. **Swipe up** from the bottom to reveal the block palette
2. **Drag blocks** onto the workspace area
3. **Snap blocks together** (they'll click into place)
4. **Tap a block** to see options (Edit, Delete, Info)
5. **Long-press** any block to see what it does

### Step 4: Test Your Code
- Tap the **▶️ Play** button to run your program
- Watch the robot execute each step
- See the battery meter decrease with each action

### Step 5: Learn and Improve
- **Success?** Celebrate and try the next level!
- **Failed?** Read the hint, adjust your code, and try again
- **Got 1-2 stars?** Can you optimize for 3 stars?

### Helpful Gestures
- **Swipe up**: Open block palette
- **Swipe down**: Close palette
- **Pinch to zoom**: Make the grid bigger (helpful for complex mazes)
- **Two-finger tap**: Undo last action
- **Tap pause icon**: Access menu (Resume, Restart, Settings, Quit)

## Difficulty Levels Explained

| Difficulty | Grid Size | Skills Developed | What to Expect |
|------------|-----------|------------------|----------------|
| **🟢 Easy** | 5x5 | Sequential thinking, basic loops | Open spaces, short paths, perfect for learning block basics |
| **🟡 Medium** | 7x7 | Planning, conditionals, debugging | Classic mazes with turns and dead ends, requires strategy |
| **🔴 Hard** | 9x9 | Optimization, advanced logic, critical thinking | Complex paths, multiple solutions, sensor blocks recommended |

### Progression Tips
- Start with Easy to master the controls
- Move to Medium when you consistently get 3 stars
- Try Hard when you're comfortable using loops and conditionals

## Problem-Solving Strategies

### The 4-Step Method

1. **Understand**: What is the goal? Where are the obstacles?
2. **Plan**: Trace the path with your finger. What blocks do you need?
3. **Execute**: Build your code and run it
4. **Reflect**: Did it work? If not, why? How can you improve?

### Debugging Tips

When your robot fails:
- **Hit a wall?** Check your Turn blocks. Is the robot facing the right direction?
- **Ran out of instructions?** You might need more Move blocks or a longer Loop
- **Battery at 0%?** Your solution is too long. Can you use loops or jumps to shorten it?

### Optimization Techniques

To get 3 stars (90+ battery remaining):
1. **Use Loops**: Replace repeated actions with a single loop
2. **Plan the shortest path**: Count the minimum moves needed
3. **Jump wisely**: Only jump if it saves 2+ moves
4. **Avoid backtracking**: Plan ahead to prevent wasted moves

## Tips for 3 Stars ⭐⭐⭐

### Efficiency Calculations

**Example Maze**: 8 moves to goal
- **Without loops**: 8 Move blocks = 8% battery used = 92% remaining = ⭐⭐⭐
- **With loops**: Loop 4 [Move, Move] = Same result, cleaner code!
- **With unnecessary jump**: 6 Moves + 1 Jump = 6% + 3% = 9% used = 91% = ⭐⭐⭐

### Advanced Strategies

1. **Loop Everything**: If you see patterns (Move, Move, Move), use loops!
2. **Jump Shortcuts**: Jumping over 1 wall to save 3+ moves is worth it
3. **Sensor Efficiency**: Use "If Wall Ahead" to make one solution work for multiple mazes
4. **Count Before Coding**: Trace the path and count moves before building

## Learning Outcomes

By playing LogicLabs, you're developing:
- ✅ **Algorithmic thinking**: Breaking problems into steps
- ✅ **Pattern recognition**: Spotting repeating sequences
- ✅ **Logical reasoning**: Understanding cause and effect
- ✅ **Debugging skills**: Finding and fixing errors
- ✅ **Optimization mindset**: Making solutions more efficient
- ✅ **Persistence**: Learning from failure and trying again

These skills apply far beyond coding—they help with math, science, and everyday problem-solving!

## Need Help?

- **In-game hints**: Tap the 💡 icon after failing a level
- **Block info**: Long-press any block to see what it does
- **Tutorial replay**: Settings → Help → View Tutorial
- **Practice mode**: Replay completed levels to improve your score

Remember: Every programmer started as a beginner. Keep experimenting, and you'll become a LogicLabs master! 🚀
