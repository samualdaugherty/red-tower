# Red Tower Digital - Build Summary

## Project Status: Active Development 🚧

Three major pages built (Home, About, Work) with sophisticated animations, responsive design, and reusable component architecture.

---

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with CSS Variables
- **Animations**: Framer Motion (spring physics + quick fade patterns)
- **Fonts**: Google Fonts (Anton, Allison, Montserrat)
- **Design Tokens**: Figma Token Studio export (`/data/design-tokens.json`)
- **Dev Server**: http://localhost:3000

---

## Design System

### Animation Patterns (`/lib/animations.ts`)
- **quickSpring**: Stiffness 300, Damping 20, Mass 1 (for position/scale)
- **quickFade**: 150ms duration (for opacity)
- **quickTransition**: CSS transitions (200ms, cubic-bezier)

### Colors
- **Red** (`#FF2B39`): Accent, active states, CTAs
- **Cream** (`#E6E8DA`): Foreground text, light backgrounds
- **Black** (`#0A0A0A`): Background, dark sections

### Typography
- **Anton**: Headers (96px-164px desktop, scales down mobile)
- **Allison**: Subheadings, decorative text
- **Montserrat**: Body text (light 300, semibold 600)

### Key Design Patterns
- **Content-Aware Navigation**: Icons/text change color based on background
- **Parallax Scroll**: Hero sections fade/shrink as you scroll
- **Sticky Headers**: Section headlines stick and shrink on scroll
- **Spring Physics**: All position/scale animations use spring physics
- **Quick Fade**: All opacity transitions use 150ms

---

## Pages

### 1. Homepage (`/app/page.tsx`)

**Sections:**
1. **Hero** (`hero.tsx`)
   - 100vh height with integrated navigation
   - Parallax scroll: fade (1→0), shrink (1.0→0.8), slow scroll (25% speed)
   - Logo animates on scroll: 164px → 24px, rotates -90°
   - Plus icon rotates 135° to become X
   - Content-aware: nav changes color based on section background
   - Navigation opens on scroll, slides links from behind icon

2. **Goals** (`goals.tsx`)
   - Section headline with scroll animation
   - 3 service cards (Research, Product Design, Consulting)
   - Rounded corner transition to next section
   - Checkmarks styled as red circles with cream checks

3. **Focus** (`focus.tsx`)
   - Interactive service selector (Research, Product Design, Consulting, Support)
   - Desktop: Hover to display content
   - Mobile: Click to swap content
   - Content fades in/out with vertical alignment

4. **Clients** (`clients.tsx`)
   - "Recent Work" section with corner borders
   - LinkOutButton integration
   - Client logo grid (grayscale, 50% opacity)
   - Responsive layout (scrollable on mobile)

5. **Process** (`process.tsx`)
   - Quote section with large SVG quotation marks
   - Background image with overlay
   - Three-up content section (max-width 1440px)

6. **Contact CTA** (`contact-cta.tsx`)
   - Final section with headline

---

### 2. About Page (`/app/about/page.tsx`)

**Sections:**
1. **AboutHero** (`about-hero.tsx`)
   - Identical to homepage hero (parallax, navigation)
   - Logo always in rotated state (non-homepage)
   - Background image: `/images/about-hero-bg.png`

2. **AboutTeam** (`about-team.tsx`)
   - Two-member section (Ben, Sam)
   - Images with `shadow-photo` and `rounded-2xl`
   - Philosophy section with corner borders
   - Rounded corner transition

3. **AboutEthos** (`about-ethos.tsx`)
   - "What we do" centered heading
   - 3-up ethos columns (specialization, definition, efficiency)
   - Cream background, black text
   - Inverted rounded corner transition

4. **Contact03** (`contact-03.tsx`)
   - Contact section headline

---

### 3. Work Page (`/app/work/page.tsx`)

**Sections:**
1. **WorkHero** (`work-hero.tsx`)
   - Parallax scroll effect
   - Background gradient: `linear-gradient(180deg, #0A0A0A 0%, rgba(10, 10, 10, 0.50) 25.06%, #0A0A0A 100%)`
   - Background image: `/images/work-bg.png`

2. **WorkExamples** (`work-examples.tsx`)
   - 4 portfolio items (Daily Rundown, Lacon Chamber, St. Paul UCC, INTRVL)
   - Sticky card stack effect (position: sticky, incremental top offsets)
   - Desktop: Summary left, shots right
   - Mobile: Shots first, summary below
   - Corner borders, LinkOutButton/ComingSoonBadge integration

