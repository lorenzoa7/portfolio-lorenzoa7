type BackgroundProps = {
  children: React.ReactNode
}

export default function Background({ children }: BackgroundProps) {
  return (
    <div id="about" className="relative">
      <div className="w-full bg-gradient-to-r from-amaranth-800 to-amaranth-500 px-40 pb-24 pt-16 xl:px-28 xl:pb-32 lg:px-20 lg:pt-16 sm:px-10">
        {children}
      </div>

      <div className="mt-[-8rem] h-0 w-0 border-b-[8rem] border-l-[calc(100vw)] border-solid border-b-neutral-200 border-l-transparent"></div>
    </div>
  )
}
