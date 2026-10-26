/**
 * Prefixes a `public/` asset path with the configured base path. `next/image`
 * and `next/link` do this on their own; plain tags (`<video>`, `<a>`) do not.
 */
export function asset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
