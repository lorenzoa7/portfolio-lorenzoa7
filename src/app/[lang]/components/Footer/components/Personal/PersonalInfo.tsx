import { ElementType } from 'react'

type PersonalInfoProps = {
  children: React.ReactNode
  icon: ElementType
}

export default function PersonalInfo({
  children,
  icon: Icon,
}: PersonalInfoProps) {
  return (
    <div className="flex gap-3 items-center lg:gap-2">
      <Icon className="w-7 h-7 lg:w-5 lg:h-5" />
      <span>{children}</span>
    </div>
  )
}
