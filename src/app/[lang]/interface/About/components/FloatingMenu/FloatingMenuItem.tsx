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
      className="flex cursor-pointer flex-col items-center gap-3 text-amaranth-500 duration-300 hover:scale-105 hover:text-amaranth-900 sm:gap-2"
    >
      <Icon className="h-11 w-11 sm:h-9 sm:w-9" />
      <span className="text-2xl font-semibold uppercase sm:text-xl">
        {children}
      </span>
    </Link>
  )
}
