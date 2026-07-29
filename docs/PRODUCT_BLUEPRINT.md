# PRODUCT BLUEPRINT — Khan Umar's Digital Identity

**Status:** Design Phase (Ready for Approval)  
**Date:** 2026-07-28  
**Audience:** Approver (before implementation)

---

## EXECUTIVE SUMMARY

This portfolio is not a website. It is a **digital product** that demonstrates craft through the experience itself. Every decision—layout, type, spacing, motion, color—proves something about the designer/engineer who built it.

**Core Thesis:** "I don't know how many projects this person has, but the thinking behind this site alone tells me they care deeply about quality."

**Success Metric:** Recruiter completes the experience and thinks: "This person would make my product better."

---

## PART 1: THE RECRUITER JOURNEY

### 5 Seconds — First Impression
**What Recruiter Sees:** Hero section entrance.  
**What They Think:** "Okay, this feels intentional. Not generic. Premium but not overstated."  
**Emotion:** Intrigue. Possibility.  
**Evidence:** Clean layout, readable headline, calm color palette, breathing visual (not frantic).

---

### 20 Seconds — Scanning for Signal
**What Recruiter Sees:** Hero headline, personal mission line, CTA, then scrolls to About or Work snapshot.  
**What They Think:** "I can see who this person is and what they care about. They're communicating directly—not hiding behind jargon."  
**Emotion:** Respect. Growing confidence.  
**Evidence:** Clear personal mission ("I design and engineer..."), direct tone, no buzzwords, visible next action.

---

### 1 Minute — Deep Scan
**What Recruiter Sees:** Complete About section or mid-Work section (case study TL;DR and first chapter).  
**What They Think:** "This isn't a typical portfolio. They documented their decisions. They're thinking like a product person, not just a developer."  
**Emotion:** Engagement. Recognition of craftsmanship.  
**Evidence:** Structured narrative, evidence blocks (before/after, code links, metrics), honest tradeoffs discussed.

---

### 3–5 Minutes — Engaged Deep Dive
**What Recruiter Sees:** Work chapters with evidence, Lab notes showing curiosity and iteration.  
**What They Think:** "This person doesn't just implement. They think. They iterate. They care about details most people miss. They'd be dangerous in a product meeting."  
**Emotion:** Desire to hire. Belief that this person would elevate the team.  
**Evidence:** Clear problem → decision → outcome narrative, code examples, no filler experiments, each Lab note has a point.

---

### End — Complete Experience
**What Recruiter Sees:** Contact section, closing statement, links.  
**Final Thought:** "This person is serious about craft and product quality. I want this person on my team."  
**Lasting Emotion:** Confidence, respect, warmth. A sense of "I know who this person is and what they value."  
**What Sealed It:** The entire journey felt intentional. No animations for animation's sake. No empty sections. No corporate language. Just a person who cares deeply about the work.

---

## PART 2: INFORMATION ARCHITECTURE

### Proposed Flow (vs Current)

**CURRENT FLOW:**
```
Hero → About → Work → Experiments → Contact
```

**PROPOSED FLOW:**
```
Hero
  ↓
About (Who I Am)
  ↓
Work (What I Built — The Flagship Case Study)
  ↓
Lab (How I Think — Research, Iteration, Discoveries)
  ↓
Contact (Let's Talk)
```

### Rationale for New Flow

1. **Hero** — Establishes identity and personal mission. Immediately funnels to "Learn More."
2. **About** — Humanizes. Answers "Who is this person?" before diving into proof. Bridges intro to work.
3. **Work** — THE FLAGSHIP. This portfolio itself, documented as a product. Demonstrates judgment, craft, trade-offs, iteration. Every decision is explained.
4. **Lab** — Proves curiosity and continuous learning. Not a skills list (❌ "Expert in React"). Instead: real engineering discoveries, research notes, micro case studies. Answers "How do they think?"
5. **Contact** — Warm, easy, confident. No corporate language. Expects a response.

### Why This Flow Wins

- **Story Arc:** Hero (identity) → About (humanity) → Work (judgment) → Lab (thinking) → Contact (action).
- **Recruiter Pattern:** They want to know WHO first, then WHAT proof you have, then whether you're worth contacting.
- **Eliminates Confusion:** No more question "What is this portfolio *for*?" It's clear: it demonstrates craft.
- **Pacing:** Balances micro-content (About, Lab) with dense content (Work) for rhythm.
- **Conversion Funnel:** Each section has ONE clear purpose and pulls readers toward contact.

### Interaction Flow

- Every section ends with a soft invitation to continue the story, not a new unrelated feature.
- Hero points to the flagship case study. About leads to the product story. Work opens the Lab. Lab leads to Contact.
- This creates a continuous psychological flow: identity → trust → proof → curiosity → action.
- The recruiter should feel carried forward by decisions, not distracted by unrelated sections.

---

## PART 3: DESIGN SYSTEM SPECIFICATION

### Typography System

#### Scale and Usage

| Level | Token | Size (Clamp) | Line-Height | Letter-Spacing | Usage |
|-------|-------|---|---|---|---|
| **Display** | `--text-display` | clamp(2.75rem, 7vw, 6.5rem) | 0.94 | -0.065em | Hero headline / page hero statements |
| **Title** | `--text-title` | clamp(2rem, 4vw, 3.75rem) | 1.0 | -0.05em | Section headings (About, Work, Lab, Contact) |
| **Heading** | `--text-heading` | clamp(1.5rem, 2.5vw, 2.25rem) | 1.08 | -0.035em | Chapter/card headings, sub-sections |
| **Body** | `--text-body` | clamp(1rem, 1.2vw, 1.125rem) | 1.6 | 0em | Paragraph content, descriptions |
| **Body Small** | `--text-body-sm` | 0.9375rem | 1.6 | 0em | Secondary paragraph, captions |
| **Kicker** | `--text-kicker` | 0.6875rem | 1.2 | 0.16em | Labels, section eyebrows, numbers |
| **Caption** | `--text-caption` | 0.8125rem | 1.4 | 0em | Image captions, footnotes |

#### Font Families
- **Serif (primary):** Variable serif with high legibility (e.g., Geist Sans or system default)
- **Mono (code):** Geist Mono or system monospace
- **Weight mapping:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

