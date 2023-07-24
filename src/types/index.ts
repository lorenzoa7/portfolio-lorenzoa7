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

export type Level = {
  title: string
  skills: Skill[]
}
