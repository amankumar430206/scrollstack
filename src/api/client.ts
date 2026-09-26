import { fetchFeed, fetchCard, fetchBookmarkedCards } from './mock'

export const api = {
  getFeed: fetchFeed,
  getCard: fetchCard,
  getBookmarkedCards: fetchBookmarkedCards,
}
