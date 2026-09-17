import PixelIcon from './PixelIcon.jsx'

const RIGS = [
  {
    id: 'node/00',
    name: 'LEGION GO S',
    note: 'Windows handheld — emulation & Proton compatibility testbed',
    icon: 'gamepad',
  },
  {
    id: 'node/01',
    name: 'RETROID POCKET FLIP 2',
    note: 'Dedicated retro-emulation handheld',
    icon: 'gamepad',
  },
  {
    id: 'node/02',
    name: 'POP!_OS LAPTOP',
    note: 'Daily-driver Linux box — the reliable one',
    icon: 'laptop',
  },
  {
    id: 'node/03',
    name: 'SMART HOME',
    note: 'DIY home-automation — always one sensor from "done"',
    icon: 'house',
  },
]

export default function Hobbies() {
  return (
    <section className="relative pt-28 pb-24 sm:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-16 select-none font-display text-[26vw] font-bold leading-none text-white/[0.02] sm:-right-16"
      >
        03
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <p className="kicker mb-6">
          <span className="text-cyan/70">//</span> 03 — hobbies
        </p>
        <h1 className="font-display text-[10vw] font-bold leading-[0.95] tracking-tight text-bone sm:text-6xl lg:text-7xl max-w-3xl">
          Off <span className="text-cyan glow-cyan">the clock.</span>
        </h1>
        <p className="mt-6 max-w-prose2 font-body text-[15px] leading-relaxed text-haze">
          Where the debugging brain goes when it isn't debugging anything in
          particular — handhelds, home Linux boxes, and a smart home that's
          perpetually mid-upgrade.
        </p>

        <div className="mt-14 terminal">
          <div className="terminal-bar">
            <span className="term-dot bg-magenta" />
            <span className="term-dot bg-cyan" />
            <span className="term-dot bg-silver/60" />
            <span className="ml-3 text-[11px] tracking-wide text-silver/60">
              ashad@nitro: ~/rigs
            </span>
          </div>

          <div className="space-y-4 px-5 py-6 text-haze sm:px-6">
            <p>
              <span className="text-cyan">$</span> ./inventory --devices --verbose
            </p>
            <p className="text-silver/50">[ok] scanning local hardware ... 4 nodes online</p>
            <p className="text-silver/25">──────────────────────────────────────────────</p>

            <div className="grid grid-cols-1 gap-5 pt-2 sm:grid-cols-2">
              {RIGS.map((rig) => (
                <div
                  key={rig.id}
                  className="flex items-start gap-3 rounded-md border border-silver/12 bg-white/[0.02] p-3.5"
                >
                  <PixelIcon name={rig.icon} className="shrink-0 text-cyan" />
                  <div>
                    <p className="text-bone">
                      <span className="text-magenta">{rig.id}</span> {rig.name}
                    </p>
                    <p className="mt-0.5 text-[11px] text-silver/55">{rig.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="pt-2 text-silver/25">──────────────────────────────────────────────</p>
            <p className="pt-1">
              <span className="text-cyan">$</span> ./run stalker-anomaly --platform legion-go-s
            </p>
            <p className="text-magenta/80">[fail] AMD / Proton compatibility — no dice</p>
            <p className="pt-1">
              <span className="text-cyan">$</span> ./run stalker-anomaly --platform pop-os
            </p>
            <p className="text-cyan/80">[ok] running clean</p>
            <p className="pt-2">
              <span className="inline-block h-3 w-1.5 animate-blink bg-cyan/70" />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}