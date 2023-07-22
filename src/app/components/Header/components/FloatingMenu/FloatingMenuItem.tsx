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
      className="flex flex-col items-center text-rose-500 gap-3 cursor-pointer hover:text-rose-900 duration-300 hover:scale-105"
    >
      <Icon width={45} height={45} />
      <span className="uppercase text-2xl font-semibold">{children}</span>
    </Link>
  )
}
