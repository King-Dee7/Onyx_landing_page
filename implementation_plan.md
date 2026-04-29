# Onyx Automation Agency — Landing Page Implementation Plan

A standalone white-themed landing page for **Onyx Automation Agency**, extending the dark portfolio at `dariusasante.vercel.app`. Built in Next.js 14 + Tailwind CSS + Framer Motion + TypeScript.

---

## Design North Star

| Principle | Source | Application |
|-----------|--------|-------------|
| Cinematic section rhythm, tight headline compression | Apple | White/dark alternating sections; line-height 1.05-1.10 on display type |
| Full-bleed visuals, max 2 CTAs per view, minimal nav | Tesla | 100vh hero; transparent → frosted glass nav on scroll |
| Dual-world atmosphere, mono uppercase labels, stats anchors | Together AI | Dark sections for proof/process; `SERVICES`, `HOW IT WORKS` eyebrow labels |
| Onyx Green as the **only** accent | Brand | CTAs, checkmarks, hover states — never decorative |

---

## Color System

| Token | Value | Role |
|-------|-------|------|
| `--white` | `#FFFFFF` | Primary page background |
| `--off-white` | `#F8F8F6` | Alternate light section surface |
| `--dark` | `#0C0C0C` | Dark section backgrounds |
| `--dark-surface` | `#161616` | Cards on dark bg |
| `--green` | `#22C27A` | Primary accent — CTAs, ticks, highlights only |
| `--green-dark` | `#1AAD6A` | Hover state for green CTA |
| `--ink` | `#111111` | Headings on light bg |
| `--body` | `#3D3D3D` | Body text on light bg |
| `--muted` | `#8A8A8A` | Subtext, labels |
| `--border` | `rgba(0,0,0,0.08)` | Card borders, dividers on light |
| `--border-dark` | `rgba(255,255,255,0.10)` | Card borders on dark bg |

---

## Typography System

**Fonts**: `Syne` (display headlines) + `Inter` (body, UI) — both from Google Fonts.

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|------|------|------|--------|-------------|----------------|
| Hero Display | Syne | 72–88px | 700 | 1.00 | -0.04em |
| Section H2 | Syne | 48–56px | 700 | 1.05 | -0.03em |
| H3 / Card Title | Syne | 28–32px | 600 | 1.10 | -0.02em |
| Eyebrow Label | Inter | 11px | 600 | 1.0 | 0.12em (uppercase) |
| Body Large | Inter | 18–20px | 400 | 1.6 | normal |
| Body | Inter | 16px | 400 | 1.65 | normal |
| Button | Inter | 15px | 500 | 1.0 | normal |
| Caption | Inter | 13px | 400 | 1.5 | normal |

---

## Page Architecture — 10 Sections

```
01  Navbar          — Minimal, transparent → frosted white on scroll
02  Hero            — White, full-bleed, massive Syne headline
03  Proof Bar       — Logos / outcome stats strip (white bg)
04  Problem         — "The Invisible Tax" pain framing (off-white bg)
05  Friction vs Freedom — Split comparison (white bg, dark cards)
    ── DARK BREAK ──
06  How It Works    — 3-step process (dark bg #0C0C0C)
    ── BACK TO LIGHT ──
07  Services        — 3 service cards (white bg)
08  Calculator      — ROI interactive tool (off-white bg)
    ── DARK BREAK ──
09  Testimonials    — Outcome-first proof (dark bg #0C0C0C)
    ── BACK TO LIGHT ──
10  Final CTA       — Bold full-width closer (white bg)
11  Footer          — Minimal (dark bg)
```

---

## Section-by-Section Spec

### 01 — Navbar
- Fixed, `backdrop-filter: blur(20px)` transparent → `rgba(255,255,255,0.92)` on scroll
- Left: Onyx logo (SVG wordmark)
- Right: Nav links (`Services`, `How It Works`, `Reviews`, `Calculator`) + `Get Started` pill button in green
- Mobile: hamburger → full-screen overlay

