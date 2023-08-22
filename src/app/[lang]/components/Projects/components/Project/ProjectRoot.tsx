type ProjectRootProps = {
  children: React.ReactNode
}

export default function ProjectRoot({ children }: ProjectRootProps) {
  return (
    <div className="group relative mt-4 flex w-[350px] cursor-pointer flex-col items-center gap-2 rounded-lg bg-white px-6 py-3 shadow-lg lg:w-[450px] sm:w-[300px]">
      <div className="flex gap-1 self-start">
        <div className="h-3 w-3 rounded-full bg-stone-300 duration-150 group-hover:bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-stone-300 duration-150 group-hover:bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-stone-300 duration-150 group-hover:bg-green-500"></div>
      </div>

      {children}
    </div>
  )
}
