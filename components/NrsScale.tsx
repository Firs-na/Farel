"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { getNrsLevel } from "@/data/nrs";

export default function NrsScale() {
  const [selected, setSelected] = useState<number | null>(null);
  const router = useRouter();

  const info = selected !== null ? getNrsLevel(selected) : null;

  return (
    <div className="rounded-[24px] border border-line bg-surface p-8">
      <p className="text-[15px] font-semibold text-tealDeep">
        Seberapa berat nyeri yang kamu rasakan saat ini?
      </p>
      <div className="mb-1.5 mt-6 flex justify-between text-[11.5px] text-inkSoft">
        <span>Tidak nyeri</span>
        <span>Nyeri paling berat</span>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {Array.from({ length: 11 }, (_, n) => {
          const hue = 145 - n * 13;
          const isSelected = selected === n;
          return (
            <button
              key={n}
              onClick={() => setSelected(n)}
              className="aspect-square min-w-[40px] flex-1 rounded-xl border border-line font-mono text-[15px] font-semibold transition-transform hover:-translate-y-0.5"
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
        <div className="mt-6.5 rounded-2xl bg-surfaceSoft p-5.5">
          <div className="font-display text-xl font-semibold text-tealDeep">
            {selected}/10 — {info.label}
          </div>
          <p className="mt-1.5 text-inkSoft">{info.desc}</p>
          <div className="mt-3.5 flex flex-wrap items-center gap-2.5">
            <span className="text-[13px] text-inkSoft">
              Rekomendasi genre:
            </span>
            <span className="rounded-full bg-surface px-2.5 py-1 font-mono text-[10.5px] text-teal">
              {info.genre}
            </span>
            <button
              onClick={() =>
                router.push(`/lagu?genre=${encodeURIComponent(info.genre)}`)
              }
              className="rounded-full border border-line px-4 py-2 text-[13px] font-semibold text-tealDeep transition-colors hover:border-teal"
            >
              Dengarkan sekarang →
            </button>
          </div>
        </div>
      )}

      <p className="mt-5 border-t border-dashed border-line pt-3.5 text-xs text-inkSoft">
        Alat ini membantu menggambarkan nyeri untuk kebutuhan relaksasi,
        bukan alat diagnosis medis. Untuk nyeri berat, baru, atau tidak
        biasa, tetap konsultasikan ke tenaga kesehatan.
      </p>
    </div>
  );
}
