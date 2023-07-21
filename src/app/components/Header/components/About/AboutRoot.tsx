type AboutRootProps = {
  children: React.ReactNode
}

export default function AboutRoot({ children }: AboutRootProps) {
  return <div className="flex justify-between gap-10 mt-11">{children}</div>
}
