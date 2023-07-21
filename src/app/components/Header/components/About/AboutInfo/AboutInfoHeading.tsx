type AboutInfoHeadingProps = {
  children: React.ReactNode
}

export default function AboutInfoHeading({ children }: AboutInfoHeadingProps) {
  return (
    <h1 className="text-7xl text-white font-medium leading-[90%] pt-7">
      {children}
    </h1>
  )
}
