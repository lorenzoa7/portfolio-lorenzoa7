import type { PersonalInfo, UsefulLink } from '@/types'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { MdEmail, MdPhone } from 'react-icons/md'

export const footerConfig = {
  personalInfo: [
    {
      title: 'lorenzo.acetii@gmail.com',
      icon: MdEmail,
    },
    {
      title: '+55 21 96540-0438',
      icon: MdPhone,
    },
  ] satisfies PersonalInfo[],
  credits: {
    title: '© 2023 - Portfolio - Lorenzo Aceti',
    hasLogo: true,
  },
  usefulLinks: [
    {
      icon: AiFillGithub,
      href: 'https://github.com/lorenzoa7',
    },
    {
      icon: AiFillLinkedin,
      href: 'https://www.linkedin.com/in/lorenzoaceti/',
    },
  ] satisfies UsefulLink[],
}

export type FooterConfig = typeof footerConfig
