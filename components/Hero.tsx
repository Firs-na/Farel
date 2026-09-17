import Link from "next/link";
import BreatheWave from "./BreatheWave";

export default function Hero() {
  return (
    <div className="grid items-start gap-12 pb-16 pt-4 md:grid-cols-[1.1fr_0.9fr] md:pb-20 md:pt-2">
      <div>
        <span className="mb-3.5 block text-[12.5px] font-semibold uppercase tracking-[0.14em] text-sage">
          Terapi musik · satu tempat, tanpa gangguan
        </span>
        <h1 className="mb-4.5 font-display text-4xl font-semibold leading-tight text-tealDeep md:text-[44px]">
          Waktu untuk <em className="italic text-sage">diam sejenak</em>,
          <br />
          dan waktu untuk mendengarkan.
        </h1>
        <p className="mb-7 max-w-[46ch] text-[16.5px] leading-relaxed text-inkSoft">
          RuangDengar mengumpulkan musik terapi, alat cek skala nyeri, dan
          referensi ilmiah dalam satu platform yang sederhana — supaya kamu
          bisa fokus merasa lebih tenang, bukan sibuk mencari.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
  href="/lagu"
  className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:shadow-lg"
>
  Dengarkan musik terapi →
</Link>
<Link
  href="/nrs"
  className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-tealDeep transition-colors hover:border-teal"
>
  Cek skala nyeri dulu
</Link>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-tealDeep via-teal to-sage p-8 text-white shadow-xl">
        <span className="font-mono text-xs opacity-75">
          SEKARANG · TARIK NAFAS
        </span>
        <BreatheWave />
        <p className="text-[13px] leading-relaxed opacity-85">
          Setiap batang bergerak mengikuti ritme nafas tenang — 4 hitungan
          menarik, 4 hitungan melepas. Coba ikuti sambil menunggu lagu
          dipilih.
        </p>
      </div>
    </div>
  );
}