#### Hierarchy Rules
- One typeface family (no mixing serif + sans).
- Tighter tracking (letter-spacing) on large sizes; looser tracking on small sizes.
- Never stack three text levels on one line; stack vertically for rhythm.

---

### Spacing System

#### Core Rhythm (8px base unit)

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 0.25rem (4px) | Micro gaps (icon spacing, inline elements) |
| `--space-2` | 0.5rem (8px) | Small gaps, inline spacing |
| `--space-3` | 0.75rem (12px) | Base rhythm, small component spacing |
| `--space-4` | 1rem (16px) | Component padding and small gaps |
| `--space-6` | 1.5rem (24px) | Secondary component spacing |
| `--space-8` | 2rem (32px) | Medium spacing, card padding |
| `--space-12` | 3rem (48px) | Section internal spacing |
| `--space-16` | 4rem (64px) | Large card/block spacing |

#### Page & Section Margins

| Context | Margin | Usage |
|---------|--------|-------|
| **`--spacing-page`** | clamp(1.25rem, 4vw, 4rem) | Left/right page padding (responsive) |
| **`--spacing-section`** | clamp(5rem, 12vw, 10rem) | Vertical spacing between major sections |
| **`--spacing-section-tight`** | clamp(3.5rem, 8vw, 6rem) | Vertical spacing for related sections (About → Work) |
| **`--spacing-micro`** | 0.5rem to 1rem | Micro spacing within components |

#### Responsive Breakpoints

| Breakpoint | Usage |
|---|---|
| **320px** | Mobile base (small phone) |
| **375px** | iPhone standard |
| **768px** | Tablet |
| **1024px** | Desktop small |
| **1440px** | Desktop large |

#### Spacing Rules by Viewport

**Mobile (≤480px):**
- Page padding: `--spacing-page` (1.25rem min)
- Section gaps: `--spacing-section-tight` (3.5rem min)
- Component padding: 1rem to 1.5rem
- Stacked content (no columns)

**Tablet (481px–768px):**
- Page padding: `--spacing-page` (2rem target)
- Section gaps: `--spacing-section-tight` (5rem target)
- 2-column layouts allowed
- Component padding: 1.5rem

**Desktop (769px+):**
- Page padding: `--spacing-page` (3rem–4rem)
- Section gaps: `--spacing-section` (6rem–10rem)
- Multi-column layouts
- Component padding: 2rem

---

### Color System

#### Light Mode Tokens (Primary)
```
--color-background:      oklch(0.995 0.002 285)    /* Nearly white, slight cool tint */
--color-foreground:      oklch(0.195 0.018 285)    /* Dark blue-grey */
--color-surface:         oklch(1 0 0)              /* Pure white (elevations/cards) */
--color-surface-raised:  oklch(1 0 0)              /* Same (for future elevation) */
--color-surface-sunken:  oklch(0.966 0.006 285)    /* Slight grey (recessed areas) */

--color-primary:         oklch(0.515 0.22 280)     /* Signal blue (vivid, primary action) */
--color-primary-foreground: oklch(0.99 0.01 280)   /* Near-white over primary */

--color-border:          oklch(0.89 0.012 285)     /* Light grey border */
--color-muted-foreground: oklch(0.5 0.02 285)      /* Medium grey (secondary text) */

--color-success:         oklch(0.68 0.15 154)      /* Green (success, positive) */
--color-warning:         oklch(0.78 0.15 82)       /* Amber (caution) */
--color-danger:          oklch(0.61 0.2 25)        /* Red (error, negative) */
```

#### Dark Mode Tokens (Premium)
```
--color-background:      oklch(0.165 0.016 285)    /* Deep charcoal */
--color-foreground:      oklch(0.94 0.01 285)      /* Near-white */
--color-surface:         oklch(0.205 0.018 285)    /* Slightly raised dark */
--color-surface-raised:  oklch(0.235 0.02 285)     /* Elevated surface */
--color-surface-sunken:  oklch(0.13 0.014 285)     /* Recessed dark */

--color-primary:         oklch(0.71 0.17 280)      /* Brighter blue for dark mode */
--color-primary-foreground: oklch(0.19 0.03 280)   /* Dark over bright blue */

--color-border:          oklch(0.31 0.018 285)     /* Medium grey border */
--color-muted-foreground: oklch(0.7 0.02 285)      /* Lighter grey (secondary text) */

--color-success:         oklch(0.74 0.14 154)      /* Brighter green */
--color-warning:         oklch(0.82 0.14 82)       /* Brighter amber */
--color-danger:          oklch(0.69 0.18 25)       /* Brighter red */
```

#### Signal Design Language
```
--color-signal-beam:        oklch(primary 0.4 / 40%)       /* Primary CTA glow */
--color-signal-beam-subtle: oklch(primary 0.15 / 15%)      /* Divider, accent line */
--color-signal-glow:        oklch(primary 0.1 / 10%)       /* Ambient, background glow */
--color-scene-warmth:       oklch(0.82 0.1 60)             /* Warm accent (rare, hero only) */
```

#### Contrast Requirements
- Primary text on background: WCAG AA (4.5:1 min)
- Secondary text: WCAG AA (4.5:1 min)
- UI elements: WCAG AA (3:1 min)
- Focus indicator: WCAG AAA (7:1 recommended)

---

### Elevation & Shadows

| Level | Shadow | Usage |
|-------|--------|-------|
| **Elevation 1** | `0 1px 2px rgba(0,0,0,0.04), 0 3px 12px rgba(0,0,0,0.04)` | Cards, subtle lift |
| **Elevation 2** | `0 8px 24px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.03)` | Modals, dropdowns, featured cards |
| **Elevation 3** | `0 20px 50px rgba(0,0,0,0.14), 0 8px 20px rgba(0,0,0,0.06)` | Hero elements, popovers |

**Dark Mode Adjustment:** Increase alpha values by 1.5–2x for deeper contrast.

---

### Container & Layout System

#### Max Content Width
- **Default:** `max-w-7xl` (80rem / 1280px)
- **Narrow:** `max-w-3xl` (48rem / 768px) — for dense text sections
- **Wide:** `max-w-full` — for hero / immersive sections

