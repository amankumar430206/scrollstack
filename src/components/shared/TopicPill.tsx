import type { Category } from '../../types/card'

const categoryColors: Record<Category, string> = {
  'system-design': 'bg-indigo-500/15 text-indigo-400 border-indigo-500/20',
  'dsa': 'bg-amber-500/15 text-amber-400 border-amber-500/20',
  'databases': 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
}

export function TopicPill({ label, category }: { label: string; category: Category }) {
  return (
    <span className={`inline-block px-2.5 py-0.5 text-[11px] font-medium rounded-full border ${categoryColors[category]}`}>
      {label}
    </span>
  )
}
