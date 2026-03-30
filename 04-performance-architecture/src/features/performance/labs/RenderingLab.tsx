import { useState, useMemo, memo } from 'react'
import { LabExplanation } from '../shared/LabExplanation'
import { StatusIndicator } from '../shared/StatusIndicator'
import { MetricRow } from '../shared/MetricRow'
import { TestButton } from '../shared/TestButton'
import { useRenderCount } from '../shared/useRenderCount'

const List = ({ items }: { items: number[] }) => {
  const renders = useRenderCount()
  return (
    <>
      <p className="text-xs">List renders: {renders}</p>
      {items.map(i => <div key={i}>{i}</div>)}
    </>
  )
}

const MemoList = memo(List)

export function RenderingLab() {
  const items = useMemo(() => Array.from({ length: 1000 }, (_, i) => i), [])

  return (
    <div>
      <LabExplanation
        title="Rendering Optimization"
        description="Prevent unnecessary re-renders using React.memo"
        expectation="Optimized list should NOT re-render when clicking button"
      />

      <div className="grid grid-cols-2 gap-6">
        <Unoptimized items={items} />
        <Optimized items={items} />
      </div>
    </div>
  )
}

function Unoptimized({ items }: { items: number[] }) {
  const [tick, setTick] = useState(0)
  const renders = useRenderCount()

  return (
    <div data-testid="lab-unoptimized" className="border-2 p-4">
      <h3>Unoptimized</h3>
      <TestButton label="Trigger Re-render" onClick={() => setTick(t => t + 1)} />
      <StatusIndicator status="done" />
      <MetricRow renders={renders} />
      <List items={items} />
    </div>
  )
}

function Optimized({ items }: { items: number[] }) {
  const [tick, setTick] = useState(0)
  const renders = useRenderCount()

  return (
    <div data-testid="lab-optimized" className="border-2 p-4">
      <h3>Optimized (memo)</h3>
      <TestButton label="Trigger Re-render" onClick={() => setTick(t => t + 1)} />
      <StatusIndicator status="done" />
      <MetricRow renders={renders} />
      <MemoList items={items} />
    </div>
  )
}