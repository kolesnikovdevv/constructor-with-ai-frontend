interface ParameterFieldProps {
  title: string
  value: string | number
}

export const ParameterField: React.FC<ParameterFieldProps> = ({
  title,
  value,
}) => {
  return (
    <div className="flex justify-between items-center w-full mb-2">
      <div className="opacity-50 parameter-field-title">{title}</div>
      <div className="rounded-lg p-1 parameter-field-value flex items-center justify-center bg-shark w-1/2">
        {value}
      </div>
    </div>
  )
}
