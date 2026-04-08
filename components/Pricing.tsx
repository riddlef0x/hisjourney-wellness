'use client'

export default function Pricing() {
  return (
    <section className="pricing-section py-20 px-4 bg-wellness-cream">
      <div className="text-center mb-16 relative z-10">
        <p className="section-kicker-elite text-wellness-moss mb-4">
          Simple, Transparent Pricing
        </p>
        <h2 className="font-serif text-5xl font-semibold text-wellness-moss mb-6">
          Choose Your Plan
        </h2>
        <p className="text-lg text-wellness-moss/80 max-w-2xl mx-auto">
          Start free, upgrade when you're ready for advanced AI insights
        </p>
      </div>
      
      <div className="pricing-container-2026">
        {/* Vertical Divider */}
        <div className="pricing-divider"></div>
        {/* Free Tier Card */}
        <div className="flex flex-col gap-6 rounded-2xl p-12 w-full max-w-lg border border-wellness-moss/20 bg-wellness-cream text-wellness-moss relative transition-all duration-300">
          <h3 className="font-serif text-3xl font-semibold">Free</h3>
          <div>
            <div className="font-serif text-5xl font-bold text-wellness-moss">
              $0<span className="text-base font-normal opacity-80">/month</span>
            </div>
          </div>
          
          <ul className="flex flex-col gap-4 my-4">
            <li className="flex items-center gap-3 text-base leading-relaxed">
              <span className="text-wellness-moss font-bold text-xl w-4 flex-shrink-0">•</span>
              Basic mood tracking
            </li>
            <li className="flex items-center gap-3 text-base leading-relaxed">
              <span className="text-wellness-moss font-bold text-xl w-4 flex-shrink-0">•</span>
              Daily journal entries
            </li>
            <li className="flex items-center gap-3 text-base leading-relaxed">
              <span className="text-wellness-moss font-bold text-xl w-4 flex-shrink-0">•</span>
              Weekly progress summary
            </li>
          </ul>

          <button className="free-button-2026">
            Get Started Free
          </button>
        </div>

        {/* Pro Tier Card */}
        <div className="pro-card-2026 flex flex-col gap-6 rounded-2xl p-12 w-full max-w-lg text-wellness-cream transition-all duration-300 transform scale-105" style={{position: 'relative'}}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: '#D9E2D5',
            color: '#2C4C3B',
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: 600,
            zIndex: 10
          }}>
            Most Popular
          </div>
          
          <h3 className="font-serif text-3xl font-semibold">Pro</h3>
          <div>
            <div className="font-serif text-5xl font-bold text-wellness-cream">
              $9.99<span className="text-base font-normal opacity-80">/month</span>
            </div>
          </div>
          
          <ul className="flex flex-col gap-4 my-4">
            <li className="flex items-center gap-3 text-base leading-relaxed">
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Advanced AI insights & analysis
            </li>
            <li className="flex items-center gap-3 text-base leading-relaxed">
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Unlimited journal entries
            </li>
            <li className="flex items-center gap-3 text-base leading-relaxed">
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Personalized recommendations
            </li>
            <li className="flex items-center gap-3 text-base leading-relaxed">
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Export & backup your data
            </li>
            <li className="flex items-center gap-3 text-base leading-relaxed">
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Priority customer support
            </li>
          </ul>

          <button className="mt-auto bg-wellness-cream text-wellness-moss rounded-lg p-4 font-bold text-base cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-green-100">
            Start Pro Trial
          </button>
        </div>

      </div>

      {/* Responsive Design for Mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          .flex {
            flex-direction: column;
          }
          .transform.scale-105 {
            transform: scale(1);
            order: -1;
          }
        }
      `}</style>
    </section>
  )
}