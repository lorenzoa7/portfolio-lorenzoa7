import { FloatingMenuItem, NavItem } from '@/types'
import { AiFillFilePdf, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export const headerConfig = {
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
      icon: AiFillGithub,
      href: 'https://github.com/lorenzoa7',
    },
    {
      title: 'Linkedin',
      icon: AiFillLinkedin,
      href: 'https://www.linkedin.com/in/lorenzoaceti/',
    },
    {
      title: 'CV',
      icon: AiFillFilePdf,
      href: '#',
    },
  ] satisfies FloatingMenuItem[],
}

export type HeaderConfig = typeof headerConfig
