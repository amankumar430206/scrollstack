import { useInfiniteQuery } from '@tanstack/react-query'
import { api } from '../api/client'
import { useStore } from '../store/useStore'

export function useFeed() {
  const topics = useStore((s) => s.preferences.topics)

  return useInfiniteQuery({
    queryKey: ['feed', topics],
    queryFn: ({ pageParam = 0 }) => api.getFeed({ topics, page: pageParam }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.hasMore ? allPages.length : undefined,
    initialPageParam: 0,
  })
}
