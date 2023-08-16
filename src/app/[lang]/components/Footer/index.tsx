import { footerConfig } from '@/config/footer'
import { Credits, Personal, Useful } from './components'

export default function Footer() {
  return (
    <footer className="relative flex justify-between items-end mt-auto w-full h-24 pb-3 bg-gradient-to-r from-amaranth-800 to-amaranth-500 px-40 text-white font-light text-xl lg:px-10 lg:text-lg md:px-5 xl:px-20 sm:px-2 sm:flex-col sm:items-center sm:justify-center sm:pt-16 sm:pb-14">
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