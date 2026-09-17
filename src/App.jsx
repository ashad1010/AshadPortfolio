import { useEffect, useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Career from './components/Career.jsx'
import Music from './components/Music.jsx'
import Hobbies from './components/Hobbies.jsx'
import Footer from './components/Footer.jsx'

const PAGES = {
  home: Hero,
  career: Career,
  music: Music,
  hobbies: Hobbies,
}

function getRouteFromHash() {
  const hash = window.location.hash.replace('#', '')
  return PAGES[hash] ? hash : 'home'
}

export default function App() {
  const [route, setRoute] = useState(getRouteFromHash)

  useEffect(() => {
    function onHashChange() {
      setRoute(getRouteFromHash())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const Page = PAGES[route]

  return (
    <div id="top" className="relative min-h-screen">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav route={route} />
      {/* key={route} forces a remount on navigation, which replays the
          pageIn animation each time — same "one orchestrated moment"
          treatment as the original hero load, just triggered per page. */}
      <main id="main" key={route} className="animate-pageIn">
        <Page />
      </main>
      <Footer />
    </div>
  )
}