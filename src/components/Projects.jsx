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

function ProjectCard({ id, title, kind, blurb, tags, className = '' }) {
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

export default function Projects() {
  return (
    <div>
      <div className="mb-5 flex items-center gap-3">
        <span className="font-mono text-[11px] uppercase tracking-widest2 text-magenta/70">
          projects
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-silver/25 to-transparent" />
      </div>

      <div className="space-y-5">
        <ProjectCard
          id="P-01"
          kind="AI · Full-stack"
          title="Agentic Productivity Assistant"
          blurb="An AI-powered productivity assistant — React and Vite on the front end, Netlify Functions on the back, with the OpenAI API driving an agentic layer that plans, prioritizes, and acts on tasks from a single interface."
          tags={['React', 'Vite', 'Netlify Functions', 'OpenAI API', 'Node.js']}
        />
        <ProjectCard
          id="P-02"
          kind="Healthtech"
          title="Locus — Indus Health Chapter Dashboard"
          blurb="A full-stack chapter-management dashboard built with Indus Health Network — React on the front end, Supabase and Node.js underneath, handling real data views, auth, and clinical workflows for real users."
          tags={['React', 'Supabase', 'Node.js', 'PostgreSQL']}
        />
        <ProjectCard
          id="P-03"
          kind="AI · Machine Learning"
          title="TSLA Predictor"
          blurb="A deployed stock-prediction agent for TSLA — a hand-written Random Forest model built from scratch in JavaScript, live on Netlify."
          tags={['JavaScript', 'Random Forest', 'Machine Learning', 'Netlify']}
        />

        <p className="font-mono text-[12px] text-silver/50">
          + also shipped: <span className="text-haze">givengrow.ca</span> — a
          WordPress site for GiveNGrow, a nonprofit consulting company.
        </p>
      </div>
    </div>
  )
}