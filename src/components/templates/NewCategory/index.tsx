import React from 'react'
import { CategoryForm } from '@/components/organisms'

export const NewCategoryTemplate = () => {
  return (
    <div className="mx-auto my-8 w-[96%] max-w-7xl">
      <h2 className="mb-5 text-2xl font-bold text-gray-900">Nova Categoria</h2>

      <CategoryForm />
    </div>
  )
}
