import { footerConfig } from '@/config/footer'
import { Credits, Personal, Useful } from './components'

export default function Footer() {
  return (
    <footer className="relative mt-auto flex h-24 w-full items-end justify-between bg-gradient-to-r from-amaranth-800 to-amaranth-500 px-40 pb-3 text-xl font-light text-white xl:px-20 lg:px-10 lg:text-lg md:flex-col md:items-center md:justify-center md:px-5 md:pb-14 md:pt-16 sm:px-2">
      <Personal.Root>
        {footerConfig?.personalInfo?.map((info) => (
          <Personal.Info key={info.title} icon={info.icon}>
            {info.title}
          </Personal.Info>
        ))}
      </Personal.Root>

      <Credits logo={footerConfig?.credits?.hasLogo}>
        {footerConfig?.credits?.title}
      </Credits>

      <Useful.Root>
        {footerConfig?.usefulLinks?.map((link, index) => (
          <Useful.Link key={index} icon={link.icon} href={link.href ?? ''} />
        ))}
      </Useful.Root>
    </footer>
  )
}
