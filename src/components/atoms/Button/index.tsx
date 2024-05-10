import React, { ButtonHTMLAttributes } from 'react'

const variants = {
  primary: 'text-white bg-[#EA1D2C] shadow-sm',
  secondary: 'text-[#EA1D2C]',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  variant?: keyof typeof variants
}

export const Button = ({
  label,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`rounded-md px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${variants[variant]}`}
    >
      {label}
    </button>
  )
}
