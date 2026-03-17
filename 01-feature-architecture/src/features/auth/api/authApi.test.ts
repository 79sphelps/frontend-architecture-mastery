import { fetchUser } from './authApi'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ id: '1', name: 'Steve', email: 'test@test.com' }),
  })
) as jest.Mock

test('fetchUser returns mapped user', async () => {
  const user = await fetchUser()
  expect(user.name).toBe('Steve')
})