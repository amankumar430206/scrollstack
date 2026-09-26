import { ArrowLeft, RotateCcw } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useStore } from '../store/useStore'
import { topics, categories } from '../data/topics'

export function SettingsPage() {
  const preferences = useStore((s) => s.preferences)
  const setPreferences = useStore((s) => s.setPreferences)
  const bookmarks = useStore((s) => s.bookmarks)
  const history = useStore((s) => s.history)

  const toggleTopic = (topicId: string) => {
    const current = preferences.topics
    const next = current.includes(topicId)
      ? current.filter((t) => t !== topicId)
      : [...current, topicId]
    setPreferences({ topics: next })
  }

  const resetOnboarding = () => {
    setPreferences({
      topics: [],
      onboardingComplete: false,
    })
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] pb-20">
      <header className="sticky top-0 z-30 bg-[#0a0a0f]/95 backdrop-blur-sm border-b border-white/5">
        <div className="flex items-center gap-3 px-4 h-14">
          <Link to="/" className="p-1.5 rounded-lg hover:bg-white/5">
            <ArrowLeft size={20} className="text-zinc-400" />
          </Link>
          <h1 className="text-base font-semibold text-white">Settings</h1>
        </div>
      </header>

      <div className="px-4 py-6 max-w-md mx-auto space-y-6">
        <section>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">
            Your Topics
          </h2>
          {categories.map((cat) => {
            const catTopics = topics.filter((t) => t.category === cat.id)
            return (
              <div key={cat.id} className="mb-4">
                <h3 className="text-[11px] text-zinc-600 mb-1.5">{cat.label}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {catTopics.map((topic) => {
                    const isActive = preferences.topics.includes(topic.id)
                    return (
                      <button
                        key={topic.id}
                        onClick={() => toggleTopic(topic.id)}
                        className={`px-2.5 py-1 rounded-full text-xs transition-all border ${
                          isActive
                            ? 'bg-indigo-500/20 border-indigo-500/40 text-indigo-300'
                            : 'bg-white/5 border-white/5 text-zinc-500'
                        }`}
                      >
                        {topic.label}
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </section>

        <section>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">
            Stats
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-indigo-400">{history.length}</p>
              <p className="text-[11px] text-zinc-500 mt-1">Cards Viewed</p>
            </div>
            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-indigo-400">{bookmarks.length}</p>
              <p className="text-[11px] text-zinc-500 mt-1">Cards Saved</p>
            </div>
          </div>
        </section>

        <section>
          <button
            onClick={resetOnboarding}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 text-zinc-400 text-sm hover:bg-white/10 transition-colors w-full"
          >
            <RotateCcw size={16} />
            Reset Onboarding
          </button>
        </section>

        <p className="text-center text-[10px] text-zinc-700 pt-4">
          ScrollStack v0.1.0
        </p>
      </div>
    </div>
  )
}
