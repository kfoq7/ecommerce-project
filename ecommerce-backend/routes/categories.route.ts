import {
  createCategory,
  deleteCategory,
  getCategoryId,
  getCategoryList,
  updateCategory
} from '../controllers/categories.controller'
import express from 'express'

const router = express.Router()

router.get('/', getCategoryList)

router.get('/:id', getCategoryId)

router.post('/', createCategory)

router.put('/:id', updateCategory)

router.delete('/:id', deleteCategory)

export { router }
