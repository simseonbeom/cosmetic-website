"use client";

import { useEffect, useRef, type ReactNode, type Ref } from "react";
import { gsap, EASE, DURATION, prefersReducedMotion } from "@/lib/gsap";

type Props = {
  children: ReactNode;
  /** Element to render; defaults to a div. */
  as?: "div" | "section" | "article" | "li" | "header" | "figure" | "ul" | "ol";
  className?: string;
  /** Delay in seconds. */
  delay?: number;
  /** `fade-up` lifts in; `scale` grows from 0.9 (cards). */
  effect?: "fade-up" | "scale";
  /** Animate direct children one after another instead of the wrapper. */
  stagger?: number;
  id?: string;
  "aria-labelledby"?: string;
  "aria-label"?: string;
  style?: React.CSSProperties;
};

/** Animates its content in once, the first time it scrolls into view. */
export function Reveal({
  children,
  as = "div",
  className = "",
  delay = 0,
  effect = "fade-up",
  stagger,
  ...rest
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const targets = stagger ? Array.from(el.children) : el;
    const from =
      effect === "scale"
        ? { autoAlpha: 0, scale: 0.9, transformOrigin: "50% 60%" }
        : { autoAlpha: 0, y: 40 };
    const ctx = gsap.context(() => {
      gsap.fromTo(targets, from, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: DURATION,
        delay,
        ease: EASE,
        stagger: stagger ?? 0,
        clearProps: "transform",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });
    }, el);
    return () => ctx.revert();
  }, [delay, effect, stagger]);

  const Tag = as as "div";
  return (
    <Tag ref={ref as Ref<HTMLDivElement>} className={className} {...rest}>
      {children}
    </Tag>
  );
}
