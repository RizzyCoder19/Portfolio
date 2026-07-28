# Creative Directions — Khan Umar Portfolio Redesign

> Role: Lead Product Designer, Creative Director, Motion Designer, UX Architect, Senior Frontend Engineer
> Date: 2025
> Status: Phase 2 — Direction exploration

---

## Phase 1: Codebase Audit — What to Keep vs Discard

### ✅ KEEP — Foundation Worth Preserving

| Asset | Why Keep |
|---|---|
| **Intro cinematic (beam-from-void)** | The strongest part of the experience. The 11-phase sequence, the pacing, the restraint — this sets the quality bar. Keep entirely, with one refinement: crossfade the exit into Hero. |
| **Design tokens system** (`tokens.css`) | oklch color palette with light/dark adaptation, Geist font pairing, typography scale (display→kicker), spacing tokens, elevation shadows — world-class token architecture. |
| **Animation config** (`config/animation.ts`) | Duration map (instant→reveal), easing curves [0.16,1,0.3,1], stagger values. The mathematical foundation of all motion. |
| **Hero ambient background** (`HeroBackground.tsx`, `motion.css` keyframes) | GPU-composited blob animations (transform-only), grain texture via SVG feTurbulence, radial vignette. Zero JS animation loop. |
| **Lenis + GSAP integration** | `SmoothScrollProvider` with GSAP ticker sync, ScrollTrigger updates, lag-smoothing disabled. Buttery scroll infrastructure. |
| **Reduced motion system** | `MotionConfig reducedMotion="user"`, `useReducedMotion()` everywhere, `motion.css` prefers-reduced-motion block that nukes all animations to 1ms. Best-practice accessibility. |
| **Semantic HTML + aria** | Skip link, aria-labels on sections, semantic `<section>` + `<article>` elements, focus-visible styles. Solid a11y baseline. |
| **ExperienceProvider pattern** | Context-based intro completion state, clean separation between experience orchestration and content. |
| **UI primitives** (Section, Container, Heading, cn utility) | Well-designed, composable, no bloat. |
| **useScrollTo utility** | Lenis-aware programmatic scrolling with offset support. |
| **TypeScript types + hooks** | Polymorphic types, useMediaQuery, useLenis — clean abstractions. |

### ❌ DISCARD — What Prevents the Vision

| Asset | Problem |
|---|---|
| **"Sections" mental model** (page.tsx) | Sections as isolated blocks with `<Reveal>` wrappers. Kills continuity. Must become "scenes" in a scroll narrative. |
| **Current Hero composition** | Portrait-dependent layout (`lg:grid-cols-2`). The blueprint demands a generic `HeroVisual` slot that works with ANY content — portrait, abstract, video, WebGL, or nothing. The current Hero is locked into one composition. |
| **All 4 "Coming Soon" ProjectCards** | Actively damages credibility. The Work section must become the emotional peak with ONE real project, case-study depth, visual dominance. |
| **AboutContent + AboutHighlights** | "More than writing code" is generic. Skill cards are resume-thinking. The About section must answer *who am I / how do I think / why do I build* — not list skills. |
| **Experiments as category labels** | "AI Engineering" is a topic, not an experiment. Rename to "Lab" and make it a research notebook. Concrete artifacts or honest framing. |
| **ContactClosing platitudes** | "Built with curiosity. Designed with intention. Always evolving." — LinkedIn bio phrases. The closing of a film should be human, not aspirational. |
| **ContactLinks icon-only** | No visible labels on desktop. Hurts cognitive accessibility. Must show link destinations. |
| **Uniform `<Reveal>` usage** | Every section enters identically (fade + translateY). Kills narrative rhythm. Each scene needs its own entrance character. |
| **Uniform section spacing** | `spacing="default"` on everything. The page feels metronomic. Need varied rhythm (tight→loose→tight). |
| **Intro→hero "dead frame"** | 250ms black pause between intro exit and hero entrance. Must be a coordinated crossfade. |
| **Three.js dependency** | `@react-three/fiber` + `three` (~54kB) unused. Remove unless we commit to using it meaningfully. |
| **Section eyebrow pattern** ("About", "Work", "Experiments" badges) | No premium site uses the section name as its own label. These are navigation labels, not content signals. |

---

## Phase 2: Three Creative Directions

