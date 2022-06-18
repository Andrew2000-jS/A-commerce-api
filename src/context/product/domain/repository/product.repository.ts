import { IProductEntity } from '../entities/product.entity'

export interface ProductRepository {
  save: (product: IProductEntity) => Promise<IProductEntity>
}
