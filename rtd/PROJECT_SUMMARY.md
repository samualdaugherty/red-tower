# Red Tower Digital - Project Summary

**Last Updated**: Current Session  
**Status**: Active Development - Process Page In Progress

---

## What We're Building

A modern, animated website for Red Tower Digital built with Next.js 15, TypeScript, and Tailwind CSS. The site features sophisticated scroll animations, parallax effects, and a content-aware navigation system.

---

## Current Status

### ✅ Completed Pages

1. **Homepage** (`/`) - Fully functional
   - Hero with parallax scroll
   - Goals, Focus, Clients, Process, Contact CTA sections
   - Content-aware navigation

2. **About Page** (`/about`) - Fully functional
   - Hero section
   - Team section (Ben & Sam)
   - Ethos section
   - Contact section

3. **Work Page** (`/work`) - Fully functional
   - Hero section ("Curated Selection")
   - Portfolio examples (4 items: Daily Rundown, Lacon Chamber, St. Paul UCC, INTRVL)
   - FAQ section with accordion (7 questions with real content)

### 🚧 In Progress

4. **Process Page** (`/process`) - Hero section complete
   - ✅ ProcessHero component built
   - ⏳ Additional sections needed (see Next Steps)

### ❌ Not Started

5. **Contact Page** (`/contact`) - Route doesn't exist yet
   - Navigation links reference it but it needs to be created

---

## What We're Working On Right Now

**Current Focus**: Building the Process page

**Just Completed**:
- Created `process-hero.tsx` component based on `work-hero.tsx` template
- Uses same navigation, spacing, and animations as work hero
- Background image: `/images/hero-bg.png` (same as homepage)
- Background gradient: Same as work hero (`linear-gradient(180deg, #0A0A0A 0%, rgba(10, 10, 10, 0.50) 25.06%, #0A0A0A 100%)`)
- Title: "Work with people"
- Content: Copy from Figma about working with humans vs. tutorials/documentation

**Next Immediate Steps**:
1. Build additional Process page sections (see Figma for design)
2. Add those sections to `/app/process/page.tsx`

---

## Key Decisions & Context

### Manual Changes to Preserve

When editing files, be aware the user frequently makes manual adjustments to:
- Corner border rotations and positioning
- Spacing and padding values (`pt-9 md:pt-4`, `py-8 md:py-32`, etc.)
- Text sizes and line heights
- Image aspect ratios

**Recent Manual Changes Logged**:
- `work-faq.tsx`: Added `className="pt-9 md:pt-4"` to SectionHeadline, updated padding to `px-6 md:px-8 py-8 md:py-32`
- Updated "contact us" text to say "Working with Red Tower" instead of "Working with us"
- `portfolio-item.tsx`: Added `showDesktopBorder` and `desktopFit` props for INTRVL project customization

### Important Patterns

1. **Hero Components**: All hero sections use parallax scroll effects (fade, scale, slow scroll)
2. **Navigation**: Content-aware - changes color based on background (light/dark sections)
3. **Logo**: Always rotated/small on non-homepage pages
4. **Process Link**: Should be active when on `/process` route

### Component Props Added Recently

- `PortfolioItem`:
  - `showDesktopBorder?: boolean` (default: true) - Toggle border around desktop screenshot
  - `desktopFit?: "cover" | "contain"` (default: "cover") - Object-fit for desktop image
  - Used for INTRVL project (no border, object-contain)

---

## Next Steps

### Immediate (Process Page)

1. **Build Process Page Sections**
   - Check Figma for Process page design beyond hero
   - Create section components similar to other pages
   - Add sections to `/app/process/page.tsx`

2. **Review Process Hero**
   - Verify all styling matches Figma exactly
   - Test responsive behavior
   - Confirm navigation shows "Process" as active

### Short Term

3. **Create Contact Page**
   - Route exists in navigation but page doesn't exist
   - Causing potential navigation errors (currently using styled text instead of links in some places)

4. **Content Updates**
   - Replace any remaining placeholder content
   - Ensure all FAQ answers are final
   - Verify all image assets are in place

### Future Enhancements

- Individual project case study pages
- Blog/Learn section
- SEO optimization (next-sitemap configured)
- Analytics integration (Plausible configured)
- Performance audit
- Accessibility audit

---

## Future Features (Planned)

### 1. Site Builder DIY Guide ✅ **Priority: High**
**Status**: Not Started  
**Location**: Homepage Goals section links to "handy guide" (`/components/sections/goals.tsx` line 28-32)

**Options:**
- **PDF Download**: Upload PDF to `/public/` and link directly
- **Web Page**: Create `/learn/site-builder-diy` page with full guide content (better for SEO)

**Recommendation**: Web page is better for SEO and user experience, but PDF is quicker to implement. Can start with PDF, convert to page later.

**Action Items:**
- [ ] Create PDF or design web page content
- [ ] Upload PDF to `/public/downloads/site-builder-diy.pdf` OR create `/app/learn/site-builder-diy/page.tsx`
- [ ] Update link in `goals.tsx` from `href="#"` to actual URL

---

### 2. Email Marketing Landing Pages 📧
**Status**: Planned (content TBD)  
**Purpose**: Custom landing pages for email marketing campaigns

**Technical Considerations:**
- Can create dynamic routes: `/campaigns/[slug]` for easy management
- Use existing design system components
- Track campaign performance (maybe integrate with analytics)

**Action Items:**
- [ ] Determine number of landing pages needed
- [ ] Gather content/design requirements
- [ ] Create routing structure (`/app/campaigns/[slug]/page.tsx`)
- [ ] Build reusable landing page template

