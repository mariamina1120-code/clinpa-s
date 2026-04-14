-- ============================================================
-- ClinicalYear — Initial Schema with HIPAA-Compliant RLS
-- Run via: supabase db push
-- ============================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ─── Profiles ────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS profiles (
  id                        UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email                     TEXT NOT NULL,
  full_name                 TEXT,
  program_name              TEXT,
  graduation_year           INTEGER,
  hipaa_acknowledged_at     TIMESTAMPTZ,
  inactivity_timeout_minutes INTEGER NOT NULL DEFAULT 15,
  mfa_enabled               BOOLEAN NOT NULL DEFAULT FALSE,
  created_at                TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at                TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "profiles: users can view own" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "profiles: users can update own" ON profiles
  FOR UPDATE USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

CREATE POLICY "profiles: insert own on signup" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- ─── User Modules (purchased rotations) ──────────────────────────────────────
CREATE TABLE IF NOT EXISTS user_modules (
  id                UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id           UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  rotation_slug     TEXT NOT NULL,
  has_paper_tools   BOOLEAN NOT NULL DEFAULT FALSE,
  purchased_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  stripe_payment_id TEXT NOT NULL,
  stripe_session_id TEXT,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, rotation_slug)
);

ALTER TABLE user_modules ENABLE ROW LEVEL SECURITY;

CREATE POLICY "user_modules: users can view own" ON user_modules
  FOR SELECT USING (auth.uid() = user_id);

-- Only service role can insert/update (via webhook)
CREATE POLICY "user_modules: service role insert" ON user_modules
  FOR INSERT WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "user_modules: service role update" ON user_modules
  FOR UPDATE USING (auth.role() = 'service_role');

-- ─── Charts (PHI — strictest RLS) ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS charts (
  id               UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id          UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  rotation_slug    TEXT NOT NULL,
  chief_complaint  TEXT,
  encounter_date   DATE NOT NULL DEFAULT CURRENT_DATE,
  soap_data        JSONB NOT NULL DEFAULT '{}',
  notes            TEXT,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE charts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "charts: users can view own" ON charts
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "charts: users can insert own" ON charts
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "charts: users can update own" ON charts
  FOR UPDATE USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE POLICY "charts: users can delete own" ON charts
  FOR DELETE USING (auth.uid() = user_id);

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER charts_updated_at
  BEFORE UPDATE ON charts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ─── Case Logs ────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS case_logs (
  id                  UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id             UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  rotation_slug       TEXT NOT NULL,
  encounter_date      DATE NOT NULL DEFAULT CURRENT_DATE,
  patient_age_group   TEXT NOT NULL,
  patient_gender      TEXT NOT NULL,
  chief_complaint     TEXT NOT NULL,
  diagnosis_category  TEXT NOT NULL,
  encounter_type      TEXT NOT NULL,
  preceptor_name      TEXT,
  created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE case_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "case_logs: users can view own" ON case_logs
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "case_logs: users can insert own" ON case_logs
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "case_logs: users can update own" ON case_logs
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "case_logs: users can delete own" ON case_logs
  FOR DELETE USING (auth.uid() = user_id);

-- ─── Quiz Attempts ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS quiz_attempts (
  id                  UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id             UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  rotation_slug       TEXT NOT NULL,
  question_id         TEXT NOT NULL,
  selected_answer     TEXT NOT NULL,
  is_correct          BOOLEAN NOT NULL,
  time_taken_seconds  INTEGER,
  created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE quiz_attempts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "quiz_attempts: users can view own" ON quiz_attempts
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "quiz_attempts: users can insert own" ON quiz_attempts
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- ─── Procedure Progress ───────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS procedure_progress (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id         UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  rotation_slug   TEXT NOT NULL,
  procedure_name  TEXT NOT NULL,
  is_completed    BOOLEAN NOT NULL DEFAULT FALSE,
  completed_at    TIMESTAMPTZ,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, rotation_slug, procedure_name)
);

ALTER TABLE procedure_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "procedure_progress: users can view own" ON procedure_progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "procedure_progress: users can insert own" ON procedure_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "procedure_progress: users can update own" ON procedure_progress
  FOR UPDATE USING (auth.uid() = user_id);

-- ─── HIPAA Audit Log ──────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS audit_log (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id     UUID REFERENCES profiles(id) ON DELETE SET NULL,
  action      TEXT NOT NULL CHECK (action IN ('read', 'create', 'update', 'delete')),
  table_name  TEXT NOT NULL,
  record_id   UUID,
  ip_address  TEXT,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE audit_log ENABLE ROW LEVEL SECURITY;

-- Only service role can write; users cannot read or modify audit logs
CREATE POLICY "audit_log: service role insert" ON audit_log
  FOR INSERT WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "audit_log: users can view own" ON audit_log
  FOR SELECT USING (auth.uid() = user_id);

-- ─── Indexes ──────────────────────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_user_modules_user_id ON user_modules(user_id);
CREATE INDEX IF NOT EXISTS idx_charts_user_id ON charts(user_id);
CREATE INDEX IF NOT EXISTS idx_charts_rotation ON charts(user_id, rotation_slug);
CREATE INDEX IF NOT EXISTS idx_case_logs_user_id ON case_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_case_logs_rotation ON case_logs(user_id, rotation_slug);
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_user_rotation ON quiz_attempts(user_id, rotation_slug);
CREATE INDEX IF NOT EXISTS idx_audit_log_user_id ON audit_log(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_log_created_at ON audit_log(created_at);

-- ─── Auto-create profile on signup ───────────────────────────────────────────
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', '')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();
