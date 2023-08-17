'use client'

import { Locale } from '@/i18n-config'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type LanguageSwitcherButtonProps = {
  children: React.ReactNode
  flag: string
  alt: string
  position?: 'first' | 'last'
  locale: Locale
}

export default function LanguageSwitcherButton({
  children,
  flag,
  alt,
  position,
  locale,
}: LanguageSwitcherButtonProps) {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <Link
      href={redirectedPathName(locale)}
      data-position={position}
      className="flex items-center gap-5 cursor-pointer bg-amaranth-900 hover:bg-amaranth-950 py-3 px-4 shadow-2xl data-[position='first']:rounded-t-lg data-[position='last']:rounded-b-lg"
    >
      <Image src={flag} alt={alt} width={20} height={20} />
      {children}
    </Link>
  )
}
