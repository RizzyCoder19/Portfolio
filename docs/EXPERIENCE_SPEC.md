# Experience Specification

## 1. Design Philosophy

### Emotional Response

A visitor should feel they have entered a thoughtfully crafted digital space — calm, confident, and precise. The experience should evoke the same sensation as stepping into a well-designed physical gallery: quiet, unhurried, intentional.

### What a Recruiter Should Believe After Leaving

After ten to thirty seconds on the page, a recruiter should carry away a conviction, not a memory of an animation. They should believe:

- **Engineering maturity.** The page loads fast, scrolls without stutter, and responds instantly. There is no jank, no layout shift, no spinner. The developer understands how browsers work.
- **Product thinking.** Information is ordered by importance. Actions are where you expect them. The interface does not explain itself — it is self-evident. The developer built for the user, not for their own portfolio.
- **Attention to detail.** Spacing is consistent. Type is legible at every breakpoint. Hover states exist where expected and are absent where they would be noise. The developer notices what others overlook.
- **Quality over complexity.** Nothing is over-engineered. There is no carousel, no infinite scroll, no parallax for its own sake. Every feature present is there because it serves a purpose. The developer knows what to leave out.

If the recruiter remembers a visual effect more than they remember the developer's competence, the experience has failed.

### Core Principles

| Principle        | Meaning                                                                                                                     |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **Premium**      | Feels expensive without being ostentatious. Generous whitespace, refined typography, deliberate pacing.                     |
| **Restrained**   | Every element earns its place. No decorative flourishes that lack purpose. Motion supports comprehension, not spectacle.    |
| **Intentional**  | Nothing is accidental. Scroll speed, hover response, color transitions — all tuned to a unified rhythm.                     |
| **Long-lasting** | The aesthetic is current but avoids trends that will date it. It should look as appropriate in five years as it does today. |

---

## 2. Opening Experience

### Design Goal

The opening is not an animation sequence. It is a held breath — a moment that establishes the portfolio's tone before any content is consumed. Its purpose is not to impress but to signal that this page operates at a different standard.

### Initial State

The page loads on a **black screen**. No content is visible. No loading indicator, no progress bar, no spinner. The screen is simply dark.

Duration: approximately **900ms** after the page is interactive. This duration is not a loading delay — the page is ready. The pause is intentional.

### The Sequence

1. **Silence.** The black screen holds for approximately 400ms. Nothing happens. The user sees only darkness. This pause communicates that the page is deliberate, not rushed.

2. **A vertical beam of light.** A single thin vertical line — 1px wide, white or near-white, approximately 60% of the viewport height — appears at the horizontal centre of the screen. It materialises not by fading but by drawing itself from top to bottom over 500ms. The beam is not animated with glitter or glow — it is clean, precise, and still.

3. **A statement appears.** At the midpoint of the beam (approximately 45% from the top), a single short line of type appears. This is not a name or a role. It is a **statement of belief** — the idea the portfolio stands for. Examples of the _type_ of statement (not final copy): "Thoughtful systems." or "Clarity over complexity." or "Crafted with intent." The statement appears by fading to full opacity over 400ms. No movement. No typing effect.

4. **A pause.** The statement and the beam hold together for approximately 600ms. The user reads the statement without distraction.

5. **The beam dissolves.** The vertical line fades out over 400ms.

6. **The Hero unfolds.** Immediately after the beam dissolves, the Hero section reveals itself. This is not a separate animation — the Hero content (heading, subtitle, CTAs) is simply present. The transition from black screen to full Hero takes 300ms: the black background lifts to reveal the page beneath. The Hero content is already fully rendered at the moment of reveal.

7. **Ambient enhancements activate.** Only after the Hero is fully visible and the reveal is complete does any subtle background treatment activate (see Section 6). The background never appears during the reveal — it would compete with the statement.

### Total Duration

Approximately 2.5 seconds from first paint to full Hero. This is not skippable because it is short — 2.5 seconds is less time than a user spends blinking and adjusting to a page.

### Why This Works

- The vertical beam is architectural. It evokes a column, a plumb line, a measure of precision. It does not imitate cinema or gaming.
- The statement-first structure ensures the visitor encounters an _idea_ before they encounter a _person_. This positions the portfolio as a perspective, not a résumé.
- The absence of movement during the statement forces the user to read. The pause after the statement lets the words settle.

