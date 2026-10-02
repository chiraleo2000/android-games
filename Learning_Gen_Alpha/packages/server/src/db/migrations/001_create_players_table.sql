-- Create players table with validation constraints
CREATE TABLE IF NOT EXISTS players (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username VARCHAR(20) NOT NULL UNIQUE,
  email TEXT NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  
  -- Profile fields
  display_name VARCHAR(30) NOT NULL,
  avatar_url TEXT,
  technical_skill_level INTEGER NOT NULL DEFAULT 1 CHECK (technical_skill_level >= 1 AND technical_skill_level <= 10),
  soft_skill_level INTEGER NOT NULL DEFAULT 1 CHECK (soft_skill_level >= 1 AND soft_skill_level <= 10),
  business_skill_level INTEGER NOT NULL DEFAULT 1 CHECK (business_skill_level >= 1 AND business_skill_level <= 10),
  ai_literacy_level INTEGER NOT NULL DEFAULT 1 CHECK (ai_literacy_level >= 1 AND ai_literacy_level <= 10),
  preferred_roles TEXT[] DEFAULT '{}',
  achievements UUID[] DEFAULT '{}',
  total_games_played INTEGER NOT NULL DEFAULT 0 CHECK (total_games_played >= 0),
  total_games_won INTEGER NOT NULL DEFAULT 0 CHECK (total_games_won >= 0),
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  last_login_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  
  -- Constraints
  CONSTRAINT username_format CHECK (username ~ '^[a-zA-Z0-9_]{3,20}$'),
  CONSTRAINT email_encrypted CHECK (email IS NOT NULL),
  CONSTRAINT games_won_valid CHECK (total_games_won <= total_games_played)
);

-- Create indexes for common queries
CREATE INDEX idx_players_username ON players(username);
CREATE INDEX idx_players_email ON players(email);
CREATE INDEX idx_players_created_at ON players(created_at);
CREATE INDEX idx_players_last_login_at ON players(last_login_at);

-- Add comment for documentation
COMMENT ON TABLE players IS 'Stores player account information with encrypted emails and hashed passwords';
COMMENT ON COLUMN players.email IS 'Email address encrypted at rest using AES-256';
COMMENT ON COLUMN players.password_hash IS 'Password hashed using bcrypt with cost factor 12';
