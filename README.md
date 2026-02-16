# Oscar Boochever - Personal Website

A modern, responsive personal website built with Next.js, Tailwind CSS, and Framer Motion.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── globals.css     # Global styles and Tailwind theme
│   ├── layout.tsx      # Root layout with SEO metadata
│   └── page.tsx        # Main page component
├── components/
│   ├── Navigation.tsx  # Sticky nav with mobile hamburger menu
│   ├── Hero.tsx        # Hero section with image carousel
│   ├── About.tsx       # About section with bio
│   ├── Services.tsx    # Services grid
│   ├── Portfolio.tsx   # Project cards
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer with social links
└── data/
    ├── siteConfig.ts   # Site-wide settings and content
    ├── heroImages.ts   # Hero carousel images
    ├── services.ts     # Services data
    └── portfolio.ts    # Portfolio projects
```

## Customization

All content is stored in the `src/data/` directory for easy updates:

### Site Configuration (`src/data/siteConfig.ts`)

- Personal info (name, email)
- Social links
- Navigation items
- Hero content (tagline, CTAs)
- About section bio
- Contact form settings

### Hero Images (`src/data/heroImages.ts`)

Add your photos to `public/hero/` and update the config:

```typescript
export const heroImages: HeroImage[] = [
  {
    src: "/hero/nashville.jpg",
    alt: "Nashville skyline",
    caption: "Nashville, TN",
  },
  // Add more images...
];
```

### Services (`src/data/services.ts`)

Update service offerings with icons from [Lucide Icons](https://lucide.dev).

### Portfolio (`src/data/portfolio.ts`)

Add or update projects. For demo projects, replace `link: "#"` with actual URLs.

## Contact Form Setup

The contact form uses [Formspree](https://formspree.io). To enable it:

1. Sign up at https://formspree.io
2. Create a new form
3. Copy your form ID (looks like `xyzabc123`)
4. Update `src/data/siteConfig.ts`:

```typescript
export const contactContent = {
  // ...
  formAction: "https://formspree.io/f/YOUR_FORM_ID",
};
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project at [vercel.com](https://vercel.com)
3. Deploy (auto-detects Next.js settings)

Or use the CLI:

```bash
npx vercel
```

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Olive | `#5C6B4F` | Primary accent |
| Warm Brown | `#8B7355` | Secondary accent |
| Cream | `#F5F0E8` | Section backgrounds |
| Off-white | `#FAFAF7` | Main background |
| Charcoal | `#2C2C2C` | Text |

## Tech Stack

- [Next.js 16](https://nextjs.org) - React framework
- [Tailwind CSS v4](https://tailwindcss.com) - Styling
- [Framer Motion](https://framer.com/motion) - Animations
- [Lucide React](https://lucide.dev) - Icons

## Mobile Optimization

- Full viewport height hero (100svh)
- Touch targets minimum 44px
- Form inputs 16px+ font (prevents iOS zoom)
- Reduced motion support
- No horizontal overflow

## Files to Provide

Place in `public/`:

- `headshot.jpg` - Your photo (already included)
- `resume.pdf` - Your CV (already included)
- `hero/*.jpg` - Carousel images (placeholder setup ready)
