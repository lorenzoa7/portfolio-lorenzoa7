type PersonalRootProps = {
  children: React.ReactNode
}

export default function PersonalRoot({ children }: PersonalRootProps) {
  return (
    <section className="flex flex-col gap-2 w-full justify-start">
      {children}
    </section>
  )
}
