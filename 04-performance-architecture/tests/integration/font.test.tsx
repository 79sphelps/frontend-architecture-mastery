import { render, screen } from '@testing-library/react'
import { FontLab } from '../../src/features/performance/labs/FontLab'

test('renders font lab', () => {
  render(<FontLab />)
  expect(screen.getByText(/Font Loading/)).toBeInTheDocument()
})