import type { Card } from '../../types/card'
import { ConceptCard } from './ConceptCard'
import { FlowCard } from './FlowCard'
import { CodeCard } from './CodeCard'
import { CompareCard } from './CompareCard'
import { QuizCard } from './QuizCard'

const renderers: Record<string, React.ComponentType<{ card: Card }>> = {
  concept: ConceptCard,
  flow: FlowCard,
  code: CodeCard,
  compare: CompareCard,
  quiz: QuizCard,
}

export function CardRenderer({ card }: { card: Card }) {
  const Component = renderers[card.type] ?? ConceptCard
  return <Component card={card} />
}
