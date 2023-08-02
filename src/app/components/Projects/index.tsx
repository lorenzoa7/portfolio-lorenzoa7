import { projectsConfig } from '@/config/main'
import { AiFillStar } from 'react-icons/ai'
import { Project, ProjectModal } from './components'

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
            {projectsConfig?.projects
              ?.slice(0, projectsConfig.maxFeaturedProjects)
              .map((project) => (
                <ProjectModal key={project.title} project={project}>
                  <Project.Root>
                    <div className="absolute -top-5 -right-5 text-yellow-400 rotate-12 group-hover:scale-125 group-hover:text-yellow-500 duration-300">
                      <AiFillStar size={45} />
                    </div>
                    <Project.Image
                      src={project.imageHref}
                      alt={project.imageAlt}
                    />

                    <Project.Info.Root>
                      <Project.Info.Title>{project.title}</Project.Info.Title>
                      <Project.Info.Description>
                        {project.description}
                      </Project.Info.Description>
                    </Project.Info.Root>

                    <Project.Links.Root>
                      {project.appHref && (
                        <Project.Links.App href={project.appHref} />
                      )}
                      {project.repositoryHref && (
                        <Project.Links.Repository
                          href={project.repositoryHref}
                        />
                      )}
                    </Project.Links.Root>
                  </Project.Root>
                </ProjectModal>
              ))}
          </div>
        </section>

        <section>
          <h3 className="text-rose-800 font-semibold text-2xl">
            More projects
          </h3>
          <div className="flex items-center justify-center gap-8">
            {projectsConfig?.projects
              ?.slice(projectsConfig.maxFeaturedProjects)
              .map((project) => (
                <ProjectModal key={project.title} project={project}>
                  <Project.Root>
                    <Project.Image
                      src={project.imageHref}
                      alt={project.imageAlt}
                    />

                    <Project.Info.Root>
                      <Project.Info.Title>{project.title}</Project.Info.Title>
                      <Project.Info.Description>
                        {project.description}
                      </Project.Info.Description>
                    </Project.Info.Root>

                    <Project.Links.Root>
                      {project.appHref && (
                        <Project.Links.App href={project.appHref} />
                      )}
                      {project.repositoryHref && (
                        <Project.Links.Repository
                          href={project.repositoryHref}
                        />
                      )}
                    </Project.Links.Root>
                  </Project.Root>
                </ProjectModal>
              ))}
          </div>
        </section>
      </div>
    </section>
  )
}
