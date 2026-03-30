export function PerformanceCard({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="border rounded-xl p-4 shadow-sm">
      <h3 className="font-semibold mb-2">{title}</h3>
      {children}
    </div>
  )
}