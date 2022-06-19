import { IProductEntity } from '../domain/entities/product.entity'
import { ProductRepository } from '../domain/repository/product.repository'

const UpdatedProduct = (ProductRepo: ProductRepository) => async (product: IProductEntity): Promise<IProductEntity> => {
  const products = await ProductRepo.update(product)
  return products
}

export default UpdatedProduct
