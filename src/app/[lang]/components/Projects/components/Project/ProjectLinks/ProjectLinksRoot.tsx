type ProjectLinksRootProps = {
  children: React.ReactNode
}

export default function ProjectLinksRoot({ children }: ProjectLinksRootProps) {
  return <div className="flex gap-5 mt-12 sm:gap-2">{children}</div>
}
