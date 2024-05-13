export type CategoryDTO = {
  id: string
  typeMenu: 'diurno' | 'noturno'
  name: string
  image: string
  createdAt: string
  updatedAt: string
}

export type NewCategoryDTO = Omit<CategoryDTO, 'id' | 'createdAt' | 'updatedAt'>

export type ResponseCategoryDTO = NewCategoryDTO
export type UpdateCategoryDTO = CategoryDTO
