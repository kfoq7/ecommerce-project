import {
  deleteCategoryFrom,
  getCategories,
  getCategoryById,
  insertCategroy,
  updateCategoryFrom
} from '@/services/categories.service'
import { Request, Response, NextFunction } from 'express'

export const getCategoryList = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const category = await getCategories()

    res.status(200).json({
      messega: 'Category list',
      category
    })
  } catch (err) {
    next(err)
  }
}

export const getCategoryId = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await getCategoryById(req.params.id)

    res.status(200).json({
      message: 'product found',
      product
    })
  } catch (err) {
    next(err)
  }
}

export const createCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await insertCategroy(req.body)

    res.status(200).json({
      message: 'Product has been added',
      product
    })
  } catch (err) {
    next(err)
  }
}

export const updateCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await updateCategoryFrom(req.params.id, req.body)

    res.status(200).json({
      message: 'Product updated success',
      product
    })
  } catch (err) {
    next(err)
  }
}

export const deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await deleteCategoryFrom(req.params.id)

    res.status(200).json({
      message: 'Product deleted',
      product
    })
  } catch (err) {
    next(err)
  }
}
