/* --- Shared node + connector primitives --------------------------
   Same visual language as your original SignalChain.jsx (the .node
   class, the border-accent ternary, the wire + traveling dot), just
   pulled out so both Career's roadmap and Music's signal chain can
   use it. Accent is 'magenta' | 'cyan' | 'amber'.
------------------------------------------------------------------- */

const RING = {
  magenta: 'border-magenta/40',
  cyan: 'border-cyan/35',
  amber: 'border-amber/40',
}

const TEXT = {
  magenta: 'text-magenta',
  cyan: 'text-cyan',
  amber: 'text-amber',
}

const DOT = {
  magenta: 'bg-magenta shadow-[0_0_8px_rgba(255,0,127,0.9)]',
  cyan: 'bg-cyan shadow-[0_0_8px_rgba(0,240,255,0.9)]',
  amber: 'bg-amber shadow-[0_0_8px_rgba(255,170,60,0.9)]',
}

export function ChainNode({ stage, icon, title, sub, spec, accent = 'cyan', rec = false }) {
  return (
    <div className={`node ${RING[accent]} w-full md:flex-1`}>
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
        <span className={TEXT[accent]}>{icon}</span>
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

export function ChainConnector({ delay = '0s', accent = 'cyan' }) {
  const dot = DOT[accent]
  return (
    <div className="relative flex h-8 w-full items-center justify-center md:h-auto md:w-14 md:flex-none">
      {/* wire */}
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan/10 via-cyan/40 to-cyan/10 md:left-0 md:top-1/2 md:h-px md:w-full md:-translate-y-1/2 md:translate-x-0 md:bg-gradient-to-r md:from-cyan/10 md:via-cyan/40 md:to-cyan/10" />
      {/* traveling dot — vertical on mobile, horizontal on desktop */}
      <span
        className={`absolute h-1.5 w-1.5 rounded-full animate-travelV md:hidden ${dot}`}
        style={{ animationDelay: delay }}
      />
      <span
        className={`absolute h-1.5 w-1.5 rounded-full animate-travelH hidden md:block ${dot}`}
        style={{ animationDelay: delay }}
      />
    </div>
  )
}