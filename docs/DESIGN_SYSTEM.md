# DESIGN_SYSTEM.md

This design system foundation uses **semantic CSS variables** as the source of truth.

## 1) Typography

Defined in `src/styles/tokens.css` as CSS variables:

- `--text-display`: clamp(2.75rem, 7vw, 6.5rem)
  - `--text-display--line-height`: 0.94
  - `--text-display--letter-spacing`: -0.065em
- `--text-title`: clamp(2rem, 4vw, 3.75rem)
  - line-height: 1
  - letter-spacing: -0.05em
- `--text-heading`: clamp(1.5rem, 2.5vw, 2.25rem)
  - line-height: 1.08
  - letter-spacing: -0.035em
- `--text-kicker`: 0.6875rem
  - line-height: 1.2
  - letter-spacing: 0.16em

Typography is consumed by `src/components/ui/heading.tsx` via Tailwind classes that map to these variables.

## 2) Spacing

Spacing variables:

- `--spacing-page`: clamp(1.25rem, 4vw, 4rem)
- `--spacing-section`: clamp(5rem, 12vw, 10rem)
- `--spacing-section-tight`: clamp(3.5rem, 8vw, 6rem)

Section vertical spacing is applied by `src/components/ui/section.tsx` using:

- `py-section` (default)
- `py-section-tight` (tight)

Horizontal page padding comes from `Container` via `px-page`.

## 3) Radius

- `--radius`: 0.875rem
- Derived radii:
  - `--radius-sm`: calc(var(--radius) - 6px)
  - `--radius-md`: calc(var(--radius) - 3px)
  - `--radius-lg`: var(--radius)
  - `--radius-xl`: calc(var(--radius) + 6px)
  - `--radius-2xl`: calc(var(--radius) + 12px)

Used by components through Tailwind border radius utilities.

## 4) Elevation & shadows

Elevation shadow tokens:

- `--shadow-elevation-1`
- `--shadow-elevation-2`
- `--shadow-elevation-3`

Mapped into the `@theme inline` section of `src/styles/tokens.css` so Tailwind classes like `shadow-elevation-1` exist.

## 5) Color roles (semantic)

All semantic tokens are defined in `src/styles/tokens.css` and change for dark mode under `.dark`.

Light (`:root`):

- Canvas/background:
  - `--canvas`
  - `--background`
  - `--foreground`
- Surfaces:
  - `--surface`
  - `--surface-raised`
  - `--surface-sunken`
- Brand/primary:
  - `--primary`
  - `--primary-foreground`
- Secondary:
  - `--secondary`
  - `--secondary-foreground`
- Muted:
  - `--muted`
  - `--muted-foreground`
- Accent:
  - `--accent`
  - `--accent-foreground`
- Borders/inputs/focus:
  - `--border`
  - `--input`
  - `--focus-ring`

Status colors:

- `--success`, `--success-foreground`
- `--warning`, `--warning-foreground`
- `--danger`, `--danger-foreground`

Dark (`.dark`):

- Overrides all of the above with darker backgrounds and tuned foreground contrasts.

## 6) Focus & interaction states

Global focus behavior is defined in `src/app/globals.css`:

- `:focus-visible { @apply outline-2 outline-offset-4 outline-focus-ring; }`

Skip link is also provided:

- `.skip-link` styling lives in `src/app/globals.css`.

Button hover/active styles are implemented in `src/components/ui/button.tsx` using semantic tokens.

## 7) Motion

- `src/config/animation.ts` defines:
  - `duration`: instant/fast/base/slow
  - `ease`: standard/enter/exit
  - `stagger`: base stagger amount
- `src/lib/motion.ts` defines:
  - `transitions.standard`, `transitions.enter`, `transitions.exit`
  - reveal variants and fade variants

Reduced-motion handling is defined in `src/styles/motion.css`:

- For `prefers-reduced-motion: reduce`, animations and transitions are effectively disabled.

Providers/utilities also gate animation execution based on reduced motion.

## 8) Responsive behavior

- `src/constants/breakpoints.ts` defines:
  - sm: 640
  - md: 768
  - lg: 1024
  - xl: 1280
  - 2xl: 1536

Container widths:

- `Container` supports `default`, `wide`, `narrow`, `full` presets.

---

## Notes

This foundation intentionally centralizes design intent in tokens and primitives.
Future sections should use these tokens/classes rather than introducing new styling conventions.
