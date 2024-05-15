'use client'

import React from 'react'

import { useProduct } from '@/context'
import { replaceSpaces } from '@/utils'
import { FoodCard } from '@/components/molecules'

export const FoodList = () => {
  const { loadingData, productData, currentCategories } = useProduct()

  if (loadingData) return null

  return (
    <section className="mx-auto flex w-[96%] max-w-5xl flex-col justify-start gap-10">
      {currentCategories().map((category) => (
        // All category names are unique
        <div key={category.name} id={replaceSpaces(category.name)}>
          <h2 className="mb-4 text-2xl font-bold text-[#EA1D2C]">
            {category.name}
          </h2>

          <div className="flex flex-wrap justify-between gap-5">
            {productData?.map((food) => {
              if (food.category.includes(category.name))
                return (
                  <FoodCard
                    key={category.createdAt + food.createdAt}
                    title={food.name}
                    price={food.price}
                    img={food.image}
                    description={food.description}
                  />
                )

              return null
            })}
          </div>
        </div>
      ))}
    </section>
  )
}
