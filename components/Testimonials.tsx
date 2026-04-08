'use client'

import './testimonials.css'

const testimonials = [
  {
    quote: 'HisJourney completely transformed how I understand my emotions. The AI insights are eerily accurate.',
    author: 'James Mitchell',
    role: 'Software Engineer',
    avatar: '👨'
  },
  {
    quote: 'Finally, a wellness app that feels like it was made for me. No fluff, just real results.',
    author: 'Marcus Chen',
    role: 'Fitness Coach',
    avatar: '💪'
  },
  {
    quote: 'The mood tracking and analysis helped me identify patterns I never saw before. Life-changing.',
    author: 'David Santos',
    role: 'Therapist',
    avatar: '🧑'
  },
  {
    quote: 'The AI recommendations actually work. I recommend HisJourney to all my clients.',
    author: 'Robert Taylor',
    role: 'Business Owner',
    avatar: '👔'
  },
  {
    quote: 'Simple, elegant, and genuinely helpful. This is what modern wellness should look like.',
    author: 'Alex Jordan',
    role: 'Healthcare Professional',
    avatar: '⚕️'
  },
  {
    quote: 'Changed my perspective on mental health tracking. Absolutely worth every penny.',
    author: 'Christopher Lee',
    role: 'Entrepreneur',
    avatar: '🚀'
  }
]

export default function Testimonials() {
  // Duplicate testimonials for seamless loop
  const marqueeItems = [...testimonials, ...testimonials]

  return (
    <section className="py-28 px-4 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <span className="text-wellness-moss text-sm font-semibold uppercase tracking-widest">Real Stories</span>
          <h2 className="text-5xl font-serif font-bold text-wellness-dark mt-4 mb-6">
            Loved by Men Like You
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thousands of men are already experiencing transformation. Here's what they have to say.
          </p>
        </div>

        {/* Infinite Marquee Container */}
        <div className="marquee-container">
          <div className="marquee-track">
            {marqueeItems.map((testimonial, idx) => (
              <div
                key={idx}
                className="marquee-item card min-w-[350px] md:min-w-[400px] flex-shrink-0 hover:shadow-2xl hover:border-wellness-moss/50 transition"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-wellness-moss text-lg">
                      ⭐
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="border-t border-gray-200 pt-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-wellness-moss/10 flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-serif font-bold text-wellness-dark">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
