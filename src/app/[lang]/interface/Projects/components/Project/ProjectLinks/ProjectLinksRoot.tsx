import { twMerge } from 'tailwind-merge'

type ProjectLinksRootProps = {
  children: React.ReactNode
  className?: string
}

export default function ProjectLinksRoot({
  children,
  className = '',
}: ProjectLinksRootProps) {
  return (
    <div className={twMerge('flex gap-5 items-center sm:gap-2', className)}>
      {children}
    </div>
  )
}
