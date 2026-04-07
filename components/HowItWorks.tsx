'use client'

import { useEffect, useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Create Your Account',
    description: 'Sign up in minutes and establish your wellness goals. Personalize your dashboard to match your unique wellness journey.',
    icon: '✨'
  },
  {
    number: '02',
    title: 'Journal & Reflect',
    description: 'Write freely about your thoughts and feelings. Track your mood, sleep, exercise, and energy levels effortlessly.',
    icon: '📝'
  },
  {
    number: '03',
    title: 'AI Analysis',
    description: 'Our advanced AI analyzes your entries to identify patterns, mood trends, and potential triggers affecting your wellbeing.',
    icon: '🧠'
  },
  {
    number: '04',
    title: 'Get Insights',
    description: 'Receive personalized wellness recommendations and actionable advice based on your unique data and patterns.',
    icon: '💡'
  },
  {
    number: '05',
    title: 'Build Habits',
    description: 'Follow recommendations and track your progress. Watch as your wellness improves week after week.',
    icon: '🌱'
  }
]

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const path = pathRef.current
    if (!container || !path) return

    const handleScroll = () => {
      const rect = container.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, 1 - rect.top / rect.height))
      
      // Draw SVG path as user scrolls
      const length = path.getTotalLength()
      path.style.strokeDashoffset = String(length * (1 - progress))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="py-28 px-4 bg-gradient-to-b from-white to-wellness-cream/30" ref={containerRef}>
      <div className="container mx-auto max-w-5xl">
        <div className="mb-20 text-center">
          <span className="text-wellness-sage text-sm font-semibold uppercase tracking-widest">The Journey</span>
          <h2 className="text-5xl font-serif font-bold text-wellness-dark mt-4">
            How It Works
          </h2>
        </div>

        {/* Timeline with connecting path */}
        <div className="relative">
          {/* SVG Connection Path */}
          <svg
            className="absolute left-0 top-0 w-full h-full pointer-events-none"
            style={{ filter: 'drop-shadow(0 2px 4px rgba(45, 80, 22, 0.1))' }}
          >
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6b9f7f" />
                <stop offset="100%" stopColor="#2d5016" />
              </linearGradient>
            </defs>
            <path
              ref={pathRef}
              d="M 50% 0 L 50% 100%"
              stroke="url(#pathGradient)"
              strokeWidth="3"
              fill="none"
              strokeDasharray="1000"
              strokeDashoffset="1000"
              style={{ transition: 'stroke-dashoffset 0.1s ease-out' }}
            />
          </svg>

          {/* Steps */}
          <div className="space-y-20 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`flex gap-8 items-start md:gap-12 animate-fadeInUp`}
                style={{
                  animationDelay: `${idx * 100}ms`,
                  opacity: 0
                }}
              >
                {/* Left side on odd, right side on even */}
                <div className={`flex-1 ${idx % 2 === 1 ? 'md:text-right' : ''}`}>
                  <div
                    className={`inline-flex items-center gap-4 mb-4 ${
                      idx % 2 === 1 ? 'md:flex-row-reverse md:gap-4' : ''
                    }`}
                  >
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-wellness-sage to-wellness-moss flex items-center justify-center text-white font-serif font-bold text-2xl shadow-lg">
                      {step.number}
                    </div>
                    <div className="text-4xl">{step.icon}</div>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-wellness-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
