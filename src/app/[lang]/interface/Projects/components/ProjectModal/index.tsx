'use client'

import type { Labels } from '@/config/projects'
import type { TechConfig } from '@/config/tech'
import { techConfig } from '@/config/tech'
import { Project as ProjectType } from '@/types'
import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { GrFormClose } from 'react-icons/gr'
import { Project } from '../Project'

type ProjectModalProps = {
  children: React.ReactNode
  project: ProjectType
  labels: Labels
}

export default function ProjectModal({
  children,
  project,
  labels,
}: ProjectModalProps) {
  const getIcon = (key: string, size = 28) => {
    const IconComponent = techConfig[key as keyof TechConfig].icon

    if (!IconComponent) return null
    return <IconComponent size={size} width={size} height={size} />
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 animate-overlayShow bg-black/50 backdrop-blur-sm data-[state='closed']:animate-overlayHide" />
        <Dialog.Content
          onOpenAutoFocus={(event) => event?.preventDefault()}
          className="fixed left-1/2 top-1/2 z-50 mx-auto max-h-[calc(100vh-40px)] w-[1280px] -translate-x-1/2 -translate-y-1/2 animate-contentShow overflow-y-auto rounded-xl bg-white px-7 py-5 data-[state='closed']:animate-contentHide xl:w-[calc(100vw-40px)]"
        >
          <div className="mb-6 flex w-fit gap-1 self-start">
            <Dialog.Close asChild>
              <div className="mr-1.5 flex h-3 w-3 scale-[2] cursor-pointer items-center justify-center rounded-full bg-red-500 duration-300 hover:bg-red-600">
                <GrFormClose />
              </div>
            </Dialog.Close>
            <div className="h-3 w-3 rounded-full bg-stone-300"></div>
            <div className="h-3 w-3 rounded-full bg-stone-300"></div>
          </div>

          <main className="flex h-full items-center gap-16 overflow-hidden lg:flex-col lg:gap-8 sm:gap-4">
            <div className="flex w-[680px] flex-col gap-4 lg:w-full">
              <Dialog.Title className="text-3xl font-medium text-amaranth-800">
                {project.title}
              </Dialog.Title>
              <p className="text-xl text-amaranth-500">
                <span className="font-medium">{labels.description}: </span>
                {project.description}
              </p>
              {project.about && (
                <p className="text-xl text-amaranth-500">
                  <span className="font-medium">{labels.about}: </span>
                  {project.about}
                </p>
              )}

              {project.features && (
                <>
                  <span className="text-xl font-medium text-amaranth-500">
                    {labels.features}:
                  </span>
                  <ul className="list-disc pl-10 text-lg text-amaranth-500">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </>
              )}

              {project.createdAt && (
                <span className="text-base font-semibold text-amaranth-500">
                  {project.createdAt}
                </span>
              )}
            </div>

            <div className="relative h-[270px] w-[480px] overflow-hidden lg:order-first">
              <Image
                width={909}
                height={438}
                src={project.imageHref}
                alt={project.imageAlt}
                className="rounded border-2 border-amaranth-500 object-fill"
              />
            </div>
          </main>

          <div className="mt-9 flex items-baseline justify-between lg:mt-4 sm:flex-col sm:items-center sm:gap-8">
            {project.techKeys && (
              <div className="flex items-center gap-5 text-amaranth-500/80 sm:flex-wrap sm:justify-center sm:gap-3">
                {project.techKeys.map((techKey, index) => (
                  <div
                    key={index}
                    data-content={techConfig[techKey as keyof TechConfig].title}
                    className="relative duration-300 after:pointer-events-none after:absolute after:-top-6 after:left-1/2 after:-translate-x-1/2 after:translate-y-7 after:whitespace-nowrap after:font-semibold after:opacity-0 after:duration-300 after:content-[attr(data-content)] hover:text-amaranth-500 hover:after:translate-y-0 hover:after:opacity-100"
                  >
                    {getIcon(techKey)}
                  </div>
                ))}
              </div>
            )}

            <Project.Links.Root>
              {project.appHref && (
                <Project.Links.Button href={project.appHref} type="app">
                  {labels.app}
                </Project.Links.Button>
              )}

              {project.repositoryHref && (
                <Project.Links.Button
                  href={project.repositoryHref}
                  type="repository"
                >
                  {labels.repository}
                </Project.Links.Button>
              )}
            </Project.Links.Root>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
