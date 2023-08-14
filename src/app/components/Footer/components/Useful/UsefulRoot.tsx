type UsefulRootProps = {
  children: React.ReactNode
}

export default function UsefulRoot({ children }: UsefulRootProps) {
  return (
    <section className="flex items-center justify-end gap-4 w-full md:items-end">
      {children}
    </section>
  )
}
