type AboutInfoTextProps = {
  children: React.ReactNode
}

export default function AboutInfoText({ children }: AboutInfoTextProps) {
  return (
    <p className="w-10/12 text-justify text-xl leading-tight text-white xl:w-full">
      {children}
    </p>
  )
}
