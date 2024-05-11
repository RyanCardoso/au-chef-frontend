import React, { InputHTMLAttributes, forwardRef } from 'react'

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  label: string
  placeholder?: string
  options: {
    value: string
    label: string
  }[]
  error?: string
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, placeholder = 'Selecione', options, error, ...props }, ref) => {
    return (
      <div className="sm:col-span-3">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          {label}
          <div className="mt-2">
            <select
              ref={ref}
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              defaultValue=""
              {...props}
            >
              <option value="" disabled>
                {placeholder}
              </option>

              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </label>

        {error && (
          <p className="mt-3 text-sm leading-6 text-[#d76161]">{error}</p>
        )}
      </div>
    )
  },
)

Select.displayName = 'Select'

export { Select }
