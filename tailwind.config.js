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
        magenta: '#ff007f',   // primary accent
        cyan: '#00f0ff',      // secondary accent
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
      },
      animation: {
        scan: 'scan 7s linear infinite',
        flicker: 'flicker 3.5s infinite',
        pulseGlow: 'pulseGlow 2.4s ease-in-out infinite',
        blink: 'blink 1.1s step-end infinite',
        driftGrid: 'driftGrid 8s linear infinite',
      },
    },
  },
  plugins: [],
}
