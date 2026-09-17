"use client";

import type { Song } from "@/data/songs";

type Props = {
  song: Song;
  isPlaying: boolean;
  onToggle: () => void;
};

export default function SongCard({ song, isPlaying, onToggle }: Props) {
  return (
    <div
      className={`flex items-center gap-3.5 rounded-xl2 border p-4 transition-colors ${
        isPlaying ? "border-teal/40 bg-surface" : "border-line bg-surface"
      }`}
    >
      <button
        onClick={onToggle}
        aria-label={`Putar ${song.nama}`}
        className={`flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-full border border-line text-[15px] transition-colors ${
          isPlaying ? "bg-teal text-white" : "bg-surfaceSoft text-tealDeep"
        }`}
      >
        {isPlaying ? "❚❚" : "▶"}
      </button>

      <div className="min-w-0 flex-1">
        <div className="mb-0.5 truncate text-[14.5px] font-semibold text-tealDeep">
          {song.nama}
        </div>
        <span className="rounded-full bg-surfaceSoft px-2 py-0.5 font-mono text-[10.5px] text-teal">
          {song.genre}
        </span>
      </div>

      <div className="flex h-[18px] w-[30px] flex-shrink-0 items-center gap-[2px]" aria-hidden>
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={`w-[2.5px] rounded-sm bg-sage transition-all ${
              isPlaying ? "animate-breathe bg-teal" : ""
            }`}
            style={{
              height: isPlaying ? undefined : 4,
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}