# Blatant Space - Gallery Portfolio

**A dynamic, image-first gallery that showcases your work with random rotation on every visit.**

---

## 🎨 Design Philosophy

This isn't a traditional portfolio. It's an **art gallery** that:

- **Changes every visit** - Random image selection from your collection
- **Lets imagery speak** - Minimal text, maximum visual impact
- **Sharp edges** - No rounded corners, full-frame presentation
- **Video-ready** - Easy to swap images for videos later

**The work is the hero.**

---

## 🚀 Quick Start

```bash
# Install
npm install

# Run locally
npm run dev
```

Open http://localhost:3000 (or whatever port it assigns)

**Refresh the page** multiple times to see different image combinations!

---

## 📁 Project Structure

```
app/
├── components/
│   ├── GalleryHero.tsx      # Full-screen hero with random bg
│   ├── GalleryGrid.tsx      # Sharp-edged image grid
│   ├── GallerySection.tsx   # Full-screen section with bg image
│   ├── MinimalNav.tsx       # Floating minimal nav
│   └── ContactOverlay.tsx   # Contact section
├── page.tsx                 # Main page composition
├── layout.tsx
└── globals.css

lib/
├── images.ts               # Image pool configuration
└── types.ts

public/
└── gallery/
    ├── 2025-01-06/        # Your images from Jan 6
    └── 2026-01-05/        # Your images from Jan 5
```

---

## 🎲 How It Works

### Random Image Selection

Every time someone visits, the site randomly selects:
- **1 hero image** - Full-screen background
- **40 grid images** - Distributed across 3 grid sections
- **2 section backgrounds** - Break sections with text

**30 images currently in rotation** (11 from 2025-01-06, 19 from 2026-01-05)

### Image Types

Images are categorized in `lib/images.ts`:

- **`hero`** - Full-screen hero backgrounds (portrait works best)
- **`grid`** - Square grid images (any orientation)
- **`background`** - Section backgrounds (landscape works best)

---

## ➕ Adding New Images

### Method 1: Quick Script

```bash
./scripts/add-images.sh /path/to/new/images 2026-01-10
```

Then update `lib/images.ts` with the new paths.

### Method 2: Manual

1. **Copy images** to `public/gallery/YOUR-DATE/`
   ```bash
   mkdir public/gallery/2026-01-10
   cp ~/your-images/*.png public/gallery/2026-01-10/
   ```

2. **Update `lib/images.ts`:**
   ```typescript
   const images_2026_01_10: ImageItem[] = [
     { src: "/gallery/2026-01-10/image1.png", folder: "2026-01-10", type: "grid" },
     { src: "/gallery/2026-01-10/image2.png", folder: "2026-01-10", type: "hero" },
   ];
   
   export const allImages: ImageItem[] = [
     ...images_2025_01_06,
     ...images_2026_01_05,
     ...images_2026_01_10, // Add here
   ];
   ```

3. **Deploy:**
   ```bash
   git add .
   git commit -m "Add new gallery images"
   git push
   ```

---

## 🎬 Adding Videos (Future)

The structure is video-ready. When you're ready:

1. Add videos to `public/videos/`
2. Update `lib/images.ts` to include video items
3. Modify `GalleryGrid.tsx` to handle video type
4. Videos will autoplay, loop, and be muted (like Instagram)

**See `GALLERY-DESIGN.md` for detailed video integration guide.**

---

## 🎯 Current Layout

```
1. Full-Screen Hero
   └─ Random hero image background
   └─ "Blatant Space" text overlay

2. Grid Section (12 images)
   └─ 2 cols mobile, 3 tablet, 4 desktop

3. Break: "Gucci · Music Videos · Brand Campaigns"
   └─ Full-screen background image

4. Grid Section (16 images)

5. Break: "Characters That Feel Real"
   └─ Full-screen background image

6. Grid Section (12 images)

7. Contact Section
   └─ Email + social links
```

**Total: 40 images per page view, randomly selected from 30-image pool**

---

## 🎨 Design Details

### Sharp Edges
- **No rounded corners** anywhere
- Full-frame, edge-to-edge
- Modern, bold presentation

### Minimal Text
- Let imagery do the talking
- Only essential info
- Gallery feel, not blog

### Dark Aesthetic
- Charcoal background (`#2C2C2C`)
- Cream text (`#F5F1E8`)
- Images pop against dark

### Mobile-First
- Optimized for phone (most traffic)
- Touch-friendly
- Fast loading

---

## 🔧 Customization

### Change Number of Images

Edit `app/page.tsx`:
```typescript
<GalleryGrid count={24} /> // Show 24 instead of 12
```

### Change Section Text

Edit `app/page.tsx`:
```typescript
<GallerySection
  title="Your New Title"
  subtitle="Your new subtitle"
/>
```

### Change Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  cream: "#F5F1E8",
  charcoal: "#2C2C2C",
  rust: "#B85C50",
}
```

---

## 📱 Responsive Grid

- **Mobile (< 768px):** 2 columns
- **Tablet (768px - 1024px):** 3 columns
- **Desktop (> 1024px):** 4 columns

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Push to GitHub
git init
git add .
git commit -m "Gallery portfolio"
git push

# Deploy
vercel
```

Or import your GitHub repo in the Vercel dashboard.

### Environment

No environment variables needed! Everything is static.

---

## ⚡ Performance

- **140KB first load** (minimal JavaScript)
- **Lazy image loading** (only visible images load)
- **GPU-accelerated animations** (Framer Motion)
- **Static generation** (super fast)

### Optimization Tips

**Compress images before adding:**
- Target: < 300KB per image
- Use https://squoosh.app or ImageOptim
- WebP format for smaller files

---

## 📚 Documentation

- **`GALLERY-DESIGN.md`** - Complete design system guide
- **`DEPLOYMENT-GUIDE.md`** - Deployment instructions
- **`QUICKSTART.md`** - Get up and running fast

---

## 🎯 What Makes This Different

### Traditional Portfolio
❌ Static grid of work  
❌ Cards with descriptions  
❌ Same view every time  
❌ Text-heavy

### Your Gallery
✅ Random image rotation  
✅ Full-frame presentation  
✅ Different every visit  
✅ Image-first

---

## 💡 Content Strategy

### Keep It Fresh
- Add new images monthly
- 50+ images in rotation = always unique
- Remove old work occasionally

### Image Mix
- Mix portrait and landscape
- Variety of subjects
- Different moods/aesthetics
- Strong visuals that stand alone

### Trust Your Work
- Minimal explanations
- Let imagery speak
- No need to describe every piece
- Confidence in presentation

---

## 🔮 Roadmap

### Phase 2 (Future)
- [ ] Video support (swap images for videos)
- [ ] Instagram API integration
- [ ] Image metadata (hover info)
- [ ] Lightbox for full-screen viewing

### Phase 3 (Advanced)
- [ ] CMS integration
- [ ] Client-specific galleries
- [ ] Download high-res option
- [ ] Analytics on popular images

---

## 🎉 You're Ready

**What you have:**
- 30 images in rotation
- Random selection system
- Sharp, modern design
- Video-ready structure
- Mobile-optimized
- Ready to deploy

**What to do next:**
1. Run `npm run dev` and test it
2. Refresh multiple times (see random images)
3. Test on mobile view
4. Add more images from your collection
5. Deploy to Vercel
6. Share with the world

---

**Built for maximum visual impact. Ready to get you more work. 🚀**
