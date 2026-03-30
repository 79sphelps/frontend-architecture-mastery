export function TestButton({
  onClick,
  label,
}: {
  onClick: () => void
  label: string
}) {
  return (
    <button
      onClick={onClick}
      className="border px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
    >
      {label}
    </button>
  )
}