import { useState, useMemo } from 'react'
import { PerformanceCard } from '../shared/PerformanceCard'
import { TestButton } from '../shared/TestButton'
import { usePerformanceTimer } from '../shared/usePerformanceTimer'
import { RenderCounter } from '../shared/RenderCounter'

function heavy(n: number) {
  let t = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      t += Math.sqrt(i * j)
    }
  }
  return t
}

function Unoptimized() {
  const [input, setInput] = useState(200)
  const timer = usePerformanceTimer()

  function run() {
    timer.start()
    heavy(input)
    timer.end()
  }

  return (
    <PerformanceCard title="Unoptimized">
      <TestButton label="Run" onClick={run} />
      <RenderCounter label="renders" />
      <p>{timer.time} ms</p>
    </PerformanceCard>
  )
}

function Optimized() {
  const [trigger, setTrigger] = useState(0)
  const timer = usePerformanceTimer()

  const result = useMemo(() => {
    timer.start()
    const r = heavy(200)
    timer.end()
    return r
  }, [trigger])

  return (
    <PerformanceCard title="Optimized">
      <TestButton label="Run Computation" aria-label="run-computation-unoptimized" onClick={() => setTrigger(t => t + 1)} />
      <RenderCounter label="renders" />
      <p>{timer.time} ms</p>
      <p>{result}</p>
    </PerformanceCard>
  )
}

export function ComputationLab() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <Unoptimized />
      <Optimized />
    </div>
  )
}