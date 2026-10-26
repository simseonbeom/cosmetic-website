"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/site";

const EASE = "ease-[cubic-bezier(0.16,1,0.3,1)]";

/**
 * Full-width transparent header at the top of the page. Once the visitor
 * scrolls, it condenses into a small dark pill centered at the top and the
 * wordmark collapses to its "P" monogram.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pill = scrolled && !menuOpen;

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4">
        <div
          className={`pointer-events-auto flex w-full items-center justify-between transition-[max-width,margin,padding,background-color,color,border-radius,box-shadow] duration-700 ${EASE} ${
            pill
              ? "mt-4 max-w-[640px] rounded-full bg-ink py-2 pr-2 pl-5 text-sand shadow-[0_12px_40px_rgba(42,40,37,0.25)]"
              : "mt-0 max-w-[1600px] rounded-none bg-transparent px-[clamp(8px,2vw,24px)] py-5 text-ink"
          }`}
        >
          <Link
            href="/"
            aria-label="PLAIN 홈"
            className="flex items-baseline font-display text-xl font-bold tracking-[0.32em] text-current no-underline hover:text-current"
          >
            <span>P</span>
            <span
              className={`inline-block overflow-hidden whitespace-nowrap transition-[max-width,opacity] duration-700 ${EASE} ${
                pill ? "max-w-0 opacity-0" : "max-w-[120px] opacity-100"
              }`}
            >
              LAIN
            </span>
          </Link>

          <nav
            aria-label="주요 메뉴"
            className={`flex items-center gap-x-6 text-[14px] max-md:hidden ${pill ? "" : "gap-x-8"}`}
          >
            {NAV_LINKS.map((link) => {
              const current = link.href === pathname;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={current ? "page" : undefined}
                  className={`py-2 text-current no-underline transition-opacity hover:text-current hover:opacity-100 ${
                    current ? "font-semibold" : "opacity-80"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={SITE.storeUrl}
              className={`inline-flex min-h-10 items-center rounded-full px-4 text-[14px] font-medium no-underline transition-colors duration-500 ${
                pill
                  ? "bg-sand text-ink hover:bg-paper hover:text-ink"
                  : "bg-ink text-sand hover:bg-ink-2 hover:text-sand"
              }`}
            >
              구매하기
            </a>
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
              onClick={() => setMenuOpen((v) => !v)}
              className={`hidden min-h-10 cursor-pointer items-center rounded-full border px-4 text-[14px] font-medium max-md:inline-flex ${
                pill ? "border-sand/30 text-sand" : "border-ink/20 text-ink"
              }`}
            >
              {menuOpen ? "닫기" : "메뉴"}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="fixed inset-0 z-40 flex flex-col justify-end bg-ink px-6 pt-28 pb-10 text-sand md:hidden"
      >
        <nav aria-label="모바일 메뉴" className="flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-line-dark py-4 font-display text-4xl font-bold tracking-tight text-sand no-underline hover:text-sand"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="mt-8 font-mono text-[11px] tracking-[0.18em] text-muted-dark uppercase">
          {SITE.productName} · {SITE.volume}
        </p>
      </div>
    </>
  );
}
