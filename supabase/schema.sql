-- HisJourney Wellness Platform - Database Schema
-- PostgreSQL / Supabase

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- User Profiles
CREATE TABLE IF NOT EXISTS public.users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  age INTEGER,
  wellness_goals TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Wellness Profile Settings
CREATE TABLE IF NOT EXISTS public.wellness_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL UNIQUE,
  fitness_level VARCHAR(50) DEFAULT 'moderate',
  mental_health_focus TEXT[],
  sleep_target INTEGER DEFAULT 8,
  exercise_frequency VARCHAR(50),
  wellness_score DECIMAL(3,1) DEFAULT 5.0,
  streak_days INTEGER DEFAULT 0,
  total_entries INTEGER DEFAULT 0,
  last_entry_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
  FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE
);

-- Journal Entries
CREATE TABLE IF NOT EXISTS public.entries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL,
  title TEXT,
  content TEXT NOT NULL,
  mood_score INTEGER CHECK (mood_score >= 1 AND mood_score <= 10),
  mood_emoji VARCHAR(2),
  categories TEXT[],
  tags TEXT[],
  is_private BOOLEAN DEFAULT TRUE,
  sentiment_score DECIMAL(3,2),
  sentiment_label VARCHAR(20),
  energy_level INTEGER CHECK (energy_level >= 1 AND energy_level <= 10),
  sleep_quality INTEGER CHECK (sleep_quality >= 1 AND sleep_quality <= 10),
  exercise_done BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
  FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE
);

-- Entry Media (Photos, Voice Notes)
CREATE TABLE IF NOT EXISTS public.entry_media (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  entry_id UUID NOT NULL,
  media_type VARCHAR(20) NOT NULL,
  url TEXT NOT NULL,
  file_name TEXT,
  file_size INTEGER,
  transcription TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
  FOREIGN KEY (entry_id) REFERENCES public.entries(id) ON DELETE CASCADE
);

-- Wellness Insights (AI Generated)
CREATE TABLE IF NOT EXISTS public.wellness_insights (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL,
  insight_type VARCHAR(50) NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category VARCHAR(50),
  confidence_score DECIMAL(3,2),
  actionable_tips TEXT[],
  generated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
  FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE
);

-- Mood Patterns Analysis
CREATE TABLE IF NOT EXISTS public.mood_patterns (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL,
  pattern_type VARCHAR(50) NOT NULL,
  day_of_week VARCHAR(10),
  average_mood DECIMAL(3,1),
  correlation_factor VARCHAR(100),
  confidence_score DECIMAL(3,2),
  detected_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
  FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE
);

-- Wellness Articles & Content
CREATE TABLE IF NOT EXISTS public.articles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  category VARCHAR(50) NOT NULL,
  tags TEXT[],
  featured_image TEXT,
  author_name VARCHAR(100),
  author_bio TEXT,
  read_time_minutes INTEGER,
  published BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Wellness Recommendations
CREATE TABLE IF NOT EXISTS public.recommendations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL,
  recommendation_type VARCHAR(50) NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  action_url TEXT,
  priority INTEGER DEFAULT 0,
  is_completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
  FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE
);

-- Share Tokens (for sharing entries/insights)
CREATE TABLE IF NOT EXISTS public.share_tokens (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL,
  content_id UUID NOT NULL,
  content_type VARCHAR(50) NOT NULL,
  token TEXT UNIQUE NOT NULL,
  view_count INTEGER DEFAULT 0,
  expires_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
  FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE
);

-- Activity Log (for insights)
CREATE TABLE IF NOT EXISTS public.activity_log (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL,
  activity_type VARCHAR(50) NOT NULL,
  details JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
  FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE
);

-- Index Creation for Performance
CREATE INDEX IF NOT EXISTS idx_entries_user_id ON public.entries(user_id);
CREATE INDEX IF NOT EXISTS idx_entries_created_at ON public.entries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_entries_mood_score ON public.entries(mood_score);
CREATE INDEX IF NOT EXISTS idx_wellness_profiles_user_id ON public.wellness_profiles(user_id);
CREATE INDEX IF NOT EXISTS idx_wellness_insights_user_id ON public.wellness_insights(user_id);
CREATE INDEX IF NOT EXISTS idx_mood_patterns_user_id ON public.mood_patterns(user_id);
CREATE INDEX IF NOT EXISTS idx_articles_slug ON public.articles(slug);
CREATE INDEX IF NOT EXISTS idx_articles_category ON public.articles(category);
CREATE INDEX IF NOT EXISTS idx_share_tokens_token ON public.share_tokens(token);
CREATE INDEX IF NOT EXISTS idx_activity_log_user_id ON public.activity_log(user_id);

-- Enable Row Level Security
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wellness_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.entry_media ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wellness_insights ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mood_patterns ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.recommendations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.share_tokens ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activity_log ENABLE ROW LEVEL SECURITY;

-- RLS Policies for Users
CREATE POLICY "Users can view own profile" ON public.users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.users
  FOR UPDATE USING (auth.uid() = id);

-- RLS Policies for Entries
CREATE POLICY "Users can view own entries" ON public.entries
  FOR SELECT USING (auth.uid() = user_id OR NOT is_private);

CREATE POLICY "Users can create entries" ON public.entries
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own entries" ON public.entries
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own entries" ON public.entries
  FOR DELETE USING (auth.uid() = user_id);

-- RLS Policies for Wellness Insights
CREATE POLICY "Users can view own insights" ON public.wellness_insights
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own insights" ON public.wellness_insights
  FOR DELETE USING (auth.uid() = user_id);

-- RLS Policies for Articles (Public Read)
CREATE POLICY "Anyone can read published articles" ON public.articles
  FOR SELECT USING (published = TRUE);

-- Create function to auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc'::text, NOW());
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Attach update triggers
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON public.users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_entries_updated_at BEFORE UPDATE ON public.entries
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_wellness_profiles_updated_at BEFORE UPDATE ON public.wellness_profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_articles_updated_at BEFORE UPDATE ON public.articles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
