import { Request, Response } from 'express'
import { ProductCreator, FindAllProducts, FindProduct, UpdatedProduct, DeleteProduct } from '../dependency-injection'

export const createProductController = async (req: Request, res: Response): Promise<void> => {
  const { body } = req

  const product = await ProductCreator(body)
  res.json({ product }).status(201)
}

export const findAllProductsController = async (_req: Request, res: Response): Promise<void> => {
  const products = await FindAllProducts()
  res.json({ products }).status(200)
}

export const findProduct = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params
  const product = await FindProduct(id)
  res.json({ product }).status(200)
}

export const updateProduct = async (req: Request, res: Response): Promise<void> => {
  const { body, params } = req
  const { id } = params
  const product = await UpdatedProduct({ id, ...body })
  res.json({ product }).status(200)
}

export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params
  await DeleteProduct(id)
  res.json({ message: 'Product deleted' }).status(204)
}
