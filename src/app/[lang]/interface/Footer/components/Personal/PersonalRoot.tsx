type PersonalRootProps = {
  children: React.ReactNode
}

export default function PersonalRoot({ children }: PersonalRootProps) {
  return (
    <section className="flex w-full flex-col justify-start gap-2 md:items-start md:gap-1">
      {children}
    </section>
  )
}
