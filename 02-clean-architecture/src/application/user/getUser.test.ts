import { getUser } from './getUser'
import { userApi } from '../../infrastructure/api/userApi'

jest.mock('../../infrastructure/api/userApi')

test('getUser returns user', async () => {
  ;(userApi.getUser as jest.Mock).mockResolvedValue({ id: '1', name: 'Steve' })

  const user = await getUser()

  expect(user.name).toBe('Steve')
})