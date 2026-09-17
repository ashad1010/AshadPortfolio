export default function Nav() {
  const links = [
    { label: 'about', href: '#about' },
    { label: 'systems', href: '#systems' },
    { label: 'signal', href: '#signal' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-silver/10 bg-ink/70 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
          {/* Wordmark */}
          <a
            href="#top"
            className="group flex items-baseline gap-1 font-mono text-sm tracking-wider text-bone"
          >
            <span className="text-magenta">[</span>
            <span className="font-display font-semibold tracking-widest">ASHAD</span>
            <span className="text-magenta">]</span>
            <span className="ml-1 hidden text-[10px] text-silver/60 sm:inline">_//</span>
          </a>

          {/* Anchors */}
          <div className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative font-mono text-[12px] uppercase tracking-widest text-haze transition-colors duration-200 hover:text-cyan"
              >
                <span className="text-silver/40">/</span>
                {l.label}
                <span className="absolute -bottom-1.5 left-2 h-px w-0 bg-cyan transition-all duration-300 group-hover:w-[calc(100%-0.5rem)]" />
              </a>
            ))}
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-haze sm:text-[11px]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulseGlow rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            <span className="hidden sm:inline">open to work</span>
            <span className="sm:hidden">open</span>
          </div>
        </nav>
      </div>
    </header>
  )
}
