type AboutInfoTextProps = {
  children: React.ReactNode
}

export default function AboutInfoText({ children }: AboutInfoTextProps) {
  return (
    <p className="text-xl text-white leading-[90%] w-10/12 text-justify">
      {children}
    </p>
  )
}
