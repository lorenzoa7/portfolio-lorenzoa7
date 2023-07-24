import { SiTypescript } from 'react-icons/si'
import { Level } from './components'

export default function Skills() {
  return (
    <section>
      <h2 className="uppercase text-neutral-700 text-4xl font-semibold">
        Skills
      </h2>
      <div className="px-36 py-16">
        <Level.Root>
          <Level.Title>Expert</Level.Title>
          <Level.Items.Root>
            <Level.Items.Skill icon={SiTypescript}>
              TypeScript
            </Level.Items.Skill>

            <Level.Items.Skill icon={SiTypescript}>
              JavaScript
            </Level.Items.Skill>

            <Level.Items.Skill icon={SiTypescript}>Python</Level.Items.Skill>

            <Level.Items.Skill icon={SiTypescript}>React</Level.Items.Skill>

            <Level.Items.Skill icon={SiTypescript}>Next.JS</Level.Items.Skill>

            <Level.Items.Skill icon={SiTypescript}>Django</Level.Items.Skill>

            <Level.Items.Skill icon={SiTypescript}>
              TailwindCSS
            </Level.Items.Skill>

            <Level.Items.Skill icon={SiTypescript}>Photoshop</Level.Items.Skill>
          </Level.Items.Root>
        </Level.Root>

        <div></div>

        <div></div>
      </div>
    </section>
  )
}
