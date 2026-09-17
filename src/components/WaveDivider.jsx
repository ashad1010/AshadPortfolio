// Deterministic "printed audio clip" waveform used as a section divider.
const HEIGHTS = [
  8, 14, 22, 12, 30, 46, 26, 18, 38, 58, 34, 20, 12, 24, 44, 68,
  40, 22, 14, 28, 52, 74, 48, 30, 18, 10, 20, 36, 60, 82, 54, 32,
  22, 40, 64, 88, 62, 38, 24, 14, 26, 48, 70, 50, 30, 18, 34, 56,
  36, 20, 12, 22, 42, 66, 44, 26, 16, 28, 50, 30, 18, 12, 20, 10,
]

export default function WaveDivider({ label }) {
  return (
    <div
      className="relative mx-auto flex max-w-6xl items-center gap-4 px-5 py-10 sm:px-8"
      aria-hidden="true"
    >
      <span className="hidden shrink-0 font-mono text-[10px] uppercase tracking-widest2 text-silver/40 sm:inline">
        {label ?? 'ch.01'}
      </span>
      <div className="flex h-14 flex-1 items-center gap-[2px] overflow-hidden opacity-70">
        {HEIGHTS.map((h, i) => {
          const t = i / (HEIGHTS.length - 1)
          // magenta on the left → cyan on the right
          const color = `rgba(${Math.round(255 * (1 - t))}, ${Math.round(
            120 * t + 20
          )}, ${Math.round(127 + 128 * t)}, ${0.28 + (h / 88) * 0.5})`
          return (
            <span
              key={i}
              className="w-full rounded-full"
              style={{ height: `${h}%`, background: color }}
            />
          )
        })}
      </div>
      <span className="hidden shrink-0 font-mono text-[10px] uppercase tracking-widest2 text-silver/40 sm:inline">
        —//
      </span>
    </div>
  )
}