---

## DIRECTION 1: "THE SIGNAL"

### Core Concept
The intro screen introduces "The Signal" — a beam of light that emerges from void. This direction **expands the signal into a complete design language** for the entire experience. The signal becomes: horizontal light guides that mark transitions, alignment marks that structure compositions, depth cues that separate planes, and a visual rhythm that guides the eye.

The website is a **journey through light**.

### Storytelling
- **Act 1 (Intro → Hero → About)**: Emergence from void. The signal grows, fragments, and structures itself into the page. Light builds the world.
- **Act 2 (Work → Lab)**: The signal becomes a reading light — illuminating the work. Focused beams highlight what matters.
- **Act 3 (Contact)**: The signal recedes. Light dims. A quiet return to the void, but warmer.

### Layout Philosophy
- Asymmetric editorial grids guided by an invisible **signal axis** — a light line that runs vertically through the page, off-center
- Content aligns to or departs from this axis, creating tension
- HeroVisual is a **dynamic light field** — no portrait needed. The light itself is the visual.
- Each scene has a unique layout structure (not all two-column)

### Scroll Philosophy
- The signal axis **tilts and shifts** as you scroll — a 3D camera move through a 2D page
- Content reveals from the signal line outward (clip-path from center, not from bottom)
- Background layers drift at different speeds, but the **signal always stays sharp**
- Scroll = moving through a landscape of light

### Hero Concept
```
┌──────────────────────────────────┐
│   [HeroVisual: Light Field]      │
│   ═══ The signal beam ═══       │
│                                  │
│   Building software              │  ← Typography is the hero
│   that feels inevitable          │
│                                  │
│   [View Work]  [Get in Touch]    │
└──────────────────────────────────┘
```
- HeroVisual = an ambient light field (animated gradient that responds to scroll position)
- No portrait. The light itself is the visual identity.
- Typography emerges from the light, not from below
- The signal beam becomes a horizontal guide beneath the headline

### About Concept
- No "About" label. The section is announced by a **light pulse** — a brief brightening that signals "this is a new chapter"
- Single question answered: *"I build because... I want software to feel effortless."*
- One short paragraph. The emphasis line moves to the top.
- No skill cards. Instead: **three signal markers** — horizontal ruled lines with tight, specific statements about how the person thinks
- Portrait exists in the HeroVisual slot if desired, but the layout doesn't depend on it

### Work Concept
- One featured project (not four empty cards)
- The project becomes the **emotional peak** of the experience
- Large visual area (screenshot or case study image) that appears to **float in depth** — subtle perspective shift as you scroll
- Typography: project title, 2-line description of the engineering challenge, key decisions, outcome
- No "Case Study" and "GitHub" buttons side by side — one primary action
- The signal beam illuminates the project from below

### Lab Concept (formerly Experiments)
- Renamed to **"Lab"** — a research notebook feel
- Compact, log-like format (think changelog or lab notebook entries)
- Each entry = a concrete thing: "Built a multi-agent PR review system" not "AI Engineering"
- Staggered entries that stack vertically, each with a small **signal dot** (a glowing point of light) marking new entries
- If no artifacts exist: "Notes & Studies" — honest framing

### Contact Concept
- Minimal. The signal recedes to a warm ambient glow.
- Email is the primary CTA (big, visible button, not an icon)
- Social links have visible text labels beside icons
- Closing: **one line, human** — "Thanks for scrolling. If something here resonated, I'd love to hear from you."
- Background: warm version of the hero's ambient field. A bookend.

### Motion Language
- **Entrance**: Clip-path from center (signal axis), not from bottom
- **Scroll**: Content reveals from the signal outward, like light spreading
- **Transitions**: The signal brightens/dims between scenes (no abrupt section boundaries)
- **Hover**: Elements respond with subtle light shifts — border color warms, shadow gains a hint of primary
- **Parallax**: Layers move at different rates, but the signal line itself is always in perfect focus

### Visual Hierarchy
- Scene 1 (Hero): **Typography** > Light field > CTA
- Scene 2 (About): **The core statement** > Portrait (optional) > Signal markers
- Scene 3 (Work): **Project visual** > Title > Description > CTA
- Scene 4 (Lab): **Entry titles** > Descriptions > Signal dots
- Scene 5 (Contact): **Email CTA** > Social links > Closing line

