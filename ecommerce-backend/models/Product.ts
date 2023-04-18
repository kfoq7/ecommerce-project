import { IProduct } from '../types'
import { model, Schema } from 'mongoose'

const productSchema = new Schema<IProduct>(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const Product = model<IProduct>('product', productSchema)

export default Product
