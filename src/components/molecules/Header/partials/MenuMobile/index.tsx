import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { menuOptions } from '../../helpers'

interface MenuMobileProps {
  isMenuOpen: boolean
  onClose: () => void
}

export const MenuMobile = ({ isMenuOpen, onClose }: MenuMobileProps) => {
  const pathname = usePathname()

  return (
    <div
      className={`fixed bottom-0 h-[100vh] w-full items-center bg-[#ea1d2c] transition-all md:hidden ${isMenuOpen ? 'left-0' : 'left-[100%]'}`}
    >
      <button className="absolute left-4 top-4" onClick={onClose}>
        <svg
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ffffff"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <ul className="flex h-full w-full flex-col items-center justify-center gap-4">
        {menuOptions.map((option) => (
          <li key={option.name + option.path}>
            <Link
              href={option.path}
              className={`rounded px-2 py-1 text-base font-bold ${pathname === option.path ? 'bg-white text-[#ea1d2c]' : 'text-[#ffffff]'}`}
              onClick={onClose}
            >
              {option.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
