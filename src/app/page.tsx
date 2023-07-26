import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'

export default function Home() {
  return (
    <>
      <Header />
      <main className="px-40 mt-20">
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
