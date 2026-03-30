import { render, screen, fireEvent } from '@testing-library/react'
import { PerformancePlayground } from '../../src/features/performance/PerformancePlayground'

test('can switch labs via navigation', () => {
  render(<PerformancePlayground />)

  // Click another lab
  fireEvent.click(screen.getByRole('button', { name: /Memoization/ }))

  expect(screen.getByText(/Memoization Lab/)).toBeInTheDocument()
})