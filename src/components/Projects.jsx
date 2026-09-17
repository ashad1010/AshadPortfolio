function Arrow() {
  return (
    <svg
      className="arrow"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17L17 7M17 7H9M17 7V15" />
    </svg>
  )
}

function ProjectCard({ id, title, kind, blurb, tags, className }) {
  return (
    <article className={`card group p-6 sm:p-7 ${className}`}>
      <div className="mb-5 flex items-start justify-between gap-4">
        <span className="font-mono text-[11px] tracking-widest2 text-magenta/80">
          {id}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-silver/45">
          {kind}
        </span>
      </div>

      <h4 className="font-display text-2xl font-semibold leading-tight text-bone transition-colors duration-300 group-hover:text-magenta sm:text-[1.75rem]">
        {title}
      </h4>

      <p className="mt-3 max-w-prose font-body text-[14.5px] leading-relaxed text-haze">
        {blurb}
      </p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {tags.map((t) => (
          <li key={t} className="tag">
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-7 flex flex-wrap items-center gap-6 border-t border-silver/12 pt-5">
        <a href="#" className="link-cta">
          Live Demo <Arrow />
        </a>
        <a href="#" className="link-cta">
          GitHub Repo <Arrow />
        </a>
      </div>
    </article>
  )
}

function Terminal() {
  return (
    <div className="terminal">
      <div className="terminal-bar">
        <span className="term-dot bg-magenta" />
        <span className="term-dot bg-cyan" />
        <span className="term-dot bg-silver/60" />
        <span className="ml-3 text-[11px] tracking-wide text-silver/60">
          ashad@nitro: ~/rigs
        </span>
      </div>

      <div className="space-y-1.5 px-5 py-5 text-[12.5px] text-haze sm:px-6">
        <p>
          <span className="text-cyan">$</span> ./inventory --devices --verbose
        </p>
        <p className="text-silver/50">
          [ok] scanning local hardware ... 2 nodes online
        </p>
        <p className="text-silver/25">
          ──────────────────────────────────────────────
        </p>

        <p className="pt-1">
          <span className="text-magenta">&gt; node/00</span>{' '}
          <span className="text-bone">LEGION GO S</span>
        </p>
        <p className="pl-6">
          <span className="text-silver/50">os&nbsp;&nbsp;&nbsp;</span> ::{' '}
          <span className="text-cyan">SteamOS</span>{' '}
          <span className="text-silver/40">(handheld)</span>
        </p>
        <p className="pl-6">
          <span className="text-silver/50">role&nbsp;</span> :: portable gaming
          rig
        </p>
        <p className="pl-6">
          <span className="text-silver/50">state</span> :: tuned · proton layer
          active
        </p>

        <p className="pt-2">
          <span className="text-magenta">&gt; node/01</span>{' '}
          <span className="text-bone">ACER NITRO 5</span>{' '}
          <span className="text-cyan/70">← main rig</span>
        </p>
        <p className="pl-6">
          <span className="text-silver/50">os&nbsp;&nbsp;&nbsp;</span> ::{' '}
          <span className="text-cyan">Pop!_OS</span>
        </p>
        <p className="pl-6">
          <span className="text-silver/50">role&nbsp;</span> :: daily-driver
          linux env
        </p>
        <p className="pl-6">
          <span className="text-silver/50">state</span> :: dev + audio workloads
        </p>

        <p className="pt-3 text-silver/60">
          [note] comfortable across OS boundaries — kernel-level
        </p>
        <p className="text-silver/60">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;troubleshooting, driver wrangling,
          Linux fluency.
        </p>
        <p className="pt-1">
          <span className="text-cyan">$</span>{' '}
          <span className="cursor text-bone">▊</span>
        </p>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="systems" className="relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="kicker mb-3">
              <span className="text-magenta/70">//</span> 02 — engineering &amp;
              systems
            </p>
            <h3 className="font-display text-4xl font-bold tracking-tight text-bone sm:text-5xl">
              Projects <span className="text-silver/40">&amp;</span> Tinkering
            </h3>
          </div>
          <p className="max-w-xs font-mono text-[11px] leading-relaxed text-silver/50">
            what I&apos;ve shipped, and what I take apart for fun.
          </p>
        </div>

        {/* Part A — Software (staggered, asymmetric) */}
        <div className="mb-6">
          <span className="font-mono text-[11px] uppercase tracking-widest2 text-cyan/70">
            part.a / software
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <ProjectCard
            className="lg:col-span-7"
            id="P-01"
            kind="AI · Full-stack"
            title="agentic-productivity-assistant"
            blurb="An AI-powered productivity assistant. React + Vite front end wired to Netlify Functions on the back, with OpenAI integration driving the agentic layer — plan, prioritize, and act on tasks from a single interface."
            tags={['React', 'Vite', 'Netlify Functions', 'OpenAI API', 'Node.js']}
          />
          <ProjectCard
            className="lg:col-span-5 lg:mt-16"
            id="P-02"
            kind="Healthtech"
            title="Indus Health — Dashboard"
            blurb="Full-stack healthtech dashboard built with Indus Health Network. React front end on a Supabase + Node.js backend — data views, auth, and clinical workflows for real users."
            tags={['React', 'Supabase', 'Node.js', 'PostgreSQL']}
          />
        </div>

        {/* Part B — Systems tinkering (terminal aesthetic) */}
        <div className="mt-20">
          <div className="mb-6 flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-widest2 text-cyan/70">
              part.b / systems tinkering
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-silver/25 to-transparent" />
          </div>
          <Terminal />
        </div>
      </div>
    </section>
  )
}
