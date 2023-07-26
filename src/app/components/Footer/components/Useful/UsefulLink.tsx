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
    <Link href={href} className="group">
      <Icon
        size={iconSize}
        className="group-hover:text-neutral-300 group-hover:scale-110 duration-150"
      />
    </Link>
  )
}
