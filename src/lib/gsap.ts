import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/** House easing: fast start, long settle (≈ cubic-bezier(0.16, 1, 0.3, 1)). */
export const EASE = "power3.out";
export const DURATION = 1;

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export { gsap, ScrollTrigger };
