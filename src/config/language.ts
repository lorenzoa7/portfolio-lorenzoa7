import { getDictionary } from '@/get-dictionary'
import type { Locale } from '@/i18n-config'
import { Languages } from '@/types'

export const generateLanguageConfig = async ({ lang }: { lang: Locale }) => {
  const { languages } = await getDictionary(lang)
  const config = {
    en: {
      name: languages.en.name,
      flag: '/flags/flag_us.svg',
      alt: languages.en.alt,
    },
    pt: {
      name: languages.pt.name,
      flag: '/flags/flag_br.svg',
      alt: languages.pt.alt,
    },
  } satisfies Languages

  return config
}

export type LanguageConfig = Awaited<ReturnType<typeof generateLanguageConfig>>
