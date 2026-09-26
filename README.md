# ScrollStack

Doom-scroll your way to engineering mastery — bite-sized, visual technical cards you swipe through like reels.

## Getting Started

```bash
npm install
npm run dev
```

## Tech Stack

- React 19 + TypeScript + Vite
- TailwindCSS v4 (dark-mode-first)
- Framer Motion (swipe gestures & animations)
- TanStack Query (data fetching)
- Zustand (state management)
- PWA (offline-ready, installable)

## Project Structure

```
src/
  api/          # API client & mock data layer
  components/   # UI components
    cards/      # 5 card type renderers
    feed/       # Swipe feed
    layout/     # Bottom nav
    onboarding/ # Topic picker
    shared/     # Reusable UI (badges, actions)
  data/         # Mock cards & topic definitions
  hooks/        # React Query hooks
  pages/        # Route pages
  store/        # Zustand store
  types/        # TypeScript types
```
