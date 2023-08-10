import Link from 'next/link'
import { AiOutlineLink } from 'react-icons/ai'

type ProjectLinksAppProps = {
  href?: string
}

export default function ProjectLinksApp({ href = '#' }: ProjectLinksAppProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 bg-amaranth-500 rounded-lg text-white uppercase text-center py-1 text-xl w-32 hover:bg-amaranth-800 duration-300 lg:w-40"
    >
      <AiOutlineLink size={24} />
      App
    </Link>
  )
}
