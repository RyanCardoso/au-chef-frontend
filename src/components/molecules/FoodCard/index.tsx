import React from 'react'
import Image from 'next/image'

import { maskPrice } from '@/utils'

interface FoodCardProps {
  title: string
  description: string
  price: number
  img: string
}

export const FoodCard = ({ title, description, price, img }: FoodCardProps) => {
  return (
    <div className="w-[500px] rounded-lg border bg-white p-2.5 shadow">
      <div className="flex justify-between gap-5">
        <div className="flex flex-col justify-between">
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="mt-1 line-clamp-3 overflow-hidden text-ellipsis text-sm">
            {description}
          </p>

          <p className="mt-3 text-sm font-medium">{maskPrice(price)}</p>
        </div>

        <figure className="max-h-36	max-w-36">
          <Image
            className="h-full w-full rounded-lg object-cover"
            width={400}
            height={400}
            src={img}
            alt=""
          />
        </figure>
      </div>
    </div>
  )
}
