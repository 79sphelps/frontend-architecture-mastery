import { useState } from 'react'
import { LabExplanation } from '../shared/LabExplanation'
import { StatusIndicator } from '../shared/StatusIndicator'
import { MetricRow } from '../shared/MetricRow'
import { TestButton } from '../shared/TestButton'

const IMG = 'https://picsum.photos/2000/1200'

export function ImageLab() {
  return (
    <div>
      <LabExplanation
        title="Image Loading"
        description="Lazy loading improves perceived performance"
        expectation="Lazy image loads only when triggered"
      />

      <div className="grid grid-cols-2 gap-6">
        <Panel lazy={false} />
        <Panel lazy />
      </div>
    </div>
  )
}

function Panel({ lazy }: { lazy: boolean }) {
  const [status, setStatus] = useState<'idle'|'running'|'done'>('idle')
  const [time, setTime] = useState(0)

  function run() {
    setStatus('running')
  }

  return (
    <div className="border-2 p-4">
      <h3>{lazy ? 'Lazy' : 'No Lazy'}</h3>
      <TestButton label="Load Image" onClick={run} />
      <StatusIndicator status={status} />

      {status !== 'idle' && (
        <img
          src={IMG}
          loading={lazy ? 'lazy' : 'eager'}
          onLoad={() => {
            setTime(performance.now())
            setStatus('done')
          }}
        />
      )}

      <MetricRow time={time} />
    </div>
  )
}