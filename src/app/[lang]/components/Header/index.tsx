'use client'

import type { NavConfig } from '@/config/header'
import { useEffect, useState } from 'react'
import { Logo } from '../../../../components/Logo'
import { Nav } from './components'

type HeaderProps = {
  navConfig: NavConfig
}

export default function Header({ navConfig }: HeaderProps) {
  const [onScroll, setOnScroll] = useState<string | boolean>('')

  const changeOnScroll = () => {
    setOnScroll(window.scrollY >= 40)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeOnScroll, true)
    return () => window.removeEventListener('scroll', changeOnScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()

    const href = e.currentTarget.href
    const sectionId = href.replace(/.*#/, '')
    const sectionElement = document.getElementById(sectionId)

    sectionElement?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <header
      data-onscroll={onScroll}
      className="fixed left-0 top-0 z-50 flex w-full items-center justify-between px-40 py-7 duration-500 data-[onscroll='']:bg-gradient-to-r data-[onscroll=true]:bg-gradient-to-r data-[onscroll='']:from-amaranth-800 data-[onscroll=true]:from-amaranth-800 data-[onscroll='']:to-amaranth-500 data-[onscroll=true]:to-amaranth-500 data-[onscroll='']:py-7 data-[onscroll=true]:py-3 data-[onscroll=true]:shadow-2xl lg:justify-center sm:px-2"
    >
      <Logo.Root>
        <Logo.Name />
        <Logo.Symbol />
      </Logo.Root>

      <Nav.Root>
        {navConfig?.map((item) => (
          <Nav.Item
            key={item.title}
            href={item.href}
            onClick={(e) => handleClick(e)}
          >
            {item.title}
          </Nav.Item>
        ))}
      </Nav.Root>
    </header>
  )
}
