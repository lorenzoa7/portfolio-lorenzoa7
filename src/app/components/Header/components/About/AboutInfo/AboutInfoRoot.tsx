type AboutInfoRootProps = {
  children: React.ReactNode
}

export default function AboutInfoRoot({ children }: AboutInfoRootProps) {
  return <section className="flex flex-col gap-8 w-[577px]">{children}</section>
}
