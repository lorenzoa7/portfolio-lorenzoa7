import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import type { Level } from '@/types'
import { techConfig } from './tech'

export const generateSkillsConfig = async ({ lang }: { lang: Locale }) => {
  const dict = await getDictionary(lang)
  const config = {
    title: dict.skills.title,
    levels: [
      {
        title: dict.skills.levels.expert,
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
        title: dict.skills.levels.competent,
        skills: [
          techConfig.databaseSql,
          techConfig.java,
          techConfig.figma,
          techConfig.premiere,
          techConfig.afterEffects,
        ],
      },
      {
        title: dict.skills.levels.learning,
        skills: [
          techConfig.nodejs,
          techConfig.nestjs,
          techConfig.graphql,
          techConfig.prisma,
        ],
      },
    ] satisfies Level[],
  }

  return config
}
