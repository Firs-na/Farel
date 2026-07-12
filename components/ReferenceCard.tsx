import type { Reference } from "@/data/references";

export default function ReferenceCard({ year, title, source, note }: Reference) {
  return (
    <div className="grid grid-cols-[56px_1fr] gap-4 rounded-2xl border border-line bg-surface p-5 md:grid-cols-[70px_1fr]">
      <div className="font-mono text-xl font-semibold text-sage">{year}</div>
      <div>
        <h3 className="mb-1 text-[15px] font-semibold text-tealDeep">
          {title}
        </h3>
        <div className="mb-1.5 text-[12.5px] italic text-inkSoft">
          {source}
        </div>
        <p className="text-[13.5px] text-inkSoft">{note}</p>
      </div>
    </div>
  );
}
