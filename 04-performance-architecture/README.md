# React Performance Architecture Lab

## Overview

A hands-on system to demonstrate and measure real frontend performance optimizations.

---

## Labs

| Lab | Concept |
|-----|--------|
| Rendering | Re-render optimization |
| Memoization | useMemo / stable references |
| Computation | CPU-bound optimization |
| Network | caching + deduplication |
| Images | lazy loading (LCP) |
| Fonts | FCP optimization |
| Code Splitting | lazy imports |
| Deferred JS | async script loading |

---

## Key Features

- Side-by-side comparisons
- Render counters
- Execution timing (ms)
- User-triggered performance tests

---

## How to Use

1. Select a lab
2. Click test button
3. Compare:
   - render count
   - execution time
   - load behavior

---

## Performance Checklist

### Rendering
- [ ] Avoid unnecessary re-renders
- [ ] Memoize values

### Computation
- [ ] Cache expensive work

### Network
- [ ] Cache responses

### Assets
- [ ] Lazy load images
- [ ] Use font-display: swap

### JS
- [ ] Code split
- [ ] Defer non-critical scripts

---

## Core Insight

Performance is not about using tools.

It’s about proving:
- fewer renders
- faster execution
- better load behavior