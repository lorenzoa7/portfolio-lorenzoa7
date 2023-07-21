import type { NavItem } from '@/types'

export const siteConfig = {
  title: 'Lorenzo Aceti | Portfolio',
  description:
    "A portfolio of Lorenzo Aceti's work as a full-stack developer and designer.",
  logo: 'logo.svg',
  nav: [
    {
      title: 'About',
      href: '#',
    },
    {
      title: 'Skills',
      href: '#',
    },
    {
      title: 'Projects',
      href: '#',
    },
    {
      title: 'Contact',
      href: '#',
    },
  ] satisfies NavItem[],
}

export type SiteConfig = typeof siteConfig
