import { useRef, useState } from 'react'

export function usePerformanceTimer() {
  const startRef = useRef(0)
  const [time, setTime] = useState(0)

  function start() {
    startRef.current = performance.now()
  }

  function end() {
    setTime(Math.round(performance.now() - startRef.current))
  }

  return { start, end, time }
}