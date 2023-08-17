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
        <button className="fixed bottom-12 left-6 p-2 bg-amaranth-950 text-white font-semibold rounded-lg duration-300 shadow-2xl z-50">
          <FaEarthAmericas className="w-5 h-5" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          side="top"
          sideOffset={10}
          align="start"
          className="animate-overlayShow data-[state='closed']:animate-overlayHide z-50"
        >
          <div className="w-36 font-semibold text-white text-lg">
            {children}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