### 02 — Hero (Light)
- **bg**: `#FFFFFF`
- Full viewport height, centered content
- Eyebrow: `ONYX AUTOMATION` in mono uppercase, green color
- Headline (Syne 80px): *"Your Business. Running Itself."*
- Subheadline (Inter 20px, muted): *"We build the AI systems that handle your inbox, bookings, and admin — so you can focus on the work only you can do."*
- CTA pair: `→ Book a Free Strategy Call` (green filled) + `See How It Works` (outline, dark)
- Background: subtle animated dot-grid or faint flowing gradient (not a photo — clean)
- Entry animation: headline word-by-word stagger up

### 03 — Proof Bar (Light)
- **bg**: `#F8F8F6`, top/bottom hairline border
- 4–5 horizontal stat blocks: `48 hrs` saved/month avg · `3× faster` response times · `£12k+` revenue unlocked · `40+` service businesses automated
- Each: large green number + small Inter caption
- Framer Motion: count-up animation on scroll enter

### 04 — Problem Section (Off-white)
- **bg**: `#F8F8F6`
- Eyebrow: `THE HIDDEN COST`
- Headline (Syne 52px): *"Manual work isn't free. It's the most expensive thing you do."*
- 3-column pain cards (white bg, subtle border, 12px radius):
  - 🕐 Time Drain — hours on WhatsApp, rebooking, admin
  - 💸 Revenue Ceiling — can't scale what you're still manually doing
  - 🧠 Mental Load — Sunday night anxiety, missed messages, zero headspace
- No icons (clean), just bold stat + description per card

### 05 — Friction vs Freedom (White)
- **bg**: `#FFFFFF`
- Eyebrow: `FRICTION VS FREEDOM`
- Headline: *"The difference is one system."*
- Two-column comparison table (dark left card = Manual, green-accented right card = Onyx)
- Rows: Customer Inquiries · Bookings · Data Entry · Follow-ups · Mental Load
- Left column: `✕` red-muted indicators
- Right column: `✓` green indicators
- Framer: rows stagger in left-to-right

### 06 — How It Works (Dark)
- **bg**: `#0C0C0C`, text white
- Eyebrow: `THE PROCESS` (green, mono)
- Headline (Syne, white): *"From chaos to automated in 3 steps."*
- 3 numbered steps in large cards (dark surface `#161616`, green border accent on hover):
  1. **Audit** — We map every manual task costing you time
  2. **Build** — Custom automation stack, no templates
  3. **Launch** — You approve, we deploy. Ongoing support included.
- Step numbers in green, large (64px), Syne
- Connector lines between steps on desktop

### 07 — Services (Light)
- **bg**: `#FFFFFF`
- Eyebrow: `WHAT WE BUILD`
- Headline: *"Every system, done for you."*
- 3 service cards (border `rgba(0,0,0,0.08)`, 16px radius, hover: lift + green border):
  - **AI Inbox & Chat** — 24/7 customer response, zero manual replies
  - **Booking & Scheduling** — Auto-confirm, reschedule, sync calendars
  - **Ops Automation** — Data entry, invoicing, reporting, follow-ups
- Each card: icon (minimal line icon) → title → 2-line description → `Learn more →` in green

### 08 — Freedom Calculator (Off-white)
- **bg**: `#F8F8F6`
- Eyebrow: `THE FREEDOM CALCULATOR`
- Headline: *"See what manual work is actually costing you."*
- Porting the existing calculator from the portfolio — with white-theme reskin
- Sliders: Hours on admin/day · Days worked/week · Average sale value
- Live output: Monthly Hours Wasted · Revenue Lost · Revenue w/ Onyx
- Output cards: dark surface (`#111`) with green accent numbers

### 09 — Testimonials (Dark)
- **bg**: `#0C0C0C`, text white
- Eyebrow: `CLIENT RESULTS` (green, mono)
- Headline: *"Outcomes, not promises."*
- 3 testimonial cards (dark surface, subtle border):
  - Format: Large pull-quote → client name → business type → outcome stat badge
  - Example: *"I haven't replied to a booking request in 6 weeks."* — Tanya B., Aesthetics Clinic · **Saved 32 hrs/month**
- Outcome badge: green pill with white text
- Staggered card entrance on scroll

