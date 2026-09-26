import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, ChevronRight } from 'lucide-react'
import { topics, categories } from '../../data/topics'
import { useStore } from '../../store/useStore'

export function OnboardingFlow() {
  const [selected, setSelected] = useState<string[]>([])
  const completeOnboarding = useStore((s) => s.completeOnboarding)

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    )
  }

  const handleContinue = () => {
    if (selected.length >= 3) {
      completeOnboarding(selected)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center px-5 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-indigo-400">S</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">What do you want to learn?</h1>
          <p className="text-sm text-zinc-500">
            Pick at least 3 topics to personalize your feed
          </p>
        </div>

        {categories.map((cat) => {
          const catTopics = topics.filter((t) => t.category === cat.id)
          return (
            <div key={cat.id} className="mb-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {catTopics.map((topic) => {
                  const isSelected = selected.includes(topic.id)
                  return (
                    <button
                      key={topic.id}
                      onClick={() => toggle(topic.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all border ${
                        isSelected
                          ? 'bg-indigo-500/20 border-indigo-500/40 text-indigo-300'
                          : 'bg-white/5 border-white/5 text-zinc-400 hover:bg-white/10'
                      }`}
                    >
                      {isSelected && <Check size={14} />}
                      {topic.label}
                    </button>
                  )
                })}
              </div>
            </div>
          )
        })}

        <div className="mt-8 text-center">
          <button
            onClick={handleContinue}
            disabled={selected.length < 3}
            className={`inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-sm transition-all ${
              selected.length >= 3
                ? 'bg-indigo-500 text-white hover:bg-indigo-400 active:scale-95'
                : 'bg-zinc-800 text-zinc-600 cursor-not-allowed'
            }`}
          >
            Continue
            <ChevronRight size={16} />
          </button>
          <p className="text-xs text-zinc-600 mt-3">
            {selected.length}/3 topics selected
          </p>
        </div>
      </motion.div>
    </div>
  )
}
