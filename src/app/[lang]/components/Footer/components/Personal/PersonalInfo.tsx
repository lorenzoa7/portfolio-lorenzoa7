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
    <div className="flex items-center gap-3 lg:gap-2">
      <Icon className="h-7 w-7 lg:h-5 lg:w-5" />
      <span>{children}</span>
    </div>
  )
}
