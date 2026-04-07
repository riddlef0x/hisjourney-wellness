import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseKey)

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          bio: string | null
          created_at: string
          updated_at: string
        }
      }
      entries: {
        Row: {
          id: string
          user_id: string
          title: string | null
          content: string
          mood_score: number
          mood_emoji: string | null
          categories: string[] | null
          tags: string[] | null
          is_private: boolean
          sentiment_score: number | null
          sentiment_label: string | null
          energy_level: number | null
          sleep_quality: number | null
          exercise_done: boolean | null
          created_at: string
          updated_at: string
        }
      }
      wellness_insights: {
        Row: {
          id: string
          user_id: string
          insight_type: string
          title: string
          content: string
          category: string | null
          confidence_score: number | null
          actionable_tips: string[] | null
          generated_at: string
        }
      }
    }
  }
}
