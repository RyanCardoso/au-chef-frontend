import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { menuOptions } from '../../helpers'

export const Menu = () => {
  const pathname = usePathname()

  return (
    <ul className="hidden items-center justify-center gap-4 md:flex">
      {menuOptions.map((option) => (
        <li key={option.name + option.path}>
          <Link
            href={option.path}
            className={`rounded px-2 py-1 text-base font-bold ${pathname === option.path ? 'bg-white text-[#ea1d2c]' : 'text-[#ffffff]'}`}
          >
            {option.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
