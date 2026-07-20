# Portfolio foundation

A production-ready personal-portfolio foundation built with Next.js 15, React 19,
TypeScript, Tailwind CSS v4, and shadcn-compatible primitives. It intentionally
ships without portfolio content or routes.

## Commands

```bash
npm run dev
npm run lint
npm run typecheck
npm run format:check
npm run build
npm run check
```

## Configure before launch

1. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL`.
2. Update identity, description, keywords, and social URLs in
   `src/config/site.ts`.
3. Add any source assets in `src/assets` and public files in `public/`.

## Architecture

- `src/app` — App Router, global metadata, robots, sitemap, and manifest
- `src/components/ui` — reusable shadcn-compatible primitives
- `src/components/layout` — application providers, color scheme, and Lenis
- `src/components/animations` — Motion-based reveal utilities
- `src/config`, `src/constants`, `src/types`, `src/utils` — shared contracts
- `src/styles` — semantic color, type, spacing, elevation, and motion tokens

The default route is purposefully an empty accessible canvas. Build portfolio
features as composed sections rather than adding one-off page styling.