#### Grid System
- **Columns:** 12-column grid (mobile: 1 col, tablet: 6 col, desktop: 12 col)
- **Gap:** responsive (mobile: space-4, tablet: space-6, desktop: space-8)

---

### Component Design Tokens

#### Buttons / CTAs

**Primary Button (Prominent, Action-Focused)**
- Background: `--color-primary`
- Foreground: `--color-primary-foreground`
- Padding: `--space-3` vertical, `--space-6` horizontal (44px min height)
- Border radius: `--radius-lg` (0.875rem)
- Font weight: 600 (semibold)
- Transition: color 200ms, background 200ms, box-shadow 200ms
- Hover: background darker; shadow elevation 2
- Focus: focus-ring visible (outline-offset 4px)
- Disabled: opacity 50%, cursor not-allowed

**Secondary Button (Outline, Alternative)**
- Background: transparent
- Border: 1px `--color-border`
- Foreground: `--color-foreground`
- Padding: same as primary
- Hover: background `--color-surface-raised`, border-color `--color-foreground`
- Active: background `--color-primary`, foreground-color inverted

**Text Link (Subtle, Inline)**
- Color: `--color-primary`
- Text-decoration: none
- Border-bottom: 1px `--color-primary` at 50% opacity
- Hover: opacity 100%
- Active: `--color-primary` at higher opacity
- Focus: visible outline

---

#### Cards

**Standard Card**
- Background: `--color-surface`
- Border: 1px `--color-border`
- Border-radius: `--radius-lg`
- Padding: `--space-8` (2rem)
- Box-shadow: elevation 1
- Hover: shadow elevation 2, border-color lighter
- Responsive: full-width on mobile, grid-based on tablet/desktop

**Featured Card (Work Chapter)**
- Same base as standard card
- Border: 2px `--color-signal-beam-subtle` (instead of 1px border)
- Padding: `--space-12` (3rem)
- Accent strip: left border 4px `--color-primary`

---

#### Badges / Kickers

**Eyebrow Label (Section Kicker)**
- Font size: `--text-kicker`
- Font weight: 500
- Letter-spacing: 0.16em
- Text-transform: uppercase
- Color: `--color-muted-foreground`
- Opacity: 50%

**Badge**
- Background: `--color-surface-sunken`
- Foreground: `--color-foreground`
- Padding: `--space-2` vertical, `--space-4` horizontal
- Border-radius: `--radius-md`
- Font-size: `--text-kicker`
- Font-weight: 600

---

### Motion System

#### Philosophy
Motion must **prove craftsmanship**, not decorate. Every animation answers: "What engineering skill does this demonstrate?"

#### Motion Rules

**Property Constraints:**
- Only use `transform` (translate, scale, rotate) and `opacity` on scroll-linked animations.
- NO `clip-path`, `filter`, `width`/`height` changes during scroll.
- NO large SVG/canvas animations during main scroll (paint cost).

**Duration & Easing:**
- Entrance animations: 600–1200ms (slow, deliberate)
- Interaction animations: 200–400ms (quick, responsive)
- Scroll-linked animations: variable (gated by scroll speed, not elapsed time)
- Easing curve: cubic-bezier(0.16, 1, 0.3, 1) for most reveals (smooth, not bouncy)
- Spring interactions: used sparingly for underlines, toggles (not entrance)

**Entrance Choreography:**
- Content visible in DOM instantly (no hiding behind animations).
- Animations layer on top as progressive enhancement.
- Stagger delays: 60–120ms between child elements (not more).
- Respect reduced-motion preferences. Animation should enhance, not create motion fatigue.

**Scroll Animations (Conditional):**
- Reserve scroll-linked motion for desktop and performance-safe contexts.
- Mobile should remain static and comfortable.
- Parallax or motion offsets should be subtle, modest, and supportive.

**Signal Beam Animation:**
- Pulse slowly and calmly, with a gentle rhythm.
- Purpose: add a signal of craft without stealing attention.

---

### Responsive Design Rules

#### Breakpoint thresholds

- Mobile base: 320px
- Small mobile: 375px
- Tablet: 640px
- Small desktop: 1024px
- Large desktop: 1440px

#### Mobile-First Approach

1. Build from mobile up. The smallest viewport is the default experience.
2. Add layout refinements at larger breakpoints.
3. Desktop should introduce only meaningful complexity.

#### Layout Transformation Rules

| Context | Mobile ≤480px | Tablet 481–768px | Desktop 769px+ |
|---------|---|---|---|
| **Hero** | Stacked (headline → visual → CTA) | Stacked or 2-col if space | 2-col asymmetric (40/60) |
| **Work** | 1-col (visual above text) | 2-col grid | 2-col (3-col for chapters later) |
| **Lab** | 1-col stacked cards | Grid 2-col | Grid 3-col |
| **Contact** | 1-col stacked | 2-col (header/links) | 2-col wide (header/links side-by-side) |
| **Nav/Footer** | Single column, full width | Single column | Single row if space allows |

#### Responsive Type Rules

Type should scale fluidly across viewport sizes.
- Avoid rigid, fixed pixel typography.
- Use relative sizing and responsive scaling principles.

#### Touch Target Rules (Mobile)

- All interactive elements: minimum 44px × 44px.
- Minimum spacing between touch targets: 8px.
- Hit area for text links: add `padding: 0.5rem; border-radius: 4px` as pseudo-target.

#### Image Responsive Rules

- Images should scale responsively to their container.
- Large visuals should be optimized for performance with responsive asset delivery and progressive loading.
- Prefer modern image formats with broad-compatibility fallbacks.

#### Margin Collapse Rules

- Never rely on margin collapse for spacing; always use gap or padding.
- Flexbox/Grid preferred over floats (mobile-friendly).

---

## PART 4: DESKTOP WIREFRAME

### HERO SECTION (Desktop)

