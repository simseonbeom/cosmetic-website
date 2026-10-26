import Image from "next/image";
import type { ReactNode } from "react";
import { SITE } from "@/lib/site";

/**
 * Wraps a page so that the footer, as it scrolls up, reveals a fixed
 * full-screen image beneath it like a curtain. The page content carries the
 * sand background and leaves a gap at the bottom where the image shows.
 */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="relative z-10 mb-[70vh] bg-sand">{children}</div>
      <div aria-hidden="true" className="fixed inset-x-0 bottom-0 -z-10 h-[70vh] overflow-hidden">
        <Image
          src="/images/story-hero-linen.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[50%_60%]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="m-0 font-display text-[clamp(72px,12vw,200px)] font-bold tracking-[0.2em] text-paper/90">
            {SITE.name}
          </p>
        </div>
      </div>
    </>
  );
}
