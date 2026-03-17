import type { User } from '../model/types'
import { mockFetch } from '../../../shared/lib/mockServer'

export async function fetchUser(): Promise<User> {
  // const res = await mockFetch('/api/user')
  // const data = await res.json()

  // return {
  //   id: data.id,
  //   name: data.name,
  //   email: data.email,
  // }

  return mockFetch('/api/user');
}