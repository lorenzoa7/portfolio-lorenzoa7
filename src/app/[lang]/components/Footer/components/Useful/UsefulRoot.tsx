type UsefulRootProps = {
  children: React.ReactNode
}

export default function UsefulRoot({ children }: UsefulRootProps) {
  return (
    <section className="flex items-center justify-end gap-4 w-full md:items-end md:justify-end md:absolute md:right-2 md:flex-col md:gap-2 md:top-4">
      {children}
    </section>
  )
}
