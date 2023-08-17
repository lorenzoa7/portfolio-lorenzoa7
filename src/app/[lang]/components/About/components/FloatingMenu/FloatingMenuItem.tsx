import Link from 'next/link'
import { ElementType } from 'react'

type FloatingMenuItemProps = {
  children: React.ReactNode
  href: string
  icon: ElementType
}

export default function FloatingMenuItem({
  children,
  href = '#',
  icon: Icon,
}: FloatingMenuItemProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center text-amaranth-500 gap-3 cursor-pointer hover:text-amaranth-900 duration-300 hover:scale-105 sm:gap-2"
    >
      <Icon className="w-11 h-11 sm:w-9 sm:h-9" />
      <span className="uppercase text-2xl font-semibold sm:text-xl">
        {children}
      </span>
    </Link>
  )
}
