import type { TechConfig as TechConfigType } from '@/types'
import { BiLogoJava } from 'react-icons/bi'
import { BsDatabase } from 'react-icons/bs'
import {
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiBootstrap,
  SiDjango,
  SiFigma,
  SiGraphql,
  SiJavascript,
  SiJquery,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiPython,
  SiReact,
  SiSpringboot,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

export const techConfig = {
  typescript: {
    title: 'TypeScript',
    icon: SiTypescript,
  },
  javascript: {
    title: 'JavaScript',
    icon: SiJavascript,
  },
  python: {
    title: 'Python',
    icon: SiPython,
  },
  react: {
    title: 'React',
    icon: SiReact,
  },
  nextjs: {
    title: 'Next.JS',
    icon: SiNextdotjs,
  },
  django: {
    title: 'Django',
    icon: SiDjango,
  },
  tailwindcss: {
    title: 'TailwindCSS',
    icon: SiTailwindcss,
  },
  photoshop: {
    title: 'Photoshop',
    icon: SiAdobephotoshop,
  },
  databaseSql: {
    title: 'DB - SQL',
    icon: BsDatabase,
  },
  java: {
    title: 'Java',
    icon: BiLogoJava,
  },
  figma: {
    title: 'Figma',
    icon: SiFigma,
  },
  premiere: {
    title: 'Premiere',
    icon: SiAdobepremierepro,
  },
  afterEffects: {
    title: 'After Effects',
    icon: SiAdobeaftereffects,
  },
  nodejs: {
    title: 'Node.JS',
    icon: SiNodedotjs,
  },
  nestjs: {
    title: 'Nest.JS',
    icon: SiNestjs,
  },
  graphql: {
    title: 'GraphQL',
    icon: SiGraphql,
  },
  prisma: {
    title: 'Prisma',
    icon: SiPrisma,
  },
  springBoot: {
    title: 'Spring Boot',
    icon: SiSpringboot,
  },
  swagger: {
    title: 'Swagger',
    icon: SiSwagger,
  },
  bootstrap: {
    title: 'Bootstrap',
    icon: SiBootstrap,
  },
  jquery: {
    title: 'jQuery',
    icon: SiJquery,
  },
  mysql: {
    title: 'MySQL',
    icon: SiMysql,
  },
} satisfies TechConfigType

export type TechConfig = typeof techConfig