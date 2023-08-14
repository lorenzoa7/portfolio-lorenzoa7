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
    <div className="flex flex-col items-center justify-center gap-1 bg-white rounded-lg shadow-2xl p-4 hover:text-amaranth-800 duration-300 sm:gap-2 sm:p-2">
      <Icon className="w-12 h-12 sm:w-9 sm:h-9" />
      <p className="w-24 text-center md:w-20">{children}</p>
    </div>
  )
}
