import { getDictionary } from '@/get-dictionary'
import type { Locale } from '@/i18n-config'
import { FloatingMenuItem, NavItem } from '@/types'
import { AiFillFilePdf, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export const generateNavConfig = async ({ lang }: { lang: Locale }) => {
  const dict = await getDictionary(lang)
  const config = [
    {
      title: dict.nav.about,
      href: '#about',
    },
    {
      title: dict.nav.skills,
      href: '#skills',
    },
    {
      title: dict.nav.projects,
      href: '#projects',
    },
    {
      title: dict.nav.contact,
      href: '#contact',
    },
  ] satisfies NavItem[]

  return config
}

export const floatingMenuConfig = [
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
    href: {
      en: '/docs/lorenzo_aceti_cv_en.pdf',
      pt: '/docs/lorenzo_aceti_cv_pt.pdf',
    },
  },
] satisfies FloatingMenuItem[]

export type NavConfig = Awaited<ReturnType<typeof generateNavConfig>>
export type FloatingMenuConfig = typeof floatingMenuConfig
