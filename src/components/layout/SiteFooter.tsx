import Link from "next/link";
import { LEGAL, NAV_LINKS, SITE } from "@/lib/site";

/**
 * Black rounded footer card. The matching full-screen "curtain" image that
 * appears beneath it as it scrolls away lives in PageShell.
 */
export function SiteFooter() {
  const links = [
    ...NAV_LINKS.filter((l) => !l.href.includes("#")),
    { href: "/#support", label: "고객지원" },
  ];

  return (
    <footer
      id="support"
      className="mx-[clamp(8px,1.5vw,16px)] mb-[clamp(8px,1.5vw,16px)] flex min-h-[70vh] flex-col justify-between rounded-[24px] bg-ink px-[clamp(24px,4vw,56px)] pt-[clamp(40px,6vw,72px)] pb-8 text-sand"
    >
      <div className="grid gap-12 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <p className="m-0 font-display text-[clamp(96px,14vw,180px)] leading-[0.8] font-bold tracking-[-0.04em]">
            P
          </p>
          <p className="m-0 max-w-[320px] text-[15px] leading-[1.7] text-muted-dark">
            {SITE.tagline}
            <br />
            {SITE.taglineEn}
          </p>
        </div>
        <nav aria-label="푸터 메뉴" className="flex flex-col">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="link-draw relative w-fit py-1 font-display text-[clamp(28px,3.2vw,44px)] leading-[1.15] font-semibold tracking-[-0.02em] text-sand no-underline hover:text-sand"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-16 flex flex-wrap items-end justify-between gap-x-12 gap-y-6 border-t border-line-dark pt-6 font-mono text-[11px] leading-[1.9] tracking-[0.08em] text-muted-dark uppercase">
        <p className="m-0">
          {LEGAL.company} · 대표 {LEGAL.ceo} · 사업자등록번호 {LEGAL.businessNo} · 통신판매업{" "}
          {LEGAL.mailOrderNo}
          <br />
          고객센터 {LEGAL.phone} · {LEGAL.hours} · {LEGAL.email}
        </p>
        <p className="m-0">© {SITE.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
