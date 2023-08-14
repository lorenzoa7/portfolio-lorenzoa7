type LevelItemsRootProps = {
  children: React.ReactNode
}

export default function LevelItemsRoot({ children }: LevelItemsRootProps) {
  return (
    <div className="flex justify-center gap-7 mt-6 text-amaranth-500 group font-semibold text-lg xl:flex-wrap sm:text-base sm:font-bold">
      {children}
    </div>
  )
}
