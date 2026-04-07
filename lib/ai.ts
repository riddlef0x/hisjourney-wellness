import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export interface SentimentResult {
  score: number
  label: 'positive' | 'neutral' | 'negative'
  confidence: number
}

export interface InsightResult {
  title: string
  content: string
  tips: string[]
  category: string
}

/**
 * Analyze sentiment of journal entry
 */
export async function analyzeSentiment(text: string): Promise<SentimentResult> {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        {
          role: 'system',
          content: `You are a sentiment analysis expert. Analyze the sentiment of the provided text and respond with ONLY a JSON object (no markdown, no extra text) with the following format:
{
  "score": <number between -1 and 1>,
  "label": "<positive|neutral|negative>",
  "confidence": <number between 0 and 1>
}

Where:
- score: -1 (very negative) to 1 (very positive)
- label: positive (score > 0.1), neutral (-0.1 to 0.1), or negative (score < -0.1)
- confidence: 0 to 1 indicating how confident you are in this analysis`
        },
        {
          role: 'user',
          content: text
        }
      ],
      temperature: 0.3,
      max_tokens: 200
    })

    const content = response.choices[0].message.content || '{}'
    const result = JSON.parse(content)
    
    return {
      score: (result.score + 1) / 2, // Normalize to 0-1
      label: result.label,
      confidence: result.confidence
    }
  } catch (error) {
    console.error('Sentiment analysis error:', error)
    return {
      score: 0.5,
      label: 'neutral',
      confidence: 0.5
    }
  }
}

/**
 * Generate wellness insights from journal entries
 */
export async function generateWellnessInsight(entries: Array<{
  content: string
  mood_score: number
  created_at: string
}>, insightType: 'weekly' | 'monthly' = 'weekly'): Promise<InsightResult> {
  try {
    const entrySummary = entries
      .map(e => `[Mood: ${e.mood_score}/10] "${e.content.substring(0, 100)}..."`)
      .join('\n')

    const response = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        {
          role: 'system',
          content: `You are a men's wellness coach. Analyze the provided journal entries and generate actionable wellness insights. Respond with ONLY a JSON object (no markdown) with:
{
  "title": "<insight title>",
  "content": "<2-3 paragraph wellness insight>",
  "tips": ["<tip1>", "<tip2>", "<tip3>"],
  "category": "<mental_health|fitness|relationships|career|sleep>"
}`
        },
        {
          role: 'user',
          content: `Here are the journal entries from the past ${insightType}:\n\n${entrySummary}\n\nProvide actionable wellness insights.`
        }
      ],
      temperature: 0.7,
      max_tokens: 500
    })

    const content = response.choices[0].message.content || '{}'
    return JSON.parse(content)
  } catch (error) {
    console.error('Insight generation error:', error)
    return {
      title: 'Keep Journaling',
      content: 'Continue your wellness journey by regularly documenting your experiences and emotions.',
      tips: ['Write daily', 'Track your mood', 'Reflect on patterns'],
      category: 'mental_health'
    }
  }
}

/**
 * Detect patterns and correlations in mood data
 */
export async function detectMoodPatterns(moodData: Array<{
  mood_score: number
  date: string
  exercise_done: boolean
  sleep_quality: number
  content: string
}>): Promise<{
  patterns: string[]
  correlations: Array<{ factor: string; correlation: number }>
}> {
  try {
    const dataJson = JSON.stringify(moodData, null, 2)

    const response = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        {
          role: 'system',
          content: `You are a data analyst specializing in personal wellness patterns. Analyze the provided mood data and respond with ONLY a JSON object (no markdown):
{
  "patterns": ["<pattern1>", "<pattern2>"],
  "correlations": [{"factor": "<factor>", "correlation": <-1 to 1>}]
}`
        },
        {
          role: 'user',
          content: `Analyze these mood patterns:\n${dataJson}`
        }
      ],
      temperature: 0.5,
      max_tokens: 400
    })

    const content = response.choices[0].message.content || '{}'
    return JSON.parse(content)
  } catch (error) {
    console.error('Pattern detection error:', error)
    return {
      patterns: [],
      correlations: []
    }
  }
}

/**
 * Generate personalized wellness recommendations
 */
export async function generateRecommendations(
  userProfile: { wellness_goals: string[]; fitness_level: string },
  recentMoodTrend: number
): Promise<string[]> {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        {
          role: 'system',
          content: `You are a men's wellness coach. Generate 3-5 personalized, actionable recommendations. Respond with ONLY a JSON array of strings, no markdown:
["recommendation1", "recommendation2", "recommendation3"]`
        },
        {
          role: 'user',
          content: `User Profile - Goals: ${userProfile.wellness_goals.join(', ')}, Fitness Level: ${userProfile.fitness_level}
Recent Mood Trend: ${recentMoodTrend > 0 ? 'Improving' : 'Declining'}

Generate personalized wellness recommendations.`
        }
      ],
      temperature: 0.7,
      max_tokens: 300
    })

    const content = response.choices[0].message.content || '[]'
    return JSON.parse(content)
  } catch (error) {
    console.error('Recommendation generation error:', error)
    return [
      'Continue your daily wellness practices',
      'Prioritize 7-8 hours of quality sleep',
      'Engage in physical activity 3x per week'
    ]
  }
}
