'use client'

import * as Popover from '@radix-ui/react-popover'
import { FaEarthAmericas } from 'react-icons/fa6'

type LanguageSwitcherRootProps = {
  children: React.ReactNode
}

export default function LanguageSwitcherRoot({
  children,
}: LanguageSwitcherRootProps) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="fixed bottom-12 left-6 z-50 rounded-lg bg-amaranth-950 p-2 font-semibold text-white shadow-2xl duration-300 xl:bottom-28 sm:bottom-auto sm:top-5">
          <FaEarthAmericas className="h-5 w-5" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          side="top"
          sideOffset={10}
          align="start"
          className="z-50 animate-overlayShow data-[state='closed']:animate-overlayHide"
        >
          <div className="w-36 text-lg font-semibold text-white">
            {children}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