### 10 — Final CTA (Light)
- **bg**: `#FFFFFF`, centered
- Headline (Syne, 64px): *"Ready to get your time back?"*
- Subtext: *"Book a free 30-minute strategy call. No pitch. Just a clear picture of what automation can do for your business."*
- Single CTA button: `→ Book My Free Call` (large, green, pill shape)
- Below button: trust micro-copy — `No commitment · Response within 24 hours · Built for service businesses`

### 11 — Footer (Dark)
- **bg**: `#0C0C0C`
- Left: Onyx logo + tagline
- Center: nav links
- Right: social icons
- Bottom bar: `© 2025 Onyx Automation | Built by Darius Asante`

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Assembles all sections
│   └── globals.css         # CSS tokens, base styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ProofBar.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── FrictionFreedom.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Services.tsx
│   │   ├── Calculator.tsx
│   │   ├── Testimonials.tsx
│   │   └── FinalCTA.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Badge.tsx
│       ├── EyebrowLabel.tsx
│       ├── AnimatedCounter.tsx
│       └── ScrollReveal.tsx
└── lib/
    ├── content.ts          # All copy in one file
    └── animations.ts       # Shared Framer Motion variants
```

---

## Animation Strategy

| Element | Animation | Trigger |
|---------|-----------|---------|
| Hero headline | Word-by-word stagger up (0.08s delay each) | On load |
| Hero CTA pair | Fade up, 0.4s delay after headline | On load |
| Proof Bar counters | Count-up from 0 | On scroll enter |
| Pain cards | Stagger fade-up (0.1s between) | On scroll enter |
| Comparison rows | Left-to-right slide in | On scroll enter |
| Process steps | Sequential fade-up (0.15s delay) | On scroll enter |
| Service cards | Lift on hover (`y: -6px`, shadow deepens) | Hover |
| Testimonial cards | Stagger fade-up | On scroll enter |
| Nav | Background opacity transition on scroll | Scroll |

All transitions: `ease: [0.16, 1, 0.3, 1]` (expo ease-out) at `0.6s` duration.

---

## Build Sequence

1. `[ ]` Init Next.js 14 project in `c:\Users\kingd\Onyx_landing_page`
2. `[ ]` Install dependencies: Framer Motion, Google Fonts (Syne + Inter via `next/font`)
3. `[ ]` Set up `globals.css` with all CSS tokens and base styles
4. `[ ]` Create shared UI components (`Button`, `Badge`, `EyebrowLabel`, `ScrollReveal`, `AnimatedCounter`)
5. `[ ]` Create `lib/content.ts` with all copy
6. `[ ]` Create `lib/animations.ts` with shared Framer variants
7. `[ ]` Build `Navbar` + `Footer`
8. `[ ]` Build sections in order: Hero → ProofBar → Problem → FrictionFreedom → HowItWorks → Services → Calculator → Testimonials → FinalCTA
9. `[ ]` Assemble `page.tsx`
10. `[ ]` Polish: responsive breakpoints, keyboard accessibility, SEO meta tags
11. `[ ]` Dev server smoke test + screenshot

---

## Open Questions

> [!IMPORTANT]
> **Booking link** — What URL does the `Book a Free Strategy Call` CTA point to? (Calendly, Typeform, etc.)

> [!IMPORTANT]
> **Real testimonials** — Do you have 2–3 real client quotes + outcomes I can use? If not, I'll write plausible placeholder copy clearly marked for you to replace.

> [!NOTE]
> **Domain / deployment** — This will be a separate deployment from `dariusasante.vercel.app`, correct? Or linked from it as a sub-path?

> [!NOTE]
> **Onyx Logo** — Is there a logo SVG/PNG file, or should I recreate the `ONYX` wordmark I can see in the portfolio screenshots? I can replicate it precisely.

---

## Verification Plan

### Automated
- `npm run build` — zero TypeScript errors, zero Tailwind warnings
- Lighthouse score ≥ 90 on Performance, Accessibility, SEO

### Manual (Browser Subagent)
- Screenshot of each section on desktop
- Scroll animations fire correctly
- Calculator interactivity works (sliders update live)
- Nav frosted-glass transition on scroll
- Mobile layout (375px) review