---

### 3. Automated Email Drip Campaign System 🤖
**Status**: Research Phase  
**Purpose**: Automated 3-4 email drip campaign to potential clients

**Initial Thoughts:**
- Upload list of potential clients via admin
- Trigger automated email sequence
- Track opens/clicks

**Technical Options:**

**Option A: Serverless Functions + Cron**
- Next.js API routes handle email sending
- Vercel Cron Jobs or external scheduler (cron-job.org)
- Store campaign data in database (Vercel Postgres, Supabase, or MongoDB)
- Use Resend for sending emails (already integrated)

**Option B: Third-Party Service**
- Use email marketing platform (Mailchimp, ConvertKit, SendGrid Marketing)
- Integrate via API
- Manage campaigns externally

**Option C: AI Agent Workflow**
- Use OpenAI API or similar for personalized email content
- Generate custom emails based on company info
- More sophisticated but requires AI API costs

**Recommended Approach**: Start with Option A (serverless + cron) for full control, migrate to Option B if complexity grows.

**Required Components:**
- Admin interface for uploading/managing contact lists
- Email template system
- Campaign scheduler
- Email tracking (opens, clicks)
- Unsubscribe handling

**Action Items:**
- [ ] Decide on approach (A, B, or C)
- [ ] Set up database for contacts/campaigns
- [ ] Build admin interface (if Option A)
- [ ] Create email templates
- [ ] Implement scheduler/cron job
- [ ] Add tracking/analytics

---

### 4. Admin Dashboard 🔐
**Status**: Conditional (depends on #3)  
**Purpose**: Manage email campaigns, upload contact lists, view analytics

**Features (if needed):**
- Upload/manage contact lists (CSV import)
- Create/edit email campaigns
- View campaign performance
- Manage email templates
- User authentication (simple or full auth system)

**Technical Considerations:**
- Could use Next.js middleware for auth
- Simple approach: Password-protected route
- Full approach: Auth system (NextAuth.js, Clerk, etc.)
- Database for storing data

**Dependencies**: 
- Only needed if we build Option A for email campaigns
- If using Option B (third-party service), admin might not be needed

**Action Items:**
- [ ] Decide if admin is needed based on email campaign approach
- [ ] Design admin interface
- [ ] Implement authentication
- [ ] Build CRUD operations for campaigns/contacts

---

## Figma Integration

**MCP Integration**: Figma MCP is working! Use it to get design specs:
- Example: `https://www.figma.com/design/5umkkoDmavFaz4thIYX2au/Red-Tower-2026?node-id=775-2511&m=dev&t=rOhLw27ubLSuJExr-1`
- Extract node ID from URL (e.g., `775:2511`)
- Use `get_design_context` and `get_screenshot` MCP tools

**Note**: Convert Figma values to Tailwind classes where possible (e.g., `px-4` instead of `px-[16px]`)

---

## Technical Stack Quick Reference

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 with CSS Variables
- **Animations**: Framer Motion (spring physics)
- **Fonts**: Anton (headers), Allison (subhead), Montserrat (body)
- **Design Tokens**: `/data/design-tokens.json` → `/styles/themes.css`

---

## File Structure

```
rtd/
├── app/
│   ├── page.tsx           # Homepage ✅
│   ├── about/page.tsx     # About page ✅
│   ├── work/page.tsx      # Work page ✅
│   └── process/page.tsx    # Process page 🚧 (hero only)
├── components/
│   ├── sections/          # Page sections
│   │   ├── hero.tsx       # Homepage hero ✅
│   │   ├── about-hero.tsx # About hero ✅
│   │   ├── work-hero.tsx  # Work hero ✅
│   │   ├── process-hero.tsx # Process hero ✅
│   │   └── ... (other sections)
│   └── ui/                # Reusable components
│       ├── faq-accordion.tsx ✅
│       ├── portfolio-item.tsx ✅
│       └── ... (other UI components)
└── BUILD-SUMMARY.md       # Detailed technical reference
```

---

## Common Issues & Solutions

### Issue: Linter showing false errors
- **Solution**: TypeScript compilation passes, build succeeds - these are often stale linter cache. Restart TypeScript server if needed.

### Issue: Navigation link to `/contact` breaks
- **Solution**: `/contact` route doesn't exist yet. Use styled text (`<span>`) instead of `<Link>` until page is created.

### Issue: Multiple dev servers running
- **Solution**: Kill all processes: `pkill -f "next dev"` then restart fresh.

### Issue: Figma MCP returning only "a" characters
- **Solution**: This was resolved - MCP is working now. Use node IDs correctly (format: `775:2511`).

---

## Getting Started (For New Contributors)

1. **Read First**: `BUILD-SUMMARY.md` for detailed technical specs
2. **Check Status**: This file (PROJECT_SUMMARY.md) for current progress
3. **Run Dev Server**: `npm run dev` (usually runs on port 3000)
4. **Figma Access**: Use MCP tools to pull design specs from Figma
5. **Pattern**: Follow existing component patterns (check similar components first)

---

## Important Notes

- **Don't Override Manual Changes**: User frequently adjusts spacing, borders, etc. Always check BUILD-SUMMARY.md for logged manual changes
- **Responsive First**: All components should work on mobile (< 768px) and desktop (>= 768px)
- **Design Tokens**: Use CSS variables and Tailwind classes, convert Figma values where possible
- **Animations**: Use `quickSpring` for position/scale, `quickFade` for opacity (see `/lib/animations.ts`)

---

**Questions?** Check `BUILD-SUMMARY.md` for detailed technical documentation, or review similar components for patterns.

