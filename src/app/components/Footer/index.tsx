import Link from 'next/link'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { MdEmail, MdPhone } from 'react-icons/md'
import { Logo } from '../Logo'

export default function Footer() {
  return (
    <footer className="flex justify-between items-end mt-auto w-full h-24 pb-3 bg-gradient-to-r from-rose-800 to-rose-500 px-40 text-white font-light text-xl">
      <section className="w-full justify-start">
        <div className="flex gap-3 items-center">
          <MdEmail size={28} />
          <span>lorenzo.acetii@gmail.com</span>
        </div>

        <div className="flex gap-3 items-center">
          <MdPhone size={28} />
          <span>+55 21 96540-0438</span>
        </div>
      </section>

      <section className="flex flex-col items-center gap-1 w-full justify-center">
        <Logo.Root>
          <Logo.Symbol size={35} />
        </Logo.Root>
        <span>© 2023 - Portfolio - Lorenzo Aceti</span>
      </section>

      <section className="flex items-center justify-end gap-4 w-full">
        <Link href="#">
          <AiFillGithub size={24} />
        </Link>
        <Link href="#">
          <AiFillLinkedin size={24} />
        </Link>
      </section>
    </footer>
  )
}
