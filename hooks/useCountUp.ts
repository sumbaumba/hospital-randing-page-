'use client'

import { useEffect, useRef, useState } from 'react'

export function useCountUp(target: number, duration = 2200, start = false) {
  const [count, setCount] = useState(0)
  const frameRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    if (!start) return

    startTimeRef.current = null
    setCount(0)

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

    const update = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutCubic(progress)

      setCount(Math.round(eased * target))

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(update)
      }
    }

    frameRef.current = requestAnimationFrame(update)

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [start, target, duration])

  return count
}
