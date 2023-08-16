import { ElementType } from 'react'

type InputBoxProps = {
  children: React.ReactNode
  icon: ElementType
  placeholder: string
  isFocus: boolean
  iconSize?: number
}

export default function InputBox({
  children,
  icon: Icon,
  placeholder,
  isFocus,
  iconSize = 16,
}: InputBoxProps) {
  return (
    <div
      data-focus={isFocus}
      className="relative grid grid-cols-[7%_93%] mx-0 py-1.5 px-0 border-b-2 border-zinc-200 after:content-[''] after:w-0 after:absolute after:h-0.5  after:bg-amaranth-800 after:duration-300 after:-bottom-0.5 after:right-2/4 before:content-[''] before:w-0 before:absolute before:h-0.5  before:bg-amaranth-800 before:duration-300 before:-bottom-0.5 before:left-2/4 data-[focus=true]:before:w-1/2 data-[focus=true]:after:w-1/2"
    >
      <div
        data-focus={isFocus}
        className="flex justify-center items-center duration-300 text-white data-[focus=true]:text-amaranth-800"
      >
        <Icon size={iconSize} />
      </div>

      <div className="relative h-12 flex items-center gap-5">
        {children}
        <span
          data-focus={isFocus}
          className="absolute -translate-y-2/4 text-white duration-300 left-2.5 z-10 pointer-events-none text-lg top-2/4 data-[focus=true]:text-sm data-[focus=true]:-top-1"
        >
          {placeholder}
        </span>
      </div>
    </div>
  )
}