### Why This Direction Could Win
- The signal is already introduced in the intro — expanding it creates **coherence**
- It gives the site a **unique visual identity** that isn't template-based
- The light-as-structure metaphor is strong enough to guide every design decision
- HeroVisual works with any content because the light field IS the visual

### Why It Could Fail
- Risk of the signal becoming **decorative** if not rigorously controlled
- Light-based design must be executed at a very high level to not look like a gradient mess
- May feel too abstract for visitors who expect to see a person

---

## DIRECTION 2: "DEPTH FIELD"

### Core Concept
The entire website exists on **multiple focal planes**, like a cinema depth-of-field composition. Typography, visuals, and backgrounds each occupy distinct depth layers. Scrolling shifts focus between planes — like pulling focus in a film. The visitor is a **camera moving through space**.

### Storytelling
- **Act 1 (Intro → Hero → About)**: The camera enters from deep void, slowly pulling focus to the foreground. Hero is the "sharpest" plane.
- **Act 2 (Work → Lab)**: The camera moves laterally. Content exists on a middle depth plane — we're now "inside" the work.
- **Act 3 (Contact)**: The camera pulls back. Widens the field. A wider perspective before the end.

### Layout Philosophy
- Three-plane system: **Foreground** (interactive elements, CTAs), **Midground** (content, text, images), **Background** (ambient, atmosphere)
- Each plane scrolls at a different speed (parallax, but organized by plane, not by element)
- Dividers between scenes are **depth transitions** — one plane recedes, another advances
- Layouts can be asymmetric, centered, or full-bleed depending on which plane is dominant

### Scroll Philosophy
- **Focus pulling**: As you scroll, certain elements become sharp (high contrast, clear) while others blur (reduce opacity, soften). When a new scene enters, it sharpens and the previous softens.
- Scroll speed varies by scene: Hero (slow, deliberate) → About (medium) → Work (slow, lingering) → Lab (medium) → Contact (fast, as if descending)
- Not traditional parallax — this is **cinematic focus**, not layered movement

### Hero Concept
```
      ┌─ Foreground ──────────────┐
      │  [View Work] [Get in Touch]│  ← Sharp, interactive
      ├─ Midground ───────────────┤
      │  Building software         │  ← In focus
      │  that feels inevitable     │
      ├─ Background ──────────────┤
      │  [HeroVisual: abstract     │  ← Soft, atmospheric
      │   gradient field]          │
      └────────────────────────────┘
```
- HeroVisual fills the background plane (abstract, atmospheric)
- Typography lives in midground — sharp, clear, dominant
- CTAs in foreground — tactile, close to the viewer
- No portrait needed — the depth composition is the visual interest

### About Concept
- The plane shifts: the About content **advances** toward the viewer as Hero recedes
- The emphasis line ("Good software should feel effortless") exists on the **foreground plane** — it literally feels closer
- No eyebrow, no skill cards. A single statement + one paragraph + the emphasis line that advances toward you
- Portrait sits on a slightly deeper plane than the text — creates dimensional composition

### Work Concept
- The project visual exists on the **midground plane with subtle 3D rotation** (2-4° perspective shift that responds to scroll)
- Title floats on foreground
- Description sits between title and visual
- Case study details (engineering decisions, outcome) exist as a **scroll-revealed layer** — as you scroll, the visual recedes and the details advance
- Only ONE project. The visual + story combination is the focal point.

### Lab Concept
- Compact log entries on the **midground plane**
- Each entry has a **small depth marker** (a subtle shadow or "pin" that suggests it exists on a pinned board)
- Categories are gone. Each entry = a concrete thing I built or studied.
- The "Currently Exploring" list becomes a footnote on the last entry

### Contact Concept
- **Wide shot**: The camera pulls back. Everything is visible at once — Email, social links, closing line — but there's generous space between them
- No depth tricks. The contact section is **flat and calm** — the camera has stopped moving
- Email is a proper button, large, centered
- Closing line: simple, human, no platitudes
- Background: a single warm gradient, no grain, no animation — stillness

