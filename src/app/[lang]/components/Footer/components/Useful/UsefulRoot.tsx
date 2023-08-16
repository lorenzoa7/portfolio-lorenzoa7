type UsefulRootProps = {
  children: React.ReactNode
}

export default function UsefulRoot({ children }: UsefulRootProps) {
  return (
    <section className="flex items-center justify-end gap-4 w-full md:items-end sm:justify-end sm:absolute sm:right-2 sm:flex-col sm:gap-2 sm:top-4">
      {children}
    </section>
  )
}
