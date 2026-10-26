"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  poster: string;
  className?: string;
  /** CSS object-position, e.g. "50% 60%". */
  position?: string;
};

/**
 * Muted, looping, inline background video. Pauses while off-screen to save
 * battery, and stays on its poster frame when the visitor prefers reduced motion.
 */
export function BackgroundVideo({ src, poster, className = "", position = "50% 50%" }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      video.removeAttribute("autoplay");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) video.play().catch(() => {});
          else video.pause();
        });
      },
      { threshold: 0.05 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      style={{ objectPosition: position }}
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
    />
  );
}
