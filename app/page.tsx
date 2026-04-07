'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function HomePage() {
  const [_email, _setEmail] = useState('')

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">🧘 HisJourney</div>
          <div className="space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-gray-900">Login</Link>
            <Link href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Sign Up</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Your Wellness Journey<br />Powered by AI
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Track your mood, journal your thoughts, and get personalized wellness insights from an AI wellness coach designed for modern men.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/signup" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition">
            Start Free
          </Link>
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition">
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
          <div>
            <div className="text-3xl font-bold text-blue-600">10K+</div>
            <p className="text-gray-600">Active Users</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">500K+</div>
            <p className="text-gray-600">Journal Entries</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">98%</div>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Powerful Features for Your Wellness</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="card">
              <div className="text-4xl mb-4">📓</div>
              <h3 className="text-xl font-bold mb-3">Smart Journaling</h3>
              <p className="text-gray-600">Rich text editor with mood tracking, photos, and voice notes. Your thoughts organized beautifully.</p>
            </div>

            {/* Feature 2 */}
            <div className="card">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-3">AI Wellness Coach</h3>
              <p className="text-gray-600">Get personalized insights, detect mood patterns, and receive actionable wellness recommendations.</p>
            </div>

            {/* Feature 3 */}
            <div className="card">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">Health Tracking</h3>
              <p className="text-gray-600">Monitor mood, sleep quality, exercise frequency, and energy levels with beautiful visualizations.</p>
            </div>

            {/* Feature 4 */}
            <div className="card">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3">Wellness Insights</h3>
              <p className="text-gray-600">Weekly summaries, mood analysis, and personalized tips from your wellness data.</p>
            </div>

            {/* Feature 5 */}
            <div className="card">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-3">Privacy First</h3>
              <p className="text-gray-600">Your data is yours. End-to-end encryption and full control over your privacy settings.</p>
            </div>

            {/* Feature 6 */}
            <div className="card">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-3">Mobile Optimized</h3>
              <p className="text-gray-600">Works seamlessly on all devices. Journal anywhere, anytime, any moment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">How It Works</h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="text-3xl font-bold text-blue-600 min-w-12 text-center">1</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Sign Up</h3>
                <p className="text-gray-600">Create your free account and set your wellness goals in minutes.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-3xl font-bold text-blue-600 min-w-12 text-center">2</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Journal & Track</h3>
                <p className="text-gray-600">Write journal entries, track your mood (1-10), and log your wellness activities.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-3xl font-bold text-blue-600 min-w-12 text-center">3</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Get Insights</h3>
                <p className="text-gray-600">AI analyzes your entries and provides personalized wellness recommendations.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-3xl font-bold text-blue-600 min-w-12 text-center">4</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Transform</h3>
                <p className="text-gray-600">Follow recommendations, track progress, and watch your wellness improve.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">What Users Say</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'James M.',
                quote: 'HisJourney helped me understand my mood patterns. Life-changing.',
                avatar: '👨'
              },
              {
                name: 'Marcus D.',
                quote: 'The AI insights are incredibly helpful. Feels like having a wellness coach.',
                avatar: '🧑'
              },
              {
                name: 'David S.',
                quote: 'Finally a wellness app designed for men. Exactly what I needed.',
                avatar: '👴'
              }
            ].map((testimonial, i) => (
              <div key={i} className="card text-center">
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Simple Pricing</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Free Plan */}
            <div className="card border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Free</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">$0<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li>✓ 3 journal entries/week</li>
                <li>✓ Mood tracking</li>
                <li>✓ Basic insights</li>
                <li>✗ AI recommendations</li>
                <li>✗ Advanced analytics</li>
              </ul>
              <button className="btn btn-secondary w-full">Get Started</button>
            </div>

            {/* Pro Plan */}
            <div className="card border-2 border-blue-600 shadow-lg">
              <div className="bg-blue-600 text-white px-3 py-1 rounded inline-block mb-4 text-sm font-semibold">Most Popular</div>
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">$9.99<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li>✓ Unlimited entries</li>
                <li>✓ Advanced mood tracking</li>
                <li>✓ AI wellness insights</li>
                <li>✓ Personalized recommendations</li>
                <li>✓ Data export & backup</li>
              </ul>
              <button className="btn btn-primary w-full">Start Free Trial</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Wellness?</h2>
          <p className="text-lg mb-8 text-blue-100">Join thousands of men taking control of their wellbeing.</p>
          <Link href="/signup" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition inline-block">
            Start Your Journey Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">HisJourney</h4>
              <p>AI-powered wellness for modern men.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p>&copy; 2026 HisJourney. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
