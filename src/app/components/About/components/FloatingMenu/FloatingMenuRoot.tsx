type FloatingMenuRootProps = {
  children: React.ReactNode
}

export default function FloatingMenuRoot({ children }: FloatingMenuRootProps) {
  return (
    <div className="flex items-center justify-center gap-20 bg-white rounded-md shadow-2xl absolute bottom-0 left-1/2 -translate-x-1/2 z-10 px-24 py-9 lg:px-12 lg:py-4 sm:gap-10 sm:px-10">
      {children}
    </div>
  )
}
