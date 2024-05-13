import React from 'react'
import { FoodCard } from '@/components/molecules'
import { data, dataCategory } from './helpers/data.mock'

export const FoodList = () => {
  return (
    <section className="mx-auto flex w-[96%] max-w-5xl flex-col justify-start gap-10">
      {dataCategory.map((category) => (
        <div key={category} id={category}>
          <h2 className="mb-4 text-2xl font-bold text-[#EA1D2C]">{category}</h2>

          <div className="flex flex-wrap justify-between gap-5">
            {data.map((food) => {
              if (food.category.includes(category))
                return <FoodCard key={category + food.id} {...food} />

              return null
            })}
          </div>
        </div>
      ))}
    </section>
  )
}
