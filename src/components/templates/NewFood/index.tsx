import React from 'react'
import { FoodForm } from '@/components/organisms'

export const NewFoodTemplate = () => {
  return (
    <div className="mx-auto my-8 max-w-7xl">
      <h2 className="mb-5 text-2xl font-bold text-gray-900">Novo Produto</h2>

      <FoodForm />
    </div>
  )
}
