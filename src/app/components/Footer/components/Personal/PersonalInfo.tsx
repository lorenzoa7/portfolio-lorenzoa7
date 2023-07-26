import { ElementType } from 'react'

type PersonalInfoProps = {
  children: React.ReactNode
  icon: ElementType
  iconSize?: number
}

export default function PersonalInfo({
  children,
  icon: Icon,
  iconSize = 28,
}: PersonalInfoProps) {
  return (
    <div className="flex gap-3 items-center">
      <Icon size={iconSize} />
      <span>{children}</span>
    </div>
  )
}
