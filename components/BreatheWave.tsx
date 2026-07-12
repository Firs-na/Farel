const heights = [22, 52, 88, 40, 70, 30, 60];
const delays = [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9];

export default function BreatheWave() {
  return (
    <div
      className="flex h-[140px] items-center justify-center gap-1.5"
      aria-hidden
    >
      {heights.map((h, i) => (
        <span
          key={i}
          className="block w-1.5 animate-breathe rounded-md bg-white/85"
          style={{ height: h, animationDelay: `${delays[i]}s` }}
        />
      ))}
    </div>
  );
}
