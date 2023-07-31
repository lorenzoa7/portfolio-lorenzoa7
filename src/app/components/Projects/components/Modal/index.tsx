'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function Modal() {
  const searchParams = useSearchParams()

  const search = !!searchParams.get('modal')

  if (search)
    return (
      <Link
        href="/"
        className="flex justify-center items-center fixed inset-0 h-screen w-screen backdrop-blur-sm bg-black/25 z-40 cursor-default"
      >
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8/12 h-10/12 bg-white shadow-2xl z-50">
          Hello World
        </div>
      </Link>
    )
}
