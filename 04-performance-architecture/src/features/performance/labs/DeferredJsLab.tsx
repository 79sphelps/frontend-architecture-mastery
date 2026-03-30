import { useState } from 'react'
import { LabExplanation } from '../shared/LabExplanation'
import { MetricRow } from '../shared/MetricRow'
import { StatusIndicator } from '../shared/StatusIndicator'
import { TestButton } from '../shared/TestButton'
import { useRenderCount } from '../shared/useRenderCount'

function block() {
  const start = performance.now()
  while (performance.now() - start < 1000) {}
}

export function DeferredJsLab() {
  return (
    <div>
      <LabExplanation
        title="Deferred JS"
        description="Blocking main thread vs deferring work"
        expectation="Deferred version keeps UI responsive"
      />

      <div className="grid grid-cols-2 gap-6">
        <Blocking />
        <Deferred />
      </div>
    </div>
  )
}

function Blocking() {
  const [done, setDone] = useState(false)
  const [time, setTime] = useState(0)
  const renders = useRenderCount()

  function run() {
    const start = performance.now()
    block()
    setTime(Math.round(performance.now() - start))
    setDone(true)
  }

  return (
    <div className="border-2 border-red-400 p-4">
      <h3>Main Thread Blocked</h3>
      <TestButton label="Run Blocking JS" onClick={run} />
      <StatusIndicator status={done ? 'done' : 'idle'} />
      <MetricRow time={time} renders={renders} />
    </div>
  )
}

function Deferred() {
  const [done, setDone] = useState(false)
  const [time, setTime] = useState(0)
  const renders = useRenderCount()

  function run() {
    const start = performance.now()
    setTimeout(() => {
      block()
      setTime(Math.round(performance.now() - start))
      setDone(true)
    }, 0)
  }

  return (
    <div className="border-2 border-green-400 p-4">
      <h3>Deferred Execution</h3>
      <TestButton label="Run Deferred JS" onClick={run} />
      <StatusIndicator status={done ? 'done' : 'idle'} />
      <MetricRow time={time} renders={renders} />
    </div>
  )
}