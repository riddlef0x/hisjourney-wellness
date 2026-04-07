'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Dashboard() {
  const [entries, setEntries] = useState<any[]>([])
  const [wellnessScore, _setWellnessScore] = useState(7.2)
  const [currentMood, _setCurrentMood] = useState(7)
  const [insights, setInsights] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulated data - would be replaced with real API calls
    setEntries([
      {
        id: '1',
        date: 'Today',
        title: 'Great workout session',
        mood: 8,
        excerpt: 'Had an amazing gym session today, feeling energized and focused...',
        tags: ['fitness', 'motivation']
      },
      {
        id: '2',
        date: 'Yesterday',
        title: 'Stressful meeting',
        mood: 5,
        excerpt: 'Work was challenging today, need to work on stress management...',
        tags: ['work', 'stress']
      }
    ])

    setInsights([
      {
        title: 'Exercise Boosts Your Mood',
        description: 'You\'ve noticed a +1.5 mood improvement on days you exercise.',
        icon: '💪'
      },
      {
        title: 'Sleep Quality Matters',
        description: 'Your mood drops by 1.2 points when you sleep less than 6 hours.',
        icon: '😴'
      }
    ])

    setLoading(false)
  }, [])

  const moodEmoji = (score: number) => {
    if (score >= 8) return '😄'
    if (score >= 6) return '🙂'
    if (score >= 4) return '😐'
    if (score >= 2) return '😔'
    return '😢'
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your wellness dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">🧘 HisJourney</div>
          <nav className="flex items-center gap-6">
            <a href="/articles" className="text-gray-600 hover:text-gray-900">Wellness Hub</a>
            <a href="/profile" className="text-gray-600 hover:text-gray-900">Profile</a>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">Logout</button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome back, Marcus!</h1>
          <p className="text-gray-600">It's Tuesday, April 7, 2026 • Let's continue your wellness journey</p>
        </div>

        {/* Quick Action */}
        <div className="mb-8">
          <Link href="/dashboard/new" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            ✍️ New Journal Entry
          </Link>
        </div>

        {/* Top Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Wellness Score */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-gray-600 text-sm font-medium">Wellness Score</p>
                <p className="text-4xl font-bold text-blue-600">{wellnessScore}</p>
                <p className="text-green-600 text-sm">↑ +0.4 this week</p>
              </div>
              <div className="text-5xl">📊</div>
            </div>
          </div>

          {/* Current Mood */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-gray-600 text-sm font-medium">Current Mood</p>
                <p className="text-4xl font-bold text-green-600">{currentMood}/10</p>
                <p className="text-gray-600 text-sm">Optimistic</p>
              </div>
              <div className="text-5xl">{moodEmoji(currentMood)}</div>
            </div>
          </div>

          {/* Streak */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-gray-600 text-sm font-medium">Entry Streak</p>
                <p className="text-4xl font-bold text-orange-600">7</p>
                <p className="text-gray-600 text-sm">days in a row</p>
              </div>
              <div className="text-5xl">🔥</div>
            </div>
          </div>
        </div>

        {/* AI Insights */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your AI Wellness Insights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {insights.map((insight, i) => (
              <div key={i} className="card border-l-4 border-blue-600">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{insight.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{insight.title}</h3>
                    <p className="text-gray-600 text-sm">{insight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Entries */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Recent Entries</h2>
            <Link href="/dashboard/entries" className="text-blue-600 hover:text-blue-700 font-semibold">View All</Link>
          </div>

          <div className="space-y-4">
            {entries.map((entry) => (
              <div key={entry.id} className="card hover:shadow-md transition">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-sm text-gray-500">{entry.date}</p>
                    <h3 className="text-lg font-bold text-gray-900">{entry.title}</h3>
                  </div>
                  <div className="text-3xl">{moodEmoji(entry.mood)}</div>
                </div>
                <p className="text-gray-600 text-sm mb-3">{entry.excerpt}</p>
                <div className="flex gap-2 flex-wrap">
                  {entry.tags.map((tag: string) => (
                    <span key={tag} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Personalized Recommendations</h2>
          <div className="card bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="text-2xl flex-shrink-0">🧘</div>
                <div>
                  <p className="font-semibold text-gray-900">Daily Meditation</p>
                  <p className="text-gray-600 text-sm">10 minutes can improve your mood by 15%</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-2xl flex-shrink-0">🏃</div>
                <div>
                  <p className="font-semibold text-gray-900">Weekly Exercise</p>
                  <p className="text-gray-600 text-sm">Aim for 3-4 sessions to maintain your wellness score</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-2xl flex-shrink-0">😴</div>
                <div>
                  <p className="font-semibold text-gray-900">Sleep Optimization</p>
                  <p className="text-gray-600 text-sm">Target 7-8 hours for optimal mental health</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
