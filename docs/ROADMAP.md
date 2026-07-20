# ROADMAP.md

## Milestones

### Milestone 0 — Foundation (Completed)

- Next.js App Router scaffolding
- Theme + metadata + SEO defaults
- Design tokens foundation (`src/styles/tokens.css`)
- Motion foundation (Lenis + GSAP + reduced-motion)
- Reusable UI primitives (Button, Card, Container, Heading, Badge, Section)
- Animation + scroll utility layers (`src/utils/*`)

### Milestone 1 — Portfolio section skeleton (Next)

- Implement generic section layout usage:
  - hero, about, work, experiments, contact
- Add consistent section headings using `src/components/sections/section-heading.tsx`

### Milestone 2 — Motion system upgrades

- Formalize reveal/visibility usage:
  - connect `inview` + Motion/GSAP variants
- Create reusable motion presets utilities for consistent choreography

### Milestone 3 — Accessibility & SEO hardening

- Audit focus flows and interactive semantics
- Add structured data (if desired)
- Ensure metadata per-page conventions

### Milestone 4 — Visual polish

- Glassmorphism and elevation variants as reusable utilities
- Add responsive motion behavior tuning per breakpoint

---

## Notes

Roadmap items are designed to preserve existing architecture while extending it with new sections and component behavior.
