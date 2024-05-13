'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Logo from '../../../../public/images/logo_chef.png'
import { Input } from '@/components/atoms'
import { Menu, MenuMobile } from './partials'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const handleCloseMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-[#EA1D2C] p-2">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between">
        <div className="flex flex-1 items-center justify-between gap-8 md:justify-start">
          <Link href="/">
            <Image src={Logo} alt="logo" width={80} height={80} />
          </Link>

          <Menu />

          <button className="md:hidden" onClick={toggleMenu}>
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <MenuMobile isMenuOpen={isMenuOpen} onClose={handleCloseMenu} />

        <div className="hidden md:block">
          <Input placeholder="Pesquisar" className="w-[300px]" />
        </div>
      </nav>
    </header>
  )
}
