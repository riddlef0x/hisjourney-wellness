'use client'

import Link from 'next/link'
import { useState } from 'react'

const articles = [
  {
    id: '1',
    title: 'The Science of Sleep: Why Rest is Your Secret Weapon',
    category: 'fitness',
    excerpt: 'Sleep is not a luxury—it\'s a necessity. Learn how proper sleep improves your mood, productivity, and overall wellness.',
    readTime: 5,
    image: '😴'
  },
  {
    id: '2',
    title: 'Managing Stress in the Modern World',
    category: 'mental_health',
    excerpt: 'Stress is inevitable, but how you handle it makes all the difference. Discover proven techniques for stress management.',
    readTime: 7,
    image: '🧘'
  },
  {
    id: '3',
    title: 'Building Better Relationships with Emotional Intelligence',
    category: 'relationships',
    excerpt: 'Emotional intelligence is the key to deeper, more meaningful relationships. Learn how to develop this crucial skill.',
    readTime: 8,
    image: '💙'
  },
  {
    id: '4',
    title: 'Career Transitions: Finding Purpose in Your Work',
    category: 'career',
    excerpt: 'Struggling with career satisfaction? Explore how to find work that aligns with your values and goals.',
    readTime: 10,
    image: '🚀'
  },
  {
    id: '5',
    title: 'Financial Wellness: Building a Strong Foundation',
    category: 'finance',
    excerpt: 'Money matters deeply affect your wellness. Learn strategies for financial health and security.',
    readTime: 9,
    image: '💰'
  },
  {
    id: '6',
    title: 'Personal Growth: The Power of Small Habits',
    category: 'personal_growth',
    excerpt: 'Big changes start with small habits. Discover how to build habits that transform your life.',
    readTime: 6,
    image: '📈'
  }
]

const categories = [
  { id: 'all', name: 'All Articles', count: 6 },
  { id: 'mental_health', name: 'Mental Health', count: 2 },
  { id: 'fitness', name: 'Fitness', count: 1 },
  { id: 'relationships', name: 'Relationships', count: 1 },
  { id: 'career', name: 'Career', count: 1 },
  { id: 'finance', name: 'Finance', count: 1 },
  { id: 'personal_growth', name: 'Personal Growth', count: 1 }
]

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredArticles = articles.filter(article => {
    const matchCategory = selectedCategory === 'all' || article.category === selectedCategory
    const matchSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">🧘 HisJourney</Link>
          <nav className="flex items-center gap-6">
            <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
            <Link href="/profile" className="text-gray-600 hover:text-gray-900">Profile</Link>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">Logout</button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Wellness Hub</h1>
          <p className="text-gray-600">Expert insights and guides for your wellness journey</p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <input
            type="search"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar - Categories */}
          <div>
            <h2 className="font-bold text-gray-900 mb-4">Categories</h2>
            <div className="space-y-2">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition ${
                    selectedCategory === cat.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <span className="font-medium">{cat.name}</span>
                  <span className="text-sm ml-2">({cat.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            {filteredArticles.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">No articles found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all')
                    setSearchQuery('')
                  }}
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredArticles.map(article => (
                  <article key={article.id} className="card hover:shadow-md transition cursor-pointer">
                    <div className="flex gap-4">
                      <div className="text-4xl flex-shrink-0">{article.image}</div>
                      <div className="flex-1">
                        <p className="text-sm text-blue-600 font-semibold mb-1">
                          {article.category.replace('_', ' ').toUpperCase()}
                        </p>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 mb-3">{article.excerpt}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">{article.readTime} min read</span>
                          <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
                            Read Article →
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Featured Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { emoji: '📊', title: 'Mood Tracking Guide', desc: 'Learn how to track your emotions effectively' },
              { emoji: '🎯', title: 'Goal Setting Framework', desc: 'Set achievable wellness goals' },
              { emoji: '💪', title: 'Exercise Basics', desc: 'Start your fitness journey today' }
            ].map((resource, i) => (
              <div key={i} className="card text-center hover:shadow-md transition">
                <div className="text-4xl mb-3">{resource.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.desc}</p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
