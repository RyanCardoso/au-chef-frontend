import React from 'react'
import { dataCategory } from '../FoodList/helpers/data.mock'

export const CategoryMenu = () => {
  return (
    <section className="sticky top-[96px] bg-[#f5f5f5]">
      <ul className="mx-auto mb-2 flex w-[96%] max-w-5xl items-center gap-5 overflow-x-scroll px-1 py-2">
        {dataCategory.map((category) => (
          <li key={category}>
            <a
              href={`#${category}`}
              className="relative flex min-h-16 w-auto min-w-36 cursor-pointer select-none items-center justify-center overflow-hidden rounded-xl bg-red-500 bg-[url('https://images.elle.com.br/2022/08/QyNCi7Xn-origin-34-scaled.jpg')] bg-cover p-3.5"
            >
              <div className="absolute h-full w-full bg-gradient-to-r from-[#000000d6] to-[#00000053] " />
              <p className="z-10 text-lg text-white">{category}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
