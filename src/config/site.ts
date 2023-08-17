import { Languages } from '@/types'

export const siteConfig = {
  title: 'Lorenzo Aceti | Portfolio',
  description:
    "A portfolio of Lorenzo Aceti's work as a full-stack developer and designer.",
  logo: 'logo.svg',
  languages: {
    en: {
      name: 'English',
      flag: '/flags/flag_us.svg',
      alt: 'Portuguese language',
    },
    pt: {
      name: 'Portuguese',
      flag: '/flags/flag_br.svg',
      alt: 'English language',
    },
  } satisfies Languages,
}

export type SiteConfig = typeof siteConfig
