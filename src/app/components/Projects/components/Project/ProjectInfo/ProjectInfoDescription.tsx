type ProjectInfoDescriptionProps = {
  children: React.ReactNode
}

export default function ProjectInfoDescription({
  children,
}: ProjectInfoDescriptionProps) {
  return <p>{children}</p>
}