```
┌─────────────────────────────────────────────────────────────────────┐
│  HERO (min-height: 100svh, flex layout)                             │
├──────────────────────┬──────────────────────────────────────────────┤
│                      │  ─── Khan Umar ───                           │
│                      │                                               │
│   PORTRAIT /         │  Building software                           │
│   VISUAL ANCHOR      │  that feels inevitable                       │
│   (40% width)        │                                               │
│                      │  I design and engineer interfaces that       │
│  • Framed with       │  users enjoy using                           │
│    subtle border     │                                               │
│  • Gradient bg       │  ┌─────────────────────┐                    │
│  • Dark romance      │  │ See the Case Study →│ (primary CTA)       │
│    aesthetic         │  └─────────────────────┘                    │
│  • Portrait or       │  Start a conversation  (secondary link)     │
│    graphic placed    │                                               │
│    (optional)        │  S C R O L L (hint)                          │
│                      │                                               │
└──────────────────────┴──────────────────────────────────────────────┘
```

**Rationale:**
- Left column anchors the layout; gives asymmetric confidence.
- Right column holds all communication (mission statement at top, CTAs at bottom).
- Hero headline is visible instantly (no gating animation).
- Personal mission line "I design and engineer..." directly answers "who is this?"
- Primary CTA ("See the Case Study") is unambiguous and prominent.
- Scroll hint is soft (secondary opacity) and fades after first scroll.

**Spacing:**
- Left/right page padding: `--spacing-page` (3rem target, clamped)
- Gap between columns: `--spacing-section-tight` * 0.5 (2rem emotional breathing room)
- Hero headline to CTA gap: `--space-12` (3rem)
- CTA to next section: `--spacing-section` (6rem+ before fade)

---

### ABOUT SECTION (Desktop)

```
┌─────────────────────────────────────────────────────────────────────┐
│  ABOUT (max-width: 5xl, centered)                                   │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  eyebrow: More than writing code,                                  │
│  heading:  I enjoy building experiences.                           │
│                                                                       │
│  Personal paragraph (max-width: 42rem, left-aligned)               │
│  "I started building for the web because..."                      │
│  [paragraph text, honest and human, ~250 words]                   │
│                                                                       │
│  ┌─────────────┬──────────────────┬─────────────┐                 │
│  │    01       │       02          │      03     │                 │
│  │             │                   │             │                 │
│  │ Motion has  │ Complexity lives  │ I'm never   │                 │
│  │ a reason    │ behind interface  │ finished    │                 │
│  │             │                   │ learning    │                 │
│  │ [desc]      │    [desc]         │   [desc]    │                 │
│  └─────────────┴──────────────────┴─────────────┘                 │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

**Rationale:**
- Centered, narrower max-width (5xl / 64rem) creates intimate focus.
- Heading is clear but not as large as hero (hierarchy).
- Paragraph is human and concise—one honest take on philosophy.
- Three principles are cards (elevated, with space between) and each links to evidence in Work section.

**Spacing:**
- Top margin: `--spacing-section-tight` (5rem+ from hero)
- Heading to paragraph: `--space-12` (3rem)
- Paragraph to principles: `--space-16` (4rem)
- Principle gaps: `--space-12` (3rem between)
- Bottom margin: `--spacing-section` (6rem+)

---

### WORK SECTION (Desktop) — The Flagship Case Study

```
┌─────────────────────────────────────────────────────────────────────┐
│  WORK (max-width: 7xl, wide, immersive)                             │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  eyebrow: Featured Project                                          │
│  heading:  This Portfolio                                          │
│  subtitle: "A product designed to demonstrate craft..."            │
│                                                                       │
│  ╔═════════════════════════════════════════════════════════════╗   │
│  ║  TL;DR CARD (featured)                                      ║   │
│  ║  ─────────────────────────────────────────────────────────  ║   │
│  ║  Built a portfolio that proves engineering judgment         ║   │
│  ║  through the experience itself. No resume, no skill list—  ║   │
│  ║  just a product that documents decisions.                  ║   │
│  ║                                                             ║   │
│  ║  Primary evidence: performance metrics, accessibility       ║   │
│  ║  compliance, and thoughtful interaction design.             ║   │
│  ╚═════════════════════════════════════════════════════════════╝   │
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ CHAPTER 1: The Challenge                                    │   │
│  ├─────────────────────────────────────────────────────────────┤   │
│  │                                                              │   │
│  │ Left (60% width):                                           │   │
│  │ ──────────────────                                          │   │
│  │ heading: "The Challenge"                                   │   │
│  │ content: [1–2 paragraphs explaining problem]               │   │
│  │          "The brief was to make craft tangible..."         │   │
│  │                                                              │   │
│  │ Right (40% width):                                          │   │
│  │ ──────────────────                                          │   │
│  │ EVIDENCE BLOCK:                                             │   │
│  │ • Screenshot / diagram / code snippet                      │   │
│  │ • Caption: "Outcome: reduced page load by 40%"            │   │
│  │ OR                                                           │   │
│  │ • Link to GitHub                                            │   │
│  │ • Inline quote / stat                                       │   │
│  │                                                              │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                       │
│  (Repeat for 4–5 more chapters) ...                                 │
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ ENGINEERING DECISIONS (grid)                                │   │
│  ├─────────────────────────────────────────────────────────────┤   │
│  │  ┌──────┐  ┌──────┐  ┌──────┐                              │   │
│  │  │Title │  │Title │  │Title │                              │   │
│  │  │      │  │      │  │      │                              │   │
│  │  │Desc  │  │Desc  │  │Desc  │                              │   │
│  │  └──────┘  └──────┘  └──────┘                              │   │
│  │                                                              │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ OUTCOME                                                      │   │
│  ├─────────────────────────────────────────────────────────────┤   │
│  │ "A portfolio that makes the engineering visible..."        │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                       │
│  Primary CTA: [View on GitHub] [Resume PDF]                        │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

**Rationale:**
- TL;DR card at top answers "why should I care?" immediately.
- Chapters follow problem → decision → evidence → outcome structure.
- Evidence blocks are high-fidelity (screenshot, code, metric, or all three).
- Engineering Decisions section is horizontal cards (3-col grid) for scanability.
- No fluff; every line proves the point.

**Spacing:**
- Heading to TL;DR: `--space-16` (4rem)
- TL;DR to chapters: `--space-16` (4rem)
- Between chapters: `--space-12` (3rem)
- Caption to next chapter: `--space-12`
- Bottom section (Engineering Decisions): margin-top `--space-16`

---

### LAB SECTION (Desktop)

