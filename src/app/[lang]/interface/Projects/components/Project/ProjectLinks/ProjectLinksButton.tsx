import Link from 'next/link'
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai'

type ProjectLinksButtonProps = {
  children: React.ReactNode
  type: 'app' | 'repository'
  href?: string
}

export default function ProjectLinksButton({
  children,
  type,
  href = '#',
}: ProjectLinksButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-36 items-center justify-center gap-2 rounded-lg bg-amaranth-500 py-1 text-center text-xl uppercase text-white duration-300 hover:bg-amaranth-800 lg:w-40 sm:w-32 sm:text-lg"
    >
      {type === 'app' && <AiOutlineLink size={24} />}
      {type === 'repository' && <AiOutlineGithub size={24} />}

      {children}
    </Link>
  )
}