### Accessibility

- If `prefers-reduced-motion: reduce` is detected, the entire opening collapses: the black screen fades to the Hero over 200ms with no beam, no statement, no pause.
- If `prefers-reduced-transparency` is active, the black screen is skipped entirely. Content loads immediately.

### Skip Behavior

- Pressing any key during the opening **immediately** dismisses the black screen and reveals the Hero. This is not a complex state machine — it is a single event listener that completes the sequence instantly.
- Scrolling is disabled during the opening. It activates (via Lenis) immediately after the reveal.

### Repeat-Visit Behavior

- The cinematic opening plays **once per browser session**, tracked via `sessionStorage`.
- On subsequent page loads within the same session (client-side navigation or soft reloads), the page renders directly into the Hero with no black screen.
- `sessionStorage` is chosen because it is:
  - **Session-scoped.** Automatically cleared when the tab closes. No stale flags.
  - **Predictable.** Does not persist across tabs or devices.
  - **Simple.** A single boolean key — no expiry logic, no cookie banners.
- On a hard reload or new tab, the opening plays again. This is correct behaviour: a new session implies a new visit.

### Reduced-Motion Behavior

Under `prefers-reduced-motion: reduce`:

- No black screen.
- No beam.
- No statement reveal.
- All content is visible immediately. The page renders as if the opening never existed.
- The only concession is a 200ms opacity transition on the page wrapper to prevent a jarring flash.

---

## 3. Hero Experience

### Information Hierarchy

The Hero communicates an idea before it introduces a person. The hierarchy is:

1. **A belief.** The Hero's most prominent element is a short statement of philosophy or intent. This is not marketing copy and not a role title. It is the principle that defines the work. It sits alone, centred, using the `--text-display` token at equilibrium weight.
2. **The person.** Below the belief, with noticeably less visual weight, is the name and a brief descriptor (role or discipline). This is supporting information — it tells the visitor _who_ holds the belief expressed above.
3. **Actions.** Two CTAs: the primary action (view the work that embodies this belief) and a secondary action (contact).

The hierarchy is expressed through type scale alone. No color changes, no decorative separation, no icons. The typography carries the entire burden of prioritisation.

### Design Principle: Belief Before Biography

The Hero should first assert a point of view. Only after that point of view is registered should the visitor learn the name behind it. This inverts the typical portfolio pattern (name → role → tagline) and signals that the work is driven by philosophy, not self-promotion.

The belief statement must be:

- **Short.** 2–5 words.
- **Specific.** It should be true only of this portfolio, not interchangeable with any other creative's site.
- **Enduring.** It should not reference trends, technologies, or cultural moments that will date it.

The belief statement is not a logo, not a brand name, and not a job title. It is a design constraint that forces clarity of intent.

### Layout Philosophy

- **Vertical centering.** The Hero occupies the full viewport. Content is vertically and horizontally centred. This communicates confidence — the page does not rush to show you more.
- **Single column.** No split layouts, no floating avatars, no decorative sidebars. The content breathes.
- **Vertical centre slightly above true midpoint** (approximately 45% from top). This makes the content read as naturally poised rather than mathematically centred.

### Typography Philosophy

- The belief statement is the loudest element on the page. It uses `--text-display` and is allowed to break across two lines if needed.
- The name and descriptor use `--text-heading` in `--text-muted-foreground`. It is not italic, not coloured differently — it earns its place through size and spacing.
- No more than three type sizes appear in the Hero. Clarity over variety.
- No typewriter, no character reveal, no gradient text, no text-shadow effects. The type is the message.

### CTA Philosophy

- Two buttons, **primary** and **outline**. Primary anchors to viewing the work. Outline provides an alternative (contact).
- Buttons are not full-width at any breakpoint. They sit side by side on desktop, stacked centred on mobile.
- No secondary CTAs (no "Learn more", no "Scroll down", no arrow indicator). The Hero trusts the user to explore.

### Visual Rhythm

- After the opening sequence, the Hero is perfectly still. No background animation, no parallax, no floating particles.
- This stillness is intentional: it resets the user's visual palette before scroll-triggered motion appears in subsequent sections.

---

## 4. Motion Language

### Philosophy

