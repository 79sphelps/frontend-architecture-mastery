import { renderHook } from '@testing-library/react'
import { useRenderCount } from '../../src/features/performance/shared/useRenderCount'

test('increments render count', () => {
  const { result, rerender } = renderHook(() => useRenderCount())

  rerender()
  expect(result.current).toBeGreaterThan(1)
})