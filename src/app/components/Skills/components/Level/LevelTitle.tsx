type LevelTitleProps = {
  children: React.ReactNode
}

export default function LevelTitle({ children }: LevelTitleProps) {
  return <h3 className="text-rose-800 font-semibold text-2xl">{children}</h3>
}
