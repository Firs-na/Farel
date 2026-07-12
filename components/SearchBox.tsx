"use client";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBox({ value, onChange }: Props) {
  return (
    <div className="flex min-w-[220px] flex-1 items-center gap-2 rounded-full border border-line bg-surface px-4.5 py-2.5">
      <span className="font-mono text-[13px] text-inkSoft">⌕</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Cari judul lagu atau genre..."
        className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-inkSoft"
      />
    </div>
  );
}