### Motion Language
- **Entrance**: Elements don't fade up — they **rack into focus** (blur→sharp, low contrast→high contrast)
- **Scroll**: Focus pulling between planes. One scene doesn't fade out; it **recedes into depth** while the next sharpens
- **Hover**: Elements subtly **lift toward the viewer** (translateZ via perspective transform)
- **Scene transitions**: The current scene's background plane dissolves while the next scene's foreground materializes
- **Parallax**: Three-speed system (foreground=fast, midground=medium, background=slow)

### Visual Hierarchy
- Determined by **which plane is in focus** at any scroll position
- Scene 1: Midground (typography) dominates, Background (ambient) supports
- Scene 2: Foreground (emphasis line) dominates, Midground (paragraph) supports
- Scene 3: Midground (project visual) dominates, Foreground (title) supports
- Scene 4: Midground (log entries) dominates
- Scene 5: All planes converge to flat — no depth, just clarity

### Why This Direction Could Win
- The depth/focus metaphor is **intuitive** — everyone understands a camera pulling focus
- Creates a **memorable experience** — visitors will remember "the site that felt 3D"
- HeroVisual can be anything (abstract gradient, image, nothing) because the depth composition carries the visual weight
- Naturally solves the "sections feel disconnected" problem — depth transitions are seamless

### Why It Could Fail
- Technically complex: three-plane parallax with focus-blur effects requires careful performance management
- Blur effects can trigger repaints if not GPU-composited
- Risk of making visitors feel motion-sick if depth shift is too aggressive
- The focus-pulling effect needs to work reliably across all browsers

---

## DIRECTION 3: "THE VOID"

### Core Concept
Radical minimalism. The site begins in darkness (the intro already does this) and elements **emerge from void with extreme intentionality**. Maximum whitespace (or rather, dark-space). Nothing decorative. Each scene emerges, lingers, then recedes back into darkness as you scroll. This is the **quiet confidence** direction — the site says less, so what it does say matters more.

### Storytelling
- **Act 1 (Intro → Hero → About)**: Emergence. Elements appear from darkness slowly. Hero says one thing, clearly. About whispers.
- **Act 2 (Work → Lab)**: The void recedes slightly — the work has substance, so the space feels warmer. But still restrained.
- **Act 3 (Contact)**: A soft return to the void. Not cold — calm. The closing line is barely there, fading into dark.

### Layout Philosophy
- **80% empty space, 20% content** — reverse of typical portfolio density
- Content is pushed to the edges or the center, never evenly distributed
- White space is not emptiness — it's **intentional tension**
- Scenes are framed by the void: each scene is an island of content in a dark sea
- No card borders, no background surfaces — just typography on the void

### Scroll Philosophy
- **Slow**. Purposefully slow. Each scroll tick advances through a scene's lifecycle: appear → hold → dissolve → next
- Scroll = advancing through a series of moments, not through a page
- Content doesn't animate in — it **materializes** (very subtle opacity, no translation)
- Between scenes: a moment of **pure darkness** (200-300ms) — the void between thoughts
- This is the most radical scroll approach — intentionally uncomfortable for skimmers, rewarding for those who slow down

### Hero Concept
```
┌──────────────────────────────────────┐
│                                      │
│                                      │
│                                      │
│        Building software             │
│        that feels inevitable         │
│                                      │
│        ○ ○                          │  ← Minimal dots for CTA
│                                      │
│                                      │
│                                      │
│                                      │
└──────────────────────────────────────┘
```
- HeroVisual is literally **nothing** — the void itself is the canvas
- No portrait. No gradient. No grain. No blobs.
- Typography is center-aligned, small (not display size — maybe heading size), in the upper-center of the void
- CTAs are two minimal dots (○) with subtle hover states
- The void has a **barely perceptible warmth** — it's not pure black, it's an extremely deep oklch dark tone

### About Concept
- No "About" heading. The section is identified by its **content only**.
- **One sentence**: *"I want software to feel effortless."*
- **One paragraph**: 2-3 lines maximum.
- No portrait, no cards, no highlights. Just the single idea.
- The emphasis line is the entire section. Nothing else.
- The void around the text is the "portrait" — it tells you this person is comfortable with space and silence.

### Work Concept
- The void **warmth increases** — the dark becomes very slightly lighter, indicating "this is the important part"
- One project: **Title** (medium size), **one line of context**, **a single large image** that fills the center of the frame
- No tech chips, no status badges, no multiple buttons
- One CTA: "Read the story" → leads to a case study
- The image is the focal point. It emerges from the void.
- Engineering decisions are communicated through the image (a screenshot of code, a diagram, the final product)

