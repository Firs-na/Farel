import SongList from "@/components/SongList";

export default function LaguPage({
  searchParams,
}: {
  searchParams: { genre?: string };
}) {
  const initialGenre = searchParams.genre ?? "Semua";

  return (
    <section>
      <div className="mb-8">
        <h2 className="font-display text-[26px] font-semibold text-tealDeep">
          Daftar Lagu Terapi
        </h2>
        <p className="mt-1.5 max-w-[60ch] text-inkSoft">
          Klik tombol putar untuk mendengar lagu terapi sesuai genre yang
          kamu suka.
        </p>
      </div>
      <SongList initialGenre={initialGenre} />
    </section>
  );
}