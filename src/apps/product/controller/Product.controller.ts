import { Request, Response } from 'express'
import ProductCreator from '../../../context/product/application'

export const productController = async (req: Request, res: Response): Promise<void> => {
  const { body } = req

  const product = await ProductCreator(body)
  res.json({ msg: 'created', item: product }).status(201)
}
