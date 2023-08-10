import { siteConfig } from '@/config/site'
import Image from 'next/image'

type LogoSymbolProps = {
  size?: 'small' | 'medium'
}

export function LogoSymbol({ size = 'medium' }: LogoSymbolProps) {
  return (
    <div
      data-size={size}
      className="relative data-[size='small']:w-9 data-[size='small']:h-9 data-[size='medium']:w-11 data-[size='medium']:h-11 sm:data-[size='medium']:w-6 sm:data-[size='medium']:h-6 sm:data-[size='small']:w-5 sm:data-[size='small']:h-5"
    >
      <Image
        src={siteConfig.logo}
        alt={siteConfig.title}
        className="invert object-cover"
        fill
        sizes="(max-width: 639px) 10px, 45px"
        priority
      />
    </div>
  )
}
