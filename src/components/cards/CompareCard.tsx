import type { Card } from '../../types/card'
import { TopicPill } from '../shared/TopicPill'
import { DifficultyBadge } from '../shared/DifficultyBadge'
import { CardActions } from '../shared/CardActions'

export function CompareCard({ card }: { card: Card }) {
  const items = card.compareItems
  if (!items) return null

  const colors = [
    { bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', title: 'text-indigo-400', dot: 'bg-indigo-500/40' },
    { bg: 'bg-amber-500/10', border: 'border-amber-500/20', title: 'text-amber-400', dot: 'bg-amber-500/40' },
  ]

  return (
    <div className="flex flex-col h-full px-5 pt-12 pb-18 justify-between">
      <div className="flex items-center justify-between">
        <TopicPill label={card.topicLabel} category={card.category} />
        <DifficultyBadge difficulty={card.difficulty} />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center gap-4 py-4">
        <h2 className="text-xl font-bold text-white text-center leading-tight">
          {card.title}
        </h2>

        <div className="w-full grid grid-cols-2 gap-2">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-3 ${colors[idx].bg} border ${colors[idx].border}`}
            >
              <h3 className={`text-sm font-bold mb-2 ${colors[idx].title}`}>
                {item.title}
              </h3>
              <ul className="space-y-1.5">
                {item.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-1.5">
                    <div className={`w-1.5 h-1.5 rounded-full ${colors[idx].dot} mt-1.5 flex-shrink-0`} />
                    <span className="text-[11px] text-zinc-400 leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-sm text-zinc-400 text-center leading-relaxed max-w-[300px]">
          {card.explanation}
        </p>
      </div>

      <div className="flex justify-end">
        <CardActions cardId={card.id} />
      </div>
    </div>
  )
}
