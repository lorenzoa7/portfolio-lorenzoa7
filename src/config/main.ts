import { Level, Skill } from '@/types'
import {
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiDjango,
  SiFigma,
  SiGraphql,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

import { BiLogoJava } from 'react-icons/bi'
import { BsDatabase } from 'react-icons/bs'

export const skillsConfig = {
  levels: [
    {
      title: 'Expert',
      skills: [
        {
          title: 'TypeScript',
          icon: SiTypescript,
        },
        {
          title: 'JavaScript',
          icon: SiJavascript,
        },
        {
          title: 'Python',
          icon: SiPython,
        },
        {
          title: 'React',
          icon: SiReact,
        },
        {
          title: 'Next.JS',
          icon: SiNextdotjs,
        },
        {
          title: 'Django',
          icon: SiDjango,
        },
        {
          title: 'TailwindCSS',
          icon: SiTailwindcss,
        },
        {
          title: 'Photoshop',
          icon: SiAdobephotoshop,
        },
      ] satisfies Skill[],
    },
    {
      title: 'Competent',
      skills: [
        {
          title: 'Database - SQL',
          icon: BsDatabase,
        },
        {
          title: 'Java',
          icon: BiLogoJava,
        },
        {
          title: 'Figma',
          icon: SiFigma,
        },
        {
          title: 'Premiere',
          icon: SiAdobepremierepro,
        },
        {
          title: 'After Effects',
          icon: SiAdobeaftereffects,
        },
      ],
    },
    {
      title: 'Learning',
      skills: [
        {
          title: 'Node.JS',
          icon: SiNodedotjs,
        },
        {
          title: 'Nest.JS',
          icon: SiNestjs,
        },
        {
          title: 'GraphQL',
          icon: SiGraphql,
        },
        {
          title: 'Prisma',
          icon: SiPrisma,
        },
      ],
    },
  ] satisfies Level[],
}