3. **WorkFAQ** (`work-faq.tsx`)
   - Two-column layout: "Frequently Asked" text left, accordion right
   - 7 FAQ items (placeholder content)
   - Accordion: `/01 Question` format with plus/X icon

---

## Reusable Components

### UI Components (`/components/ui/`)

#### **SectionHeadline** (`section-headline.tsx`)
- Scroll-linked animation: shrinks from full size to 0.4 scale
- Becomes sticky at top with frosted glass backdrop
- Unsticks 170px before section end
- Variants: `dark` (cream text) and `light` (black text)
- Props: `title`, `number` (e.g., "/01"), `codeLeft` (snippet), `variant`

#### **Button** (`button.tsx`)
- Primary button with transforming red border element
- Hover: border scales and repositions
- Framer Motion spring animation

#### **LinkOutButton** (`link-out-button.tsx`)
- Circular button with external link icon
- Default: red border, transparent background
- Hover: red background, icon rotates 180° + fades, "Visit" text appears
- Sizes: `small` (40px), `default` (48px), `large` (64px)
- Variants: `light` (black icon) and `dark` (cream icon)
- Dynamic sizing scales with parent text

#### **FAQAccordion** (`faq-accordion.tsx`)
- Accordion with numbered questions (`/01`, `/02`, etc.)
- Plus icon (24x24) rotates 135° to X when open
- Only one item open at a time
- Specs:
  - Question number: 24px/100% (header-xs)
  - Question text: 20px/150% semibold (body-lg-bold)
  - Answer text: 16px/150% light (body-1)
  - Header padding: 12px x 8px
  - Answer padding: 12px x 12px
  - Red bottom border, 16px gap between items

#### **PortfolioItem** (`portfolio-item.tsx`)
- Desktop: Two-column (summary left 375px, shots right flex-1)
- Mobile: Stacked (shots first, summary below)
- Corner borders (top-left, bottom-right)
- Images with backdrop-blur containers
- Sticky positioning (top: 60px)
- Props: `title`, `description`, `desktopImage`, `mobileImage`, `link`, `comingSoon`, `index`

#### **ComingSoonBadge** (`coming-soon-badge.tsx`)
- Red border, rounded-full
- "Coming Soon" text

#### **PlusIcon** (`plus-icon.tsx`)
- Inline SVG (no image files)
- Dynamic fill/stroke based on props
- Props: `isOpen` (changes to red when true), `isDarkBackground` (changes to black when true)

#### **QuoteMark** (`quote-mark.tsx`)
- Large SVG quotation mark (red)
- Reusable for quote sections

#### **ScrollRestoration** (`scroll-restoration.tsx`)
- Resets scroll position on route change
- Uses `usePathname` to detect navigation

#### **NavLinkItem** (in `hero.tsx`)
- Animated red box that changes size/position for default/hover/active states
- Uses spring physics for smooth transitions

### Layout Components (`/components/layout/`)

#### **Footer** (`footer.tsx`)
- Three-column layout: contact info, "No socials" (Allison font), nav links
- Copyright and legal text
- Red bottom border

---

## Key Features & Patterns

### 1. Content-Aware Navigation
- Navigation elements (logo, links, plus icon) change color based on background
- Sections have `data-background="light"` or `data-background="dark"`
- JavaScript checks scroll position and `getBoundingClientRect()` to determine current background
- Cream/red on dark backgrounds, black on light backgrounds

### 2. Parallax Scroll Effects
- Hero sections: Opacity fade (1→0), scale shrink (1.0→0.8), slow scroll (25% speed)
- Content slides over hero as user scrolls
- Uses `requestAnimationFrame` for 60fps performance

### 3. Sticky Scroll Animations
- `SectionHeadline`: Shrinks and sticks to top, unsticks before section end
- `PortfolioItem`: Cards stack with incremental `top` offsets (60px, 110px, 160px, etc.)

### 4. Page Transitions
- Pages slide up from bottom using Framer Motion
- `initial={{ y: "100vh" }}`, `animate={{ y: 0 }}`, `transition={quickSpring}`

### 5. Mobile Navigation
- Full-screen flyout rotates 180° from top-right corner
- Red background, cream logo and X icon
- Nav links at bottom with black separators
- Active state: horizontal line through text
- Auto-closes on link click

### 6. Logo Animation (Homepage)
- Desktop: 164px → 24px on scroll
- Mobile: 64px → 24px on scroll
- Rotates -90° when shrunk
- Always small + rotated on non-homepage pages