```
┌─────────────────────────────────────────────────────────────────────┐
│  LAB (max-width: 6xl)                                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  eyebrow: Workbench                                                 │
│  heading:  Things I'm Exploring                                    │
│  subtitle: "Micro case studies, research notes, and discoveries"   │
│                                                                       │
│  ┌────────────────────────────────────────────────────────────┐   │
│  │  EXPERIMENT 1 (horizontal card)                             │   │
│  ├────────────────────────────────────────────────────────────┤   │
│  │                                                              │   │
│  │  Left (40%):              Right (60%):                      │   │
│  │  ───────────              ──────────────                    │   │
│  │  [Thumbnail]              Title: "Animation Performance"   │   │
│  │  GIF or static             Problem: Scroll jank on mobile   │   │
│  │  image preview             Discovery: GPU-safe transforms  │   │
│  │                            Result: 60fps on 6+ year old     │   │
│  │                                    iOS devices              │   │
│  │                            [Link to demo] [Code on GitHub] │   │
│  │                                                              │   │
│  └────────────────────────────────────────────────────────────┘   │
│                                                                       │
│  (Repeat for 2–3 more selected experiments)                         │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

**Rationale:**
- Named "Lab" to position as a creative/research space, not a portfolio.
- Only 2–3 curated items (no "currently exploring" laundry list).
- Each card: problem → discovery → evidence (link/demo).
- Proves curiosity and continuous learning, not skill-hoarding.

**Spacing:**
- Top margin: `--spacing-section-tight` (5rem)
- Card gaps: `--space-12` (3rem)
- Bottom margin: `--spacing-section` (6rem+)

---

### CONTACT SECTION (Desktop)

```
┌─────────────────────────────────────────────────────────────────────┐
│  CONTACT (max-width: 5xl, centered)                                 │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  eyebrow: Get in Touch                                              │
│                                                                       │
│  heading:  Let's build something                                    │
│           meaningful together                                       │
│                                                                       │
│  description: "I'm always interested in opportunities where         │
│  craft and product thinking come first. If that sounds like your   │
│  team, I'd love to hear from you."                                  │
│                                                                       │
│  ╔═════════════════════════════════════════════════════════════╗   │
│  ║       SEND ME AN EMAIL                                      ║   │
│  ║   [Primary Button — clear CTA]                             ║   │
│  ║                                                             ║   │
│  ║   OR email: datadriverumar@gmail.com                       ║   │
│  ╚═════════════════════════════════════════════════════════════╝   │
│                                                                       │
│  Availability: Open to full-time, contract, and conversations      │
│  Response time: Usually within 24 hours                            │
│  Timezone: [Your timezone] (UTC±0)                                │
│                                                                       │
│  ┌──────┐   ┌──────┐   ┌──────┐   ┌──────┐                         │
│  │GitHub│   │Resume│   │LinkedIn  │Email │ (secondary links)      │
│  └──────┘   └──────┘   └──────┘   └──────┘                         │
│                                                                       │
│  Closing statement:                                                 │
│  "Built with intention. Designed for craft. Always learning."      │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

**Rationale:**
- Warm, confident copy (not corporate).
- Primary CTA is a button (easy to click, looks actionable).
- Availability and response-time information builds trust.
- Secondary links (GitHub, Resume, LinkedIn) are small but visible.
- Closing statement echoes the design philosophy.

**Spacing:**
- Top margin: `--spacing-section-tight` (5rem)
- Heading to description: `--space-12` (3rem)
- Description to CTA button: `--space-16` (4rem)
- Button to availability info: `--space-16` (4rem)
- Info to secondary links: `--space-12` (3rem)
- Bottom margin: `--spacing-section` (6rem+)

---

## PART 5: MOBILE WIREFRAME

### Mobile-First Philosophy
Mobile is not a compressed desktop. It is a separate, equally premium experience. Content is reordered for mobile scanning behavior (top → bottom, most important first).

---

### HERO SECTION (Mobile ≤480px)

```
┌───────────────────┐
│  (at top)         │
│  ─── Khan Umar ── │
│                   │
│  Building         │
│  software that    │
│  feels inevitable │
│  (Headline fills  │
│   full width,     │
│   responsive      │
│   font-size)      │
│                   │
│  I design and     │
│  engineer         │
│  interfaces that  │
│  users enjoy      │
│                   │
│ ┌─────────────┐   │
│ │ See Case    │   │
│ │ Study →     │   │
│ ├─────────────┤   │
│ │ (PRIMARY)   │   │
│ │ Full width  │   │
│ │ Button      │   │
│ └─────────────┘   │
│                   │
│  Start a          │
│  conversation     │
│  (text link,      │
│   secondary)      │
│                   │
│ ┌─────────────┐   │
│ │   PORTRAIT  │   │
│ │   OR        │   │
│ │   VISUAL    │   │
│ │   (framed   │   │
│ │    block,   │   │
│ │    full w.) │   │
│ │            │   │
│ └─────────────┘   │
│                   │
│ S C R O L L      │
│                   │
└───────────────────┘
(+ padding all sides: --spacing-page min 1.25rem)
```

**Key Changes from Desktop:**
- Stack order: headline first (no left column).
- Portrait becomes a separate framed block below CTAs.
- Primary CTA full width, 44px+ height for touch.
- Secondary CTA is a text link below.
- Headline uses responsive font-size (clamp).

**Spacing:**
- Top padding: `--space-8` (2rem)
- Headline to mission text: `--space-8` (2rem)
- Mission text to primary CTA: `--space-12` (3rem)
- Primary CTA height: 44px (minimum)
- Primary CTA to secondary link: `--space-4` (1.5rem)
- Secondary link to portrait: `--space-12` (3rem)
- Portrait height: auto (aspect-ratio 1:1 or 4:3 for mobile)
- Bottom padding: `--space-16` (4rem)

---

### ABOUT SECTION (Mobile)

