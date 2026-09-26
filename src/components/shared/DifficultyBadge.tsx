import type { Difficulty } from '../../types/card'

const config: Record<Difficulty, { label: string; className: string }> = {
  beginner: { label: 'Beginner', className: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20' },
  intermediate: { label: 'Intermediate', className: 'bg-amber-500/15 text-amber-400 border-amber-500/20' },
  advanced: { label: 'Advanced', className: 'bg-rose-500/15 text-rose-400 border-rose-500/20' },
}

export function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  const { label, className } = config[difficulty]
  return (
    <span className={`inline-block px-2 py-0.5 text-[10px] font-medium rounded-full border ${className}`}>
      {label}
    </span>
  )
}
