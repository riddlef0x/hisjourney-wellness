import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HisJourney - AI-Powered Men\'s Wellness Platform',
  description: 'Transform your wellness journey with AI-powered insights, mood tracking, and personalized recommendations.',
  keywords: ['wellness', 'mental health', 'journaling', 'men\'s health', 'AI', 'personal growth'],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  robots: {
    index: true,
    follow: true,
    googleBot: 'index, follow, max-image-preview:large'
  },
  openGraph: {
    title: 'HisJourney - AI-Powered Men\'s Wellness Platform',
    description: 'Transform your wellness journey with AI-powered insights, mood tracking, and personalized recommendations.',
    type: 'website',
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://hisjourney.org',
    siteName: 'HisJourney'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#6b9f7f" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%236b9f7f'>✨</text></svg>" />
      </head>
      <body>{children}</body>
    </html>
  )
}
