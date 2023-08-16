'use client'

import type { NavConfig } from '@/config/header'
import { useEffect, useState } from 'react'
import { Logo } from '../Logo'
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

  return (
    <header
      data-onscroll={onScroll}
      className="fixed top-0 left-0 z-50 px-40 py-7 w-full flex justify-between lg:justify-center items-center duration-500 data-[onscroll=true]:bg-gradient-to-r data-[onscroll=true]:from-amaranth-800 data-[onscroll=true]:to-amaranth-500 data-[onscroll=true]:shadow-2xl data-[onscroll=true]:py-3 data-[onscroll='']:bg-gradient-to-r data-[onscroll='']:from-amaranth-800 data-[onscroll='']:to-amaranth-500 data-[onscroll='']:py-3 sm:px-2"
    >
      <Logo.Root>
        <Logo.Name />
        <Logo.Symbol />
      </Logo.Root>

      <Nav.Root>
        {/* {headerConfig.nav?.map((item) => (
          <Nav.Item key={item.title} href={item.href}>
            {item.title}
          </Nav.Item>
        ))} */}
        {navConfig?.map((item) => (
          <Nav.Item key={item.title} href={item.href}>
            {item.title}
          </Nav.Item>
        ))}
      </Nav.Root>
    </header>
  )
}
