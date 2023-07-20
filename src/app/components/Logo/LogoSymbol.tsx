import { siteConfig } from '@/app/config/site'
import Image from 'next/image'

type LogoSymbolProps = {
  size?: number
}

export function LogoSymbol({ size = 45 }: LogoSymbolProps) {
  return (
    <Image
      src={siteConfig.logo}
      alt={siteConfig.title}
      className="invert"
      width={size}
      height={size}
      priority
    />
  )
}
