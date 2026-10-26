"use client";

import { useEffect, useRef, type Ref } from "react";
import { gsap, EASE, prefersReducedMotion } from "@/lib/gsap";

type Props = {
  /** One entry per visual line; each is masked and slides up on its own. */
  lines: string[];
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  lineClassName?: string;
  /** `load` plays on mount (hero); `scroll` waits until in view. */
  trigger?: "load" | "scroll";
  delay?: number;
  id?: string;
};

/** Big headline whose lines rise out of a clipping mask, staggered 0.1 s. */
export function LineReveal({
  lines,
  as = "h2",
  className = "",
  lineClassName = "",
  trigger = "scroll",
  delay = 0,
  id,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll("[data-line]"),
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 1.1,
          ease: EASE,
          stagger: 0.1,
          delay,
          ...(trigger === "scroll"
            ? { scrollTrigger: { trigger: el, start: "top 85%", once: true } }
            : {}),
        },
      );
    }, el);
    return () => ctx.revert();
  }, [trigger, delay]);

  const Tag = as as "h2";
  return (
    <Tag ref={ref as Ref<HTMLHeadingElement>} id={id} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
          <span data-line className={`block will-change-transform ${lineClassName}`}>
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
