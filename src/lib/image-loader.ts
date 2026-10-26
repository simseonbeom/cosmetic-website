import type { ImageLoaderProps } from "next/image";

/**
 * Static-export image loader: serves files straight from `public/` and
 * prepends the base path (next/image skips basePath when `unoptimized`).
 */
export default function imageLoader({ src }: ImageLoaderProps) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}`;
}
