/**
 * JWT token utilities with RS256 signing
 * Implements Requirements 1.3, 1.4, 13.4
 */

import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { config } from '../config';

export interface TokenPayload {
  playerId: string;
  username: string;
  sessionId?: string;
}

export interface TokenPair {
  accessToken: string;
  refreshToken: string;
}

// Generate RSA key pair for RS256 signing
// In production, these should be loaded from secure storage
let privateKey: string;
let publicKey: string;

/**
 * Initialize RSA key pair
 */
export function initializeKeys(): void {
  if (config.jwt.privateKey && config.jwt.publicKey) {
    privateKey = config.jwt.privateKey;
    publicKey = config.jwt.publicKey;
  } else {
    // Generate keys for development
    const { privateKey: privKey, publicKey: pubKey } = crypto.generateKeyPairSync('rsa', {
      modulusLength: 2048,
      publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
      },
      privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
      },
    });
    privateKey = privKey;
    publicKey = pubKey;
  }
}

/**
 * Generates an access token (1 hour expiration)
 */
export function generateAccessToken(payload: TokenPayload): string {
  if (!privateKey) {
    initializeKeys();
  }

  return jwt.sign(payload, privateKey, {
    algorithm: 'RS256',
    expiresIn: config.jwt.expiresIn,
    issuer: 'game-server',
  } as jwt.SignOptions);
}

/**
 * Generates a refresh token (7 days expiration)
 */
export function generateRefreshToken(payload: TokenPayload): string {
  if (!privateKey) {
    initializeKeys();
  }

  return jwt.sign(payload, privateKey, {
    algorithm: 'RS256',
    expiresIn: config.jwt.refreshExpiresIn,
    issuer: 'game-server',
  } as jwt.SignOptions);
}

/**
 * Generates both access and refresh tokens
 */
export function generateTokenPair(payload: TokenPayload): TokenPair {
  return {
    accessToken: generateAccessToken(payload),
    refreshToken: generateRefreshToken(payload),
  };
}

/**
 * Verifies and decodes a token
 */
export function verifyToken(token: string): TokenPayload {
  if (!publicKey) {
    initializeKeys();
  }

  try {
    const decoded = jwt.verify(token, publicKey, {
      algorithms: ['RS256'],
      issuer: 'game-server',
    } as jwt.VerifyOptions) as TokenPayload;
    
    return decoded;
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      throw new Error('Token has expired');
    }
    if (error instanceof jwt.JsonWebTokenError) {
      throw new Error('Invalid token');
    }
    throw error;
  }
}

/**
 * Extracts token from Authorization header
 */
export function extractTokenFromHeader(authHeader: string | undefined): string | null {
  if (!authHeader) {
    return null;
  }

  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return null;
  }

  return parts[1];
}
