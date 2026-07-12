import ReferenceCard from "@/components/ReferenceCard";
import { references } from "@/data/references";

export default function ReferensiPage() {
  return (
    <section className="pb-24">
      <div className="mb-6">
        <h2 className="font-display text-[26px] font-semibold text-tealDeep">
          Referensi
        </h2>
        <p className="mt-1.5 max-w-[60ch] text-inkSoft">
          Ringkasan singkat dari beberapa tinjauan dan penelitian tentang
          terapi musik. Gunakan sebagai titik awal, bukan kutipan lengkap —
          cek sumber aslinya untuk detail metodologi.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {references.map((ref) => (
          <ReferenceCard key={ref.title} {...ref} />
        ))}
      </div>
    </section>
  );
}
