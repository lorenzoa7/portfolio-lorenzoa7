type AboutInfoRootProps = {
  children: React.ReactNode
}

export default function AboutInfoRoot({ children }: AboutInfoRootProps) {
  return (
    <section className="flex w-[577px] flex-col gap-8 xl:w-[400px] lg:w-full lg:gap-4">
      {children}
    </section>
  )
}
