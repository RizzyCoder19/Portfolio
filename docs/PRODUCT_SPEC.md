# PRODUCT_SPEC.md

## Purpose

This project is a foundation for a premium personal portfolio. The implementation currently focuses on:

- a high-quality design-token system
- motion/scroll foundations (Lenis + GSAP)
- reusable UI primitives
- SEO-ready Next.js metadata scaffolding

No portfolio sections/pages are implemented yet.

## Target audience

- Recruiters, hiring managers, and design/engineering communities looking for:
  - high-signal creative engineering
  - motion-forward user experiences
  - accessibility-conscious UI

## Design philosophy

- **Premium through restraint**: strong typography, consistent spacing, subtle elevation, and purposeful motion.
- **Semantic tokens everywhere**: colors/typography/spacing are roles, not arbitrary values.
- **Accessibility-first interactions**: reduced motion support, visible focus rings, and skip-to-content.

## Interaction principles

1. Clear affordances:
   - Buttons and interactive controls use consistent states.
2. Motion communicates state:
   - Animations should be smooth, short, and not distracting.
3. Respect user preferences:
   - reduced motion users see instantaneous transitions.

## Animation philosophy

- Motion should:
  - feel deliberate (standardized timing + easing)
  - remain performant (Lenis is throttled through requestAnimationFrame via GSAP ticker)
  - avoid accessibility pitfalls (prefers-reduced-motion respected)

## Non-goals (currently)

- Building portfolio content/sections
- Heavy 3D usage (React Three Fiber is installed but not used yet)
