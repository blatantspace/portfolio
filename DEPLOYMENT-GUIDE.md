# 🚀 Deployment Guide - Blatant Space Portfolio

Your portfolio site is ready to deploy! Here's how to get it live on Vercel.

## Pre-Deployment Checklist

Before deploying, make sure you've done these things:

### 1. Add Your Images ✅

Add your work images to `public/work/`:

```
public/work/
├── gucci.jpg          (Gucci Horsebeat)
├── homeboy.jpg        (Homeboy Sandman)
├── visions.jpg        (Visions Of Hell)
├── beak.jpg           (BEAK> artwork)
├── hothead.jpg        (HOTHEAD campaign)
└── creatures.jpg      (Character library)
```

**Image specs:**
- Dimensions: 1200x1500px (4:5 aspect ratio)
- Format: JPG or PNG
- File size: < 500KB each (optimize with https://squoosh.app)

### 2. Update Contact Email ✅

In `app/components/Contact.tsx`, replace:

```typescript
href="mailto:hello@blatantspace.com"
```

With your actual email.

### 3. Add Social Links ✅

In `app/components/Contact.tsx`, update:

```typescript
<a href="https://instagram.com/blatant.space">Instagram</a>
<a href="https://twitter.com/blatantspace">Twitter</a>
```

### 4. Customize Content (Optional) ✅

Edit `lib/data.ts` to:
- Update work descriptions
- Add/remove services
- Modify press mentions

---

## Deploy to Vercel (5 Minutes)

### Method 1: GitHub + Vercel (Recommended)

1. **Push to GitHub:**

```bash
cd /Users/blatantspace/blatant-space/portfolio-site
git init
git add .
git commit -m "Initial portfolio site"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repo
   - Click "Deploy"
   - Done! Your site is live

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd portfolio-site
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- What's your project name? `blatant-space`
- In which directory? `./`
- Override settings? **N**

Your site will be live at: `https://blatant-space.vercel.app`

---

## Custom Domain Setup

### Add Your Domain in Vercel

1. Go to your project in Vercel
2. Settings → Domains
3. Add domain: `blatantspace.com`
4. Follow DNS instructions

### DNS Configuration

**If using Vercel nameservers (easiest):**
- Update your domain registrar to use Vercel nameservers
- Vercel handles everything

**If using your own DNS:**
- Add CNAME: `www` → `cname.vercel-dns.com`
- Add A record: `@` → `76.76.21.21`

---

## Post-Deployment

### Test Your Site

- ✅ Visit your live URL
- ✅ Test on mobile (most users will be on phone)
- ✅ Check all navigation links work
- ✅ Verify images load correctly
- ✅ Test contact email link
- ✅ Check social media links

### Add Analytics (Optional)

**Vercel Analytics (Recommended):**
1. Project Settings → Analytics
2. Enable Vercel Analytics
3. Free for up to 100k pageviews/month

**Or use Plausible/Simple Analytics:**
```typescript
// In app/layout.tsx, add to <head>
<Script src="https://plausible.io/js/script.js" data-domain="yourdomain.com" />
```

---

## Updating Your Site

### Add New Work

1. Add image to `public/work/new-project.jpg`
2. Update `lib/data.ts`:

```typescript
{
  id: "new-project",
  title: "New Project Title",
  client: "Client Name",
  category: "Music Video",
  year: "2024",
  description: "Description here",
  image: "/work/new-project.jpg",
  featured: true,
}
```

3. Commit and push:

```bash
git add .
git commit -m "Add new project"
git push
```

Vercel automatically redeploys!

---

## Performance

Your site is optimized for speed:

- ✅ Static generation (no server needed)
- ✅ Minimal JavaScript bundle (~141KB)
- ✅ Mobile-first responsive
- ✅ Scroll animations with Framer Motion
- ✅ Vercel Edge Network (global CDN)

**Expected load time:** < 2 seconds on 4G

---

## Troubleshooting

### Images not showing after deploy?

Make sure:
- Images are in `public/work/` folder
- Image paths in `lib/data.ts` start with `/work/`
- Images were committed to git

### Build failing on Vercel?

```bash
# Test build locally
npm run build

# Check for TypeScript errors
npm run lint
```

### Want to change colors?

Edit `tailwind.config.ts`:
```typescript
colors: {
  cream: "#YOUR_COLOR",
  charcoal: "#YOUR_COLOR",
  // ...
}
```

---

## Next Steps

Once your site is live:

1. **Share it** - Add to Instagram bio, email signature
2. **Test with real users** - Get feedback from creatives
3. **Track performance** - Enable Vercel Analytics
4. **Iterate** - Add new work as you complete projects

---

## Support

If you run into issues:
- Check [Next.js docs](https://nextjs.org/docs)
- Check [Vercel docs](https://vercel.com/docs)
- Or just ask me!

---

Your portfolio is ready to attract those dream clients. Go get 'em! 🚀
