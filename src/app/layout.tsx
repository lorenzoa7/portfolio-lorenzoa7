import type { Metadata } from 'next'
import { twMerge } from 'tailwind-merge'
import { siteConfig } from './config/site'
import './globals.css'
import { fontMono } from './lib/fonts'

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
    <html lang="en">
      <body
        className={twMerge(
          'bg-neutral-200 text-neutral-700 mx-auto min-h-screen antialiased font-mono',
          fontMono.variable,
        )}
      >
        {children}
      </body>
    </html>
  )
}
