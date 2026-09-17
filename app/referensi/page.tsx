import { references } from "@/data/references";

export default function ReferensiPage() {
  return (
    <section className="pb-24 pt-4 md:pt-2">
      <div className="mb-8">
        <h2 className="font-display text-[26px] font-semibold text-tealDeep">
          Referensi
        </h2>
        <p className="mt-1.5 max-w-[60ch] text-inkSoft">
          Dasar ilmiah penggunaan terapi musik dalam penatalaksanaan nyeri,
          dirangkum dari beberapa kajian berikut.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        <div className="rounded-full border border-line bg-surfaceSoft px-4 py-2 text-[12.5px] font-semibold text-teal">
          🎵 Terapi non-farmakologis
        </div>
        <div className="rounded-full border border-line bg-surfaceSoft px-4 py-2 text-[12.5px] font-semibold text-teal">
          🧠 Respons gelombang otak
        </div>
        <div className="rounded-full border border-line bg-surfaceSoft px-4 py-2 text-[12.5px] font-semibold text-teal">
          💊 Pendamping farmakologi
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {references.map((paragraf, i) => (
          <div
            key={i}
            className="rounded-2xl border border-line bg-surface p-6"
          >
            <span className="mb-3 inline-block font-mono text-xs text-sage">
              Kajian {i + 1}
            </span>
            <p className="text-[14.5px] leading-relaxed text-inkSoft">
              {paragraf}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-dashed border-line bg-surfaceSoft p-6">
        <h3 className="mb-2 text-[15px] font-semibold text-tealDeep">
          Catatan
        </h3>
        <p className="text-[13.5px] leading-relaxed text-inkSoft">
          Terapi musik pada halaman ini ditujukan sebagai pendukung
          relaksasi dan pengalihan perhatian dari rasa nyeri, bukan
          pengganti penanganan medis. Selalu konsultasikan kondisi
          kesehatan dengan tenaga medis yang berwenang.
        </p>
      </div>
    </section>
  );
}