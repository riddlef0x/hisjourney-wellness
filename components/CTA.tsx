'use client'

import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-28 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-wellness-moss via-wellness-sage to-wellness-dark opacity-90"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-wellness-sage/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-wellness-oatmeal/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

      <div className="relative z-10 container mx-auto max-w-4xl text-center">
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-8">
          Ready to Transform Your Wellness?
        </h2>
        
        <p className="text-xl text-wellness-cream mb-12 max-w-2xl mx-auto font-light">
          Join thousands of men who are taking control of their mental and physical wellbeing. Start your free journey today—no credit card required.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/signup"
            className="btn bg-white text-wellness-moss px-10 py-4 text-lg font-semibold shadow-2xl hover:shadow-3xl hover:scale-105 transition duration-300"
          >
            Start Your Journey Now
          </Link>
          <Link
            href="/schedule"
            className="btn border-2 border-white text-white px-10 py-4 text-lg font-semibold hover:bg-white/10 transition duration-300"
          >
            Schedule Demo
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-12 border-t border-white/20 flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-wellness-cream">
          <div className="flex items-center gap-2">
            <span>✓</span> No credit card required
          </div>
          <div className="flex items-center gap-2">
            <span>✓</span> Free for 7 days
          </div>
          <div className="flex items-center gap-2">
            <span>✓</span> Cancel anytime
          </div>
          <div className="flex items-center gap-2">
            <span>✓</span> Privacy guaranteed
          </div>
        </div>
      </div>
    </section>
  )
}
