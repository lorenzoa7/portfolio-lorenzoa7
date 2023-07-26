import { Project } from './components'

export default function Projects() {
  return (
    <section>
      <h2 className="uppercase text-neutral-700 text-4xl font-semibold">
        Projects
      </h2>

      <div className="flex flex-col gap-10 px-36 py-16">
        <section>
          <h3 className="text-rose-800 font-semibold text-2xl">Featured</h3>
          <div className="flex items-center justify-center gap-8">
            <Project.Root>
              <Project.Image
                src="/images/project_couplewheel.png"
                alt="A image."
              />

              <Project.Info.Root>
                <Project.Info.Title>Project One</Project.Info.Title>
                <Project.Info.Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  sed purus iaculis, consequat justo finibus, hendrerit risus.
                  Sed varius, sapien ac vestibulum condimentum, leo urna tempor
                  lorem, eget pretium lacus urna nec mi.
                </Project.Info.Description>
              </Project.Info.Root>

              <Project.Links.Root>
                <Project.Links.App />
                <Project.Links.Repository />
              </Project.Links.Root>
            </Project.Root>
          </div>
        </section>

        <section>
          <h3 className="text-rose-800 font-semibold text-2xl">
            More projects
          </h3>
          <div></div>
        </section>
      </div>
    </section>
  )
}
