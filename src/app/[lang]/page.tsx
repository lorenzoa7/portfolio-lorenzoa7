import { Locale } from '@/i18n-config'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Skills from './components/Skills'

type HomeProps = {
  params: { lang: Locale }
}

export default function Home({ params: { lang } }: HomeProps) {
  return (
    <>
      <About lang={lang} />
      <main className="px-40 mt-20 xl:px-20 sm:px-10">
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
