import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Lorenzo Aceti | Portfolio",
  description: "A portfolio of Lorenzo Aceti's work as a full-stack developer and designer.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-200 text-neutral-700 container mx-auto`}>{children}</body>
    </html>
  )
}
