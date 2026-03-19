/**
 * Responsibility:
 * - Render UI only
 *
 * Why it exists:
 * - No business logic
 *
 * Architectural Alignment:
 * - Presentation layer
 */
import { useUser } from '../hooks/useUser'

export function UserProfile() {
  const user = useUser()

  if (!user) return <div>Loading...</div>

  return <div>{user.name}</div>
}