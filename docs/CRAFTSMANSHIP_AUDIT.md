# Craftsmanship Audit — Phase 1

> Reviewing the current implementation as Creative Director / Interaction Designer / Senior Frontend Engineer
> Benchmark: Apple product pages, Linear, Vercel, Framer, Playdead

---

## What Proves Craftsmanship

These elements would make a visitor think "this developer knows how to build":

| Element | Why It Proves Craftsmanship |
|---|---|
| **Lenis + GSAP ticker sync** | Most developers don't know how to integrate smooth scroll with GSAP's render loop. The fact that `gsap.ticker.add(update)` is wired to Lenis's `raf()` shows system-level thinking. |
| **`prefers-reduced-motion` everywhere** | Every single animation component checks reduced motion. Not just one global toggle — per-component fallbacks. This is professional-grade accessibility thinking. |
| **oklch color tokens with light/dark adaptation** | Using oklch instead of hex/rgb shows color science understanding. The `color-mix()` usage for blobs proves CSS Color Level 4 knowledge. |
| **GPU-composited blob keyframes** | `transform-only` CSS animations that never trigger layout or paint. Someone who understands the browser rendering pipeline built this. |
| **Animation config system** | `config/animation.ts` with named durations, standardized easing curves, stagger values. Not magic numbers scattered across components. |
| **`useScrollTo` with Lenis fallback** | Graceful degradation: Lenis → smooth → auto. The function handles three scroll mechanisms. |

## What Merely Decorates

These elements look nice but don't prove anything:

| Element | Problem |
|---|---|
| **Grain texture** (`hero-grain::after`) | Looks cinematic but doesn't demonstrate interaction skill. It's a CSS filter applied to a pseudo-element. Simple, not impressive. |
| **Ambient blob animations** | Three radial gradients drifting on CSS keyframes. Looks pretty but any developer with Tailwind can do this in 10 minutes. |
| **Horizontal beam beneath headline** | The "signal beam" is a gradient with scaleX animation. Decorative. Doesn't prove interaction thinking. |
| **Button shimmer sweep on hover** | A gradient pseudo-element sliding across. This is a copy of Apple's 2013 button style. Not original, not proof. |
| **"scroll" label with growing line** | A vertical line animating scaleY. Standard scroll indicator. No interaction insight demonstrated. |
| **Intro beam-from-void** | While cinematically strong, it's a sequence of timed opacity/scale transitions. No user interaction, no physics, no spatial thinking. |

## What Creates Genuine Delight

These moments feel *intentional* rather than *applied*:

| Moment | Why |
|---|---|
| **Intro→hero crossfade fix** (opacity transition on the overlay) | The fix where children render behind the intro and the overlay fades via opacity rather than display:none. This creates a seamless transition that feels *designed*, not *coded*. |
| **Scroll parallax with different rates** (content 8% up, background 4% down) | The differential creates actual depth perception. Most parallax is one-speed-fits-all. The ratio (2:1) is a deliberate choice. |
| **The "done" phase staying rendered** | Keeping IntroScreen in the DOM so the opacity transition is visible rather than instant-unmounting. This is someone thinking about transition states, not just component lifecycles. |

## What Feels Generic

These elements would make a critical visitor think "I've seen this before":

| Element | Why Generic |
|---|---|
| **Center-aligned hero with headline + CTAs** | Every portfolio template uses this layout. Even with different animations, the *composition* is identical to thousands of other sites. |
| **Two buttons: primary filled, secondary outlined** | The most common CTA pattern on the web. No interaction design thinking — just standard button pair. |
| **Fade + translateY reveal on scroll** | The `<Reveal>` component is the most generic animation pattern. It's applied uniformly to About, Work, Experiments, Contact. No variation in entrance character per scene. |
| **Clip-path text reveals** | Beautiful, but becoming a common pattern (used by Vercel, Linear, Stripe documentation). No longer distinctive. |
| **"View Work" + "Get in Touch" as CTA labels** | Functionally correct but creatively empty. These labels don't demonstrate writing quality or interaction thinking. |

---

## Phase 1 Conclusion

The current implementation proves **engineering craftsmanship** (rendering pipeline, accessibility, color science, animation config) but does NOT prove **interaction craftsmanship** (spatial thinking, physics, tactile feedback, responsive-to-input behavior).

The gap: the site feels *engineered* but not *designed for interaction*. It looks premium when you watch it, but it doesn't feel premium when you *interact* with it.

---

## Phase 2 — Static Composition First

Before any motion, before any interaction, the **static hero composition** must be exceptional. A screenshot of the hero should be memorable on its own.

### Principles for the Composition

1. **One unmistakable focal point.** Currently, the eye has no clear landing zone — the headline and signature compete.

2. **Typography as architecture, not decoration.** The words should occupy space physically, not just sit on a line.

3. **HeroVisual as a genuine container.** Currently, HeroVisual is a blob background that's secondary to the text. It should be able to stand alone as a visual composition even without text.

4. **No center alignment unless earned.** Center alignment is the default. If we use it, it must be because the composition demands it, not because we didn't explore alternatives.

### Three Static Composition Directions

#### Direction A: "The Off-Axis Frame"

