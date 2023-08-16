'use client'

import Image from 'next/image'

type LanguageSwitcherButtonProps = {
  children: React.ReactNode
  flag: string
  alt: string
  position?: 'first' | 'last'
}

export default function LanguageSwitcherButton({
  children,
  flag,
  alt,
  position,
}: LanguageSwitcherButtonProps) {
  return (
    <div
      data-position={position}
      className="flex items-center gap-5 cursor-pointer bg-amaranth-900 hover:bg-amaranth-950 py-3 px-4 shadow-2xl data-[position='first']:rounded-t-lg data-[position='last']:rounded-b-lg"
    >
      <Image src={flag} alt={alt} width={20} height={20} />
      {children}
    </div>
  )
}
