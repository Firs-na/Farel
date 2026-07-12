import QnA from "@/components/QnA";

const benefits = [
  "Membantu menurunkan persepsi nyeri dan kecemasan pada berbagai kondisi klinis.",
  "Menurunkan ketegangan otot dan mendukung respons relaksasi tubuh.",
  "Membantu memperbaiki suasana hati dan kualitas tidur.",
  "Memberi rasa kendali dan kenyamanan selama masa pemulihan.",
  "Mudah dikombinasikan dengan teknik relaksasi lain seperti nafas dalam.",
];

export default function TentangPage() {
  return (
    <section className="pb-24">
      <div className="mb-8">
        <h2 className="font-display text-[26px] font-semibold text-tealDeep">
          Tentang RuangDengar
        </h2>
        <p className="mt-1.5 max-w-[60ch] text-inkSoft">
          Mengapa website ini dibuat, dan apa yang bisa kamu harapkan
          darinya.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="mb-2.5 text-[17px] font-semibold text-tealDeep">
            Tujuan
          </h3>
          <p className="mb-5">
            RuangDengar dibuat untuk menyediakan media terapi musik yang
            mudah diakses lewat berbagai perangkat, dengan tampilan
            sederhana dan navigasi yang jelas — supaya siapa pun bisa
            menemukan musik yang sesuai kebutuhan relaksasinya tanpa harus
            berpindah-pindah aplikasi.
          </p>
          <h3 className="mb-2.5 text-[17px] font-semibold text-tealDeep">
            Untuk siapa
          </h3>
          <p>
            Ditujukan bagi siapa saja yang ingin meredakan stres, cemas,
            atau nyeri ringan melalui musik — termasuk pasien yang sedang
            menjalani pemulihan, dengan pendampingan tenaga kesehatan bila
            diperlukan.
          </p>
          <div className="mt-5.5 rounded-r-xl border-l-[3px] border-coral bg-surfaceSoft px-4.5 py-4 text-[13px] text-inkSoft">
            RuangDengar adalah alat pendukung relaksasi, bukan pengganti
            diagnosis, pengobatan, atau saran medis profesional.
          </div>
        </div>

        <div>
          <h3 className="mb-3.5 text-[17px] font-semibold text-tealDeep">
            Manfaat terapi musik
          </h3>
          <ul className="flex flex-col gap-3.5">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-inkSoft">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-sage" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14">
        <h3 className="mb-1 text-[17px] font-semibold text-tealDeep">
          Pertanyaan yang sering ditanyakan
        </h3>
        <p className="mb-5 text-sm text-inkSoft">
          Klik pertanyaan untuk melihat jawabannya.
        </p>
        <QnA />
      </div>
    </section>
  );
}
