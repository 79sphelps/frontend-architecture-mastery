/**
 * Logs render timing
 */
export function measureRender(name: string) {
  console.time(name)
  return () => console.timeEnd(name)
}