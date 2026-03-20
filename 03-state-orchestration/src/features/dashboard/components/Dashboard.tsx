import { useTodos } from '../hooks/useTodos'
import { useAuthStore } from '../../../shared/store/useAuthStore'
import { useState } from 'react'

export function Dashboard() {
  const { data, isLoading, error } = useTodos()
  const { user, login } = useAuthStore()
  const [showTodos, setShowTodos] = useState(true)

  return (
    <main aria-labelledby="dashboard-heading">
      <h2 id="dashboard-heading">Dashboard</h2>

      {!user && (
        <button
          onClick={() => login('Steve')}
          aria-label="Login user"
        >
          Login
        </button>
      )}

      {user && <p role="status">Welcome, {user}</p>}

      <button
        onClick={() => setShowTodos(!showTodos)}
        aria-pressed={showTodos}
      >
        Toggle Todos
      </button>

      {isLoading && <p role="status">Loading todos...</p>}
      {error && <p role="alert">Error loading todos</p>}

      {showTodos && (
        <ul>
          {data?.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </main>
  )
}