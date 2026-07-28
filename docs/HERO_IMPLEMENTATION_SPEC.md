# Hero Implementation Specification — Direction C

> Role: Creative Director / Interaction Designer / Senior Frontend Engineer
> Phase 2 (Static Composition) Approved → Phase 3 (Motion Specification)

---

## Three Refinements to Direction C

### 1. HeroVisual as Spatial Anchor (not media container)

HeroVisual is not a slot for content. It is a **structural object** that organizes the composition through its presence alone.

**Even when empty**, HeroVisual:
- Occupies the left 40% of the viewport as a defined, bounded column
- Has its own internal visual language (material depth, light, rhythm) independent of any media
- Creates a **felt boundary** — the visitor senses there is *something* on the left side, even if it's minimal
- Functions as the **counterweight** to the typography on the right

**Material treatment:**
- A subtle surface with depth — not flat, not a card, not a gradient blob
- Think: a slightly recessed panel, like a sheet of material sitting behind the content
- The surface has a **light gradient** that shifts from cooler at the top to warmer at the bottom — suggesting orientation in space
- The right edge of HeroVisual has a **very faint vertical glow** — like light spilling from behind the material
- When media IS present (portrait, abstract, etc.), it sits within this spatial anchor, not floating independently

### 2. HeroVisual Scroll Evolution (not disappearance)

As the visitor scrolls from Hero → About, HeroVisual does NOT:
- Fade away
- Scroll off with the content
- Stay static while content moves

Instead, HeroVisual **transforms**:

```
Hero scene:         HeroVisual occupies left 40%, tall, structural
                    │                    │
Scrolling...        │                    │
                    ▼                    ▼
Transition zone:    HeroVisual compresses vertically from top
                    (its top edge descends)
                    Meanwhile, the visual field inside it
                    "pours" into the About scene's background
                    ↓
About scene:        HeroVisual has reduced to a subtle stripe
                    or horizontal band across the top-left
                    Its visual energy has transferred to
                    About's ambient background
```

**The handoff:**
- HeroVisual doesn't disappear — it **passes its visual responsibility** to the About scene
- The light/color/energy that was in the left column slowly migrates into the About section's background
- By the time About is fully in view, HeroVisual has compressed to a quiet structural memory — a thin vertical line or subtle left-edge presence
- This creates continuity: the visitor feels the Hero scene "breathing out" as About "breathes in"

**Technical approach:**
- HeroVisual's height is tied to `useScroll` progress (0 → 1)
- As scroll progresses from 0 to 0.3 (Hero → transition), HeroVisual's `max-height` reduces
- Simultaneously, the About section's background opacity/color intensity increases
- The two changes are synchronized so the energy transfer is seamless

### 3. Signal Beam as Invisible Structural Axis (not divider)

The signal beam is not a visible line beneath the headline. It is an **invisible organizing principle** that:

- Runs **vertically** between the HeroVisual column (left) and content column (right)
- Is **never explicitly drawn** — the space between the two columns IS the beam
- The beam's presence is felt through the **alignment decisions** it enforces:
  - The typography's left edge aligns to the beam
  - The horizontal rule (between headline and CTAs) extends from the beam rightward
  - The CTAs start from the beam
  - HeroVisual's right edge is defined by the beam

**Visual manifestation of the invisible beam:**
- The beam reveals itself only through a **vertical light spill** that subtly illuminates the gap between columns
- This is not a line — it's a very faint vertical glow (2-3px wide, low opacity)
- It pulses with the same rhythm as the intro's beam, creating a silent connection to the opening sequence
- The beam is most visible during the transition zone (Hero fading → About arriving) and becomes the visual "scar" that connects the two scenes

---

## Static Composition — Final Specification

```
┌──────────────────────────────────────────────────────┐
│  ┌───────────────────┐    ─── Khan Umar ─── (top)   │
│  │                   │                              │
│  │   HeroVisual      │   Building software          │
│  │   (spatial        │   that feels inevitable      │
│  │    anchor)        │                              │
│  │                   │   ─────────────────          │
│  │   Left 40%        │   (horizontal rule from      │
│  │   Full height     │    beam rightward)           │
│  │   Subtle depth    │                              │
│  │   Light gradient  │   [View Work]  [Get in Touch]│
│  │                   │                              │
│  │   ║ (vertical     │           ╷ (scroll)         │
│  │   ║  glow =       │                              │
│  │   ║  the beam)    │                              │
│  └───────────────────┘                              │
│                                                     │
│  ──── dissolve gradient into About ────             │
└──────────────────────────────────────────────────────┘
```

### Layout Measurements (at 1440×900 viewport)

