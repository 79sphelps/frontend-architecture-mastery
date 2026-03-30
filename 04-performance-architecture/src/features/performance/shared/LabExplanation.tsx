type LabExplanationProps = {
  title: string
  description: string
  expectation: string
}

export function LabExplanation({
  title,
  description,
  expectation,
}: LabExplanationProps) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <p className="text-sm mt-2 text-blue-600">{expectation}</p>
    </div>
  )
}