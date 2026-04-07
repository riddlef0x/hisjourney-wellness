# HisJourney Deployment Guide

This guide covers deployment options for the HisJourney platform.

## 🚀 Recommended: Vercel (Zero-Config)

Vercel is the recommended deployment platform for Next.js applications.

### Setup (5 minutes)

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Environment Variables**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add each variable from `.env.example`:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `SUPABASE_SERVICE_ROLE_KEY`
     - `OPENAI_API_KEY`
     - `NEXTAUTH_SECRET` (generate: `openssl rand -base64 32`)
     - `NEXTAUTH_URL` (set to your domain)

4. **Deploy**
   - Click "Deploy"
   - Wait ~2-3 minutes
   - Your app is live!

### Auto-Deployment
- Vercel automatically deploys on every push to `main`
- Preview deployments for pull requests

### Custom Domain
1. In Vercel Settings → Domains
2. Add your domain
3. Update DNS records (Vercel provides instructions)

---

## Alternative: DigitalOcean App Platform

### Setup

1. **Create DigitalOcean Account** and add payment method

2. **Create New App**
   - Visit [cloud.digitalocean.com/apps](https://cloud.digitalocean.com/apps)
   - Click "Create App"
   - Connect your GitHub repository

3. **Configure Build Settings**
   ```
   Build Command: npm run build
   Run Command: npm run start
   ```

4. **Set Environment Variables**
   - In deployment settings, add all variables from `.env.example`

5. **Deploy**
   - Click "Create Resources"
   - Wait for deployment (~5 minutes)

### Monitoring
- DigitalOcean App Platform includes monitoring dashboard
- View logs, metrics, and deployments

### Pricing
- Starter tier: $12/month (includes up to 3 static sites)
- Additional resources billed separately

---

## Alternative: Railway.app

### Setup

1. **Create Railway Account** at [railway.app](https://railway.app)

2. **Deploy from GitHub**
   - Click "New Project"
   - Select "Deploy from GitHub"
   - Select your repository

3. **Configure Environment**
   - Railway auto-detects Next.js
   - Add environment variables in project settings
   - Set all variables from `.env.example`

4. **Deploy**
   - Railway auto-deploys
   - Wait for build to complete

### Custom Domain
- In project settings → Domains
- Add your custom domain
- Update DNS records

### Pricing
- Railway offers generous free tier
- Pay-as-you-go: $5/month minimum after free tier

---

## Alternative: AWS (EC2 + RDS)

### Setup

1. **Create EC2 Instance**
   ```bash
   # Ubuntu 22.04 LTS, t3.medium or larger
   # Security group: open ports 80, 443, 22
   ```

2. **SSH into Instance**
   ```bash
   ssh -i your-key.pem ubuntu@your-instance-ip
   ```

3. **Install Dependencies**
   ```bash
   sudo apt update
   sudo apt install -y nodejs npm curl git
   ```

4. **Clone Repository**
   ```bash
   git clone <your-repo-url>
   cd hisjourney-wellness
   ```

5. **Install Dependencies**
   ```bash
   npm install
   ```

6. **Set Environment Variables**
   ```bash
   nano .env.local
   # Add all variables
   ```

7. **Build Application**
   ```bash
   npm run build
   ```

8. **Set Up PM2 (Process Manager)**
   ```bash
   sudo npm install -g pm2
   pm2 start npm -- start
   pm2 startup
   pm2 save
   ```

9. **Install Nginx (Reverse Proxy)**
   ```bash
   sudo apt install -y nginx
   ```

10. **Configure Nginx**
    ```bash
    sudo nano /etc/nginx/sites-available/default
    ```

    Replace with:
    ```nginx
    server {
        listen 80 default_server;
        server_name _;

        location / {
            proxy_pass http://localhost:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
    ```

11. **Enable SSL (Let's Encrypt)**
    ```bash
    sudo apt install -y certbot python3-certbot-nginx
    sudo certbot --nginx -d your-domain.com
    ```

### Monitoring
- Check logs: `pm2 logs`
- Monitor CPU/Memory: `pm2 monit`

---

## Alternative: Docker Deployment

### Create Dockerfile

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### Build & Run

```bash
# Build image
docker build -t hisjourney:latest .

# Run container
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_SUPABASE_URL=<url> \
  -e NEXT_PUBLIC_SUPABASE_ANON_KEY=<key> \
  -e OPENAI_API_KEY=<key> \
  hisjourney:latest
```

### Deploy to Any Docker Host
- Docker Swarm
- Kubernetes
- Cloud Run (Google Cloud)
- Container Registry (AWS, Azure)

---

## Supabase Database Setup

### Create Supabase Project

1. Visit [supabase.com](https://supabase.com)
2. Click "New Project"
3. Select your region (choose closest to users)
4. Set a strong database password
5. Wait ~3 minutes for creation

### Run Schema

1. Go to SQL Editor
2. Copy `supabase/schema.sql`
3. Paste and execute
4. Wait for completion

### Get Credentials

1. Go to Settings → API
2. Copy:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role secret` → `SUPABASE_SERVICE_ROLE_KEY`

---

## Post-Deployment Checklist

- [ ] Environment variables configured
- [ ] Database schema created
- [ ] OpenAI API key working
- [ ] Authentication functional (test signup/login)
- [ ] Journal entry creation works
- [ ] AI insights generating
- [ ] SSL/HTTPS enabled
- [ ] Domain pointing to deployment
- [ ] Monitoring/logging active
- [ ] Backup strategy configured

---

## Monitoring & Maintenance

### Daily
- Check error logs
- Verify database is responding
- Test critical user flows

### Weekly
- Review API usage
- Check OpenAI API costs
- Monitor Supabase performance

### Monthly
- Security audit
- Dependency updates
- Performance optimization

## Scaling

### When to Scale
- DAU >500
- API response time >1000ms
- Database connections near limit

### Scaling Strategy
1. Upgrade database (Supabase Pro)
2. Enable caching (Redis/Memcached)
3. CDN for static assets
4. API rate limiting
5. Database indexing optimization

---

## Troubleshooting

### Build Fails
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Database Connection Error
- Check env variables
- Verify Supabase project is active
- Test connection: `psql <connection-string>`

### Slow Performance
- Check database query performance
- Enable Supabase Replication
- Optimize AI API calls (batch requests)
- Use CDN for images

### Out of Memory
- Increase VM size
- Check for memory leaks (pm2 monit)
- Optimize image processing

---

## Security Best Practices

1. **Secrets Management**
   - Never commit `.env.local`
   - Use platform-specific secret managers
   - Rotate keys regularly

2. **SSL/HTTPS**
   - Always use HTTPS in production
   - Redirect HTTP to HTTPS

3. **Database**
   - Enable row-level security
   - Regular backups
   - Monitor unauthorized access

4. **API Keys**
   - Use separate keys per environment
   - Implement rate limiting
   - Monitor usage

5. **Dependencies**
   - Keep npm packages updated
   - Regular security audits
   - Use `npm audit`

---

## Rollback Procedure

### If Deployment Has Issues

**Vercel:**
1. Go to Deployments
2. Find last stable deployment
3. Click "..." → "Promote to Production"

**DigitalOcean:**
1. Go to App Settings → Deploy
2. Select previous build
3. Click "Redeploy"

**AWS/Manual:**
```bash
git revert <commit-hash>
git push origin main
# App will redeploy with previous code
```

---

## Cost Estimates (Monthly)

| Platform | Starter | Growth |
|----------|---------|--------|
| Vercel | Free | $20+ |
| DigitalOcean | $12 | $25+ |
| Railway | Free* | $5+ |
| AWS | $30 | $100+ |
| Supabase | Free | $25+ |
| OpenAI API | Pay-as-you-go | $50-500 |

*Railway has generous free tier

---

## Support

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Supabase Docs:** [supabase.io/docs](https://supabase.io/docs)
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **OpenAI Docs:** [openai.com/docs](https://openai.com/docs)

---

**Ready to deploy? Start with Vercel for best experience!** 🚀
