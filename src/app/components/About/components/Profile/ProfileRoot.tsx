type ProfileRootProps = {
  children: React.ReactNode
}

export default function ProfileRoot({ children }: ProfileRootProps) {
  return <div className="flex justify-between gap-10 mt-11">{children}</div>
}
