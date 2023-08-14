import Link from 'next/link'

type AboutInfoButtonProps = {
  children: React.ReactNode
}

export default function AboutInfoButton({ children }: AboutInfoButtonProps) {
  return (
    <Link
      href="#skills"
      className="flex items-center gap-3 lowercase text-xl text-white font-thin cursor-pointer w-fit mt-6 group hover:text-neutral-300 duration-150 lg:invisible lg:pointer-events-none xl:mt-0 xl:mb-14 sm:visible sm:mb-5"
    >
      {children}
      {/* Arrow down icon animated */}
      <div>
        <span className="block w-2 h-2 border-b-2 border-r-2 border-white rotate-45 -m-[4px] animate-scrollOne group-hover:border-neutral-300 duration-150"></span>
        <span className="block w-2 h-2 border-b-2 border-r-2 border-white rotate-45 -m-[4px] animate-scrollTwo group-hover:border-neutral-300 duration-150"></span>
      </div>
    </Link>
  )
}