### Lab Concept
- Called **"Notes"** instead of Lab or Experiments
- A single column of **very compact entries** — each entry is one line of text with a small dot prefix
- No cards, no borders, no backgrounds — just lines of text on the void
- Example format:
  ```
  ● Built a multi-agent PR review system using Claude + Codex
  ● Studying Next.js App Router internals
  ● Experimenting with oklch color spaces for design tokens
  ```
- The void keeps each line isolated and significant

### Contact Concept
- **The void returns to its deepest dark.** The warmest moment of the void was in Work. Now it cools back.
- **Email**: a single text line: `datadriverumar@gmail.com` — not a button, not an icon. Just the address, on its own.
- **Links**: GitHub and LinkedIn as plain text links, one per line
- **Closing**: *"Thanks for your time."* — three words. Then fade to nothing.
- The final scene ends in complete darkness (the void closes), mirroring the intro's beginning

### Motion Language
- **Entrance**: Materialization. Elements go from `opacity: 0` to `opacity: 0.8` (never fully opaque). No translation, no scaling, no clip-paths.
- **Duration**: 1.5-2s per entrance. Deliberately slow.
- **Scroll**: Content holds for a long scroll distance, then dissolves over a short distance. The ratio is 80% hold / 20% dissolve.
- **Hover**: Extremely subtle — the element's opacity increases from 0.8 to 0.95. Nothing else.
- **Scene transitions**: The current scene fades to 0 opacity over 400ms, then there's a 200ms void, then the next scene materializes over 1.5s
- **No parallax**. No scroll-linked effects. No layering.

### Visual Hierarchy
- Obvious: whatever is currently visible is the only thing that exists
- Scene 1 (Hero): The single statement
- Scene 2 (About): The single paragraph
- Scene 3 (Work): The project image (dominant) + title (secondary)
- Scene 4 (Lab): The list of entries (equal weight)
- Scene 5 (Contact): The email address

### Why This Direction Could Win
- **Maximum differentiation** — no portfolio looks like this
- The void eliminates all visual competition, making the content hit harder
- Technically the simplest to implement (no parallax, no complex animations)
- The quiet confidence is deeply premium — it signals "I don't need to impress you with effects"
- HeroVisual being "nothing" is the ultimate flexible slot

### Why It Could Fail
- Too radical for most visitors — may be perceived as broken or unfinished
- Risk of being boring if the content doesn't carry the weight
- Visitors who scan quickly will bounce — this site demands patience
- Dark theme only — may not suit all lighting environments
- The "void between scenes" approach may frustrate users on slow connections

---

## Phase 2 Decision: Direction Selection

### Comparison Matrix

| Criteria | Direction 1: Signal | Direction 2: Depth Field | Direction 3: Void |
|---|---|---|---|
| **Coherence with intro** | ★★★★★ (direct expansion) | ★★★☆☆ (shifts metaphor) | ★★★★☆ (void = darkness) |
| **Visual uniqueness** | ★★★★☆ (light as structure) | ★★★★★ (cinematic depth) | ★★★★★ (radical minimalism) |
| **Technical feasibility** | ★★★★☆ (CSS + Framer Motion) | ★★☆☆☆ (complex 3D focus) | ★★★★★ (simplest stack) |
| **HeroVisual flexibility** | ★★★★★ (light field = any) | ★★★★★ (depth plane = any) | ★★★★☆ (void = nothing) |
| **Scroll storytelling** | ★★★★☆ (signal guides scroll) | ★★★★★ (focus pulling) | ★★★☆☆ (appear/hold/dissolve) |
| **Performance** | ★★★★☆ (GPU composited) | ★★★☆☆ (blur + 3D risk) | ★★★★★ (minimal work) |
| **User patience required** | ★★★★☆ (moderate) | ★★★☆☆ (moderate) | ★★☆☆☆ (high) |
| **Risk of execution failure** | ★★★☆☆ (medium) | ★★★★☆ (high) | ★★☆☆☆ (low) |
| **"Remembered 1 week later"** | ★★★★☆ | ★★★★★ | ★★★★★ |

### ✅ DECISION: DIRECTION 1 — "THE SIGNAL"