| Element | Position | Size | Notes |
|---|---|---|---|
| HeroVisual column | Left 0 | Width: 40vw (576px) | Full viewport height |
| Content column | Left 40vw | Width: 60vw (864px) | Full viewport height |
| Name "Khan Umar" | Top of content column, 10vh from top | text-kicker | Inline with horizontal dashes: `─── Khan Umar ───` |
| Headline line 1 | Below name, 4vh gap | text-display, 5.5rem | Left-align to beam |
| Headline line 2 | Below line 1, 0 line gap | text-display, 5.5rem, 90% opacity | Left-align to beam |
| Horizontal rule | Below headline, 4vh gap | 1px height, 40% of column width (207px) | Starts from beam, extends right |
| CTAs | Below rule, 4vh gap | Default button height (40px) | Inline, left-aligned to beam |
| Scroll indicator | Bottom center of content column | Standard | Centered below CTAs |
| Dissolve gradient | Bottom 12vh of viewport | Full width | Gradient from transparent → background |

### Typography Details

- **Name**: `─── Khan Umar ───` with em-dashes as horizontal leaders. The name is embedded in a horizontal rule, not floating above it. This signals: "the name is part of the structure, not a heading."
- **Headline**: Two lines, tight leading (0.94), negative letter-spacing (-0.065em). Left edge precisely aligned.
- **Horizontal rule**: Extends from the beam position rightward. Not centered. Not full width. This asymmetry is intentional.

### CTA Treatment

- Not buttons. Links with an underline that draws from left to right on hover.
- No border, no background, no pill shape. Just text with a horizontal rule beneath.
- Primary CTA ("View Work") has the underline always present at 50% opacity, becoming full on hover.
- Secondary CTA ("Get in Touch") has the underline appear only on hover.
- No shimmer, no scale, no lift. Restraint.

---

## Phase 3 — Motion Specification

Every animation must answer: **"What skill is this demonstrating?"**

### Motion 1: HeroVisual Material Reveal

**What happens:** As the intro fades out, HeroVisual's surface material "congeals" — it transitions from pure darkness into a surface with visible depth. This is not an opacity fade. It's a **materialization** — the surface gains texture, depth, and a subtle light gradient over 1.2 seconds.

**Skill demonstrated:** Material thinking. This is not a gradient fading in. It's a surface *becoming physical.* The visitor senses that the page has weight and occupies space.

**Implementation:** A CSS `@keyframes` animation on the HeroVisual's inner pseudo-element that transitions `opacity` + `filter: brightness()` in sequence, creating the illusion of material forming from particles of light.

### Motion 2: Name Rule Draw

**What happens:** The horizontal dashes around the name (`─── Khan Umar ───`) draw from the center outward. The left dash grows from the center leftward. The right dash grows from the center rightward. The name itself fades in at the center after the dashes have begun drawing.

**Skill demonstrated:** Sequential timing. The component parts of the signature (left dash, name, right dash) do not arrive simultaneously. They arrive in sequence, demonstrating control over choreographed entrance.

**Implementation:** Three `motion.span` elements with `scaleX` for the dashes (originating from center) and `opacity` for the name, staggered with 80ms delays.

### Motion 3: Headline Kerning Settle

**What happens:** The headline appears with slightly wider letter-spacing than intended (+0.02em), then **settles** into its final tracking (-0.065em) over 600ms. The settling is eased — it slows as it approaches the final value.

**Skill demonstrated:** Typography control. Most developers don't think about *how* type enters the page. Adjusting kerning in motion demonstrates that typography is a living element, not a static block.

**Implementation:** `motion.span` with `letterSpacing` animated from `"-0.045em"` → `"-0.065em"`. The starting value is tighter than default but not yet the final tightness. The easing uses a custom cubic bezier `[0.16, 1, 0.3, 1]`.

### Motion 4: Horizontal Rule Growth from Beam

**What happens:** The horizontal rule (between headline and CTAs) grows from the beam position (the gap between columns) rightward. It doesn't fade in — it draws, like a line being inked from left to right.

**Skill demonstrated:** The rule is not a decorative divider. It's a **spatial connection** from the beam outward. The visitor sees the page's structure being built in real-time.

**Implementation:** `motion.div` with `scaleX` origin set to `left`, animating from 0 to 1. The rule's background is the primary color at 30% opacity.

### Motion 5: CTA Underline Physics

**What happens:** On hover, the CTA underline doesn't draw linearly. It draws with a slight **overshoot** — it extends 105% of the text width, then settles back to 100%. On mouse leave, the underline retracts with a slight **ease-in** — not the same speed as it arrived.

**Skill demonstrated:** Physics understanding. The overshoot-and-settle is a hallmark of spring-based animation. It communicates that the developer thinks about motion in terms of mass and momentum, not just CSS transitions.

