import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: Number.parseInt(process.env.PORT || '4012', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  
  database: {
    url: process.env.DATABASE_URL || 'postgresql://localhost:4010/game_db',
    poolMin: Number.parseInt(process.env.DB_POOL_MIN || '10', 10),
    poolMax: Number.parseInt(process.env.DB_POOL_MAX || '100', 10),
  },
  
  redis: {
    url: process.env.REDIS_URL || 'redis://localhost:4011',
    password: process.env.REDIS_PASSWORD,
  },
  
  jwt: {
    secret: process.env.JWT_SECRET || 'default-secret-key',
    expiresIn: process.env.JWT_EXPIRES_IN || '1h',
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d',
    privateKey: process.env.JWT_PRIVATE_KEY,
    publicKey: process.env.JWT_PUBLIC_KEY,
  },
  
  session: {
    timeout: Number.parseInt(process.env.SESSION_TIMEOUT || '3600000', 10),
  },
  
  encryption: {
    secret: process.env.ENCRYPTION_SECRET || 'default-encryption-secret-key-change-in-production',
  },
};
