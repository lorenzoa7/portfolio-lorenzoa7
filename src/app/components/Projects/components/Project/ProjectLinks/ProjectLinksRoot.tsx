type ProjectLinksRootProps = {
  children: React.ReactNode
}

export default function ProjectLinksRoot({ children }: ProjectLinksRootProps) {
  return <div className="flex gap-5 mt-12">{children}</div>
}
