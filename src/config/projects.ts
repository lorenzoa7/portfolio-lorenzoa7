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
        title: projectsSection.projects.dfParser.title,
        description: projectsSection.projects.dfParser.description,
        about: projectsSection.projects.dfParser.about,
        imageHref: '/images/project_dfparser.png',
        imageAlt: projectsSection.projects.dfParser.imageAlt,
        appHref: 'https://dfparser.vercel.app',
        repositoryHref: 'https://github.com/lorenzoa7/df-parser',
        createdAt: projectsSection.projects.dfParser.createdAt,
        features: projectsSection.projects.dfParser.features,
        techKeys: [
          'typescript',
          'nextjs',
          'react',
          'tailwindcss',
          'reactHookForm',
          'zod',
        ],
      },
      {
        title: projectsSection.projects.aiChatbot.title,
        description: projectsSection.projects.aiChatbot.description,
        about: projectsSection.projects.aiChatbot.about,
        imageHref: '/images/project_aichatbot.png',
        imageAlt: projectsSection.projects.aiChatbot.imageAlt,
        appHref: 'https://lorenzoa7-aichatbot.vercel.app/',
        repositoryHref: 'https://github.com/lorenzoa7/ai-chatbot',
        createdAt: projectsSection.projects.aiChatbot.createdAt,
        features: projectsSection.projects.aiChatbot.features,
        techKeys: [
          'openai',
          'vercelTools',
          'typescript',
          'nextjs',
          'react',
          'tailwindcss',
        ],
      },
      {
        title: projectsSection.projects.coupleWheel.title,
        description: projectsSection.projects.coupleWheel.description,
        about: projectsSection.projects.coupleWheel.about,
        imageHref: '/images/project_couplewheel.png',
        imageAlt: projectsSection.projects.coupleWheel.imageAlt,
        appHref: 'https://couple-wheel.vercel.app/',
        repositoryHref: 'https://github.com/lorenzoa7/couple-wheel',
        createdAt: projectsSection.projects.coupleWheel.createdAt,
        features: projectsSection.projects.coupleWheel.features,
        techKeys: ['javascript', 'react', 'tailwindcss', 'photoshop'],
      },
      {
        title: projectsSection.projects.pocketTrader.title,
        description: projectsSection.projects.pocketTrader.description,
        about: projectsSection.projects.pocketTrader.about,
        imageHref: '/images/project_pocket_trader.png',
        imageAlt: projectsSection.projects.pocketTrader.imageAlt,
        repositoryHref: 'https://github.com/lorenzoa7/futures-pocket-trader',
        createdAt: projectsSection.projects.pocketTrader.createdAt,
        features: projectsSection.projects.pocketTrader.features,
        techKeys: [
          'typescript',
          'electron',
          'react',
          'tailwindcss',
          'reactHookForm',
          'zod',
        ],
      },
      {
        title: projectsSection.projects.myPortfolio.title,
        description: projectsSection.projects.myPortfolio.description,
        about: projectsSection.projects.myPortfolio.about,
        imageHref: '/images/project_portfolio.png',
        imageAlt: projectsSection.projects.myPortfolio.imageAlt,
        repositoryHref: 'https://github.com/lorenzoa7/portfolio-lorenzoa7',
        createdAt: projectsSection.projects.myPortfolio.createdAt,
        features: projectsSection.projects.myPortfolio.features,
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
        title: projectsSection.projects.springRestApi.title,
        description: projectsSection.projects.springRestApi.description,
        about: projectsSection.projects.springRestApi.about,
        imageHref: '/images/project_springrestapi.png',
        imageAlt: projectsSection.projects.springRestApi.imageAlt,
        repositoryHref: 'https://github.com/lorenzoa7/spring-rest-api',
        createdAt: projectsSection.projects.springRestApi.createdAt,
        features: projectsSection.projects.springRestApi.features,
        techKeys: ['java', 'springBoot', 'swagger'],
      },
      {
        title: projectsSection.projects.compraVenda.title,
        description: projectsSection.projects.compraVenda.description,
        about: projectsSection.projects.compraVenda.about,
        imageHref: '/images/project_compravenda.png',
        imageAlt: projectsSection.projects.compraVenda.imageAlt,
        repositoryHref: 'https://github.com/lorenzoa7/ControleCompraVenda',
        createdAt: projectsSection.projects.compraVenda.createdAt,
        features: projectsSection.projects.compraVenda.features,
        techKeys: ['java', 'bootstrap', 'jquery', 'mysql'],
      },
      {
        title: projectsSection.projects.getChemComponentsScript.title,
        description:
          projectsSection.projects.getChemComponentsScript.description,
        about: projectsSection.projects.getChemComponentsScript.about,
        imageHref: '/images/project_components_script.png',
        imageAlt: projectsSection.projects.getChemComponentsScript.imageAlt,
        repositoryHref:
          'https://github.com/lorenzoa7/get-chem-components-script',
        createdAt: projectsSection.projects.getChemComponentsScript.createdAt,
        features: projectsSection.projects.getChemComponentsScript.features,
        techKeys: ['python', 'pandas'],
      },
      {
        title: projectsSection.projects.myEslintConfig.title,
        description: projectsSection.projects.myEslintConfig.description,
        about: projectsSection.projects.myEslintConfig.about,
        imageHref: '/images/project_eslint_config.png',
        imageAlt: projectsSection.projects.myEslintConfig.imageAlt,
        repositoryHref: 'https://github.com/lorenzoa7/eslint-config-lorenzoa7',
        createdAt: projectsSection.projects.myEslintConfig.createdAt,
        features: projectsSection.projects.myEslintConfig.features,
        techKeys: ['javascript', 'npm'],
      },
    ] satisfies Project[],
  }

  return config
}

export type ProjectsConfig = Awaited<ReturnType<typeof generateProjectsConfig>>
export type Labels = ProjectsConfig['labels']
