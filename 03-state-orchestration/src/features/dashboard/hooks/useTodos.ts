import { useQuery } from '@tanstack/react-query'
import { fetchTodos } from '../../../shared/api/fetchTodos'

export function useTodos() {
  return useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  })
}