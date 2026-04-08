'use client'

export default function Features() {
  return (
    <section className="py-20 px-4 bg-wellness-cream">
      <div className="text-center mb-16">
        <h2 className="font-serif text-5xl font-semibold text-wellness-moss mb-6">
          Powerful Features
        </h2>
        <p className="text-lg text-wellness-moss/80 max-w-2xl mx-auto">
          Everything you need to support your mental wellness journey, powered by AI
        </p>
      </div>

      {/* Bento Box Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridAutoRows: 'minmax(200px, auto)',
        gap: '1.5rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        
        {/* Item 1: Smart Journaling (Large Hero Card) */}
        <div style={{
          gridColumn: 'span 2',
          gridRow: 'span 2',
          background: '#E8EFEA',
          borderRadius: '24px',
          padding: '2rem',
          boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start'
        }}>
          <h3 className="font-serif text-2xl font-semibold text-wellness-moss mb-4">
            Smart Journaling
          </h3>
          <p className="text-wellness-moss/80 leading-relaxed">
            AI-powered journaling that adapts to your writing style and provides personalized prompts to help you explore your thoughts and emotions deeper.
          </p>
        </div>

        {/* Item 2: Goal Tracking (Wide Horizontal Card) */}
        <div style={{
          gridColumn: 'span 2',
          gridRow: 'span 1',
          background: '#FFFFFF',
          borderRadius: '24px',
          padding: '2rem',
          boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start'
        }}>
          <h3 className="font-serif text-xl font-semibold text-wellness-moss mb-3">
            Goal Tracking
          </h3>
          <p className="text-wellness-moss/80 leading-relaxed">
            Set and track meaningful wellness goals with intelligent progress monitoring.
          </p>
        </div>

        {/* Item 3: AI Wellness Coach (Standard Square Card) */}
        <div style={{
          gridColumn: 'span 1',
          gridRow: 'span 1',
          background: '#FFFFFF',
          borderRadius: '24px',
          padding: '2rem',
          boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start'
        }}>
          <h3 className="font-serif text-xl font-semibold text-wellness-moss mb-3">
            AI Wellness Coach
          </h3>
          <p className="text-wellness-moss/80 leading-relaxed text-sm">
            Personal AI coach providing guidance and support.
          </p>
        </div>

        {/* Item 4: Health Metrics (Standard Square Card) */}
        <div style={{
          gridColumn: 'span 1',
          gridRow: 'span 1',
          background: '#FFFFFF',
          borderRadius: '24px',
          padding: '2rem',
          boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start'
        }}>
          <h3 className="font-serif text-xl font-semibold text-wellness-moss mb-3">
            Health Metrics
          </h3>
          <p className="text-wellness-moss/80 leading-relaxed text-sm">
            Comprehensive health and wellness metric tracking.
          </p>
        </div>

        {/* Item 5: Privacy First (Wide Horizontal Card) */}
        <div style={{
          gridColumn: 'span 2',
          gridRow: 'span 1',
          background: '#FFFFFF',
          borderRadius: '24px',
          padding: '2rem',
          boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start'
        }}>
          <h3 className="font-serif text-xl font-semibold text-wellness-moss mb-3">
            Privacy First
          </h3>
          <p className="text-wellness-moss/80 leading-relaxed">
            Your data stays private with end-to-end encryption and local storage options.
          </p>
        </div>

        {/* Item 6: Mobile Optimized (Wide Horizontal Card) */}
        <div style={{
          gridColumn: 'span 2',
          gridRow: 'span 1',
          background: '#FFFFFF',
          borderRadius: '24px',
          padding: '2rem',
          boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start'
        }}>
          <h3 className="font-serif text-xl font-semibold text-wellness-moss mb-3">
            Mobile Optimized
          </h3>
          <p className="text-wellness-moss/80 leading-relaxed">
            Seamless experience across all devices with responsive design and native mobile features.
          </p>
        </div>

      </div>

      {/* Responsive Design */}
      <style jsx>{`
        @media (max-width: 1024px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          div[style*="grid-column"] {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
        }

        @media (max-width: 768px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}