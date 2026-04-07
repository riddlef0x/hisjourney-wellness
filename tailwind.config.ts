import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#1e40af',
        accent: '#ec4899',
        wellness: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
        dark: '#1f2937'
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      spacing: {
        '1px': '1px'
      }
    }
  },
  plugins: []
}

export default config
