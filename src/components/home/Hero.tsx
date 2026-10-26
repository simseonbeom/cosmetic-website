"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { BackgroundVideo } from "@/components/ui/BackgroundVideo";
import { LineReveal } from "@/components/motion/LineReveal";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { SITE } from "@/lib/site";

/**
 * Full-viewport hero: a looping brand film fills the frame, the three-line
 * headline rises out of a mask on load, and as the visitor scrolls the whole
 * frame shrinks slightly and rounds its corners while leaving.
 */
export function Hero() {
  const section = useRef<HTMLElement>(null);
  const frame = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const s = section.current;
    const f = frame.current;
    if (!s || !f || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.to(f, {
        scale: 0.96,
        borderRadius: 28,
        ease: "none",
        scrollTrigger: { trigger: s, start: "top top", end: "bottom top", scrub: true },
      });
    }, s);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={section} aria-label="히어로" className="relative h-svh min-h-[640px]">
      <div ref={frame} className="relative h-full w-full overflow-hidden bg-sand-2 will-change-transform">
        <BackgroundVideo src="/video/hero.mp4" poster="/video/hero-poster.jpg" position="50% 60%" />
        {/* Legibility wash for the headline corner */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(42,40,37,0.45)_0%,rgba(42,40,37,0.12)_38%,transparent_65%)]"
        />

        <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-8 p-[clamp(20px,3vw,48px)]">
          <LineReveal
            as="h1"
            trigger="load"
            delay={0.2}
            lines={["Nothing more.", "Just what", "your skin needs."]}
            className="m-0 font-display text-[clamp(52px,9.2vw,148px)] leading-[0.9] font-bold tracking-[-0.035em] text-paper"
          />
          <Link
            href="/product"
            className="group flex w-[min(100%,280px)] flex-col gap-3 rounded-2xl bg-ink/55 p-3 text-sand no-underline backdrop-blur-md transition-colors hover:bg-ink/70 hover:text-sand"
          >
            <span className="relative block aspect-[16/10] w-full overflow-hidden rounded-xl bg-stone">
              <Image
                src="/images/product-pedestal.webp"
                alt=""
                fill
                sizes="280px"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
            </span>
            <span className="font-mono text-[10px] tracking-[0.18em] text-muted-dark uppercase">
              Our first product
            </span>
            <span className="flex items-center justify-between gap-3 text-[15px] leading-[1.3] font-semibold">
              <span>
                {SITE.productNameDisplay[0]}
                <br />
                {SITE.productNameDisplay[1]}
              </span>
              <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
