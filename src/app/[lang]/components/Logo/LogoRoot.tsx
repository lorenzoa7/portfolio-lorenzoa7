'use client'

import Link from 'next/link'

type LogoRootProps = {
  children: React.ReactNode
}

const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  e.preventDefault()

  const href = e.currentTarget.href
  const sectionId = href.replace(/.*#/, '')
  const sectionElement = document.getElementById(sectionId)

  sectionElement?.scrollIntoView({
    behavior: 'smooth',
  })
}

export function LogoRoot({ children }: LogoRootProps) {
  return (
    <Link
      href="#about"
      className="relative flex w-fit items-center gap-1"
      onClick={(e) => handleClick(e)}
    >
      {children}
    </Link>
  )
}
