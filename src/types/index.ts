import { ElementType } from 'react'

export type NavItem = {
  title: string
  href: string
}

export type FloatingMenuItem = {
  title: string
  icon: ElementType
  href: string
}

export type Skill = {
  title: string
  icon: ElementType
}

export type Technology = {
  title: string
  icon: ElementType
}

export type Level = {
  title: string
  skills: Technology[]
}

export type TechConfig = Record<string, Technology>

export type Project = {
  title: string
  description: string
  imageHref: string
  imageAlt: string
  appHref?: string
  repositoryHref?: string
  createdAt?: string
  about?: string
  features?: string[]
  techKeys?: string[]
}

export type PersonalInfo = {
  title: string
  icon: ElementType
}

export type UsefulLink = {
  icon: ElementType
  href?: string
}
