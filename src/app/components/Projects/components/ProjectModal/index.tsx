'use client'

import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai'
import {
    SiAdobephotoshop,
    SiJavascript,
    SiReact,
    SiTailwindcss,
} from 'react-icons/si'
import { Drawer } from 'vaul'

type ProjectModalProps = {
  children: React.ReactNode
}

export default function ProjectModal({ children }: ProjectModalProps) {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>{children}</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0">
          <div className="p-4 bg-white rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
            <div className="max-w-7xl mx-auto">
              <main className="flex items-start gap-16 w-full">
                <div className="flex flex-col gap-4 w-[736px]">
                  <Drawer.Title className="font-medium text-3xl text-rose-800">
                    Couple Wheel
                  </Drawer.Title>
                  <p className="text-xl text-rose-500">
                    Couple Wheel is a game to be played in pairs, where both
                    players select activities they would like to do together and
                    spin the wheel to randomly choose one. Itss a great game for
                    indecisive couples!
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
                  <SiJavascript size={28} />
                  <SiReact size={28} />
                  <SiTailwindcss size={28} />
                  <SiAdobephotoshop size={28} />
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
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
