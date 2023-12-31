import { generateNavConfig } from '@/config/header'
import { generateLanguageConfig } from '@/config/language'
import { Locale, i18n } from '@/i18n-config'
import { ToastContainer } from 'react-toastify'
import { LanguageSwitcher } from '../../components/LanguageSwitcher'
import About from './interface/About'
import Contact from './interface/Contact'
import Footer from './interface/Footer'
import Header from './interface/Header'
import Projects from './interface/Projects'
import Skills from './interface/Skills'

type HomeProps = {
  params: { lang: Locale }
}

export default async function Home({ params: { lang } }: HomeProps) {
  const navConfig = await generateNavConfig({ lang })
  const languageConfig = await generateLanguageConfig({ lang })
  return (
    <>
      <Header navConfig={navConfig} />
      <About lang={lang} />
      <main className="mt-20 px-40 xl:px-20 sm:px-10">
        <Skills lang={lang} />
        <Projects lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer />
      <LanguageSwitcher.Root>
        {i18n.locales.map((locale, index) => (
          <LanguageSwitcher.Button
            key={locale}
            flag={languageConfig[locale].flag}
            alt={languageConfig[locale].alt}
            position={
              index === 0
                ? 'first'
                : index === i18n.locales.length - 1
                ? 'last'
                : undefined
            }
            locale={locale}
          >
            {languageConfig[locale].name}
          </LanguageSwitcher.Button>
        ))}
      </LanguageSwitcher.Root>
      <ToastContainer position="bottom-right" />
    </>
  )
}
