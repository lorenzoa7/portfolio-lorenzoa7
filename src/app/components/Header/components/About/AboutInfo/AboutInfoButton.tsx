import { ElementType } from 'react'

type AboutInfoButtonProps = {
  children: React.ReactNode
  icon: ElementType
}

export default function AboutInfoButton({
  children,
  icon: Icon,
}: AboutInfoButtonProps) {
  return (
    <span className="flex items-center gap-1 lowercase text-xl text-white font-thin leading-[90%] cursor-pointer w-fit mt-6">
      {children}
      <Icon />
    </span>
  )
}
