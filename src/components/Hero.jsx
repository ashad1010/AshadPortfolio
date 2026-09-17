const MINI_WAVE = [
  4, 9, 6, 14, 22, 12, 8, 18, 30, 16, 10, 6, 12, 24, 40, 20, 12, 8,
  16, 28, 48, 26, 14, 9, 6, 11, 20, 34, 18, 10, 7, 13, 22, 12, 8, 5,
  10, 18, 9, 6, 12, 7, 4,
]

function MiniWave() {
  return (
    <div className="flex h-9 w-full max-w-md items-center gap-[3px]" aria-hidden="true">
      {MINI_WAVE.map((h, i) => (
        <span
          key={i}
          className="w-full rounded-full bg-gradient-to-b from-magenta/70 to-cyan/50"
          style={{ height: `${h}%`, opacity: 0.35 + (h / 48) * 0.55 }}
        />
      ))}
    </div>
  )
}

const SPEC = [
  ['loc', 'Hamilton, Ontario'],
  ['focus', 'AI Solutions · Support Eng'],
  ['stack', 'React · Node · Supabase'],
]

export default function Hero() {
  return (
    <section
      id="about"
      className="scanlines scan-sweep relative overflow-hidden pt-32 sm:pt-40"
    >
      {/* Atmosphere: faint grid, hero only */}
      <div className="grid-atmos pointer-events-none absolute inset-0 animate-driftGrid" />

      {/* Bleed glyph — breaks the grid off the top-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-4 select-none font-display text-[26vw] font-bold leading-none text-white/[0.02] sm:-right-16 sm:top-6"
      >
        01
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-8 sm:px-8">
        <p className="kicker mb-6">
          <span className="text-magenta/70">//</span> 01 — identity
        </p>

        {/* Name block */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h1 className="font-display text-[19vw] font-bold leading-[0.82] tracking-tight text-bone sm:text-[10rem] lg:text-[11rem]">
              <span className="glow-magenta">ASHAD</span>
              <span className="glow-cyan text-cyan">.</span>
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="font-mono text-sm text-silver">
                <span className="text-silver/50">/</span> Ush-Hud
              </span>
              <MiniWave />
            </div>

            <h2 className="mt-7 font-display text-xl font-medium tracking-wide sm:text-2xl">
              <span className="text-bone">Software Engineer</span>
              <span className="mx-2 text-magenta glow-soft">//</span>
              <span className="text-cyan">Audio Producer</span>
            </h2>
          </div>

          {/* About column — offset lower, distinct panel */}
          <div className="relative lg:col-span-5 lg:mt-6">
            <div className="relative rounded-md border-l-2 border-magenta/50 bg-void/40 py-5 pl-6 pr-4 backdrop-blur-sm">
              <span className="absolute -top-2.5 left-5 bg-ink px-2 font-mono text-[10px] uppercase tracking-widest2 text-cyan/70">
                // about
              </span>

              <div className="space-y-4 font-body text-[15px] leading-relaxed text-haze">
                <p>
                  Software Engineering (Honours) grad out of{' '}
                  <span className="text-bone">Ontario Tech University</span>, based
                  in Hamilton. Currently pivoting into{' '}
                  <span className="text-bone">
                    AI support, solutions, and junior AI engineering
                  </span>{' '}
                  at small, focused AI companies.
                </p>
                <p>
                  Real full-stack under the hood —{' '}
                  <span className="text-bone">React, Supabase, Node.js</span> —
                  shipped through healthtech work with Indus Health Network.
                  Founder of{' '}
                  <span className="text-bone">Adux Technology Inc.</span>
                </p>
                <p>
                  A <span className="text-bone">psychology minor</span> sits behind
                  all of it: I build for the human on the other side of the system.
                  Off the clock — handheld PCs, retro emulation, and synthwave.
                </p>
              </div>
            </div>

            {/* HUD spec strip */}
            <dl className="mt-4 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-silver/15 bg-silver/[0.08] sm:grid-cols-3">
              {SPEC.map(([k, v]) => (
                <div key={k} className="bg-ink/80 px-3.5 py-2.5">
                  <dt className="font-mono text-[9px] uppercase tracking-widest2 text-silver/50">
                    {k}
                  </dt>
                  <dd className="mt-0.5 font-mono text-[11px] text-cyan/90">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
