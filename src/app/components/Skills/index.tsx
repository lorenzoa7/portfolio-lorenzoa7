import { skillsConfig } from '@/config/main'
import { Level } from './components'

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="uppercase text-neutral-700 text-4xl font-semibold">
        Skills
      </h2>
      <div className="flex flex-col gap-10 px-36 py-16 lg:px-10">
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
