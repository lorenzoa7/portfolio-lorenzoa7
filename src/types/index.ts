import { TechKeys } from '@/config/tech'
import type { Locale } from '@/i18n-config'
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
  techKeys?: TechKeys[]
}

export type PersonalInfo = {
  title: string
  icon: ElementType
}

export type UsefulLink = {
  icon: ElementType
  href?: string
}

export type LanguageConfig = {
  name: string
  flag: string
  alt: string
}

export type Languages = Record<Locale, LanguageConfig>