### 7. Responsive Design
- Mobile-first approach
- Breakpoints: 393px (mobile), 768px (`md:`), 1024px (`lg:`)
- Most text sizes responsive across breakpoints
- Flexible layouts (flex-col → flex-row)

---

## Challenges & Solutions

### 1. Sticky Card Animation
- **Challenge**: Create scroll-linked scale/fade effect for portfolio cards
- **Attempts**: CSS Scroll-Driven Animations, JavaScript with `offsetTop` tracking
- **Issue**: `offsetTop` changes when element becomes `position: sticky`
- **Solution**: Simplified to basic sticky stacking without animation (prioritized other features)

### 2. Particles Background
- **Challenge**: Add interactive particles to hero section using `react-tsparticles`
- **Issue**: Persistent module resolution errors, dependency conflicts
- **Solution**: Removed particles feature, focused on core animations

### 3. Figma MCP Integration
- **Challenge**: Figma MCP links returning only "a" characters instead of design specs
- **Issue**: MCP integration not working reliably
- **Solution**: User provides direct specs (font sizes, spacing, colors) - more accurate anyway

### 4. Turbopack Conflicts
- **Challenge**: Turbopack panic errors related to `globals.css` shadow definitions
- **Solution**: Moved shadow utilities outside `@theme` block to plain CSS classes

### 5. Image Aspect Ratios
- **Challenge**: Portfolio mobile screenshots showing as small gray squares
- **Issue**: Missing height constraints and aspect ratios
- **Solution**: Fixed width + aspect ratio for mobile images, `object-contain` for proper scaling

---

## File Structure

```
rtd/
├── app/
│   ├── layout.tsx              # Root layout with fonts, ScrollRestoration
│   ├── page.tsx                # Homepage (Hero, Goals, Focus, Clients, Process, ContactCTA)
│   ├── about/
│   │   └── page.tsx            # About page (AboutHero, AboutTeam, AboutEthos, Contact03)
│   └── work/
│       └── page.tsx            # Work page (WorkHero, WorkExamples, WorkFAQ)
├── components/
│   ├── layout/
│   │   └── footer.tsx          # Site footer
│   ├── sections/
│   │   ├── hero.tsx            # Homepage hero with navigation
│   │   ├── goals.tsx           # Homepage section 2
│   │   ├── focus.tsx           # Homepage section 3
│   │   ├── clients.tsx         # Homepage section 4
│   │   ├── process.tsx         # Homepage section 5
│   │   ├── contact-cta.tsx     # Homepage section 6
│   │   ├── about-hero.tsx      # About hero
│   │   ├── about-team.tsx      # About team section
│   │   ├── about-ethos.tsx     # About ethos section
│   │   ├── contact-03.tsx      # Contact section (About)
│   │   ├── work-hero.tsx       # Work hero
│   │   ├── work-examples.tsx   # Work portfolio section
│   │   └── work-faq.tsx        # Work FAQ section
│   └── ui/
│       ├── button.tsx          # Primary button
│       ├── coming-soon-badge.tsx # Coming Soon badge
│       ├── faq-accordion.tsx   # Reusable FAQ accordion
│       ├── input.tsx           # Input with floating label
│       ├── link-out-button.tsx # External link button
│       ├── plus-icon.tsx       # Plus/X icon SVG
│       ├── portfolio-item.tsx  # Portfolio card
│       ├── quote-mark.tsx      # Quotation mark SVG
│       ├── scroll-restoration.tsx # Scroll position reset
│       ├── section-headline.tsx # Sticky section header
│       └── textarea.tsx        # Textarea with floating label
├── lib/
│   ├── animations.ts           # Animation config (quickSpring, quickFade)
│   └── cn.ts                   # Class name utility
├── styles/
│   ├── globals.css             # Global styles, shadow utilities
│   └── themes.css              # Generated CSS variables
├── data/
│   └── design-tokens.json      # Figma design tokens
└── scripts/
    └── generate-theme.ts       # Token → CSS variable generator
```

---

## Assets

### Images Required
- `/public/images/hero-bg.png` - Homepage hero background
- `/public/images/about-hero-bg.png` - About hero background
- `/public/images/work-bg.png` - Work hero background
- `/public/images/ben-white.png` - Team member photo
- `/public/images/sam-daugherty.png` - Team member photo
- `/public/images/portfolio/daily-rundown-desktop.png`
- `/public/images/portfolio/daily-rundown-mobile.png`
- `/public/images/portfolio/lacon-desktop.png`
- `/public/images/portfolio/lacon-mobile.png`
- `/public/images/portfolio/stpaul-desktop.png`
- `/public/images/portfolio/stpaul-mobile.png`
- `/public/images/portfolio/intrvl-1.png`
- `/public/images/portfolio/intrvl-2.png`

