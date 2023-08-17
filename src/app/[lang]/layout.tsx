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

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="!scroll-smooth scroll-py-28">
      <body
        className={twMerge(
          'bg-neutral-200 text-neutral-700 mx-auto min-h-screen antialiased font-mono overflow-x-hidden',
          fontMono.variable,
        )}
      >
        {children}
        <ToastContainer position="bottom-right" />
      </body>
    </html>
  )
}
