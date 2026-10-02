# Multiplayer Puzzle Adventure Game

A collaborative multiplayer gaming platform where 2-5 players work together to solve puzzles and progress through adventure scenarios in an immersive 3D environment.

## Project Structure

This is a monorepo containing three packages:

```
multiplayer-puzzle-adventure-game/
├── packages/
│   ├── server/          # Backend API and WebSocket server
│   ├── client/          # Three.js web client
│   └── shared/          # Shared TypeScript types and utilities
├── package.json         # Root package configuration
└── tsconfig.json        # Root TypeScript configuration
```

## Technology Stack

- **Backend**: Express.js, Socket.io, PostgreSQL, Redis
- **Frontend**: Three.js, Vite
- **Language**: TypeScript with strict type checking
- **Package Manager**: npm workspaces

## Prerequisites

- Node.js 18+
- PostgreSQL 14+
- Redis 7.0+

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

Copy the example environment file in the server package:

```bash
cp packages/server/.env.example packages/server/.env
```

Edit `packages/server/.env` with your database and Redis credentials.

### 3. Build Packages

```bash
npm run build
```

### 4. Run Development Servers

Start all packages in development mode:

```bash
npm run dev
```

Or run individual packages:

```bash
# Server only
cd packages/server && npm run dev

# Client only
cd packages/client && npm run dev
```

## Package Details

### @game/server

Backend server with:
- Express.js REST API
- Socket.io WebSocket server
- PostgreSQL client with connection pooling
- Redis client for session state caching
- Environment configuration management

**Port**: 3000 (default)

### @game/client

Frontend client with:
- Three.js 3D rendering
- Socket.io client for real-time communication
- Vite for fast development and building

**Port**: 5173 (default)

### @game/shared

Shared TypeScript types:
- Player
- GameSession
- Activity
- ChatMessage

## Core Type Definitions

The shared package includes core type definitions for:

- **Player**: User authentication and profile management
- **GameSession**: Game session state and player management
- **Activity**: Puzzle and challenge definitions
- **ChatMessage**: Real-time communication messages

## Development

### Building

```bash
npm run build
```

### Testing

```bash
npm run test
```

### Linting

```bash
npm run lint
```

### Cleaning

```bash
npm run clean
```

## Architecture

The system follows a client-server architecture with real-time bidirectional communication:

- **Client**: Three.js renders 3D environment, Socket.io handles real-time updates
- **Server**: Express.js handles HTTP requests, Socket.io manages WebSocket connections
- **Database**: PostgreSQL stores persistent data (players, sessions, activities)
- **Cache**: Redis caches session state for fast access

## Next Steps

1. Set up database schema and migrations
2. Implement authentication service
3. Implement game session management
4. Implement WebSocket event handlers
5. Build 3D game environment with Three.js
6. Implement activity generation system
7. Add chat functionality
8. Implement progress tracking

## License

MIT
