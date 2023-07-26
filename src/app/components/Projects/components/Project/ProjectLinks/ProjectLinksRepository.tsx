import Link from 'next/link'
import { AiOutlineGithub } from 'react-icons/ai'

type ProjectLinksRepositoryProps = {
  href?: string
}

export default function ProjectLinksRepository({
  href = '#',
}: ProjectLinksRepositoryProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 bg-rose-500 rounded-lg text-white uppercase text-center py-1 text-xl w-32 hover:bg-rose-800 duration-300"
    >
      <AiOutlineGithub size={24} />
      Repository
    </Link>
  )
}
