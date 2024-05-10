import React, { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  className?: string
}

export const Input = ({ label, className, ...props }: InputProps) => {
  return (
    <div className={`col-span-full ${className}`}>
      <label
        htmlFor="first-name"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>

      <div className="mt-2">
        <input
          {...props}
          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  )
}
