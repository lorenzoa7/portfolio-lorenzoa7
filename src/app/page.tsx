import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Skills from './components/Skills'

export default function Home() {
  return (
    <>
      <About />
      <main className="px-40 mt-20 xl:px-20 sm:px-10">
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
