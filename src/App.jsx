import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import WaveDivider from './components/WaveDivider.jsx'
import Projects from './components/Projects.jsx'
import SignalChain from './components/SignalChain.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div id="top" className="relative min-h-screen">
      <Nav />
      <main>
        <Hero />
        <WaveDivider label="ch.01" />
        <Projects />
        <WaveDivider label="ch.02" />
        <SignalChain />
      </main>
      <Footer />
    </div>
  )
}
