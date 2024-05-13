import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from 'firebase/firestore'
import { db } from '@/firebase'

import { NewProductDTO, ProductDTO, UpdateProductDTO } from '@/model/'

export class NewProductActions {
  async create(payload: NewProductDTO) {
    try {
      const date = new Date()

      const docRef = await addDoc(collection(db, 'products'), {
        ...payload,
        createdAt: date.toISOString(),
        updatedAt: date.toISOString(),
      })

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
      console.error(`Error updating record: ${id}`, error)
      throw error
    }
  }

  async getAll(): Promise<ProductDTO[]> {
    try {
      const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'))

      const response = await getDocs(q)
      const records = response.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }
      })

      return records as ProductDTO[]
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