### SVG Assets
- All icons are inline SVGs (no external files)
- Plus/X icon, external link icon, quotation marks all inline

---

## Known Issues

1. **Missing Images**: Several placeholder images need to be replaced with actual assets
2. **FAQ Content**: WorkFAQ has 7 placeholder Q&A items that need real content
3. **Mobile Screenshot Sizing**: Portfolio mobile screenshots may need fine-tuning for different aspect ratios

---

## Next Steps

### Immediate
1. Add real FAQ content to WorkFAQ
2. Replace placeholder images with final assets
3. Create Contact page with form
4. Add footer to work/about pages if needed

### Future Enhancements
- Individual project case study pages
- Blog/Learn section
- SEO optimization (next-sitemap configured but not implemented)
- Analytics integration (Plausible configured but not implemented)
- Performance audit
- Accessibility audit
- Cross-browser testing (especially for sticky effects)

---

## Important Context for Development

### Manual Changes to Log
When resuming work, note that the user frequently makes manual adjustments to:
- Corner border rotations and positioning
- Spacing and padding values
- Text sizes and line heights
- Image aspect ratios

Always ask to confirm manual changes before overwriting them.

#### Logged manual changes (Work FAQ)
- `components/sections/work-faq.tsx`:
  - Added `className="pt-9 md:pt-4"` to `SectionHeadline` for spacing.
  - Updated content wrapper padding to `px-6 md:px-8 py-8 md:py-32`.
  - Replaced unfinished `/contact` route link with styled text (`<span class="text-accent font-semibold">contact us</span>`) to avoid navigation errors until the page exists.
- `components/ui/faq-accordion.tsx`:
  - Header padding set to `px-3 py-2` (12x8) to match Figma.
  - Question number split into red `/` + black number at 50% opacity.
  - Plus icon scales via container (`w-6 h-6`) with `className="w-full h-full"`.
  - Answer uses `p-3` and `whitespace-pre-line` for multi-paragraph content.

### Design Specs Workflow
1. User provides direct specs (preferred): "24px/100% header-xs"
2. Figma MCP links may not work reliably
3. When in doubt, ask for specific measurements

### Animation Principles
- **Position/Scale**: Always use `quickSpring` (Framer Motion)
- **Opacity**: Always use `quickFade` (150ms)
- **Spring Physics**: Stiffness 300, Damping 20, Mass 1
- **No time-based transforms**: Use spring physics, not duration-based

### Code Style
- TypeScript strict mode
- Tailwind for all styling
- CSS variables for design tokens
- Client components marked with `"use client"`
- Semantic HTML with accessibility in mind

---

## Build Log

### Session 1-3: Foundation & Homepage
- Set up Next.js 15 + TypeScript + Tailwind
- Configured design tokens from Figma
- Built Button, Input, Textarea, NavLink components
- Built Navigation (desktop + mobile flyout)
- Built Footer
- Built Homepage sections (Hero through ContactCTA)

### Session 4-5: Advanced Navigation & Animation
- Integrated navigation into Hero component
- Implemented parallax scroll effects
- Added content-aware navigation color changes
- Built logo shrink/rotate animation
- Added spring physics to all position/scale animations
- Implemented plus icon rotation (135°)

### Session 6-7: Section Headlines & Polish
- Built SectionHeadline with scroll-linked shrinking
- Added sticky behavior with frosted glass backdrop
- Implemented headline unstick logic (170px before section end)
- Added rounded corner transitions between sections

### Session 8-9: About Page
- Built AboutHero (identical to homepage hero)
- Built AboutTeam with member photos
- Built AboutEthos with 3-up columns
- Implemented scroll restoration on route change

### Session 10-11: Work Page - Portfolio
- Built WorkHero with custom gradient
- Built PortfolioItem component (responsive, 2-column/stacked)
- Built LinkOutButton with rotation + fade animation
- Built ComingSoonBadge
- Added 4 portfolio items to WorkExamples
- Attempted sticky card scroll animation (simplified to basic sticky)

### Session 12: Work Page - FAQ
- Built FAQAccordion component (reusable)
- Built WorkFAQ section with 2-column layout
- Implemented numbered questions with plus/X icons
- Accordion: one open at a time, spring physics

---

**Last Updated**: Session 12 (Work FAQ completion)
**Status**: Three pages functional, ready for content population and asset replacement
