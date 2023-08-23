type ProjectInfoDescriptionProps = {
  children: React.ReactNode
}

export default function ProjectInfoDescription({
  children,
}: ProjectInfoDescriptionProps) {
  return (
    <div className="h-24">
      <p>{children}</p>
    </div>
  )
}
