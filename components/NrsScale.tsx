"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { getNrsLevel } from "@/data/nrs";

export default function NrsScale() {
  const [selected, setSelected] = useState<number | null>(null);
  const router = useRouter();

  const info = selected !== null ? getNrsLevel(selected) : null;

  return (
    <div className="rounded-[24px] border border-line bg-surface p-6 md:p-8">
      <p className="text-[15px] font-semibold text-tealDeep">
        Seberapa berat nyeri yang kamu rasakan saat ini?
      </p>
      <div className="mb-2 mt-6 flex justify-between text-[11.5px] text-inkSoft">
        <span>Tidak nyeri</span>
        <span>Nyeri paling berat</span>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-11">
        {Array.from({ length: 11 }, (_, n) => {
          const hue = 145 - n * 13;
          const isSelected = selected === n;
          return (
            <button
              key={n}
              onClick={() => setSelected(n)}
              className="flex aspect-square items-center justify-center rounded-xl border border-line font-mono text-[15px] font-semibold transition-transform hover:-translate-y-0.5"
              style={{
                background: isSelected
                  ? `hsl(${hue}, 55%, 45%)`
                  : "var(--surface-soft, #EAF0E9)",
                color: isSelected ? "#fff" : "#1E2E2A",
                transform: isSelected ? "translateY(-2px)" : undefined,
                boxShadow: isSelected
                  ? "0 18px 40px -24px rgba(23,48,46,0.35)"
                  : undefined,
              }}
            >
              {n}
            </button>
          );
        })}
      </div>

      {info && selected !== null && (
        <div className="mt-7 rounded-2xl bg-surfaceSoft p-6">
          <div className="font-display text-xl font-semibold text-tealDeep">
            {selected}/10 — {info.label}
          </div>
          <p className="mt-2 leading-relaxed text-inkSoft">{info.desc}</p>
          <div className="mt-4 flex flex-wrap items-center gap-2.5">
            <span className="text-[13px] text-inkSoft">
              Rekomendasi genre:
            </span>
            <span className="rounded-full bg-surface px-3 py-1.5 font-mono text-[10.5px] text-teal">
              {info.genre}
            </span>
            <button
              onClick={() =>
                router.push(`/lagu?genre=${encodeURIComponent(info.genre)}`)
              }
              className="rounded-full border border-line px-4 py-2.5 text-[13px] font-semibold text-tealDeep transition-colors hover:border-teal"
            >
              Dengarkan sekarang →
            </button>
          </div>
        </div>
      )}

      <p className="mt-6 border-t border-dashed border-line pt-4 text-xs leading-relaxed text-inkSoft">
        Alat ini membantu menggambarkan nyeri untuk kebutuhan relaksasi,
        bukan alat diagnosis medis. Untuk nyeri berat, baru, atau tidak
        biasa, tetap konsultasikan ke tenaga kesehatan.
      </p>
    </div>
  );
}