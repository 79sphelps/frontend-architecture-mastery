import { useEffect, useState } from 'react'
import { getUser } from '../../application/user/getUser'
import type { User } from '../../domain/user/user'

export function useUser() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    getUser().then(setUser)
  }, [])

  return user
}