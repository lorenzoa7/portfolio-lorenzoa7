type ProjectInfoMoreProps = {
  children: React.ReactNode
}

export default function ProjectInfoMore({ children }: ProjectInfoMoreProps) {
  return (
    <span className="mt-10 cursor-pointer self-end font-semibold text-neutral-700 underline underline-offset-4 duration-150 hover:text-neutral-500">
      {children}
    </span>
  )
}
