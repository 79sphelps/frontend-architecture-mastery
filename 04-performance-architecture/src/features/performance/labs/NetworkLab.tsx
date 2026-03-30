import { useState } from 'react'
import { LabExplanation } from '../shared/LabExplanation'
import { StatusIndicator } from '../shared/StatusIndicator'
import { MetricRow } from '../shared/MetricRow'
import { TestButton } from '../shared/TestButton'
import { useRenderCount } from '../shared/useRenderCount'

async function slowFetch() {
  await new Promise(r => setTimeout(r, 1000))
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  return res.json()
}

export function NetworkLab() {
  return (
    <div>
      <LabExplanation
        title="Network Performance"
        description="Compare repeated API calls vs caching"
        expectation="Optimized should return instantly after first request"
      />

      <div className="grid grid-cols-2 gap-6">
        <Unoptimized />
        <Optimized />
      </div>
    </div>
  )
}

function Unoptimized() {
  const [status, setStatus] = useState<'idle'|'running'|'done'>('idle')
  const [time, setTime] = useState(0)
  const renders = useRenderCount()

  async function run() {
    setStatus('running')
    const start = performance.now()
    await slowFetch()
    setTime(Math.round(performance.now() - start))
    setStatus('done')
  }

  return (
    <div data-testid="lab-unoptimized" className="border-2 border-red-400 p-4">
      <h3>No Cache (Always Slow)</h3>
      <TestButton label="Fetch Data" onClick={run} />
      <StatusIndicator status={status} />
      <MetricRow time={time} renders={renders} cache="MISS" />
    </div>
  )
}

const cache = new Map<string, any>()

function Optimized() {
  const [status, setStatus] = useState<'idle'|'running'|'done'>('idle')
  const [time, setTime] = useState(0)
  const [cacheState, setCacheState] = useState('MISS')
  const renders = useRenderCount()

  async function run() {
    setStatus('running')
    const start = performance.now()

    if (cache.has('data')) {
      setCacheState('HIT')
      cache.get('data')
    } else {
      setCacheState('MISS')
      const d = await slowFetch()
      cache.set('data', d)
    }

    setTime(Math.round(performance.now() - start))
    setStatus('done')
  }

  return (
    <div data-testid="lab-optimized" className="border-2 border-green-400 p-4">
      <h3>Cached (Fast After First)</h3>
      <TestButton label="Fetch Data" onClick={run} />
      <StatusIndicator status={status} />
      <MetricRow time={time} renders={renders} cache={cacheState} />
    </div>
  )
}