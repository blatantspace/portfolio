# 🚀 Quick Start Guide

Get your Blatant Space portfolio running in 5 minutes.

## Step 1: Install Dependencies

```bash
cd portfolio-site
npm install
```

## Step 2: Add Your Images

Create a `work` folder in `public`:

```bash
mkdir -p public/work
```

Add your project images (1200x1500px, 4:5 aspect ratio):
- `gucci.jpg`
- `homeboy.jpg`
- `visions.jpg`
- `beak.jpg`
- `hothead.jpg`
- `creatures.jpg`

## Step 3: Update Your Email

Open `app/components/Contact.tsx` and replace:

```typescript
href="mailto:hello@blatantspace.com"
```

With your actual email address.

## Step 4: Add Your Social Links

Update links in `app/components/Contact.tsx`:

```typescript
<a href="https://instagram.com/your-handle">Instagram</a>
<a href="https://twitter.com/your-handle">Twitter</a>
```

## Step 5: Run It

```bash
npm run dev
```

Open http://localhost:3000 and see your site!

## Step 6: Customize Content

Edit `lib/data.ts` to update:
- Work portfolio items
- Services descriptions
- Press mentions

## Step 7: Deploy to Vercel

```bash
# Install Vercel CLI (if you haven't)
npm i -g vercel

# Deploy
vercel
```

Or push to GitHub and import in Vercel dashboard.

---

## Optional: Add Hero Image

Replace the placeholder emoji in `app/components/Hero.tsx`:

1. Add your hero creature image to `public/hero.jpg`
2. Update the Hero component:

```tsx
<Image 
  src="/hero.jpg" 
  alt="Blatant Space creature"
  width={256}
  height={256}
  className="rounded-full"
/>
```

---

## Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Build errors?**
```bash
rm -rf .next
npm run build
```

**Vercel deployment issues?**
- Make sure all images exist in `public/work/`
- Check that email address is updated
- Run `npm run build` locally first

---

That's it! You now have a professional portfolio site ready to showcase your work.
