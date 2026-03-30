import { useState, lazy, Suspense } from 'react'
import { LabExplanation } from '../shared/LabExplanation'
import { StatusIndicator } from '../shared/StatusIndicator'
import { MetricRow } from '../shared/MetricRow'
import { TestButton } from '../shared/TestButton'
import { useRenderCount } from '../shared/useRenderCount'

const LazyComp = lazy(() => import('./HeavyModule'))

export function CodeSplitLab() {
  return (
    <div>
      <LabExplanation
        title="Code Splitting"
        description="Blocking bundle vs lazy loading"
        expectation="Lazy load delays heavy work until needed"
      />

      <div className="grid grid-cols-2 gap-6">
        <Unoptimized />
        <Optimized />
      </div>
    </div>
  )
}

function heavyWork() {
  let t = 0
  for (let i = 0; i < 5e7; i++) t += i
  return t
}

function Unoptimized() {
  const [done, setDone] = useState(false)
  const [time, setTime] = useState(0)
  const renders = useRenderCount()

  function run() {
    const start = performance.now()
    heavyWork()
    setTime(Math.round(performance.now() - start))
    setDone(true)
  }

  return (
    <div data-testid="lab-unoptimized" className="border-2 border-red-400 p-4">
      <h3>Blocking Load</h3>
      <TestButton label="Run Heavy Code" onClick={run} />
      <StatusIndicator status={done ? 'done' : 'idle'} />
      <MetricRow time={time} renders={renders} />
    </div>
  )
}

function Optimized() {
  const [show, setShow] = useState(false)
  const renders = useRenderCount()

  return (
    <div data-testid="lab-optimized" className="border-2 border-green-400 p-4">
      <h3>Lazy Loaded</h3>
      <TestButton label="Load Component" onClick={() => setShow(true)} />
      <StatusIndicator status={show ? 'done' : 'idle'} />
      <MetricRow renders={renders} />

      {show && (
        <Suspense fallback={<p>Loading chunk...</p>}>
          <LazyComp />
        </Suspense>
      )}
    </div>
  )
}