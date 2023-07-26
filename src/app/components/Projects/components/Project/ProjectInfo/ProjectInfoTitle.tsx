type ProjectInfoTitleProps = {
  children: React.ReactNode
}

export default function ProjectInfoTitle({ children }: ProjectInfoTitleProps) {
  return <h4 className="text-2xl font-semibold">{children}</h4>
}
