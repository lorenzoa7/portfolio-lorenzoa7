import { ElementType } from 'react'

type LevelItemsSkillProps = {
  children: React.ReactNode
  icon: ElementType
}

export default function LevelItemsSkill({
  children,
  icon: Icon,
}: LevelItemsSkillProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 rounded-lg bg-white p-4 shadow-2xl duration-300 hover:text-amaranth-800 sm:gap-2 sm:p-2">
      <Icon className="h-12 w-12 sm:h-9 sm:w-9" />
      <p className="w-24 text-center md:w-20">{children}</p>
    </div>
  )
}
