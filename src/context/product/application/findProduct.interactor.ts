import { IProductEntity } from '../domain/entities/product.entity'
import { ProductRepository } from '../domain/repository/product.repository'

const FindProduct = (ProductRepo: ProductRepository) => async (id: string): Promise<IProductEntity> => {
  const product = await ProductRepo.findProduct(id)
  return product
}

export default FindProduct
