# CommitLore Landing Page - Next.js 15

Marketing landing page for CommitLore built with Next.js 15 App Router for optimal SEO and performance.

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📦 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion 12
- **Smooth Scrolling:** Lenis 1.3
- **Rendering:** Server-Side Rendering (SSR) + Client Components

## 🏗️ Project Structure

```
landing-page-next/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx             # Home page (wrapper)
│   ├── LandingPageClient.tsx # Main landing page client component
│   ├── globals.css          # Global styles
│   ├── privacy/
│   │   └── page.tsx         # Privacy policy page
│   └── terms/
│       └── page.tsx         # Terms of service page
├── public/
│   └── favicon.svg          # Favicon and static assets
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## 🎨 Features

### SEO Optimization

- ✅ Server-Side Rendering (SSR) for all pages
- ✅ Dynamic metadata with title templates
- ✅ Open Graph tags for social media
- ✅ Twitter Card tags
- ✅ JSON-LD structured data (Organization + Software Application)
- ✅ Canonical URLs
- ✅ Semantic HTML
- ✅ Proper image alt text

### Performance

- ✅ Automatic code splitting
- ✅ Optimized bundle size
- ✅ Image optimization (Next.js Image component)
- ✅ Font optimization
- ✅ Static generation where possible

### User Experience

- ✅ Smooth scrolling (Lenis)
- ✅ Smooth animations (Framer Motion)
- ✅ Responsive design
- ✅ Accessibility features
- ✅ Fast page transitions

## 📄 Pages

| Route | Description | SEO |
|-------|-------------|-----|
| `/` | Landing page with all sections | ✅ Optimized |
| `/privacy` | Privacy policy | ✅ Indexed |
| `/terms` | Terms of service | ✅ Indexed |

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```bash
# Required
NEXT_PUBLIC_APP_URL=https://commitlore.com

# Optional
NEXT_PUBLIC_API_URL=https://api.commitlore.com
NEXT_PUBLIC_ENABLE_ANALYTICS=true
```

See `.env.example` for all available variables.

### Metadata (SEO)

Edit `app/layout.tsx` to customize:
- Site title
- Description
- Keywords
- Social media images
- Structured data

### Styling

- **Global styles:** `app/globals.css`
- **Tailwind config:** `tailwind.config.ts`
- **Components:** Inline Tailwind classes + Framer Motion

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production
vercel --prod
```

### Docker

```bash
# Build
docker build -t commitlore-landing .

# Run
docker run -p 3000:3000 commitlore-landing
```

### Static Export (Not Recommended for SEO)

```bash
# Generate static HTML
npm run build

# Deploy the .next folder to any static host
```

## 📊 SEO Checklist

Before deploying to production:

- [ ] Update `NEXT_PUBLIC_APP_URL` in `.env.production`
- [ ] Customize metadata in `app/layout.tsx`
- [ ] Add Google Analytics ID (if using)
- [ ] Set up Search Console
- [ ] Submit sitemap to search engines
- [ ] Test with Lighthouse (aim for 90+ SEO score)
- [ ] Verify Open Graph tags with [OpenGraph.xyz](https://www.opengraph.xyz/)
- [ ] Test structured data with [Schema.org Validator](https://validator.schema.org/)

## 🧪 Testing

### Lighthouse SEO Audit

```bash
npm run build
npm start

# Run Lighthouse in Chrome DevTools
# Target scores:
# - Performance: 90+
# - Accessibility: 100
# - Best Practices: 100
# - SEO: 100
```

### Metadata Testing

```bash
# Open in browser
npm run dev

# Check <head> tags in DevTools:
# - View Page Source
# - Look for <meta> tags
# - Verify JSON-LD structured data
```

## 🔍 SEO Features Implemented

### Meta Tags

```html
<title>CommitLore - Turn Git Commits into Engaging Content</title>
<meta name="description" content="..."/>
<meta name="keywords" content="..."/>
```

### Open Graph

```html
<meta property="og:title" content="CommitLore"/>
<meta property="og:description" content="..."/>
<meta property="og:image" content="..."/>
<meta property="og:url" content="https://commitlore.com"/>
```

### Twitter Cards

```html
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="CommitLore"/>
<meta name="twitter:description" content="..."/>
<meta name="twitter:image" content="..."/>
```

### Structured Data

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CommitLore",
  "url": "https://commitlore.com",
  "logo": "https://commitlore.com/logo.png"
}
```

## 🐛 Troubleshooting

### Build Errors

**Problem:** `Module not found: Can't resolve 'lenis'`

**Solution:**
```bash
npm install lenis framer-motion
```

### Hydration Errors

**Problem:** Hydration mismatch with client components

**Solution:** Ensure all interactive components are marked with `'use client'`

### Smooth Scrolling Not Working

**Problem:** Lenis smooth scrolling not initializing

**Solution:** Check that `LandingPageClient.tsx` has `'use client'` directive and `useEffect` is properly set up

## 📝 Migration Notes

This Next.js app was migrated from a Vite/React SPA. Key changes:

- React Router → Next.js App Router
- Client-side rendering → Server-side rendering
- No SEO metadata → Comprehensive SEO
- Manual routing → File-based routing

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test locally: `npm run dev`
4. Build production: `npm run build`
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🔗 Related Projects

- [User Dashboard](../user-dashboard) - React 19 + Vite
- [API](../api) - NestJS backend
- [Admin Dashboard](../admin-dashboard) - Admin panel

## 📧 Support

- Website: https://commitlore.com
- Email: support@commitlore.com
- Docs: https://docs.commitlore.com