**Why The Signal wins over Depth Field and The Void:**

1. **The signal already exists in the intro.** This isn't introducing a new concept — it's expanding one that already works. The beam-from-void sequence is the strongest part of the current site. The Signal direction honors that and builds a coherent language around it.

2. **The Signal has natural variation.** Light can be bright (Hero), warm (About), focused (Work), calm (Lab), and dimmed (Contact). This creates emotional pacing without needing different visual systems per section. The metaphor is rich enough to sustain 5 scenes without feeling repetitive.

3. **The Void is too risky.** While the concept is beautiful, it demands extreme content quality and user patience. The "Coming Soon" Work section cannot survive the Void — the emptiness would highlight the lack of content, not create mystery. The Signal direction has enough visual interest to carry sections that are still being populated.

4. **Depth Field is too technically risky for this stage.** Three-plane focus pulling with blur effects, perspective transforms, and cross-browser compatibility is a significant engineering investment. The Signal direction achieves cinematic quality with CSS transforms, clip-paths, and opacity — all GPU-composited, all proven techniques already in the codebase.

5. **The Signal creates a unique identity.** "A website built around a beam of light" is memorable. It's not a template, not a trend. It answers the question "If all text disappeared, would the website still have its own identity?" — yes, the light structures would remain.

**Rejected: Direction 2 — Depth Field**
The focus-pulling metaphor is compelling, but the technical complexity (three-plane parallax with per-element blur synced to scroll position) introduces too many variables. Blur is particularly dangerous for performance — it triggers repaints even on GPU-composited elements. The Signal achieves similar cinematic quality through simpler means (clip-paths, opacity, transform).

**Rejected: Direction 3 — The Void**
Beautiful concept, wrong time. This direction demands every word, every line, every piece of content to be exceptionally strong because there's nothing else to look at. The current state of the content (empty Work section, generic About copy, category-label Experiments) cannot support the Void's scrutiny. The Signal direction provides enough visual structure to elevate the content without exposing its weaknesses.

---

### The Signal — Core Design Language

**Signature Elements:**
1. **The Horizontal Guide** — a thin, horizontal beam-like line that appears at key narrative transitions. It's the intro beam, evolved. Not a decoration — a structural element that marks new chapters.
2. **The Axis** — an invisible vertical line (often off-center) that content aligns to or departs from. Creates asymmetry and tension.
3. **Light Field** — the ambient glow that fills the Hero and reappears (in different intensities) at other scenes.
4. **Focal Warmth** — the primary color temperature shifts across scenes: neutral-cool (Hero) → warm (About) → neutral (Work) → neutral-cool (Lab) → warm-dim (Contact).
5. **Signal Pulse** — a subtle, slow brightness oscillation in the light field that creates a sense of aliveness. Like a heartbeat.

**Color Temperature Arc:**
```
Hero:     ❄️ Neutral-cool (blues in primary)
About:    🌡️ Warm (amber shift in primary)
Work:     ❄️ Neutral (pure primary, focused)
Lab:      ❄️ Neutral-cool (slightly desaturated)
Contact:  🌡️ Warm-dim (amber, low intensity)
```

**Typography Treatment:**
- Display size → Hero headline only (2 lines, 1 statement)
- Title → Scene headings (if needed — prefer no headings)
- Heading → Project titles, emphasis lines
- The name "Khan Umar" is never display-size. It appears small (kicker or body), as a signature, not a headline.
- No eyebrows. No "About" labels. Scenes are identified by their content and visual language, not their names.

---

## Phase 3: Implementation Roadmap

### Scene-by-Scene Build Order

| Order | Scene | Complexity | Dependencies |
|---|---|---|---|
| 0 | Foundation refactors | Low | tokens.css, config, providers remain |
| 1 | Hero (The Signal) | High | New HeroVisual, new layout, new motion |
| 2 | Intro→Hero crossfade | Low | Modify ExperienceProvider + Hero entrance |
| 3 | About | Medium | Rethink copy, remove cards, signal markers |
| 4 | Work | High | One real project, visual-first card, depth |
| 5 | Lab | Low | Rename, reformat as notebook entries |
| 6 | Contact | Low | Email primary, visible labels, human closing |
| 7 | Navigation + Transition polish | Medium | Scene-to-scene dissolve via signal |
| 8 | Performance + a11y audit | Low | Remove three.js, verify contrast |

