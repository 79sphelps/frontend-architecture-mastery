import { useState, useMemo } from 'react'
import { LabExplanation } from '../shared/LabExplanation'
import { StatusIndicator } from '../shared/StatusIndicator'
import { MetricRow } from '../shared/MetricRow'
import { TestButton } from '../shared/TestButton'
import { usePerformanceTimer } from '../shared/usePerformanceTimer'

function heavy(n: number) {
  let t = 0
  for (let i = 0; i < n * 100000; i++) t += i
  return t
}

export function MemoizationLab() {
  return (
    <div>
      <LabExplanation
        title="Memoization Lab"
        description="Avoid recomputation when inputs don't change"
        expectation="Optimized should show cache HIT when re-running with same input"
      />

      <div className="grid grid-cols-2 gap-6">
        <Unoptimized />
        <Optimized />
      </div>
    </div>
  )
}

function Unoptimized() {
  const [input, setInput] = useState(5)
  const [status, setStatus] = useState<'idle' | 'running' | 'done'>('idle')
  const timer = usePerformanceTimer()

  function run() {
    setStatus('running')
    timer.start()
    heavy(input)
    timer.end()
    setStatus('done')
  }

  return (
    <div data-testid="lab-unoptimized" className="border-2 p-4">
      <h3>Unoptimized</h3>
      <input type="number" value={input} onChange={e => setInput(Number(e.target.value))} />
      <TestButton label="Run" onClick={run} />
      <StatusIndicator status={status} />
      <MetricRow time={timer.time} cache="MISS" />
    </div>
  )
}

function Optimized() {
  const [input, setInput] = useState(5)
  const [trigger, setTrigger] = useState(0)
  const timer = usePerformanceTimer()
  const [cacheState, setCacheState] = useState('MISS')

  const result = useMemo(() => {
    setCacheState('MISS')
    timer.start()
    const r = heavy(input)
    timer.end()
    return r
  }, [input])

  function run() {
    setCacheState('HIT')
    setTrigger(t => t + 1)
  }

  return (
    <div data-testid="lab-optimized" className="border-2 p-4">
      <h3>Optimized</h3>
      <input type="number" value={input} onChange={e => setInput(Number(e.target.value))} />
      <TestButton label="Run" onClick={run} />
      <StatusIndicator status="done" />
      <MetricRow time={timer.time} cache={cacheState} />
      <p>{result}</p>
    </div>
  )
}