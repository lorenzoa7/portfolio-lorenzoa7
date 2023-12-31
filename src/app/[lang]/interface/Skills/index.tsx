import { generateSkillsConfig } from '@/config/skills'
import { Locale } from '@/i18n-config'
import { Level } from './components'

type SkillsProps = {
  lang: Locale
}

export default async function Skills({ lang }: SkillsProps) {
  const skillsConfig = await generateSkillsConfig({ lang })
  return (
    <section id="skills">
      <h2 className="text-4xl font-semibold uppercase text-neutral-700">
        {skillsConfig.title}
      </h2>
      <div className="flex flex-col gap-10 px-36 py-16 xl:px-10 sm:px-2">
        {skillsConfig.levels?.map((level) => (
          <Level.Root key={level.title}>
            <Level.Title>{level.title}</Level.Title>
            <Level.Items.Root>
              {level.skills?.map((skill) => (
                <Level.Items.Skill icon={skill.icon} key={skill.title}>
                  {skill.title}
                </Level.Items.Skill>
              ))}
            </Level.Items.Root>
          </Level.Root>
        ))}
      </div>
    </section>
  )
}
