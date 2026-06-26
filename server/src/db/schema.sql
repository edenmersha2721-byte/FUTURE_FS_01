-- Schema for the portfolio contact form.
-- Run automatically by `npm run db:init`, or manually with psql.

CREATE TABLE IF NOT EXISTS contact_messages (
  id          SERIAL PRIMARY KEY,
  name        VARCHAR(120)  NOT NULL,
  email       VARCHAR(160)  NOT NULL,
  subject     VARCHAR(200),
  message     TEXT          NOT NULL,
  ip_address  VARCHAR(64),
  created_at  TIMESTAMPTZ   NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at
  ON contact_messages (created_at DESC);
