type LogoRootProps = {
  children: React.ReactNode
  clickable?: boolean
}

export function LogoRoot({ children, clickable = false }: LogoRootProps) {
  return (
    <div
      data-clickable={clickable}
      className="flex gap-1 items-center w-fit data-[clickable=true]:cursor-pointer"
    >
      {children}
    </div>
  )
}
