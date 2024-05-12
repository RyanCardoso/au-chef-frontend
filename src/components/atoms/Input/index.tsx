import React, { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  className?: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, error, ...props }, ref) => {
    return (
      <div className={`w-full ${className}`}>
        <label
          htmlFor="first-name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>

        <div className="mt-2">
          <input
            ref={ref}
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            {...props}
          />
        </div>

        {error && (
          <p className="mt-3 text-sm leading-6 text-[#d76161]">{error}</p>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'

export { Input }
