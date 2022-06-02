import { Product } from '../model/product.model'
import { ProductRepository } from '../repository/product.repository'

export const saveProduct = async (productRepositiory: ProductRepository, reqInfo: any): Promise<Product> => {
  const newProduct: Product = {
    id: reqInfo.id,
    title: reqInfo.title,
    description: reqInfo.description,
    price: reqInfo.price,
    category: reqInfo.category
  }

  const savedProduct = await productRepositiory.save(newProduct)
  return savedProduct
}