```
┌───────────────────┐
│                   │
│  eyebrow:         │
│  More than        │
│  writing code,    │
│                   │
│  heading:         │
│  I enjoy          │
│  building         │
│  experiences      │
│                   │
│  [paragraph text] │
│  (full width,     │
│   optimized for   │
│   mobile reading) │
│                   │
│  ┌──────────────┐ │
│  │   01         │ │
│  │   Motion has │ │
│  │   a reason   │ │
│  │   [desc]     │ │
│  └──────────────┘ │
│  (stacked 1-col)  │
│                   │
│  ┌──────────────┐ │
│  │   02         │ │
│  │   Complexity │ │
│  │   ...        │ │
│  └──────────────┘ │
│                   │
│  ┌──────────────┐ │
│  │   03         │ │
│  │   I never... │ │
│  └──────────────┘ │
│                   │
└───────────────────┘
```

**Key Changes:**
- Full-width paragraph (no narrow max-width).
- Principles stack vertically (1 column).
- Each principle card takes full width.
- Padding adjusts for smaller viewport.

**Spacing:**
- Top margin: `--spacing-section-tight` min (3.5rem min)
- Principles gaps: `--space-8` (2rem between)

---

### WORK SECTION (Mobile)

```
┌───────────────────┐
│                   │
│  eyebrow:         │
│  Featured Project │
│                   │
│  heading:         │
│  This Portfolio   │
│                   │
│  ╔──────────────╗ │
│  ║  TL;DR CARD  ║ │
│  ║              ║ │
│  ║  Built a     ║ │
│  ║  portfolio   ║ │
│  ║  that proves ║ │
│  ║  engineering ║ │
│  ║  ...         ║ │
│  ╚──────────────╝ │
│                   │
│  ┌──────────────┐ │
│  │ CHAPTER 1    │ │
│  ├──────────────┤ │
│  │              │ │
│  │ heading:     │ │
│  │ Challenge    │ │
│  │              │ │
│  │ [content 1-2 │ │
│  │  paras]      │ │
│  │              │ │
│  │ ┌──────────┐ │ │
│  │ │ EVIDENCE │ │ │
│  │ │ full-w   │ │ │
│  │ │ img/link │ │ │
│  │ └──────────┘ │ │
│  │              │ │
│  │ caption      │ │
│  └──────────────┘ │
│                   │
│  (repeat chapters)│
│                   │
│  ┌──────────────┐ │
│  │ ENG DECISION │ │
│  │ (stacked 1c) │ │
│  │              │ │
│  │ ┌──────────┐ │ │
│  │ │ Title    │ │ │
│  │ │ Desc     │ │ │
│  │ └──────────┘ │ │
│  │              │ │
│  │ ┌──────────┐ │ │
│  │ │ Title    │ │ │
│  │ │ Desc     │ │ │
│  │ └──────────┘ │ │
│  │              │ │
│  └──────────────┘ │
│                   │
│  [ CTA buttons]   │
│                   │
└───────────────────┘
```

**Key Changes:**
- All content in single column.
- Evidence blocks are full width.
- Engineering decisions card stack vertically.
- Reduced padding in cards (mobile-optimized).

---

### LAB SECTION (Mobile)

```
┌───────────────────┐
│                   │
│  eyebrow:         │
│  Workbench        │
│                   │
│  heading:         │
│  What I'm         │
│  Exploring        │
│                   │
│  ┌──────────────┐ │
│  │ EXPERIMENT 1 │ │
│  ├──────────────┤ │
│  │              │ │
│  │ [thumbnail]  │ │
│  │              │ │
│  │ Title        │ │
│  │ Problem      │ │
│  │ Discovery    │ │
│  │ Result       │ │
│  │              │ │
│  │ [Link/Demo]  │ │
│  │              │ │
│  └──────────────┘ │
│                   │
│  (repeat items)   │
│                   │
└───────────────────┘
```

**Key Changes:**
- Card layout is vertical (image above text).
- Links are full-width buttons inside card.
- Single-column grid (no multi-column on mobile).

---

### CONTACT SECTION (Mobile)

```
┌───────────────────┐
│                   │
│  eyebrow:         │
│  Get in Touch     │
│                   │
│  heading:         │
│  Let's build      │
│  something        │
│  meaningful       │
│                   │
│  description:     │
│  [warm copy]      │
│                   │
│  ╔──────────────╗ │
│  ║SEND ME EMAIL ║ │
│  ║              ║ │
│  ║[BUTTON - FW] ║ │
│  ║              ║ │
│  ║datadrive...  ║ │
│  ║@gmail.com    ║ │
│  ╚──────────────╝ │
│                   │
│  Availability:    │
│  Open to roles    │
│                   │
│  Response: 24h    │
│  Timezone: UTC±0  │
│                   │
│  ┌──────────────┐ │
│  │ GitHub       │ │
│  └──────────────┘ │
│  ┌──────────────┐ │
│  │ Resume       │ │
│  └──────────────┘ │
│  ┌──────────────┐ │
│  │ LinkedIn     │ │
│  └──────────────┘ │
│  ┌──────────────┐ │
│  │ Email        │ │
│  └──────────────┘ │
│                   │
│  Closing:         │
│  "Built with...   │
│                   │
└───────────────────┘
```

**Key Changes:**
- All secondary links are full-width buttons (better touch targets).
- CTA button is very prominent.
- Stacked vertically.

---

## PART 6: SECTION REDEFINITIONS

### HERO — Identity First

**Purpose:** Establish who you are and what you're looking for.

**Content:**
- Signature + personal mission line (e.g., "I design and engineer cinematic web experiences. Looking to join teams focused on craft.")
- Headline (poetic, memorable).
- Primary CTA: "See the Case Study" (immediate funnel to Work).
- Secondary CTA: "Let's talk" (funnel to Contact).

**Why:** Recruiters need to answer "Who is this?" in the first 20 seconds. Hero delivers it, then gets out of the way.

---

### ABOUT — Humanity + Philosophy

**Purpose:** Build trust by showing the person behind the portfolio.

**Content:**
- Short personal narrative (3–4 sentences, one anecdote or turning point).
- Three editorial principles (numbered, linked to Work evidence).
- NO skills list. NO resume content.

**Why:** Recruiters want to know if you think deeply. Principles prove thinking; linking to evidence proves you live by them.

---

### WORK — The Flagship Product

**Purpose:** Document this portfolio as a product, proving judgment and craft.

**Content:**
- TL;DR (2 sentences: what + why).
- 4–5 chapters: Challenge → Design System → Motion → Accessibility → Architecture.
- Each chapter: 1–2 paragraphs + 1 evidence block (screenshot, code, metric, or link).
- Engineering Decisions (3–5 small cards).
- Outcome (1 paragraph).
- Links (GitHub, code repo).

