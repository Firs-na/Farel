"use client";

import { useMemo, useState } from "react";
import { songs, genres } from "@/data/songs";
import SearchBox from "./SearchBox";
import GenreChips from "./GenreChips";
import SongCard from "./SongCard";
import { useAmbientAudio } from "@/lib/useAmbientAudio";

type Props = {
  initialGenre?: string;
};

export default function SongList({ initialGenre = "Semua" }: Props) {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState(initialGenre);
  const { playingId, toggle } = useAmbientAudio();

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return songs.filter((s) => {
      const matchGenre = genre === "Semua" || s.genre === genre;
      const matchSearch =
        !term ||
        s.title.toLowerCase().includes(term) ||
        s.genre.toLowerCase().includes(term);
      return matchGenre && matchSearch;
    });
  }, [search, genre]);

  return (
    <div>
      <div className="mb-5.5 flex flex-wrap gap-3">
        <SearchBox value={search} onChange={setSearch} />
      </div>
      <GenreChips genres={genres} active={genre} onChange={setGenre} />

      <div className="mt-5 grid gap-3.5 md:grid-cols-2">
        {filtered.map((song) => (
          <SongCard
            key={song.id}
            song={song}
            isPlaying={playingId === song.id}
            onToggle={toggle}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="rounded-xl2 border border-dashed border-line p-9 text-center text-sm text-inkSoft">
          Tidak ada lagu yang cocok. Coba kata kunci lain.
        </div>
      )}

      <p className="mt-4 text-xs text-inkSoft">
        Catatan: pemutaran di sini adalah nada ambient contoh yang dihasilkan
        langsung oleh browser, bukan rekaman lagu asli — hanya untuk simulasi
        rasa dari tiap genre.
      </p>
    </div>
  );
}
