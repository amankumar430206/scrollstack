import { useMemo } from 'react'
import { SwipeFeed } from '../components/feed/SwipeFeed'
import { useFeed } from '../hooks/useFeed'
import { Loader2 } from 'lucide-react'

export function FeedPage() {
  const { data, isLoading, fetchNextPage, hasNextPage } = useFeed()

  const cards = useMemo(
    () => data?.pages.flatMap((p) => p.cards) ?? [],
    [data]
  )

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="w-6 h-6 text-indigo-400 animate-spin" />
      </div>
    )
  }

  return (
    <SwipeFeed
      cards={cards}
      onReachEnd={() => {
        if (hasNextPage) fetchNextPage()
      }}
    />
  )
}
