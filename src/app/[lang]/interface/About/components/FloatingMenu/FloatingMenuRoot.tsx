type FloatingMenuRootProps = {
  children: React.ReactNode
}

export default function FloatingMenuRoot({ children }: FloatingMenuRootProps) {
  return (
    <div className="absolute bottom-0 left-1/2 z-10 flex -translate-x-1/2 items-center justify-center gap-20 rounded-md bg-white px-24 py-9 shadow-2xl lg:px-12 lg:py-4 sm:gap-10 sm:px-10">
      {children}
    </div>
  )
}
