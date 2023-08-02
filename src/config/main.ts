import type { Level, Project, TechConfig as TechConfigType } from '@/types'
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
  sql: {
    title: 'Database - SQL',
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
} satisfies TechConfigType

export const skillsConfig = {
  levels: [
    {
      title: 'Expert',
      skills: [
        techConfig.typescript,
        techConfig.javascript,
        techConfig.python,
        techConfig.react,
        techConfig.nextjs,
        techConfig.django,
        techConfig.tailwindcss,
        techConfig.photoshop,
      ],
    },
    {
      title: 'Competent',
      skills: [
        techConfig.sql,
        techConfig.java,
        techConfig.figma,
        techConfig.premiere,
        techConfig.afterEffects,
      ],
    },
    {
      title: 'Learning',
      skills: [
        techConfig.nodejs,
        techConfig.nestjs,
        techConfig.graphql,
        techConfig.prisma,
      ],
    },
  ] satisfies Level[],
}

export const projectsConfig = {
  maxFeaturedProjects: 3,
  projects: [
    {
      title: 'Couple Wheel',
      description:
        "Couple Wheel is a game to be played in pairs, where both players select activities they would like to do together and spin the wheel to randomly choose one. It's a great game for indecisive couples!",
      about:
        "I had the idea to create this project as a Valentine's Day gift for my girlfriend. But as development progressed, I thought about expanding and making a real game for couples to enjoy. It was a great learning experience to build this application and I hope to evolve it even more in the future!",
      imageHref: '/images/project_couplewheel.png',
      imageAlt: 'The main interface of Couple Wheel app.',
      appHref: 'https://couple-wheel.vercel.app/',
      repositoryHref: 'https://github.com/lorenzoa7/couple-wheel',
      createdAt: 'June 12, 2023',
      features: [
        'Add activities to a list and sort them',
        'Coin system to reroll the drawn activity',
        'Each time an activity is drawn, the harder it is to be drawn again (weight system)',
        'Spinning animation',
        'Translation support (English, Portuguese and Spanish)',
        'Theme selection for each player',
        'Export and open a game (local storage)',
        'Game configuration (play with the default values)',
      ],
      techKeys: ['javascript', 'react', 'tailwindcss', 'photoshop'],
    },
    {
      title: 'My Portfolio',
      description:
        "Using the latest features of Next.JS 13 and TypeScript, I built my portfolio to show what I've made and what I can do to. I recommend you look at the repository for studying the way I like to code!",
      imageHref: '/images/project_portfolio.png',
      imageAlt: 'The main interface of my portfolio app.',
      repositoryHref: 'https://github.com/lorenzoa7/portfolio-lorenzoa7',
    },
    {
      title: 'Df-Analyzer Interface (WIP)',
      description:
        'A web application that helps the user to generate their own script code, compatible enough to be used in a powerful analysis tool called Df-Analyzer.',
      imageHref: '/images/project_dfanalyzer.png',
      imageAlt: 'The main interface of Compra/Venda app.',
      appHref: 'https://dfanalyzer.vercel.app/',
      repositoryHref: 'https://github.com/lorenzoa7/df-analyzer',
    },
    {
      title: 'Spring Rest API',
      description:
        'I built a Rest API using Java Spring Boot for five entity classes. Furthermore, everything was documented using Swagger.',
      imageHref: '/images/project_springrestapi.png',
      imageAlt: 'A small piece of API code.',
      repositoryHref: 'https://github.com/lorenzoa7/spring-rest-api',
    },
    {
      title: 'Compra/Venda',
      description:
        'A web application that allows a store to have total control over the registration and monitoring of its products, customers, suppliers and employees.',
      imageHref: '/images/project_compravenda.png',
      imageAlt: 'The main interface of Compra/Venda app.',
      repositoryHref: 'https://github.com/lorenzoa7/ControleCompraVenda',
    },
    {
      title: 'Get Chem Components Script',
      description:
        'A script for dynamically collecting public chemical compound data from NIST and exporting such data formatted into text files.',
      imageHref: '/images/project_components_script.png',
      imageAlt: 'A demonstration of the script running.',
      repositoryHref: 'https://github.com/lorenzoa7/get-chem-components-script',
    },
    {
      title: 'My ESLint Config',
      description:
        'A personal ESLint setup package with plugins that I consider essential for my projects.',
      imageHref: '/images/project_eslint_config.png',
      imageAlt: 'A small piece of the package config code.',
      repositoryHref: 'https://github.com/lorenzoa7/eslint-config-lorenzoa7',
    },
  ] satisfies Project[],
}

export type SkillsConfig = typeof skillsConfig
export type ProjectsConfig = typeof projectsConfig
export type TechConfig = typeof techConfig
