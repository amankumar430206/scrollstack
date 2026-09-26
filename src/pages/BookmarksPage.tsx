import { Bookmark, ArrowLeft, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useBookmarkedCards } from '../hooks/useBookmarks'
import { useStore } from '../store/useStore'
import { TopicPill } from '../components/shared/TopicPill'
import { DifficultyBadge } from '../components/shared/DifficultyBadge'

export function BookmarksPage() {
  const { data: cards, isLoading } = useBookmarkedCards()
  const bookmarks = useStore((s) => s.bookmarks)
  const toggleBookmark = useStore((s) => s.toggleBookmark)

  return (
    <div className="min-h-screen bg-[#0a0a0f] pb-20">
      <header className="sticky top-0 z-30 bg-[#0a0a0f]/95 backdrop-blur-sm border-b border-white/5">
        <div className="flex items-center gap-3 px-4 h-14">
          <Link to="/" className="p-1.5 rounded-lg hover:bg-white/5">
            <ArrowLeft size={20} className="text-zinc-400" />
          </Link>
          <h1 className="text-base font-semibold text-white flex items-center gap-2">
            <Bookmark size={18} className="text-indigo-400" />
            Saved Cards
          </h1>
          <span className="ml-auto text-xs text-zinc-600">{bookmarks.length} saved</span>
        </div>
      </header>

      <div className="px-4 py-4 space-y-3 max-w-md mx-auto">
        {isLoading && (
          <p className="text-sm text-zinc-500 text-center py-10">Loading...</p>
        )}

        {!isLoading && (!cards || cards.length === 0) && (
          <div className="text-center py-20">
            <Bookmark size={32} className="text-zinc-700 mx-auto mb-3" />
            <p className="text-sm text-zinc-500">No saved cards yet</p>
            <p className="text-xs text-zinc-600 mt-1">
              Tap the bookmark icon on any card to save it
            </p>
          </div>
        )}

        {cards?.map((card) => (
          <div
            key={card.id}
            className="bg-white/[0.03] border border-white/5 rounded-xl p-4 flex items-start gap-3"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                <TopicPill label={card.topicLabel} category={card.category} />
                <DifficultyBadge difficulty={card.difficulty} />
              </div>
              <h3 className="text-sm font-semibold text-white truncate">{card.title}</h3>
              <p className="text-xs text-zinc-500 mt-1 line-clamp-2">{card.explanation}</p>
            </div>
            <button
              onClick={() => toggleBookmark(card.id)}
              className="p-2 rounded-lg hover:bg-white/5 flex-shrink-0"
              aria-label="Remove bookmark"
            >
              <Trash2 size={16} className="text-zinc-600 hover:text-rose-400" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