Motion exists to support comprehension, not to decorate. A user should never think "that was a nice animation" — they should simply understand where content came from and where to look next. If removing a motion improves clarity, the motion should be removed.

### Easing Philosophy

All motion uses custom cubic-bezier curves derived from `src/config/animation.ts`. Deceleration (ease-out) is the default — elements should appear to arrive, not depart. No linear or ease-in motion.

| Name           | Curve                            | Character                                                  |
| -------------- | -------------------------------- | ---------------------------------------------------------- |
| `power1.out`   | `cubic-bezier(0.16, 1, 0.3, 1)`  | Snappy deceleration for micro-interactions (hover, tap).   |
| `power2.out`   | `cubic-bezier(0.22, 1, 0.36, 1)` | Standard deceleration for most scroll-triggered reveals.   |
| `power3.out`   | `cubic-bezier(0.25, 1, 0.5, 1)`  | Languid deceleration for the cinematic opening.            |
| `power1.inOut` | `cubic-bezier(0.76, 0, 0.24, 1)` | Symmetrical ease for transitions that both enter and exit. |

### Durations

| Context                                 | Duration (ms) |
| --------------------------------------- | ------------- |
| Micro-interaction (hover, tap feedback) | 200–300       |
| Scroll-triggered reveal                 | 600–800       |
| Staggered group reveal (per child)      | 80–150        |
| Cinematic intro (per phase)             | 400–600       |
| Page transition                         | 400–500       |

### Stagger Rules

- Groups of similar elements use a consistent interval, not random delays.
- Stagger direction respects reading order: left-to-right, top-to-bottom.
- For grid layouts, stagger flows row-by-row.

### Hover Behavior

- Interactive elements use scale and background-color transitions. Scale never exceeds 1.03.
- Non-interactive elements do not respond to hover.
- On touch devices, hover states are never visible.
- Hover transitions use `power1.out` at 250ms.

### Page Transitions

- Internal navigation uses a crossfade: current page fades to black (150ms), next page fades in (350ms).
- No shared-element transitions, no morphing animations. The crossfade is simple, fast, and reliable.

---

## 5. Signature Interaction

### Role of the Cursor

The cursor treatment is **not** the portfolio's identity. The primary memorable experience is the opening sequence (Section 2). The cursor is a subtle reward for exploration — a detail that rewards users who pay attention, without demanding attention itself.

The cursor must never:

- Distract from reading.
- Draw the eye during normal browsing.
- Feel like a feature that was designed to be noticed.

### Concept: The Thoughtful Cursor

A context-aware cursor treatment that operates below the threshold of conscious attention.

- On desktop (`pointer: fine`), a small secondary dot follows the cursor with a 100–150ms lag. It is 8px in diameter, coloured `--accent`, using `mix-blend-mode: difference` so it adapts to any background.
- When hovering an interactive element, the dot expands to 24px and becomes a subtle ring (no fill). This signals interactivity without a tooltip or underline.
- When hovering over a block of text, the dot aligns to the baseline of the nearest line of type and becomes a reading ruler — a thin horizontal line the width of the text block. This is not a feature the user expects, but it feels helpful rather than gimmicky.
- On touch devices and `pointer: coarse`, the cursor treatment is entirely disabled.

### Constraints

- The cursor follower uses a single `requestAnimationFrame` per frame with at most one layout read. No layout thrashing.
- It is loaded as a dynamic import on `pointer: fine` devices only. It never ships to mobile or tablet.
- It is disabled entirely under `prefers-reduced-motion: reduce`.
- The element uses `aria-hidden="true"` and `pointer-events: none`. It is invisible to screen readers and interaction models.

---

## 6. Ambient Background

### Philosophy

The background should support the content, not compete with it. No particle systems, no floating geometries, no animated gradients. The background is an atmospheric element, not a visual feature.

### Description

A static, wide radial gradient that is computed once and remains fixed for the session.

- A soft radial gradient centred approximately 60% from the left, 40% from the top.
- In light mode: a very faint warm tint (e.g., `rgba(255, 200, 150, 0.03)` to transparent).
- In dark mode: a cool tint (e.g., `rgba(100, 150, 255, 0.04)` to transparent).
- Implemented as a single `::before` pseudo-element using `background-image: radial-gradient(...)`.
- Zero JavaScript. Zero motion. Zero GPU cost after paint.

### Rationale

