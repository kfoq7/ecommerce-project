import { Types } from 'mongoose'

export interface IProduct {
  title: string
  description: string
  price: number
  images: string[]
  category?: Types.ObjectId
  properties: unknown
}

export interface ICategory {
  name: string
  parent?: Types.ObjectId
  properties: unknown
}
