type Status = 'idle' | 'running' | 'done'

export function StatusIndicator({ status }: { status: Status }) {
  const map = {
    idle: 'Idle',
    running: 'Running...',
    done: 'Completed',
  }

  return (
    <p role="status" aria-live="polite" className="text-sm">
      Status: {map[status]}
    </p>
  )
}