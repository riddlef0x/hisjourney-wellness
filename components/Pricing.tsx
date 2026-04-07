'use client'

import Link from 'next/link'

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'forever',
    description: 'Perfect for exploring wellness journaling',
    features: [
      '3 journal entries per week',
      'Mood tracking',
      'Basic analytics',
      'Mobile app access',
      'Community support'
    ],
    cta: 'Get Started',
    highlighted: false
  },
  {
    name: 'Professional',
    price: '$9.99',
    period: '/month',
    description: 'For serious wellness enthusiasts',
    features: [
      'Unlimited journal entries',
      'Advanced mood & health tracking',
      'AI wellness insights',
      'Personalized recommendations',
      'Weekly wellness reports',
      'Data export & backup',
      'Priority support'
    ],
    cta: 'Start Free Trial',
    highlighted: true
  },
  {
    name: 'Elite',
    price: '$19.99',
    period: '/month',
    description: 'Premium wellness transformation',
    features: [
      'Everything in Professional',
      '1-on-1 AI coaching sessions',
      'Custom wellness programs',
      'Family wellness access',
      'Advanced privacy features',
      'API access',
      'Dedicated support'
    ],
    cta: 'Start Free Trial',
    highlighted: false
  }
]

export default function Pricing() {
  return (
    <section className="py-28 px-4 bg-gradient-to-b from-wellness-cream/30 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-20 text-center">
          <span className="text-wellness-sage text-sm font-semibold uppercase tracking-widest">Investment</span>
          <h2 className="text-5xl font-serif font-bold text-wellness-dark mt-4 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your wellness journey. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative animate-fadeInUp ${
                plan.highlighted ? 'md:scale-105' : ''
              }`}
              style={{
                animationDelay: `${idx * 100}ms`,
                opacity: 0
              }}
            >
              {/* Highlight badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-wellness-sage to-wellness-moss text-white text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`card h-full ${
                  plan.highlighted
                    ? 'border-2 border-wellness-sage shadow-2xl'
                    : 'border border-gray-200'
                }`}
              >
                <h3 className="text-2xl font-serif font-bold text-wellness-dark mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  {plan.description}
                </p>

                {/* Pricing */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-serif font-bold text-wellness-moss">
                      {plan.price}
                    </span>
                    {plan.period !== 'forever' && (
                      <span className="text-gray-600 text-lg">
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <button
                  className={`btn w-full mb-8 ${
                    plan.highlighted ? 'btn-primary' : 'btn-secondary'
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Features */}
                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <span className="text-wellness-sage text-lg mt-1">✓</span>
                      <span className="text-gray-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ hint */}
        <div className="mt-20 text-center p-8 rounded-lg bg-wellness-cream/50 border border-wellness-sage/20">
          <p className="text-gray-700 text-lg">
            Have questions about our plans?{' '}
            <a href="#" className="text-wellness-sage font-semibold hover:text-wellness-moss transition">
              Check our FAQ
            </a>{' '}
            or{' '}
            <a href="#" className="text-wellness-sage font-semibold hover:text-wellness-moss transition">
              contact support
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
