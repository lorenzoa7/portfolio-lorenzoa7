import { FloatingMenuItem, NavItem } from '@/types'
import { AiFillFilePdf, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export const headerConfig = {
  nav: [
    {
      title: 'About',
      href: '#about',
    },
    {
      title: 'Skills',
      href: '#skills',
    },
    {
      title: 'Projects',
      href: '#projects',
    },
    {
      title: 'Contact',
      href: '#contact',
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
      href: '/docs/lorenzo_aceti_cv.pdf',
    },
  ] satisfies FloatingMenuItem[],
}

export type HeaderConfig = typeof headerConfig
