"use client";

import { useState } from "react";
import { Disclosure } from "./Disclosure";

type Faq = { q: string; a: string };

/** Accordion where only one answer is open at a time. */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState(-1);
  return (
    <div className="border-t border-ink">
      {faqs.map((f, i) => (
        <Disclosure
          key={f.q}
          open={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          indent
          summary={
            <>
              <span className="mr-2.5 font-display font-semibold">Q.</span>
              {f.q}
            </>
          }
        >
          <p className="m-0">{f.a}</p>
        </Disclosure>
      ))}
    </div>
  );
}
