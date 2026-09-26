import { useRef, useCallback, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import type { PanInfo } from 'framer-motion'
import { CardRenderer } from '../cards/CardRenderer'
import { useStore } from '../../store/useStore'
import type { Card } from '../../types/card'

const SWIPE_THRESHOLD = 50

export function SwipeFeed({
  cards,
  onReachEnd,
}: {
  cards: Card[]
  onReachEnd?: () => void
}) {
  const currentIndex = useStore((s) => s.currentCardIndex)
  const setCurrentIndex = useStore((s) => s.setCurrentCardIndex)
  const addToHistory = useStore((s) => s.addToHistory)
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (cards[currentIndex]) {
      addToHistory(cards[currentIndex].id)
    }
  }, [currentIndex, cards, addToHistory])

  useEffect(() => {
    if (currentIndex >= cards.length - 3 && onReachEnd) {
      onReachEnd()
    }
  }, [currentIndex, cards.length, onReachEnd])

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= cards.length) return
      setCurrentIndex(index)
      controls.start({ y: -index * window.innerHeight, transition: { type: 'spring', stiffness: 300, damping: 30 } })
    },
    [cards.length, setCurrentIndex, controls]
  )

  const handleDragEnd = useCallback(
    (_: unknown, info: PanInfo) => {
      const { offset, velocity } = info
      if (offset.y < -SWIPE_THRESHOLD || velocity.y < -300) {
        goTo(currentIndex + 1)
      } else if (offset.y > SWIPE_THRESHOLD || velocity.y > 300) {
        goTo(currentIndex - 1)
      } else {
        goTo(currentIndex)
      }
    },
    [currentIndex, goTo]
  )

  useEffect(() => {
    controls.set({ y: -currentIndex * window.innerHeight })
  }, [cards.length, controls, currentIndex])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'j') goTo(currentIndex + 1)
      if (e.key === 'ArrowUp' || e.key === 'k') goTo(currentIndex - 1)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [currentIndex, goTo])

  if (cards.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center px-6">
        <p className="text-zinc-500 text-center">No cards match your preferences yet.</p>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="h-screen overflow-hidden relative touch-none">
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        animate={controls}
        className="w-full"
        style={{ touchAction: 'none' }}
      >
        {cards.map((card) => (
          <div key={card.id} className="h-screen w-full">
            <CardRenderer card={card} />
          </div>
        ))}
      </motion.div>

      <div className="fixed right-2 top-1/2 -translate-y-1/2 flex flex-col gap-1 z-20">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-1 rounded-full transition-all duration-200 ${
              i === currentIndex ? 'h-5 bg-indigo-400' : 'h-1.5 bg-zinc-700'
            }`}
            aria-label={`Go to card ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
