import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import type { Project } from '@/types'

export const generateProjectsConfig = async ({ lang }: { lang: Locale }) => {
  const { projectsSection } = await getDictionary(lang)
  const config = {
    title: projectsSection.title,
    labels: projectsSection.labels,
    maxFeaturedProjects: 3,
    projects: [
      {
        title: projectsSection.projects.coupleWheel.title,
        description: projectsSection.projects.coupleWheel.description,
        about: projectsSection.projects.coupleWheel.about,
        imageHref: '/images/project_couplewheel.png',
        imageAlt: 'The main interface of Couple Wheel app.',
        appHref: 'https://couple-wheel.vercel.app/',
        repositoryHref: 'https://github.com/lorenzoa7/couple-wheel',
        createdAt: projectsSection.projects.coupleWheel.createdAt,
        features: projectsSection.projects.coupleWheel.features,
        techKeys: ['javascript', 'react', 'tailwindcss', 'photoshop'],
      },
      {
        title: 'My Portfolio',
        description:
          "Using the latest features of Next.JS 13 and TypeScript, I built my portfolio to show what I've made and what I can do to. I recommend you look at the repository for studying the way I like to code!",
        about:
          'I built my portfolio using my knowledge in UX/UI design and using a clean and maintainable architecture, as it is an application that will be updated quite often.',
        imageHref: '/images/project_portfolio.png',
        imageAlt: 'The main interface of my portfolio app.',
        repositoryHref: 'https://github.com/lorenzoa7/portfolio-lorenzoa7',
        createdAt: 'June 12, 2023',
        features: [
          'Built using latest features of Next.JS 13',
          'Dialogs using Radix UI component',
          'Composition Pattern',
          'App design using Figma',
          'Translation support',
        ],
        techKeys: [
          'typescript',
          'nextjs',
          'react',
          'tailwindcss',
          'figma',
          'photoshop',
        ],
      },
      {
        title: 'Df-Analyzer Interface (WIP)',
        description:
          'A web application that helps the user to generate their own script code, compatible enough to be used in a powerful analysis tool called Df-Analyzer.',
        about:
          'Currently in the development stage, the Df-Analyzer Interface is an ambitious project, which will be used by computer scientists to facilitate the use of the Df-Analyzer tool. In this application, I intend to use the most robust frontend tools to build a consistent, secure and user-friendly application.',
        imageHref: '/images/project_dfanalyzer.png',
        imageAlt: 'The main interface of Compra/Venda app.',
        appHref: 'https://dfanalyzer.vercel.app/',
        repositoryHref: 'https://github.com/lorenzoa7/df-analyzer',
        createdAt: 'Work in progress',
        techKeys: ['typescript', 'nextjs', 'react', 'tailwindcss'],
      },
      {
        title: 'Spring Rest API',
        description:
          'I built a Rest API using Java Spring Boot for five entity classes. Furthermore, everything was documented using Swagger.',
        about:
          "It's a very simple CRUD project, built using Spring Boot and the most modern libraries available. I created more to test Swagger's documentation generation.",
        imageHref: '/images/project_springrestapi.png',
        imageAlt: 'A small piece of API code.',
        repositoryHref: 'https://github.com/lorenzoa7/spring-rest-api',
        createdAt: 'July 13, 2023',
        features: [
          'Usage of Project Lombok library',
          'Five entity classes',
          'Complete CRUD (including PATCH method)',
          'H2 inmemory database',
        ],
        techKeys: ['java', 'springBoot', 'swagger'],
      },
      {
        title: 'Compra/Venda',
        description:
          'A web application that allows a store to have total control over the registration and monitoring of its products, customers, suppliers and employees.',
        about:
          'It is an application created basically to explore Servlets and Java Server Pages (JSP), as well as their importance for the evolution of the web, in addition to improving my development of CRUD systems.',
        imageHref: '/images/project_compravenda.png',
        imageAlt: 'The main interface of Compra/Venda app.',
        repositoryHref: 'https://github.com/lorenzoa7/ControleCompraVenda',
        createdAt: 'August 04, 2022',
        features: [
          'Complete CRUD system with MySQL database',
          'Use case diagram',
          'Auth system',
          'Four entity classes',
          'Admin functions',
        ],
        techKeys: ['java', 'bootstrap', 'jquery', 'mysql'],
      },
      {
        title: 'Get Chem Components Script',
        description:
          'A script for dynamically collecting public chemical compound data from NIST and exporting such data formatted into text files.',
        about:
          "It's a script for a very specific use, but it helped me understand how to create and use python scripts to automate long and repetitive tasks. The readAll.py script ran for around 4 hours on my computer to generate more than 3000 formatted text files.",
        imageHref: '/images/project_components_script.png',
        imageAlt: 'A demonstration of the script running.',
        repositoryHref:
          'https://github.com/lorenzoa7/get-chem-components-script',
        createdAt: 'June 15, 2023',
        features: [
          'Consumption of data from an external website',
          'HTML file formatting',
          'File generation',
        ],
        techKeys: ['python'],
      },
      {
        title: 'My ESLint Config',
        description:
          'A personal ESLint setup package with plugins that I consider essential for my projects.',
        about:
          'After testing projects a few times and needing to configure ESLint and the plugins I use from scratch, I found myself faced with the need to create a package of my own to facilitate this process.',
        imageHref: '/images/project_eslint_config.png',
        imageAlt: 'A small piece of the package config code.',
        repositoryHref: 'https://github.com/lorenzoa7/eslint-config-lorenzoa7',
        createdAt: 'July 18, 2023',
        features: ['Standard config', 'React plugin', 'Prettier for ESLint'],
        techKeys: ['javascript'],
      },
    ] satisfies Project[],
  }

  return config
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
      about:
        'I built my portfolio using my knowledge in UX/UI design and using a clean and maintainable architecture, as it is an application that will be updated quite often.',
      imageHref: '/images/project_portfolio.png',
      imageAlt: 'The main interface of my portfolio app.',
      repositoryHref: 'https://github.com/lorenzoa7/portfolio-lorenzoa7',
      createdAt: 'June 12, 2023',
      features: [
        'Built using latest features of Next.JS 13',
        'Dialogs using Radix UI component',
        'Composition Pattern',
        'App design using Figma',
        'Translation support',
      ],
      techKeys: [
        'typescript',
        'nextjs',
        'react',
        'tailwindcss',
        'figma',
        'photoshop',
      ],
    },
    {
      title: 'Df-Analyzer Interface (WIP)',
      description:
        'A web application that helps the user to generate their own script code, compatible enough to be used in a powerful analysis tool called Df-Analyzer.',
      about:
        'Currently in the development stage, the Df-Analyzer Interface is an ambitious project, which will be used by computer scientists to facilitate the use of the Df-Analyzer tool. In this application, I intend to use the most robust frontend tools to build a consistent, secure and user-friendly application.',
      imageHref: '/images/project_dfanalyzer.png',
      imageAlt: 'The main interface of Compra/Venda app.',
      appHref: 'https://dfanalyzer.vercel.app/',
      repositoryHref: 'https://github.com/lorenzoa7/df-analyzer',
      createdAt: 'Work in progress',
      techKeys: ['typescript', 'nextjs', 'react', 'tailwindcss'],
    },
    {
      title: 'Spring Rest API',
      description:
        'I built a Rest API using Java Spring Boot for five entity classes. Furthermore, everything was documented using Swagger.',
      about:
        "It's a very simple CRUD project, built using Spring Boot and the most modern libraries available. I created more to test Swagger's documentation generation.",
      imageHref: '/images/project_springrestapi.png',
      imageAlt: 'A small piece of API code.',
      repositoryHref: 'https://github.com/lorenzoa7/spring-rest-api',
      createdAt: 'July 13, 2023',
      features: [
        'Usage of Project Lombok library',
        'Five entity classes',
        'Complete CRUD (including PATCH method)',
        'H2 inmemory database',
      ],
      techKeys: ['java', 'springBoot', 'swagger'],
    },
    {
      title: 'Compra/Venda',
      description:
        'A web application that allows a store to have total control over the registration and monitoring of its products, customers, suppliers and employees.',
      about:
        'It is an application created basically to explore Servlets and Java Server Pages (JSP), as well as their importance for the evolution of the web, in addition to improving my development of CRUD systems.',
      imageHref: '/images/project_compravenda.png',
      imageAlt: 'The main interface of Compra/Venda app.',
      repositoryHref: 'https://github.com/lorenzoa7/ControleCompraVenda',
      createdAt: 'August 04, 2022',
      features: [
        'Complete CRUD system with MySQL database',
        'Use case diagram',
        'Auth system',
        'Four entity classes',
        'Admin functions',
      ],
      techKeys: ['java', 'bootstrap', 'jquery', 'mysql'],
    },
    {
      title: 'Get Chem Components Script',
      description:
        'A script for dynamically collecting public chemical compound data from NIST and exporting such data formatted into text files.',
      about:
        "It's a script for a very specific use, but it helped me understand how to create and use python scripts to automate long and repetitive tasks. The readAll.py script ran for around 4 hours on my computer to generate more than 3000 formatted text files.",
      imageHref: '/images/project_components_script.png',
      imageAlt: 'A demonstration of the script running.',
      repositoryHref: 'https://github.com/lorenzoa7/get-chem-components-script',
      createdAt: 'June 15, 2023',
      features: [
        'Consumption of data from an external website',
        'HTML file formatting',
        'File generation',
      ],
      techKeys: ['python'],
    },
    {
      title: 'My ESLint Config',
      description:
        'A personal ESLint setup package with plugins that I consider essential for my projects.',
      about:
        'After testing projects a few times and needing to configure ESLint and the plugins I use from scratch, I found myself faced with the need to create a package of my own to facilitate this process.',
      imageHref: '/images/project_eslint_config.png',
      imageAlt: 'A small piece of the package config code.',
      repositoryHref: 'https://github.com/lorenzoa7/eslint-config-lorenzoa7',
      createdAt: 'July 18, 2023',
      features: ['Standard config', 'React plugin', 'Prettier for ESLint'],
      techKeys: ['javascript'],
    },
  ] satisfies Project[],
}
export type ProjectsConfig = Awaited<ReturnType<typeof generateProjectsConfig>>
export type Labels = ProjectsConfig['labels']
