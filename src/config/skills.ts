import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import type { Level } from '@/types'
import { techConfig } from './tech'

export const generateSkillsConfig = async ({ lang }: { lang: Locale }) => {
  const { skillsSection } = await getDictionary(lang)
  const config = {
    title: skillsSection.title,
    levels: [
      {
        title: skillsSection.levels.expert,
        skills: [
          techConfig.react,
          techConfig.nextjs,
          techConfig.typescript,
          techConfig.tailwindcss,
          techConfig.nodejs,
        ],
      },
      {
        title: skillsSection.levels.competent,
        skills: [
          techConfig.nodejs,
          techConfig.python,
          techConfig.django,
          techConfig.prisma,
          techConfig.databaseSql,
          techConfig.figma,
          techConfig.premiere,
          techConfig.afterEffects,
          techConfig.claude,
          techConfig.tanstackQuery,
          techConfig.zod,
          techConfig.reactHookForm,
        ],
      },
      {
        title: skillsSection.levels.learning,
        skills: [
          techConfig.graphql,
          techConfig.playwright,
          techConfig.pandas,
          techConfig.llmAgents,
          techConfig.trpc,
        ],
      },
    ] satisfies Level[],
  }

  return config
}
