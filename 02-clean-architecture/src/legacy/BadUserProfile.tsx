/**
 * Responsibility:
 * - Fetch + map + render (violates separation)
 *
 * Why it’s bad:
 * - tightly coupled
 * - not testable
 * - no abstraction
 */
import { useEffect, useState } from 'react'

export function BadUserProfile() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(data => {
        setUser({
          id: data.id,
          name: data.name,
        })
      })
  }, [])

  if (!user) return <div>Loading...</div>

  return <div>{user.name}</div>
}