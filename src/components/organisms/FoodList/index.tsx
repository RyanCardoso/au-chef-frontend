import React from 'react'
import { FoodCard } from '@/components/molecules'
import { data, dataCategory } from './helpers/data.mock'

export const FoodList = () => {
  return (
    <div className="mx-auto flex max-w-5xl flex-col justify-start gap-10">
      {dataCategory.map((category) => (
        <div key={category}>
          <h2 className="bg-red-500 pb-2 text-2xl">{category}</h2>

          <div className="flex flex-wrap justify-between gap-5">
            {data.map((food) => {
              if (food.category.includes(category))
                return <FoodCard key={category + food.id} {...food} />

              return null
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
