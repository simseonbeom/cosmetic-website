"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

/**
 * Site-wide inertial scrolling (Lenis) driven by GSAP's ticker so that
 * ScrollTrigger stays in sync. Native scroll position is kept, so sticky
 * headers, anchors and IntersectionObserver keep working.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const lenis = new Lenis({
      autoRaf: false,
      lerp: 0.09,
      anchors: { offset: -16 },
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // New route: jump to the top and let ScrollTrigger re-measure the new page.
  useEffect(() => {
    if (!window.location.hash) {
      lenisRef.current?.scrollTo(0, { immediate: true });
    }
    const t = window.setTimeout(() => ScrollTrigger.refresh(), 150);
    return () => window.clearTimeout(t);
  }, [pathname]);

  return <>{children}</>;
}
