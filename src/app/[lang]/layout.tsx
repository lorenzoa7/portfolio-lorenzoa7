import Header from '@/app/[lang]/components/Header'
import { LanguageSwitcher } from '@/app/[lang]/components/LanguageSwitcher'
import '@/app/globals.css'
import { siteConfig } from '@/config/site'
import { fontMono } from '@/lib/fonts'
import type { Metadata } from 'next'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { twMerge } from 'tailwind-merge'

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth scroll-py-28">
      <body
        className={twMerge(
          'bg-neutral-200 text-neutral-700 mx-auto min-h-screen antialiased font-mono overflow-x-hidden',
          fontMono.variable,
        )}
      >
        <Header />
        {children}
        <ToastContainer position="bottom-right" />
        <LanguageSwitcher.Root>
          {siteConfig.languages.reverse().map((language, index) => (
            <LanguageSwitcher.Button
              key={language.name}
              flag={language.flag}
              alt={language.alt}
              position={
                index === 0
                  ? 'first'
                  : index === siteConfig.languages.length - 1
                  ? 'last'
                  : undefined
              }
            >
              {language.name}
            </LanguageSwitcher.Button>
          ))}
        </LanguageSwitcher.Root>
      </body>
    </html>
  )
}
