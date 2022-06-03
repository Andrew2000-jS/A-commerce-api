import { Product } from '../model/product.model'

export interface ProductRepository {
  findAll: () => Promise<Product[]>
  findById: (id: string) => Promise<Product>
  save: (product: Product) => Promise<Product>
  delete: (id: string) => Promise<void>
  update: (product: Product) => Promise<Product>
}
