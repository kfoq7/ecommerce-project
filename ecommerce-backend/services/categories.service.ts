import { Category } from '../models'
import { ICategory } from '../types'

export const getCategories = async () => {
  return await Category.find({})
}

export const getCategoryById = async (id: string) => {
  return await Category.findById(id)
}

export const insertCategroy = async (data: ICategory) => {
  return await Category.create(data)
}

export const updateCategoryFrom = async (id: string, data: Partial<ICategory>) => {
  return await Category.findByIdAndUpdate(id, data, { new: true })
}

export const deleteCategoryFrom = async (id: string) => {
  return await Category.findByIdAndDelete(id)
}
