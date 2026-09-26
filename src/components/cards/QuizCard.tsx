import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye } from 'lucide-react'
import type { Card } from '../../types/card'
import { TopicPill } from '../shared/TopicPill'
import { DifficultyBadge } from '../shared/DifficultyBadge'
import { CardActions } from '../shared/CardActions'

export function QuizCard({ card }: { card: Card }) {
  const [revealed, setRevealed] = useState(false)

  return (
    <div className="flex flex-col h-full px-5 pt-12 pb-18 justify-between">
      <div className="flex items-center justify-between">
        <TopicPill label={card.topicLabel} category={card.category} />
        <DifficultyBadge difficulty={card.difficulty} />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center gap-5 py-4">
        <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center">
          <span className="text-lg">?</span>
        </div>

        <h2 className="text-xl font-bold text-white text-center leading-tight">
          {card.title}
        </h2>

        <div className="w-full max-w-[300px] rounded-xl bg-white/5 border border-white/5 p-4">
          <p className="text-sm text-zinc-300 text-center leading-relaxed">
            {card.quizQuestion}
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.button
              key="reveal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setRevealed(true)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 text-sm font-medium transition-colors hover:bg-indigo-500/25 active:scale-95"
            >
              <Eye size={16} />
              Tap to reveal
            </motion.button>
          ) : (
            <motion.div
              key="answer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-[300px] rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4"
            >
              <p className="text-sm text-emerald-300 text-center leading-relaxed">
                {card.quizAnswer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {revealed && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-zinc-500 text-center leading-relaxed max-w-[300px]"
          >
            {card.explanation}
          </motion.p>
        )}
      </div>

      <div className="flex justify-end">
        <CardActions cardId={card.id} />
      </div>
    </div>
  )
}
