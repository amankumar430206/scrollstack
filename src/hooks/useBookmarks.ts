import { useQuery } from '@tanstack/react-query'
import { api } from '../api/client'
import { useStore } from '../store/useStore'

export function useBookmarkedCards() {
  const bookmarks = useStore((s) => s.bookmarks)
  const cardIds = bookmarks.map((b) => b.cardId)

  return useQuery({
    queryKey: ['bookmarks', cardIds],
    queryFn: () => api.getBookmarkedCards(cardIds),
    enabled: cardIds.length > 0,
  })
}
