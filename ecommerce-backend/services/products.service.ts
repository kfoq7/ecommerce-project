import { Product } from '../models'
import { IProduct } from '../types'

export const getProducts = async () => {
  return await Product.find({})
}

export const getProductFrom = async (filter: Partial<IProduct>) => {
  return await Product.findOne({ ...filter }).lean()
}

export const getProductById = async (id: string) => {
  return await Product.findById(id)
}

export const insertProduct = async (data: IProduct) => {
  return await Product.create(data)
}

export const updateProductFrom = async (id: string, data: Partial<IProduct>) => {
  return await Product.findByIdAndUpdate(id, data, { new: true })
}

export const deleteProductFrom = async (id: string) => {
  return await Product.findByIdAndDelete(id)
}
