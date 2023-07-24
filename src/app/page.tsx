import Header from './components/Header'
import Skills from './components/Skills'

export default function Home() {
  return (
    <>
      <Header />
      <main className="px-40 mt-20">
        <Skills />
      </main>
      <footer></footer>
    </>
  )
}
