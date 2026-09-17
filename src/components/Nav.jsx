const LINKS = [
  { key: 'home', label: 'home' },
  { key: 'career', label: 'career' },
  { key: 'music', label: 'music' },
  { key: 'hobbies', label: 'hobbies' },
]

export default function Nav({ route }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-silver/10 bg-ink/70 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-8 sm:py-3.5">
          {/* Wordmark */}
          <a
            href="#home"
            className="group flex items-baseline gap-1 font-mono text-sm tracking-wider text-bone shrink-0"
          >
            <span className="text-magenta">[</span>
            <span className="font-display font-semibold tracking-widest">ASHAD</span>
            <span className="text-magenta">]</span>
          </a>

          {/* Routes */}
          <div className="flex items-center gap-3 sm:gap-7">
            {LINKS.map((l) => {
              const active = route === l.key
              return (
                <a
                  key={l.key}
                  href={`#${l.key}`}
                  aria-current={active ? 'page' : undefined}
                  className={`group relative font-mono text-[11px] uppercase tracking-widest transition-colors duration-200 ${
                    active ? 'text-bone' : 'text-haze hover:text-cyan'
                  }`}
                >
                  <span className="text-silver/40">/</span>
                  {l.label}
                  <span
                    className={`absolute -bottom-1.5 left-2 h-px transition-all duration-300 ${
                      active
                        ? 'w-[calc(100%-0.5rem)] bg-magenta'
                        : 'w-0 bg-cyan group-hover:w-[calc(100%-0.5rem)]'
                    }`}
                  />
                </a>
              )
            })}
          </div>

          {/* Status */}
          <div className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-haze sm:flex shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulseGlow rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            open to work
          </div>
        </nav>
      </div>
    </header>
  )
}