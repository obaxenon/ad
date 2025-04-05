export interface ProcessStep {
  title: string
  description: string | string[]
}

export interface Result {
  stat: string
  description: string
}

export interface CaseStudy {
  id: string
  title: string
  shortDescription: string
  coverImage: string
  objective: string
  duration: string
  role: string
  challenges: string[]
  process: ProcessStep[]
  results: Result[]
  websiteUrl?: string
  websiteNote?: string
}

