/**
 * Responsibility:
 * - Business use case
 *
 * Why it exists:
 * - Orchestrates domain logic
 *
 * Architectural Alignment:
 * - Application layer
 */
import type { User } from '../../domain/user/user'
import { userApi } from '../../infrastructure/api/userApi'

export async function getUser(): Promise<User> {
  return userApi.getUser()
}