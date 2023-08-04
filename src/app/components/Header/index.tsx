'use client'

import { headerConfig } from '@/config/header'
import { useEffect, useState } from 'react'
import { Logo } from '../Logo'
import { Nav } from './components'

export default function Header() {
  const [onScroll, setOnScroll] = useState<string | boolean>('')

  const changeOnScroll = () => {
    setOnScroll(window.scrollY >= 40)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeOnScroll, true)
    return () => window.removeEventListener('scroll', changeOnScroll)
  }, [])

  return (
    <div
      data-onscroll={onScroll}
      className="fixed top-0 left-0 z-50 px-40 py-7 w-full flex justify-between items-baseline duration-500 data-[onscroll=true]:bg-gradient-to-r data-[onscroll=true]:from-rose-800 data-[onscroll=true]:to-rose-500 data-[onscroll=true]:shadow-2xl data-[onscroll=true]:py-3 data-[onscroll='']:bg-gradient-to-r data-[onscroll='']:from-rose-800 data-[onscroll='']:to-rose-500 data-[onscroll='']:py-3"
    >
      <Logo.Root>
        <Logo.Name />
        <Logo.Symbol />
      </Logo.Root>

      <Nav.Root>
        {headerConfig.nav?.map((item) => (
          <Nav.Item key={item.title} href={item.href}>
            {item.title}
          </Nav.Item>
        ))}
      </Nav.Root>
    </div>
  )
}