**Implementation:** Framer Motion `whileHover` with spring transition: `{ type: "spring", stiffness: 400, damping: 30 }`. The underline width goes `0% → 105% → 100%` on enter, `100% → 0%` on exit with a gentler damping.

### Motion 6: HeroVisual Scroll Compression

**What happens:** As the user scrolls from Hero → About, HeroVisual's top edge descends. It doesn't shrink from the bottom — it compresses from the top, like a curtain lowering. Simultaneously, the vertical beam glow intensifies briefly during compression, then fades.

**Skill demonstrated:** Scroll-linked spatial transformation. The visual field doesn't just disappear — it *changes shape* in response to user action. This demonstrates that every part of the page is aware of the scroll position.

**Implementation:** `useScroll` + `useTransform` mapping scroll progress to a CSS `clipPath: inset(top 0 0 0)` where `top` goes from `0%` to `100%`. The beam glow opacity is mapped inversely — it peaks at 50% compression, then fades.

### Motion 7: About Background Light Transfer

**What happens:** As HeroVisual compresses, a warm light begins to appear in the About section's background. It starts at the left edge (where HeroVisual was) and spreads across the About section like a spill. By the time HeroVisual has fully compressed, the About section has a warm ambient glow that wasn't there before.

**Skill demonstrated:** Visual continuity across scenes. The energy doesn't jump — it *flows.* This demonstrates interaction thinking that treats the entire page as a connected system, not isolated sections.

**Implementation:** About section receives a `useTransform` based on the same scroll range as HeroVisual's compression. An element behind About's content has its `opacity` go from `0` to `0.6` over the scroll range, with a gradient that originates from the left edge.

---

## Motion Timing Chart

| Motion | Start (after intro) | Duration | Easing |
|---|---|---|---|
| HeroVisual material reveal | 0ms | 1200ms | ease-out |
| Name rule draw | 200ms | 800ms | [0.16,1,0.3,1] |
| Headline kerning settle | 400ms | 600ms | [0.16,1,0.3,1] |
| Horizontal rule growth | 800ms | 700ms | [0.22,1,0.36,1] |
| CTA entrance (opacity) | 1200ms | 400ms | ease-out |
| Scroll: HeroVisual compression | Scroll 0-30% of page | Linked to scroll | Linear mapping |
| Scroll: About light transfer | Scroll 15-40% of page | Linked to scroll | Linear mapping |

---

## Motion That Was Removed (and Why)

| Removed Motion | Reason |
|---|---|
| Clip-path text reveals from center | Doesn't prove skill — it's a common pattern. Kerning settle is more distinctive. |
| Button shimmer sweep | Decorative. Doesn't prove interaction understanding. Underline physics is more intentional. |
| Signal beam as a visible line | Reframed as invisible structural axis. Making it invisible is the more interesting choice. |
| Parallax on background blobs | Proves nothing. The HeroVisual compression is a more thoughtful scroll interaction. |
| Scroll indicator growing line | Generic. The scroll indicator should be minimal — just the word "scroll" in small text, no line. |
| "scroll" label entirely | Removed. The visitor knows to scroll. Showing "scroll" is a crutch. The dissolve gradient at the bottom is enough invitation. |

---

## Phase 4 — Self-Review (Simulated)

### Reviewing as Apple Design Team

**What works:**
1. The asymmetric composition is genuinely uncommon for portfolios. It proves spatial thinking.
2. The invisible beam as organizing principle is subtle and intentional — not a decoration.
3. HeroVisual's scroll compression + light transfer creates page-wide continuity.
4. The kerning settle demonstrates typography awareness that most developers lack.
5. Removing decorative elements (scroll indicator, blob parallax, button effects) shows restraint.

**What could be better:**
1. The name rule (`─── Khan Umar ───`) might feel gimmicky. Need to ensure the dashes are subtle enough that they don't read as "look, I can animate dashes."
2. HeroVisual when empty needs to be visually interesting enough to justify 40% of the viewport. The material depth + light gradient must be executed at a very high level.
3. The scroll compression of HeroVisual could feel gimmicky if the animation is too fast or too slow. The scroll range mapping needs careful tuning.
4. The "View Work" and "Get in Touch" labels are still the most generic choices. Consider replacing them with something more specific.

**Improvements before implementation:**
1. Rename CTAs to something more specific: "See what I've built" and "Start a conversation"
2. Add a very subtle grain/noise to HeroVisual's material to give it tactile quality
3. Ensure the scroll compression range is generous (at least 60vh of scroll) so the transformation is gradual
4. Test the invisible beam's glow intensity — it should be felt, not seen

---

**Ready for your feedback. If approved, I will begin Phase 4 (implementation) with the exact specifications above.**

