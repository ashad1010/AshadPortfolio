/* --- Icons ------------------------------------------------------- */
function MicIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 10a7 7 0 0 0 14 0M12 17v4M8 21h8" />
    </svg>
  )
}
function DawIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M3 12h2l2-6 3 12 3-9 2 5 2-3h4" />
    </svg>
  )
}
function OsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <rect x="9" y="9" width="6" height="6" rx="1" />
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
    </svg>
  )
}
function SynthIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <rect x="2" y="7" width="20" height="10" rx="1.5" />
      <path d="M6 7v6M9 7v6M13 7v6M16 7v6M19 7v6" />
    </svg>
  )
}
function GuitarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M15 3l3 3-2 2 1 1a4 4 0 1 1-4 4l-1-1-6 6a3 3 0 1 1-3-3l6-6" />
    </svg>
  )
}
function VoiceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M4 12v0M8 8v8M12 5v14M16 8v8M20 12v0" />
    </svg>
  )
}

/* --- Chain node -------------------------------------------------- */
function Node({ stage, icon, title, sub, spec, accent, rec }) {
  const ring = accent === 'magenta' ? 'border-magenta/40' : 'border-cyan/35'
  const ic = accent === 'magenta' ? 'text-magenta' : 'text-cyan'
  return (
    <div className={`node ${ring} w-full md:min-w-[188px] md:flex-1`}>
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest2 text-silver/45">
          {stage}
        </span>
        {rec && (
          <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-magenta">
            <span className="h-1.5 w-1.5 animate-pulseGlow rounded-full bg-magenta" />
            rec
          </span>
        )}
      </div>
      <div className="flex items-center gap-3">
        <span className={`${ic}`}>{icon}</span>
        <div>
          <p className="font-display text-[15px] font-semibold leading-tight text-bone">
            {title}
          </p>
          <p className="font-mono text-[11px] text-haze">{sub}</p>
        </div>
      </div>
      <p className="mt-3 border-t border-silver/12 pt-2.5 font-mono text-[10.5px] leading-relaxed text-silver/55">
        {spec}
      </p>
    </div>
  )
}

/* --- Connector (responsive wire + traveling pulse) --------------- */
function Connector({ delay = '0s' }) {
  return (
    <div className="relative flex h-10 w-full items-center justify-center md:h-auto md:w-16 md:flex-none">
      {/* wire */}
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan/10 via-cyan/40 to-cyan/10 md:left-0 md:top-1/2 md:h-px md:w-full md:-translate-y-1/2 md:translate-x-0 md:bg-gradient-to-r md:from-cyan/10 md:via-cyan/40 md:to-cyan/10" />
      {/* traveling dots */}
      <span className="flow-dot flow-dot-v md:hidden" style={{ animationDelay: delay }} />
      <span className="flow-dot flow-dot-h hidden md:block" style={{ animationDelay: delay }} />
    </div>
  )
}

/* --- Parallel track item ---------------------------------------- */
function TrackItem({ icon, tag, title, detail, status, statusColor }) {
  return (
    <div className="group flex items-start gap-4 rounded-md border border-silver/12 bg-void/50 p-4 transition-all duration-300 hover:border-cyan/35 hover:bg-surface/50">
      <span className="mt-0.5 text-cyan/80 transition-colors group-hover:text-cyan">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="font-mono text-[10px] uppercase tracking-widest2 text-magenta/70">
            {tag}
          </span>
          <span className="font-display text-[15px] font-semibold text-bone">
            {title}
          </span>
        </div>
        <p className="mt-1.5 font-body text-[13.5px] leading-relaxed text-haze">
          {detail}
        </p>
      </div>
      <span
        className={`shrink-0 whitespace-nowrap font-mono text-[9.5px] uppercase tracking-widest ${statusColor}`}
      >
        ● {status}
      </span>
    </div>
  )
}

export default function SignalChain() {
  return (
    <section id="signal" className="relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header — right-aligned rhythm shift */}
        <div className="mb-14 md:text-right">
          <p className="kicker mb-3">
            <span className="text-magenta/70">//</span> 03 — sound systems
          </p>
          <h3 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-bone sm:text-5xl">
            Signal Chain <span className="text-cyan glow-cyan">&amp;</span>
            <br className="hidden sm:block" /> Sound Architecture
          </h3>
          <p className="mt-4 font-mono text-[11px] leading-relaxed text-silver/50 md:ml-auto md:max-w-sm">
            the audio side, mapped as a stack — capture → process → host, with
            instruments running a parallel line.
          </p>
        </div>

        {/* Primary signal path */}
        <div className="rounded-lg border border-silver/12 bg-ink/40 p-5 backdrop-blur-sm sm:p-8">
          <span className="mb-6 inline-block font-mono text-[10px] uppercase tracking-widest2 text-cyan/70">
            [ primary path ] — recording chain
          </span>

          <div className="flex flex-col items-stretch md:flex-row md:items-center">
            <Node
              stage="src / 00"
              icon={<MicIcon />}
              title="RØDE NT1 5th Gen"
              sub="condenser mic"
              spec="large-diaphragm capture · low self-noise · signal origin"
              accent="magenta"
              rec
            />
            <Connector delay="0s" />
            <Node
              stage="proc / 01"
              icon={<DawIcon />}
              title="Reaper"
              sub="DAW"
              spec="tracking + mixing · routing, comps, edits"
              accent="cyan"
            />
            <Connector delay="0.9s" />
            <Node
              stage="host / 02"
              icon={<OsIcon />}
              title="Pop!_OS"
              sub="host env"
              spec="linux audio environment · daily driver"
              accent="cyan"
            />
          </div>
        </div>

        {/* Branch → parallel track */}
        <div className="relative mt-4 pl-5 sm:pl-8">
          {/* L-branch glyph */}
          <span
            aria-hidden="true"
            className="absolute left-5 top-0 h-8 w-px bg-gradient-to-b from-cyan/40 to-transparent sm:left-8"
          />
          <span
            aria-hidden="true"
            className="absolute left-5 top-8 font-mono text-[11px] text-cyan/50 sm:left-8"
          >
            └─
          </span>

          <div className="pt-6">
            <span className="mb-5 inline-block font-mono text-[10px] uppercase tracking-widest2 text-cyan/70">
              [ parallel line ] — instrument &amp; synthesis
            </span>

            <div className="grid grid-cols-1 gap-3">
              <TrackItem
                icon={<GuitarIcon />}
                tag="strings"
                title="Guitar"
                detail="Fundamentals in progress — open chords (E, Em, A, D) and basic scales."
                status="early-stage"
                statusColor="text-magenta/70"
              />
              <TrackItem
                icon={<SynthIcon />}
                tag="synthesis"
                title="Vital"
                detail="Synthwave / dreamwave sound design, worked through a structured learning plan."
                status="learning"
                statusColor="text-cyan/70"
              />
              <TrackItem
                icon={<VoiceIcon />}
                tag="vocals"
                title="Voice"
                detail="Singing across two languages — English and Urdu."
                status="active"
                statusColor="text-cyan/80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
