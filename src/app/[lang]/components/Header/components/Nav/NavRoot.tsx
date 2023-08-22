type NavRootProps = {
  children: React.ReactNode
}

export function NavRoot({ children }: NavRootProps) {
  return (
    <ul className="flex list-none items-center gap-5 lg:hidden">{children}</ul>
  )
}
