type NavRootProps = {
  children: React.ReactNode
}

export function NavRoot({ children }: NavRootProps) {
  return <div className="flex items-center gap-5">{children}</div>
}
