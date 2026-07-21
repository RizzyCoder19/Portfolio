# Hero Section — Design Specification

> **Status:** Design phase — not yet implemented
>
> **Version:** 1.0
>
> **Related docs:**
>
> - [Product Spec](./PRODUCT_SPEC.md)
> - [Design System](./DESIGN_SYSTEM.md)
> - [Architecture](./ARCHITECTURE.md)

---

## 1. Product Objective

The Hero is the **first and only impression** that determines whether a recruiter continues exploring or leaves.

**Primary objective:** Within 5 seconds of page load, a recruiter should think:

> _"I should interview this person."_

The Hero must demonstrate engineering quality and design taste **through the experience itself** — not through explicit skill lists, tag clouds, or buzzword paragraphs. The visitor should feel they have landed on a premium software product, not a personal website.

---

## 2. Emotional Goal

The Hero should evoke a specific emotional arc within the first few seconds:

1. **Intrigue** — Something about the visual feels unexpected and deliberate.
2. **Trust** — The typography, spacing, and motion signal quality and precision.
3. **Curiosity** — The visitor wants to scroll or interact to learn more.
4. **Desire** — They want to know who built this.

The emotional tone sits at the intersection of these qualities:

| Quality    | How it manifests                                                                  |
| ---------- | --------------------------------------------------------------------------------- |
| Premium    | Generous whitespace, refined typography, deliberate pacing                        |
| Powerful   | Strong visual hierarchy, confident scale, bold typographic weight                 |
| Elegant    | Subtle micro-interactions, smooth transitions, restrained color                   |
| Minimal    | Nothing unnecessary; every element earns its place                                |
| Technical  | The interaction model itself demonstrates engineering skill                       |
| Futuristic | Ambient motion, subtle glow, forward-leaning aesthetic                            |
| Warm       | A human presence behind the technical polish (name, role, humanity)               |
| Mysterious | Not everything is revealed immediately — partial disclosure invites exploration   |
| Creative   | The layout or motion does something the visitor hasn't seen on a portfolio before |

---

## 3. Target Audience

### Primary

- **Technical recruiters** — screening many candidates quickly; need a high-signal heuristic in seconds.
- **Engineering managers** — evaluating taste, craft, and attention to detail.
- **Design engineers / creative technologists** — peers assessing technical and design capability.

### Secondary

- **Design community** — evaluating the portfolio as a reference or inspiration.
- **General visitors** — non-technical visitors who should still perceive quality.

### What this audience values

- Fast load time and smooth performance
- Intentional design decisions (everything has a reason)
- Accessibility and inclusive design
- Evidence of systems thinking (not one-off styling)
- Originality — they have seen hundreds of portfolios; this must feel different

---

## 4. User Journey (First 30 Seconds)

| Time   | User Action                | Hero Response                                               | Emotional State |
| ------ | -------------------------- | ----------------------------------------------------------- | --------------- |
| 0s     | Navigate to site           | Page loads; initial state of Hero visible immediately       | Anticipation    |
| 0–1.5s | Eyes scan the viewport     | Content fades/animates in with staggered, deliberate timing | Curiosity       |
| 1.5–3s | Reads primary headline     | Typography is bold, clean, and spacious                     | Trust           |
| 3–5s   | Looks for secondary signal | Subtitle/role reinforces credibility                        | Interest        |
| 5–8s   | Notices ambient motion     | Subtle background movement or micro-interaction             | Intrigue        |
| 8–12s  | Hovers over a CTA          | Button responds with satisfying micro-interaction           | Engagement      |
| 12–20s | Decides whether to scroll  | CTA invites exploration; smooth scroll initiates            | Commitment      |
| 20–30s | Scrolling to next section  | Hero transitions/delegates to About section gracefully      | Momentum        |

---

## 5. Information Hierarchy

The Hero must communicate four things, in order of priority:

1. **Who** — Full name (the brand)
2. **What** — Role / discipline (signal relevance)
3. **Why** — Value proposition or differentiator (compels further exploration)
4. **Where** — CTA guidance (what to do next)

### What NOT to include in the Hero

- ❌ Profile photo / avatar
- ❌ Skill percentage bars
- ❌ Icon clouds (React, TypeScript, etc. badges)
- ❌ "About Me" paragraphs
- ❌ Social media links (defer to footer or contact section)
- ❌ Animated typing effects (overused, distracts from substance)
- ❌ Particle backgrounds (performance cost, generic)
- ❌ Scrolling marquee text (noise)

