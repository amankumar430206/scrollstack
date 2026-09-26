import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Bookmark, UserPreferences, ViewHistory } from '../types/user'

interface AppState {
  preferences: UserPreferences
  bookmarks: Bookmark[]
  history: ViewHistory[]
  currentCardIndex: number

  setPreferences: (prefs: Partial<UserPreferences>) => void
  completeOnboarding: (topics: string[]) => void
  toggleBookmark: (cardId: string) => void
  isBookmarked: (cardId: string) => boolean
  addToHistory: (cardId: string) => void
  setCurrentCardIndex: (index: number) => void
}

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      preferences: {
        topics: [],
        difficulty: ['beginner', 'intermediate', 'advanced'],
        onboardingComplete: false,
      },
      bookmarks: [],
      history: [],
      currentCardIndex: 0,

      setPreferences: (prefs) =>
        set((state) => ({
          preferences: { ...state.preferences, ...prefs },
        })),

      completeOnboarding: (topics) =>
        set({
          preferences: {
            topics,
            difficulty: ['beginner', 'intermediate', 'advanced'],
            onboardingComplete: true,
          },
        }),

      toggleBookmark: (cardId) =>
        set((state) => {
          const exists = state.bookmarks.some((b) => b.cardId === cardId)
          return {
            bookmarks: exists
              ? state.bookmarks.filter((b) => b.cardId !== cardId)
              : [...state.bookmarks, { cardId, savedAt: Date.now() }],
          }
        }),

      isBookmarked: (cardId) => get().bookmarks.some((b) => b.cardId === cardId),

      addToHistory: (cardId) =>
        set((state) => {
          const filtered = state.history.filter((h) => h.cardId !== cardId)
          return {
            history: [{ cardId, viewedAt: Date.now() }, ...filtered].slice(0, 500),
          }
        }),

      setCurrentCardIndex: (index) => set({ currentCardIndex: index }),
    }),
    { name: 'scrollstack-storage' }
  )
)
