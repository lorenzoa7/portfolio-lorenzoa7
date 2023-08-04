import Link from 'next/link'

type LogoRootProps = {
  children: React.ReactNode
}

export function LogoRoot({ children }: LogoRootProps) {
  return (
    <Link href="#about" className="flex gap-1 items-center w-fit">
      {children}
    </Link>
  )
}
