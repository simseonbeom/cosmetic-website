"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ScrubText } from "@/components/motion/ScrubText";
import { Button } from "@/components/ui/Button";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

const PHOTOS = [
  "hero-main", "howto-1-pump", "howto-2-spread", "howto-3-pat", "ingredient-ha-droplets",
  "ingredient-pdrn-helix", "model-applying", "model-cheek", "model-holding", "principle-glass-cube",
  "principle-paper-card", "principle-pebble", "product-acrylic-travertine", "product-gel-splash",
  "product-packshot", "product-pedestal", "product-solo", "product-water", "story-hero-linen",
  "texture-stone",
];

/**
 * Integer-only PRNG (mulberry32) so the server and every browser produce the
 * exact same layout; values are rounded so style strings match on hydration.
 */
function rand(seed: number) {
  let t = (seed + 0x6d2b79f5) | 0;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}
const round = (n: number, d = 2) => Math.round(n * 10 ** d) / 10 ** d;

type Tile = { src: string; left: number; top: number; size: number; speed: number; front: boolean };

function buildTiles(count: number): Tile[] {
  return Array.from({ length: count }, (_, i) => {
    const r = (k: number) => rand(i * 7 + k);
    return {
      src: `/images/${PHOTOS[i % PHOTOS.length]}.webp`,
      left: round(2 + r(1) * 90), // % of section width
      top: round(4 + r(2) * 88), // % of section height
      size: 56 + Math.round(r(3) * 110), // px
      speed: round(0.15 + r(4) * 0.55),
      front: r(5) > 0.6,
    };
  });
}

const DESKTOP = buildTiles(34);
const MOBILE = DESKTOP.slice(0, 16);

/**
 * Dozens of small square photos scattered through a tall section, each with
 * its own parallax depth, fading in from the page color as they arrive. The
 * central headline sticks mid-viewport and fills in word by word on scroll.
 */
export function ScatterGallery() {
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = section.current;
    if (!el || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      el.querySelectorAll<HTMLElement>("[data-tile]").forEach((tile) => {
        const speed = Number(tile.dataset.speed);
        const drift = 120 + speed * 520;
        gsap.fromTo(
          tile,
          { y: drift },
          {
            y: -drift,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
        gsap.fromTo(
          tile,
          { autoAlpha: 0 },
          {
            autoAlpha: 1,
            duration: 1.4,
            ease: "power2.out",
            scrollTrigger: { trigger: tile, start: "top 92%", once: true },
          },
        );
      });
    }, el);
    return () => ctx.revert();
  }, []);

  const render = (tiles: Tile[], extra: string) =>
    tiles.map((t, i) => (
      <div
        key={i}
        data-tile
        data-speed={t.speed}
        className={`absolute overflow-hidden rounded-[6px] bg-paper will-change-transform ${extra} ${
          t.front ? "z-20" : "z-0"
        }`}
        style={{ left: `${t.left}%`, top: `${t.top}%`, width: `${t.size}px`, height: `${t.size}px` }}
      >
        <Image src={t.src} alt="" fill sizes="180px" className="object-cover" />
      </div>
    ));

  return (
    <section ref={section} aria-labelledby="gallery-title" className="relative h-[240vh] overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0">
        {render(DESKTOP, "max-md:hidden")}
        {render(MOBILE, "md:hidden")}
      </div>

      <div className="sticky top-0 z-10 flex h-svh flex-col items-center justify-center gap-10 px-6">
        <ScrubText
          as="h2"
          id="gallery-title"
          text={["더하지 않고,", "필요한 것만", "담았어요."]}
          lineClassName={["", "pl-[12vw]", "pl-[26vw]"]}
          className="m-0 font-display text-[clamp(44px,8vw,128px)] leading-[0.95] font-bold tracking-[-0.03em]"
        />
        <div className="pl-[26vw] max-md:pl-0">
          <Button href="/story">브랜드 스토리</Button>
        </div>
      </div>
    </section>
  );
}
