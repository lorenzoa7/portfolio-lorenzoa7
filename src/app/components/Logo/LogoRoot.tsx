type LogoRootProps = {
  children: React.ReactNode
}

export function LogoRoot({ children }: LogoRootProps) {
  return (
    <div className="flex gap-1 items-center cursor-pointer w-fit">
      {children}
    </div>
  )
}
