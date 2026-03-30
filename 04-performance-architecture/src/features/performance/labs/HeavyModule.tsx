// export default function HeavyModule() {
//   const data = Array.from({ length: 100000 }, (_, i) => i).reduce(
//     (a, b) => a + b,
//     0
//   )

//   return <div>Heavy Loaded: {data}</div>
// }

export default function HeavyModule() {
  return <div>Heavy Loaded</div>
}