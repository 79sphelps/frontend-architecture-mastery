import { useAuthStore } from '../../src/shared/store/useAuthStore'

test('login updates user', () => {
  useAuthStore.getState().login('Steve')
  expect(useAuthStore.getState().user).toBe('Steve')
})