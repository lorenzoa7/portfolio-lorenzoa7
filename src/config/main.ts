import type { Level, Project, Skill } from '@/types'
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

export const projectsConfig = {
  maxFeaturedProjects: 3,
  projects: [
    {
      title: 'Couple Wheel',
      description:
        "Couple Wheel is a game to be played in pairs, where both players select activities they would like to do together and spin the wheel to randomly choose one. It's a great game for indecisive couples!",
      imageHref: '/images/project_couplewheel.png',
      imageAlt: 'The main interface of Couple Wheel app.',
      appHref: 'https://couple-wheel.vercel.app/',
      repositoryHref: 'https://github.com/lorenzoa7/couple-wheel',
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
