import type { Card } from '../../types/card'
import { TopicPill } from '../shared/TopicPill'
import { DifficultyBadge } from '../shared/DifficultyBadge'
import { CardActions } from '../shared/CardActions'

export function ConceptCard({ card }: { card: Card }) {
  return (
    <div className="flex flex-col h-full px-5 pt-12 pb-18 justify-between">
      <div className="flex items-center justify-between">
        <TopicPill label={card.topicLabel} category={card.category} />
        <DifficultyBadge difficulty={card.difficulty} />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center gap-5 py-4">
        <h2 className="text-xl font-bold text-white text-center leading-tight">
          {card.title}
        </h2>

        {card.diagramSvg && (
          <div
            className="w-full max-w-[320px]"
            dangerouslySetInnerHTML={{ __html: card.diagramSvg }}
          />
        )}

        <p className="text-sm text-zinc-400 text-center leading-relaxed max-w-[300px]">
          {card.explanation}
        </p>
      </div>

      <div className="flex items-center justify-between">
        {card.seriesTotal && (
          <span className="text-xs text-zinc-500">
            {card.seriesIndex} of {card.seriesTotal}
          </span>
        )}
        <div className="ml-auto">
          <CardActions cardId={card.id} />
        </div>
      </div>
    </div>
  )
}
