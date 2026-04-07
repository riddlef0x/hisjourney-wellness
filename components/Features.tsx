interface FeatureProps {
  icon: React.ReactNode
  title: string
  description: string
  span?: string
  delay?: number
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description, span = '', delay = 0 }) => {
  return (
    <div
      className={`card ${span} h-full hover:scale-105 transition duration-500`}
      style={{
        animation: `fadeInUp 0.6s ease-out forwards`,
        animationDelay: `${delay}ms`,
        opacity: 0
      }}
    >
      <div className="text-6xl mb-6 transform group-hover:scale-110 transition duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-serif font-bold text-wellness-moss mb-4">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-lg">
        {description}
      </p>
    </div>
  )
}

export default function Features() {
  return (
    <section className="py-28 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <span className="text-wellness-sage text-sm font-semibold uppercase tracking-widest">Our Capabilities</span>
          <h2 className="text-5xl font-serif font-bold text-wellness-dark mt-4 mb-6">
            Powerful Features for Your Transformation
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to understand yourself better and build lasting wellness habits
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
          {/* Large Feature Card - spans 2 cols */}
          <div className="md:col-span-2 group">
            <FeatureCard
              span="md:col-span-2"
              icon="📓"
              title="Smart Journaling with AI"
              description="Rich text editor with mood tracking, photo attachments, and voice notes. Your thoughts are analyzed by advanced AI to provide personalized insights and pattern recognition. Completely private and encrypted."
            />
          </div>

          {/* Right column - stacked cards */}
          <FeatureCard
            icon="🎯"
            title="Goal Tracking"
            description="Set wellness goals and track progress with beautiful visualizations. Get motivated by your achievements."
          />

          {/* AI Coach Card */}
          <FeatureCard
            icon="🤖"
            title="AI Wellness Coach"
            description="Get personalized recommendations, detect mood patterns, and receive actionable wellness tips based on your unique journey."
          />

          {/* Health Tracking */}
          <FeatureCard
            icon="📊"
            title="Health Metrics"
            description="Monitor mood, sleep quality, exercise frequency, and energy levels with intuitive dashboards and trending."
          />

          {/* Privacy Card */}
          <FeatureCard
            icon="🔒"
            title="Privacy First"
            description="Your data is yours alone. End-to-end encryption, zero tracking, and complete control over your information."
          />

          {/* Mobile Card */}
          <FeatureCard
            icon="📱"
            title="Mobile Optimized"
            description="Seamlessly works on all devices. Journal anywhere, anytime, in any moment of your day."
          />

          {/* Insights Card - spans 2 cols */}
          <div className="md:col-span-2 group">
            <FeatureCard
              span="md:col-span-2"
              icon="💡"
              title="Weekly Wellness Insights & Analysis"
              description="Receive AI-generated weekly summaries that deep-dive into your mood trends, identifying patterns and providing evidence-based recommendations for improvement. Discover what truly makes you thrive."
            />
          </div>
        </div>
      </div>
    </section>
  )
}
