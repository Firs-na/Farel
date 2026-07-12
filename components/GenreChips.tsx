"use client";

type Props = {
  genres: readonly string[];
  active: string;
  onChange: (genre: string) => void;
};

export default function GenreChips({ genres, active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {genres.map((g) => (
        <button
          key={g}
          onClick={() => onChange(g)}
          className={`rounded-full border px-4 py-2 text-[13px] font-semibold transition-colors ${
            active === g
              ? "border-tealDeep bg-tealDeep text-white"
              : "border-line bg-surface text-inkSoft hover:border-teal"
          }`}
        >
          {g}
        </button>
      ))}
    </div>
  );
}
