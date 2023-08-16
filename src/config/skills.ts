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
        title: skillsSection.levels.competent,
        skills: [
          techConfig.databaseSql,
          techConfig.java,
          techConfig.figma,
          techConfig.premiere,
          techConfig.afterEffects,
        ],
      },
      {
        title: skillsSection.levels.learning,
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
