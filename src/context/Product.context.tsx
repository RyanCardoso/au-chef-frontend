'use client'

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { usePathname } from 'next/navigation'

import { CategoryDTO, CategoryItemsDTO, ProductDTO } from '@/model'
import { CategoryActions, ProductActions } from '@/firebase'
import { isNight } from '@/utils'

export interface ProdcutProviderProps {
  children: React.ReactNode
}

export interface ProductContextData {
  productData: ProductDTO[] | null
  categoriesData: CategoryDTO[] | null
  loadingData: boolean
  fetchProducts: () => void
  fetchCategories: () => void
  currentCategories: () => CategoryItemsDTO[]
}

const ProductContext = createContext<ProductContextData>(
  {} as ProductContextData,
)

const ProdcutProvider: React.FC<ProdcutProviderProps> = ({ children }) => {
  const [loadingData, setLoadingData] = useState<boolean>(true)
  const [productData, setProductData] = useState<ProductDTO[] | null>(null)
  const [categoriesData, setCategoriesData] = useState<CategoryDTO[] | null>(
    null,
  )

  const pathname = usePathname()

  const productActions = useMemo(() => new ProductActions(), [])
  const categoryActions = useMemo(() => new CategoryActions(), [])

  const fetchProducts = useCallback(async () => {
    const products = await productActions.getAll()
    setProductData(products)
  }, [productActions])

  const fetchCategories = useCallback(async () => {
    const categories = await categoryActions.getAll()
    setCategoriesData(categories)
  }, [categoryActions])

  const currentCategories = useCallback(() => {
    const findCategory = categoriesData?.find(
      (category) => category.typeMenu === isNight(),
    )

    if (!findCategory) return []

    return findCategory.items
  }, [categoriesData])

  useEffect(() => {
    Promise.all([fetchProducts(), fetchCategories()]).finally(() => {
      setLoadingData(false)
    })
  }, [fetchProducts, fetchCategories, pathname])

  return (
    <ProductContext.Provider
      value={{
        productData,
        categoriesData,
        loadingData,
        fetchProducts,
        fetchCategories,
        currentCategories,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

function useProduct() {
  const context = useContext(ProductContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.')
  }

  return context
}

export { ProdcutProvider, useProduct }
