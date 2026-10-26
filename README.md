# PLAIN — brand website

Marketing site for PLAIN, a minimalist Korean skincare brand, and its first product, **PDRN HYALURON SERUM 150+**.

Built with Next.js (App Router), TypeScript and Tailwind CSS v4. Motion uses Lenis (smooth scroll) and GSAP ScrollTrigger, following the motion/layout conventions of wolverineworldwide.com (reference only; no brand assets copied).

## Routes

| Path | Page |
| --- | --- |
| `/` | 메인 — hero, brand statement, product showcase, numbers, texture, how-to, CTA |
| `/product` | 제품 상세 — gallery, specs, ingredients, routine, 전성분 / 정보제공고시 / FAQ |
| `/story` | 브랜드 스토리 |
| `/ingredients` | 성분 이야기 |
| `/opengraph-image.png` | SNS 공유 이미지 (static PNG in `src/app/`) |

## Project layout

- `src/app/` — routes, root layout, global styles (design tokens live in `globals.css` under `@theme`)
- `src/components/layout/` — `SiteHeader` (transparent full-width → dark pill on scroll), `SiteFooter` (black card), `PageShell` (footer curtain reveal)
- `src/components/motion/` — `SmoothScroll` (Lenis + GSAP ticker), `Reveal` (fade-up / scale-in), `LineReveal` (masked line reveal), `ScrubText` (word fill on scroll), `Parallax`
- `src/components/home/` — `Hero` (crossfade + shrink on scroll), `ScatterGallery` (scattered parallax tiles + word-fill headline), `FeatureCard`, `Carousel`, `StatsCounter`
- `src/components/ui/` — `Button`, `Eyebrow`, `Container`, `Chip`, `Figure`
- `src/components/product/` — gallery, disclosure, FAQ
- `src/content/product.ts` — gallery shots, FAQ, 정보제공고시 rows, how-to steps
- `src/lib/site.ts` — brand constants, nav links, legal placeholders
- `public/images/` — brand photography (WebP)

## Placeholders

Values in square brackets (`[가격]`, `[상호]`, `[전화번호]`, store URL `#`) are awaiting real data. Most live in `src/lib/site.ts` and `src/content/product.ts`.

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds a static export (`next build` → `out/`) with `NEXT_PUBLIC_BASE_PATH=/cosmetic-website` and publishes it to GitHub Pages. Assets referenced from plain tags go through `asset()` in `src/lib/assets.ts` so they pick up the base path.

## Scripts

```bash
npm run dev     # start dev server
npm run build   # production build
npm run lint    # eslint
```
