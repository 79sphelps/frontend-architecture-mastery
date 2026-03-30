import { useRef } from 'react'

export function useRenderCount(): number {
  const ref = useRef(0)
  ref.current++
  return ref.current
}