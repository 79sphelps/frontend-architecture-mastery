import { useUser } from '../hooks/useUser'

export function UserProfile() {
  const { data, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>

  return <div>{data?.name}</div>
}