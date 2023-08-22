type LevelTitleProps = {
  children: React.ReactNode
}

export default function LevelTitle({ children }: LevelTitleProps) {
  return (
    <h3 className="text-2xl font-semibold text-amaranth-800">{children}</h3>
  )
}
