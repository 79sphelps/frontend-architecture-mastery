export async function mockFetch(url: string) {
  if (url === '/api/user') {
    return {
      id: '1',
      name: 'Steve',
      email: 'steve@test.com',
    }
  } else {
    return {
      id: '2',
      name: 'Steve',
      email: 'steve@test.com', 
    }
  }
}