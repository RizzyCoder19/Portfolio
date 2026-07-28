# Product Design Blueprint — Khan Umar Portfolio

> Reviewed as: Principal Product Designer, Creative Director, Senior Frontend Engineer.
> Benchmark: Linear, Vercel, Raycast, Apple, Stripe, Framer.

---

## Part 1 — Section-by-Section Critique

---

### 1. Intro

**Purpose**: Set an emotional tone. Signal that this is not a generic portfolio. Create anticipation.

**Does it achieve this?** Mostly yes. The beam-from-void sequence is genuinely cinematic. The pacing (5.2s) is appropriate — long enough to feel intentional, short enough to not frustrate. The copy ("Software isn't just built. It is experienced.") is strong.

**What feels generic?** Nothing — this is the strongest section.

**What feels memorable?** The beam growing from center. The two-line reveal timing. The restraint.

**What to redesign?** Nothing structurally. Minor refinement: the final exit (text fade → pause → done) could be smoother. Currently the text fades, then there's a 250ms black pause before the hero appears. This pause creates a "dead frame" — the intro ends, the user sees black, then the page snaps in. This should be a crossfade or a coordinated dissolve where the hero begins fading in *while* the intro is fading out.

**What should stay?** Everything. This is the quality bar the rest of the site must match.

---

### 2. Hero

**Purpose**: Establish identity, capability, and confidence. Make the visitor want to keep scrolling. First 3 seconds after the intro determine whether someone stays or bounces.

**Does it achieve this?** No. After the cinematic intro, the hero feels like a resume header. The emotional momentum built by the intro is entirely wasted.

**What feels generic?**
- Center-stacked layout: eyebrow → name → statement → paragraph → buttons. This is the exact same layout as every portfolio template on the internet.
- The name at `display` size (up to 6.5rem) dominates visually but carries the least conceptual weight. Your name is not what makes someone stay — what you *do* is.
- The supporting paragraph reads like a LinkedIn summary. 38 words of self-description in the hero is too much.
- `hover:scale-105` on buttons — this is a template tell.
- Bouncing dot scroll indicator — cliché.
- Static background blob — inert, lifeless.

**What feels memorable?** The design token system is well-structured. The oklch color palette is sophisticated. The typography scale is thoughtful. These are invisible qualities that signal engineering rigor, but they don't save the composition.

**What to redesign?** The entire compositional hierarchy. The hero we already implemented (clip-path reveals, editorial layout, animated gradient, tactile buttons) is a significant improvement. But the *content strategy* still needs work — more on this in the blueprint.

**What should stay?** The animation config system, the Geist font pairing, the oklch token palette.

---

### 3. About

**Purpose**: Build trust and human connection. Transition from "what they do" to "who they are." Give enough personal context that the visitor feels they know the person.

**Does it achieve this?** Partially. The two-column layout (text + portrait) is correct for this section. But the execution has issues.

**What feels generic?**
- The eyebrow is literally the word "About." No premium site uses the section name as its own label. This is a navigation label, not a content signal.
- The heading "More than writing code, I enjoy building experiences" is a cliché. Every developer portfolio says some variant of this.
- Two dense paragraphs (~60 words each) are too much for a scanning visitor. Nobody reads this. They scan the heading, glance at the portrait, and scroll past.
- The highlights grid (Frontend, Data, AI-assisted, Craft) is essentially a skills list presented as cards. This is resume thinking.
- The card hover effect (border lighten + background shift) is identical to the experiment cards. Same component, same feel. No visual differentiation between sections.

**What feels memorable?** The emphasis line at the bottom ("Good software should feel effortless") is actually strong — but it's buried after two paragraphs nobody will read.

**What to redesign?**
- Kill the word "About" as an eyebrow. Replace with something that signals the *theme* of the section, not its label.
- Rewrite the heading. It should be specific to Khan Umar, not a generic developer platitude.
- Compress the paragraphs. One short paragraph max. Move the emphasis line *up* — it's the strongest copy and it's hidden.
- Replace the highlights grid with something more experiential. The "skills as cards" pattern is resume-thinking. Consider a more fluid, integrated approach — weaving capabilities into the narrative rather than listing them.
- The portrait needs to carry more visual weight. Currently it's a standard `object-cover` image in a bordered box. It should feel like a design element, not a photo attachment.

