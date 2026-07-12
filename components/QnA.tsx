"use client";

import { useState } from "react";
import { faq } from "@/data/faq";

export default function QnA() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-2.5">
      {faq.map((item, i) => {
        const open = openIndex === i;
        return (
          <div
            key={item.q}
            className="overflow-hidden rounded-2xl border border-line bg-surface"
          >
            <button
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-[14.5px] font-semibold text-tealDeep">
                {item.q}
              </span>
              <span
                className={`flex-shrink-0 font-mono text-lg text-sage transition-transform ${
                  open ? "rotate-45" : ""
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            {open && (
              <div className="px-5 pb-4 text-[13.5px] leading-relaxed text-inkSoft">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
