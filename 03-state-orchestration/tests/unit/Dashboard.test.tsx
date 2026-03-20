import { render, screen } from '@testing-library/react'
import { Dashboard } from '../../src/features/dashboard/components/Dashboard'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

test('renders todos', async () => {
  const client = new QueryClient()

  render(
    <QueryClientProvider client={client}>
      <Dashboard />
    </QueryClientProvider>
  )

  expect(await screen.findByText(/Learn Architecture/)).toBeInTheDocument()
})