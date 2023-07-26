type PersonalRootProps = {
  children: React.ReactNode
}

export default function PersonalRoot({ children }: PersonalRootProps) {
  return <section className="w-full justify-start">{children}</section>
}
