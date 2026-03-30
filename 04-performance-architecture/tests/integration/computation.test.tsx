import { render, screen, fireEvent } from '@testing-library/react'
import { ComputationLab } from '../../src/features/performance/labs/ComputationLab'

test('runs computation', () => {
  render(<ComputationLab />)

  const buttons = screen.getAllByRole('button', { name: /Run Computation/ })
  fireEvent.click(buttons[0])

  expect(screen.getAllByText(/ms/).length).toBeGreaterThan(0)
})