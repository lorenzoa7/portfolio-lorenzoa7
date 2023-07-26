import Link from 'next/link'
import { AiOutlineLink } from 'react-icons/ai'

type ProjectLinksAppProps = {
  href?: string
}

export default function ProjectLinksApp({ href = '#' }: ProjectLinksAppProps) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center gap-2 bg-rose-500 rounded-lg text-white uppercase text-center py-1 text-xl w-32 hover:bg-rose-800 duration-300"
    >
      <AiOutlineLink size={24} />
      App
    </Link>
  )
}
