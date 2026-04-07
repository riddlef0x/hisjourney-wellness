# HisJourney - AI-Powered Men's Wellness Platform

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 🎯 About

HisJourney is a modern, AI-powered wellness platform designed specifically for men. It combines intuitive journaling with artificial intelligence to provide personalized wellness insights, mood tracking, and actionable recommendations.

### Key Features

✅ **Smart Journaling** - Rich text editor with mood tracking and photo attachments  
✅ **AI Wellness Coach** - AI-powered sentiment analysis and personalized insights  
✅ **Mood Tracking** - Track mood, sleep, exercise, and energy levels  
✅ **Wellness Insights** - AI-generated weekly summaries and pattern analysis  
✅ **Mobile Optimized** - Works seamlessly on all devices  
✅ **Privacy First** - End-to-end encryption and complete data control  

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 15** | Full-stack React framework |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Modern styling |
| **Supabase** | Database & authentication |
| **OpenAI API** | AI sentiment analysis & insights |
| **Vercel** | Deployment & hosting |

## 📦 Installation

### Prerequisites

- Node.js 18+ (v20+ recommended)
- npm or yarn
- A Supabase account ([supabase.com](https://supabase.com))
- An OpenAI API key ([openai.com](https://openai.com/api))

### Local Setup (5 minutes)

```bash
# 1. Clone the repository
git clone <repository-url>
cd hisjourney-wellness

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local

# 4. Edit .env.local with your credentials
# NEXT_PUBLIC_SUPABASE_URL=
# NEXT_PUBLIC_SUPABASE_ANON_KEY=
# OPENAI_API_KEY=
# NEXTAUTH_SECRET=
```

### Database Setup (in Supabase)

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Go to SQL Editor
3. Copy the contents of `supabase/schema.sql`
4. Paste and run in the SQL editor
5. Copy your project URL and keys to `.env.local`

### Run Locally

```bash
npm run dev
```

Visit http://localhost:3000

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import the repository
4. Add environment variables
5. Click Deploy

Deployment takes ~2 minutes.

### Manual Deployment

See `DEPLOYMENT.md` for detailed instructions for AWS, DigitalOcean, Railway, etc.

## 📁 Project Structure

```
hisjourney-wellness/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Landing page
│   ├── globals.css              # Global styles
│   ├── dashboard/
│   │   ├── page.tsx            # Wellness dashboard
│   │   └── new/
│   │       └── page.tsx        # New entry form
│   └── articles/
│       └── page.tsx            # Wellness hub
├── lib/
│   ├── supabase.ts             # Supabase client
│   └── ai.ts                   # AI utilities
├── supabase/
│   └── schema.sql              # Database schema
├── .env.example                # Environment template
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

## 🔑 Key API Endpoints

### Authentication
- `POST /api/auth/signup` - Create account
- `POST /api/auth/login` - Sign in
- `POST /api/auth/logout` - Sign out

### Entries
- `GET /api/entries` - Get all entries
- `POST /api/entries` - Create entry
- `GET /api/entries/[id]` - Get specific entry
- `PUT /api/entries/[id]` - Update entry
- `DELETE /api/entries/[id]` - Delete entry

### Insights
- `GET /api/insights` - Get wellness insights
- `POST /api/insights/generate` - Generate AI insights
- `GET /api/patterns` - Get mood patterns

## 🤖 AI Features

### Sentiment Analysis
Analyzes the emotional tone of journal entries using OpenAI's GPT-4.

```typescript
const sentiment = await analyzeSentiment(entryText)
// Returns: { score: 0-1, label: 'positive'|'neutral'|'negative', confidence: 0-1 }
```

### Insight Generation
Generates personalized wellness insights from recent entries.

```typescript
const insight = await generateWellnessInsight(entries, 'weekly')
// Returns: { title, content, tips, category }
```

### Pattern Detection
Identifies correlations between mood and lifestyle factors.

```typescript
const patterns = await detectMoodPatterns(moodData)
// Returns: { patterns: [], correlations: [] }
```

## 🔒 Security & Privacy

✅ **End-to-End Encryption** - Sensitive data encrypted at rest  
✅ **Row-Level Security** - Database-level access control  
✅ **HTTPS Only** - All traffic encrypted in transit  
✅ **No Tracking** - Zero analytics tracking of user data  
✅ **GDPR Ready** - Full data export and deletion support  
✅ **Regular Audits** - Security reviewed quarterly  

## 📊 Database Schema

### Main Tables
- `users` - User accounts and profiles
- `entries` - Journal entries with mood data
- `wellness_insights` - AI-generated insights
- `mood_patterns` - Detected mood patterns
- `articles` - Wellness content
- `recommendations` - Personalized recommendations

See `supabase/schema.sql` for full schema details.

## 🧪 Testing

```bash
# Run type checking
npm run type-check

# Run linting
npm run lint

# Build for production
npm run build

# Start production server
npm run start
```

## 📈 Monitoring & Analytics

Track key metrics:
- Daily/Monthly Active Users (DAU/MAU)
- Entry creation rate
- AI insight engagement
- Feature usage patterns
- Error rates & performance

## 🆘 Troubleshooting

### Issue: "Missing environment variables"
**Solution:** Copy `.env.example` to `.env.local` and fill in your credentials

### Issue: "Supabase connection failed"
**Solution:** Check your project URL and key are correct in `.env.local`

### Issue: "OpenAI API errors"
**Solution:** Verify your API key has available credits and is correctly configured

### Issue: "Build fails with styled-jsx error"
**Solution:** Delete `node_modules` and `.next`, then run `npm install && npm run build`

## 🗺️ Roadmap

### Phase 1 (Current)
✅ Core journaling platform  
✅ Mood tracking  
✅ Basic AI insights  

### Phase 2 (April-May)
- Advanced mood patterns
- Fitness/sleep integration
- Coaching recommendations
- Mobile app (React Native)

### Phase 3 (June-July)
- Community features
- Expert Q&A
- Group wellness circles
- API for partners

### Phase 4 (August+)
- Enterprise B2B
- Corporate wellness programs
- Advanced analytics
- Native iOS/Android apps

## 📧 Support

- **Email:** support@hisjourney.org
- **Twitter:** @HisJourneyApp
- **Discord:** [Community Server]
- **Docs:** [docs.hisjourney.org]

## 📄 License

MIT License - see LICENSE file for details

## 🙏 Acknowledgments

Built with care for modern men prioritizing their wellness.

---

**Happy Journeying!** 🧘

For more information, visit [hisjourney.org](https://hisjourney.org)
