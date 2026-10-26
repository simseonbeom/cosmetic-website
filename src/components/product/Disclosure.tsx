"use client";

import { useId, useState, type ReactNode } from "react";

type Props = {
  summary: ReactNode;
  children: ReactNode;
  open?: boolean;
  onToggle?: () => void;
  /** Left padding for the panel, to align under a Q. prefix. */
  indent?: boolean;
};

/** One expandable row: a full-width button with a +/− sign and a collapsible panel. */
export function Disclosure({ summary, children, open, onToggle, indent }: Props) {
  const [internal, setInternal] = useState(false);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internal;
  const panelId = useId();

  const toggle = () => {
    if (onToggle) onToggle();
    if (!isControlled) setInternal((v) => !v);
  };

  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex min-h-[60px] w-full cursor-pointer items-center justify-between gap-4 border-0 bg-transparent px-1 text-left text-base text-ink [font:inherit]"
      >
        <span>{summary}</span>
        <span aria-hidden="true" className="font-display text-[22px] font-light">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div
          id={panelId}
          className={`px-1 pb-6 text-[15px] leading-[1.9] text-muted ${indent ? "pl-9" : ""}`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
