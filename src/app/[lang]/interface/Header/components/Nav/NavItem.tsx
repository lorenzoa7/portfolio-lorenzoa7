import Link from 'next/link'

type NavitemProps = {
  children: React.ReactNode
  href: string
  onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}

export function NavItem({ children, href, onClick }: NavitemProps) {
  return (
    <li>
      <Link
        href={href}
        className="relative text-lg font-semibold uppercase text-white after:absolute after:-bottom-3 after:left-0 after:h-[3px] after:w-0 after:bg-white after:duration-300 after:hover:w-full"
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  )
}
