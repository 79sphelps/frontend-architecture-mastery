/**
 * Responsibility:
 * - External API communication
 *
 * Why it exists:
 * - Isolate HTTP logic
 *
 * Architectural Alignment:
 * - Infrastructure layer
 */
import type { User } from '../../domain/user/user'
import { httpClient } from '../../shared/lib/httpClient'

export const userApi = {
  async getUser(): Promise<User> {
    const data = await httpClient<any>('/api/user')

    return {
      id: data.id,
      name: data.name,
    }
  },
}