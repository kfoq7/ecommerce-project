import { ICategory } from '@/types'
import { Schema, Types, model } from 'mongoose'

const categorySchema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: true
    },
    parent: {
      type: Types.ObjectId,
      ref: 'category'
    },
    properties: {
      type: Object
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const Category = model<ICategory>('category', categorySchema)

export default Category
