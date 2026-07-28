# Hero Implementation — Direction C "Asymmetric Stack"

## Foundation
- [ ] 1. Update `src/content/hero.ts` — New CTA labels, content structure
- [ ] 2. Update `src/styles/motion.css` — Replace blob keyframes with spatial anchor reveal, remove decorative blobs

## Components (bottom-up)
- [ ] 3. Rewrite `src/components/sections/hero/HeroVisual.tsx` — Spatial anchor, left column, material depth
- [ ] 4. Rewrite `src/components/sections/hero/HeroContent.tsx` — Name with rule draw, headline kerning settle, clip-path from center
- [ ] 5. Rewrite `src/components/sections/hero/HeroActions.tsx` — Text-link CTAs with spring underline physics
- [ ] 6. Remove/repurpose `src/components/sections/hero/HeroBeam.tsx` — Beam is now invisible axis
- [ ] 7. Remove `src/components/sections/hero/ScrollIndicator.tsx` — No scroll indicator needed
- [ ] 8. Update `src/components/sections/hero/index.ts` — Updated exports

## Orchestrator
- [ ] 9. Rewrite `src/components/sections/hero/Hero.tsx` — Asymmetric layout, scroll compression, light transfer

## About Integration
- [ ] 10. Update `src/components/sections/about.tsx` — Receive HeroVisual light transfer

## Page
- [ ] 11. Update `src/app/page.tsx` — Remove Reveal wrappers, scene transition orchestration

## Verify
- [ ] 12. npm run lint, typecheck, build

