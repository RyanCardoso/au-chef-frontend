'use client'

import React from 'react'
import { useProduct } from '@/context'
import { replaceSpaces } from '@/utils'

export const CategoryMenu = () => {
  const { currentCategories, loadingData } = useProduct()

  if (loadingData) return null

  return (
    <section className="sticky top-[96px] bg-[#f5f5f5]">
      <ul className="mx-auto mb-2 flex w-[96%] max-w-5xl items-center gap-5 overflow-x-scroll px-1 py-2">
        {currentCategories().map((category) => (
          <li key={category.createdAt}>
            <a
              href={`#${replaceSpaces(category.name)}`}
              className={`relative flex min-h-16 w-auto min-w-36 cursor-pointer select-none items-center justify-center overflow-hidden rounded-xl bg-red-500 bg-cover p-3.5`}
              style={{
                backgroundImage: `url(${category.image})`,
              }}
            >
              <div className="absolute h-full w-full bg-gradient-to-r from-[#000000d6] to-[#00000053] " />
              <p className="z-10 text-lg text-white">{category.name}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
