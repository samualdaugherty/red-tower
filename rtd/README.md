# Red Tower Digital

Strategic design and development for modern brands.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 (CSS-based config)
- **Design Tokens**: Token Studio format (Figma export)
- **Fonts**: Anton, Allison, Montserrat (Google Fonts)
- **Animation**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Email**: Resend
- **Analytics**: Plausible
- **Utilities**: class-variance-authority, tailwind-merge, lucide-react

## Project Structure

```
rtd/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with fonts
│   └── page.tsx            # TEMP: Dev page (delete later)
├── styles/
│   ├── globals.css         # Global styles + Tailwind imports
│   └── themes.css          # Generated CSS variables (from tokens)
├── data/
│   └── design-tokens.json  # Design tokens (Token Studio export)
├── lib/
│   ├── tokens.ts           # Token utilities
│   └── analytics.ts        # Plausible tracker
├── scripts/
│   └── generate-theme.ts   # Token → CSS variables compiler
└── public/                 # Static assets
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

### 3. Design Tokens

Design tokens are located at `/data/design-tokens.json`. This file should be exported from Figma using Token Studio.

If you update the tokens file, regenerate the CSS variables:

```bash
npm run generate:theme
```

This will read `/data/design-tokens.json` and write `/styles/themes.css` with CSS variables for:
- **Colors**: bg, fg, accent, muted, surface, surface2, success, warning, danger
- **Typography**: header (Anton), subhead (Allison), body (Montserrat)
- **Shadows**: photo, clock, hands

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the temporary dev page.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run generate:theme` - Generate CSS variables from design tokens

## Design System

### Colors

The design system uses CSS variables mapped to Tailwind classes:

```tsx
<div className="bg-bg text-fg">           {/* Background + Foreground */}
<button className="bg-accent">            {/* Accent color */}
<p className="text-muted">                {/* Muted text */}
<div className="bg-surface border-surface2"> {/* Surface backgrounds */}
```

All colors are defined in `/styles/themes.css` as `--rtd-color-*` variables.

### Typography

Three font stacks are configured:

- `font-header` - Anton (display headers)
- `font-subhead` - Allison (script/cursive subheadings)
- `font-body` - Montserrat (body text, default)

```tsx
<h1 className="font-header">Header</h1>
<p className="font-subhead">Subheading</p>
<p className="font-body">Body text</p>
```

### Shadows

Three shadow effects are available:

- `shadow-photo` - Photo/image shadows
- `shadow-clock` - Clock element shadow (multi-layer)
- `shadow-hands` - Clock hands shadow

```tsx
<img className="shadow-photo" />
<div className="shadow-clock">...</div>
```

## Design Tokens Format

The `design-tokens.json` file should follow Token Studio export format:

```json
{
  "global": {
    "color": {
      "primary": {
        "c.r.e.a.m.": { "value": "#fffef0" },
        "black": { "value": "#000000" },
        "red tower": { "value": "#ff2b39" }
      }
    },
    "typography": {
      "header": { ... },
      "subhead": { ... },
      "body": { ... }
    },
    "effect": {
      "photo shadow": { ... },
      "clock-shadow": { ... },
      "clock hands": { ... }
    }
  }
}
```

## TODOs

### Immediate
- [ ] Integrate motion specifications (Framer Motion)
- [ ] Delete temporary dev page (`app/page.tsx`)

### Site Build
- [ ] Create actual site pages (home, about, work, contact)
- [ ] Build reusable components (headers, buttons, cards, etc.)
- [ ] Implement animations and interactions
- [ ] Add contact form with Resend integration
- [ ] Set up Plausible analytics script

### Deployment
- [ ] Configure production environment variables
- [ ] Set up CI/CD pipeline
- [ ] Generate sitemap (next-sitemap is configured)
- [ ] Add robots.txt
- [ ] Performance optimization

## Notes

- **Tailwind 4** uses CSS-based configuration via `@theme inline` in `globals.css`
- **Design tokens** must be regenerated after any changes to `/data/design-tokens.json`
- **Analytics** are disabled in development mode by default
- **ESLint** is configured via `eslint.config.mjs` (Next.js 15 flat config)

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4 Alpha](https://tailwindcss.com/docs/v4-alpha)
- [Token Studio](https://tokens.studio/)
- [Framer Motion](https://www.framer.com/motion/)
