import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useStore } from './store/useStore'
import { OnboardingFlow } from './components/onboarding/OnboardingFlow'
import { BottomNav } from './components/layout/BottomNav'
import { FeedPage } from './pages/FeedPage'
import { BookmarksPage } from './pages/BookmarksPage'
import { SettingsPage } from './pages/SettingsPage'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
    },
  },
})

function AppRoutes() {
  const onboardingComplete = useStore((s) => s.preferences.onboardingComplete)

  if (!onboardingComplete) {
    return <OnboardingFlow />
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="/bookmarks" element={<BookmarksPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
      <BottomNav />
    </>
  )
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  )
}
