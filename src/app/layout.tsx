import { siteConfig } from '@/config/site'
import { fontMono } from '@/lib/fonts'
import type { Metadata } from 'next'
import { twMerge } from 'tailwind-merge'
import RealHeader from './components/RealHeader'
import './globals.css'

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
    <html lang="en" className="!scroll-smooth">
      <body
        className={twMerge(
          'bg-neutral-200 text-neutral-700 mx-auto min-h-screen antialiased font-mono overflow-x-hidden',
          fontMono.variable,
        )}
      >
        <RealHeader />
        {children}
      </body>
    </html>
  )
}
