type ProjectInfoRootProps = {
  children: React.ReactNode
}

export default function ProjectInfoRoot({ children }: ProjectInfoRootProps) {
  return <div className="flex flex-col gap-3">{children}</div>
}
