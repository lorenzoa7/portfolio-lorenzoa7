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
      className="relative mx-0 grid grid-cols-[7%_93%] border-b-2 border-zinc-200 px-0 py-1.5 before:absolute before:-bottom-0.5 before:left-2/4 before:h-0.5  before:w-0 before:bg-amaranth-800 before:duration-300 before:content-[''] after:absolute after:-bottom-0.5 after:right-2/4 after:h-0.5  after:w-0 after:bg-amaranth-800 after:duration-300 after:content-[''] data-[focus=true]:before:w-1/2 data-[focus=true]:after:w-1/2"
    >
      <div
        data-focus={isFocus}
        className="flex items-center justify-center text-white duration-300 data-[focus=true]:text-amaranth-800"
      >
        <Icon size={iconSize} />
      </div>

      <div className="relative flex h-12 items-center gap-5">
        {children}
        <span
          data-focus={isFocus}
          className="pointer-events-none absolute left-2.5 top-2/4 z-10 -translate-y-2/4 text-lg text-white duration-300 data-[focus=true]:-top-1 data-[focus=true]:text-sm"
        >
          {placeholder}
        </span>
      </div>
    </div>
  )
}
