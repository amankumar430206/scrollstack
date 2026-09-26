import type { Card } from '../../types/card'
import { TopicPill } from '../shared/TopicPill'
import { DifficultyBadge } from '../shared/DifficultyBadge'
import { CardActions } from '../shared/CardActions'

export function CodeCard({ card }: { card: Card }) {
  const block = card.codeBlock
  if (!block) return null

  const lines = block.code.split('\n')

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

        <div className="w-full rounded-xl bg-[#0d1117] border border-white/5 overflow-hidden">
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            <span className="ml-2 text-[10px] text-zinc-600">{block.language}</span>
          </div>
          <div className="p-3 overflow-x-auto">
            <pre className="text-[11px] leading-[1.6]">
              {lines.map((line, i) => {
                const lineNum = i + 1
                const isHighlighted = block.highlights?.includes(lineNum)
                const annotation = block.annotations?.[lineNum]
                return (
                  <div key={i} className="flex gap-2">
                    <span className="select-none text-zinc-700 w-5 text-right flex-shrink-0">
                      {lineNum}
                    </span>
                    <div className="flex-1 min-w-0">
                      <code className={isHighlighted ? 'text-indigo-300' : 'text-zinc-400'}>
                        {line || ' '}
                      </code>
                      {annotation && (
                        <span className="ml-2 text-[10px] text-emerald-500/70">
                          {'// '}{annotation}
                        </span>
                      )}
                    </div>
                  </div>
                )
              })}
            </pre>
          </div>
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
