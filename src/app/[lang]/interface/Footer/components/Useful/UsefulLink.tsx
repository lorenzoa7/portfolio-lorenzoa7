import Link from 'next/link'
import { ElementType } from 'react'

type UsefulLinkProps = {
  icon: ElementType
  iconSize?: number
  href?: string
}

export default function UsefulLink({
  icon: Icon,
  iconSize = 24,
  href = '#',
}: UsefulLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <Icon
        size={iconSize}
        className="duration-150 group-hover:scale-110 group-hover:text-neutral-300"
      />
    </Link>
  )
}
