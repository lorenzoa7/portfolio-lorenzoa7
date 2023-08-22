type UsefulRootProps = {
  children: React.ReactNode
}

export default function UsefulRoot({ children }: UsefulRootProps) {
  return (
    <section className="flex w-full items-center justify-end gap-4 md:absolute md:right-2 md:top-4 md:flex-col md:items-end md:justify-end md:gap-2">
      {children}
    </section>
  )
}
