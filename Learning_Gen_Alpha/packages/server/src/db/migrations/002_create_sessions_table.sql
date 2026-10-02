-- Create sessions table for game session management
-- Implements Requirements 2.1, 2.3

CREATE TABLE IF NOT EXISTS sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  join_code VARCHAR(6) NOT NULL UNIQUE,
  host_player_id UUID NOT NULL REFERENCES players(id) ON DELETE CASCADE,
  state VARCHAR(20) NOT NULL CHECK (state IN ('WAITING', 'READY', 'IN_PROGRESS', 'PAUSED', 'COMPLETED', 'ABANDONED')),
  
  -- Settings
  min_players INTEGER NOT NULL DEFAULT 2 CHECK (min_players >= 2 AND min_players <= 5),
  max_players INTEGER NOT NULL DEFAULT 5 CHECK (max_players >= 2 AND max_players <= 5),
  difficulty INTEGER NOT NULL DEFAULT 1 CHECK (difficulty >= 1 AND difficulty <= 5),
  activity_types TEXT[] DEFAULT '{}',
  time_limit INTEGER CHECK (time_limit IS NULL OR time_limit > 0),
  allow_hints BOOLEAN NOT NULL DEFAULT true,
  
  -- Activity tracking
  current_activity UUID,
  activity_history UUID[] DEFAULT '{}',
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  started_at TIMESTAMP WITH TIME ZONE,
  ended_at TIMESTAMP WITH TIME ZONE,
  
  -- Constraints
  CONSTRAINT valid_player_range CHECK (min_players <= max_players),
  CONSTRAINT valid_state_transitions CHECK (
    (state = 'WAITING' AND started_at IS NULL AND ended_at IS NULL) OR
    (state = 'READY' AND started_at IS NULL AND ended_at IS NULL) OR
    (state = 'IN_PROGRESS' AND started_at IS NOT NULL AND ended_at IS NULL) OR
    (state = 'PAUSED' AND started_at IS NOT NULL AND ended_at IS NULL) OR
    (state = 'COMPLETED' AND started_at IS NOT NULL AND ended_at IS NOT NULL) OR
    (state = 'ABANDONED' AND ended_at IS NOT NULL)
  )
);

-- Create session_players junction table for many-to-many relationship
CREATE TABLE IF NOT EXISTS session_players (
  session_id UUID NOT NULL REFERENCES sessions(id) ON DELETE CASCADE,
  player_id UUID NOT NULL REFERENCES players(id) ON DELETE CASCADE,
  joined_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  is_connected BOOLEAN NOT NULL DEFAULT true,
  assigned_role VARCHAR(100),
  score INTEGER NOT NULL DEFAULT 0 CHECK (score >= 0),
  
  PRIMARY KEY (session_id, player_id)
);

-- Create indexes for common queries
CREATE INDEX idx_sessions_join_code ON sessions(join_code);
CREATE INDEX idx_sessions_state ON sessions(state);
CREATE INDEX idx_sessions_host_player_id ON sessions(host_player_id);
CREATE INDEX idx_sessions_created_at ON sessions(created_at);
CREATE INDEX idx_sessions_started_at ON sessions(started_at);

CREATE INDEX idx_session_players_session_id ON session_players(session_id);
CREATE INDEX idx_session_players_player_id ON session_players(player_id);
CREATE INDEX idx_session_players_joined_at ON session_players(joined_at);

-- Create unique index for active session join codes
-- This ensures join codes are unique only for non-completed/non-abandoned sessions
CREATE UNIQUE INDEX idx_active_session_join_codes 
  ON sessions(join_code) 
  WHERE state IN ('WAITING', 'READY', 'IN_PROGRESS', 'PAUSED');

-- Add comments for documentation
COMMENT ON TABLE sessions IS 'Stores game session information and settings';
COMMENT ON TABLE session_players IS 'Junction table tracking players in each session with their roles and scores';
COMMENT ON COLUMN sessions.join_code IS 'Unique 6-character alphanumeric code for joining the session';
COMMENT ON COLUMN sessions.state IS 'Current state of the session (WAITING, READY, IN_PROGRESS, PAUSED, COMPLETED, ABANDONED)';
COMMENT ON COLUMN sessions.time_limit IS 'Optional time limit for the session in seconds';
