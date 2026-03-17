/**
 * Responsibility:
 * - Defines domain types for auth
 *
 * Why it exists:
 * - Central source of truth for auth data
 *
 * Architectural Alignment:
 * - Domain Layer
 */
export type User = {
  id: string
  name: string
  email: string
}