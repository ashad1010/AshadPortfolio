/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#05020a',       // deepest background
        space: '#0a0512',     // secondary background
        void: '#100a1c',      // raised card surface
        surface: '#160e26',   // hover surface
        magenta: '#ff007f',   // primary accent — career
        cyan: '#00f0ff',      // secondary accent — systems / tech
        amber: '#ffaa3c',     // NEW — tertiary accent, used only in Music
        silver: '#8a8a9e',    // hairlines / muted
        haze: '#9a94ad',      // muted body text
        bone: '#e8e6f0',      // primary text
      },
      fontFamily: {
        display: ['"Chakra Petch"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      maxWidth: {
        prose2: '62ch',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        flicker: {
          '0%, 19%, 21%, 23%, 100%': { opacity: '1' },
          '20%, 22%': { opacity: '0.72' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '1' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        travel: {
          '0%': { offsetDistance: '0%', opacity: '0' },
          '8%': { opacity: '1' },
          '92%': { opacity: '1' },
          '100%': { offsetDistance: '100%', opacity: '0' },
        },
        eqbar: {
          '0%, 100%': { transform: 'scaleY(0.28)' },
          '50%': { transform: 'scaleY(1)' },
        },
        driftGrid: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 44px' },
        },
        /* NEW — page-switch reveal, plays once per nav change */
        pageIn: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        /* NEW — signal-chain / roadmap connector dots (simpler + more reliable
           than the offset-path-based `travel` keyframe above) */
        travelH: {
          '0%': { left: '0%', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { left: '100%', opacity: '0' },
        },
        travelV: {
          '0%': { top: '0%', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { top: '100%', opacity: '0' },
        },
        /* NEW — influences ticker on the Music page */
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scan: 'scan 7s linear infinite',
        flicker: 'flicker 3.5s infinite',
        pulseGlow: 'pulseGlow 2.4s ease-in-out infinite',
        blink: 'blink 1.1s step-end infinite',
        driftGrid: 'driftGrid 8s linear infinite',
        pageIn: 'pageIn 0.5s ease both',
        travelH: 'travelH 3.4s linear infinite',
        travelV: 'travelV 3.4s linear infinite',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}