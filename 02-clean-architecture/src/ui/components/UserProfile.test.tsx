import { render, screen } from '@testing-library/react'
import { UserProfile } from './UserProfile'

test('renders user', async () => {
  render(<UserProfile />)
  expect(await screen.findByText(/Steve/)).toBeInTheDocument()
})