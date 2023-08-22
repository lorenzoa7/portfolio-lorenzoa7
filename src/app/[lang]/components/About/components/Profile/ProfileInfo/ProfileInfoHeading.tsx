type AboutInfoHeadingProps = {
  children: React.ReactNode
}

export default function AboutInfoHeading({ children }: AboutInfoHeadingProps) {
  return (
    <h1 className="pt-7 text-7xl font-medium text-white xl:pt-0 xl:text-6xl lg:text-5xl">
      {children}
    </h1>
  )
}