```
┌────────────────────────────────────────────┐
│                                            │
│   HeroVisual                  KHAN UMAR   │
│   ┌─────────┐                             │
│   │         │     Building software        │
│   │  Visual │     that feels inevitable    │
│   │  Field  │                             │
│   │         │     ═══════════             │
│   └─────────┘                             │
│                               [CTA] [CTA] │
│                                            │
│                        ╷ (scroll)         │
└────────────────────────────────────────────┘
```

- HeroVisual occupies the left 40% of the viewport as a distinct, bounded area
- Typography is right-aligned in the remaining 60%
- The visual field and the text are in tension — they're separate objects sharing the same space
- The name is at the top right, small. The headline is the dominant object in the right column.
- This composition says: "I don't center things by default. I place them intentionally."

#### Direction B: "The Typographic Poster"

```
┌────────────────────────────────────────────┐
│                                            │
│                                            │
│         B U I L D I N G                    │
│         S O F T W A R E                    │
│                                            │
│         that feels inevitable              │
│                                            │
│    ─── Khan Umar ───                      │
│                                            │
│              ○  ○                          │
│                                            │
│                                            │
│                                            │
└────────────────────────────────────────────┘
```

- The word "BUILDING SOFTWARE" is set as a poster — large, wide letter-spacing, commanding
- The second line "that feels inevitable" is much smaller, set below, creating dramatic scale contrast
- The name is a small horizontal rule with text embedded — not a separate element but part of a divider
- CTAs are two minimal dots, not buttons
- HeroVisual is completely absent. The typography IS the visual.
- This composition says: "I don't need images. My words hold the space."

#### Direction C: "The Floating Volume"

```
┌────────────────────────────────────────────┐
│                                            │
│                                            │
│              Building                      │
│              software                      │
│              that feels                    │
│              inevitable                    │
│                                            │
│  Khan Umar                                 │
│                                            │
│  [View Work]  [Get in Touch]               │
│                                            │
│                                            │
└────────────────────────────────────────────┘
```

(changed my mind — center isn't right for the third option. Try something else)

#### Direction C: "The Asymmetric Stack"

```
┌────────────────────────────────────────────┐
│  ┌──────────────────┐                     │
│  │                  │    KHAN UMAR        │
│  │   HeroVisual     │                     │
│  │   (full height   │    Building         │
│  │    right side)   │    software that    │
│  │                  │    feels inevitable  │
│  │                  │                     │
│  │                  │    ═══════          │
│  │                  │                     │
│  │                  │    [CTA]  [CTA]     │
│  └──────────────────┘                     │
│                        ╷                  │
└────────────────────────────────────────────┘
```

- HeroVisual is a full-height column on the left (40% width)
- All content is stacked in the right 60%
- The visual field is a structural element, not a background — it has defined boundaries
- Typography is left-aligned within the right column, creating an asymmetric rhythm
- The composition has weight on the left (visual) and information on the right (text)
- This asymmetric split creates a dialog between seeing and reading

---

## Phase 2 — Recommendation

**Direction C: "The Asymmetric Stack"**

This is the strongest static composition because:

1. **It's the least common.** Every portfolio centers content. An asymmetric split is rare and intentional-looking.

2. **HeroVisual has genuine presence.** It's not a background blob that fades into the void. It's a bounded, clearly defined object that exists in space. This makes HeroVisual flexible — it can hold a portrait, an abstract composition, a video, or nothing, and it will still be a meaningful structural element.

3. **The asymmetric division creates rhythm.** The eye moves from visual (left) → signature (top right) → headline (middle right) → CTAs (bottom right). This is a guided path, not a staring contest.

4. **It proves spatial thinking.** Most developers stack everything in the center. An asymmetric layout demonstrates that the designer thinks about page space as a composition, not a template.

5. **It works without a portrait.** The left column can be pure visual structure (a light field, a material surface, a pattern, or empty). The layout remains strong regardless.

### Static Composition — Implementation Specification

```
Screen: 1440×900
Left column: 40% (576px) — HeroVisual area
Right column: 60% (864px) — Content area (with generous padding)

Within the right column:
- Top: "Khan Umar" — text-kicker, uppercase, muted-foreground
- Middle: "Building software" + "that feels inevitable" — text-display, stacked
- Below headline: a horizontal rule (1px, 40% width, left-aligned)
- Bottom: two CTAs, inline, left-aligned

The composition is full-viewport-height.
The visual weight is distributed 40/60, not 50/50.
The asymmetry is the statement.
```

---

## Phase 3 — Motion Philosophy

Only after the static composition is approved will motion be considered.

Every motion will answer: "What skill is this demonstrating?"

| Motion | Skill Demonstrated |
|---|---|
| The HeroVisual column having subtle depth (inner shadow, slight perspective) | Spatial thinking, material design |
| Typography kerning that adjusts on scroll | Typography control, scroll-linked precision |
| CTA hover that feels like magnetic attraction (not scale, not color change) | Physics understanding, tactile feedback |
| The horizontal rule between headline and CTAs growing from the visual column outward | Engineered-entrance timing |

No motion will be included that merely "looks nice."

---

## Phase 4 — Self-Review

After implementation, I will review my own work as if reviewing it for Apple's design team.

---

**Ready for your feedback on Phase 1 (what proves vs decorates) and Phase 2 (the asymmetric stack composition).**

If you approve Direction C, I will create the exact implementation specification (no code, pure layout/positioning) before any motion is considered.

