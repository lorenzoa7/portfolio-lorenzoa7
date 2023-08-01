'use client'

import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai'
import { GrFormClose } from 'react-icons/gr'
import {
  SiAdobephotoshop,
  SiJavascript,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si'

type ProjectModalProps = {
  children: React.ReactNode
}

export default function ProjectModal({ children }: ProjectModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-overlayShow data-[state='closed']:animate-overlayHide" />
        <Dialog.Content
          onOpenAutoFocus={(event) => event?.preventDefault()}
          className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-contentShow data-[state='closed']:animate-contentHide"
        >
          <div className="bg-white px-7 py-5 rounded-xl w-[1280px] mx-auto">
            <Dialog.Close asChild>
              <div className="w-fit flex gap-1 self-start mb-6 group cursor-pointer">
                <div className="rounded-full w-3 h-3 bg-red-500 duration-150 group-hover:scale-[2.0] flex items-center justify-center">
                  <GrFormClose className="opacity-0 group-hover:opacity-100 duration-150" />
                </div>
                <div className="rounded-full w-3 h-3 bg-yellow-500 duration-150 group-hover:opacity-0"></div>
                <div className="rounded-full w-3 h-3 bg-green-500 duration-150 group-hover:opacity-0"></div>
              </div>
            </Dialog.Close>

            <main className="flex items-center gap-16">
              <div className="flex flex-col gap-4 w-[680px]">
                <Dialog.Title className="font-medium text-3xl text-rose-800">
                  Get Chem Components Script
                </Dialog.Title>
                <p className="text-xl text-rose-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  sed purus iaculis, consequat justo finibus, hendrerit risus.
                  Sed varius, sapien ac vestibulum condimentum, leo urna tempor
                  lorem, eget pretium lacus urna nec mi. Integer vitae arcu vel
                  eros efficitur venenatis sit amet ac urna. Duis congue lacus
                  felis, eu dictum diam varius in. Curabitur feugiat nunc eget
                  pharetra malesuada. Pellentesque condimentum ornare risus,
                  eget cursus leo hendrerit vel. Sed malesuada neque metus, sit
                  amet scelerisque orci mattis vel. Praesent aliquet eros porta
                  nisl hendrerit, sed dapibus libero sagittis. In ornare lacus
                  euismod, fringilla urna ut, mattis arcu. Nunc sapien lacus,
                  pulvinar et luctus in, tincidunt vel tellus. Nunc rutrum risus
                  vitae maximus sagittis.
                </p>
                <span className="text-base font-semibold text-rose-500">
                  July 31, 2023
                </span>
              </div>

              <div className="relative w-[480px] h-[270px] bg-red-500 overflow-hidden border-rose-500 border-2 rounded">
                <Image
                  fill
                  src="/images/project_couplewheel.png"
                  alt="The main interface of Couple Wheel app."
                  className="object-fill"
                />
              </div>
            </main>

            <div className="flex justify-between items-baseline mt-9">
              <div className="flex items-center gap-5 text-rose-500/80">
                <div className="relative hover:text-rose-500 duration-300 after:content-['JavaScript'] after:absolute after:-top-6 after:left-1/2 after:-translate-x-1/2 after:font-semibold after:opacity-0 after:translate-y-7 hover:after:translate-y-0 hover:after:opacity-100 after:duration-300">
                  <SiJavascript size={28} />
                </div>
                <div className="relative hover:text-rose-500 duration-300 after:content-['React'] after:absolute after:-top-6 after:left-1/2 after:-translate-x-1/2 after:font-semibold after:opacity-0 after:translate-y-7 hover:after:translate-y-0 hover:after:opacity-100 after:duration-300">
                  <SiReact size={28} />
                </div>

                <div className="relative hover:text-rose-500 duration-300 after:content-['TailwindCSS'] after:absolute after:-top-6 after:left-1/2 after:-translate-x-1/2 after:font-semibold after:opacity-0 after:translate-y-7 hover:after:translate-y-0 hover:after:opacity-100 after:duration-300">
                  <SiTailwindcss size={28} />
                </div>

                <div className="relative hover:text-rose-500 duration-300 after:content-['Photoshop'] after:absolute after:-top-6 after:left-1/2 after:-translate-x-1/2 after:font-semibold after:opacity-0 after:translate-y-7 hover:after:translate-y-0 hover:after:opacity-100 after:duration-300">
                  <SiAdobephotoshop size={28} />
                </div>
              </div>

              <div className="flex items-center gap-5">
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-rose-500 rounded-lg text-white uppercase text-center py-1 text-xl w-32 hover:bg-rose-800 duration-300"
                >
                  <AiOutlineLink size={24} />
                  App
                </Link>

                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-rose-500 rounded-lg text-white uppercase text-center py-1 text-xl w-32 hover:bg-rose-800 duration-300"
                >
                  <AiOutlineGithub size={24} />
                  Repository
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