**Why:** The site demonstrating itself is the ultimate proof. It answers: "This person doesn't just code—they think about decisions, tradeoffs, and outcomes."

---

### LAB — Research & Curiosity

**Purpose:** Prove continuous learning and iteration (replace Experiments).

**Content:**
- 2–3 curated micro case studies.
- Each: problem → discovery → result + demo/code link.
- No categories. No "currently exploring" list.
- All items are *completed* or *meaningful progress*.

**Why:** Shows iteration and curiosity professionally. "I explored X, discovered Y, and here's the code" is more credible than "expert in React."

---

### CONTACT — Warm & Actionable

**Purpose:** Make it easy and inviting to reach out.

**Content:**
- Warm copy (not corporate).
- Primary CTA button (email link or contact form).
- Availability + response-time guarantee.
- Secondary links (GitHub, Resume, LinkedIn).
- Closing statement (philosophy echo).

**Why:** This is the conversion point. Every element should reduce friction and build confidence.

---

## PART 7: MOTION PHILOSOPHY SPECIFICATION

### Principle: Motion Proves Craftsmanship

Every animation must answer: "What engineering skill does this demonstrate?"

Otherwise, **delete it**.

---

### Motion Taxonomy

#### Category 1: Entrance Animations (Proves Understanding of Choreography)

| Animation | Purpose | Duration | Rule |
|-----------|---------|----------|------|
| Fade-in paragraph | Progressive content reveal | 600–800ms | Starts instantly; visible in DOM |
| Headline line reveal (clip-path) | Signals hierarchy and emphasis | 800–1000ms | Uses symmetric clip or horizontal mask only |
| Number count-up | Emphasizes metric | 800ms | GPU-safe transform + opacity |
| Scale-in card | Subtle emphasis for featured content | 600ms | Starts at 95%, ends at 100% scale |

**Rule:** No more than 2 child stagger delays (60–90ms apart).

---

#### Category 2: Scroll Animations (Proves Understanding of Performance & Timing)

| Animation | Purpose | Duration | Rule |
|-----------|---------|----------|------|
| Parallax text offset | Depth, layering | Variable per scroll speed | Max offset ±20px; transform only |
| Opacity crossfade (multiple elements) | Smooth section transitions | Variable | Only one element fading in, one fading out per time |
| Scale + opacity on scroll | Emphasis on landmark sections | Variable | Gated by FPS detection (min 50fps); mobile disabled |

**Rule:** Mobile viewport ≤480px = NO scroll animations (static layout). Desktop ≥1024px = allowed if FPS > 50.

---

#### Category 3: Interaction Animations (Proves Understanding of Feedback & Micro-interactions)

| Animation | Purpose | Duration | Rule |
|-----------|---------|----------|------|
| Button hover (color shift) | Affordance feedback | 200ms | Subtle; no transform jumps |
| Underline spring (on link) | Playful, physics-based | 300–400ms | Only on text links; not every CTA |
| Focus ring glow | Accessibility feature | 200ms | Smooth opacity fade on focus |
| Icon rotation (arrow, toggle) | State change signal | 300ms | 90° or 180° only; no arbitrary angles |

**Rule:** All interaction states must be keyboard-accessible and visible on `:focus-visible`.

---

### Performance Gating (Motion Rule)

- Scroll-linked motion should be enabled only when the device and browser can sustain it comfortably.
- On mobile viewports and lower-performance environments, the experience falls back to a static layout with no scroll-linked motion.
- This ensures the site feels premium rather than fragile on the devices recruiters actually use.

---

### Easing Curve (Global Standard)

**Primary easing (most animations):**
```
cubic-bezier(0.16, 1, 0.3, 1)
/* Smooth, purposeful, not bouncy */
```

**Secondary easing (slight emphasis):**
```
cubic-bezier(0.25, 0.8, 0.25, 1)
/* Gentler, more subtle */
```

**Spring-based (interaction only):**
```
{ type: 'spring', stiffness: 400, damping: 30, mass: 0.8 }
/* Only for underlines, toggles; never entrance */
```

---

### Reduced Motion Compliance

- If the visitor has requested reduced motion, all non-essential animation must be disabled automatically.
- The experience should remain complete and readable without motion, with no content hidden behind animation states.

---

## PART 8: MOBILE RESPONSIVENESS SPECIFICATION

### Core Principle
Mobile is not a responsive breakpoint. Mobile is a **first-class experience with its own design**.

---

### Breakpoint Strategy

| Breakpoint | Device Type | Layout Changes | Priority |
|---|---|---|---|
| 320px–479px | Small phone | 1-column stack, full-width buttons | Highest |
| 480px–767px | Large phone | 1–2 col, flexible stacks | High |
| 768px–1023px | Tablet | 2-col flexible grid | Medium |
| 1024px+ | Desktop | Multi-col, complex grids | Lower (enhancements) |

---

### Mobile-First Rules

1. **All default layouts are mobile-first and compositionally complete.**
2. **Add complexity as viewport size increases rather than subtracting from mobile.**
3. **Avoid hard minimum widths on critical layout columns; let sections flow naturally.**

---

### Responsive Constraints

#### Hero (Mobile)
- Stacked layout (headline → text → CTA → visual).
- Portrait height: `aspect-ratio: auto / 1` (square or natural).
- Button: full width, 44px+ height.
- Headline: `clamp(1.75rem, 5vw, 2.75rem)`.

#### Work Chapters (Mobile)
- Content full width, stacked above visual.
- Evidence blocks: responsive images with correct aspect ratio.
- No multi-column layout until tablet.

#### Lab Cards (Mobile)
- Thumbnail: full width, max-height 200px (responsive).
- Text below thumbnail.
- Full-width link button.

#### Contact (Mobile)
- Primary CTA: full width, 48px height.
- Secondary links: full-width buttons stacked.

---

### Touch Target & Spacing Rules

| Element | Min Size | Min Spacing | Padding |
|---------|----------|---|---|
| Button | 44px × 44px | 8px | 0.5rem |
| Link (text) | 44px (hit area) | 8px | 0.5rem padding in pseudo-element |
| Form input | 44px height | 8px | 0.75rem padding |
| Icon | 24px real size, 44px hit area | 8px | — |

