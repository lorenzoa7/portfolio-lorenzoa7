import Link from 'next/link'

type NavitemProps = {
  children: React.ReactNode
  href: string
}

export function NavItem({ children, href }: NavitemProps) {
  return (
    <Link
      href={href}
      passHref
      className="uppercase leading-[90%] font-semibold text-white text-lg"
    >
      {children}
    </Link>
  )
}
