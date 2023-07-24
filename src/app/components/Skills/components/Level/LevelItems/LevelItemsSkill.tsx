import { ElementType } from 'react'

type LevelItemsSkillProps = {
  children: React.ReactNode
  icon: ElementType
  iconSize?: number
}

export default function LevelItemsSkill({
  children,
  icon: Icon,
  iconSize = 48,
}: LevelItemsSkillProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 bg-white rounded-lg shadow-2xl p-4 hover:text-rose-800 duration-300">
      <Icon size={iconSize} />
      <p className="w-24 text-center">{children}</p>
    </div>
  )
}
