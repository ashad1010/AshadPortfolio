import WaveDivider from './WaveDivider.jsx'
import Projects from './Projects.jsx'
import { ChainNode, ChainConnector } from './Chain.jsx'

function CertIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <circle cx="12" cy="9" r="6" />
      <path d="M9 14.5L7 22l5-3 5 3-2-7.5" />
    </svg>
  )
}
function BuildIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2z" />
    </svg>
  )
}
function ShipIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M22 2L11 13" />
      <path d="M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  )
}

const CURRENT = [
  'Python fundamentals — CS50P, daily practice',
  'AWS AI Practitioner certification — in progress',
  'Weekly applications + networking outreach, direct & Wellfound',
  'Growing a mentor roster on ADPList',
]

export default function Career() {
  return (
    <section className="relative pt-28 pb-24 sm:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-16 select-none font-display text-[26vw] font-bold leading-none text-white/[0.02] sm:-right-16"
      >
        01
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <p className="kicker mb-6">
          <span className="text-magenta/70">//</span> 01 — career
        </p>
        <h1 className="font-display text-[10vw] font-bold leading-[0.95] tracking-tight text-bone sm:text-6xl lg:text-7xl max-w-3xl">
          Full-stack engineer, <span className="text-magenta glow-magenta">pivoting into AI.</span>
        </h1>
        <p className="mt-6 max-w-prose2 font-body text-[15px] leading-relaxed text-haze">
          A psychology minor most engineering teams don't have — useful in
          healthtech and edtech, where the hardest bugs are human. Real
          full-stack experience (React, Supabase, Node.js) through healthtech
          work with Indus Health Network, and founding Adux Technology Inc.
          Now aiming at AI Support, AI Solutions, and Junior AI Engineer roles
          at small, 20–200 person AI companies.
        </p>

        {/* Pivot roadmap */}
        <div className="mt-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-widest2 text-magenta/70">
              pivot roadmap
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-silver/25 to-transparent" />
          </div>
          <div className="flex flex-col gap-0 md:flex-row md:items-stretch">
            <ChainNode
              accent="magenta"
              stage="stage 01"
              icon={<CertIcon />}
              title="Foundations"
              sub="active"
              rec
              spec="CS50P (Python) + AWS AI Practitioner certification, in progress on Skill Builder."
            />
            <ChainConnector accent="magenta" />
            <ChainNode
              accent="cyan"
              stage="stage 02"
              icon={<BuildIcon />}
              title="Build"
              sub="target"
              spec="A deployed AI project with a psychology angle — by month four."
            />
            <ChainConnector accent="cyan" delay="1.1s" />
            <ChainNode
              accent="cyan"
              stage="stage 03"
              icon={<ShipIcon />}
              title="Ship"
              sub="target"
              spec="40–50 targeted applications across months five and six — direct + Wellfound, real networking."
            />
          </div>
        </div>

        <WaveDivider label="ch.01" />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="mb-5 flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-widest2 text-cyan/70">
                currently
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-silver/25 to-transparent" />
            </div>
            <ul className="space-y-3">
              {CURRENT.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-md border border-silver/12 bg-void/50 p-3.5 text-[13.5px] text-haze"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <Projects />
          </div>
        </div>
      </div>
    </section>
  )
}