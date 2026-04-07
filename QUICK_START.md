# 🚀 Quick Start Guide - 5 Minutes to Running HisJourney

## Step 1: Clone & Install (2 min)

```bash
cd /data/workspace/hisjourney-wellness
npm install
```

## Step 2: Create Supabase Project (2 min)

1. Go to [supabase.com](https://supabase.com)
2. Click "New Project"
3. Fill in project details
4. Wait for creation (~2 min)

## Step 3: Configure Environment (1 min)

```bash
cp .env.example .env.local
nano .env.local
```

Add your Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=your-url-here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-key-here
OPENAI_API_KEY=your-openai-key-here
NEXTAUTH_SECRET=your-secret-here
```

## Step 4: Set Up Database (1 min)

In Supabase SQL Editor:
1. Copy all of `supabase/schema.sql`
2. Paste into SQL Editor
3. Click Run

## Step 5: Run Locally

```bash
npm run dev
```

Visit http://localhost:3000 ✨

---

## 🎯 What You'll See

- **Landing page** - Hero section with features
- **Dashboard** - Wellness overview and quick stats
- **New Entry** - Journal interface with mood tracking
- **Articles** - Wellness content hub

---

## 🧪 Test the App

1. Click "Start Free" on homepage
2. Create an account
3. Go to dashboard
4. Create a journal entry with mood
5. See AI-generated insights

---

## 📊 What's Included

✅ Next.js 15 + TypeScript  
✅ Supabase auth & database  
✅ OpenAI integration  
✅ Mood tracking  
✅ Wellness dashboard  
✅ Journal interface  
✅ AI insights engine  
✅ Mobile responsive  

---

## 🚀 Deploy to Production

### Option 1: Vercel (Easiest)
1. Push to GitHub
2. Import to Vercel
3. Add env variables
4. Deploy (done!)

### Option 2: Other Platforms
See `DEPLOYMENT.md` for AWS, DigitalOcean, Railway, etc.

---

## 💡 Next Steps

1. Customize branding (colors, fonts, logo)
2. Add more wellness articles
3. Implement additional AI features
4. Connect fitness APIs (Fitbit, Strava)
5. Build mobile app

---

## 🆘 Stuck?

Check these files:
- `README.md` - Full documentation
- `DEPLOYMENT.md` - Deployment guides
- `.env.example` - Environment variables
- `supabase/schema.sql` - Database schema

---

**You're all set! Happy building! 🎉**