A static gradient subtly differentiates the page from a flat background without calling attention to itself. It does not distract, consume battery, flicker during scroll, or compete with content. It is barely noticeable — which is the point.

---

## 7. Accessibility

### Reduced Motion

- All motion respects `prefers-reduced-motion: reduce` and `prefers-reduced-transparency: reduce`.
- The cinematic opening collapses to a 200ms fade under reduced motion.
- Scroll-triggered reveals are disabled. Content is present in the DOM from the start.
- The cursor follower is disabled entirely.

### Keyboard Navigation

- All interactive elements are reachable via sequential Tab navigation.
- Focus indicators use a 2px outline with a 2px offset in `--accent`. This is never removed via `outline: none`.
- A skip-to-content link is the first focusable element.
- The cinematic opening can be skipped by pressing any key.

### Screen Readers

- During the opening, `aria-hidden` is applied to elements not yet visible, then removed when they appear. Screen readers announce content only when it is visually available.
- All motion is decorative. No information is conveyed exclusively through animation.
- The cursor follower is `aria-hidden="true"` and `pointer-events: none`.

### Color Contrast

- All text colours from `tokens.css` meet WCAG 2.1 AA (4.5:1 body, 3:1 large text).
- The cursor dot uses `mix-blend-mode: difference`, guaranteeing visibility on any background.
- The ambient gradient has opacity ≤ 0.04, which does not meaningfully affect text contrast.

---

## 8. Design Commandments

These principles govern every design decision. They are not aspirational — they are rules. If a feature or interaction violates any of these, it must be removed or reworked.

1. **Never animate without purpose.** Motion must justify its existence in every frame. If removing an animation improves clarity, remove the animation.

2. **Never delay interaction.** The page must be usable before it is beautiful. No animation blocks click, scroll, or keyboard navigation.

3. **Typography carries emotion.** The choice of typeface, weight, leading, and measure communicates tone more directly than any visual effect. Treat type as a primary design material, not a container for copy.

4. **Whitespace is content.** Empty space is not unused space — it is the container that gives elements their meaning. Resist the urge to fill it.

5. **Performance is part of the design.** A beautiful page that loads slowly or janks during scroll is a broken page. Performance constraints are design constraints.

6. **Accessibility is never optional.** Reduced motion, keyboard navigation, screen-reader support, and colour contrast are not features to be added later. They are part of the specification from the start.

7. **Every interaction must justify its existence.** Before adding a hover effect, a transition, or a scroll-triggered reveal, ask: does this help the user understand the page? If the answer is not a clear yes, omit it.

8. **The portfolio should feel inevitable rather than impressive.** The goal is not to make the user say "wow" but to make them feel that the page could not have been built any other way. Inevitability is a higher compliment than spectacle.

9. **Restraint creates luxury.** The most premium quality a digital product can have is the absence of anything unnecessary. Every element removed makes the remaining ones more valuable.

10. **If removing something improves the page, remove it.** This overrides all other considerations.

---

## 9. Performance Budget

### Hard Constraints

| Metric                          | Budget         | Notes                                                                         |
| ------------------------------- | -------------- | ----------------------------------------------------------------------------- |
| **First Contentful Paint**      | ≤ 1.5s         | No JS blocks FCP. The cinematic opening runs _after_ paint.                   |
| **Largest Contentful Paint**    | ≤ 2.0s         | Hero content is static HTML rendered by the server.                           |
| **Total Blocking Time**         | ≤ 100ms        | No long-running scroll listeners. Motion uses `transform` and `opacity` only. |
| **Cumulative Layout Shift**     | ≤ 0.05         | Animated elements use `transform`/`opacity` — no layout impact.               |
| **JavaScript bundle (initial)** | ≤ 60KB gzipped | Lenis and GSAP load after paint via `requestIdleCallback`.                    |

### What the Experience Must Never Do

- **Delay FCP.** No animation, script, or font load blocks the first paint.
- **Block interaction.** The cursor follower uses at most one layout read per frame.
- **Degrade Lighthouse.** All motion uses GPU-composited properties (`transform`, `opacity`). No layout-triggering properties are animated.

### Loading Strategy

1. Critical CSS and Hero HTML are delivered in the initial server response.
2. Lenis + GSAP load after `requestIdleCallback`.
3. The cursor follower loads as a dynamic import on `pointer: fine` only.

