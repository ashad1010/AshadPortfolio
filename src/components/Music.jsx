import { useMemo } from 'react'
import WaveDivider from './WaveDivider.jsx'
import SignalChain from './SignalChain.jsx'

const COVERS = [
  {
    title: '"Same Old War" — Our Last Night',
    note: 'Rock cover, full FX chain build in Reaper.',
  },
  {
    title: '"La Copa de la Vida" — Ricky Martin (Spanglish Radio Edit)',
    note: 'A 2026 FIFA World Cup tribute cover — triple-layer doubling via ReaPitch.',
  },
  {
    title: '"Aitebar" — Vital Signs',
    note: 'Triple-vocal-layer technique.',
  },
  {
    title: '"Mera Bichra Yaar" — Strings',
    note: 'Performed live at the GTA Eid Festival Urdu singing competition.',
  },
]

const INFLUENCES = ['The Midnight', 'Michael Oakley', 'FM Attack', "Marvel83'", 'HOME', 'YOTA', 'SDH']

function EqBars({ count = 40 }) {
  // useMemo so the bars don't re-roll their random heights on every render
  const bars = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        h: 15 + Math.round(Math.random() * 80),
        delay: (Math.random() * 1.1).toFixed(2),
        amber: i % 2 === 0,
      })),
    [count]
  )
  return (
    <div className="flex h-9 flex-1 items-end gap-[3px]" aria-hidden="true">
      {bars.map((b, i) => (
        <span
          key={i}
          className="eqbar w-full rounded-full"
          style={{
            height: `${b.h}%`,
            background: b.amber ? 'rgba(255,170,60,.65)' : 'rgba(0,240,255,.5)',
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

export default function Music() {
  return (
    <section className="relative pt-28 pb-24 sm:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-16 select-none font-display text-[26vw] font-bold leading-none text-white/[0.02] sm:-right-16"
      >
        02
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <p className="kicker mb-6">
          <span className="text-amber/70">//</span> 02 — music
        </p>
        <h1 className="font-display text-[10vw] font-bold leading-[0.95] tracking-tight text-bone sm:text-6xl lg:text-7xl max-w-3xl">
          Vocalist first. <span className="text-amber glow-amber">Producer, always learning.</span>
        </h1>
        <p className="mt-6 max-w-prose2 font-body text-[15px] leading-relaxed text-haze">
          A heavy tenor building toward a dreamwave sound — bilingual vocals,
          weekly covers, and a slowly growing rig of virtual synths, a MIDI
          keyboard, and now a real guitar.
        </p>

        <div className="mt-10 flex items-center gap-4 rounded-md border border-silver/15 bg-void/50 px-5 py-4">
          <EqBars />
          <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-silver/50">
            dreamwave / retrowave
          </span>
        </div>

        <SignalChain />

        <WaveDivider label="ch.02" />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-5 flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-widest2 text-amber/80">
                select covers &amp; performances
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-silver/25 to-transparent" />
            </div>
            <ul className="space-y-3">
              {COVERS.map((c) => (
                <li key={c.title} className="rounded-md border border-silver/12 bg-void/50 p-4">
                  <p className="font-display text-[15px] font-semibold text-bone">{c.title}</p>
                  <p className="mt-1 text-[13px] text-haze">{c.note}</p>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[13.5px] leading-relaxed text-haze">
              Comfortable across English, Urdu, Spanish, Punjabi, and Japanese
              phonetics — range treated as much as an instrument as tone is.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="mb-5 flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-widest2 text-amber/80">
                reference points
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-silver/25 to-transparent" />
            </div>
            <div
              className="marquee-wrap overflow-hidden rounded-md border border-silver/15 bg-void/40 py-5"
              tabIndex={0}
              aria-label="Musical influences, scrolling"
            >
              <div className="marquee-track">
                {[0, 1].map((setIdx) => (
                  <div key={setIdx} className="flex items-center gap-6 px-6">
                    {INFLUENCES.map((name) => (
                      <span key={name} className="flex items-center gap-6">
                        <span className="font-display text-lg text-silver/60 whitespace-nowrap">
                          {name}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-silver/30" />
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-widest2 text-amber/80">
                  follow the music
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-silver/25 to-transparent" />
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                <a
                  href="#"
                  className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-haze transition-colors hover:text-cyan"
                >
                  <span className="text-silver/40 transition-colors group-hover:text-amber">◎</span>
                  Instagram
                </a>
                <a
                  href="#"
                  className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-haze transition-colors hover:text-cyan"
                >
                  <span className="text-silver/40 transition-colors group-hover:text-amber">♪</span>
                  TikTok
                </a>
                <a
                  href="#"
                  className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-haze transition-colors hover:text-cyan"
                >
                  <span className="text-silver/40 transition-colors group-hover:text-amber">~</span>
                  SoundCloud
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}