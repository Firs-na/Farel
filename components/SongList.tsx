"use client";

import { useEffect, useMemo, useState } from "react";
import { getLagu, API_URL, type Lagu } from "@/lib/api";
import SearchBox from "./SearchBox";
import GenreChips from "./GenreChips";
import SongCard from "./SongCard";
import { useAudioPlayer } from "@/lib/useAudioPlayer";

type Props = {
  initialGenre?: string;
};

export default function SongList({ initialGenre = "Semua" }: Props) {
  const [lagu, setLagu] = useState<Lagu[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState(initialGenre);
  const { playingId, toggle } = useAudioPlayer();

  useEffect(() => {
    getLagu().then((data) => {
      setLagu(data);
      setLoading(false);
    });
  }, []);

  const genres = useMemo(() => {
    const unique = Array.from(new Set(lagu.map((l) => l.genre)));
    return ["Semua", ...unique];
  }, [lagu]);

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return lagu.filter((s) => {
      const matchGenre = genre === "Semua" || s.genre === genre;
      const matchSearch =
        !term ||
        s.nama.toLowerCase().includes(term) ||
        s.genre.toLowerCase().includes(term);
      return matchGenre && matchSearch;
    });
  }, [search, genre, lagu]);

  if (loading) {
    return <p className="text-sm text-inkSoft">Memuat daftar lagu...</p>;
  }

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
            onToggle={() => toggle(song.id, `${API_URL}/storage/${song.file}`)}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="rounded-xl2 border border-dashed border-line p-9 text-center text-sm text-inkSoft">
          Tidak ada lagu yang cocok. Coba kata kunci lain.
        </div>
      )}
    </div>
  );
}