---

## 10. Future Roadmap

### Phase 1 — Hero Polish (Current Sprint)

- [ ] Ensure `hero.tsx` compiles and renders without errors.
- [ ] Apply typography tokens (`--text-display`, `--text-heading`, `--text-kicker`) correctly.
- [ ] Verify responsive behaviour from 320px to 1920px.
- [ ] Clean up temporary scripts and dead code.

### Phase 2 — Cinematic Opening

- [ ] Implement the black-screen orchestrator with the vertical beam and statement reveal.
- [ ] Wire the dissolve and Hero reveal.
- [ ] Handle skip behaviour (any key press).
- [ ] Implement `sessionStorage` repeat-visit guard.
- [ ] Test reduced-motion collapse.

### Phase 3 — Motion System

- [ ] Verify GSAP + Lenis integration for scroll-triggered reveals.
- [ ] Create reusable stagger presets in `src/config/animation.ts`.
- [ ] Add scroll-triggered fade-up to section headings and project cards.
- [ ] Implement hover transitions on buttons and cards.
- [ ] Add page-transition crossfade for future multi-page routing.

### Phase 4 — Ambient Background

- [ ] Add the static radial gradient as a `::before` pseudo-element.
- [ ] Verify light/dark mode variants.
- [ ] Confirm zero performance impact via DevTools Performance tab.

### Phase 5 — Cursor Interaction

- [ ] Implement the cursor-follower dot with lag.
- [ ] Add hover state (expanding ring) on interactive elements.
- [ ] Add reading-ruler state on text hover.
- [ ] Disable on touch devices and reduced-motion.
- [ ] Load dynamically for `pointer: fine` only.

### Phase 6 — Advanced Interactions (Future)

- [ ] Viewport-triggered stagger reveals for project grid.
- [ ] Subtle scroll-velocity-based depth layers.
- [ ] Theme-transition animation (smooth crossfade on light/dark toggle).
- [ ] Performance audit at each phase — never ship a phase that regresses Lighthouse scores.

---

## 11. Identity

This portfolio should never feel like a portfolio.

It should feel like opening a premium digital product.

Every decision should reinforce four qualities:

| Quality        | Manifestation                                                                                                                                                                   |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Calm**       | The page never hurries, never competes, never demands. White space, slow reveals, and a quiet background create a space the user can inhabit without effort.                    |
| **Precision**  | Spacing is consistent to the pixel. Type is aligned to a baseline rhythm. Motion curves are mathematically defined. Nothing is approximate.                                     |
| **Confidence** | The hero makes a statement before introducing a person. The page trusts the user to explore — no arrows, no "scroll down" prompts, no hand-holding.                             |
| **Curiosity**  | The opening sequence withholds enough to make the user wonder what comes next. The cursor reveals unexpected utility on hover. The page rewards attention without demanding it. |

### The Experience Must Never Compete for Attention

It should never fight for the user's focus. It should earn it through quality, not through volume. No pulsing elements, no auto-playing media, no notification-style badges, no countdowns, no urgency.

### Instead, It Should Reward Attention

The opening sequence gives more to the user who watches it in full (the vertical beam, the statement, the dissolve). The cursor gives more to the user who moves it over text (the reading ruler). The typography gives more to the user who reads slowly (generous leading, balanced measure, no line-height compression for visual effect).

### The Four Pillars

| Pillar         | Delivered By                 | Measured By                                                       |
| -------------- | ---------------------------- | ----------------------------------------------------------------- |
| **Curiosity**  | The opening sequence         | User completes the full 2.5s reveal without skipping              |
| **Confidence** | The typography and hierarchy | No secondary CTAs, no explanatory text, no decoration             |
| **Delight**    | The signature interaction    | The cursor reading ruler surprises without feeling gimmicky       |
| **Trust**      | The engineering              | Lighthouse scores, load speed, scroll smoothness, no layout shift |

### What Visitors Should Remember

Visitors should leave remembering a **feeling** rather than a **feature**.

- If someone remembers the animations but not the craftsmanship, the portfolio has failed.
- If someone remembers the craftsmanship without consciously noticing the animations, the portfolio has succeeded.

The ideal response is not "that was a cool website" but a quieter, more valuable reaction: _"I want to work with someone who builds things this carefully."_
