import { useState, useEffect } from 'react'
import { LabExplanation } from '../shared/LabExplanation'
import { MetricRow } from '../shared/MetricRow'
import { StatusIndicator } from '../shared/StatusIndicator'
import { TestButton } from '../shared/TestButton'
import { useRenderCount } from '../shared/useRenderCount'

export function FontLab() {
  return (
    <div>
      <LabExplanation
        title="Font Loading"
        description="Blocking font vs preloaded font"
        expectation="Preloaded font renders text faster"
      />

      <div className="grid grid-cols-2 gap-6">
        <Unoptimized />
        <Optimized />
      </div>
    </div>
  )
}

function Unoptimized() {
  const [loaded, setLoaded] = useState(false)
  const [time, setTime] = useState(0)
  const renders = useRenderCount()

  function run() {
    const start = performance.now()
    setTimeout(() => {
      setLoaded(true)
      setTime(Math.round(performance.now() - start))
    }, 1200)
  }

  return (
    <div data-testid="lab-unoptimized" className="border-2 border-red-400 p-4">
      <h3>Blocking Font</h3>
      <TestButton label="Load Font" onClick={run} />
      <StatusIndicator status={loaded ? 'done' : 'idle'} />
      <MetricRow time={time} renders={renders} />

      {loaded && <p style={{ fontFamily: 'serif' }}>Text rendered</p>}
    </div>
  )
}

function Optimized() {
  const [loaded, setLoaded] = useState(false)
  const [time, setTime] = useState(0)
  const renders = useRenderCount()

  useEffect(() => {
    // simulate preload
    setTimeout(() => setLoaded(true), 200)
  }, [])

  function run() {
    const start = performance.now()
    setLoaded(true)
    setTime(Math.round(performance.now() - start))
  }

  return (
    <div data-testid="lab-optimized" className="border-2 border-green-400 p-4">
      <h3>Preloaded Font</h3>
      <TestButton label="Render Text" onClick={run} />
      <StatusIndicator status={loaded ? 'done' : 'idle'} />
      <MetricRow time={time} renders={renders} />

      {loaded && <p className="font-sans">Text rendered instantly</p>}
    </div>
  )
}