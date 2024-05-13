export type ProductDTO = {
  id: string
  typeMenu: 'diurno' | 'noturno'
  category: string
  name: string
  description: string
  price: number
  discount?: number
  image: string
  createdAt: string
  updatedAt: string
}

export type NewProductDTO = Omit<ProductDTO, 'id' | 'createdAt' | 'updatedAt'>

export type UpdateProductDTO = ProductDTO
