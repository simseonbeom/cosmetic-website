"use client";

import { useEffect, useRef, type Ref } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

type Props = {
  /** Plain text, or one string per line for staggered layouts. */
  text: string | string[];
  as?: "p" | "h2" | "h3";
  className?: string;
  /** Per-line classes (e.g. indents) when `text` is an array. */
  lineClassName?: string[];
  /** Resting (unfilled) color. */
  from?: string;
  /** Filled color. */
  to?: string;
  id?: string;
};

/** Words fill from light grey to ink as the block scrolls through the viewport. */
export function ScrubText({
  text,
  as = "p",
  className = "",
  lineClassName = [],
  from = "#C9C2B7",
  to = "#2A2825",
  id,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const lines = Array.isArray(text) ? text : [text];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const words = el.querySelectorAll<HTMLElement>("[data-word]");
    if (prefersReducedMotion()) {
      words.forEach((w) => (w.style.color = to));
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { color: from },
        {
          color: to,
          ease: "none",
          stagger: 0.08,
          scrollTrigger: { trigger: el, start: "top 78%", end: "bottom 45%", scrub: 0.4 },
        },
      );
    }, el);
    return () => ctx.revert();
  }, [from, to]);

  const Tag = as as "p";
  return (
    <Tag ref={ref as Ref<HTMLParagraphElement>} id={id} className={className}>
      {lines.map((line, li) => (
        <span key={li} className={`block ${lineClassName[li] ?? ""}`}>
          {line.split(" ").map((word, wi) => (
            <span key={wi} data-word className="inline-block" style={{ color: from }}>
              {word}
              {wi < line.split(" ").length - 1 ? " " : ""}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
}
