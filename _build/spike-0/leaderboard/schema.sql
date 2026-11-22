CREATE TABLE IF NOT EXISTS scores (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  initials TEXT NOT NULL,
  score INTEGER NOT NULL,
  shifts INTEGER NOT NULL,
  seconds INTEGER NOT NULL,
  device TEXT NOT NULL,
  created_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_scores_score ON scores (score DESC);
CREATE INDEX IF NOT EXISTS idx_scores_device ON scores (device, created_at);
