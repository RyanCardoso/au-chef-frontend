import React, { InputHTMLAttributes } from 'react'

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string
  customClass?: string
}

export const TextArea = ({ label, ...props }: TextAreaProps) => {
  return (
    <div className="col-span-full">
      <label
        htmlFor="about"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>

      <div className="mt-2">
        <textarea
          id="about"
          name="about"
          rows={5}
          className={`block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${props.customClass}`}
          {...props}
        />
      </div>
      <p className="mt-3 text-sm leading-6 text-gray-600">
        * Campo obrigatório.
      </p>
    </div>
  )
}
