import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '@/firebase'

import { NewProductDTO, ProductDTO, UpdateProductDTO } from '@/model/'
import { isNight } from '@/utils'

export class ProductActions {
  async create(payload: NewProductDTO) {
    try {
      const date = new Date()

      const docRef = doc(db, 'products', payload.typeMenu)
      const docSnap = await getDoc(docRef)

      const formattedPayload = {
        ...payload,
        createdAt: date.toISOString(),
        updatedAt: date.toISOString(),
      }

      if (docSnap.exists()) {
        await updateDoc(docRef, {
          items: [...docSnap.data().items, formattedPayload],
        })
      } else {
        await setDoc(docRef, {
          items: [formattedPayload],
        })
      }

      return docRef
    } catch (error) {
      console.error('Error registering product: ', error)
      throw error
    }
  }

  async update(
    id: string,
    payload: UpdateProductDTO,
  ): Promise<ProductDTO | undefined> {
    try {
      const docRef = doc(db, 'products', id)
      const update = { ...payload, updatedAt: new Date().toISOString() }

      await updateDoc(docRef, update)

      return { ...update, id } as ProductDTO
    } catch (error) {
      console.error(`Error updating product: ${id}`, error)
      throw error
    }
  }

  async getAll(): Promise<ProductDTO[]> {
    try {
      const response = await getDoc(doc(db, `products/${isNight()}`))

      if (!response.exists()) throw new Error('Products not found')
      return response.data().items as ProductDTO[]
    } catch (error) {
      console.error('Error getting products: ', error)
      throw error
    }
  }

  async getById(id: string) {
    try {
      const response = await getDoc(doc(db, 'products', id))

      if (response.exists()) return { ...response.data(), id: response.id }
      else throw new Error(`Product not found: ${id}`)
    } catch (error) {
      console.error('Error getting product: ', error)
      throw error
    }
  }
}
