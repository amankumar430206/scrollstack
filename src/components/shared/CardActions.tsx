import { Bookmark, Share2 } from 'lucide-react'
import { useStore } from '../../store/useStore'

export function CardActions({ cardId }: { cardId: string }) {
  const toggleBookmark = useStore((s) => s.toggleBookmark)
  const isBookmarked = useStore((s) => s.isBookmarked(cardId))

  const handleShare = async () => {
    const url = `${window.location.origin}/card/${cardId}`
    if (navigator.share) {
      await navigator.share({ title: 'ScrollStack Card', url }).catch(() => {})
    } else {
      await navigator.clipboard.writeText(url)
    }
  }

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => toggleBookmark(cardId)}
        className="p-2 rounded-full transition-colors hover:bg-white/10 active:scale-95"
        aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark'}
      >
        <Bookmark
          size={20}
          className={isBookmarked ? 'fill-indigo-400 text-indigo-400' : 'text-zinc-400'}
        />
      </button>
      <button
        onClick={handleShare}
        className="p-2 rounded-full transition-colors hover:bg-white/10 active:scale-95"
        aria-label="Share"
      >
        <Share2 size={20} className="text-zinc-400" />
      </button>
    </div>
  )
}
