# ASHAD — Portfolio

Single-page portfolio site. Retrowave / cyber-tech aesthetic, built with **Vite + React + Tailwind CSS**.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build locally
```

## Where to add your real links

All external links are currently `href="#"` placeholders. Paste real URLs here:

- **Project links** — `src/components/Projects.jsx`
  Search for `href="#"` inside `ProjectCard` (the `Live Demo` and `GitHub Repo` anchors).
- **Footer socials** — `src/components/Footer.jsx`
  The `IconLink` components (`GitHub`, `Email`, `SoundCloud`).

## Structure

```
src/
  App.jsx                 # section composition
  index.css               # theme, atmosphere layers, signature animations
  components/
    Nav.jsx               # fixed HUD nav
    Hero.jsx              # §1 identity / about
    WaveDivider.jsx       # waveform section divider
    Projects.jsx          # §2 software cards + systems terminal
    SignalChain.jsx       # §3 animated signal-chain diagram (signature)
    Footer.jsx
```

Colors, fonts, and animation keyframes live in `tailwind.config.js` and `src/index.css`.
Fonts (Chakra Petch / Space Grotesk / JetBrains Mono) are loaded in `index.html`.
