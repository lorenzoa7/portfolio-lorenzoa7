type LevelItemsRootProps = {
  children: React.ReactNode
}

export default function LevelItemsRoot({ children }: LevelItemsRootProps) {
  return (
    <div className="flex justify-center gap-7 mt-6 text-rose-500 group font-semibold text-lg">
      {children}
    </div>
  )
}