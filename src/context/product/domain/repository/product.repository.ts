import { IProductEntity } from '../entities/product.entity'

export interface ProductRepository {
  save: (product: IProductEntity) => Promise<IProductEntity>
  update: (product: IProductEntity) => Promise<IProductEntity>
  delete: (id: string) => Promise<void>
  findAll: () => Promise<IProductEntity[]>
  findProduct: (id: string) => Promise<IProductEntity>
}
