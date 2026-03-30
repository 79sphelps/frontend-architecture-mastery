import { useRenderCount } from './useRenderCount'

export function RenderCounter({ label }: { label: string }) {
  const count = useRenderCount()

  return (
    <p className="text-sm text-gray-500" aria-live="polite">
      {label}: {count}
    </p>
  )
}