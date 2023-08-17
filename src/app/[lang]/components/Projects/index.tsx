import { generateProjectsConfig } from '@/config/projects'
import { Locale } from '@/i18n-config'
import { AiFillStar } from 'react-icons/ai'
import { Project, ProjectModal } from './components'

type ProjectsProps = {
  lang: Locale
}

export default async function Projects({ lang }: ProjectsProps) {
  const projectsConfig = await generateProjectsConfig({ lang })
  return (
    <section id="projects">
      <h2 className="uppercase text-neutral-700 text-4xl font-semibold">
        {projectsConfig.title}
      </h2>

      <div className="flex flex-col gap-10 px-0 py-16 xl:px-10 sm:px-2">
        <section>
          <h3 className="text-amaranth-800 font-semibold text-2xl">
            {projectsConfig.labels.featured}
          </h3>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {projectsConfig.projects
              .slice(0, projectsConfig.maxFeaturedProjects)
              .map((project) => (
                <ProjectModal
                  key={project.title}
                  project={project}
                  labels={projectsConfig.labels}
                >
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
                      <Project.Info.More>
                        {projectsConfig.labels.seeMore}...
                      </Project.Info.More>
                    </Project.Info.Root>

                    <Project.Links.Root className="mt-12">
                      {project.appHref && (
                        <Project.Links.Button type="app" href={project.appHref}>
                          {projectsConfig.labels.app}
                        </Project.Links.Button>
                      )}
                      {project.repositoryHref && (
                        <Project.Links.Button
                          type="repository"
                          href={project.repositoryHref}
                        >
                          {projectsConfig.labels.repository}
                        </Project.Links.Button>
                      )}
                    </Project.Links.Root>
                  </Project.Root>
                </ProjectModal>
              ))}
          </div>
        </section>

        <section>
          <h3 className="text-amaranth-800 font-semibold text-2xl">
            {projectsConfig.labels.moreProjects}
          </h3>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {projectsConfig.projects
              .slice(projectsConfig.maxFeaturedProjects)
              .map((project) => (
                <ProjectModal
                  key={project.title}
                  project={project}
                  labels={projectsConfig.labels}
                >
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
                      <Project.Info.More>
                        {projectsConfig.labels.seeMore}...
                      </Project.Info.More>
                    </Project.Info.Root>

                    <Project.Links.Root className="mt-12">
                      {project.appHref && (
                        <Project.Links.Button type="app" href={project.appHref}>
                          {projectsConfig.labels.app}
                        </Project.Links.Button>
                      )}
                      {project.repositoryHref && (
                        <Project.Links.Button
                          type="repository"
                          href={project.repositoryHref}
                        >
                          {projectsConfig.labels.repository}
                        </Project.Links.Button>
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
