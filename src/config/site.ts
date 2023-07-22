import type { FloatingMenuItem, NavItem } from '@/types'
import { FileText, Github, Linkedin } from 'lucide-react'

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
  floatingMenu: [
    {
      title: 'Github',
      icon: Github,
      href: 'https://github.com/lorenzoa7',
    },
    {
      title: 'Linkedin',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/lorenzoaceti/',
    },
    {
      title: 'CV',
      icon: FileText,
      href: '#',
    },
  ] satisfies FloatingMenuItem[],
}

export type SiteConfig = typeof siteConfig
