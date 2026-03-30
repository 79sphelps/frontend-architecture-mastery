import { render, screen } from '@testing-library/react'
import { RenderingLab } from '../../src/features/performance/labs/RenderingLab'

test('renders rendering lab', () => {
  render(<RenderingLab />)
  expect(screen.getByText(/Unoptimized/)).toBeInTheDocument()
})