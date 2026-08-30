import { references } from "@/data/references";

export default function ReferensiPage() {
  return (
    <section className="pb-24">
      <div className="mb-6">
        <h2 className="font-display text-[26px] font-semibold text-tealDeep">
          Referensi
        </h2>
        <p className="mt-1.5 max-w-[60ch] text-inkSoft">
          Dasar ilmiah penggunaan terapi musik dalam penatalaksanaan nyeri.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        {references.map((paragraf, i) => (
          <p
            key={i}
            className="rounded-2xl border border-line bg-surface p-5 text-[14.5px] leading-relaxed text-inkSoft"
          >
            {paragraf}
          </p>
        ))}
      </div>
    </section>
  );
}