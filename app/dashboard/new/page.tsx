'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function NewEntry() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [mood, setMood] = useState(5)
  const [category, setCategory] = useState('')
  const [tags, setTags] = useState('')
  const [isPrivate, setIsPrivate] = useState(true)
  const [loading, setLoading] = useState(false)
  const [saved, setSaved] = useState(false)

  const moodEmojis = ['😢', '😔', '😐', '🙂', '😊', '😄', '😍', '🤩', '🚀', '💪']

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSaved(true)
      
      // Reset form
      setTimeout(() => {
        setTitle('')
        setContent('')
        setMood(5)
        setCategory('')
        setTags('')
        setSaved(false)
      }, 2000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">🧘 HisJourney</Link>
          <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">Back to Dashboard</Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">New Journal Entry</h1>
          <p className="text-gray-600">Share your thoughts, feelings, and experiences</p>
        </div>

        {saved && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6">
            ✅ Entry saved successfully! Your AI wellness coach is analyzing your entry.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Entry Title (optional)
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Great day at work, Feeling reflective..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              What's on your mind?
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write freely. Your thoughts, feelings, experiences. No judgment here..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent min-h-64"
              required
            />
            <p className="text-sm text-gray-500 mt-1">{content.length} characters</p>
          </div>

          {/* Mood Slider */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-4">
              How are you feeling today?
            </label>
            <div className="space-y-4">
              <input
                type="range"
                min="1"
                max="10"
                value={mood}
                onChange={(e) => setMood(parseInt(e.target.value))}
                className="w-full h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between items-center">
                <span className="text-4xl">{moodEmojis[mood - 1]}</span>
                <span className="text-2xl font-bold text-blue-600">{mood}/10</span>
              </div>
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            >
              <option value="">Select a category</option>
              <option value="mental_health">Mental Health</option>
              <option value="fitness">Fitness</option>
              <option value="relationships">Relationships</option>
              <option value="career">Career</option>
              <option value="finance">Finance</option>
              <option value="personal_growth">Personal Growth</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Tags (comma-separated, max 5)
            </label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="e.g., productivity, wellness, family"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>

          {/* Privacy Settings */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={isPrivate}
                onChange={(e) => setIsPrivate(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded"
              />
              <span className="text-sm font-medium text-gray-900">
                Keep this entry private
              </span>
            </label>
            <p className="text-xs text-gray-600 mt-2 ml-7">
              Only you can see this entry. AI analysis happens regardless of privacy setting.
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading || !content}
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? 'Saving...' : '💾 Save Entry'}
            </button>
            <Link href="/dashboard" className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
              Cancel
            </Link>
          </div>
        </form>

        {/* Tips Section */}
        <div className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="font-bold text-gray-900 mb-3">💡 Tips for Better Journal Entries</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Be honest and authentic - this is your space</li>
            <li>• Include specific examples and details</li>
            <li>• Note what you're feeling, not just what happened</li>
            <li>• Reflect on lessons and insights</li>
            <li>• Accuracy helps AI provide better recommendations</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
