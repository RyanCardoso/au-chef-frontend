export type CategoryItemsDTO = {
  id: string
  typeMenu: 'diurno' | 'noturno'
  name: string
  image: string
  createdAt: string
  updatedAt: string
}

export type NewCategoryDTO = Omit<
  CategoryItemsDTO,
  'id' | 'createdAt' | 'updatedAt'
>

export type CategoryDTO = {
  typeMenu: 'diurno' | 'noturno'
  items: CategoryItemsDTO[]
}

export type UpdateCategoryDTO = CategoryItemsDTO
