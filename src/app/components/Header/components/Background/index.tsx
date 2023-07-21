type BackgroundProps = {
  children: React.ReactNode
}

export default function Background({ children }: BackgroundProps) {
  return (
    <>
      <header className="bg-gradient-to-r from-rose-800 to-rose-500 w-full h-[592px] px-40 pt-5">
        {children}
      </header>

      <div className="w-0 h-0 -mt-[8rem] border-l-[100vw] border-l-transparent border-b-[8rem] border-solid border-b-neutral-200"></div>
    </>
  )
}