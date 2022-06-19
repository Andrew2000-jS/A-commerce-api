import { IProductEntity } from '../domain/entities/product.entity'
import { ProductRepository } from '../domain/repository/product.repository'

const FindAllProducts = (ProductRepo: ProductRepository) => async (): Promise<IProductEntity[]> => {
  const products = await ProductRepo.findAll()
  return products
}

export default FindAllProducts
