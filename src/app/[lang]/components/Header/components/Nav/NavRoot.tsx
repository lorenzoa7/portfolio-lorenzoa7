type NavRootProps = {
  children: React.ReactNode
}

export function NavRoot({ children }: NavRootProps) {
  return (
    <ul className="flex items-center gap-5 list-none lg:hidden">{children}</ul>
  )
}
