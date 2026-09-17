function IconLink({ label, children }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-haze transition-colors duration-200 hover:text-cyan"
    >
      <span className="text-silver/40 transition-colors group-hover:text-magenta">
        {children}
      </span>
      {label}
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="relative mt-4 border-t border-silver/12">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-mono text-[11px] text-silver/50">
              <span className="text-cyan">ashad@nitro</span>:~$ echo{' '}
              <span className="text-haze">&quot;let&apos;s build something&quot;</span>
            </p>
            <p className="mt-2 font-mono text-[10px] tracking-wide text-silver/35">
              // designed &amp; built by Ashad — retrowave / cyber-tech
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <IconLink label="GitHub">{'{ }'}</IconLink>
            <IconLink label="LinkedIn">in</IconLink>
            <IconLink label="Email">@</IconLink>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-3 border-t border-silver/10 pt-5">
          <span className="h-1.5 w-1.5 animate-pulseGlow rounded-full bg-magenta" />
          <p className="font-mono text-[10px] tracking-widest text-silver/35">
            SESSION ACTIVE · {new Date().getFullYear()} · HAMILTON, ON
          </p>
        </div>
      </div>
    </footer>
  )
}