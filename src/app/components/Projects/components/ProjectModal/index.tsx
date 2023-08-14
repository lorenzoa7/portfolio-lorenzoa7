'use client'

import { TechConfig, techConfig } from '@/config/main'
import { Project } from '@/types'
import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai'
import { GrFormClose } from 'react-icons/gr'

type ProjectModalProps = {
  children: React.ReactNode
  project: Project
}

export default function ProjectModal({ children, project }: ProjectModalProps) {
  const getIcon = (key: string, size = 28) => {
    const IconComponent = techConfig[key as keyof TechConfig].icon

    if (!IconComponent) return null
    return <IconComponent size={size} />
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-overlayShow data-[state='closed']:animate-overlayHide" />
        <Dialog.Content
          onOpenAutoFocus={(event) => event?.preventDefault()}
          className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-contentShow data-[state='closed']:animate-contentHide z-50 bg-white px-7 py-5 rounded-xl w-[1280px] mx-auto xl:w-[calc(100vw-40px)] xl:max-h-[calc(100vh-40px)] overflow-y-auto"
        >
          <Dialog.Close asChild>
            <div className="w-fit flex gap-1 self-start mb-6 group cursor-pointer">
              <div className="rounded-full w-3 h-3 bg-red-500 duration-150 group-hover:scale-[2.0] flex items-center justify-center">
                <GrFormClose className="opacity-0 group-hover:opacity-100 duration-150" />
              </div>
              <div className="rounded-full w-3 h-3 bg-yellow-500 duration-150 group-hover:opacity-0"></div>
              <div className="rounded-full w-3 h-3 bg-green-500 duration-150 group-hover:opacity-0"></div>
            </div>
          </Dialog.Close>

          <main className="flex items-center gap-16 lg:flex-col lg:gap-8 overflow-x-hidden h-full sm:gap-4">
            <div className="flex flex-col gap-4 w-[680px] lg:w-full">
              <Dialog.Title className="font-medium text-3xl text-amaranth-800">
                {project.title}
              </Dialog.Title>
              <p className="text-xl text-amaranth-500">
                <span className="font-medium">Description: </span>
                {project.description}
              </p>
              {project.about && (
                <p className="text-xl text-amaranth-500">
                  <span className="font-medium">About the project: </span>
                  {project.about}
                </p>
              )}

              {project.features && (
                <>
                  <span className="text-xl text-amaranth-500 font-medium">
                    Features:
                  </span>
                  <ul className="pl-10 text-amaranth-500 list-disc text-lg">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </>
              )}

              {project.createdAt && (
                <span className="text-base font-semibold text-amaranth-500">
                  July 31, 2023
                </span>
              )}
            </div>

            <div className="relative w-[480px] h-[270px] overflow-hidden lg:order-first">
              <Image
                width={909}
                height={438}
                src={project.imageHref}
                alt={project.imageAlt}
                className="object-fill border-amaranth-500 border-2 rounded"
              />
            </div>
          </main>

          <div className="flex justify-between items-baseline mt-9 lg:mt-4 sm:flex-col sm:gap-8 sm:items-center">
            {project.techKeys && (
              <div className="flex items-center gap-5 text-amaranth-500/80 sm:flex-wrap sm:justify-center sm:gap-3">
                {project.techKeys.map((techKey, index) => (
                  <div
                    key={index}
                    data-content={techConfig[techKey as keyof TechConfig].title}
                    className="relative hover:text-amaranth-500 duration-300 after:content-[attr(data-content)] after:absolute after:-top-6 after:left-1/2 after:-translate-x-1/2 after:font-semibold after:opacity-0 after:translate-y-7 hover:after:translate-y-0 hover:after:opacity-100 after:duration-300 after:pointer-events-none after:whitespace-nowrap"
                  >
                    {getIcon(techKey)}
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center gap-5">
              {project.appHref && (
                <Link
                  href={project.appHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-amaranth-500 rounded-lg text-white uppercase text-center py-1 text-xl w-32 hover:bg-amaranth-800 duration-300"
                >
                  <AiOutlineLink size={24} />
                  App
                </Link>
              )}

              {project.repositoryHref && (
                <Link
                  href={project.repositoryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-amaranth-500 rounded-lg text-white uppercase text-center py-1 text-xl w-32 hover:bg-amaranth-800 duration-300"
                >
                  <AiOutlineGithub size={24} />
                  Repository
                </Link>
              )}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
