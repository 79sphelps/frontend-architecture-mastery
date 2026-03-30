import { renderHook, act } from '@testing-library/react'
import { usePerformanceTimer } from '../../src/features/performance/shared/usePerformanceTimer'

// test('measures time', () => {
//   const { result } = renderHook(() => usePerformanceTimer())

//   act(() => {
//     result.current.start()
//     result.current.end()
//   })

//   expect(result.current.time).toBeGreaterThanOrEqual(0)
// })

// import { renderHook } from '@testing-library/react'
// import { usePerformanceTimer } from '@/features/performance/shared/usePerformanceTimer'

test('measures time', () => {
  const { result } = renderHook(() => usePerformanceTimer())
  result.current.start()
  result.current.end()
  expect(result.current.time).toBeGreaterThanOrEqual(0)
})