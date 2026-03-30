import { render, screen } from '@testing-library/react'
import App from '../../src/app/App'

test('renders labs', () => {
  render(<App />)
  expect(screen.getByText(/Performance/)).toBeInTheDocument()
})