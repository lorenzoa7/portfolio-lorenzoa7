type ProfileRootProps = {
  children: React.ReactNode
}

export default function ProfileRoot({ children }: ProfileRootProps) {
  return (
    <div className="mt-11 flex items-start justify-between gap-10 lg:flex-col lg:items-center lg:gap-5">
      {children}
    </div>
  )
}