---

## 6. Layout Structure

The Hero occupies **100vh** (full viewport) and is vertically centered.

### Layout zones (top to bottom)

```
┌──────────────────────────────────────────┐
│                                          │
│            ┌──────────────┐              │
│            │  Eyebrow     │              │  <— Badge/section context
│            │  (optional)  │              │
│            ├──────────────┤              │
│            │              │              │
│            │   Name       │              │  <— Primary headline
│            │              │              │     (largest type token)
│            ├──────────────┤              │
│            │  Role        │              │  <— Sub-headline
│            ├──────────────┤              │
│            │  Tagline     │              │  <— Value proposition
│            ├──────────────┤              │
│            │  [CTA] [CTA] │              │  <— Action row
│            └──────────────┘              │
│                                          │
│              ↓ scroll indicator          │  <— Subtle prompt
│                                          │
└──────────────────────────────────────────┘
```

### Alignment

- **Content:** Center-aligned horizontally (symmetry, focus, readability across widths)
- **Vertical:** Center of viewport — balanced, not top-heavy
- **Maximum width:** Narrow or constrained-width container to keep line length readable

### Empty space strategy

- **Above content:** 1 unit of breathing room
- **Below content:** 1 unit + space for scroll indicator
- **Sides:** Generous padding that scales with viewport
- **Between elements:** Consistent, intentional gaps (use spacing tokens)

---

## 7. Typography System

### Hierarchy

| Element  | Token                                     | Weight                           | Details                                                               |
| -------- | ----------------------------------------- | -------------------------------- | --------------------------------------------------------------------- |
| Name     | `--text-display` (clamp 2.75rem → 6.5rem) | **Bold / Extra bold** (700–800)  | Tight tracking `-0.065em`; may use a distinct or variable font weight |
| Role     | `--text-title` (clamp 2rem → 3.75rem)     | **Medium / Semi-bold** (500–600) | Slightly lighter weight than name to create subordination             |
| Tagline  | `--text-heading` (clamp 1.5rem → 2.25rem) | Normal (400)                     | `text-muted-foreground`; lighter visual weight                        |
| Eyebrow  | `--text-kicker` (0.6875rem)               | Bold (700)                       | Uppercase, 0.16em letter-spacing; `text-muted-foreground`             |
| CTA text | Body size                                 | Semi-bold (600)                  | Consistent with Button primitive                                      |

### Font stack

Use the project's existing font configuration. If variable fonts are available, consider using **weight variation** as a design tool — e.g., the weight of the name could subtly shift on hover or scroll.

### Line length

Maximum container width should constrain text to **~60–75 characters** per line for optimal readability.

---

## 8. CTA Strategy

### Primary CTA

> **"View my work"** or **"Explore projects"**

- Visually prominent (filled button with primary color)
- Triggers smooth scroll to the Work section
- Should feel like the obvious next step

### Secondary CTA

> **"Get in touch"** or **"Contact"**

- Visually subdued (outline or ghost button)
- Triggers smooth scroll to the Contact section
- Available but not competing with the primary CTA

### Behavior

- Both CTAs use Lenis smooth scroll to their target sections
- Focus management: after click, focus moves to the target section heading
- Keyboard accessible: Enter/Space triggers CTA
- Hover state: button transforms with a subtle lift (`translateY(-2px)`) and shadow elevation change

### Anti-patterns

- ❌ "Hire me" (too direct, presumptuous)
- ❌ "Download CV" (premature; save for later interaction)
- ❌ Multiple CTAs competing for attention (max 2)
- ❌ CTA that opens a new tab (breaks the scroll flow)

---

## 9. Motion Timeline

All motion respects `prefers-reduced-motion`. When reduced motion is detected, all elements appear instantly with no animation.

### Entrance sequence (page load)

