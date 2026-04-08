'use client'

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-wellness-cream">
      <div className="flex min-h-screen max-w-7xl mx-auto gap-16">
        {/* Left Side - Sticky Container */}
        <div className="flex-1 sticky top-[10vh] h-fit">
          <div className="glassmorphism-device">
            {/* Abstract AI Node */}
            <div className="ai-node-shape"></div>
          </div>
        </div>

        {/* Right Side - Scrolling Narrative */}
        <div className="flex-1 flex flex-col">
          {/* Step 1: Sign Up */}
          <div className="min-h-[60vh] flex flex-col justify-center py-8 border-b border-wellness-moss/10">
            <div className="section-kicker-elite text-wellness-moss">
              Step 01
            </div>
            <h2 className="font-serif text-5xl font-semibold text-wellness-moss leading-tight mb-6">
              Sign Up
            </h2>
            <p className="text-lg text-wellness-moss/80 leading-relaxed max-w-lg">
              Create your account in under 60 seconds. No credit card required. 
              Your journey toward better mental wellness starts with a simple, 
              secure registration process that respects your privacy.
            </p>
          </div>

          {/* Step 2: Journal & Track */}
          <div className="min-h-[60vh] flex flex-col justify-center py-8 border-b border-wellness-moss/10">
            <div className="section-kicker-elite text-wellness-moss">
              Step 02
            </div>
            <h2 className="font-serif text-5xl font-semibold text-wellness-moss leading-tight mb-6">
              Journal & Track
            </h2>
            <p className="text-lg text-wellness-moss/80 leading-relaxed max-w-lg">
              Express your thoughts through our intelligent journaling system. 
              Track your daily mood, energy levels, and emotional patterns. 
              Our AI learns your unique patterns to provide personalized insights.
            </p>
          </div>

          {/* Step 3: Get Insights */}
          <div className="min-h-[60vh] flex flex-col justify-center py-8 border-b border-wellness-moss/10">
            <div className="section-kicker-elite text-wellness-moss">
              Step 03
            </div>
            <h2 className="font-serif text-5xl font-semibold text-wellness-moss leading-tight mb-6">
              Get Insights
            </h2>
            <p className="text-lg text-wellness-moss/80 leading-relaxed max-w-lg">
              Receive AI-powered analysis of your emotional patterns, triggers, 
              and progress. Discover actionable recommendations tailored to your 
              specific wellness goals and behavioral patterns.
            </p>
          </div>

          {/* Step 4: Transform */}
          <div className="min-h-[60vh] flex flex-col justify-center py-8">
            <div className="section-kicker-elite text-wellness-moss">
              Step 04
            </div>
            <h2 className="font-serif text-5xl font-semibold text-wellness-moss leading-tight mb-6">
              Transform
            </h2>
            <p className="text-lg text-wellness-moss/80 leading-relaxed max-w-lg">
              Build lasting habits and achieve meaningful personal growth. 
              Watch as your consistent practice leads to improved emotional 
              resilience, better relationships, and a more balanced life.
            </p>
          </div>
        </div>
      </div>

      {/* Responsive Design for Mobile */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .flex {
            flex-direction: column;
          }
          .sticky {
            position: relative;
            top: auto;
          }
          .aspect-\\[9\\/16\\] {
            aspect-ratio: 16/10;
          }
          .min-h-\\[60vh\\] {
            min-height: 50vh;
          }
        }
      `}</style>
    </section>
  )
}