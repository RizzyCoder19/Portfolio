# ARCHITECTURE.md

## Overview

This repository is a Next.js (App Router) foundation focused on a premium, design-driven UI system and smooth motion primitives. It uses feature-based organization under `src/` with a small, explicit set of “foundation” utilities and UI primitives.

The app currently renders an empty `main` shell; no portfolio sections/pages are implemented yet.

---

## Folder structure

### `src/app/`

- **App Router entry points**
  - `layout.tsx`: Root layout that wires fonts, global CSS, and top-level providers.
  - `page.tsx`: Current placeholder route; contains only the main content mount.
  - `globals.css`: Tailwind + project globals (focus ring, selection styling, skip link, etc.).
  - `manifest.ts`, `robots.ts`, `sitemap.ts`, `favicon.ico`: SEO-related routes/assets.

### `src/components/`

Feature-based UI grouped by responsibility:

- `layout/`
  - `app-providers.tsx`: Composes app-wide providers (theme + motion + smooth scroll).
  - `smooth-scroll-provider.tsx`: Global Lenis integration + GSAP ScrollTrigger ticker binding.
  - `theme-toggle.tsx`: Example interactive component for theme switching.
- `ui/`
  - `button.tsx`: Styled button primitive using CVA variants.
  - `badge.tsx`: Styled badge primitive.
  - `card.tsx`: Styled card primitive.
  - `container.tsx`: Layout container with width presets.
  - `heading.tsx`: Typography/heading primitive with semantic sizes.
  - `section.tsx`: Section primitive with container + vertical spacing presets.
- `animations/`
  - `reveal.tsx`: Motion reveal primitive (uses project motion config).
- `sections/`
  - `section-heading.tsx`: Section heading component (foundation piece for later sections).

### `src/config/`

- `site.ts`: Central site metadata and SEO defaults (with `NEXT_PUBLIC_SITE_URL` support).
- `animation.ts`: Motion timing + easing presets (durations, staggers, standard easings).

### `src/constants/`

- `breakpoints.ts`: Named breakpoint values used for responsive logic.

### `src/styles/`

- `tokens.css`: The primary semantic design-token source of truth.
  - Defines background/foreground/canvas/surface and semantic status colors.
  - Defines radius + elevation/shadows.
  - Defines typography and spacing scales as CSS variables.
- `motion.css`: Motion accessibility handling.
  - Ensures Lenis class behavior.
  - Enforces reduced-motion media query overrides.

### `src/lib/`

- `gsap.ts`: GSAP + ScrollTrigger registration wiring used by the smooth scroll provider.
- `motion.ts`: Central Motion transitions + variants.
- `utils.ts`: `cn()` helper usage is centralized under `src/lib/utils.ts`.

### `src/utils/`

Foundation utility layers (pure helpers + light hooks):

- `scroll.ts`: Lenis-aware scrolling helpers.
- `animation.ts`: Reduced-motion safe animation gating helpers.
- `inview.ts`: Viewport visibility helper.

### `src/hooks/`

- `use-lenis.ts`: Lenis context helper.
- `use-media-query.ts`: Media query hook.
- `use-reduced-motion.ts`: Reduced motion hook.

### `src/types/`

- shared type helpers (polymorphic props, children props, etc.).

---

## Providers

### `AppProviders` (`src/components/layout/app-providers.tsx`)

Composes:

1. **`ThemeProvider`** (`next-themes`) with `attribute="class"`.
   - `defaultTheme="system"`
   - `disableTransitionOnChange` to prevent theme-flash.
2. **Motion config** (`motion/react`)
   - `reducedMotion="user"`
   - transition set to `transitions.standard` from `src/lib/motion.ts`.
3. **Smooth scroll provider** (`SmoothScrollProvider`)
   - Responsible for Lenis + GSAP ScrollTrigger integration.

### `SmoothScrollProvider` (`src/components/layout/smooth-scroll-provider.tsx`)

- Creates a Lenis instance (unless reduced motion is enabled via `matchMedia`).
- Registers GSAP ScrollTrigger ticker updates.
- Uses `gsap.ticker.add(update)` and binds Lenis scroll events to ScrollTrigger updates.
- Cleans up:
  - destroys Lenis instance
  - removes ticker callback
  - disconnects ScrollTrigger update handler.

This ensures ScrollTrigger + Lenis stay in sync.

---

## Utilities (foundation layers)

### `src/utils/scroll.ts`

- `useScrollTo()`
  - Provides a reduced-motion fallback.
  - Uses Lenis (when available) for consistent smooth scrolling.

### `src/utils/animation.ts`

- `useAnimationGuard()` / `withReducedMotionFallback()`
  - Centralizes reduced-motion logic so animations don’t run when the user opts out.

### `src/utils/inview.ts`

- `isElementInViewport()`
  - Small helper for visibility checks.

---

## Configuration

### SEO + metadata

- `src/app/layout.tsx` exports `metadata` and `viewport`.
- `src/config/site.ts` provides defaults.
- `src/app/manifest.ts`, `robots.ts`, `sitemap.ts` provide route metadata.

### Tailwind + tokens

- Tailwind is imported in `src/app/globals.css`.
- Semantic token CSS variables are in `src/styles/tokens.css`.
- Components reference semantic Tailwind classes that map to the token variables.

### GSAP registration

- `src/lib/gsap.ts` registers ScrollTrigger + `useGSAP` only once.

---

## Design decisions

1. **Token-driven UI**: Colors/typography/spacing are derived from semantic CSS variables (see `tokens.css`).
2. **Motion is accessibility-first**: reduced-motion is respected at the provider + utility layer.
3. **Feature-based composition**: providers are in `layout/`, UI primitives in `ui/`, animation primitives in `animations/`.
4. **Single-source-of-truth**: timing/easing are centralized in `src/config/animation.ts` and transitions/variants in `src/lib/motion.ts`.
