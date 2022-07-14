import { NextFunction, Request, Response } from 'express'
import { ProductCreator, FindAllProducts, FindProduct, UpdatedProduct, DeleteProduct } from '../dependency-injection'

export const createProductController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { body } = req

    const product = await ProductCreator(body)
    res.json({ product }).status(201)
  } catch (error) {
    next(error)
  }
}

export const findAllProductsController = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const products = await FindAllProducts()
    res.json({ products }).status(200)
  } catch (error) {
    next(error)
  }
}

export const findProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params
    const product = await FindProduct(id)
    res.json({ product }).status(200)
  } catch (error) {
    next(error)
  }
}

export const updateProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { body, params } = req
    const { id } = params
    const product = await UpdatedProduct({ id, ...body })
    res.json({ product }).status(200)
  } catch (error) {
    next(error)
  }
}

export const deleteProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params
    await DeleteProduct(id)
    res.json({ message: 'Product deleted' }).status(204)
  } catch (error) {
    next(error)
  }
}