**What should stay?** The two-column layout concept. The portrait itself (assuming it's a real, high-quality photo).

---

### 4. Work

**Purpose**: This is the most important section on the entire site. Everything before it exists to make someone *want* to see this. This is the proof.

**Does it achieve this?** No. This is the weakest section on the site.

**What feels generic?** Everything. But more importantly — there is *nothing here*. All four projects are "Coming Soon" placeholders with identical structure, no tech stacks, and `#` hrefs. The dot-grid placeholder pattern in the image area is a direct copy of the shadcn/ui component demo pattern.

**What feels memorable?** Nothing. This section actively damages the site's credibility. A visitor arrives after a cinematic intro, sees a promising hero, reads about craft and intention in the about section, and then discovers... nothing. Zero shipped work. Four identical "Coming Soon" cards.

> [!CAUTION]
> **This is the single most critical problem with the entire portfolio.** No amount of design refinement can compensate for an empty Work section. A premium intro that leads to empty project cards is *worse* than no intro at all — it sets expectations that the content cannot meet.

**What to redesign?**
- If projects genuinely don't exist yet, this section should not exist in its current form. Four "Coming Soon" cards communicate the opposite of confidence.
- Options: (a) Show 1-2 projects maximum and make them feel substantial — even this portfolio itself is a project worth documenting. (b) Replace the traditional card grid with a "Currently Building" narrative approach — one focused block that describes what's in progress, with real technical detail, rather than four empty shells. (c) Remove the section entirely until there's real work to show. An empty Work section does more harm than its absence.
- If the section stays, the card design needs to be fundamentally different. The current cards (border + sunken background + dot pattern + title + status badge + description + tech chips + buttons) is a component library demo. A real project card should be dominated by a *visual* — a screenshot, a video, an interaction demo. The metadata is secondary.

**What should stay?** The `ProjectCard` component architecture is reasonable — it just needs real content and a visual-first redesign.

---

### 5. Experiments

**Purpose**: Show breadth of curiosity. Signal that this person explores beyond their comfort zone. Give depth to the "I care about craft" narrative.

**Does it achieve this?** Barely. The concept is right — having an experiments section differentiates this from a typical portfolio. But the execution is a list of categories with descriptions.

**What feels generic?**
- Same card component as About highlights. Same hover. Same visual weight. The site feels like it has one component (bordered card with title + description) used everywhere.
- The content is category labels, not experiments. "AI Engineering" isn't an experiment — it's a topic. An experiment is "I built a multi-agent workflow that coordinates three LLMs to review pull requests." The current cards read like course catalog descriptions.
- "Currently Exploring" lists tool names. This is a resume skills section disguised as exploration.

**What feels memorable?** The section *concept*. Having "Experiments" as a dedicated section is a strong differentiator. Most portfolios have Work and Contact. This signals intellectual curiosity.

**What to redesign?**
- Each experiment should be a concrete thing, not a category. "I built X" > "I'm interested in X."
- Visual differentiation from About and Work cards. This section should feel different — perhaps a more compact, log-like format (think changelog entries, lab notes, or a timeline).
- If the experiments are genuinely just areas of interest with no artifacts, be honest about that — frame it as "What I'm studying" rather than "Experiments," which implies you've built something.

**What should stay?** The section's existence. The four-card grid layout is fine as a starting container.

---

### 6. Contact

**Purpose**: Convert interest into action. Make it trivially easy to reach out. Leave a lasting impression.

**Does it achieve this?** Mostly yes, but without distinction.

**What feels generic?**
- Two-column layout with heading on left, links on right — this is every SaaS landing page's contact section.
- Icon-only social links (GitHub, LinkedIn, Email, Resume as 44×44 circles) are functional but forgettable. No labels, no context.
- The closing lines ("Built with curiosity. Designed with intention. Always evolving.") are three separate components rendered individually. This is over-engineering for three lines of text — but more importantly, this is the *sign-off* of the entire experience and it reads like a LinkedIn banner. These are platitudes, not a memorable closing.

**What feels memorable?** The availability section is a good idea — "Currently: Open to internships..." signals transparency and approachability.

**What to redesign?**
- The closing copy needs to be either genuinely memorable or removed. Three generic inspiration-poster lines undermine the craft narrative.
- Social links should have labels visible on desktop. Icon-only forces hover/reading the aria-label. Premium sites show the link destination.
- Consider making email the primary CTA — a proper button, not just an icon in a row. This is where the conversion happens.
- The section should feel like a conclusion, not just another content block. Visual treatment should signal "this is the end of the experience."

**What should stay?** The availability component. The two-column structure (with improvements).

---

## Part 2 — Product Design Blueprint

---

### Information Hierarchy (Global)

The page tells a story. Each section has one job:

| Order | Section | Job | Emotional Register |
|---|---|---|---|
| 0 | Intro | Create anticipation | Mystery, confidence |
| 1 | Hero | Establish identity + capability | Clarity, authority |
| 2 | About | Build human connection | Warmth, authenticity |
| 3 | Work | Prove capability | Credibility, craft |
| 4 | Experiments | Show depth + curiosity | Intelligence, range |
| 5 | Contact | Enable action | Openness, finality |

**The critical rule**: Each section must deliver *one clear emotion* and then hand off to the next. If two adjacent sections feel the same, one of them is redundant.

**Current problem**: About, Work, and Experiments all feel identical because they use the same card component, same spacing, same entrance animation, same typography hierarchy. The page reads as one long list rather than a narrative arc.

---

### Visual Hierarchy

**Principle**: The eye should never be confused about what to look at first.

**Per-section primary focal point:**

| Section | Primary focal point | Secondary | Tertiary |
|---|---|---|---|
| Intro | The beam | The text | Nothing else |
| Hero | The headline | CTA buttons | Scroll indicator |
| About | The portrait | The emphasis line | The paragraph |
| Work | Project visuals (screenshots) | Project titles | Tech + links |
| Experiments | Card titles | Card descriptions | — |
| Contact | Email CTA | Social links | Closing |

**Current failure**: In Work, the "primary focal point" is a dot-grid placeholder — literally the least interesting element. In About, the paragraphs compete with the portrait for attention and neither wins.

---

### Layout Philosophy

**Desktop**: Editorial. Think magazine spread. Generous margins. Asymmetric grids where appropriate. Not every section needs to be centered. Alternating alignment (hero centered → about left-right → work full-width → experiments centered → contact left-right) creates visual rhythm through layout variation.

**Tablet**: Balanced. Sections that are side-by-side on desktop should stack gracefully but maintain proportion. Never simply compress the desktop layout — re-proportion it.

**Mobile**: Handcrafted. This is NOT "make it fit." Each section should be *designed* for the viewport. This means:
- Headline sizes should be *different* on mobile, not just fluid-scaled versions of desktop.
- Touch targets should feel generous (minimum 44px, prefer 48px).
- Spacing should feel intentional, not collapsed.
- Single-column layouts should use full-width elements that feel like they *belong* at that width, not like they're trapped in a narrow column.

---

### Typography Rhythm

**Current system** (well-defined but underused):

| Token | Size | Purpose |
|---|---|---|
| `display` | 2.75–6.5rem | Hero headline only |
| `title` | 2–3.75rem | Section headings |
| `heading` | 1.5–2.25rem | Sub-headings |
| `kicker` | 0.6875rem | Labels, eyebrows |
| body | browser default | Paragraphs |

**Problem**: The jump from `display` to `title` is enormous. The hero uses `display`, then every other section heading uses `title`. This makes the hero feel disconnected from the rest of the page rather than its natural leader.

**Recommendation**: Introduce a `subtitle` tier between `title` and `heading` (~1.25–1.75rem). Use it for supporting text that's more important than body but less important than headings. Currently the hero description, about paragraphs, and contact description all use body-sized text (`text-base` / `text-lg`) when they should feel more elevated.

**Rhythm rule**: Consecutive text elements should never be the same size unless they're a list. Size variation creates scanning rhythm.

---

### Whitespace Strategy

**Current spacing** (well-defined):
- `--spacing-page`: horizontal padding (1.25rem–4rem)
- `--spacing-section`: vertical section padding (5rem–10rem)

**Problem**: Every section uses `spacing="default"` which gives them identical vertical padding. This makes the page feel metronomic — equal weight everywhere.

**Recommendation**:
- Hero → About: *reduce* the gap. The hero should flow into About without a dramatic pause. This makes the two feel connected — "here's what I do" → "here's who I am."
- About → Work: *increase* the gap. This is a tonal shift from personal narrative to professional proof. A generous pause signals "now look at what I've actually built."
- Work → Experiments: standard gap.
- Experiments → Contact: *reduce* the gap. The closing should feel like a natural conclusion, not a separate destination.
- Consider using a divider element (a thin horizontal rule, a gradient fade, or a subtle change in background tone) between major tonal shifts rather than relying solely on whitespace.

---

### Motion Philosophy

**Current approach**: `Reveal` component (fade + translateY) used uniformly everywhere. Every element enters the same way. This is motion as decoration — it doesn't communicate anything.

**Recommended approach**: Motion should communicate *meaning*:

| Intent | Motion pattern | Example |
|---|---|---|
| Entrance (first paint) | Clip-path reveal, stagger | Hero headline lines |
| Scroll reveal | Soft rise (opacity + y) | Section content blocks |
| Continuity | Parallax, shared motion | Hero → About transition |
| Attention | Subtle pulse or glow | Primary CTA |
| Feedback | Spring physics | Button hover/press |
| Exit | Fade + slight y-up | Intro screen |

**Rules**:
1. Every animation must serve a purpose. If removing it doesn't reduce comprehension, remove it.
2. Entrance animations fire *once*. Never replay on scroll-back.
3. Duration should match visual weight: large elements move slower (600–900ms), small elements move faster (200–400ms).
4. Easing: use `[0.16, 1, 0.3, 1]` (ease-out-expo) for entrances, `[0.22, 1, 0.36, 1]` for standard transitions. Never use linear or ease-in for UI motion.
5. Stagger delay: 80–120ms between siblings. Longer feels sluggish. Shorter feels simultaneous.

---

### Interaction Philosophy

**Hover states** should feel like the element is physically responding to presence — not like a CSS class being toggled:
- Buttons: shadow lift (2px translateY + shadow expansion). The shimmer sweep on primary is good. No scale transforms on buttons.
- Cards: border color warms, shadow deepens. The card should feel like it's *lifting* toward you.
- Links: underline draws in (clip-path or scaleX from center).
- Images: very subtle zoom (~102%) with overflow hidden. Never zoom text.

**Click/tap states** should feel like settling — the opposite of hover. translateY back to 0, shadow contracts, brief moment of stillness.

**Scroll** should feel buttery. Lenis at 1.1 duration is appropriate. `syncTouch: false` is correct — native touch scrolling feels better than intercepted scrolling on mobile.

---

### Scroll Storytelling

The page is not a list of sections. It's a **narrative scroll** with three acts:

**Act 1 — Identity** (Intro → Hero → About)
- Establishes who this person is and why you should care.
- Motion: cinematic, deliberate, clip-path reveals.
- Pacing: slow to medium. Let things breathe.
- Background: ambient gradients, grain, warmth.

**Act 2 — Evidence** (Work → Experiments)
- Proves the claims made in Act 1.
- Motion: functional, scroll-linked. Cards reveal as you reach them.
- Pacing: medium. The visitor is now engaged; respect their time.
- Background: neutral. Let the work speak.

**Act 3 — Connection** (Contact)
- Converts interest into action.
- Motion: minimal. Confidence, not performance.
- Pacing: brief. Clear CTA. Don't make them work for it.
- Background: return to warmth. Echo the opening tone. Bookend the experience.

**Scroll-linked effects** (use sparingly):
- Hero parallax (content up, background down) — already implemented.
- Hero opacity fade as it scrolls away — the hero should *dissolve* into the About, not just scroll off.
- A subtle background tint shift between Act 1 and Act 2 (warm → neutral).

---

### Emotional Pacing

```
Intro:    ████████████░░░░  Mystery / anticipation
Hero:     ██████████████░░  Confidence / clarity  
About:    ████████░░░░░░░░  Warmth / approachability
Work:     ██████████████░░  Authority / proof
Expmt:    ██████░░░░░░░░░░  Curiosity / range
Contact:  ████████████░░░░  Openness / finality
```

**Current problem**: The emotional curve is flat. Every section sits at the same intensity because they all look and feel the same. The pacing above shows desired variation — the hero and work sections should be the peaks; about and experiments are valleys that provide contrast.

---

### Accessibility Considerations

What's already good:
- `prefers-reduced-motion` is respected globally via motion.css
- Skip link exists
- aria-labels on sections
- Focus-visible styles defined
- Semantic HTML (section, article, h1-h3)

What needs improvement:
- The `heroHeadline.map()` renders text across two `motion.span` elements inside a single `h1`. Screen readers will read this correctly, but the aria tree should be verified.
- Contact links are icon-only — they rely on `aria-label` but should have visible labels on desktop for cognitive accessibility (not everyone recognizes icon shapes).
- The intro screen is `aria-hidden="true"` — correct, since it's decorative. But keyboard users see nothing for 5.2 seconds. Consider showing a "Loading..." text for screen readers, or better: don't block keyboard navigation during the intro.
- Color contrast: oklch palette should be verified at WCAG AA minimum (4.5:1 for body text, 3:1 for large text). The `muted-foreground` token (`oklch(0.5 0.02 285)` in light mode) against `background` (`oklch(0.995 0.002 285)`) should be checked — 0.5 lightness on near-white may be borderline.

---

### Performance Constraints

What's currently well-handled:
- CSS-only background animations (transform, GPU composited)
- No WebGL despite three.js being in deps
- Lenis smooth scroll with GSAP ticker sync
- next/font with `display: swap`
- Static generation (all pages prerendered)

Rules going forward:
1. **No JavaScript animation loops for visual effects.** CSS keyframes for ambient motion. Framer Motion for entrance/interaction only.
2. **Images must be next/image with explicit width/height.** No layout shift.
3. **Bundle size**: currently 219 kB first-load JS for home. This is acceptable but should not grow. Three.js (54 kB) is in the bundle but unused — it should be removed or lazy-loaded behind interaction.
4. **LCP target**: < 2.5s. The intro delays content painting by 5.2s. This means real LCP is ~5.2s + render time. For performance scoring, consider making the intro skipable or rendering the hero *behind* the intro (visibility: hidden, not display: none) so the browser can begin painting.
5. **CLS target**: 0. All images must have dimensions. All fonts use `display: swap`.
6. **Animation budget**: no more than 3 simultaneous CSS animations per viewport. Currently the hero has 3 blob animations + grain = 4. The grain animation is `steps(2)` so its cost is negligible, but monitor this.

---

## Part 3 — My Disagreements with the Current Direction

### 1. The Work section should not exist in its current form.

Four identical "Coming Soon" cards with `#` links and no screenshots undermine everything else on the site. A premium intro leading to an empty portfolio is like a beautifully designed restaurant menu with no food. Either populate it with real projects (this portfolio itself is a project), reduce it to a single honest "Currently Building" narrative, or remove it entirely.

### 2. Experiments is a skills list, not an experiments section.

"AI Engineering" is not an experiment. It's a category. If there are no concrete experiments to show, rename this to "Interests" or "What I'm Studying" and be transparent about the stage. Honesty is more premium than empty confidence.

### 3. The site has one visual component.

Cards in About, cards in Work, cards in Experiments — same borders, same hover, same size, same spacing. The visual vocabulary of the site is a single bordered rectangle. Premium sites use diverse visual treatments: full-bleed images, text-heavy editorial blocks, compact data-dense rows, expansive whitespace statements. Variety in visual form is what makes a site feel designed rather than assembled.

### 4. Three.js is a dead dependency.

`@react-three/fiber` and `three` are in the bundle (54 kB+) but used nowhere. Remove them unless there's a concrete plan to use them. Dead weight in a portfolio that talks about performance is contradictory.

### 5. The closing copy is a liability.

"Built with curiosity. Designed with intention. Always evolving." — these are LinkedIn bio phrases. The closing of a premium experience should either be silent (let the work speak), functional (a clear CTA), or genuinely specific. A good closing would be something honest like "Thanks for scrolling. If something here resonated, I'd love to hear from you." — direct, human, not trying to sound profound.

---

## Part 4 — Summary of Priorities

If I were the creative director, these are the changes I'd prioritize, in order:

| Priority | Change | Impact |
|---|---|---|
| **P0** | Populate or remove the Work section | Credibility |
| **P0** | Bridge the intro→hero transition (crossfade, not snap) | Emotional continuity |
| **P1** | Differentiate visual treatments across sections | Premium feel |
| **P1** | Rewrite About and Experiments copy | Authenticity |
| **P1** | Make contact links visible (not icon-only) | Usability |
| **P2** | Vary section spacing (tighter/looser) | Narrative rhythm |
| **P2** | Remove three.js from bundle | Performance |
| **P2** | Add scroll-linked hero→about dissolve | Polish |
| **P3** | Refine closing copy | Lasting impression |
| **P3** | Verify color contrast ratios | Accessibility |
