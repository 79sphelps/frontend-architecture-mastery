/**
 * Responsibility:
 * - Core business entity
 *
 * Why it exists:
 * - Independent of frameworks
 *
 * Architectural Alignment:
 * - Domain layer (pure)
 */
export type User = {
  id: string
  name: string
}