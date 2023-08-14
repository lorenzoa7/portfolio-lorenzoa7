'use client'

import * as Popover from '@radix-ui/react-popover'
import Image from 'next/image'
import { FaEarthAmericas } from 'react-icons/fa6'

export default function LanguageSwitcher() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="fixed bottom-12 left-6 p-2 bg-amaranth-900 text-white font-semibold rounded-lg duration-300 shadow-2xl">
          <FaEarthAmericas className="w-5 h-5" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          side="top"
          sideOffset={10}
          align="start"
          className="animate-overlayShow data-[state='closed']:animate-overlayHide"
        >
          <div className="w-36 font-semibold text-white text-lg">
            <div className="flex items-center gap-5 cursor-pointer bg-amaranth-900 hover:bg-amaranth-950 py-3 px-4 shadow-2xl rounded-t-lg">
              <Image
                src="/flags/flag_br.svg"
                alt="Brazil's flag"
                width={20}
                height={20}
              />
              Portuguese
            </div>
            <div className="flex items-center gap-5 cursor-pointer bg-amaranth-900 hover:bg-amaranth-950 py-3 px-4 shadow-2xl rounded-b-lg">
              <Image
                src="/flags/flag_us.svg"
                alt="United State's flag"
                width={20}
                height={20}
              />
              English
            </div>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