| Step | Element                    | Animation          | Delay  | Duration | Easing     |
| ---- | -------------------------- | ------------------ | ------ | -------- | ---------- |
| 1    | Background / ambient layer | Fade in            | 0ms    | 800ms    | ease-out   |
| 2    | Eyebrow (if present)       | Slide up + fade in | 200ms  | 600ms    | `ease-out` |
| 3    | Name                       | Slide up + fade in | 400ms  | 700ms    | `ease-out` |
| 4    | Role                       | Slide up + fade in | 600ms  | 600ms    | `ease-out` |
| 5    | Tagline                    | Slide up + fade in | 800ms  | 600ms    | `ease-out` |
| 6    | CTA row                    | Slide up + fade in | 1000ms | 500ms    | `ease-out` |
| 7    | Scroll indicator           | Fade in            | 1400ms | 400ms    | `ease-out` |

### Interaction motion

| Trigger                        | Response                                 | Duration | Details                   |
| ------------------------------ | ---------------------------------------- | -------- | ------------------------- |
| Hover on CTA                   | Slight upward translate + shadow deepens | 200ms    | Ease standard             |
| Hover on name (if interactive) | Slight scale or weight change            | 300ms    | Ease enter                |
| Window resize                  | Immediate reposition (no animation)      | 0ms      | No layout thrash          |
| Scroll away from Hero          | Hero content fades or scales down        | 400ms    | Delegates to next section |

### Timing constants

- **Stagger delay between elements:** 200ms
- **Maximum entrance duration:** ~1.8s (content visible by 2s)
- **Micro-interaction duration:** 150–300ms
- **Transition duration:** 300–500ms

---

## 10. Background System

### Design goals

- Must not distract from content
- Must not compete with typography for attention
- Must be performant (no GPU-heavy effects on main thread)
- Must respect reduced motion (static fallback)
- Should feel ambient, atmospheric, and technically impressive

### Options (ranked by preference)

#### Option A — Ambient gradient with subtle animation (Recommended for initial implementation)

- A radial gradient that shifts slowly over time (breathing cycle of ~10–15s)
- Uses `--canvas` and `--primary` tokens at low opacity (`~5–10%`)
- Implemented with CSS `@keyframes` on `background-position` or `transform: scale()` on a pseudo-element
- Performance cost: negligible (GPU-composited)
- Falls back to static gradient when `prefers-reduced-motion` is active

#### Option B — Noise texture overlay

- A `<canvas>`-based or SVG-based grain texture at ~5–10% opacity
- Adds tactile depth without distracting
- Can be static (no animation) for performance

#### Option C — Geometric / grid pattern (future enhancement)

- Subtle grid or line pattern using CSS `background-image`
- Animates on scroll parallax

### Light/Dark mode

- Background must respond to theme changes gracefully
- Dark mode: deeper, more atmospheric (higher contrast between background and glow)
- Light mode: lighter, more transparent ambient effect

### What NOT to use

- ❌ Video backgrounds (heavy, slow to load, autoplay issues)
- ❌ Three.js / WebGL scenes in the initial implementation (performance risk)
- ❌ Particle systems (distracting, battery drain)
- ❌ Heavy CSS filters (blur creates performance issues on scroll)

---

## 11. Responsive Behavior

### Breakpoint strategy

| Breakpoint              | Behavior                                                                     |
| ----------------------- | ---------------------------------------------------------------------------- |
| **≥ 1024px (desktop)**  | Full layout as described; display type at maximum scale                      |
| **768–1023px (tablet)** | Slightly reduced type scale; still centered; keep 100vh                      |
| **< 768px (mobile)**    | Reduced type spacing; ensure readability; consider reducing vertical spacing |

### Mobile-specific adjustments

- **Name:** Scales down but remains the dominant element. Consider dropping the display size one step if needed.
- **Role + Tagline:** May be combined or one hidden to reduce clutter.
- **CTAs:** Stack vertically instead of horizontal; full-width buttons for easier tapping.
- **Scroll indicator:** Hidden on mobile (swipe affordance is already understood).
- **Touch targets:** Minimum 44×44px for CTA buttons.

### What should NOT change on mobile

- Content remains center-aligned
- Viewport height remains full (`100dvh` preferred)
- Information hierarchy is preserved

---

## 12. Accessibility Requirements

### Keyboard navigation

- All CTAs must be reachable via Tab in logical order
- Focus indicators must be visible (use existing `focus-visible` ring from the design system)
- No focus trap; Tab moves naturally through Hero to next interactive element

### Screen readers

