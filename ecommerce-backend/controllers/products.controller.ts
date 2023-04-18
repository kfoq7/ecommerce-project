import { NextFunction, Request, Response } from 'express'
import {
  getProducts,
  getProductFrom,
  insertProduct,
  updateProductFrom,
  deleteProductFrom,
  getProductById
} from '../services/products.service'

export const getProductList = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await getProducts()

    res.status(200).json({
      message: 'List products',
      product
    })
  } catch (err) {
    next(err)
  }
}

export const getProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await getProductFrom(req.body)

    res.status(200).json({
      message: 'product found',
      product
    })
  } catch (err) {
    next(err)
  }
}

export const getProductId = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await getProductById(req.params.id)

    res.status(200).json({
      message: 'product found',
      product
    })
  } catch (err) {
    next(err)
  }
}

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await insertProduct(req.body)

    res.status(200).json({
      message: 'Product has been added',
      product
    })
  } catch (err) {
    next(err)
  }
}

export const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await updateProductFrom(req.params.id, req.body)

    res.status(200).json({
      message: 'Product updated success',
      product
    })
  } catch (err) {
    next(err)
  }
}

export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await deleteProductFrom(req.params.id)

    res.status(200).json({
      message: 'Product deleted',
      product
    })
  } catch (err) {
    next(err)
  }
}
