# Authentication API

This document describes the authentication endpoints for the multiplayer puzzle adventure game.

## Endpoints

### POST /auth/register

Creates a new player account.

**Rate Limit:** 5 requests per hour per IP

**Request Body:**
```json
{
  "username": "string (3-20 alphanumeric characters with underscores)",
  "email": "string (valid email format)",
  "password": "string (minimum 8 characters)",
  "displayName": "string (optional, 1-30 characters)"
}
```

**Success Response (201):**
```json
{
  "message": "Registration successful",
  "playerId": "uuid",
  "username": "string",
  "accessToken": "string (JWT, expires in 1 hour)",
  "refreshToken": "string (JWT, expires in 7 days)"
}
```

**Error Responses:**
- `400 Bad Request`: Validation failed or username/email already exists
- `429 Too Many Requests`: Rate limit exceeded
- `500 Internal Server Error`: Server error

**Requirements Implemented:**
- 1.1: Create player account with unique identifier
- 1.2: Reject duplicate username/email
- 1.5: Hash passwords with bcrypt cost factor 12
- 1.7: Enforce username constraints
- 13.5: Encrypt email addresses at rest

---

### POST /auth/login

Authenticates a player and returns JWT tokens.

**Rate Limit:** 10 requests per 15 minutes per IP

**Request Body:**
```json
{
  "username": "string",
  "password": "string"
}
```

**Success Response (200):**
```json
{
  "message": "Login successful",
  "playerId": "uuid",
  "username": "string",
  "accessToken": "string (JWT, expires in 1 hour)",
  "refreshToken": "string (JWT, expires in 7 days)"
}
```

**Error Responses:**
- `400 Bad Request`: Missing username or password
- `401 Unauthorized`: Invalid credentials
- `423 Locked`: Account locked due to too many failed attempts
- `429 Too Many Requests`: Rate limit exceeded
- `500 Internal Server Error`: Server error

**Account Lockout:**
- After 5 failed login attempts within 15 minutes, the account is locked for 15 minutes
- Successful login clears failed attempt counter

**Requirements Implemented:**
- 1.3: Authenticate player and return session token
- 13.4: Lock account after 5 failed attempts within 15 minutes

---

### POST /auth/refresh

Refreshes an access token using a refresh token.

**Rate Limit:** 20 requests per hour per IP

**Request Body:**
```json
{
  "refreshToken": "string (valid JWT refresh token)"
}
```

**Success Response (200):**
```json
{
  "message": "Token refreshed successfully",
  "accessToken": "string (JWT, expires in 1 hour)",
  "refreshToken": "string (JWT, expires in 7 days)"
}
```

**Error Responses:**
- `400 Bad Request`: Missing refresh token
- `401 Unauthorized`: Invalid or expired token
- `429 Too Many Requests`: Rate limit exceeded
- `500 Internal Server Error`: Server error

**Requirements Implemented:**
- 1.4: Reject expired or invalid tokens

---

## Authentication

All protected endpoints require a valid JWT access token in the Authorization header:

```
Authorization: Bearer <access_token>
```

## Token Details

### Access Token
- **Algorithm:** RS256 (RSA with SHA-256)
- **Expiration:** 1 hour
- **Payload:**
  ```json
  {
    "playerId": "uuid",
    "username": "string",
    "sessionId": "uuid (optional)",
    "iss": "game-server",
    "exp": "timestamp",
    "iat": "timestamp"
  }
  ```

### Refresh Token
- **Algorithm:** RS256 (RSA with SHA-256)
- **Expiration:** 7 days
- **Payload:** Same as access token

## Security Features

1. **Password Hashing:** Bcrypt with cost factor 12
2. **Email Encryption:** AES-256-GCM encryption at rest
3. **Rate Limiting:** IP-based rate limiting on all endpoints
4. **Account Lockout:** Automatic lockout after 5 failed login attempts
5. **JWT Signing:** RS256 algorithm with RSA key pair
6. **Input Validation:** All inputs validated against defined schemas
7. **XSS Prevention:** String sanitization on all text inputs

## Error Handling

All error responses follow this format:

```json
{
  "error": "Error type",
  "message": "Detailed error message",
  "retryAfter": "number (optional, for rate limiting)"
}
```

## Testing

Run authentication tests:
```bash
npm test -- authController.test.ts
npm test -- authRoutes.integration.test.ts
```

## Environment Variables

Required environment variables:

```env
# JWT Configuration
JWT_PRIVATE_KEY=<RSA private key in PEM format>
JWT_PUBLIC_KEY=<RSA public key in PEM format>
JWT_EXPIRES_IN=1h
JWT_REFRESH_EXPIRES_IN=7d

# Encryption
ENCRYPTION_SECRET=<secret key for email encryption>

# Redis (for rate limiting and account lockout)
REDIS_URL=redis://localhost:6379
REDIS_PASSWORD=<optional>

# Database
DATABASE_URL=postgresql://localhost:5432/game_db
```

**Note:** If JWT keys are not provided, they will be generated automatically on server start (development only).
