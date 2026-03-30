type MetricRowProps = {
  time?: number
  renders?: number
  cache?: string
}

export function MetricRow({ time, renders, cache }: MetricRowProps) {
  return (
    <div className="text-sm space-y-1" aria-live="polite">
      {time !== undefined && <p>Time: {time} ms</p>}
      {renders !== undefined && <p>Renders: {renders}</p>}
      {cache && <p>Cache: {cache}</p>}
    </div>
  )
}