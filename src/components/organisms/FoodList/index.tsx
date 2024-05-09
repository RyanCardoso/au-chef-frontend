import React from 'react'
import { FoodCard } from '@/components/molecules'
import { data } from './helpers/data.mock'

export const FoodList = () => {
  return (
    <div className="flex flex-wrap justify-evenly gap-5">
      {data.map((food) => (
        <FoodCard
          key={food.id}
          title={food.title}
          description={food.description}
          price={food.price}
          img={food.img}
        />
      ))}
    </div>
  )
}
