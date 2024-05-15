import React from 'react'
import { CategoryMenu, FoodList } from '@/components/organisms'

const imageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/images/banner.jpeg`

const Banner = () => (
  <picture>
    <img
      className="mx-auto h-[400px] w-full max-w-5xl bg-red-500 object-cover md:my-10 md:rounded-lg"
      src={imageUrl}
      alt="banner"
    />
  </picture>
)

export const HomeTemplate = () => {
  return (
    <main>
      <Banner />
      <CategoryMenu />
      <FoodList />
    </main>
  )
}
