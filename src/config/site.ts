import { LanguageConfig } from '@/types'

export const siteConfig = {
  title: 'Lorenzo Aceti | Portfolio',
  description:
    "A portfolio of Lorenzo Aceti's work as a full-stack developer and designer.",
  logo: 'logo.svg',
  languages: [
    {
      name: 'English',
      flag: '/flags/flag_us.svg',
      alt: 'Portuguese language',
    },
    {
      name: 'Portuguese',
      flag: '/flags/flag_br.svg',
      alt: 'English language',
    },
  ] satisfies LanguageConfig[],
}

export type SiteConfig = typeof siteConfig
