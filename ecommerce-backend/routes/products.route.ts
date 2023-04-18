import { Router } from 'express'
import {
  createProduct,
  getProductList,
  getProduct,
  getProductId,
  updateProduct,
  deleteProduct
} from '../controllers/products.controller'

const router = Router()

router.get('/', getProductList)

router.get('/filter', getProduct)

router.get('/:id', getProductId)

router.post('/', createProduct)

router.put('/:id', updateProduct)

router.delete('/:id', deleteProduct)

export { router }
