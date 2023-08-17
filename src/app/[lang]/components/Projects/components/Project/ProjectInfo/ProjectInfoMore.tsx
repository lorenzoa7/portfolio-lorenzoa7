type ProjectInfoMoreProps = {
  children: React.ReactNode
}

export default function ProjectInfoMore({ children }: ProjectInfoMoreProps) {
  return (
    <span className="text-neutral-700 font-semibold underline underline-offset-4 cursor-pointer self-end hover:text-neutral-500 duration-150 mt-10">
      {children}
    </span>
  )
}
