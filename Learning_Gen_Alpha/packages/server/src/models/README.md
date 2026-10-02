# Player Model Implementation

## Overview

This implementation provides the Player data model with comprehensive validation, password hashing, and email encryption as specified in Task 2.1.

## Features

### 1. Database Schema
- PostgreSQL table with UUID primary keys
- Encrypted email storage
- Bcrypt password hashing
- Skill level constraints (1-10)
- Username format validation at database level
- Indexes for common queries

### 2. Validation Rules

#### Username (Requirement 1.7)
- Length: 3-20 characters
- Format: Alphanumeric characters and underscores only
- Unique across all players

#### Email (Requirement 13.5)
- Valid email format
- Encrypted at rest using AES-256-GCM
- Unique across all players

#### Password (Requirement 1.5)
- Minimum 8 characters
- Hashed using bcrypt with cost factor 12
- Never stored or transmitted in plain text

#### Skill Levels (Requirements 1.1, 13.2)
- Technical skill level: 1-10
- Soft skill level: 1-10
- Integer values only

### 3. Security Features

#### Password Hashing
- Uses bcrypt with cost factor 12
- Automatic salt generation
- Secure password verification

#### Email Encryption
- AES-256-GCM encryption
- Random IV for each encryption
- PBKDF2 key derivation with 100,000 iterations
- Authentication tags for integrity verification

#### Input Sanitization
- XSS prevention through string sanitization
- SQL injection prevention through parameterized queries
- Maximum length enforcement

## Usage

### Creating a Player

```typescript
import { playerModel } from './models/Player';

const player = await playerModel.createPlayer({
  username: 'john_doe_123',
  email: 'john@example.com',
  password: 'securePassword123',
  displayName: 'John Doe',
  technicalSkillLevel: 5,
  softSkillLevel: 6,
});
```

### Finding a Player

```typescript
// By ID
const player = await playerModel.findById('uuid-here');

// By username
const player = await playerModel.findByUsername('john_doe_123');

// By email (searches encrypted emails)
const player = await playerModel.findByEmail('john@example.com');
```

### Verifying Credentials

```typescript
const player = await playerModel.verifyCredentials('john_doe_123', 'password');
if (player) {
  // Credentials valid
}
```

### Updating Profile

```typescript
await playerModel.updateProfile(playerId, {
  displayName: 'New Name',
  technicalSkillLevel: 7,
  preferredRoles: ['leader', 'coder'],
});
```

## Database Migration

Run migrations on server startup:

```typescript
import { runMigrations } from './db/migrate';
await runMigrations();
```

Or manually:

```bash
npm run migrate
```

## Testing

Run unit tests:

```bash
npm test
```

Run with coverage:

```bash
npm test:coverage
```

## Environment Variables

Required environment variables (see `.env.example`):

- `DATABASE_URL`: PostgreSQL connection string
- `ENCRYPTION_SECRET`: Secret key for email encryption (min 32 characters)
- `JWT_SECRET`: Secret key for JWT tokens

## Requirements Mapping

- **Requirement 1.1**: Player account creation with unique identifier ✓
- **Requirement 1.5**: Password hashing with bcrypt cost factor 12 ✓
- **Requirement 1.7**: Username constraints (3-20 alphanumeric with underscores) ✓
- **Requirement 13.2**: Input validation and sanitization ✓
- **Requirement 13.5**: Email encryption at rest ✓
