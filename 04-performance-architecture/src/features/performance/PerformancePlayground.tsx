import { useState } from 'react'
import { motion } from 'framer-motion'

import { RenderingLab } from './labs/RenderingLab'
import { MemoizationLab } from './labs/MemoizationLab'
import { ComputationLab } from './labs/ComputationLab'
import { NetworkLab } from './labs/NetworkLab'
import { ImageLab } from './labs/ImageLab'
import { FontLab } from './labs/FontLab'
import { CodeSplitLab } from './labs/CodeSplitLab'
import { DeferredJsLab } from './labs/DeferredJsLab'

type Lab =
  | 'render'
  | 'memo'
  | 'compute'
  | 'network'
  | 'image'
  | 'font'
  | 'code'
  | 'defer'

const LABS: Record<Lab, string> = {
  render: 'Rendering',
  memo: 'Memoization',
  compute: 'Computation',
  network: 'Network',
  image: 'Images (LCP)',
  font: 'Fonts (FCP)',
  code: 'Code Splitting',
  defer: 'Deferred JS',
}

export function PerformancePlayground() {
  const [active, setActive] = useState<Lab>('render')

  return (
    <main className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        React Performance Architecture Lab
      </h1>

      <nav className="flex flex-wrap gap-2 mb-6">
        {Object.entries(LABS).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActive(key as Lab)}
            aria-pressed={active === key}
            className={`px-4 py-2 border rounded-lg ${
              active === key ? 'bg-black text-white' : ''
            }`}
          >
            {label}
          </button>
        ))}
      </nav>

      <motion.section
        key={active}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {active === 'render' && <RenderingLab />}
        {active === 'memo' && <MemoizationLab />}
        {active === 'compute' && <ComputationLab />}
        {active === 'network' && <NetworkLab />}
        {active === 'image' && <ImageLab />}
        {active === 'font' && <FontLab />}
        {active === 'code' && <CodeSplitLab />}
        {active === 'defer' && <DeferredJsLab />}
      </motion.section>
    </main>
  )
}