import Link from "next/link";

const features = [
  {
    href: "/lagu",
    num: "Daftar Lagu",
    title: "🎵 Musik per genre",
    desc: "Lagu terapi dikelompokkan berdasarkan genre — alam, piano, ambient, dan jazz santai — supaya mudah dicocokkan dengan suasana hati.",
  },
  {
    href: "/nrs",
    num: "Cek Nyeri",
    title: "📊 Skala NRS 0–10",
    desc: "Nilai tingkat nyeri yang kamu rasakan, dan dapatkan rekomendasi genre musik yang sesuai dengan tingkat tersebut.",
  },
  {
    href: "/referensi",
    num: "Referensi",
    title: "📚 Dasar ilmiah",
    desc: "Ringkasan sumber dan penelitian tentang manfaat terapi musik, supaya kamu tahu ini bukan sekadar klaim tanpa dasar.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="border-t border-line pb-6 pt-12">
      <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-[26px] font-semibold text-tealDeep">
            Semua yang kamu butuhkan, tersusun rapi
          </h2>
          <p className="mt-1.5 max-w-[52ch] text-inkSoft">
            Tiga langkah sederhana: cek kondisimu, pilih musik yang sesuai,
            lalu dengarkan tanpa berpindah-pindah halaman.
          </p>
        </div>
      </div>
      <div className="grid gap-4.5 md:grid-cols-3">
        {features.map((f) => (
          <Link
            key={f.href}
            href={f.href}
            className="rounded-xl2 border border-line bg-surface p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="font-mono text-xs text-sage">{f.num}</span>
            <h3 className="mb-2 mt-3 text-[17px] font-semibold text-tealDeep">
              {f.title}
            </h3>
            <p className="text-[13.5px] leading-relaxed text-inkSoft">
              {f.desc}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}