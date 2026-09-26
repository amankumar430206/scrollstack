import { motion } from 'framer-motion'
import type { Card } from '../../types/card'
import { TopicPill } from '../shared/TopicPill'
import { DifficultyBadge } from '../shared/DifficultyBadge'
import { CardActions } from '../shared/CardActions'

export function FlowCard({ card }: { card: Card }) {
  const steps = card.flowSteps ?? []

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

        <div className="w-full max-w-[280px] flex flex-col items-center gap-1">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.3 }}
              className="w-full"
            >
              <div className="flex items-center gap-3 bg-white/5 rounded-lg px-3 py-2.5 border border-white/5">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-indigo-400">{i + 1}</span>
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-white">{step.label}</div>
                  {step.description && (
                    <div className="text-[10px] text-zinc-500 truncate">{step.description}</div>
                  )}
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="flex justify-center py-0.5">
                  <div className="w-px h-3 bg-indigo-500/30" />
                </div>
              )}
            </motion.div>
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
