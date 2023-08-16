type ProjectInfoRootProps = {
  children: React.ReactNode
}

export default function ProjectInfoRoot({ children }: ProjectInfoRootProps) {
  return (
    <div className="flex flex-col gap-3 text-neutral-700">
      {children}
      <span className="font-semibold underline underline-offset-4 cursor-pointer self-end hover:text-neutral-500 duration-150">
        See more...
      </span>
    </div>
  )
}
