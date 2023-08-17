import Header from '@/app/[lang]/components/Header'
import { LanguageSwitcher } from '@/app/[lang]/components/LanguageSwitcher'
import '@/app/globals.css'
import { generateNavConfig } from '@/config/header'
import { generateLanguageConfig } from '@/config/language'
import { siteConfig } from '@/config/site'
import { Locale, i18n } from '@/i18n-config'
import { fontMono } from '@/lib/fonts'
import type { Metadata } from 'next'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { twMerge } from 'tailwind-merge'

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
}

type Params = { lang: Locale }

type RootLayoutProps = {
  children: React.ReactNode
  params: Params
}

export default async function RootLayout({
  children,
  params: { lang },
}: RootLayoutProps) {
  const navConfig = await generateNavConfig({ lang })
  const languageConfig = await generateLanguageConfig({ lang })
  return (
    <html lang="en" className="!scroll-smooth scroll-py-28">
      <body
        className={twMerge(
          'bg-neutral-200 text-neutral-700 mx-auto min-h-screen antialiased font-mono overflow-x-hidden',
          fontMono.variable,
        )}
      >
        <Header navConfig={navConfig} />
        {children}
        <ToastContainer position="bottom-right" />
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
      </body>
    </html>
  )
}
