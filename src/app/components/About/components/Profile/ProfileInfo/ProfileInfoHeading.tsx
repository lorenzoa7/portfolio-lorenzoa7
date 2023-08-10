type AboutInfoHeadingProps = {
  children: React.ReactNode
}

export default function AboutInfoHeading({ children }: AboutInfoHeadingProps) {
  return (
    <h1 className="text-7xl text-white font-medium pt-7 lg:text-5xl">
      {children}
    </h1>
  )
}
