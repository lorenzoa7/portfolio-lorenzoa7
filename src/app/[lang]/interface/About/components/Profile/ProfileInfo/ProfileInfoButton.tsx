'use client'

import Link from 'next/link'

type AboutInfoButtonProps = {
  children: React.ReactNode
}

const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  e.preventDefault()

  const href = e.currentTarget.href
  const sectionId = href.replace(/.*#/, '')
  const sectionElement = document.getElementById(sectionId)

  sectionElement?.scrollIntoView({
    behavior: 'smooth',
  })
}

export default function AboutInfoButton({ children }: AboutInfoButtonProps) {
  return (
    <Link
      href="#skills"
      className="group mt-6 flex w-fit cursor-pointer items-center gap-3 text-xl font-thin lowercase text-white duration-150 hover:text-neutral-300 xl:mb-14 xl:mt-0 sm:mb-5"
      onClick={(e) => handleClick(e)}
    >
      {children}
      {/* Arrow down icon animated */}
      <div>
        <span className="m-[-4px] block h-2 w-2 rotate-45 animate-scrollOne border-b-2 border-r-2 border-white duration-150 group-hover:border-neutral-300"></span>
        <span className="m-[-4px] block h-2 w-2 rotate-45 animate-scrollTwo border-b-2 border-r-2 border-white duration-150 group-hover:border-neutral-300"></span>
      </div>
    </Link>
  )
}
