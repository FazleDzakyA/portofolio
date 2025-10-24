import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  )
}
