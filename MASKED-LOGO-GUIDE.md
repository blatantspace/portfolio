# Masked Logo Implementation Guide

Your "Blatant Space" wordmark uses **alpha masking** to reveal imagery through the letterforms. This creates a dynamic, living logo that changes with your work.

---

## How It Works

### The Mask Concept

```
[Background Image]  ←  Your artwork
       ↓
[Alpha Mask]        ←  Blatant Space wordmark (white or black version)
       ↓
[Revealed Image]    ←  Artwork shows through letterforms
```

The wordmark acts as a **window** into your imagery. The halftone texture gives it that tactile, printed feel.

---

## Two Versions

### White Version (`blatant-space-white.png`)
- Use on **dark backgrounds**
- Black areas are opaque, white areas reveal image
- Best for dark sections

### Black Version (`blatant-space-black.png`)  
- Use on **light backgrounds**
- Inverse of white version
- Best for light sections

They're **strategic inverses** - one reveals what the other hides.

---

## Component Usage

### Basic Masked Logo

```tsx
import MaskedLogo from "./components/MaskedLogo";

<MaskedLogo 
  maskVersion="white"
  cycleImages={true}
  cycleInterval={4000}
/>
```

### Props

**`maskVersion`** (optional)
- Type: `"white" | "black"`
- Default: `"white"`
- Which mask version to use

**`cycleImages`** (optional)
- Type: `boolean`
- Default: `true`
- Whether to cycle through images

**`cycleInterval`** (optional)
- Type: `number`
- Default: `4000` (4 seconds)
- Milliseconds between image changes

**`className`** (optional)
- Type: `string`
- Additional CSS classes for container

---

## Implementation Examples

### 1. Hero (Current)

```tsx
// Full-width hero with cycling images behind mask
<MaskedLogo 
  maskVersion="white"
  cycleImages={true}
  cycleInterval={4000}
  className="w-full max-w-3xl"
/>
```

Result: Your artwork cycles through the wordmark every 4 seconds

### 2. Navigation (Current)

```tsx
// Small logo in nav that cycles images
<MaskedLogo 
  maskVersion="white"
  cycleImages={true}
  cycleInterval={3000}
  className="w-32"
/>
```

Result: Mini living logo in nav bar

### 3. Static Logo (No Cycling)

```tsx
// Single random image, doesn't change
<MaskedLogo 
  maskVersion="white"
  cycleImages={false}
  className="w-64"
/>
```

### 4. Section Divider

```tsx
// Between sections, subtle reveal
<div className="py-16 px-6">
  <MaskedLogo 
    maskVersion="white"
    cycleImages={true}
    className="w-full max-w-2xl mx-auto opacity-60"
  />
</div>
```

### 5. Footer

```tsx
// Large footer logo
<footer className="bg-charcoal py-20">
  <MaskedLogo 
    maskVersion="white"
    cycleImages={true}
    className="w-full max-w-4xl mx-auto"
  />
</footer>
```

---

## Advanced Usage

### Control Which Images Are Used

Edit `MaskedLogo.tsx` to use specific image types:

```tsx
// Only use hero images
setCurrentImage(getRandomImage("hero"));

// Only use grid images  
setCurrentImage(getRandomImage("grid"));

// Use all images (default)
setCurrentImage(getRandomImage());
```

### Custom Animation Timing

```tsx
// Slow fade (2 seconds)
transition={{ duration: 2 }}

// Fast fade (0.5 seconds)
transition={{ duration: 0.5 }}

// No fade (instant)
transition={{ duration: 0 }}
```

### Manual Image Control

```tsx
const [imageIndex, setImageIndex] = useState(0);

<MaskedLogo 
  cycleImages={false}
  // Control externally with buttons/triggers
/>
```

---

## CSS Mask Properties

The magic happens with CSS masking:

```css
mask-image: url(/assets/blatant-space-white.png);
mask-size: contain;
mask-repeat: no-repeat;
mask-position: center;
```

**How it works:**
- Black areas of mask = opaque (shows background image)
- White areas of mask = transparent (hides background image)
- Grayscale = partial transparency (halftone effect)

---

## Performance Considerations

### Image Loading

- Mask images are small (~50KB each)
- Background images lazy load
- Only visible portion renders

### Browser Support

- **Modern browsers:** Full support (Chrome, Firefox, Safari, Edge)
- **Older browsers:** Shows solid logo (graceful degradation)

---

## Styling Tips

### Size Recommendations

**Hero:** `max-w-3xl` (768px)  
**Navigation:** `w-32` (128px)  
**Section divider:** `max-w-2xl` (672px)  
**Footer:** `max-w-4xl` (896px)

### Opacity Variations

```tsx
// Subtle
className="opacity-60"

// Normal
className="opacity-100"

// Very subtle
className="opacity-30"
```

### Responsive Sizing

```tsx
className="w-64 md:w-96 lg:w-[48rem]"
```

---

## Combining with Other Effects

### With Background Gradient

```tsx
<div className="relative bg-gradient-to-br from-charcoal to-slate">
  <MaskedLogo maskVersion="white" />
</div>
```

### With Overlay

```tsx
<div className="relative">
  <div className="absolute inset-0 bg-charcoal/60" />
  <MaskedLogo maskVersion="white" />
</div>
```

### With Blur Background

```tsx
<div 
  className="backdrop-blur-lg"
  style={{ backgroundImage: 'url(...)' }}
>
  <MaskedLogo maskVersion="white" />
</div>
```

---

## Troubleshooting

### Mask not showing?
**Check:** Assets at `/public/assets/blatant-space-white.png` and `blatant-space-black.png`

### Images cycling too fast/slow?
**Adjust:** `cycleInterval={5000}` (5 seconds)

### Want specific images only?
**Edit:** `MaskedLogo.tsx` to filter image pool

### Wrong mask version for background?
**Switch:** Use `white` on dark, `black` on light

---

## File Setup

Make sure your mask images are in the right place:

```
public/
└── assets/
    ├── blatant-space-white.png  ← For dark backgrounds
    └── blatant-space-black.png  ← For light backgrounds
```

---

## Creative Ideas

### 1. **Color Shift Effect**
Use colored backgrounds behind mask:

```tsx
<div className="bg-gradient-to-r from-rust to-sage">
  <MaskedLogo maskVersion="white" />
</div>
```

### 2. **Dual Mask**
Layer both versions for complex effects:

```tsx
<div className="relative">
  <MaskedLogo maskVersion="white" className="absolute" />
  <MaskedLogo maskVersion="black" className="opacity-50" />
</div>
```

### 3. **Interactive Mask**
Change on hover:

```tsx
<div 
  onMouseEnter={() => setCycling(false)}
  onMouseLeave={() => setCycling(true)}
>
  <MaskedLogo cycleImages={cycling} />
</div>
```

### 4. **Parallax Mask**
Scroll-triggered image changes:

```tsx
// Change image based on scroll position
useEffect(() => {
  const handleScroll = () => {
    if (scrollY > 500) {
      setImage(newImage);
    }
  };
});
```

---

## Why This Works

**For your aesthetic:**
- ✅ Image-first (your work IS the logo)
- ✅ Tactile (halftone texture)
- ✅ Nostalgic (printed feel)
- ✅ Dynamic (changes with your work)
- ✅ Confident (bold, living identity)

**Technically:**
- ✅ Performant (CSS masking is fast)
- ✅ Flexible (works anywhere)
- ✅ Scalable (any size)
- ✅ Accessible (still reads as logo)

---

**Your wordmark is now a living window into your work. 🎨✨**
