'use client'

import Image from 'next/image'
import { Drawer } from 'vaul'

type ProjectModalProps = {
  children: React.ReactNode
}

export default function ProjectModal({ children }: ProjectModalProps) {
  return (
    <Drawer.Root>
      <Drawer.Trigger>{children}</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0">
          <div className="p-4 bg-white rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
            <div className="max-w-7xl mx-auto">
              <main className="flex items-start gap-16 w-full">
                <div className="flex flex-col gap-4 w-[576px]">
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

                <div className="relative w-[640px] h-[360px] bg-red-500 overflow-hidden">
                  <Image
                    fill
                    src="/images/project_couplewheel.png"
                    alt="The main interface of Couple Wheel app."
                    className="object-fill"
                  />
                </div>
              </main>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
