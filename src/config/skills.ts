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
          techConfig.photoshop,
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
        ],
      },
      {
        title: skillsSection.levels.learning,
        skills: [techConfig.nestjs, techConfig.graphql],
      },
    ] satisfies Level[],
  }

  return config
}
