type BackgroundProps = {
  children: React.ReactNode
}

export default function Background({ children }: BackgroundProps) {
  return (
    <div id="about" className="relative">
      <div className="bg-gradient-to-r from-amaranth-800 to-amaranth-500 w-full pb-24 px-40 pt-14 lg:px-20 lg:pt-16 xl:pb-32 xl:px-28">
        {children}
      </div>

      <div className="w-0 h-0 -mt-[8rem] border-l-[calc(100vw-15px)] border-l-transparent border-b-[8rem] border-solid border-b-neutral-200"></div>
    </div>
  )
}
