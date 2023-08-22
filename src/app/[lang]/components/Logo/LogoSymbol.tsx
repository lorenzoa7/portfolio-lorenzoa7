import { siteConfig } from '@/config/site'
import Image from 'next/image'

type LogoSymbolProps = {
  size?: 'small' | 'medium'
}

export function LogoSymbol({ size = 'medium' }: LogoSymbolProps) {
  return (
    <div
      data-size={size}
      className="relative data-[size='medium']:h-11 data-[size='small']:h-9 data-[size='medium']:w-11 data-[size='small']:w-9 md:data-[size='small']:hidden"
    >
      <Image
        src={siteConfig.logo}
        alt={siteConfig.title}
        className="object-cover invert"
        fill
        sizes="(max-width: 639px) 10px, 45px"
        priority
      />
    </div>
  )
}
