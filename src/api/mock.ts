import type { Card } from '../types/card'
import { mockCards } from '../data/cards'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function fetchFeed(params: {
  topics?: string[]
  page?: number
  limit?: number
}): Promise<{ cards: Card[]; hasMore: boolean }> {
  await delay(300)
  const { topics = [], page = 0, limit = 10 } = params

  let filtered = mockCards
  if (topics.length > 0) {
    filtered = mockCards.filter((c) => topics.includes(c.topicId))
  }

  const start = page * limit
  const cards = filtered.slice(start, start + limit)
  return { cards, hasMore: start + limit < filtered.length }
}

export async function fetchCard(id: string): Promise<Card | null> {
  await delay(200)
  return mockCards.find((c) => c.id === id) ?? null
}

export async function fetchBookmarkedCards(cardIds: string[]): Promise<Card[]> {
  await delay(200)
  return mockCards.filter((c) => cardIds.includes(c.id))
}
