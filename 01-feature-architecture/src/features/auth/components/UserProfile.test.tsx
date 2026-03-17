import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { UserProfile } from './UserProfile'

test('renders user', async () => {
  const client = new QueryClient()

  render(
    <QueryClientProvider client={client}>
      <UserProfile />
    </QueryClientProvider>
  )

  expect(await screen.findByText(/Steve/)).toBeInTheDocument()
})