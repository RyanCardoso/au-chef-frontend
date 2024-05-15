import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from 'firebase/firestore'
import { db } from '@/firebase'

import {
  NewCategoryDTO,
  UpdateCategoryDTO,
  CategoryItemsDTO,
  CategoryDTO,
} from '@/model/'

export class CategoryActions {
  async create({ typeMenu, ...payload }: NewCategoryDTO) {
    try {
      const date = new Date()

      const docRef = doc(db, 'categories', typeMenu)
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
          typeMenu,
          items: [formattedPayload],
        })
      }

      return docRef
    } catch (error) {
      console.error('Error registering category: ', error)
      throw error
    }
  }

  async update(
    id: string,
    payload: UpdateCategoryDTO,
  ): Promise<CategoryItemsDTO | undefined> {
    try {
      const docRef = doc(db, `categories/${payload.typeMenu}`, id)
      const update = { ...payload, updatedAt: new Date().toISOString() }

      await updateDoc(docRef, update)

      return { ...update, id } as CategoryItemsDTO
    } catch (error) {
      console.error(`Error updating category: ${id}`, error)
      throw error
    }
  }

  async getAll(): Promise<CategoryDTO[]> {
    try {
      const q = collection(db, 'categories')

      const response = await getDocs(q)

      const records = response.docs.map((doc) => {
        return { ...doc.data() /* , id: doc.id */ }
      })

      return records as CategoryDTO[]
    } catch (error) {
      console.error('Error getting categories: ', error)
      throw error
    }
  }

  async getById(id: string) {
    try {
      const response = await getDoc(doc(db, 'categories', id))

      if (response.exists()) return { ...response.data(), id: response.id }
      else throw new Error(`Category not found: ${id}`)
    } catch (error) {
      console.error('Error getting category: ', error)
      throw error
    }
  }
}
