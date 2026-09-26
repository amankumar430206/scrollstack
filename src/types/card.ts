export type CardType = 'concept' | 'flow' | 'code' | 'compare' | 'quiz'
export type Difficulty = 'beginner' | 'intermediate' | 'advanced'
export type Category = 'system-design' | 'dsa' | 'databases'

export interface Topic {
  id: string
  label: string
  category: Category
  icon: string
}

export interface CodeBlock {
  language: string
  code: string
  highlights?: number[]
  annotations?: Record<number, string>
}

export interface CompareItem {
  title: string
  points: string[]
}

export interface FlowStep {
  label: string
  description?: string
}

export interface Card {
  id: string
  type: CardType
  topicId: string
  topicLabel: string
  category: Category
  title: string
  difficulty: Difficulty
  explanation: string
  sourceUrl?: string
  seriesId?: string
  seriesIndex?: number
  seriesTotal?: number

  diagramSvg?: string
  codeBlock?: CodeBlock
  compareItems?: [CompareItem, CompareItem]
  flowSteps?: FlowStep[]
  quizQuestion?: string
  quizAnswer?: string
}
