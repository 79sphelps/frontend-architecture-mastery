import { useQuery } from '@tanstack/react-query'
import { fetchUser } from '../api/authApi'

export function useUser() {
  return useQuery({
    queryKey: ['user'],
    queryFn: fetchUser,
  })
}