type LevelItemsRootProps = {
  children: React.ReactNode
}

export default function LevelItemsRoot({ children }: LevelItemsRootProps) {
  return (
    <div className="group mt-6 flex flex-wrap justify-center gap-7 text-lg font-semibold text-amaranth-500 sm:text-base sm:font-bold">
      {children}
    </div>
  )
}