---

### Image Responsive Strategy

- All images should be responsive and preserve natural proportions.
- Use format and density variants so images look sharp on higher-resolution screens without overloading bandwidth.
- Use lightweight placeholders or graceful fallbacks so the page feels polished before high-resolution assets load.
- Avoid giant static image downloads that delay the first meaningful paint.

---

### Testing Breakpoints (Physical Devices)

Test at:
- **320px:** iPhone SE
- **375px:** iPhone standard (6/7/8)
- **414px:** iPhone Plus
- **768px:** iPad
- **1024px:** iPad Pro
- **1440px:** Desktop 27"

---

## PART 9: VISUAL LANGUAGE CONTINUITY

### The Royal Dark Romance Aesthetic (Maintained & Evolved)

The intro has established a premium, cinematic, editorial feeling. This must be sustained and strengthened throughout the entire experience.

---

### Visual Language Principles

1. **Dark mode as primary.** Light mode supported but dark is native.
2. **Editorial hierarchy.** Large type, generous whitespace, restrained color.
3. **Cinematic framing.** Cards and sections feel like film frames (borders, shadows, depth).
4. **Signal beam as connective tissue.** The primary accent color should unify sections visually.
5. **Micro-texture optional.** Subtle grain or patterns only in hero; rest is clean.

---

### Consistency Rules

| Element | Light Mode | Dark Mode | Note |
|---------|---|---|---|
| Background | oklch(0.995 0.002 285) | oklch(0.165 0.016 285) | Maintain warm undertone even when light |
| Foreground (text) | oklch(0.195 0.018 285) | oklch(0.94 0.01 285) | High contrast, readable |
| Cards | oklch(1 0 0) white (light) | oklch(0.205 0.018 285) (dark) | Slight elevation difference |
| Borders | oklch(0.89) light | oklch(0.31) dark | Subtle, not dark outlines |
| Primary accent | oklch(0.515 0.22 280) light | oklch(0.71 0.17 280) dark | Signal beam: unified color intent |

---

### Color Temperature
All color shifts maintain a **cool-to-neutral** tone (no warm yellows dominating). The signal beam (primary) is the only accent allowed; use sparingly.

---

### Section Visual Connectors

Each section should feel adjacent (not isolated) through:
- Consistent card styling (borders, shadows, corner radius).
- Consistent spacing ratios (rhythm).
- Consistent typography scale.
- Signal beam dividers (optional horizontal lines between major sections).

---

## PART 10: DESIGN SYSTEM CHECKLIST

Before implementation, ensure:

- [ ] All type sizes use `clamp()` for fluid scaling.
- [ ] All spacing uses token values (never magic numbers).
- [ ] All colors use OKLCH variables (not hex).
- [ ] All buttons have `:focus-visible` styles.
- [ ] All cards have consistent shadow/border treatment.
- [ ] Motion: only transform + opacity (no clip-path, filter, dimensions).
- [ ] Mobile: tested at 320px, 375px, 414px.
- [ ] Accessibility: keyboard navigation tested, ARIA labels in place.
- [ ] Reduced motion: all animations disabled under `prefers-reduced-motion: reduce`.
- [ ] Performance: Lighthouse score target ≥ 85 (desktop), ≥ 75 (mobile).

---

## PART 11: CONTENT BRIEFS

### Hero Headline
**Current:** "Building software that feels inevitable."  
**Proposed:** "Building software that feels inevitable." ✓ (Keep; it's strong.)

**Personal Mission Line (New):**
- Option A: "I design and engineer interfaces that users enjoy using. I'm looking for product teams focused on craft."
- Option B: "I design and engineer cinematic, usable interfaces. Let's build something intentional."
- Option C: "Building products with intention. Interested in teams where craft matters."

---

### About Anecdote
Replace generic philosophy with ONE concrete moment:
- "I spent 3 weeks optimizing a single interaction. Most people wouldn't notice. That's when I realized: I care more about the craft than the line item."

---

### Work TL;DR
"I built this portfolio as a product to demonstrate engineering judgment. No resume, no skill list—just a case study that proves I think like a product person."

---

### Lab Intro
"A few micro case studies where I explored something, learned something, and shipped something small. Proof of curiosity, not credentials."

---

### Contact Copy
"I'm always up for conversations about product, craft, and making intentional things. If that's your team, let's talk."

---

## PART 12: PHASE-BASED IMPLEMENTATION PLAN

### Phase 1: Approval & Refinement
- [ ] You review and approve blueprint.
- [ ] Request adjustments if needed.

### Phase 2: Wireframe & Content Review (Still No Code)
- [ ] Produce annotated desktop wireframes (high-detail).
- [ ] Produce annotated mobile wireframes.
- [ ] Finalize copy for each section.
- [ ] Finalize design system tokens (Tailwind config update plan).

### Phase 3: Implementation (Code Phase)
- [ ] Hero responsive refactor.
- [ ] About section polish.
- [ ] Work section restructure (add TL;DR, evidence blocks).
- [ ] Lab section implementation (curated experiments).
- [ ] Contact redesign.
- [ ] Design system tokens update.
- [ ] Motion system update (performance gating, reduce motion).
- [ ] Mobile testing & adjustments.

### Phase 4: Validation & Polish
- [ ] Accessibility audit.
- [ ] Performance audit (Lighthouse).
- [ ] Recruiter testing (if possible).
- [ ] Final polish.

---

## APPROVAL CHECKLIST

Does this blueprint align with your vision?

- [ ] Recruiter journey makes sense?
- [ ] Information architecture (Hero → About → Work → Lab → Contact) is right?
- [ ] Desktop wireframes capture the experience you want?
- [ ] Mobile wireframes feel equally premium?
- [ ] Design system is comprehensive?
- [ ] Motion philosophy is clear?
- [ ] Visual language continuity plan works?
- [ ] Section redefinitions (especially Work and Lab) feel right?

**If YES to all:** I'm ready to proceed to Phase 2 (wireframe details & copy finalization).

**If NO to any:** Please specify which sections need adjustment, and I'll revise before we move forward.

---

**END OF BLUEPRINT**