### Files That Will Change

| File | Change |
|---|---|
| `src/app/page.tsx` | Replace `<Reveal>` wrappers with scene-based orchestration. Each scene manages its own entrance timing. |
| `src/components/sections/hero/Hero.tsx` | Complete rewrite. New layout (HeroVisual area + typography stack), no portrait dependency. |
| `src/components/sections/hero/HeroContent.tsx` | Rewrite copy structure. Headline remains, eyebrow removed. |
| `src/components/sections/hero/HeroBackground.tsx` | Evolve into HeroVisual — a flexible slot that renders a light field by default, accepts children. |
| `src/components/sections/hero/HeroPortrait.tsx` | Remove or repurpose as a HeroVisual child option. |
| `src/components/sections/hero/HeroActions.tsx` | Minor: signal-inspired underline, not the current draw. |
| `src/components/sections/hero/ScrollIndicator.tsx` | Replace with a signal pulse indicator. |
| `src/components/sections/about.tsx` | Complete rewrite. No cards, no eyebrow, new copy structure. |
| `src/components/sections/about/AboutContent.tsx` | Replace with signal markers layout. Kill skill cards. |
| `src/components/sections/about/AboutHighlights.tsx` | Remove entirely. |
| `src/components/sections/about/AboutPortrait.tsx` | Keep as optional, but layout doesn't require it. |
| `src/components/sections/work/Work.tsx` | Rewrite for single featured project + case-study feel. |
| `src/components/sections/work/ProjectCard.tsx` | Major redesign: visual-first, no dot-grid placeholder. |
| `src/components/sections/work/WorkGrid.tsx` | Remove. Single project, no grid. |
| `src/components/sections/work/WorkHeader.tsx` | Rewrite. No eyebrow badge. |
| `src/components/sections/experiments.tsx` | Rename to Lab. Rewrite content + component. |
| `src/content/work.ts` | Replace with real content. |
| `src/content/projects.ts` | Replace or remove. One real project or none. |
| `src/content/about.ts` | Rewrite. One paragraph, the emphasis line, signal markers. |
| `src/content/experiments.ts` | Rewrite as Lab entries (concrete artifacts). |
| `src/content/contact.ts` | Rewrite closing. |
| `src/components/experience/IntroScreen.tsx` | Add crossfade exit (not abrupt removal). |
| `src/components/experience/ExperienceProvider.tsx` | Coordinated dissolve between intro and hero. |
| `src/styles/tokens.css` | Add signal-specific color tokens (warmth shifts). |
| `package.json` | Remove three.js, @react-three/fiber. |
| `src/components/ui/tech-chip.tsx` | Remove or archive — no longer used in new design. |
| `src/components/ui/status-badge.tsx` | Remove or archive. |

### Implementation Risks

1. **Work section content gap.** If no real project exists, the Work scene will be as empty as the current one. Mitigation: Document this portfolio itself as a project — the engineering decisions, the design system, the animation architecture. This IS real work.

2. **Signal language can become decorative.** The beam/guide/pulse must always serve structure, not ornament. Each occurrence must answer "does this help the visitor understand where they are and what to look at?"

3. **Crossfade exit from intro.** The current architecture hides children via `display:none` until intro completes. This prevents a crossfade because the DOM literally isn't visible. Mitigation: Render hero behind the intro (behind, with pointer-events: none) and fade the intro's opacity while raising the hero's.

4. **Performance of light field animation.** The current hero blobs use CSS keyframes (GPU composited). The expanded light field system must follow the same constraint — no JS animation loops.

5. **User impatience.** The intro is ~5.2s. Adding crossfade adds ~400ms. Total time to content: ~5.6s. This is long. Mitigation: The intro is skipable (click/tap), but also, this site is for people who appreciate craft — the duration signals intentionality.

---

## Next Steps

1. ✅ Phase 1 complete — Codebase audit
2. ✅ Phase 2 complete — Three directions created, evaluated, selected
3. ⬜ Phase 3 complete — Implementation roadmap documented above
4. ⬜ Phase 4 — Begin implementation: Scene 0 (Foundation) → Scene 1 (Hero)

Ready for your feedback on the direction choice and roadmap before implementation begins.

