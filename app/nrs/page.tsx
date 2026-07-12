import NrsScale from "@/components/NrsScale";

export default function NrsPage() {
  return (
    <section className="pb-24">
      <div className="mb-6">
        <h2 className="font-display text-[26px] font-semibold text-tealDeep">
          Cek Skala Nyeri (NRS)
        </h2>
        <p className="mt-1.5 max-w-[60ch] text-inkSoft">
          Numeric Rating Scale membantu menggambarkan seberapa berat nyeri
          yang kamu rasakan, dari 0 (tidak nyeri) hingga 10 (nyeri paling
          berat yang bisa dibayangkan).
        </p>
      </div>
      <NrsScale />
    </section>
  );
}
