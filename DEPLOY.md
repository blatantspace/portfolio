# Deploy Blatant Space Portfolio

## Step 1: Push to GitHub

```bash
cd /Users/blatantspace/blatant-space/portfolio-site

# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Gallery-first portfolio with video support"

# Create GitHub repo and push
# (Create repo on github.com first, then:)
git remote add origin https://github.com/YOUR_USERNAME/blatant-space-portfolio.git
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy to Vercel

### Option A: Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repo
4. Vercel auto-detects Next.js settings
5. Click "Deploy"
6. Wait 2-3 minutes → Site is live!

### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from portfolio-site folder
cd /Users/blatantspace/blatant-space/portfolio-site
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N
# - What's your project's name? blatant-space
# - In which directory is your code located? ./
# - Want to modify settings? N
```

---

## Step 3: Add Custom Domain (blatantspace.com)

### In Vercel Dashboard

1. Go to your project → Settings → Domains
2. Add domain: `blatantspace.com`
3. Add domain: `www.blatantspace.com`
4. Vercel will show you DNS records to add

---

## Step 4: Configure DNS on DNSimple

### Records to Add

**For root domain (blatantspace.com):**

```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

**For www subdomain:**

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

### How to Add in DNSimple

1. Log into [dnsimple.com](https://dnsimple.com)
2. Select domain: `blatantspace.com`
3. Go to DNS → Manage DNS Records
4. Click "Add Record"
5. Add the A record (for @)
6. Add the CNAME record (for www)
7. Save

---

## Step 5: Verify & SSL

- DNS propagation: 5-60 minutes
- Vercel auto-generates SSL certificate
- Visit: https://blatantspace.com
- Should work!

---

## Alternative: Vercel Nameservers (Easier)

Instead of adding individual DNS records, you can point your entire domain to Vercel:

### In DNSimple

1. Go to blatantspace.com → Name Servers
2. Click "Change Name Servers"
3. Add Vercel's nameservers:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`

### In Vercel

1. Go to Settings → Domains
2. Vercel handles everything automatically
3. SSL, redirects, everything just works

**This is the recommended approach!**

---

## Quick Checklist

- [ ] Push code to GitHub
- [ ] Import to Vercel and deploy
- [ ] Add blatantspace.com in Vercel domains
- [ ] Configure DNS (A + CNAME or nameservers)
- [ ] Wait for DNS propagation
- [ ] Visit https://blatantspace.com
- [ ] Celebrate! 🎉

---

## Expected Timeline

- Push to GitHub: 2 minutes
- Vercel deploy: 2-3 minutes
- DNS configuration: 5 minutes
- DNS propagation: 5-60 minutes
- **Total: 15-70 minutes to live**

---

## Post-Deploy

Once live:
- Test on mobile
- Share with friends
- Update Instagram bio link
- Send to potential clients
- Watch the inquiries roll in

**Your gallery is ready for the world! 🚀**
