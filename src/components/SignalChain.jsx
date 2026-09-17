import { ChainNode, ChainConnector } from './Chain.jsx'

/* --- Icons --------------------------------------------------------
   Kept your original VoiceIcon and DawIcon (the waveform + the peak
   line), reused GuitarIcon as-is, and added one new icon (Release)
   for the fourth stage — publishing/broadcasting the work.
------------------------------------------------------------------- */
function VoiceIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M4 12v0M8 8v8M12 5v14M16 8v8M20 12v0" />
    </svg>
  )
}

function DawIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M3 12h2l2-6 3 12 3-9 2 5 2-3h4" />
    </svg>
  )
}

function GuitarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M15 3l3 3-2 2 1 1a4 4 0 1 1-4 4l-1-1-6 6a3 3 0 1 1-3-3l6-6" />
    </svg>
  )
}

function ReleaseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <circle cx="12" cy="19" r="1.4" fill="currentColor" stroke="none" />
      <path d="M8 15a5.5 5.5 0 0 1 8 0" />
      <path d="M4.5 11.5a11 11 0 0 1 15 0" />
    </svg>
  )
}

export default function SignalChain() {
  return (
    <div className="mt-16">
      <div className="mb-6 flex items-center gap-3">
        <span className="font-mono text-[11px] uppercase tracking-widest2 text-amber/80">
          signal chain
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-silver/25 to-transparent" />
      </div>

      <div className="flex flex-col gap-0 md:flex-row md:items-stretch">
        <ChainNode
          accent="amber"
          stage="voice"
          icon={<VoiceIcon />}
          title="Voice"
          sub="strongest"
          rec
          spec="Heavy tenor. The core of everything else — weekly covers on Instagram & TikTok."
        />
        <ChainConnector accent="amber" />
        <ChainNode
          accent="amber"
          stage="production"
          icon={<DawIcon />}
          title="Production"
          sub="learning"
          spec="Reaper + virtual synths and a MIDI keyboard — building sound design from the ground up."
        />
        <ChainConnector accent="amber" delay="1.1s" />
        <ChainNode
          accent="amber"
          stage="guitar"
          icon={<GuitarIcon />}
          title="Guitar"
          sub="learning"
          spec="Real strings, real hands — the newest addition to the rig."
        />
        <ChainConnector accent="amber" delay="2.2s" />
        <ChainNode
          accent="amber"
          stage="release"
          icon={<ReleaseIcon />}
          title="Release"
          sub="ongoing"
          spec="Covers now, original dreamwave singles as the next chapter."
        />
      </div>
    </div>
  )
}