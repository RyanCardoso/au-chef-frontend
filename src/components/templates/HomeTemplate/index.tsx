import React from 'react'

import { CategoryMenu, FoodList } from '@/components/organisms'

export const HomeTemplate = () => {
  return (
    <div>
      <div className="mx-auto my-10 h-[400px] w-full max-w-5xl rounded-lg bg-red-500" />
      <CategoryMenu />
      <FoodList />
    </div>
  )
}
