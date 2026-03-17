import { ZodIcon } from '@/components/icons/zod'
import type { TechConfig as TechConfigType } from '@/types'
import { BiLogoJava } from 'react-icons/bi'
import { BsDatabase } from 'react-icons/bs'
import { FaTheaterMasks } from 'react-icons/fa'

import {
  SiBootstrap,
  SiClaude,
  SiDjango,
  SiElectron,
  SiFigma,
  SiGraphql,
  SiJavascript,
  SiJquery,
  SiMockserviceworker,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiOpenai,
  SiPandas,
  SiPrisma,
  SiPython,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiSpringboot,
  SiSwagger,
  SiTailwindcss,
  SiTrpc,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'
import {
  TbBrandAdobeAfterEffect,
  TbBrandAdobePhotoshop,
  TbBrandAdobePremier,
} from 'react-icons/tb'
import { GiArtificialIntelligence } from 'react-icons/gi'

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
    icon: TbBrandAdobePhotoshop,
  },
  databaseSql: {
    title: 'SQL',
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
    icon: TbBrandAdobePremier,
  },
  afterEffects: {
    title: 'After Effects',
    icon: TbBrandAdobeAfterEffect,
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
  openai: {
    title: 'OpenAI',
    icon: SiOpenai,
  },
  vercelTools: {
    title: 'Vercel Tools',
    icon: SiVercel,
  },
  pandas: {
    title: 'Pandas',
    icon: SiPandas,
  },
  npm: {
    title: 'NPM',
    icon: SiNpm,
  },
  reactHookForm: {
    title: 'React Hook Form',
    icon: SiReacthookform,
  },
  zod: {
    title: 'Zod',
    icon: ZodIcon,
  },
  electron: {
    title: 'Electron',
    icon: SiElectron,
  },
  tanstackQuery: {
    title: 'Tanstack Query',
    icon: SiReactquery,
  },
  playwright: {
    title: 'Playwright',
    icon: FaTheaterMasks,
  },
  trpc: {
    title: 'tRPC',
    icon: SiTrpc,
  },
  msw: {
    title: 'msw',
    icon: SiMockserviceworker,
  },
  claude: {
    title: 'Claude Code',
    icon: SiClaude,
  },
  llmAgents: {
    title: 'LLM Agents',
    icon: GiArtificialIntelligence,
  },
} satisfies TechConfigType

export type TechConfig = typeof techConfig

export type TechKeys = keyof TechConfig
