export interface UserPreferences {
  topics: string[]
  difficulty: ('beginner' | 'intermediate' | 'advanced')[]
  onboardingComplete: boolean
}

export interface Bookmark {
  cardId: string
  savedAt: number
}

export interface ViewHistory {
  cardId: string
  viewedAt: number
}
