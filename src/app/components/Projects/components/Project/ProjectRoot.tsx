type ProjectRootProps = {
  children: React.ReactNode
}

export default function ProjectRoot({ children }: ProjectRootProps) {
  return (
    <div className="relative flex flex-col gap-2 bg-white rounded-lg px-6 py-3 w-[350px] mt-4 items-center group cursor-pointer group shadow-lg">
      <div className="flex gap-1 self-start">
        <div className="rounded-full w-3 h-3 bg-stone-300 group-hover:bg-red-500 duration-150"></div>
        <div className="rounded-full w-3 h-3 bg-stone-300 group-hover:bg-yellow-500 duration-150"></div>
        <div className="rounded-full w-3 h-3 bg-stone-300 group-hover:bg-green-500 duration-150"></div>
      </div>

      {children}
    </div>
  )
}
