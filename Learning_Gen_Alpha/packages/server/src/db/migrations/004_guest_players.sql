-- Add guest player support (nickname-only login, no email/password required)
ALTER TABLE players
  ALTER COLUMN email DROP NOT NULL,
  ALTER COLUMN password_hash DROP NOT NULL;

ALTER TABLE players
  ADD COLUMN IF NOT EXISTS is_guest BOOLEAN NOT NULL DEFAULT FALSE;

-- Remove the not-null email check so guests can have a NULL email
ALTER TABLE players
  DROP CONSTRAINT IF EXISTS email_encrypted;

COMMENT ON COLUMN players.is_guest IS 'TRUE for nickname-only guest players (no email/password)';
