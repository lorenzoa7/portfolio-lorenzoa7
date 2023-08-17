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
        className="uppercase font-semibold text-white text-lg relative after:duration-300 after:absolute after:bg-white after:h-[3px] after:w-0 after:left-0 after:-bottom-3 after:hover:w-full"
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  )
}
