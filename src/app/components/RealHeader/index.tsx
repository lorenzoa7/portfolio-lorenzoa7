'use client'

import { headerConfig } from '@/config/header'
import { useEffect, useState } from 'react'
import { Nav } from '../Header/components'
import { Logo } from '../Logo'

export default function RealHeader() {
  const [onScroll, setOnScroll] = useState(false)

  const changeOnScroll = () => {
    if (window.scrollY >= 50) {
      setOnScroll(true)
    } else {
      setOnScroll(false)
    }
  }
  //
  useEffect(() => {
    window.addEventListener('scroll', changeOnScroll, true)
    return () => window.removeEventListener('scroll', changeOnScroll)
  }, [])

  //   useEffect(() => {
  //     const ON_SCROLL_THRESHOLD = 90

  //     console.log(window.scrollY)
  //     if (window.scrollY >= ON_SCROLL_THRESHOLD && onScroll !== true) {
  //       setOnScroll(true)
  //     }
  //     if (window.scrollY < ON_SCROLL_THRESHOLD && onScroll !== false) {
  //       setOnScroll(false)
  //     }
  //   }, [window.scrollY, onScroll])

  return (
    <div
      className={`fixed top-0 left-0 z-50 px-40 py-5 w-full flex justify-between items-baseline duration-300 ${
        onScroll && 'bg-gradient-to-r from-rose-800 to-rose-500 shadow-2xl'
      }`}
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