- The Hero region should have an `aria-label` or `aria-labelledby` referencing the name heading
- The name should be an `<h1>` — this is the page's primary heading
- Role and tagline should be associated semantically (e.g., paragraph text following the heading)
- Motion must not trigger vestibular disorders (respect `prefers-reduced-motion`)

### Color and contrast

- All text must meet WCAG 2.2 AA contrast ratios (4.5:1 for body, 3:1 for large text)
- The name (display type) qualifies as large text; contrast minimum 3:1
- CTA buttons must have visible hover/focus states beyond color alone

### Reduced motion

- When `prefers-reduced-motion: reduce` is active:
  - No entrance animations (all content visible immediately)
  - Ambient background remains static
  - No parallax or scroll-linked effects
  - Hover micro-interactions are disabled
- This is not optional — it is a requirement

---

## 13. Performance Budget

| Metric                              | Target       | Measurement                                                   |
| ----------------------------------- | ------------ | ------------------------------------------------------------- |
| **LCP** (Largest Contentful Paint)  | < 1.5s       | The Hero text must be visible within 1.5s of navigation start |
| **TBT** (Total Blocking Time)       | < 50ms       | No JavaScript should block the main thread for the Hero       |
| **CLS** (Cumulative Layout Shift)   | < 0.05       | No visible layout shifts during Hero load                     |
| **FCP** (First Contentful Paint)    | < 1.0s       | First paint must include Hero background                      |
| **INP** (Interaction to Next Paint) | < 100ms      | CTA hover/click responses must feel instant                   |
| **JS bundle impact**                | < 10KB       | Hero-specific JavaScript must be minimal                      |
| **Image weight**                    | 0KB          | No images in the Hero (typography-only)                       |
| **Network requests**                | 0 additional | No Hero-specific network requests beyond the page shell       |

### How to achieve this

- Typography-only Hero — no images, no video, no heavy assets
- CSS-only background animation (no JS thread involvement)
- Font loading optimized (font-display: swap, preload, or subset)
- Lenis and GSAP are already loaded at the app level; Hero does not introduce new JS dependencies

---

## 14. Success Criteria

| Criteria                                                        | Measurement                |
| --------------------------------------------------------------- | -------------------------- |
| Recruiters identify the person's name and role within 5 seconds | User testing / heatmap     |
| Hero loads and is fully visible within 2 seconds                | Lighthouse / Web Vitals    |
| No layout shift occurs during font load or animation            | CLS < 0.05                 |
| All motion respects reduced motion preference                   | Axe DevTools / manual test |
| Hero renders correctly at 320px–2560px widths                   | Manual responsive test     |
| All CTAs are keyboard accessible                                | Tab through entire Hero    |
| No new JavaScript dependencies introduced                       | `package.json` unchanged   |
| Build succeeds with zero lint and type errors                   | `npm run check`            |
| Light and dark mode both display correctly                      | Manual visual inspection   |

---

## 15. Future Enhancements

These are explicitly **out of scope** for initial implementation. They are documented here to inform the architecture and prevent design decisions that would block future iteration.

| Enhancement                              | Priority | Notes                                                                                                                                                                                   |
| ---------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Interactive background (Three.js)**    | Low      | A subtle WebGL scene (mesh gradient, geometric shapes, or wave) that responds to cursor position. Must have static fallback, respect reduced motion, and stay under performance budget. |
| **Name becomes an interactive logo**     | Low      | The name could transform into a monogram or symbol on scroll/interaction. Requires bespoke SVG or font work.                                                                            |
| **Scroll-driven Hero reveal**            | Medium   | Hero could reveal additional depth (secondary text, visual layer) as the user scrolls, before transitioning to the next section.                                                        |
| **Cursor-reactive micro-shift**          | Low      | Content translates slightly in response to mouse position (parallax). Must be imperceptible to avoid motion sickness.                                                                   |
| **Custom cursor**                        | Low      | Replace default cursor with an unobtrusive custom cursor within the Hero region. Consider accessibility implications carefully.                                                         |
| **Dynamic greeting (time-of-day aware)** | Low      | "Good morning" / "Good evening" variant in the tagline for a human touch. Must be tested for internationalization.                                                                      |
| **Font loading strategy refinement**     | Medium   | Explore subset fonts, font-display optimization, or variable font axes to further improve LCP.                                                                                          |

---

_This specification is a living document. Update it as design decisions evolve during implementation._
